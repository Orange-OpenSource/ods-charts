import fs from 'node:fs';
import path from 'node:path';

const START_YEAR = 2023;
const CURRENT_YEAR = new Date().getFullYear();
const SOURCE_ROOT = path.resolve('src');
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.mts', '.cts']);

const SOURCE_HEADER_REGEX =
  /^\uFEFF?\/\/\s*\r?\n\/\/ Software Name: Orange Design System Charts\r?\n\/\/ SPDX-FileCopyrightText: Copyright \(c\) 2023 - \d{4} Orange SA\r?\n\/\/ SPDX-License-Identifier: MIT\r?\n\/\/\r?\n\/\/ This software is distributed under the MIT license\.\r?\n\/\/\r?\n?/;

function getExpectedHeader(eol) {
  return [
    '//',
    '// Software Name: Orange Design System Charts',
    `// SPDX-FileCopyrightText: Copyright (c) ${START_YEAR} - ${CURRENT_YEAR} Orange SA`,
    '// SPDX-License-Identifier: MIT',
    '//',
    '// This software is distributed under the MIT license.',
    '//',
    '',
  ].join(eol);
}

function detectEol(content) {
  return content.includes('\r\n') ? '\r\n' : '\n';
}

function walkFiles(dirPath, filePaths = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name.startsWith('.')) {
        continue;
      }
      walkFiles(fullPath, filePaths);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
      filePaths.push(fullPath);
    }
  }

  return filePaths;
}

function normalizeHeader(content) {
  const eol = detectEol(content);
  const hadBom = content.startsWith('\uFEFF');
  const contentWithoutHeader = content.replace(SOURCE_HEADER_REGEX, '');
  const expectedHeader = getExpectedHeader(eol);
  const normalizedContent = `${hadBom ? '\uFEFF' : ''}${expectedHeader}${contentWithoutHeader}`;

  return {
    normalizedContent,
    hadHeader: SOURCE_HEADER_REGEX.test(content),
  };
}

function run() {
  if (!fs.existsSync(SOURCE_ROOT)) {
    console.error(`Source directory not found: ${SOURCE_ROOT}`);
    process.exit(1);
  }

  const sourceFiles = walkFiles(SOURCE_ROOT);
  let updatedCount = 0;

  for (const filePath of sourceFiles) {
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const { normalizedContent } = normalizeHeader(originalContent);

    if (normalizedContent !== originalContent) {
      fs.writeFileSync(filePath, normalizedContent, 'utf8');
      updatedCount += 1;
      console.log(`Updated header: ${path.relative(process.cwd(), filePath)}`);
    }
  }

  console.log(`\nSource header sync completed. Files checked: ${sourceFiles.length}, updated: ${updatedCount}.`);
}

run();
