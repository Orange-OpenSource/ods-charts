//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

/**
 * Definition of a container used to display legends, refer to {@link ODSChartsTheme.externalizeLegends}.
 *
 * Example of use:
 * ```
 * themeManager.externalizeLegends(
 *   myChart,
 *   [{ legendHolderSelector: '#results_stack_legend', seriesRef: ['result'], orientation: 'vertical' },
 *    { legendHolderSelector: '#goals_stack_legend', seriesRef: ['goals'], orientation: 'vertical' },
 *    { legendHolderSelector: '#line_legend' }]
 * );
 * ```
 *
 * Example with postItemContent:
 * ```
 * themeManager.externalizeLegends(
 *   myChart,
 *   [{ legendHolderSelector: '#legend_with_custom_content',
 *      seriesRef: ['sales'],
 *      orientation: 'horizontal',
 *      postItemContent: '<div class="mt-2 alert alert-info py-1"><small>Additional information</small></div>' }]
 * );
 * ```
 */
export class ODSChartsLegendHolderDefinition {
  constructor(
    /**
     * Legends container CSS selector
     */
    public legendHolderSelector: string,
    /**
     * Optionally indicates whether captions are displayed horizontally or vertically.
     * By default, the value of the `legend.orient` option in Apache ECharts will be used.
     * If `legend.orient` does not exist, the default value will be `'horizontal'`.
     */
    public orientation?: 'vertical' | 'horizontal',
    /**
     * Array referencing the series whose legends are to be displayed in this legend container.
     * The reference can be the series name, the series label or simply the stack name in the case of stacked bars.
     * If `seriesRef` is absent, this container will be the default container for non-referenced legends.
     */
    public seriesRef?: string[],
    /**
     * This option defines HTML content that will be displayed after each individual legend item.
     * It can be:
     * - A function that receives legend information and returns custom HTML content for that specific legend
     * - An object mapping legend labels to their custom HTML content
     * - Un tableau de chaînes de caractères : chaque élément est associé à la légende à la même position (index)
     *
     * Example with dynamic content based on legend information:
     * ```
     * postItemContent: (legendLabel, legendName, legendIndex, color, colorIndex) => {
     *   if (legendLabel === 'Sales') {
     *     return `<div class="mt-2 p-2 bg-light rounded border-start border-3 border-primary">
     *              <small class="text-muted">${legendName} (${legendIndex + 1})</small>
     *            </div>`;
     *   }
     *   if (legendLabel === 'Profit') {
     *     return '<div class="mt-1 alert alert-info py-1"><small>Net profit after adjustments</small></div>';
     *   }
     *   return '';
     * }
     * ```
     *
     * Example with object mapping:
     * ```
     * postItemContent: {
     *   'Sales': '<div class="mt-1 badge bg-primary-subtle text-primary-emphasis">Revenue data includes taxes</div>',
     *   'Profit': '<div class="mt-1 badge bg-success-subtle text-success-emphasis">Net profit after adjustments</div>'
     * }
     * ```
     *
     * Example with array:
     * ```
     * postItemContent: [
     *   '<div class="mt-1 text-muted small">Contenu pour la première légende</div>',
     *   '<div class="mt-1 text-muted small">Contenu pour la deuxième légende</div>'
     * ]
     * ```
     *
     * @param legendName The label of the legend item
     * @param legendIndex The index of the legend in the legend list (0-based)
     * @param color The color assigned to this legend
     * @param colorIndex The index of the color in the color list (0-based)
     */
    public postItemContent?:
      | ((legendLabel: string, legendName: string, legendIndex: number, color: string, colorIndex: number) => string)
      | { [legendLabel: string]: string }
      | string[],
    /**
     * This option defines HTML content that will be displayed after all legend items.
     * It should be a string containing HTML content that will be added at the end of the legend group.
     *
     * Example:
     * ```
     * afterLegendContent: '<div class="legend-footer">Last updated: October 2025</div>'
     * ```
     */
    public afterLegendContent?: string
  ) {}
}
