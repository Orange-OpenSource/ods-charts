import type { AstroIntegration } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { getConfig } from './config';
import { configurePrism } from './prism';

export function odsCharts(): AstroIntegration[] {
  configurePrism();

  return [
    {
      name: 'ods-charts-integration',
      hooks: {
        'astro:config:done': () => {
          if (fs.existsSync(path.join(process.cwd(), 'docs', 'public'))) {
            fs.rmSync(path.join(process.cwd(), 'docs', 'public'), { recursive: true });
          }

          copyStaticRecursively(path.join(process.cwd(), 'docs', 'static'), path.join(process.cwd(), 'docs', 'public'));
        },
      },
    },
  ];
}

function replacePathVersionPlaceholder(name: string) {
  return name.replace('[version]', `${getConfig().docs_version}`);
}

function copyStaticRecursively(source: string, destination: string) {
  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile()) {
      fs.cpSync(path.join(source, entry.name), replacePathVersionPlaceholder(path.join(destination, entry.name)));
    } else if (entry.isDirectory()) {
      fs.mkdirSync(replacePathVersionPlaceholder(path.join(destination, entry.name)), { recursive: true });

      copyStaticRecursively(path.join(source, entry.name), path.join(destination, entry.name));
    }
  }
}
