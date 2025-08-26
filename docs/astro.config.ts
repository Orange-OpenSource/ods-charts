import { defineConfig } from 'astro/config';
import { odsCharts } from './src/libs/astro';

export default defineConfig({
  integrations: [odsCharts()],
  markdown: {
    smartypants: false,
    syntaxHighlight: 'prism',
  },
});
