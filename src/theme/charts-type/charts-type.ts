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
  LINE = 'LINE',
  BAR = 'BAR',
  LINE_AND_BAR = 'LINE_AND_BAR',
  PIE = 'PIE',
  DONUT = 'DONUT',
  HORIZONTAL_GAUGE = 'HORIZONTAL_GAUGE',
  CIRCULAR_GAUGE = 'CIRCULAR_GAUGE',
}

/**
 * ChartsConfiguration is used to specify the configuration specific to a type of graph.
 *
 * For the moment can be:
 * - {@link getLineChartConfiguration} : configuration of a line chart
 * - {@link getBarChartConfiguration} : configuration of a bar chart
 * - {@link getLineAndBarChartConfiguration} : configuration of a bar and line chart
 * - {@link getPieChartConfiguration} : configuration of a pie chart
 * - {@link getDonutChartConfiguration} : configuration of a donut chart
 * - {@link ODSChartsGauge} : configuration of a chart of type {@link ODSChartsTypes.DIAL_GAUGE}, {@link ODSChartsTypes.HORIZONTAL_GAUGE}, {@link ODSChartsTypes.CIRCULAR_GAUGE} or {@link ODSChartsTypes.CIRCLE_GAUGE}
 */

class ODSChartsLineConfiguration {
  lineStyle?: ODSChartsLineStyle;
}
export class ODSChartsConfiguration {
  protected constructor(public type: ODSChartsTypes = ODSChartsTypes.DEFAULT) {}

  public static getDefaultChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsConfiguration();
  }

  public static getLineChartConfiguration(config: ODSChartsLineConfiguration = { lineStyle: ODSChartsLineStyle.SMOOTH }): ODSChartsConfiguration {
    return new ODSChartsLine(config.lineStyle);
  }

  public static getBarChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsBar();
  }

  public static getLineAndBarChartConfiguration(config: ODSChartsLineConfiguration = { lineStyle: ODSChartsLineStyle.SMOOTH }): ODSChartsConfiguration {
    return new ODSChartsLineAndBar(config.lineStyle);
  }

  public static getPieChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsPie();
  }

  public static getDonutChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsDonut();
  }

  public static getHorizontalGaugeChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsHorizontalGauge();
  }

  public static getCircularGaugeChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsCircularGauge();
  }
}

/**
 * Configuration of a line chart of one of the type
 * - {@link ODSChartsTypes.LINE}
 * - {@link ODSChartsTypes.LINE_AND_BAR}
 */
export class ODSChartsLineType extends ODSChartsConfiguration {
  constructor(
    type: ODSChartsTypes.LINE_AND_BAR | ODSChartsTypes.LINE | ODSChartsTypes.LINE = ODSChartsTypes.LINE,
    public lineStyle?: ODSChartsLineStyle
  ) {
    super(type);
    if (undefined === this.lineStyle) {
      this.lineStyle = ODSChartsLineStyle.SMOOTH;
    }
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.LINE_AND_BAR}
 */
class ODSChartsLineAndBar extends ODSChartsLineType {
  constructor(lineStyle?: ODSChartsLineStyle) {
    super(ODSChartsTypes.LINE_AND_BAR, lineStyle);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.LINE}
 */
class ODSChartsLine extends ODSChartsLineType {
  constructor(lineStyle?: ODSChartsLineStyle) {
    super(ODSChartsTypes.LINE, lineStyle);
  }
}

/**
 * Configuration of a bar chart of one of the type:
 * - {@link ODSChartsTypes.BAR}
 * - {@link ODSChartsTypes.STACKED_BAR}
 */
export class ODSChartsBarType extends ODSChartsConfiguration {
  protected constructor(type: ODSChartsTypes.BAR) {
    super(type);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.BAR}
 */
class ODSChartsBar extends ODSChartsBarType {
  constructor() {
    super(ODSChartsTypes.BAR);
  }
}

/**
 * Configuration of a pie chart of type {@link ODSChartsTypes.PIE}
 */
class ODSChartsPie extends ODSChartsConfiguration {
  constructor() {
    super(ODSChartsTypes.PIE);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.HorizontalGauge}
 */
class ODSChartsDonut extends ODSChartsConfiguration {
  constructor() {
    super(ODSChartsTypes.DONUT);
  }
}

/**
 * configuration of a gauche chart of one the type
 * - {@link ODSChartsTypes.DIAL_GAUGE}
 * - {@link ODSChartsTypes.HORIZONTAL_GAUGE}
 * - {@link ODSChartsTypes.CIRCULAR_GAUGE}
 * - {@link ODSChartsTypes.CIRCLE_GAUGE}
 */
export class ODSChartsGaugeType extends ODSChartsConfiguration {
  protected constructor(type: ODSChartsTypes.HORIZONTAL_GAUGE | ODSChartsTypes.CIRCULAR_GAUGE) {
    super(type);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.HORIZONTAL_GAUGE}
 */
class ODSChartsHorizontalGauge extends ODSChartsGaugeType {
  constructor() {
    super(ODSChartsTypes.HORIZONTAL_GAUGE);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.CIRCULAR_GAUGE}
 */

class ODSChartsCircularGauge extends ODSChartsGaugeType {
  constructor() {
    super(ODSChartsTypes.CIRCULAR_GAUGE);
  }
}
