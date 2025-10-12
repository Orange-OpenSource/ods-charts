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
 *      postItemContent: '<div class="custom-legend-footer">Additional information</div>' }]
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
     * - A function that receives the legend label and returns custom HTML content for that specific legend
     * - An object mapping legend labels to their custom HTML content
     *
     * Example with dynamic content based on legend label:
     * ```
     * postItemContent: (legendLabel) => {
     *   if (legendLabel === 'Sales') {
     *     return '<div class="sales-note">Revenue data includes taxes</div>';
     *   }
     *   if (legendLabel === 'Profit') {
     *     return '<div class="profit-note">Net profit after adjustments</div>';
     *   }
     *   return '';
     * }
     * ```
     *
     * Example with object mapping:
     * ```
     * postItemContent: {
     *   'Sales': '<div class="sales-note">Revenue data includes taxes</div>',
     *   'Profit': '<div class="profit-note">Net profit after adjustments</div>'
     * }
     * ```
     */
    public postItemContent?: ((legendLabel: string) => string) | { [key: string]: string },
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
