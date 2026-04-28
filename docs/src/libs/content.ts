import { getCollection } from 'astro:content';

export const examplesPages = await getCollection('examples');
export const useCasesPages = await getCollection('use_cases');

export function getDocsPageSlug(id: string) {
  return id.replace(/\.(md|mdx)$/, '');
}
