#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DEFAULT_PRECISION = 2;
const DEFAULT_DECIMATION = 4;

function printHelp() {
  console.log(`Usage: ods-simplify-geojson <input> <output> [options]

Options:
  --precision <number>    Decimal places for coordinates (default: ${DEFAULT_PRECISION})
  --decimation <number>   Keep one point out of N on each ring (default: ${DEFAULT_DECIMATION})
  --exclude <property>=<value>
                          Exclude features whose property equals this value (repeatable)
  -h, --help              Show this help

Examples:
  npm run geojson:simplify -- world.geojson world-small.geojson --exclude CONTINENT=Antarctica
  npm run geojson:simplify -- france.geojson france-small.geojson --precision 2 --decimation 4 --exclude code=75 --exclude code=13
`);
}

function parseArguments(args) {
  const positional = [];
  const exclusions = [];
  let precision = DEFAULT_PRECISION;
  let decimation = DEFAULT_DECIMATION;

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === '-h' || argument === '--help') {
      printHelp();
      process.exit(0);
    }
    if (argument === '--precision' || argument === '--decimation' || argument === '--exclude') {
      const value = args[index + 1];
      if (value === undefined) throw new Error(`Missing value for ${argument}`);
      if (argument === '--precision') precision = Number(value);
      if (argument === '--decimation') decimation = Number(value);
      if (argument === '--exclude') {
        const separator = value.indexOf('=');
        if (separator < 1) throw new Error('--exclude must use the format <property>=<value>.');
        const property = value.slice(0, separator);
        const excludedValue = value.slice(separator + 1);
        if (!property) throw new Error('--exclude property name cannot be empty.');
        exclusions.push({ property, value: excludedValue });
      }
      index += 1;
      continue;
    }
    if (argument.startsWith('-')) throw new Error(`Unknown option: ${argument}`);
    positional.push(argument);
  }

  if (positional.length !== 2) {
    throw new Error('Input and output GeoJSON paths are required. Use --help for usage.');
  }
  if (!Number.isInteger(precision) || precision < 0) {
    throw new Error('--precision must be a non-negative integer.');
  }
  if (!Number.isInteger(decimation) || decimation < 1) {
    throw new Error('--decimation must be a positive integer.');
  }

  return { input: positional[0], output: positional[1], precision, decimation, exclusions };
}

function round(value, precision) {
  return Math.round(value * 10 ** precision) / 10 ** precision;
}

function decimateRing(ring, decimation) {
  if (ring.length <= decimation * 2) return ring;
  const kept = ring.filter((_, index) => index % decimation === 0);
  const last = ring[ring.length - 1];
  const keptLast = kept[kept.length - 1];
  if (keptLast[0] !== last[0] || keptLast[1] !== last[1]) kept.push(last);
  return kept;
}

function roundCoordinates(coords, precision, decimation) {
  if (!Array.isArray(coords) || coords.length === 0) return coords;
  if (typeof coords[0] === 'number') {
    return [round(coords[0], precision), round(coords[1], precision), ...coords.slice(2)];
  }
  if (typeof coords[0][0] === 'number') {
    return decimateRing(coords, decimation).map((coordinate) => roundCoordinates(coordinate, precision, decimation));
  }
  return coords.map((coordinate) => roundCoordinates(coordinate, precision, decimation));
}

function simplifyGeometry(geometry, precision, decimation) {
  if (!geometry) return geometry;
  if (geometry.type === 'GeometryCollection') {
    return {
      ...geometry,
      geometries: geometry.geometries?.map((item) => simplifyGeometry(item, precision, decimation)),
    };
  }
  return {
    ...geometry,
    coordinates: roundCoordinates(geometry.coordinates, precision, decimation),
  };
}

function simplifyGeoJson(inputPath, outputPath, precision, decimation, exclusions) {
  const geoJson = JSON.parse(readFileSync(resolve(inputPath), 'utf8'));
  const features = (geoJson.features ?? [])
    .filter((feature) => !exclusions.some(({ property, value }) => String(feature.properties?.[property]) === value))
    .map((feature) => ({ ...feature, geometry: simplifyGeometry(feature.geometry, precision, decimation) }));

  const result = {
    ...geoJson,
    features,
  };

  const serialized = JSON.stringify(result);
  writeFileSync(resolve(outputPath), serialized);
  console.log('Features:', result.features.length);
  console.log('Output size (bytes):', Buffer.byteLength(serialized));
}

try {
  const options = parseArguments(process.argv.slice(2));
  simplifyGeoJson(options.input, options.output, options.precision, options.decimation, options.exclusions);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
