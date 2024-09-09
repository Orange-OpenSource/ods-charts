//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

/**
 * Definition of a container used to display legends.
 *
 * Example of use:
 * ```
 * themeManager.externalizeLegends(
 *   myChart,
 *   [{ legendHolderSelector: '#results_stack_legend', serieRef: ['result'], orientation: 'vertical' },
 *    { legendHolderSelector: '#goals_stack_legend', serieRef: ['goals'], orientation: 'vertical' },
 *    { legendHolderSelector: '#line_legend' }]
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
     * If serieRef is absent, this container will be the default container for non-referenced legends.
     */
    public serieRef?: string[]
  ) {}
}
