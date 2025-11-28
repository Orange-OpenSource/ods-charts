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
  SEMI_CIRCULAR_GAUGE = 'SEMI_CIRCULAR_GAUGE',
  CIRCULAR_GAUGE = 'CIRCULAR_GAUGE',
  DIAL_GAUGE = 'DIAL_GAUGE',
}

/**
 * Configuration of a line chart.
 */
export class ODSChartsLineConfiguration {
  lineStyle?: ODSChartsLineStyle;
}

/**
 * Configuration of a gauge chart.
 */
export class ODSChartsGaugeConfiguration {
  /**
   * Minimum value of the gauge.
   */
  minValue?: number;
  /**
   * Maximum value of the gauge.
   */
  maxValue?: number;
}

/**
 * Configuration of dial gauge chart.
 * It extends the ODSChartsGaugeConfiguration to include specific properties for dial points.
 */
export class ODSChartsDialGaugeConfiguration extends ODSChartsGaugeConfiguration {
  /**
   * Configuration of the dial points. Points are used to divide the gauge into segments.
   * The point is identify by its value.
   * A label can be displayed, associated with this value.
   * A color can be used to specify the color of the segment before the value.
   */
  dialPoints?: {
    value: number;
    label?: number;
    beforeColor?: string;
  }[];
}

/**
 * ChartsConfiguration is used to specify the configuration specific to a type of graph.
 *
 * For the moment can be:
 * - {@link getLineChartConfiguration} : to build a configuration of a line chart
 * - {@link getBarChartConfiguration} : to build a configuration of a bar chart
 * - {@link getLineAndBarChartConfiguration} : to build a configuration of a bar and line chart
 * - {@link getPieChartConfiguration} : to build a configuration of a pie chart
 * - {@link getDonutChartConfiguration} : to build a configuration of a donut chart
 * - {@link getHorizontalGaugeChartConfiguration} : to build a configuration of a horizontal gauge
 * - {@link getSemiCircularGaugeChartConfiguration} : to build a configuration of a semicircular gauge
 * - {@link getCircularGaugeChartConfiguration} : to build a configuration of a circular gauge
 * - {@link getDialGaugeChartConfiguration} : to build a configuration of a dial gauge
 */
export class ODSChartsConfiguration {
  protected constructor(public type: ODSChartsTypes = ODSChartsTypes.DEFAULT) {}

  protected getLegendConfiguration(_themeOptions: any, _dataOptions: any): any {
    return {
      orient: 'horizontal',
      show: true,
      ..._themeOptions?.legend,
      ..._dataOptions?.legend,
    };
  }

  /**
   * For internal use only.
   * This method should not be called directly by the user. It is used internally by the class to build the configuration of the charts.
   * @returns The default configuration of a chart.
   * @internal
   */
  public getDefaultConfiguration(): any {
    return {};
  }

  /**
   * For internal use only.
   * This method should not be called directly by the user. It is used internally by the class to build the configuration of the charts.
   * @param _serie The serie to get the configuration for.
   * @returns The configuration of the serie.
   * @internal
   */
  public getSerieConfiguration(_serie: { type: string }, _themeOptions: any, _dataOptions: any): any {
    return {};
  }

