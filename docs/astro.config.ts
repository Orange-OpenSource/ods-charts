import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    smartypants: false,
    syntaxHighlight: 'prism',
  },
});
