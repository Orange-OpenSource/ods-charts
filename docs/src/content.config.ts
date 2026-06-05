import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const examples = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/examples' }),
  schema: z.object({
    title: z.string(),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/use_cases' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  examples,
  use_cases: useCases,
};
