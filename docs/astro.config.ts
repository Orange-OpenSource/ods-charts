import { defineConfig } from 'astro/config';
import { odsCharts } from './src/libs/astro';
import { getConfig } from './src/libs/config';

export default defineConfig({
  build: {
    assets: `${getConfig().docs_version}/assets`,
  },
  integrations: [odsCharts()],
  markdown: {
    smartypants: false,
    syntaxHighlight: 'prism',
  },
});
