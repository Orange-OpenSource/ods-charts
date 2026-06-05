import fs from 'node:fs';
import path from 'node:path';

const START_YEAR = 2023;
const CURRENT_YEAR = new Date().getFullYear();
const DIST_DIR = path.resolve('dist');

const DIST_HEADER_REGEX =
  /^\uFEFF?\/\*!\r?\n \* Software Name: Orange Design System Charts\r?\n \* SPDX-FileCopyrightText: Copyright \(c\) 2023 - \d{4} Orange SA\r?\n \* SPDX-License-Identifier: MIT\r?\n \*\r?\n \* This software is distributed under the MIT license\.\r?\n \*\/\r?\n?/;

function getExpectedHeader(eol) {
  return [
    '/*!',
    ' * Software Name: Orange Design System Charts',
    ` * SPDX-FileCopyrightText: Copyright (c) ${START_YEAR} - ${CURRENT_YEAR} Orange SA`,
    ' * SPDX-License-Identifier: MIT',
    ' *',
    ' * This software is distributed under the MIT license.',
    ' */',
    '',
  ].join(eol);
}

function detectEol(content) {
  return content.includes('\r\n') ? '\r\n' : '\n';
}

function addOrUpdateDistHeader(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf8');
  const eol = detectEol(originalContent);
  const hadBom = originalContent.startsWith('\uFEFF');
  const contentWithoutHeader = originalContent.replace(DIST_HEADER_REGEX, '');
  const expectedHeader = getExpectedHeader(eol);
  const updatedContent = `${hadBom ? '\uFEFF' : ''}${expectedHeader}${contentWithoutHeader}`;

  if (updatedContent !== originalContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated dist header: ${path.relative(process.cwd(), filePath)}`);
  }
}

function copyMinifiedAlias() {
  const sourceFile = path.join(DIST_DIR, 'ods-charts.js');
  const sourceMapFile = path.join(DIST_DIR, 'ods-charts.js.map');
  const minFile = path.join(DIST_DIR, 'ods-charts.min.js');
  const minMapFile = path.join(DIST_DIR, 'ods-charts.min.js.map');

  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Missing source bundle: ${sourceFile}`);
  }

  const sourceContent = fs.readFileSync(sourceFile, 'utf8');
  const minContent = sourceContent.replace(/sourceMappingURL=ods-charts\.js\.map\s*$/m, 'sourceMappingURL=ods-charts.min.js.map');
  fs.writeFileSync(minFile, minContent, 'utf8');

  if (fs.existsSync(sourceMapFile)) {
    fs.copyFileSync(sourceMapFile, minMapFile);
  }

  console.log(`Created minified alias: ${path.relative(process.cwd(), minFile)}`);
}

function run() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Dist directory not found: ${DIST_DIR}`);
    process.exit(1);
  }

  const targetFiles = ['ods-charts.js', 'ods-charts.esm.js', 'ods-charts.cjs.js']
    .map((fileName) => path.join(DIST_DIR, fileName))
    .filter((filePath) => fs.existsSync(filePath));

  if (targetFiles.length === 0) {
    console.error('No dist bundle found to finalize.');
    process.exit(1);
  }

  for (const filePath of targetFiles) {
    addOrUpdateDistHeader(filePath);
  }

  copyMinifiedAlias();
}

run();
