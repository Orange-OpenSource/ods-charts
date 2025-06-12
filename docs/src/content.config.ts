// // 1. Import utilities from `astro:content`
// import { defineCollection, z } from 'astro:content';

// // 2. Import loader(s)
// import { glob } from 'astro/loaders';

// // 3. Define your collection(s)
// const examples = defineCollection({
//   loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/examples' }),
//   schema: z.object({
//     title: z.string(),
//   }),
// });
// const useCases = defineCollection({
//   loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/use_cases' }),
//   schema: z.object({
//     title: z.string(),
//   }),
// });

// // 4. Export a single `collections` object to register your collection(s)
// export const collections = { examples, useCases };
