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
  --exclude <value>       Exclude features whose CONTINENT equals this value (repeatable)
  -h, --help              Show this help

Example:
  npm run geojson:simplify -- world.geojson world-small.geojson --precision 2 --decimation 4
`);
}

function parseArguments(args) {
  const positional = [];
  const excludedContinents = [];
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
      if (argument === '--exclude') excludedContinents.push(value);
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

  return { input: positional[0], output: positional[1], precision, decimation, excludedContinents };
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
  if (typeof coords[0] === 'number') {
    return [round(coords[0], precision), round(coords[1], precision)];
  }
  if (typeof coords[0][0] === 'number') {
    return decimateRing(coords, decimation).map((coordinate) => roundCoordinates(coordinate, precision, decimation));
  }
  return coords.map((coordinate) => roundCoordinates(coordinate, precision, decimation));
}

function simplifyGeoJson(inputPath, outputPath, precision, decimation, excludedContinents) {
  const geoJson = JSON.parse(readFileSync(resolve(inputPath), 'utf8'));
  const byContinent = new Map();

  for (const feature of geoJson.features ?? []) {
    const continent = feature.properties?.CONTINENT;
    if (!continent || excludedContinents.includes(continent)) continue;
    const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    if (!byContinent.has(continent)) byContinent.set(continent, []);
    byContinent.get(continent).push(...polygons);
  }

  const result = {
    type: 'FeatureCollection',
    features: [...byContinent.entries()].map(([continent, polygons]) => ({
      type: 'Feature',
      properties: { CONTINENT: continent },
      geometry: {
        type: 'MultiPolygon',
        coordinates: roundCoordinates(polygons, precision, decimation),
      },
    })),
  };

  const serialized = JSON.stringify(result);
  writeFileSync(resolve(outputPath), serialized);
  console.log('Continents:', [...byContinent.keys()]);
  console.log('Output size (bytes):', Buffer.byteLength(serialized));
}

try {
  const options = parseArguments(process.argv.slice(2));
  simplifyGeoJson(options.input, options.output, options.precision, options.decimation, options.excludedContinents);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
