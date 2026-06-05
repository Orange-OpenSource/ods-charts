import fs from 'node:fs';
import path from 'node:path';

// Year-agnostic: accepts any year values as long as the header block is present.
const SOURCE_HEADER_PRESENCE_REGEX =
  /\/\/ Software Name: Orange Design System Charts\r?\n\/\/ SPDX-FileCopyrightText: Copyright \(c\) \d{4} - \d{4} Orange SA\r?\n\/\/ SPDX-License-Identifier: MIT/;

const SOURCE_ROOT = path.resolve('src');
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.mts', '.cts']);

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

    if (entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
      filePaths.push(fullPath);
    }
  }

  return filePaths;
}

function run() {
  if (!fs.existsSync(SOURCE_ROOT)) {
    console.error(`Source directory not found: ${SOURCE_ROOT}`);
    process.exit(1);
  }

  const sourceFiles = walkFiles(SOURCE_ROOT);
  const missing = [];

  for (const filePath of sourceFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!SOURCE_HEADER_PRESENCE_REGEX.test(content)) {
      missing.push(path.relative(process.cwd(), filePath));
    }
  }

  console.log(`Source header check completed. Files checked: ${sourceFiles.length}, missing header: ${missing.length}.`);

  if (missing.length > 0) {
    console.error('\nThe following files are missing the license header:');
    for (const filePath of missing) {
      console.error(`  ${filePath}`);
    }
    process.exit(1);
  }
}

run();
