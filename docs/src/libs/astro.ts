import type { AstroIntegration } from 'astro'
import { configurePrism } from './prism'

export function odsCharts(): AstroIntegration[] {
  configurePrism()

  return []
}