  /**
   * Get the empty default configuration of a chart.
   * This method should not be used. Prefer to use the specific methods to get the configuration of a chart.
   * For example, use {@link getLineChartConfiguration} to get the configuration of a line chart.
   * @returns The default configuration of a chart.
   */
  public static getDefaultChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsConfiguration();
  }

  /**
   * Get the configuration of a line chart.
   * @param config Configuration of the line chart, can be used to specify the line style
   *               {@link ODSChartsLineStyle.SMOOTH} or {@link ODSChartsLineStyle.BROKEN} or {@link ODSChartsLineStyle.BROKEN_WITH_POINTS}}.
   * @returns Configuration of a line chart.
   */
  public static getLineChartConfiguration(config: ODSChartsLineConfiguration = { lineStyle: ODSChartsLineStyle.SMOOTH }): ODSChartsConfiguration {
    return new ODSChartsLine(config.lineStyle);
  }

  /**
   * Get the configuration of a bar chart.
   * @returns Configuration of a bar chart.
   */
  public static getBarChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsBar();
  }

  /**
   * get the configuration of a line and bar chart.
   * @param config Configuration of the line and bar chart, can be used to specify the line style
   *               {@link ODSChartsLineStyle.SMOOTH} or {@link ODSChartsLineStyle.BROKEN} or {@link ODSChartsLineStyle.BROKEN_WITH_POINTS}}.
   * @returns Configuration of a line and bar chart.
   */
  public static getLineAndBarChartConfiguration(config: ODSChartsLineConfiguration = { lineStyle: ODSChartsLineStyle.SMOOTH }): ODSChartsConfiguration {
    return new ODSChartsLineAndBar(config.lineStyle);
  }

  /**
   * Get the configuration of a pie chart.
   * @returns Configuration of a pie chart.
   */
  public static getPieChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsPie();
  }

  /**
   * Get the configuration of a donut chart.
   * @returns Configuration of a donut chart.
   */
  public static getDonutChartConfiguration(): ODSChartsConfiguration {
    return new ODSChartsDonut();
  }

  /**
   * Get the configuration of a horizontal gauge chart.
   * This chart is a bar chart with a horizontal orientation, used to display a single value within a range.
   * It is useful for showing progress or performance against a target.
   * @param config Configuration of the horizontal gauge chart, must be used to specify the minimum and maximum values.
   *               The chart will display a bar that fills the space between these two values.
   * @returns Configuration of the horizontal gauge chart.
   */
  public static getHorizontalGaugeChartConfiguration(config: ODSChartsGaugeConfiguration): ODSChartsConfiguration {
    return new ODSChartsHorizontalGauge(config.minValue, config.maxValue);
  }

  /**
   * Get the configuration of a semi-circular gauge chart.
   * @param config Configuration of the semi-circular gauge chart, must be used to specify the minimum and maximum values.
   * @returns Configuration of the semi-circular gauge chart.
   */
  public static getSemiCircularGaugeChartConfiguration(config: ODSChartsGaugeConfiguration): ODSChartsConfiguration {
    return new ODSChartsSemiCircularGauge(config.minValue, config.maxValue);
  }

  /**
   * Get the configuration of a circular gauge chart.
   * @param config Configuration of the circular gauge chart, must be used to specify the minimum and maximum values.
   * @returns Configuration of the circular gauge chart.
   */
  public static getCircularGaugeChartConfiguration(config: ODSChartsGaugeConfiguration): ODSChartsConfiguration {
    return new ODSChartsCircularGauge(config.minValue, config.maxValue);
  }

  /**
   * Get the configuration of a dial gauge chart.
   * @param config Configuration of the dial gauge chart, must be used to specify the minimum and maximum values and the dial parts.
   * @returns Configuration of the dial gauge chart.
   */
  public static getDialGaugeChartConfiguration(config: ODSChartsDialGaugeConfiguration): ODSChartsConfiguration {
    return new ODSChartsDialGauge(config.minValue, config.maxValue, config.dialPoints);
  }
}

/**
 * Configuration of a line chart of one of the type
 * - {@link ODSChartsTypes.LINE}
 * - {@link ODSChartsTypes.LINE_AND_BAR}
 */
