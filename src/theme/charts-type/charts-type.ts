//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { ODSChartsLineStyle } from '../ods-chart-theme';

/**
 * Charts type
 */
export enum ODSChartsTypes {
  DEFAULT = 'DEFAULT',
  SINGLE_LINE = 'SINGLE_LINE',
  MULTIPLE_LINE = 'MULTIPLE_LINE',
  BAR = 'BAR',
  STACKED_BAR = 'STACKED_BAR',
  LINE_BAR = 'LINE_BAR',
  PIE = 'PIE',
  DONUT = 'DONUT',
  HORIZONTAL_GAUGE = 'HORIZONTAL_GAUGE',
  SEMICIRCLE_GAUGE = 'SEMICIRCLE_GAUGE',
  CIRCLE_GAUGE = 'CIRCLE_GAUGE',
  DIAL_GAUGE = 'DIAL_GAUGE',
}

/**
 * ChartsConfiguration is used to specify the configuration specific to a type of graph.
 *
 * For the moment can be:
 * - {@link ODSChartsLine} : configuration of a line chart
 * - {@link ODSChartsBar} : configuration of a bar chart of type {@link ODSChartsTypes.BAR} or {@link ODSChartsTypes.STACKED_BAR}
 * - {@link ODSChartsPie} : configuration of a chart of type {@link ODSChartsTypes.PIE}
 * - {@link ODSChartsDonut} : configuration of a chart of type {@link ODSChartsTypes.DONUT}
 * - {@link ODSChartsGauge} : configuration of a chart of type {@link ODSChartsTypes.DIAL_GAUGE}, {@link ODSChartsTypes.HORIZONTAL_GAUGE}, {@link ODSChartsTypes.SEMICIRCLE_GAUGE} or {@link ODSChartsTypes.CIRCLE_GAUGE}
 */
export class ODSChartsConfiguration {
  constructor(public type: ODSChartsTypes = ODSChartsTypes.DEFAULT) {}
}

/**
 * Configuration of a line chart of one of the type
 * - {@link ODSChartsTypes.SINGLE_LINE}
 * - {@link ODSChartsTypes.MULTIPLE_LINE}
 * - {@link ODSChartsTypes.LINE_BAR}
 */
export class ODSChartsLine extends ODSChartsConfiguration {
  constructor(
    type: ODSChartsTypes.LINE_BAR | ODSChartsTypes.MULTIPLE_LINE | ODSChartsTypes.SINGLE_LINE = ODSChartsTypes.MULTIPLE_LINE,
    public lineStyle: ODSChartsLineStyle = ODSChartsLineStyle.SMOOTH
  ) {
    super(type);
  }
}

/**
 * Configuration of a bar chart of one of the type:
 * - {@link ODSChartsTypes.BAR}
 * - {@link ODSChartsTypes.STACKED_BAR}
 */
export class ODSChartsBar extends ODSChartsConfiguration {
  constructor(type: ODSChartsTypes.BAR | ODSChartsTypes.STACKED_BAR) {
    super(type);
  }
}

/**
 * Configuration of a pie chart of type {@link ODSChartsTypes.PIE}
 */
export class ODSChartsPie extends ODSChartsConfiguration {
  constructor(type: ODSChartsTypes.PIE) {
    super(type);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.DONUT}
 */
export class ODSChartsDonut extends ODSChartsConfiguration {
  constructor(type: ODSChartsTypes.DONUT) {
    super(type);
  }
}

/**
 * configuration of a gauche chart of one the type
 * - {@link ODSChartsTypes.DIAL_GAUGE}
 * - {@link ODSChartsTypes.HORIZONTAL_GAUGE}
 * - {@link ODSChartsTypes.SEMICIRCLE_GAUGE}
 * - {@link ODSChartsTypes.CIRCLE_GAUGE}
 */
export class ODSChartsGauge extends ODSChartsConfiguration {
  constructor(type: ODSChartsTypes.DIAL_GAUGE | ODSChartsTypes.HORIZONTAL_GAUGE | ODSChartsTypes.SEMICIRCLE_GAUGE | ODSChartsTypes.CIRCLE_GAUGE) {
    super(type);
  }
}
