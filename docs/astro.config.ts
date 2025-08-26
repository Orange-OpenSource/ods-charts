import { defineConfig } from 'astro/config';
import { odsCharts } from './src/libs/astro';

export default defineConfig({
  intergrations: [odsCharts()],
  markdown: {
    smartypants: false,
    syntaxHighlight: 'prism',
  },
});