class ODSChartsLineType extends ODSChartsConfiguration {
  constructor(
    type: ODSChartsTypes.LINE_AND_BAR | ODSChartsTypes.LINE = ODSChartsTypes.LINE,
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
class ODSChartsBarType extends ODSChartsConfiguration {
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
  public getSerieConfiguration(serie: { type: string }, _themeOptions: any, _dataOptions: any): any {
    if (serie.type !== 'pie') {
      return {};
    }

    const legend = this.getLegendConfiguration(_themeOptions, _dataOptions);

    return {
      label: { show: false, position: 'outside' },
      labelLine: { show: false },
      ...(legend.show && legend.orient === 'horizontal'
        ? {
            center: ['50%', '40%'],
            radius: ['0%', '80%'],
          }
        : legend.show && legend.orient === 'horizontal'
          ? {
              radius: ['0%', '95%'],
              center: ['40%', '50%'],
            }
          : {
              radius: ['0%', '95%'],
            }),
    };
  }

  constructor() {
    super(ODSChartsTypes.PIE);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.HorizontalGauge}
 */
class ODSChartsDonut extends ODSChartsConfiguration {
  public getSerieConfiguration(serie: { type: string }, _themeOptions: any, _dataOptions: any): any {
    if (serie.type !== 'pie') {
      return {};
    }

    const legend = this.getLegendConfiguration(_themeOptions, _dataOptions);

    return {
      label: { show: false, position: 'center' },
      labelLine: { show: false },
      emphasis: {
        label: {
          show: true,
          fontSize: 35,
          fontWeight: 700,
          formatter: '{d}%',
        },
      },
      ...(legend.show && legend.orient === 'horizontal'
        ? {
            center: ['50%', '40%'],
            radius: ['65%', '80%'],
          }
        : legend.show && legend.orient === 'horizontal'
          ? {
              radius: ['80%', '95%'],
              center: ['40%', '50%'],
            }
          : {
              radius: ['80%', '95%'],
            }),
    };
  }

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
class ODSChartsGaugeType extends ODSChartsConfiguration {
  protected constructor(type: ODSChartsTypes.HORIZONTAL_GAUGE | ODSChartsTypes.CIRCULAR_GAUGE) {
    super(type);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.HORIZONTAL_GAUGE}
 */
class ODSChartsHorizontalGauge extends ODSChartsGaugeType {
  constructor(
    public minValue?: number,
    public maxValue?: number
  ) {
    super(ODSChartsTypes.HORIZONTAL_GAUGE);
  }

  public getDefaultConfiguration(): any {
    return {
      grid: {
        left: 20,
        top: 32,
        right: 20,
        height: 32,
      },
      yAxis: {
        show: true,
        type: 'category',
        axisLabel: {
          margin: 0,
          lineHeight: 50,
          inside: true,
          verticalAlign: 'bottom',
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      xAxis: {
        type: 'value',
        position: 'top',
        ...(undefined !== this.minValue ? { min: this.minValue } : {}),
        ...(undefined !== this.maxValue ? { max: this.maxValue } : {}),
        splitNumber: 1,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: (val: number) => ((this.minValue || 0) === val ? '' : val),
          align: 'right',
          show: true,
          lineHeight: 0,
          fontWeight: 'normal',
        },
      },
    };
  }

  public getSerieConfiguration(serie: { type: string }, _themeOptions: any, _dataOptions: any): any {
    if ('bar' !== serie.type) {
      return {};
    }
    return {
      pointer: {
        show: false,
      },
      barWidth: 32,
      showBackground: true,
      backgroundStyle: {
        color: 'var(--bs-gray-500)',
      },
      itemStyle: {
        barBorderWidth: 0,
      },
    };
  }
}

/**
 * Configuration of a circular gauge of one of the type
 * - {@link ODSChartsTypes.SEMI_CIRCULAR_GAUGE}
 * - {@link ODSChartsTypes.CIRCULAR_GAUGE}
 * - {@link ODSChartsTypes.DIAL_GAUGE}
 */
class ODSChartsCircularGaugeType extends ODSChartsConfiguration {
  constructor(
    type: ODSChartsTypes.SEMI_CIRCULAR_GAUGE | ODSChartsTypes.CIRCULAR_GAUGE | ODSChartsTypes.DIAL_GAUGE = ODSChartsTypes.SEMI_CIRCULAR_GAUGE,
    public minValue?: number,
    public maxValue?: number
  ) {
    super(type);
  }

  public getSerieConfiguration(serie: { type: string; min?: number; max?: number }, _themeOptions: any, _dataOptions: any): any {
    if (serie.type !== 'gauge') {
      return {};
    }
    const circular = ODSChartsTypes.CIRCULAR_GAUGE === this.type;
    const minValue = undefined !== serie.min ? serie.min : undefined !== this.minValue ? this.minValue : 0;
    const maxValue = undefined !== serie.max ? serie.max : undefined !== this.maxValue ? this.maxValue : 100;

    return {
      endAngle: circular ? -270 : 0,
      startAngle: circular ? 90 : 180,
      min: minValue,
      max: maxValue,
      radius: circular ? '90%' : '150%',
      center: ['50%', circular ? '50%' : '75%'],
      splitNumber: 1,
      detail: {
        offsetCenter: [0, circular ? 0 : -10],
        color: 'var(--bs-body-color, #000)',
        fontSize: 40,
        fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
        fontWeight: 'bold',
      },
      progress: {
        show: true,
        width: 32,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: false,
      },
      axisLabel: {
        show: circular ? false : true,
        distance: -50,
        color: 'var(--bs-body-color, #000)',
        fontSize: 14,
        fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
        fontWeight: 400,
      },
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 32,
          color: [[1, 'var(--bs-light)']],
        },
      },
    };
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.CIRCULAR_GAUGE}
 */
class ODSChartsSemiCircularGauge extends ODSChartsCircularGaugeType {
  constructor(minValue?: number, maxValue?: number) {
    super(ODSChartsTypes.SEMI_CIRCULAR_GAUGE, minValue, maxValue);
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.CIRCULAR_GAUGE}
 */
class ODSChartsDialGauge extends ODSChartsCircularGaugeType {
  constructor(
    minValue?: number,
    maxValue?: number,
    public dialPoints?: {
      value: number;
      label?: number;
      beforeColor?: string;
    }[]
  ) {
    super(ODSChartsTypes.DIAL_GAUGE, minValue, maxValue);
    if (undefined === minValue && dialPoints && dialPoints.length > 1) {
      this.minValue = dialPoints[0].value;
    }
    if (undefined === maxValue && dialPoints && dialPoints.length > 0) {
      this.maxValue = dialPoints[dialPoints.length - 1].value;
    }
  }

  // Fonction pour calculer le PGCD de deux nombres
  private gcd(a: number, b: number) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Fonction pour calculer le PGCD d’un tableau de nombres
  private gcdArray(arr: number[]) {
    return arr.reduce((acc, val) => this.gcd(acc, val), arr[0]);
  }

  public getSerieConfiguration(serie: { type: string; min?: number; max?: number }, _themeOptions: any, _dataOptions: any): any {
    if (serie.type !== 'gauge') {
      return {};
    }
    const config = super.getSerieConfiguration(serie, _themeOptions, _dataOptions);
    const minValue = config.min;
    const maxValue = config.max;

    const dialPoints: {
      value: number;
      label?: number;
      beforeColor?: string;
    }[] = this.dialPoints && 0 < this.dialPoints.length ? this.dialPoints : [{ value: minValue }, { value: maxValue }];

    if (minValue !== dialPoints[0].value) {
      dialPoints.unshift({ value: minValue });
    }

    if (maxValue !== dialPoints[dialPoints.length - 1].value) {
      dialPoints.push({ value: maxValue });
    }

    const steps: number[] = dialPoints.reduce((foundPeriods: number[], currentPart, index) => {
      if (index > 0) {
        foundPeriods.push(currentPart.value - dialPoints[index - 1].value);
      }
      return foundPeriods;
    }, []);

    const commonStep = this.gcdArray(steps);

    const splitNumber = (maxValue - minValue) / commonStep;

    return {
      ...config,
      radius: '125%',
      splitNumber: splitNumber,
      detail: {
        offsetCenter: [0, 30],
        color: 'var(--bs-body-color, #000)',
        fontSize: 40,
        fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
        fontWeight: 'bold',
      },
      progress: {
        show: false,
      },
      pointer: {
        show: true,
        width: 50,
        icon: 'var(--ods-dial-gauge-pointer, image://data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22147%2065.2635%2023%20104.4226%22%20width%3D%2223px%22%20height%3D%22107.735px%22%3E%0A%20%20%3Cpath%20d%3D%22M%20123.034%2079.908%20L%20179.603%20150.618%20L%20193.745%20136.476%20L%20123.034%2079.908%20Z%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20158.389px%20115.263px%3B%22%20transform%3D%22matrix(0.70710701%2C%200.70710701%2C%20-0.70710701%2C%200.70710701%2C%200.00000871%2C%20-0.0000095)%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22131.469%22%20cy%3D%2290.553%22%20r%3D%2210%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20131.469px%2090.553px%3B%22%20transform%3D%22matrix(-0.70710701%2C%20-0.70710701%2C%200.70710701%2C%20-0.70710701%2C%2026.91516753%2C%2064.99089065)%22%2F%3E%0A%3C%2Fsvg%3E)',
        itemStyle: {
          color: 'var(--bs-body-color, #000)',
        },
        offsetCenter: [0, 0],
      },
      axisLabel: {
        show: true,
        distance: -40,
        color: 'var(--bs-body-color, #000)',
        fontSize: 14,
        fontFamily: 'var(--bs-font-sans-serif, "Helvetica Neue")',
        fontWeight: 400,
        formatter: function (value: number) {
          const labelValue = dialPoints.find((part) => value === part.value);
          return labelValue && labelValue.label ? labelValue.label : '';
        },
      },
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 32,
          /* build the color sets of the gauge, like :
              [
                [0.498, 'var(--ouds-charts-color-functional-positive)'],
                [0.502, 'transparent'],
                [0.748, 'var(--ouds-charts-color-functional-warning)'],
                [0.752, 'transparent'],
                [1, 'var(--ouds-charts-color-functional-negative)'],
              ]
          */
          color: dialPoints.reduce((colors: [number, string][], part, index) => {
            if (index > 0 && part.beforeColor) {
              const valuePct = part.value / (maxValue - minValue);
              if (dialPoints.length - 1 === index) {
                colors.push([valuePct, part.beforeColor]);
              } else {
                colors.push([valuePct - 0.002, part.beforeColor]);
                colors.push([valuePct + 0.002, 'transparent']);
              }
            } else if (dialPoints.length - 1 === index) {
              colors.push([1, 'var(--bs-light)']);
            }
            return colors;
          }, []),
        },
      },
    };
  }
}

/**
 * Configuration of a chart of type {@link ODSChartsTypes.CIRCULAR_GAUGE}
 */
class ODSChartsCircularGauge extends ODSChartsCircularGaugeType {
  constructor(minValue?: number, maxValue?: number) {
    super(ODSChartsTypes.CIRCULAR_GAUGE, minValue, maxValue);
  }
}
