(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['ODSCharts'] = factory();
  else root['ODSCharts'] = factory();
})(self, () => {
  return /******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
      /***/ './index.ts':
        /*!******************!*\
  !*** ./index.ts ***!
  \******************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __createBinding =
            (this && this.__createBinding) ||
            (Object.create
              ? function (o, m, k, k2) {
                  if (k2 === undefined) k2 = k;
                  var desc = Object.getOwnPropertyDescriptor(m, k);
                  if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                    desc = {
                      enumerable: true,
                      get: function () {
                        return m[k];
                      },
                    };
                  }
                  Object.defineProperty(o, k2, desc);
                }
              : function (o, m, k, k2) {
                  if (k2 === undefined) k2 = k;
                  o[k2] = m[k];
                });
          var __exportStar =
            (this && this.__exportStar) ||
            function (m, exports) {
              for (var p in m) if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          __exportStar(__webpack_require__(/*! ./src/ods-charts */ './src/ods-charts.ts'), exports);

          /***/
        },

      /***/ './src/ods-charts.ts':
        /*!***************************!*\
  !*** ./src/ods-charts.ts ***!
  \***************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          var __createBinding =
            (this && this.__createBinding) ||
            (Object.create
              ? function (o, m, k, k2) {
                  if (k2 === undefined) k2 = k;
                  var desc = Object.getOwnPropertyDescriptor(m, k);
                  if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                    desc = {
                      enumerable: true,
                      get: function () {
                        return m[k];
                      },
                    };
                  }
                  Object.defineProperty(o, k2, desc);
                }
              : function (o, m, k, k2) {
                  if (k2 === undefined) k2 = k;
                  o[k2] = m[k];
                });
          var __exportStar =
            (this && this.__exportStar) ||
            function (m, exports) {
              for (var p in m) if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.getThemeManager = void 0;
          /**
           * @packageDocumentation
           *
           * This page is an index of the module's classes, interfaces and enumerations.
           *
           * Their use is introduced on the [home page](./#md:documentation).
           *
           */
          const ods_chart_theme_1 = __webpack_require__(/*! ./theme/ods-chart-theme */ './src/theme/ods-chart-theme.ts');
          __exportStar(__webpack_require__(/*! ./theme/ods-chart-theme */ './src/theme/ods-chart-theme.ts'), exports);
          __exportStar(__webpack_require__(/*! ./theme/ODS.project */ './src/theme/ODS.project.ts'), exports);
          __exportStar(__webpack_require__(/*! ./theme/css-themes/css-themes */ './src/theme/css-themes/css-themes.ts'), exports);
          __exportStar(
            __webpack_require__(/*! ./theme/popover/ods-chart-popover-definitions */ './src/theme/popover/ods-chart-popover-definitions.ts'),
            exports
          );
          __exportStar(
            __webpack_require__(/*! ./theme/legends/ods-chart-legends-definitions */ './src/theme/legends/ods-chart-legends-definitions.ts'),
            exports
          );
          __exportStar(__webpack_require__(/*! ./theme/charts-type/charts-type */ './src/theme/charts-type/charts-type.ts'), exports);
          exports.getThemeManager = ods_chart_theme_1.ODSChartsTheme.getThemeManager;

          /***/
        },

      /***/ './src/theme/ODS.project.ts':
        /*!**********************************!*\
  !*** ./src/theme/ODS.project.ts ***!
  \**********************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODS_PROJECT = void 0;
          exports.ODS_PROJECT = {
            color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
            backgroundColor: 'var(--bs-body-bg, transparent)',
            textStyle: {},
            title: {
              textStyle: {
                color: 'var(--bs-body-color, #000000)',
              },
              subtextStyle: {
                color: 'var(--bs-secondary-color, #666666)',
              },
            },
            line: {
              itemStyle: {
                borderWidth: 1,
              },
              lineStyle: {
                width: 2,
              },
              symbolSize: 0,
              symbol: 'emptyCircle',
              smooth: true,
            },
            radar: {
              itemStyle: {
                borderWidth: 1,
              },
              lineStyle: {
                width: 2,
              },
              symbolSize: 4,
              symbol: 'emptyCircle',
              smooth: false,
            },
            bar: {
              itemStyle: {
                barBorderWidth: '2',
                barBorderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            pie: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            scatter: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            boxplot: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            parallel: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            sankey: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            funnel: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            gauge: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
            },
            candlestick: {
              itemStyle: {
                color: 'var(--bs-success, #32c832)',
                color0: 'var(--bs-danger, #cd3c14)',
                borderColor: 'var(--bs-success, #228722)',
                borderColor0: 'var(--bs-danger, #cd3c14)',
                borderWidth: 1,
              },
            },
            graph: {
              itemStyle: {
                borderWidth: '2',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
              lineStyle: {
                width: 1,
                color: 'var(--bs-secondary-color, #666666)',
              },
              symbolSize: 4,
              symbol: 'emptyCircle',
              smooth: false,
              color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
              label: {
                color: 'var(--bs-body-color, #000000)',
              },
            },
            map: {
              itemStyle: {
                areaColor: 'var(--bs-secondary-bg, #eeeeee)',
                borderColor: 'var(--bs-secondary-color, #444444)',
                borderWidth: 0.5,
              },
              label: {
                color: 'var(--bs-body-color, #000000)',
              },
              emphasis: {
                itemStyle: {
                  areaColor: 'rgba(var(--bs-warning-rgb, 255,215,0),0.8)',
                  borderColor: 'var(--bs-secondary-color, #444444)',
                  borderWidth: 1,
                },
                label: {
                  color: 'var(--bs-black, rgb(100,0,0))',
                },
              },
            },
            geo: {
              itemStyle: {
                areaColor: 'var(--bs-secondary-bg, #eeeeee)',
                borderColor: 'var(--bs-secondary-color, #444444)',
                borderWidth: 0.5,
              },
              label: {
                color: 'var(--bs-body-color, #000000)',
              },
              emphasis: {
                itemStyle: {
                  areaColor: 'rgba(var(--bs-warning-rgb, 255,215,0),0.8)',
                  borderColor: 'var(--bs-secondary-color, #444444)',
                  borderWidth: 1,
                },
                label: {
                  color: 'var(--bs-black, rgb(100,0,0))',
                },
              },
            },
            categoryAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-danger, #eb0909)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: ['var(--bs-border-color-subtle, #cccccc)'],
                },
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ['var(--bs-body-bg, #ffffff)'],
                },
              },
            },
            valueAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--secondary-color, #6E7079)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: ['var(--bs-border-color-subtle, #cccccc)'],
                },
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'],
                },
              },
            },
            logAxis: {
              axisLine: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-secondary-color, #6E7079)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: ['var(--bs-border-color-subtle, #cccccc)'],
                },
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'],
                },
              },
            },
            timeAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: ['var(--bs-border-color-subtle, #cccccc)'],
                },
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'],
                },
              },
            },
            toolbox: {
              iconStyle: {
                borderColor: 'var(--bs-secondary-color, #999999)',
              },
              emphasis: {
                iconStyle: {
                  borderColor: 'var(--bs-body-color, #666666)',
                },
              },
            },
            legend: {
              textStyle: {
                color: 'var(--bs-body-color, #333333)',
              },
            },
            tooltip: {
              axisPointer: {
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                  width: 1,
                },
                crossStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                  width: 1,
                },
              },
            },
            timeline: {
              lineStyle: {
                color: 'var(--bs-tertiary-bg, #dae1f5)',
                width: 2,
              },
              itemStyle: {
                color: 'var(--bs-secondary-bg, #a4b1d7)',
                borderWidth: 1,
              },
              controlStyle: {
                color: 'var(--bs-secondary-bg, #a4b1d7)',
                borderColor: 'var(--bs-secondary-bg, #a4b1d7)',
                borderWidth: 1,
              },
              checkpointStyle: {
                color: 'var(--bs-info, #316bf3)',
                borderColor: 'var(--bs-body-bg, #ffffff)',
              },
              label: {
                color: 'var(--bs-secondary-bg, #a4b1d7)',
              },
              emphasis: {
                itemStyle: {
                  color: 'var(--bs-body-bg, #ffffff)',
                },
                controlStyle: {
                  color: 'var(--bs-secondary-bg, #a4b1d7)',
                  borderColor: 'var(--bs-secondary-bg, #a4b1d7)',
                  borderWidth: 1,
                },
                label: {
                  color: 'var(--bs-secondary-bg, #a4b1d7)',
                },
              },
            },
            visualMap: {
              color: ['#085ebd', '#3179c8', '#5a94d3', '#84afde', '#adc9e9', '#d6e4f4'],
            },
            markPoint: {
              label: {
                color: 'var(--bs-body-color, #000000)',
              },
              emphasis: {
                label: {
                  color: 'var(--bs-body-color, #000000)',
                },
              },
            },
          };

          /***/
        },

      /***/ './src/theme/charts-type/charts-type.ts':
        /*!**********************************************!*\
  !*** ./src/theme/charts-type/charts-type.ts ***!
  \**********************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsGaugeType = exports.ODSChartsBarType = exports.ODSChartsLineType = exports.ODSChartsConfiguration = exports.ODSChartsTypes = void 0;
          const ods_chart_theme_1 = __webpack_require__(/*! ../ods-chart-theme */ './src/theme/ods-chart-theme.ts');
          /**
           * Charts type
           */
          var ODSChartsTypes;
          (function (ODSChartsTypes) {
            ODSChartsTypes['DEFAULT'] = 'DEFAULT';
            ODSChartsTypes['LINE'] = 'LINE';
            ODSChartsTypes['BAR'] = 'BAR';
            ODSChartsTypes['LINE_AND_BAR'] = 'LINE_AND_BAR';
            ODSChartsTypes['PIE'] = 'PIE';
            ODSChartsTypes['DONUT'] = 'DONUT';
            ODSChartsTypes['HORIZONTAL_GAUGE'] = 'HORIZONTAL_GAUGE';
            ODSChartsTypes['CIRCULAR_GAUGE'] = 'CIRCULAR_GAUGE';
          })(ODSChartsTypes || (exports.ODSChartsTypes = ODSChartsTypes = {}));
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
          class ODSChartsLineConfiguration {}
          class ODSChartsConfiguration {
            constructor(type = ODSChartsTypes.DEFAULT) {
              this.type = type;
            }
            static getDefaultChartConfiguration() {
              return new ODSChartsConfiguration();
            }
            static getLineChartConfiguration(config = { lineStyle: ods_chart_theme_1.ODSChartsLineStyle.SMOOTH }) {
              return new ODSChartsLine(config.lineStyle);
            }
            static getBarChartConfiguration() {
              return new ODSChartsBar();
            }
            static getLineAndBarChartConfiguration(config = { lineStyle: ods_chart_theme_1.ODSChartsLineStyle.SMOOTH }) {
              return new ODSChartsLineAndBar(config.lineStyle);
            }
            static getPieChartConfiguration() {
              return new ODSChartsPie();
            }
            static getDonutChartConfiguration() {
              return new ODSChartsDonut();
            }
            static getHorizontalGaugeChartConfiguration() {
              return new ODSChartsHorizontalGauge();
            }
            static getCircularGaugeChartConfiguration() {
              return new ODSChartsCircularGauge();
            }
          }
          exports.ODSChartsConfiguration = ODSChartsConfiguration;
          /**
           * Configuration of a line chart of one of the type
           * - {@link ODSChartsTypes.LINE}
           * - {@link ODSChartsTypes.LINE_AND_BAR}
           */
          class ODSChartsLineType extends ODSChartsConfiguration {
            constructor(type = ODSChartsTypes.LINE, lineStyle) {
              super(type);
              this.lineStyle = lineStyle;
              if (undefined === this.lineStyle) {
                this.lineStyle = ods_chart_theme_1.ODSChartsLineStyle.SMOOTH;
              }
            }
          }
          exports.ODSChartsLineType = ODSChartsLineType;
          /**
           * Configuration of a chart of type {@link ODSChartsTypes.LINE_AND_BAR}
           */
          class ODSChartsLineAndBar extends ODSChartsLineType {
            constructor(lineStyle) {
              super(ODSChartsTypes.LINE_AND_BAR, lineStyle);
            }
          }
          /**
           * Configuration of a chart of type {@link ODSChartsTypes.LINE}
           */
          class ODSChartsLine extends ODSChartsLineType {
            constructor(lineStyle) {
              super(ODSChartsTypes.LINE, lineStyle);
            }
          }
          /**
           * Configuration of a bar chart of one of the type:
           * - {@link ODSChartsTypes.BAR}
           * - {@link ODSChartsTypes.STACKED_BAR}
           */
          class ODSChartsBarType extends ODSChartsConfiguration {
            constructor(type) {
              super(type);
            }
          }
          exports.ODSChartsBarType = ODSChartsBarType;
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
          class ODSChartsGaugeType extends ODSChartsConfiguration {
            constructor(type) {
              super(type);
            }
          }
          exports.ODSChartsGaugeType = ODSChartsGaugeType;
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

          /***/
        },

      /***/ './src/theme/colors/_ouds-colors-css-variables.ts':
        /*!********************************************************!*\
  !*** ./src/theme/colors/_ouds-colors-css-variables.ts ***!
  \********************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODS_CHARTS_CONTEXT = void 0;
          exports.ODS_CHARTS_CONTEXT = `
.ods-charts-context, [data-bs-theme=light] .ods-charts-context, .ods-charts-context[data-bs-theme=light] {
  color-scheme: light;
  --ouds-charts-color-border: #ffffff;
  --ouds-charts-color-border-contrast: #ffffff;
  --ouds-charts-color-categorical-tier-1: #5b2f98;
  --ouds-charts-color-categorical-tier-10: #009bf0;
  --ouds-charts-color-categorical-tier-2: #3ba06e;
  --ouds-charts-color-categorical-tier-3: #b20077;
  --ouds-charts-color-categorical-tier-4: #a38200;
  --ouds-charts-color-categorical-tier-5: #007abd;
  --ouds-charts-color-categorical-tier-6: #8d60cd;
  --ouds-charts-color-categorical-tier-7: #2e7b54;
  --ouds-charts-color-categorical-tier-8: #e50099;
  --ouds-charts-color-categorical-tier-9: #665100;
  --ouds-charts-color-functional-info: #009bf0;
  --ouds-charts-color-functional-negative: #db0002;
  --ouds-charts-color-functional-positive: #17a02f;
  --ouds-charts-color-functional-warning: #a38200;
  --ouds-charts-color-gridlines: #cccccc;
  --ouds-charts-color-highlight: #f15e00;
  --ouds-charts-color-neutral: #8f8f8f;
  --ouds-charts-color-sequential-accent-1-tint-100: #d2ecf9;
  --ouds-charts-color-sequential-accent-1-tint-200: #a5daf3;
  --ouds-charts-color-sequential-accent-1-tint-300: #79c7ec;
  --ouds-charts-color-sequential-accent-1-tint-400: #4ab4e6;
  --ouds-charts-color-sequential-accent-1-tint-500: #1fa2e0;
  --ouds-charts-color-sequential-accent-1-tint-600: #1982b3;
  --ouds-charts-color-sequential-accent-1-tint-700: #136186;
  --ouds-charts-color-sequential-accent-1-tint-800: #0c415a;
  --ouds-charts-color-sequential-accent-1-tint-900: #06202d;
  --ouds-charts-color-sequential-accent-2-tint-100: #e5f5ed;
  --ouds-charts-color-sequential-accent-2-tint-200: #c0e8d4;
  --ouds-charts-color-sequential-accent-2-tint-300: #9bdaba;
  --ouds-charts-color-sequential-accent-2-tint-400: #75cca1;
  --ouds-charts-color-sequential-accent-2-tint-500: #50be87;
  --ouds-charts-color-sequential-accent-2-tint-600: #3ba06e;
  --ouds-charts-color-sequential-accent-2-tint-700: #2e7b54;
  --ouds-charts-color-sequential-accent-2-tint-800: #20563b;
  --ouds-charts-color-sequential-accent-2-tint-900: #123021;
  --ouds-charts-color-sequential-accent-3-tint-100: #ffe5f6;
  --ouds-charts-color-sequential-accent-3-tint-200: #ffb4e6;
  --ouds-charts-color-sequential-accent-3-tint-300: #ff80d4;
  --ouds-charts-color-sequential-accent-3-tint-400: #ff4dc3;
  --ouds-charts-color-sequential-accent-3-tint-500: #ff1ab2;
  --ouds-charts-color-sequential-accent-3-tint-600: #e50099;
  --ouds-charts-color-sequential-accent-3-tint-700: #b20077;
  --ouds-charts-color-sequential-accent-3-tint-800: #800055;
  --ouds-charts-color-sequential-accent-3-tint-900: #4d0033;
  --ouds-charts-color-sequential-accent-4-tint-100: #f1ecf9;
  --ouds-charts-color-sequential-accent-4-tint-200: #e0d4f2;
  --ouds-charts-color-sequential-accent-4-tint-300: #c5ade6;
  --ouds-charts-color-sequential-accent-4-tint-400: #a885d8;
  --ouds-charts-color-sequential-accent-4-tint-500: #8d60cd;
  --ouds-charts-color-sequential-accent-4-tint-600: #5b2f98;
  --ouds-charts-color-sequential-accent-4-tint-700: #432371;
  --ouds-charts-color-sequential-accent-4-tint-800: #2c174a;
  --ouds-charts-color-sequential-accent-4-tint-900: #150b23;
  --ouds-charts-color-sequential-accent-5-tint-100: #fff0cc;
  --ouds-charts-color-sequential-accent-5-tint-200: #ffe199;
  --ouds-charts-color-sequential-accent-5-tint-300: #ffd266;
  --ouds-charts-color-sequential-accent-5-tint-400: #ffc333;
  --ouds-charts-color-sequential-accent-5-tint-500: #ffb400;
  --ouds-charts-color-sequential-accent-5-tint-600: #cc9000;
  --ouds-charts-color-sequential-accent-5-tint-700: #996c00;
  --ouds-charts-color-sequential-accent-5-tint-800: #664800;
  --ouds-charts-color-sequential-accent-5-tint-900: #332400;
}

[data-bs-theme=dark] .ods-charts-context, .ods-charts-context[data-bs-theme=dark] {
  color-scheme: dark;
  --ouds-charts-color-border: #141414;
  --ouds-charts-color-border-contrast: #000000;
  --ouds-charts-color-categorical-tier-1: #a885d8;
  --ouds-charts-color-categorical-tier-10: #1fa2e0;
  --ouds-charts-color-categorical-tier-2: #50be87;
  --ouds-charts-color-categorical-tier-3: #ff80d4;
  --ouds-charts-color-categorical-tier-4: #cc9000;
  --ouds-charts-color-categorical-tier-5: #79c7ec;
  --ouds-charts-color-categorical-tier-6: #8d60cd;
  --ouds-charts-color-categorical-tier-7: #9bdaba;
  --ouds-charts-color-categorical-tier-8: #ff4dc3;
  --ouds-charts-color-categorical-tier-9: #ffd266;
  --ouds-charts-color-functional-info: #26b2ff;
  --ouds-charts-color-functional-negative: #ff4d4e;
  --ouds-charts-color-functional-positive: #1ecd3c;
  --ouds-charts-color-functional-warning: #ffd000;
  --ouds-charts-color-gridlines: #666666;
  --ouds-charts-color-highlight: #ff7900;
  --ouds-charts-color-neutral: #858585;
  --ouds-charts-color-sequential-accent-1-tint-100: #06202d;
  --ouds-charts-color-sequential-accent-1-tint-200: #0c415a;
  --ouds-charts-color-sequential-accent-1-tint-300: #136186;
  --ouds-charts-color-sequential-accent-1-tint-400: #1982b3;
  --ouds-charts-color-sequential-accent-1-tint-500: #1fa2e0;
  --ouds-charts-color-sequential-accent-1-tint-600: #4ab4e6;
  --ouds-charts-color-sequential-accent-1-tint-700: #79c7ec;
  --ouds-charts-color-sequential-accent-1-tint-800: #a5daf3;
  --ouds-charts-color-sequential-accent-1-tint-900: #d2ecf9;
  --ouds-charts-color-sequential-accent-2-tint-100: #123021;
  --ouds-charts-color-sequential-accent-2-tint-200: #20563b;
  --ouds-charts-color-sequential-accent-2-tint-300: #2e7b54;
  --ouds-charts-color-sequential-accent-2-tint-400: #3ba06e;
  --ouds-charts-color-sequential-accent-2-tint-500: #50be87;
  --ouds-charts-color-sequential-accent-2-tint-600: #75cca1;
  --ouds-charts-color-sequential-accent-2-tint-700: #9bdaba;
  --ouds-charts-color-sequential-accent-2-tint-800: #c0e8d4;
  --ouds-charts-color-sequential-accent-2-tint-900: #e5f5ed;
  --ouds-charts-color-sequential-accent-3-tint-100: #4d0033;
  --ouds-charts-color-sequential-accent-3-tint-200: #800055;
  --ouds-charts-color-sequential-accent-3-tint-300: #b20077;
  --ouds-charts-color-sequential-accent-3-tint-400: #e50099;
  --ouds-charts-color-sequential-accent-3-tint-500: #ff1ab2;
  --ouds-charts-color-sequential-accent-3-tint-600: #ff4dc3;
  --ouds-charts-color-sequential-accent-3-tint-700: #ff80d4;
  --ouds-charts-color-sequential-accent-3-tint-800: #ffb4e6;
  --ouds-charts-color-sequential-accent-3-tint-900: #ffe5f6;
  --ouds-charts-color-sequential-accent-4-tint-100: #150b23;
  --ouds-charts-color-sequential-accent-4-tint-200: #2c174a;
  --ouds-charts-color-sequential-accent-4-tint-300: #432371;
  --ouds-charts-color-sequential-accent-4-tint-400: #5b2f98;
  --ouds-charts-color-sequential-accent-4-tint-500: #8d60cd;
  --ouds-charts-color-sequential-accent-4-tint-600: #a885d8;
  --ouds-charts-color-sequential-accent-4-tint-700: #c5ade6;
  --ouds-charts-color-sequential-accent-4-tint-800: #e0d4f2;
  --ouds-charts-color-sequential-accent-4-tint-900: #f1ecf9;
  --ouds-charts-color-sequential-accent-5-tint-100: #332400;
  --ouds-charts-color-sequential-accent-5-tint-200: #664800;
  --ouds-charts-color-sequential-accent-5-tint-300: #996c00;
  --ouds-charts-color-sequential-accent-5-tint-400: #cc9000;
  --ouds-charts-color-sequential-accent-5-tint-500: #ffb400;
  --ouds-charts-color-sequential-accent-5-tint-600: #ffc333;
  --ouds-charts-color-sequential-accent-5-tint-700: #ffd266;
  --ouds-charts-color-sequential-accent-5-tint-800: #ffe199;
  --ouds-charts-color-sequential-accent-5-tint-900: #fff0cc;
}`;

          /***/
        },

      /***/ './src/theme/colors/colors-css-variables.ts':
        /*!**************************************************!*\
  !*** ./src/theme/colors/colors-css-variables.ts ***!
  \**************************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODS_CHARTS_CSS_VARIABLES = void 0;
          const _ouds_colors_css_variables_1 = __webpack_require__(/*! ./_ouds-colors-css-variables */ './src/theme/colors/_ouds-colors-css-variables.ts');
          /**
           * Added for None or Boosted 4 themes
           */
          const BOOSTED5_VARIABLE = `
.ods-charts-context, [data-bs-theme="light"] .ods-charts-context, .ods-charts-context[data-bs-theme="light"], [data-bs-theme] .ods-charts-context[data-bs-theme="light"]  {
  color-scheme: light;
  --bs-blue: #4170d8;
  --bs-indigo: #a885d8;
  --bs-purple: #a885d8;
  --bs-pink: #ffb4e6;
  --bs-red: #cd3c14;
  --bs-orange: #f16e00;
  --bs-yellow: #fc0;
  --bs-green: #228722;
  --bs-teal: #50be87;
  --bs-cyan: #4bb4e6;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #999;
  --bs-gray-dark: #595959;
  --bs-gray-100: #fafafa;
  --bs-gray-200: #f6f6f6;
  --bs-gray-300: #eee;
  --bs-gray-400: #ddd;
  --bs-gray-500: #ccc;
  --bs-gray-600: #999;
  --bs-gray-700: #666;
  --bs-gray-800: #595959;
  --bs-gray-900: #333;
  --bs-gray-950: #141414;
  --bs-body-color: #000;
  --bs-body-color-rgb: 0, 0, 0;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-link-color: #000;
  --bs-border-width: 0.125rem;
  --bs-border-color: #000;
  --bs-border-color-subtle: #ccc;

  --bs-secondary-color: #666;
  --bs-secondary-bg: #eee;
  --bs-primary: #f16e00;
  --bs-secondary: #000;
  --bs-success: #228722;
  --bs-info: #4170d8;
  --bs-warning: #fc0;
  --bs-danger: #cd3c14;
  --bs-light: #ccc;
  --bs-dark: #000;

  --bs-warning-rgb: 255, 204, 0;
  --bs-tertiary-color-rgb: 204, 204, 204;
  --bs-tertiary-bg: #fafafa;
}

[data-bs-theme="dark"] .ods-charts-context, .ods-charts-context[data-bs-theme="dark"], [data-bs-theme] .ods-charts-context[data-bs-theme="dark"] {
  color-scheme: dark;
  --bs-body-color: #fff;
  --bs-body-color-rgb: 255, 255, 255;
  --bs-body-bg: #141414;
  --bs-body-bg-rgb: 20, 20, 20;
  --bs-link-color: #fff;
  --bs-border-color: #fff;
  --bs-border-color-subtle: #666;

  --bs-secondary-color: #999;
  --bs-secondary-bg: #333;
  --bs-primary: #ff7900;
  --bs-secondary: #fff;
  --bs-success: #6c6;
  --bs-info: #69f;
  --bs-warning: #fc0;
  --bs-danger: #f66;
  --bs-light: #ccc;
  --bs-dark: #000;

  --bs-warning-rgb: 255, 204, 0;
  --bs-tertiary-color-rgb: 102, 102, 102;
  --bs-tertiary-bg: #000;
}


[data-bs-theme] .ods-charts-context, .ods-charts-context[data-bs-theme] {
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
}


[data-bs-theme] .ods-charts-context a, .ods-charts-context[data-bs-theme] a {
    color: var(--bs-link-color);
}
`;
          /**
           * Added for all themes
           */
          const NON_BOOSTED5_VARIABLE = `
.ods-charts-context, [data-bs-theme="light"] .ods-charts-context, .ods-charts-context[data-bs-theme="light"] {
  --ods-yellow-100: #fff6b6;
  --ods-yellow-200: #ffe45b;
  --ods-yellow-300: #ffd200;
  --ods-yellow-400: #ffb400;
  --ods-yellow-500: #b98f11;
  --ods-yellow-600: #9d6e06;

  --ods-yellow: var(--ods-yellow-300);

  --ods-blue-100: #b5e8f7;
  --ods-blue-200: #80ceef;
  --ods-blue-300: #4bb4e6;
  --ods-blue-400: #3e9dd6;
  --ods-blue-500: #237ecA;
  --ods-blue-600: #085ebd;

  --ods-green-100: #B8EBD6;
  --ods-green-200: #84D5AF;
  --ods-green-300: #50BE87;
  --ods-green-400: #27A971;
  --ods-green-500: #198C51;
  --ods-green-600: #0A6E31;

  --ods-pink-100: #FFE8F7;
  --ods-pink-200: #FFCEEF;
  --ods-pink-300: #FFB4E6;
  --ods-pink-400: #FF8AD4;
  --ods-pink-500: #D573BB;
  --ods-pink-600: #BC4D9A;

  --ods-purple-100: #D9C2F0;
  --ods-purple-200: #C1A4E4;
  --ods-purple-300: #A885D8;
  --ods-purple-400: #9373BD;
  --ods-purple-500: #6E4AA7;
  --ods-purple-600: #492191;

  --ods-yellow-1: var(--ods-yellow-600);
  --ods-yellow-2: var(--ods-yellow-500);
  --ods-yellow-3: var(--ods-yellow-400);
  --ods-yellow-4: var(--ods-yellow-300);
  --ods-yellow-5: var(--ods-yellow-200);
  --ods-yellow-6: var(--ods-yellow-100);

  --ods-blue-1: var(--ods-blue-600);
  --ods-blue-2: var(--ods-blue-500);
  --ods-blue-3: var(--ods-blue-400);
  --ods-blue-4: var(--ods-blue-300);
  --ods-blue-5: var(--ods-blue-200);
  --ods-blue-6: var(--ods-blue-100);

  --ods-green-1: var(--ods-green-600);
  --ods-green-2: var(--ods-green-500);
  --ods-green-3: var(--ods-green-400);
  --ods-green-4: var(--ods-green-300);
  --ods-green-5: var(--ods-green-200);
  --ods-green-6: var(--ods-green-100);

  --ods-pink-1: var(--ods-pink-600);
  --ods-pink-2: var(--ods-pink-500);
  --ods-pink-3: var(--ods-pink-400);
  --ods-pink-4: var(--ods-pink-300);
  --ods-pink-5: var(--ods-pink-200);
  --ods-pink-6: var(--ods-pink-100);

  --ods-purple-1: var(--ods-purple-600);
  --ods-purple-2: var(--ods-purple-500);
  --ods-purple-3: var(--ods-purple-400);
  --ods-purple-4: var(--ods-purple-300);
  --ods-purple-5: var(--ods-purple-200);
  --ods-purple-6: var(--ods-purple-100);

  --ods-categorical-1: var(--ods-blue-600);
  --ods-categorical-2: var(--ods-green-400);
  --ods-categorical-3: var(--ods-pink-600);
  --ods-categorical-4: var(--ods-purple-400);
  --ods-categorical-5: var(--ods-yellow-600);
  --ods-categorical-6: var(--bs-gray-900);
  --ods-categorical-7: var(--ods-blue-400);
  --ods-categorical-8: var(--ods-green-600);
  --ods-categorical-9: var(--ods-pink-500);
  --ods-categorical-10: var(--ods-purple-600);
  --ods-categorical-11: var(--ods-yellow-500);
  --ods-categorical-12: var(--bs-gray-700);

  --ods-default-1: var(--ods-blue-600);
  --ods-default-2: var(--ods-green-600);
  --ods-default-3: var(--ods-pink-600);
  --ods-default-4: var(--ods-purple-600);
  --ods-default-5: var(--ods-yellow-500);
  --ods-default-6: var(--bs-gray-700);
  --ods-default-7: var(--ods-blue-400);
  --ods-default-8: var(--ods-green-400);
  --ods-default-9: var(--ods-pink-500);
  --ods-default-10: var(--ods-purple-400);
  --ods-default-11: var(--ods-yellow-600);
  --ods-default-12: var(--bs-gray-900);

  --ods-cyan-light: var(--ods-blue-100);
  --ods-teal-light: var(--ods-green-100);
  --ods-pink-light: var(--ods-pink-100);
  --ods-indigo-light: var(--ods-purple-100);
  --ods-yellow-light: var(--ods-yellow-100);

  --ods-cyan-dark: var(--ods-blue-600);
  --ods-teal-dark: var(--ods-green-600);
  --ods-pink-dark: var(--ods-pink-400);
  --ods-indigo-dark: var(--ods-purple-600);
  --ods-yellow-dark: var(--ods-yellow-400);

  --ods-functional-1: var(--bs-primary);
  --ods-functional-2: var(--bs-gray-300);
  --ods-functional-3: var(--bs-success);
  --ods-functional-4: var(--bs-warning);
  --ods-functional-5: var(--bs-danger);
  --ods-functional-6: var(--bs-info);

}

[data-bs-theme="dark"] .ods-charts-context, .ods-charts-context[data-bs-theme="dark"] {
  --ods-yellow-1: var(--ods-yellow-100);
  --ods-yellow-2: var(--ods-yellow-200);
  --ods-yellow-3: var(--ods-yellow-300);
  --ods-yellow-4: var(--ods-yellow-400);
  --ods-yellow-5: var(--ods-yellow-500);
  --ods-yellow-6: var(--ods-yellow-600);

  --ods-blue-1: var(--ods-blue-100);
  --ods-blue-2: var(--ods-blue-200);
  --ods-blue-3: var(--ods-blue-300);
  --ods-blue-4: var(--ods-blue-400);
  --ods-blue-5: var(--ods-blue-500);
  --ods-blue-6: var(--ods-blue-600);

  --ods-green-1: var(--ods-green-100);
  --ods-green-2: var(--ods-green-200);
  --ods-green-3: var(--ods-green-300);
  --ods-green-4: var(--ods-green-400);
  --ods-green-5: var(--ods-green-500);
  --ods-green-6: var(--ods-green-600);

  --ods-pink-1: var(--ods-pink-100);
  --ods-pink-2: var(--ods-pink-200);
  --ods-pink-3: var(--ods-pink-300);
  --ods-pink-4: var(--ods-pink-400);
  --ods-pink-5: var(--ods-pink-500);
  --ods-pink-6: var(--ods-pink-600);

  --ods-purple-1: var(--ods-purple-100);
  --ods-purple-2: var(--ods-purple-200);
  --ods-purple-3: var(--ods-purple-300);
  --ods-purple-4: var(--ods-purple-400);
  --ods-purple-5: var(--ods-purple-500);
  --ods-purple-6: var(--ods-purple-600);

  --ods-categorical-1: var(--ods-blue-500);
  --ods-categorical-2: var(--ods-green-300);
  --ods-categorical-3: var(--ods-pink-400);
  --ods-categorical-4: var(--ods-purple-300);
  --ods-categorical-5: var(--ods-yellow-400);
  --ods-categorical-6: var(--bs-gray-600);
  --ods-categorical-7: var(--ods-blue-300);
  --ods-categorical-8: var(--ods-green-500);
  --ods-categorical-9: var(--ods-pink-300);
  --ods-categorical-10: var(--ods-purple-500);
  --ods-categorical-11: var(--ods-yellow-300);
  --ods-categorical-12: var(--bs-gray-500);

  --ods-default-1: var(--ods-blue-500);
  --ods-default-2: var(--ods-green-500);
  --ods-default-3: var(--ods-pink-400);
  --ods-default-4: var(--ods-purple-500);
  --ods-default-5: var(--ods-yellow-300);
  --ods-default-6: var(--bs-gray-500);
  --ods-default-7: var(--ods-blue-300);
  --ods-default-8: var(--ods-green-300);
  --ods-default-9: var(--ods-pink-300);
  --ods-default-10: var(--ods-purple-300);
  --ods-default-11: var(--ods-yellow-400);
  --ods-default-12: var(--bs-gray-600);

  --ods-cyan-light: var(--ods-blue-600);
  --ods-teal-light: var(--ods-green-600);
  --ods-pink-light: var(--ods-pink-400);
  --ods-indigo-light: var(--ods-purple-600);
  --ods-yellow-light: var(--ods-yellow-400);

  --ods-cyan-dark: var(--ods-blue-100);
  --ods-teal-dark: var(--ods-green-100);
  --ods-pink-dark: var(--ods-pink-100);
  --ods-indigo-dark: var(--ods-purple-100);
  --ods-yellow-dark: var(--ods-yellow-100);

  --ods-functional-1: var(--bs-primary);
  --ods-functional-2: var(--bs-gray-700);
  --ods-functional-3: var(--bs-success);
  --ods-functional-4: var(--bs-warning);
  --ods-functional-5: var(--bs-danger);
  --ods-functional-6: var(--bs-info);
}
`;
          exports.ODS_CHARTS_CSS_VARIABLES = {
            BOOSTED4: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  ${_ouds_colors_css_variables_1.ODS_CHARTS_CONTEXT}
  `,
            BOOSTED5: `
  ${NON_BOOSTED5_VARIABLE}
  ${_ouds_colors_css_variables_1.ODS_CHARTS_CONTEXT}
  `,
            CUSTOM: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  ${_ouds_colors_css_variables_1.ODS_CHARTS_CONTEXT}
  `,
            NONE: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  ${_ouds_colors_css_variables_1.ODS_CHARTS_CONTEXT}
  `,
          };

          /***/
        },

      /***/ './src/theme/common/ODS.line-style.broken.ts':
        /*!***************************************************!*\
  !*** ./src/theme/common/ODS.line-style.broken.ts ***!
  \***************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.COMMON_LINE_STYLE_BROKEN = void 0;
          exports.COMMON_LINE_STYLE_BROKEN = {
            line: {
              itemStyle: {
                borderWidth: 1,
              },
              lineStyle: {
                width: 2,
              },
              symbolSize: 0,
              symbol: 'circle',
              smooth: false,
            },
          };

          /***/
        },

      /***/ './src/theme/common/ODS.line-style.smooth.ts':
        /*!***************************************************!*\
  !*** ./src/theme/common/ODS.line-style.smooth.ts ***!
  \***************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.COMMON_LINE_STYLE_SMOOTH = void 0;
          exports.COMMON_LINE_STYLE_SMOOTH = {
            line: {
              itemStyle: {
                borderWidth: 1,
              },
              lineStyle: {
                width: 2,
              },
              symbolSize: 0,
              symbol: 'circle',
              smooth: true,
            },
          };

          /***/
        },

      /***/ './src/theme/common/ODS.line-style.with-points.ts':
        /*!********************************************************!*\
  !*** ./src/theme/common/ODS.line-style.with-points.ts ***!
  \********************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.COMMON_LINE_STYLE_POINTS = void 0;
          exports.COMMON_LINE_STYLE_POINTS = {
            line: {
              itemStyle: {
                borderWidth: 1,
              },
              lineStyle: {
                width: 2,
              },
              symbolSize: '10',
              symbol: 'circle',
              smooth: false,
            },
          };

          /***/
        },

      /***/ './src/theme/const/main-axis-type.const.ts':
        /*!*************************************************!*\
  !*** ./src/theme/const/main-axis-type.const.ts ***!
  \*************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.MainAxisType = void 0;
          exports.isMainAxis = isMainAxis;
          var MainAxisType;
          (function (MainAxisType) {
            MainAxisType['category'] = 'category';
            MainAxisType['time'] = 'time';
          })(MainAxisType || (exports.MainAxisType = MainAxisType = {}));
          function isMainAxis(axis) {
            return axis && (axis.data || (axis.type && Object.values(MainAxisType).includes(axis.type)));
          }

          /***/
        },

      /***/ './src/theme/css-themes/css-helper.ts':
        /*!********************************************!*\
  !*** ./src/theme/css-themes/css-helper.ts ***!
  \********************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsCssHelper = void 0;
          const conditional_clone_deep_object_1 = __webpack_require__(
            /*! ../../tools/conditional-clone-deep-object */ './src/tools/conditional-clone-deep-object.ts'
          );
          const merge_objects_1 = __webpack_require__(/*! ../../tools/merge-objects */ './src/tools/merge-objects.ts');
          const colors_css_variables_1 = __webpack_require__(/*! ../colors/colors-css-variables */ './src/theme/colors/colors-css-variables.ts');
          const ods_chart_theme_1 = __webpack_require__(/*! ../ods-chart-theme */ './src/theme/ods-chart-theme.ts');
          class ODSChartsCssHelper {
            constructor(cssSelector, mode, cssThemeName) {
              this.cssSelector = cssSelector;
              this.mode = mode;
              this.cssThemeName = cssThemeName;
              this._computedStyle = undefined;
              this._computedStyleInitialized = false;
              this.cssVarsMapping = {};
            }
            /**
             * build a CSSStyleDeclaration build from a DOM element insert in the current charts holder.
             * It is used to calculate real time values for the css var.
             */
            get computedStyle() {
              if (undefined === this._computedStyle) {
                if (this.cssSelector) {
                  let contextElement = document.querySelector(
                    this.cssSelector + '>.ods-charts-style-' + (this.mode ? this.mode : ods_chart_theme_1.ODSChartsMode.DEFAULT)
                  );
                  if (!contextElement) {
                    const domElement = this.cssSelector ? document.querySelector(this.cssSelector) : null;
                    if (domElement) {
                      contextElement = document.createElement('div');
                      if (this.mode && this.mode !== ods_chart_theme_1.ODSChartsMode.DEFAULT) {
                        contextElement.setAttribute('data-bs-theme', this.mode);
                      }
                      contextElement.classList.add('ods-charts-context');
                      contextElement.classList.add('ods-charts-style-' + (this.mode ? this.mode : ods_chart_theme_1.ODSChartsMode.DEFAULT));
                      domElement.append(contextElement);
                    }
                  }
                  if (contextElement) {
                    this._computedStyle = window.getComputedStyle(contextElement);
                  }
                }
                this._computedStyle = this._computedStyle ? this._computedStyle : null;
                if (!this._computedStyle) {
                  console.error('unable to build computed style for chart css context', this.cssSelector, this.cssSelector);
                }
              }
              return this._computedStyle ? this._computedStyle : undefined;
            }
            /**
             * Init DOM elemnts for style. Add any specific style for the current theme.
             * Register a computed style will be initialised.
             * if `initComputedStyle()` return true, `removeComputedStyle()` must be called`after current treatment is done.
             * @returns true if the style was not initialised in a parent block which means `removeComputedStyle()` must be called`after current treatment is done.
             */
            initComputedStyle() {
              var _a;
              if (!this._computedStyleInitialized) {
                if (!document.getElementById('ods-charts-style-' + this.cssThemeName) && colors_css_variables_1.ODS_CHARTS_CSS_VARIABLES[this.cssThemeName]) {
                  const style = document.createElement('style');
                  style.textContent = colors_css_variables_1.ODS_CHARTS_CSS_VARIABLES[this.cssThemeName];
                  style.id = 'ods-charts-style-' + this.cssThemeName;
                  (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.append(style);
                }
                this._computedStyleInitialized = true;
                return true;
              }
              return false;
            }
            /**
             * After replacing all the css var of used objects by their value calculated in the DOM,
             * remove the used temporay DOM element.
             * `removeComputedStyle()` must be called if and only if the previous `initComputedStyle()` call returns true.
             */
            removeComputedStyle() {
              if (this.cssSelector) {
                const contextElement = document.querySelector(
                  this.cssSelector + '>.ods-charts-style-' + (this.mode ? this.mode : ods_chart_theme_1.ODSChartsMode.DEFAULT)
                );
                if (contextElement) {
                  contextElement.remove();
                }
              }
              this._computedStyle = undefined;
              this._computedStyleInitialized = false;
            }
            /**
             * give the calculated value of a property
             * @param name : the property name
             * @returns the value of that property in the style computed from the DOM
             */
            getPropertyValue(name) {
              const value = this.computedStyle ? this.computedStyle.getPropertyValue(name) : '';
              return value ? value : '';
            }
            /**
             * Replace a css var by it value
             * @param css the string to be analysed
             * @returns the updated value
             */
            replaceOneCssVar(css) {
              let returnedValue = css;
              if (this.cssSelector && 'string' === typeof returnedValue && !!this.computedStyle) {
                try {
                  const matches = this.getCssVarMatch(returnedValue);
                  if (matches) {
                    for (const foundVar of matches) {
                      if (!(foundVar in this.cssVarsMapping)) {
                        const varPartsRex = /var\( ?([^, ]+) ?, ?([^ ]+) ?\)/;
                        const varParts = foundVar.match(varPartsRex);
                        if (varParts) {
                          const varValue = this.getPropertyValue(varParts[1]);
                          if (!varValue) {
                            console.error('missing css var ', foundVar);
                          }
                          this.cssVarsMapping[foundVar] = varValue ? varValue : varParts[2];
                        } else {
                          const varNameRex = /var\( ?(.+) ?\)/;
                          const varName = foundVar.match(varNameRex);
                          if (varName) {
                            const varValue = this.getPropertyValue(varName[1]);
                            if (varValue) {
                              this.cssVarsMapping[foundVar] = varValue;
                            } else {
                              console.error('missing css var ', foundVar);
                              this.cssVarsMapping[foundVar] = foundVar;
                            }
                          } else {
                            console.error('missing css var ', foundVar);
                            this.cssVarsMapping[foundVar] = foundVar;
                          }
                        }
                      }
                      if (foundVar in this.cssVarsMapping) {
                        returnedValue = returnedValue.replace(foundVar, this.cssVarsMapping[foundVar]);
                      }
                    }
                  }
                } catch (error) {}
              }
              return returnedValue;
            }
            /**
             * replace any css var reference by its value
             * @param subTreeConfig: subTree in which css var must be replaced by their value
             * @returns the subTreeConfig updated
             */
            replaceRecursivelyCssVars(subTreeConfig) {
              var newConfig = subTreeConfig;
              for (const key of Object.keys(newConfig)) {
                if ((0, merge_objects_1.isVarArray)(newConfig[key])) {
                  for (let index = 0; index < newConfig[key].length; index++) {
                    if ((0, merge_objects_1.isVarObject)(newConfig[key][index])) {
                      newConfig[key][index] = this.replaceRecursivelyCssVars(newConfig[key][index]);
                    } else if ('string' === typeof newConfig[key][index]) {
                      newConfig[key][index] = this.replaceOneCssVar(newConfig[key][index]);
                    }
                  }
                } else if ((0, merge_objects_1.isVarObject)(newConfig[key])) {
                  newConfig[key] = this.replaceRecursivelyCssVars(newConfig[key]);
                } else if ('string' === typeof newConfig[key]) {
                  newConfig[key] = this.replaceOneCssVar(newConfig[key]);
                }
              }
              return newConfig;
            }
            /**
             * Return matches of a css var in the given string
             * @param value : string in whic looking for in css var
             * @returns : the regular expresion matches
             */
            getCssVarMatch(value) {
              const regex = /var\(([^,]*),?(.*)\)/g;
              return value.match(regex);
            }
            changeThemeMode(mode) {
              this.cssVarsMapping = {};
              this.mode = mode;
            }
            /**
             * Replace any css var reference (like `var(--bs-border-color-subtle)`) by its value.
             * @param themeConfiguration : object containing some css var string refernce
             * @returns : the themeCongiguration updated
             */
            replaceAllCssVars(themeConfiguration) {
              let result = themeConfiguration;
              const initStyleNotYetDone = this.initComputedStyle();
              try {
                if (!!this.computedStyle) {
                  result = this.replaceRecursivelyCssVars(themeConfiguration);
                }
              } finally {
                if (initStyleNotYetDone) {
                  this.removeComputedStyle();
                }
              }
              return result;
            }
            /**
             * Make a copy of any object parts that contains css var reference (like `var(--bs-border-color-subtle)`)
             * and replace those css vars by their value.
             * @param chartData : object containing some css var string reference
             * @returns the new object partially clone
             */
            cloneAndReplaceAllCssVars(chartData) {
              const initStyleNotYetDone = this.initComputedStyle();
              try {
                return this.replaceAllCssVars(
                  (0, conditional_clone_deep_object_1.conditionalCloneDeepObject)(chartData, (value) => !!this.getCssVarMatch(value))
                );
              } finally {
                if (initStyleNotYetDone) {
                  this.removeComputedStyle();
                }
              }
            }
          }
          exports.ODSChartsCssHelper = ODSChartsCssHelper;

          /***/
        },

      /***/ './src/theme/css-themes/css-themes.ts':
        /*!********************************************!*\
  !*** ./src/theme/css-themes/css-themes.ts ***!
  \********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsCSSThemes =
            exports.ODSChartsCSSThemeDefinition =
            exports.ODSChartsCSSPopoverDefinition =
            exports.ODSChartsCSSLegendsDefinition =
            exports.ODSChartsItemGroupCSSDefinition =
            exports.ODSChartsItemCSSDefinition =
            exports.ODSChartsCSSThemesNames =
              void 0;
          var ODSChartsCSSThemesNames;
          (function (ODSChartsCSSThemesNames) {
            ODSChartsCSSThemesNames['NONE'] = 'NONE';
            ODSChartsCSSThemesNames['BOOSTED4'] = 'BOOSTED4';
            ODSChartsCSSThemesNames['BOOSTED5'] = 'BOOSTED5';
            ODSChartsCSSThemesNames['CUSTOM'] = 'CUSTOM';
          })(ODSChartsCSSThemesNames || (exports.ODSChartsCSSThemesNames = ODSChartsCSSThemesNames = {}));
          /**
           * ODSChartsItemCSSDefinition defines the classes or styles to be added on generated HTML element
           */
          class ODSChartsItemCSSDefinition {
            static getClasses(def) {
              return def && def.classes ? def.classes.join(' ') : '';
            }
            static getStyles(def) {
              return def && def.styles
                ? Object.keys(def.styles)
                    .map((property) => `${property}: ${def.styles[property]}`)
                    .join('; ')
                : '';
            }
          }
          exports.ODSChartsItemCSSDefinition = ODSChartsItemCSSDefinition;
          /**
           * ODSChartsItemGroupCSSDefinition defines the classes an styles to be add on code generated by the library.
           */
          class ODSChartsItemGroupCSSDefinition {}
          exports.ODSChartsItemGroupCSSDefinition = ODSChartsItemGroupCSSDefinition;
          class ODSChartsCSSLegendsDefinition extends ODSChartsItemGroupCSSDefinition {}
          exports.ODSChartsCSSLegendsDefinition = ODSChartsCSSLegendsDefinition;
          class ODSChartsCSSPopoverDefinition extends ODSChartsItemGroupCSSDefinition {}
          exports.ODSChartsCSSPopoverDefinition = ODSChartsCSSPopoverDefinition;
          /**
           * `ODSChartsCSSThemeDefinition` defines the classes and styles to be added on code generated by the library.
           *
           * In general, `ODSChartsCSSThemeDefinition` is not used directly, but one of the instances provided by {@link ODSChartsCSSThemes} is used.
           */
          class ODSChartsCSSThemeDefinition {
            constructor() {
              /**
               * classes an styles to be add to legends generated code.
               */
              this.legends = undefined;
              /**
               * classes an styles to be add to popover and tooltip generated code.
               */
              this.popover = undefined;
            }
          }
          exports.ODSChartsCSSThemeDefinition = ODSChartsCSSThemeDefinition;
          const BOOSTED5_Definition = {
            legends: {
              odsChartsLegendHolder: {
                classes: ['pt-2'],
              },
              odsChartsLegendContainer: {
                classes: ['d-flex', 'flex-wrap', 'justify-content-start'],
              },
              odsChartsLegendContainerVertical: {
                classes: ['flex-column'],
              },
              odsChartsLegendLink: { classes: ['mx-3', 'pb-2', 'text-decoration-none'] },
              odsChartsLegendLinkOpacity: { classes: ['opacity-25'] },
              odsChartsLegendColorHolder: {
                classes: ['d-inline-block', 'border', 'border-1'],
              },
              odsChartsLegendColor: {
                classes: ['d-block', 'position-relative'],
                styles: {
                  width: '8px',
                  height: '8px',
                },
              },
              odsChartsLegendLabel: {},
            },
            popover: {
              odsChartsPopoverLine: { classes: ['text-nowrap'] },
              odsChartsPopoverColorHolder: {
                classes: ['d-inline-block', 'border', 'border-1'],
              },
              odsChartsPopoverColor: {
                classes: ['d-block', 'position-relative'],
                styles: {
                  width: '8px',
                  height: '8px',
                },
              },
            },
          };
          const BOOSTED4_Definition = {
            legends: {
              odsChartsLegendHolder: {
                classes: ['pt-2'],
              },
              odsChartsLegendContainer: {
                classes: ['d-flex', 'flex-wrap', 'justify-content-start'],
              },
              odsChartsLegendContainerVertical: {
                classes: ['flex-column'],
              },
              odsChartsLegendLink: {
                classes: ['mx-3', 'pb-2', 'text-decoration-none'],
                styles: {
                  opacity: '1',
                },
              },
              odsChartsLegendLinkOpacity: {
                classes: ['opacity-25'],
                styles: {
                  opacity: '.25',
                },
              },
              odsChartsLegendColorHolder: {
                classes: ['d-inline-block', 'border'],
                styles: {
                  'border-width': '0.10625rem!important',
                },
              },
              odsChartsLegendColor: {
                classes: ['d-block', 'position-relative'],
                styles: {
                  width: '8px',
                  height: '8px',
                },
              },
              odsChartsLegendLabel: {},
            },
            popover: {
              odsChartsPopoverColorHolder: {
                classes: ['d-inline-block', 'border'],
                styles: {
                  'border-width': '0.10625rem!important',
                },
              },
              odsChartsPopoverColor: {
                classes: ['d-block', 'position-relative'],
                styles: {
                  width: '8px',
                  height: '8px',
                },
              },
            },
          };
          const NONE = {
            legends: { odsChartsLegendHolder: { classes: ['ods-charts-no-css-lib'] } },
            popover: {
              odsChartsPopoverHolder: { classes: ['ods-charts-no-css-lib'] },
              odsChartsPopover: { classes: ['ods-charts-no-css-lib'] },
              odsChartsPopoverBodyContent: { classes: ['ods-charts-no-css-lib'] },
              odsChartsPopoverLine: { classes: ['ods-charts-no-css-lib'] },
            },
          };
          /**
           * Pre-configured {@link ODSChartsCSSThemeDefinition}
           * - ODSCharts.ODSChartsCSSThemes.NONE: the generated code will use an embedded independent style auto-generated by the library.
           * - ODSCharts.ODSChartsCSSThemes.BOOSTED5: the generated code will use Boosted 5 framework CSS.
           * - ODSCharts.ODSChartsCSSThemes.BOOSTED4: the generated code will use Boosted 4 framework CSS.
           */
          exports.ODSChartsCSSThemes = {
            BOOSTED4: BOOSTED4_Definition,
            BOOSTED5: BOOSTED5_Definition,
            NONE: NONE,
            CUSTOM: { legends: {}, popover: {} },
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.blue.ts':
        /*!**********************************************!*\
  !*** ./src/theme/default/ODS.colors.blue.ts ***!
  \**********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_BLUE = void 0;
          exports.DEFAULT_COLORS_BLUE = {
            color: [
              'var(--ods-blue-1, #085EBD)',
              'var(--ods-blue-2, #237ECA)',
              'var(--ods-blue-3, #3E9DD6)',
              'var(--ods-blue-4, #4BB4E6)',
              'var(--ods-blue-5, #80CEEF)',
              'var(--ods-blue-6, #B5E8F7)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.categorical.ts':
        /*!*****************************************************!*\
  !*** ./src/theme/default/ODS.colors.categorical.ts ***!
  \*****************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_CATEGORICAL = void 0;
          exports.DEFAULT_COLORS_CATEGORICAL = {
            color: [
              'var(--ods-categorical-1, #085ebd)',
              'var(--ods-categorical-2, #27a971)',
              'var(--ods-categorical-3, #bc4d9a)',
              'var(--ods-categorical-4, #9373bd)',
              'var(--ods-categorical-5, #9d6e06)',
              'var(--ods-categorical-6, #333333)',
              'var(--ods-categorical-7, #3e9dd6)',
              'var(--ods-categorical-8, #0a6e31)',
              'var(--ods-categorical-9, #d573bb)',
              'var(--ods-categorical-10, #492191)',
              'var(--ods-categorical-11, #b98f11)',
              'var(--ods-categorical-12, #666666)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.darker-tints.ts':
        /*!******************************************************!*\
  !*** ./src/theme/default/ODS.colors.darker-tints.ts ***!
  \******************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_DARKER_TINTS = void 0;
          exports.DEFAULT_COLORS_DARKER_TINTS = {
            color: [
              'var(--ods-cyan-dark, #085EBD)',
              'var(--ods-teal-dark, #0A6E31)',
              'var(--ods-pink-dark, #FF8AD4)',
              'var(--ods-indigo-dark, #492191)',
              'var(--ods-yellow-dark, #FFB400)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.functional.ts':
        /*!****************************************************!*\
  !*** ./src/theme/default/ODS.colors.functional.ts ***!
  \****************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_FUNCTIONAL = void 0;
          exports.DEFAULT_COLORS_FUNCTIONAL = {
            color: [
              'var(--ods-functional-1, #F16E00)',
              'var(--ods-functional-2, #EEEEEE)',
              'var(--ods-functional-3, #228722)',
              'var(--ods-functional-4, #FFCC00)',
              'var(--ods-functional-5, #CD3C14)',
              'var(--ods-functional-6, #4170D8)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.green.ts':
        /*!***********************************************!*\
  !*** ./src/theme/default/ODS.colors.green.ts ***!
  \***********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_GREEN = void 0;
          exports.DEFAULT_COLORS_GREEN = {
            color: [
              'var(--ods-green-1, #0A6E31)',
              'var(--ods-green-2, #27A971)',
              'var(--ods-green-3, #84D5AF)',
              'var(--ods-green-4, #198C51)',
              'var(--ods-green-5, #50BE87)',
              'var(--ods-green-6, #B8EBD6)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.lighter-tints.ts':
        /*!*******************************************************!*\
  !*** ./src/theme/default/ODS.colors.lighter-tints.ts ***!
  \*******************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_LIGHTER_TINTS = void 0;
          exports.DEFAULT_COLORS_LIGHTER_TINTS = {
            color: [
              'var(--ods-cyan-light, #B5E8F7)',
              'var(--ods-teal-light, #B8EBD6)',
              'var(--ods-pink-light, #FFE8F7)',
              'var(--ods-indigo-light, #D9C2F0)',
              'var(--ods-yellow-light, #FFF6B6)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.pink.ts':
        /*!**********************************************!*\
  !*** ./src/theme/default/ODS.colors.pink.ts ***!
  \**********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_PINK = void 0;
          exports.DEFAULT_COLORS_PINK = {
            color: [
              'var(--ods-pink-1, #BC4D9A)',
              'var(--ods-pink-2, #D573BB)',
              'var(--ods-pink-3, #FF8AD4)',
              'var(--ods-pink-4, #FFB4E6)',
              'var(--ods-pink-5, #FFCEEF)',
              'var(--ods-pink-6, #FFE8F7)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.purple.ts':
        /*!************************************************!*\
  !*** ./src/theme/default/ODS.colors.purple.ts ***!
  \************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_PURPLE = void 0;
          exports.DEFAULT_COLORS_PURPLE = {
            color: [
              'var(--ods-purple-1, #492191)',
              'var(--ods-purple-2, #6E4AA7)',
              'var(--ods-purple-3, #9373BD)',
              'var(--ods-purple-4, #A885D8)',
              'var(--ods-purple-5, #C1A4E4)',
              'var(--ods-purple-6, #D9C2F0)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.supporting-colors.ts':
        /*!***********************************************************!*\
  !*** ./src/theme/default/ODS.colors.supporting-colors.ts ***!
  \***********************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_SUPPORTING_COLORS = void 0;
          exports.DEFAULT_COLORS_SUPPORTING_COLORS = {
            color: ['var(--bs-cyan, #4bb4e6)', 'var(--bs-teal, #50be87)', 'var(--bs-pink, #ffb4e6)', 'var(--bs-indigo, #a885d8)', 'var(--ods-yellow, #ffd200)'],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.ts':
        /*!*****************************************!*\
  !*** ./src/theme/default/ODS.colors.ts ***!
  \*****************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS = void 0;
          exports.DEFAULT_COLORS = {
            color: [
              'var(--ods-default-1, #085edb)',
              'var(--ods-default-2, #0a6e31)',
              'var(--ods-default-3, #bc4d9a)',
              'var(--ods-default-4, #492191)',
              'var(--ods-default-5, #b98f11)',
              'var(--ods-default-6, #666666)',
              'var(--ods-default-7, #3e9dd6)',
              'var(--ods-default-8, #27a971)',
              'var(--ods-default-9, #d573bb)',
              'var(--ods-default-10, #9373bd)',
              'var(--ods-default-11, #9d6e06)',
              'var(--ods-default-12, #333333)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.colors.yellow.ts':
        /*!************************************************!*\
  !*** ./src/theme/default/ODS.colors.yellow.ts ***!
  \************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COLORS_YELLOW = void 0;
          exports.DEFAULT_COLORS_YELLOW = {
            color: [
              'var(--ods-yellow-1, #9D6E06)',
              'var(--ods-yellow-2, #B98F11)',
              'var(--ods-yellow-3, #FFB400)',
              'var(--ods-yellow-4, #FFD200)',
              'var(--ods-yellow-5, #FFE45B)',
              'var(--ods-yellow-6, #FFF6B6)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/ODS.common.ts':
        /*!*****************************************!*\
  !*** ./src/theme/default/ODS.common.ts ***!
  \*****************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_COMMON = void 0;
          exports.DEFAULT_COMMON = {
            backgroundColor: 'var(--bs-body-bg, #fff)',
          };

          /***/
        },

      /***/ './src/theme/default/ODS.lines.axis.ts':
        /*!*********************************************!*\
  !*** ./src/theme/default/ODS.lines.axis.ts ***!
  \*********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_LINES_AXIS = void 0;
          exports.DEFAULT_LINES_AXIS = {
            categoryAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #ccc)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
            },
            valueAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
            },
            logAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
            },
            timeAxis: {
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
              axisLabel: {
                show: true,
                color: 'var(--bs-body-color, #000000)',
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'var(--bs-border-color-subtle, #cccccc)',
                },
              },
            },
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.blue.ts':
        /*!***********************************************!*\
  !*** ./src/theme/default/OUDS.colors.blue.ts ***!
  \***********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_BLUE = void 0;
          exports.DEFAULT_OUDS_COLORS_BLUE = {
            color: [
              'var(--ouds-charts-color-sequential-accent-1-tint-100)',
              'var(--ouds-charts-color-sequential-accent-1-tint-200)',
              'var(--ouds-charts-color-sequential-accent-1-tint-300)',
              'var(--ouds-charts-color-sequential-accent-1-tint-400)',
              'var(--ouds-charts-color-sequential-accent-1-tint-500)',
              'var(--ouds-charts-color-sequential-accent-1-tint-600)',
              'var(--ouds-charts-color-sequential-accent-1-tint-700)',
              'var(--ouds-charts-color-sequential-accent-1-tint-800)',
              'var(--ouds-charts-color-sequential-accent-1-tint-900)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.categorical.ts':
        /*!******************************************************!*\
  !*** ./src/theme/default/OUDS.colors.categorical.ts ***!
  \******************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_CATEGORICAL = void 0;
          exports.DEFAULT_OUDS_COLORS_CATEGORICAL = {
            color: [
              'var(--ouds-charts-color-categorical-tier-1)',
              'var(--ouds-charts-color-categorical-tier-2)',
              'var(--ouds-charts-color-categorical-tier-3)',
              'var(--ouds-charts-color-categorical-tier-4)',
              'var(--ouds-charts-color-categorical-tier-5)',
              'var(--ouds-charts-color-categorical-tier-6)',
              'var(--ouds-charts-color-categorical-tier-7)',
              'var(--ouds-charts-color-categorical-tier-8)',
              'var(--ouds-charts-color-categorical-tier-9)',
              'var(--ouds-charts-color-categorical-tier-10)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.functional.ts':
        /*!*****************************************************!*\
  !*** ./src/theme/default/OUDS.colors.functional.ts ***!
  \*****************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_FUNCTIONAL = void 0;
          exports.DEFAULT_OUDS_COLORS_FUNCTIONAL = {
            color: [
              'var(--ouds-charts-color-functional-positive)',
              'var(--ouds-charts-color-functional-warning)',
              'var(--ouds-charts-color-functional-negative)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.green.ts':
        /*!************************************************!*\
  !*** ./src/theme/default/OUDS.colors.green.ts ***!
  \************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_GREEN = void 0;
          exports.DEFAULT_OUDS_COLORS_GREEN = {
            color: [
              'var(--ouds-charts-color-sequential-accent-2-tint-100)',
              'var(--ouds-charts-color-sequential-accent-2-tint-200)',
              'var(--ouds-charts-color-sequential-accent-2-tint-300)',
              'var(--ouds-charts-color-sequential-accent-2-tint-400)',
              'var(--ouds-charts-color-sequential-accent-2-tint-500)',
              'var(--ouds-charts-color-sequential-accent-2-tint-600)',
              'var(--ouds-charts-color-sequential-accent-2-tint-700)',
              'var(--ouds-charts-color-sequential-accent-2-tint-800)',
              'var(--ouds-charts-color-sequential-accent-2-tint-900)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.highlight.ts':
        /*!****************************************************!*\
  !*** ./src/theme/default/OUDS.colors.highlight.ts ***!
  \****************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_HIGHLIGHT = void 0;
          exports.DEFAULT_OUDS_COLORS_HIGHLIGHT = {
            color: ['var(--ouds-charts-color-highlight)', 'var(--ouds-charts-color-neutral)'],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.pink.ts':
        /*!***********************************************!*\
  !*** ./src/theme/default/OUDS.colors.pink.ts ***!
  \***********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_PINK = void 0;
          exports.DEFAULT_OUDS_COLORS_PINK = {
            color: [
              'var(--ouds-charts-color-sequential-accent-3-tint-100)',
              'var(--ouds-charts-color-sequential-accent-3-tint-200)',
              'var(--ouds-charts-color-sequential-accent-3-tint-300)',
              'var(--ouds-charts-color-sequential-accent-3-tint-400)',
              'var(--ouds-charts-color-sequential-accent-3-tint-500)',
              'var(--ouds-charts-color-sequential-accent-3-tint-600)',
              'var(--ouds-charts-color-sequential-accent-3-tint-700)',
              'var(--ouds-charts-color-sequential-accent-3-tint-800)',
              'var(--ouds-charts-color-sequential-accent-3-tint-900)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.purple.ts':
        /*!*************************************************!*\
  !*** ./src/theme/default/OUDS.colors.purple.ts ***!
  \*************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_PURPLE = void 0;
          exports.DEFAULT_OUDS_COLORS_PURPLE = {
            color: [
              'var(--ouds-charts-color-sequential-accent-4-tint-100)',
              'var(--ouds-charts-color-sequential-accent-4-tint-200)',
              'var(--ouds-charts-color-sequential-accent-4-tint-300)',
              'var(--ouds-charts-color-sequential-accent-4-tint-400)',
              'var(--ouds-charts-color-sequential-accent-4-tint-500)',
              'var(--ouds-charts-color-sequential-accent-4-tint-600)',
              'var(--ouds-charts-color-sequential-accent-4-tint-700)',
              'var(--ouds-charts-color-sequential-accent-4-tint-800)',
              'var(--ouds-charts-color-sequential-accent-4-tint-900)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.single.ts':
        /*!*************************************************!*\
  !*** ./src/theme/default/OUDS.colors.single.ts ***!
  \*************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_SINGLE = void 0;
          exports.DEFAULT_OUDS_COLORS_SINGLE = {
            color: [
              'var(--ouds-charts-color-categorical-tier-1)',
              'var(--ouds-charts-color-categorical-tier-6)',
              'var(--ouds-charts-color-categorical-tier-7)',
              'var(--ouds-charts-color-categorical-tier-2)',
              'var(--ouds-charts-color-categorical-tier-5)',
              'var(--ouds-charts-color-categorical-tier-10)',
            ],
          };

          /***/
        },

      /***/ './src/theme/default/OUDS.colors.yellow.ts':
        /*!*************************************************!*\
  !*** ./src/theme/default/OUDS.colors.yellow.ts ***!
  \*************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DEFAULT_OUDS_COLORS_YELLOW = void 0;
          exports.DEFAULT_OUDS_COLORS_YELLOW = {
            color: [
              'var(--ouds-charts-color-sequential-accent-5-tint-100)',
              'var(--ouds-charts-color-sequential-accent-5-tint-200)',
              'var(--ouds-charts-color-sequential-accent-5-tint-300)',
              'var(--ouds-charts-color-sequential-accent-5-tint-400)',
              'var(--ouds-charts-color-sequential-accent-5-tint-500)',
              'var(--ouds-charts-color-sequential-accent-5-tint-600)',
              'var(--ouds-charts-color-sequential-accent-5-tint-700)',
              'var(--ouds-charts-color-sequential-accent-5-tint-800)',
              'var(--ouds-charts-color-sequential-accent-5-tint-900)',
            ],
          };

          /***/
        },

      /***/ './src/theme/legends/ods-chart-legends-definitions.ts':
        /*!************************************************************!*\
  !*** ./src/theme/legends/ods-chart-legends-definitions.ts ***!
  \************************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsLegendHolderDefinition = void 0;
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
           */
          class ODSChartsLegendHolderDefinition {
            constructor(
              /**
               * Legends container CSS selector
               */
              legendHolderSelector,
              /**
               * Optionally indicates whether captions are displayed horizontally or vertically.
               * By default, the value of the `legend.orient` option in Apache ECharts will be used.
               * If `legend.orient` does not exist, the default value will be `'horizontal'`.
               */
              orientation,
              /**
               * Array referencing the series whose legends are to be displayed in this legend container.
               * The reference can be the series name, the series label or simply the stack name in the case of stacked bars.
               * If `seriesRef` is absent, this container will be the default container for non-referenced legends.
               */
              seriesRef
            ) {
              this.legendHolderSelector = legendHolderSelector;
              this.orientation = orientation;
              this.seriesRef = seriesRef;
            }
          }
          exports.ODSChartsLegendHolderDefinition = ODSChartsLegendHolderDefinition;

          /***/
        },

      /***/ './src/theme/legends/ods-chart-legends.ts':
        /*!************************************************!*\
  !*** ./src/theme/legends/ods-chart-legends.ts ***!
  \************************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsLegends = exports.ODSChartsLegendData = void 0;
          const css_themes_1 = __webpack_require__(/*! ../css-themes/css-themes */ './src/theme/css-themes/css-themes.ts');
          const merge_objects_1 = __webpack_require__(/*! ../../tools/merge-objects */ './src/tools/merge-objects.ts');
          const DEFAULT_CSS = `.ods-charts-no-css-lib.ods-charts-legend-holder {
  padding-left: 20px;
  padding-top: 10px;
  position: relative;
}

.ods-charts-no-css-lib .ods-charts-legend-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.ods-charts-no-css-lib .ods-charts-legend-container-vertical {
  flex-direction: column;
}

.ods-charts-no-css-lib .ods-charts-legend-link {
  text-decoration: none;
  padding-bottom: 0.625rem;
  margin-right: 20px;
  margin-left: 20px;
  color: var(--bs-body-color, #000000);
}
.ods-charts-no-css-lib .ods-charts-legend-link.ods-charts-legend-link-opacity {
  opacity: .25;
}

.ods-charts-no-css-lib .ods-charts-legend-color-holder {
  border: 1px solid var(--bs-border-color, #000000);
  display: inline-block;
}

.ods-charts-no-css-lib .ods-charts-legend-color {
  width: 8px;
  height: 8px;
  position: relative;
  display: block;
}
.ods-charts-no-css-lib .ods-charts-legend-label {
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height 24px
}

[data-bs-theme="dark"] .ods-charts-no-css-lib.ods-charts-legend-holder {
  background-color: var(--bs-gray-950, #141414);
}
[data-bs-theme="dark"] .ods-charts-no-css-lib.ods-charts-legend-holder .ods-charts-legend-link {
  color: var(--bs-white, #fff);
}
[data-bs-theme="light"] .ods-charts-no-css-lib.ods-charts-legend-holder {
  background-color: var(--bs-white, #fff);
}
[data-bs-theme="light"] .ods-charts-no-css-lib.ods-charts-legend-holder .ods-charts-legend-link {
  color: var(--bs-black, #000);
}
`;
          class ODSChartsLegendData {
            constructor() {
              this.labels = [];
              this.names = [];
            }
          }
          exports.ODSChartsLegendData = ODSChartsLegendData;
          class ODSChartsLegends {
            constructor(echart, legendHolders) {
              this.echart = echart;
              this.legendHolders = legendHolders;
            }
            static addLegend(echart, legendHolders) {
              const legendHoldersArray = (0, merge_objects_1.isVarArray)(legendHolders)
                ? legendHolders
                : (0, merge_objects_1.isVarObject)(legendHolders)
                  ? [legendHolders]
                  : [{ legendHolderSelector: legendHolders }];
              return new ODSChartsLegends(echart, legendHoldersArray);
            }
            static getLegendData(dataOptions, updateDataOption = true) {
              let legendData = dataOptions.legend && dataOptions.legend.data ? dataOptions.legend.data : [];
              let serieNames;
              const monoSerieGraphe = 1 === dataOptions.series.length && dataOptions.series[0].data && ['pie'].includes(dataOptions.series[0].type);
              if (!dataOptions.legend || !dataOptions.legend.data) {
                if (dataOptions.dataset && dataOptions.dataset.source) {
                  try {
                    if (updateDataOption && !dataOptions.legend) {
                      dataOptions.legend = {};
                    }
                    legendData = dataOptions.dataset.source[0].reduce((accumulator, currentValue, currentIndex) => {
                      if (currentIndex > 0) {
                        accumulator.push(currentValue);
                      }
                      return accumulator;
                    }, []);
                    if (updateDataOption) {
                      dataOptions.legend.data = legendData;
                    }
                  } catch (error) {
                    throw new Error(`Missing data array of legends in legend chart option`);
                  }
                } else if (!dataOptions.series) {
                  throw new Error(`Missing data array of legends in legend chart option`);
                } else {
                  if (updateDataOption && !dataOptions.legend) {
                    dataOptions.legend = {};
                  }
                  if (monoSerieGraphe) {
                    legendData = dataOptions.series[0].data.map((serie, index) => {
                      if (!serie.name) {
                        throw new Error(`Missing data array of legends in legend chart option`);
                      }
                      return serie.name;
                    });
                  } else {
                    legendData = dataOptions.series.map((serie, index) => {
                      if (!serie.name) {
                        throw new Error(`Missing data array of legends in legend chart option`);
                      }
                      return serie.name;
                    });
                  }
                  if (updateDataOption) {
                    dataOptions.legend.data = legendData;
                  }
                }
              }
              if (monoSerieGraphe) {
                serieNames = dataOptions.series[0].data.map((serie, index) => {
                  if (!serie.name) {
                    throw new Error(`Missing data array of legends in legend chart option`);
                  }
                  return serie.name;
                });
              } else {
                if (updateDataOption && !dataOptions.series) {
                  dataOptions.series = legendData.map((serie, index) => ({
                    name: 'serie_Name_' + index,
                  }));
                }
                serieNames = dataOptions.series.map((serie, index) => {
                  if (!serie.name) {
                    if (!updateDataOption) {
                      throw new Error(`Missing series names in chart option`);
                    }
                    serie.name = 'serie_Name_' + index;
                  }
                  return serie.name;
                });
              }
              return {
                labels: legendData,
                names: serieNames,
              };
            }
            addLegend(dataOptions, colors, cssTheme, cssThemeName, mode) {
              if (css_themes_1.ODSChartsCSSThemesNames.NONE === cssThemeName && !document.querySelector('#ods-chart-legends-none-css')) {
                let style = document.createElement('style');
                style.id = 'ods-chart-legends-none-css';
                style.textContent = DEFAULT_CSS;
                document.head.appendChild(style);
              }
              // keep Apache ECharts default configuration for legend orientation
              if (dataOptions && dataOptions.legend && dataOptions.legend.orient) {
                for (const legendHolder of this.legendHolders) {
                  if (!legendHolder.orientation) {
                    legendHolder.orientation = dataOptions.legend.orient;
                  }
                }
              }
              const allLegends = ODSChartsLegends.getLegendData(dataOptions);
              const legendHolders = {};
              let defaultLegendHolder = undefined;
              for (const legendHolder of this.legendHolders) {
                if (!document.querySelector(legendHolder.legendHolderSelector)) {
                  throw new Error(`No legend holder found with selector ${legendHolder.legendHolderSelector}`);
                }
                legendHolders[legendHolder.legendHolderSelector] = Object.assign(Object.assign({}, legendHolder), {
                  legends: { labels: [], names: [], index: [] },
                });
                if (!legendHolder.seriesRef) {
                  defaultLegendHolder = legendHolders[legendHolder.legendHolderSelector];
                }
              }
              for (let index = 0; index < allLegends.names.length && index < allLegends.labels.length; index++) {
                let legendHolderSelector = Object.keys(legendHolders).find((legendHolderKey) => {
                  var _a, _b;
                  return (
                    !!legendHolders[legendHolderKey].seriesRef &&
                    (((_a = legendHolders[legendHolderKey].seriesRef) === null || _a === void 0 ? void 0 : _a.includes(allLegends.names[index])) ||
                      ((_b = legendHolders[legendHolderKey].seriesRef) === null || _b === void 0 ? void 0 : _b.includes(allLegends.labels[index])))
                  );
                });
                if (!legendHolderSelector) {
                  const series = dataOptions.series && dataOptions.series.find((series) => series.name === allLegends.names[index]);
                  if (series && series.stack) {
                    legendHolderSelector = Object.keys(legendHolders).find((legendHolderKey) => {
                      var _a;
                      return (
                        !!legendHolders[legendHolderKey].seriesRef &&
                        ((_a = legendHolders[legendHolderKey].seriesRef) === null || _a === void 0 ? void 0 : _a.includes(series.stack))
                      );
                    });
                  }
                }
                if (legendHolderSelector) {
                  legendHolders[legendHolderSelector].legends.labels.push(allLegends.labels[index]);
                  legendHolders[legendHolderSelector].legends.names.push(allLegends.names[index]);
                  legendHolders[legendHolderSelector].legends.index.push(index);
                } else if (!!defaultLegendHolder) {
                  defaultLegendHolder.legends.labels.push(allLegends.labels[index]);
                  defaultLegendHolder.legends.names.push(allLegends.names[index]);
                  defaultLegendHolder.legends.index.push(index);
                }
              }
              dataOptions.legend.show = false;
              for (const legendHolderSelector of Object.keys(legendHolders)) {
                this.generateHandler(legendHolderSelector, cssTheme);
                const legendHolder = document.querySelector(legendHolderSelector);
                if (!legendHolder) {
                  throw new Error(`Can't find legend holder using the selector ${legendHolderSelector}`);
                }
                document.querySelector(legendHolderSelector).innerHTML = this.generateLegend(
                  legendHolderSelector,
                  colors,
                  legendHolders[legendHolderSelector].legends,
                  cssTheme,
                  mode,
                  legendHolders[legendHolderSelector].orientation
                );
              }
            }
            generateLegend(legendHolderSelector, colors, legends, cssTheme, mode, orientation = 'horizontal') {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              return `<div class="ods-charts-legend-holder ods-charts-mode-${mode} ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_a = cssTheme.legends) === null || _a === void 0 ? void 0 : _a.odsChartsLegendHolder)}"
    style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_b = cssTheme.legends) === null || _b === void 0 ? void 0 : _b.odsChartsLegendHolder)}"
    >
    <div class="ods-charts-legend-container ods-charts-legend-container-${orientation} ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_c = cssTheme.legends) === null || _c === void 0 ? void 0 : _c.odsChartsLegendContainer)} ${'vertical' === orientation ? css_themes_1.ODSChartsItemCSSDefinition.getClasses((_d = cssTheme.legends) === null || _d === void 0 ? void 0 : _d.odsChartsLegendContainerVertical) : css_themes_1.ODSChartsItemCSSDefinition.getClasses((_e = cssTheme.legends) === null || _e === void 0 ? void 0 : _e.odsChartsLegendContainerHorizontal)}"
    style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_f = cssTheme.legends) === null || _f === void 0 ? void 0 : _f.odsChartsLegendContainer)} ${'vertical' === orientation ? css_themes_1.ODSChartsItemCSSDefinition.getStyles((_g = cssTheme.legends) === null || _g === void 0 ? void 0 : _g.odsChartsLegendContainerVertical) : css_themes_1.ODSChartsItemCSSDefinition.getStyles((_h = cssTheme.legends) === null || _h === void 0 ? void 0 : _h.odsChartsLegendContainerHorizontal)}"
    >
    ${(legends ? legends.labels : []).map((legendLabel, indexInHolder) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      let colorIndex = legends.index[indexInHolder] % colors.length;
      return `<a class="ods-charts-legend-link ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_a = cssTheme.legends) === null || _a === void 0 ? void 0 : _a.odsChartsLegendLink)}"
      style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_b = cssTheme.legends) === null || _b === void 0 ? void 0 : _b.odsChartsLegendLink)}"
      href="javascript:" onclick="ods_chart_legend_switchLegend[${JSON.stringify(legendHolderSelector).replace(/"/g, '&quot;')}](this, ${JSON.stringify(legends.names[indexInHolder]).replace(/"/g, '&quot;')})">
      <span class="ods-charts-legend-color-holder ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_c = cssTheme.legends) === null || _c === void 0 ? void 0 : _c.odsChartsLegendColorHolder)}"
      style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_d = cssTheme.legends) === null || _d === void 0 ? void 0 : _d.odsChartsLegendColorHolder)}">
      <span style="background-color:${colors[colorIndex]}; ${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_e = cssTheme.legends) === null || _e === void 0 ? void 0 : _e.odsChartsLegendColor)}" class="ods-charts-legend-color ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_f = cssTheme.legends) === null || _f === void 0 ? void 0 : _f.odsChartsLegendColor)}"></span>
      </span>

    <label class="ods-charts-legend-label ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_g = cssTheme.legends) === null || _g === void 0 ? void 0 : _g.odsChartsLegendLabel)}"
    style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_h = cssTheme.legends) === null || _h === void 0 ? void 0 : _h.odsChartsLegendLabel)}"
    role="button">${legendLabel}</label>
  </a>`;
    }).join(`
    `)}
    </div>
    </div>`;
            }
            generateHandler(legendHolderSelector, cssTheme) {
              if (!window.ods_chart_legend_switchLegend) {
                window.ods_chart_legend_switchLegend = {};
              }
              window.ods_chart_legend_switchLegend[legendHolderSelector] = (elt, legendName) => {
                const visible = !elt.classList.contains('ods-charts-legend-link-opacity');
                const themeClasses =
                  cssTheme.legends && cssTheme.legends.odsChartsLegendLinkOpacity && cssTheme.legends.odsChartsLegendLinkOpacity.classes
                    ? cssTheme.legends.odsChartsLegendLinkOpacity.classes
                    : [];
                const themeStyles = visible
                  ? cssTheme.legends && cssTheme.legends.odsChartsLegendLinkOpacity && cssTheme.legends.odsChartsLegendLinkOpacity.styles
                    ? cssTheme.legends.odsChartsLegendLinkOpacity.styles
                    : {}
                  : cssTheme.legends && cssTheme.legends.odsChartsLegendLink && cssTheme.legends.odsChartsLegendLink.styles
                    ? cssTheme.legends.odsChartsLegendLink.styles
                    : {};
                if (visible) {
                  elt.classList.add('ods-charts-legend-link-opacity');
                  for (const themeClass of themeClasses) {
                    elt.classList.add(themeClass);
                  }
                } else {
                  elt.classList.remove('ods-charts-legend-link-opacity');
                  for (const themeClass of themeClasses) {
                    elt.classList.remove(themeClass);
                  }
                }
                for (const cssProperty of Object.keys(themeStyles)) {
                  elt.style[cssProperty] = themeStyles[cssProperty];
                }
                this.echart.dispatchAction({
                  type: visible ? 'legendUnSelect' : 'legendSelect',
                  name: legendName,
                });
              };
            }
          }
          exports.ODSChartsLegends = ODSChartsLegends;

          /***/
        },

      /***/ './src/theme/ods-chart-theme.ts':
        /*!**************************************!*\
  !*** ./src/theme/ods-chart-theme.ts ***!
  \**************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsTheme = exports.ODSChartsMode = exports.ODSChartsLineStyle = exports.ODSChartsColorsSet = void 0;
          const ODS_line_style_broken_1 = __webpack_require__(/*! ./common/ODS.line-style.broken */ './src/theme/common/ODS.line-style.broken.ts');
          const ODS_line_style_with_points_1 = __webpack_require__(
            /*! ./common/ODS.line-style.with-points */ './src/theme/common/ODS.line-style.with-points.ts'
          );
          const ODS_line_style_smooth_1 = __webpack_require__(/*! ./common/ODS.line-style.smooth */ './src/theme/common/ODS.line-style.smooth.ts');
          const ODS_project_1 = __webpack_require__(/*! ./ODS.project */ './src/theme/ODS.project.ts');
          const ods_chart_legends_1 = __webpack_require__(/*! ./legends/ods-chart-legends */ './src/theme/legends/ods-chart-legends.ts');
          const merge_objects_1 = __webpack_require__(/*! ../tools/merge-objects */ './src/tools/merge-objects.ts');
          const ods_chart_resize_1 = __webpack_require__(/*! ./resize/ods-chart-resize */ './src/theme/resize/ods-chart-resize.ts');
          const css_themes_1 = __webpack_require__(/*! ./css-themes/css-themes */ './src/theme/css-themes/css-themes.ts');
          const hash_1 = __webpack_require__(/*! ../tools/hash */ './src/tools/hash.ts');
          const clone_deep_object_1 = __webpack_require__(/*! ../tools/clone-deep-object */ './src/tools/clone-deep-object.ts');
          const ods_chart_popover_1 = __webpack_require__(/*! ./popover/ods-chart-popover */ './src/theme/popover/ods-chart-popover.ts');
          const ods_chart_popover_definitions_1 = __webpack_require__(
            /*! ./popover/ods-chart-popover-definitions */ './src/theme/popover/ods-chart-popover-definitions.ts'
          );
          const main_axis_type_const_1 = __webpack_require__(/*! ./const/main-axis-type.const */ './src/theme/const/main-axis-type.const.ts');
          const ods_charts_theme_observer_1 = __webpack_require__(
            /*! ./theme-observer/ods-charts-theme-observer */ './src/theme/theme-observer/ods-charts-theme-observer.ts'
          );
          const css_helper_1 = __webpack_require__(/*! ./css-themes/css-helper */ './src/theme/css-themes/css-helper.ts');
          const ODS_colors_yellow_1 = __webpack_require__(/*! ./default/ODS.colors.yellow */ './src/theme/default/ODS.colors.yellow.ts');
          const ODS_colors_purple_1 = __webpack_require__(/*! ./default/ODS.colors.purple */ './src/theme/default/ODS.colors.purple.ts');
          const ODS_colors_pink_1 = __webpack_require__(/*! ./default/ODS.colors.pink */ './src/theme/default/ODS.colors.pink.ts');
          const ODS_colors_green_1 = __webpack_require__(/*! ./default/ODS.colors.green */ './src/theme/default/ODS.colors.green.ts');
          const ODS_colors_blue_1 = __webpack_require__(/*! ./default/ODS.colors.blue */ './src/theme/default/ODS.colors.blue.ts');
          const ODS_colors_lighter_tints_1 = __webpack_require__(/*! ./default/ODS.colors.lighter-tints */ './src/theme/default/ODS.colors.lighter-tints.ts');
          const ODS_colors_darker_tints_1 = __webpack_require__(/*! ./default/ODS.colors.darker-tints */ './src/theme/default/ODS.colors.darker-tints.ts');
          const ODS_colors_supporting_colors_1 = __webpack_require__(
            /*! ./default/ODS.colors.supporting-colors */ './src/theme/default/ODS.colors.supporting-colors.ts'
          );
          const ODS_colors_functional_1 = __webpack_require__(/*! ./default/ODS.colors.functional */ './src/theme/default/ODS.colors.functional.ts');
          const ODS_colors_categorical_1 = __webpack_require__(/*! ./default/ODS.colors.categorical */ './src/theme/default/ODS.colors.categorical.ts');
          const ODS_colors_1 = __webpack_require__(/*! ./default/ODS.colors */ './src/theme/default/ODS.colors.ts');
          const ODS_common_1 = __webpack_require__(/*! ./default/ODS.common */ './src/theme/default/ODS.common.ts');
          const ODS_lines_axis_1 = __webpack_require__(/*! ./default/ODS.lines.axis */ './src/theme/default/ODS.lines.axis.ts');
          const OUDS_colors_blue_1 = __webpack_require__(/*! ./default/OUDS.colors.blue */ './src/theme/default/OUDS.colors.blue.ts');
          const OUDS_colors_categorical_1 = __webpack_require__(/*! ./default/OUDS.colors.categorical */ './src/theme/default/OUDS.colors.categorical.ts');
          const OUDS_colors_functional_1 = __webpack_require__(/*! ./default/OUDS.colors.functional */ './src/theme/default/OUDS.colors.functional.ts');
          const OUDS_colors_green_1 = __webpack_require__(/*! ./default/OUDS.colors.green */ './src/theme/default/OUDS.colors.green.ts');
          const OUDS_colors_highlight_1 = __webpack_require__(/*! ./default/OUDS.colors.highlight */ './src/theme/default/OUDS.colors.highlight.ts');
          const OUDS_colors_pink_1 = __webpack_require__(/*! ./default/OUDS.colors.pink */ './src/theme/default/OUDS.colors.pink.ts');
          const OUDS_colors_purple_1 = __webpack_require__(/*! ./default/OUDS.colors.purple */ './src/theme/default/OUDS.colors.purple.ts');
          const OUDS_colors_single_1 = __webpack_require__(/*! ./default/OUDS.colors.single */ './src/theme/default/OUDS.colors.single.ts');
          const OUDS_colors_yellow_1 = __webpack_require__(/*! ./default/OUDS.colors.yellow */ './src/theme/default/OUDS.colors.yellow.ts');
          const ods_charts_1 = __webpack_require__(/*! ../ods-charts */ './src/ods-charts.ts');
          // import { DEFAULT_OUDS_COMMON } from './default/OUDS.common'; // TODO: use when we can switch between ODS and OUDS
          // import { DEFAULT_OUDS_LINES_AXIS } from './default/OUDS.lines.axis';
          /**
           * ODSChartsColorsSet is used for predefined color sets.
           *
           * Default and Categorical color sets are defined so all the colors are `accessible` against white/dark background and distinguishable for most color-blind people. These sets are not accessible from a monochromacy point of view.
           *
           * If you use our `sequential` sets, please consider using one color out of two if possible for a greater contrast (for example 0-2-4).
           *
           * - {@link DEFAULT} is the default color set for up to 12 different colors, selected to favor contrasts.
           * - {@link CATEGORICAL} is a color set, build for up to 12 different colors, defined by the Orange Design System to display data visualization categories.
           * - {@link FUNCTIONAL} is the color set embedding the orange that should be used a functional gray and all the functional colors.
           * - {@link SUPPORTING_COLORS} is the color set embedding all the supporting colors. Colors don't change between light and dark mode.
           * - {@link DARKER_TINTS} is the color set embedding all the darker tints of the supporting colors in light mode (lighter in dark mode).
           * - {@link LIGHTER_TINTS} is the color set embedding all the lighter tints of the supporting colors in light mode (darker in dark mode).
           * - {@link SEQUENTIAL_BLUE} is the color set embedding all the Orange Design System blue colors.
           * - {@link SEQUENTIAL_GREEN} is the color set embedding all the Orange Design System green colors.
           * - {@link SEQUENTIAL_PINK} is the color set embedding all the Orange Design System pink colors.
           * - {@link SEQUENTIAL_PURPLE} is the color set embedding all the Orange Design System purple colors.
           * - {@link SEQUENTIAL_YELLOW} is the color set embedding all the Orange Design System yellow colors.
           * - {@link OUDS_SEQUENTIAL_BLUE} is the color set embedding all the Orange Unified Design System blue colors. It's still experimental.
           * - {@link OUDS_SEQUENTIAL_GREEN} is the color set embedding all the Orange Unified Design System green colors. It's still experimental.
           * - {@link OUDS_SEQUENTIAL_PINK} is the color set embedding all the Orange Unified Design System pink colors. It's still experimental.
           * - {@link OUDS_SEQUENTIAL_PURPLE} is the color set embedding all the Orange Unified Design System purple colors. It's still experimental.
           * - {@link OUDS_SEQUENTIAL_YELLOW} is the color set embedding all the Orange Unified Design System yellow colors. It's still experimental.
           * - {@link OUDS_CATEGORICAL} is the color set embedding all the Orange Unified Design System categorical colors. It's still experimental.
           * - {@link OUDS_FUNCTIONAL} is the color set embedding all the Orange Unified Design System functional colors. It's still experimental.
           * - {@link OUDS_HIGHLIGHT} is the color set embedding all the Orange Unified Design System highlight colors. It's still experimental.
           * - {@link OUDS_SINGLE} is the color set embedding all the Orange Unified Design System single colors. It's still experimental.
           */
          var ODSChartsColorsSet;
          (function (ODSChartsColorsSet) {
            ODSChartsColorsSet['DEFAULT'] = 'default';
            ODSChartsColorsSet['CATEGORICAL'] = 'categorical';
            ODSChartsColorsSet['FUNCTIONAL'] = 'functional';
            ODSChartsColorsSet['SUPPORTING_COLORS'] = 'supportingColors';
            ODSChartsColorsSet['DARKER_TINTS'] = 'darkerTints';
            ODSChartsColorsSet['LIGHTER_TINTS'] = 'lighterTints';
            ODSChartsColorsSet['SEQUENTIAL_BLUE'] = 'blue';
            ODSChartsColorsSet['SEQUENTIAL_GREEN'] = 'green';
            ODSChartsColorsSet['SEQUENTIAL_PINK'] = 'pink';
            ODSChartsColorsSet['SEQUENTIAL_PURPLE'] = 'purple';
            ODSChartsColorsSet['SEQUENTIAL_YELLOW'] = 'yellow';
            ODSChartsColorsSet['OUDS_SEQUENTIAL_BLUE'] = 'oudsBlue';
            ODSChartsColorsSet['OUDS_SEQUENTIAL_GREEN'] = 'oudsGreen';
            ODSChartsColorsSet['OUDS_SEQUENTIAL_PINK'] = 'oudsPink';
            ODSChartsColorsSet['OUDS_SEQUENTIAL_PURPLE'] = 'oudsPurple';
            ODSChartsColorsSet['OUDS_SEQUENTIAL_YELLOW'] = 'oudsYellow';
            ODSChartsColorsSet['OUDS_CATEGORICAL'] = 'oudsCategorical';
            ODSChartsColorsSet['OUDS_FUNCTIONAL'] = 'oudsFunctional';
            ODSChartsColorsSet['OUDS_HIGHLIGHT'] = 'oudsHighlight';
            ODSChartsColorsSet['OUDS_SINGLE'] = 'oudsSingle';
          })(ODSChartsColorsSet || (exports.ODSChartsColorsSet = ODSChartsColorsSet = {}));
          var ODSChartsLineStyle;
          (function (ODSChartsLineStyle) {
            ODSChartsLineStyle['BROKEN'] = 'broken';
            ODSChartsLineStyle['SMOOTH'] = 'smooth';
            ODSChartsLineStyle['BROKEN_WITH_POINTS'] = 'withPoints';
          })(ODSChartsLineStyle || (exports.ODSChartsLineStyle = ODSChartsLineStyle = {}));
          var ODSChartsMode;
          (function (ODSChartsMode) {
            ODSChartsMode['LIGHT'] = 'light';
            ODSChartsMode['DARK'] = 'dark';
            ODSChartsMode['DEFAULT'] = 'default';
          })(ODSChartsMode || (exports.ODSChartsMode = ODSChartsMode = {}));
          const THEME = {
            common: ODS_common_1.DEFAULT_COMMON,
            linesAxis: ODS_lines_axis_1.DEFAULT_LINES_AXIS,
            colors: {
              default: ODS_colors_1.DEFAULT_COLORS,
              categorical: ODS_colors_categorical_1.DEFAULT_COLORS_CATEGORICAL,
              functional: ODS_colors_functional_1.DEFAULT_COLORS_FUNCTIONAL,
              supportingColors: ODS_colors_supporting_colors_1.DEFAULT_COLORS_SUPPORTING_COLORS,
              darkerTints: ODS_colors_darker_tints_1.DEFAULT_COLORS_DARKER_TINTS,
              lighterTints: ODS_colors_lighter_tints_1.DEFAULT_COLORS_LIGHTER_TINTS,
              blue: ODS_colors_blue_1.DEFAULT_COLORS_BLUE,
              green: ODS_colors_green_1.DEFAULT_COLORS_GREEN,
              pink: ODS_colors_pink_1.DEFAULT_COLORS_PINK,
              purple: ODS_colors_purple_1.DEFAULT_COLORS_PURPLE,
              yellow: ODS_colors_yellow_1.DEFAULT_COLORS_YELLOW,
              oudsBlue: OUDS_colors_blue_1.DEFAULT_OUDS_COLORS_BLUE,
              oudsGreen: OUDS_colors_green_1.DEFAULT_OUDS_COLORS_GREEN,
              oudsPink: OUDS_colors_pink_1.DEFAULT_OUDS_COLORS_PINK,
              oudsPurple: OUDS_colors_purple_1.DEFAULT_OUDS_COLORS_PURPLE,
              oudsYellow: OUDS_colors_yellow_1.DEFAULT_OUDS_COLORS_YELLOW,
              oudsCategorical: OUDS_colors_categorical_1.DEFAULT_OUDS_COLORS_CATEGORICAL,
              oudsFunctional: OUDS_colors_functional_1.DEFAULT_OUDS_COLORS_FUNCTIONAL,
              oudsHighlight: OUDS_colors_highlight_1.DEFAULT_OUDS_COLORS_HIGHLIGHT,
              oudsSingle: OUDS_colors_single_1.DEFAULT_OUDS_COLORS_SINGLE,
            },
            visualMapColors: {
              default: { visualMapColor: ODS_colors_1.DEFAULT_COLORS.color },
              categorical: { visualMapColor: ODS_colors_categorical_1.DEFAULT_COLORS_CATEGORICAL.color },
              functional: { visualMapColor: ODS_colors_functional_1.DEFAULT_COLORS_FUNCTIONAL.color },
              supportingColors: { visualMapColor: ODS_colors_supporting_colors_1.DEFAULT_COLORS_SUPPORTING_COLORS.color },
              darkerTints: { visualMapColor: ODS_colors_darker_tints_1.DEFAULT_COLORS_DARKER_TINTS.color },
              lighterTints: { visualMapColor: ODS_colors_lighter_tints_1.DEFAULT_COLORS_LIGHTER_TINTS.color },
              blue: { visualMapColor: ODS_colors_blue_1.DEFAULT_COLORS_BLUE.color },
              green: { visualMapColor: ODS_colors_green_1.DEFAULT_COLORS_GREEN.color },
              pink: { visualMapColor: ODS_colors_pink_1.DEFAULT_COLORS_PINK.color },
              purple: { visualMapColor: ODS_colors_purple_1.DEFAULT_COLORS_PURPLE.color },
              yellow: { visualMapColor: ODS_colors_yellow_1.DEFAULT_COLORS_YELLOW.color },
              oudsBlue: { visualMapColor: OUDS_colors_blue_1.DEFAULT_OUDS_COLORS_BLUE.color },
              oudsGreen: { visualMapColor: OUDS_colors_green_1.DEFAULT_OUDS_COLORS_GREEN.color },
              oudsPink: { visualMapColor: OUDS_colors_pink_1.DEFAULT_OUDS_COLORS_PINK.color },
              oudsPurple: { visualMapColor: OUDS_colors_purple_1.DEFAULT_OUDS_COLORS_PURPLE.color },
              oudsYellow: { visualMapColor: OUDS_colors_yellow_1.DEFAULT_OUDS_COLORS_YELLOW.color },
              oudsCategorical: { visualMapColor: OUDS_colors_categorical_1.DEFAULT_OUDS_COLORS_CATEGORICAL.color },
              oudsFunctional: { visualMapColor: OUDS_colors_functional_1.DEFAULT_OUDS_COLORS_FUNCTIONAL.color },
              oudsHighlight: { visualMapColor: OUDS_colors_highlight_1.DEFAULT_OUDS_COLORS_HIGHLIGHT.color },
              oudsSingle: { visualMapColor: OUDS_colors_single_1.DEFAULT_OUDS_COLORS_SINGLE.color },
            },
            linesStyle: {
              broken: ODS_line_style_broken_1.COMMON_LINE_STYLE_BROKEN,
              withPoints: ODS_line_style_with_points_1.COMMON_LINE_STYLE_POINTS,
              smooth: ODS_line_style_smooth_1.COMMON_LINE_STYLE_SMOOTH,
            },
          };
          /**
           * ODSChartsTheme is the object get by `ODSCharts.getThemeManager`({@link ODSChartsThemeOptions}), refer to {@link ODSChartsTheme.getThemeManager}
           *
           * This manager is used to
           * - get the ODS theme, register it, and use it
           * ```
           * // register this theme to echarts
           * echarts.registerTheme(themeManager.name , themeManager.theme);
           * // initiate the with the generated theme
           * var myChart = echarts.init(div, themeManager.name)
           * ```
           * - to build the graph options
           * ```
           * // Set the data to be displayed.
           * themeManager.setDataOptions(<dataOptions>);
           * // Register the externalization of the legend.
           * themeManager.externalizeLegends(...);
           * // Manage chart container size changed
           * themeManager.manageChartResize(...);
           * // Observe dark / light mode changes
           * themeManager.manageThemeObserver(...);
           * // Register the externalization of the tooltip/popup
           * themeManager.externalizePopover(...);
           * // Display the chart using the configured theme and data.
           * myChart.setOption(themeManager.getChartOptions());
           * ```
           *
           * See {@link ODSChartsTheme.getThemeManager} for details.
           *
           */
          class ODSChartsTheme {
            constructor(name, initialTheme, options) {
              this.name = name;
              this.initialTheme = initialTheme;
              this.options = options;
              this.chartLegendManager = undefined;
              this.chartResizeManager = undefined;
              this.chartPopoverManager = undefined;
              this.chartThemeObserver = undefined;
              this.cssThemeName =
                Object.keys(css_themes_1.ODSChartsCSSThemes).find((oneTheme) => css_themes_1.ODSChartsCSSThemes[oneTheme] === options.cssTheme) ||
                css_themes_1.ODSChartsCSSThemesNames.CUSTOM;
              this.cssHelper = new css_helper_1.ODSChartsCssHelper(this.options.cssSelector, this.options.mode, this.cssThemeName);
              this.theme = this.calculateTheme();
            }
            /**
             * Replace in current theme any colors specify through a css var by its hexa value.
             * Initialised a mapping between a css var and its haxe value for the current theme and dark/light mode.
             * @returns the updated current theme
             */
            calculateTheme() {
              this.theme = this.cssHelper.replaceAllCssVars((0, clone_deep_object_1.cloneDeepObject)(this.initialTheme));
              return this.theme;
            }
            /**
             * Determine the dark or light mode from the html color-scheme property
             * @param divTheme : div used as html reference element to determine the dark/light mode
             * @returns
             */
            static getDarkOrLightMode(divTheme) {
              let mode = ODSChartsMode.DEFAULT;
              if (divTheme) {
                const computedStyle = window.getComputedStyle(divTheme);
                if (computedStyle) {
                  const foundMode = computedStyle.getPropertyValue('color-scheme');
                  if ([ODSChartsMode.DARK, ODSChartsMode.LIGHT].includes(foundMode)) {
                    mode = foundMode;
                  }
                }
              }
              return mode;
            }
            /**
             * Entry point of the library.
             *
             * Once the library integrated, via
             * - script `<script src="...ods-charts.js">`
             * - or an `import \* as ODSCharts from 'ods-charts'`
             *
             * use `ODSCharts.getThemeManager`({@link ODSChartsThemeOptions}) to get the {@link ODSChartsTheme}.
             *
             * It returns the generated theme manager.
             *
             * @param options options used to generate the theme.
             * All the options parameters are optional
             * - {@link ODSChartsThemeOptions.colors}: colors to be used to graph the chart.
             * - {@link ODSChartsThemeOptions.cssTheme}: optionaly indicates a external theme to be used like boosted.
             * - {@link ODSChartsThemeOptions.chartConfiguration}: type of chart using this theme and its configuration.
             * - {@link ODSChartsThemeOptions.cssSelector}: selector of the DOM element where the graph will be built. It is used
             *   - to get css variable values when using a third party theme generator base on css variable like Boosted 5.
             *   - to determine if the graph is displayed in dark or light mode
             * @returns the theme manager.
             * This manager is used to retrieve the Apache ECharts theme and manage the chart options in accordance with the Orange Design System.
             * It is used to add features:
             * - {@link ODSChartsTheme.externalizeLegends}: to add Orange Design System theme to legends.
             * - {@link ODSChartsTheme.externalizePopover}: to add Orange Design System theme to popover or tooltip.
             * - {@link ODSChartsTheme.manageChartResize}: to dynamically adapt graph size the its container.
             * - {@link ODSChartsTheme.manageThemeObserver}: to enable auto-switch between dark and light mode.
             */
            static getThemeManager(options) {
              if (!options) {
                options = {};
              }
              let mode = ODSChartsMode.DEFAULT;
              if (!options.colors) {
                options.colors = ODSChartsColorsSet.DEFAULT;
              }
              if (!options.chartConfiguration) {
                options.chartConfiguration = ods_charts_1.ODSChartsConfiguration.getDefaultChartConfiguration();
              }
              if (!options.cssTheme) {
                options.cssTheme = css_themes_1.ODSChartsCSSThemes.NONE;
              }
              if (!options.cssSelector) {
                options.cssSelector = 'body';
              }
              mode = ODSChartsTheme.getDarkOrLightMode(document.querySelector(options.cssSelector));
              var themeName = `ods.${(0, hash_1.getStringValue)(options.colors)}.${(0, hash_1.getStringValue)(options.chartConfiguration)}`;
              const theme = (0, clone_deep_object_1.cloneDeepObject)(ODS_project_1.ODS_PROJECT);
              (0, merge_objects_1.mergeObjects)(theme, (0, clone_deep_object_1.cloneDeepObject)(THEME.common));
              (0, merge_objects_1.mergeObjects)(theme, (0, clone_deep_object_1.cloneDeepObject)(THEME.linesAxis));
              if (typeof options.colors === 'string') {
                (0, merge_objects_1.mergeObjects)(theme, (0, clone_deep_object_1.cloneDeepObject)(THEME.colors[options.colors]));
                (0, merge_objects_1.mergeObjects)(theme, (0, clone_deep_object_1.cloneDeepObject)(THEME.visualMapColors[options.colors]));
              } else {
                (0, merge_objects_1.mergeObjects)(
                  theme,
                  (0, clone_deep_object_1.cloneDeepObject)({
                    color: options.colors.map((color) => ('string' === typeof color ? color : THEME.colors[color.colorPalette].color[color.colorIndex])),
                    visualMapColor: options.colors.map((color) =>
                      'string' === typeof color ? color : THEME.visualMapColors[color.colorPalette].visualMapColor[color.colorIndex]
                    ),
                  })
                );
              }
              (0, merge_objects_1.mergeObjects)(
                theme,
                (0, clone_deep_object_1.cloneDeepObject)(
                  THEME.linesStyle[
                    options.chartConfiguration.lineStyle
                      ? options.chartConfiguration.lineStyle
                      : options.lineStyle
                        ? options.lineStyle
                        : ODSChartsLineStyle.SMOOTH
                  ]
                )
              );
              return new ODSChartsTheme((0, hash_1.buildHash)(themeName), theme, Object.assign(Object.assign({}, options), { mode }));
            }
            /**
             * Set the original [Apache Echarts data options](https://echarts.apache.org/en/option.html) of your graph.
             *
             * Example:
             * ```
             *     lineChartODSTheme
             *       .setDataOptions({
             *         xAxis: {
             *           data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
             *         },
             *         series: [
             *           {
             *             name: 'sales',
             *             type: 'bar',
             *             data: [5, 20, 36, 10, 10, 20],
             *           },
             *         ],
             *       })
             * ```
             * @param options the [Apache Echarts data options](https://echarts.apache.org/en/option.html) of your graph.
             * @returns the theme manager object
             */
            setDataOptions(options) {
              this.dataOptions = options;
              return this;
            }
            /**
             *
             * @param themeColors : colors set to be used by default
             * @param dataOptions : dataOptions that may content specific color for one data serie
             * @returns : array of colors
             */
            getDisplayedColors(themeColors, dataOptions) {
              const colors = (0, clone_deep_object_1.cloneDeepObject)(themeColors);
              if (dataOptions && dataOptions.series) {
                for (let serieIndex = 0; serieIndex < dataOptions.series.length; serieIndex++) {
                  const serie = dataOptions.series[serieIndex];
                  if (serie.itemStyle && serie.itemStyle.color && serie.itemStyle.color !== colors[serieIndex]) {
                    const previousColorIndex = colors.indexOf(serie.itemStyle.color);
                    if (previousColorIndex > -1) {
                      colors.splice(previousColorIndex, 1);
                    }
                    colors.splice(serieIndex, 0, serie.itemStyle.color);
                  }
                }
              }
              return colors;
            }
            /**
             * As it seems not possible to update a theme after the charts was initialized,
             * this method calculate the new theme values and update these values directly inside the
             * themeOptions that will be merge with the dataOptions to update the charts options with
             * this new chartOptions
             * @param themeOptions the basic themeOptions
             * @returns this.theme, the new global theme calculated.
             */
            calculateNewThemeAndAddItInThemeOptions(themeOptions, dataOptions) {
              const newTheme = this.calculateTheme();
              (0, merge_objects_1.mergeObjects)(themeOptions, {
                color: newTheme.color,
                backgroundColor: newTheme.backgroundColor,
                title: newTheme.title,
                grid: { tooltip: newTheme.tooltip },
              });
              if (dataOptions.toolbox) {
                themeOptions.toolbox = newTheme.toolbox;
              }
              if (dataOptions.timeline) {
                themeOptions.timeline = newTheme.timeline;
              }
              //TODO: check the mapping of radar
              // themeOptions.radar = newTheme.radar;
              //TODO:  missing parallel mapping
              // themeOptions.parallel = newTheme.parallel;
              //TODO: check the mapping of geo
              // themeOptions.geo = newTheme.geo;
              if (dataOptions.series) {
                themeOptions.series = [];
                for (let index = 0; index < dataOptions.series.length; index++) {
                  switch (dataOptions.series[index].type) {
                    case 'line':
                      themeOptions.series[index] = Object.assign(Object.assign({}, newTheme.line), { markPoint: newTheme.markPoint });
                      break;
                    case 'bar':
                      themeOptions.series[index] = newTheme.bar;
                      break;
                    case 'pie':
                      themeOptions.series[index] = newTheme.pie;
                      break;
                    case 'scatter':
                      themeOptions.series[index] = newTheme.scatter;
                      break;
                    case 'boxplot':
                      themeOptions.series[index] = newTheme.boxplot;
                      break;
                    case 'sankey':
                      themeOptions.series[index] = newTheme.sankey;
                      break;
                    case 'funnel':
                      themeOptions.series[index] = newTheme.funnel;
                      break;
                    case 'gauge':
                      themeOptions.series[index] = newTheme.gauge;
                      break;
                    case 'candlestick':
                      themeOptions.series[index] = newTheme.candlestick;
                      break;
                    case 'graph':
                      themeOptions.series[index] = newTheme.graph;
                      break;
                    case 'treemap':
                      themeOptions.series[index] = newTheme.map;
                      break;
                  }
                }
              }
              if (dataOptions.visualMap) {
                themeOptions.visualMap = [];
                for (let index = 0; index < dataOptions.series.length; index++) {
                  themeOptions.visualMap[index] = newTheme.visualMap;
                }
              }
              for (const axisType of ['xAxis', 'yAxis']) {
                if (dataOptions[axisType]) {
                  switch (dataOptions[axisType].type) {
                    case 'category':
                      themeOptions[axisType] = (0, merge_objects_1.mergeObjects)(themeOptions[axisType], newTheme.categoryAxis);
                      break;
                    case 'value':
                      themeOptions[axisType] = (0, merge_objects_1.mergeObjects)(themeOptions[axisType], newTheme.valueAxis);
                      break;
                    case 'log':
                      themeOptions[axisType] = (0, merge_objects_1.mergeObjects)(themeOptions[axisType], newTheme.logAxis);
                      break;
                    case 'time':
                      themeOptions[axisType] = (0, merge_objects_1.mergeObjects)(themeOptions[axisType], newTheme.timeAxis);
                      break;
                  }
                }
              }
              return newTheme;
            }
            /**
             * getThemeOptions() can be used to get the options that should be added to charts options to implement the Orange Design System.
             *
             * getThemeOptions() needs graph data to be already set
             *
             * @param addGlobalThemeOptions indicates if the specificities of the global theme used in the chart init method
             * @returns modifications to be made to the [Apache Echarts data options](https://echarts.apache.org/en/option.html) to implement the Orange Design System and dataOptions with css vars replaced.
             */
            getThemeOptions(addGlobalThemeOptions = false) {
              if (!this.dataOptions) {
                throw new Error('the chart basic options must be set to get the theme completion');
              }
              if (this.chartThemeObserver) {
                this.options.mode = ODSChartsTheme.getDarkOrLightMode(this.chartThemeObserver.addThemeObserver());
                this.cssHelper.changeThemeMode(this.options.mode);
              }
              const hasInitializedCompitedStyle = this.cssHelper.initComputedStyle();
              try {
                // need to copy dataOptions as theme feature may change the original dataOptions
                // only make an asign at the first level in order to avoid deep copy of all data
                // each feature is responsible to deep copy the changed part according to their changes.
                // Also make a deep copy when needed to replace any css var
                const updatedDataOptionsForTheme = this.cssHelper.cloneAndReplaceAllCssVars(Object.assign({}, this.dataOptions));
                const axisLabel = {
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: 14,
                  fontFamily: 'Helvetica Neue, sans-serif',
                  color:
                    ODSChartsMode.DEFAULT === this.options.mode
                      ? 'var(--bs-body-color, #000)'
                      : ODSChartsMode.LIGHT === this.options.mode
                        ? 'var(--bs-black, #000)'
                        : 'var(--bs-white, #fff)',
                };
                const axisLine = {
                  show: true,
                  lineStyle: {
                    width: 2,
                    color:
                      ODSChartsMode.DEFAULT === this.options.mode
                        ? 'var(--bs-border-color-subtle, #ccc)'
                        : ODSChartsMode.LIGHT === this.options.mode
                          ? 'var(--bs-gray-500, #ccc)'
                          : 'var(--bs-gray-700, #666)',
                  },
                };
                const splitLine = {
                  show: true,
                  lineStyle: {
                    width: 1,
                    color:
                      ODSChartsMode.DEFAULT === this.options.mode
                        ? 'var(--bs-border-color-subtle, #ccc)'
                        : ODSChartsMode.LIGHT === this.options.mode
                          ? 'var(--bs-gray-500, #ccc)'
                          : 'var(--bs-gray-700, #666)',
                  },
                };
                const legend = {
                  textStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                    color:
                      ODSChartsMode.DEFAULT === this.options.mode
                        ? 'var(--bs-body-color, #000)'
                        : ODSChartsMode.LIGHT === this.options.mode
                          ? 'var(--bs-black, #000)'
                          : 'var(--bs-white, #fff)',
                  },
                  icon: 'rect',
                  itemWidth: 10,
                  itemHeight: 10,
                  itemStyle: {
                    borderColor:
                      ODSChartsMode.DEFAULT === this.options.mode
                        ? 'var(--bs-body-color, #000)'
                        : ODSChartsMode.LIGHT === this.options.mode
                          ? 'var(--bs-black, #000)'
                          : 'var(--bs-white, #fff)',
                    borderWidth: 1,
                  },
                };
                let themeOptions = {
                  xAxis: { axisLabel: (0, clone_deep_object_1.cloneDeepObject)(axisLabel) },
                  yAxis: { axisLabel: (0, clone_deep_object_1.cloneDeepObject)(axisLabel) },
                  legend: (0, clone_deep_object_1.cloneDeepObject)(legend),
                };
                let usedTheme = addGlobalThemeOptions ? this.calculateNewThemeAndAddItInThemeOptions(themeOptions, updatedDataOptionsForTheme) : this.theme;
                for (const axis of ['xAxis', 'yAxis']) {
                  if (
                    !(0, main_axis_type_const_1.isMainAxis)(updatedDataOptionsForTheme[axis]) &&
                    !(updatedDataOptionsForTheme[axis] && updatedDataOptionsForTheme[axis].axisLine)
                  ) {
                    themeOptions[axis].axisLine = { show: false };
                    themeOptions[axis].splitLine = { show: false };
                  } else {
                    themeOptions[axis].axisLine = (0, clone_deep_object_1.cloneDeepObject)(axisLine);
                    themeOptions[axis].splitLine = (0, clone_deep_object_1.cloneDeepObject)(splitLine);
                  }
                }
                const displayedColors = this.getDisplayedColors(usedTheme.color, updatedDataOptionsForTheme);
                themeOptions = this.cssHelper.replaceAllCssVars(themeOptions);
                if (this.chartLegendManager) {
                  try {
                    this.chartLegendManager.addLegend(updatedDataOptionsForTheme, displayedColors, this.options.cssTheme, this.cssThemeName, this.options.mode);
                  } catch (error) {
                    console.error('unable to init Legend Manager', error);
                  }
                }
                if (this.chartResizeManager) {
                  try {
                    this.chartResizeManager.addResizeManagement();
                  } catch (error) {
                    console.error('unable to init Resize Manager', error);
                  }
                }
                if (this.chartPopoverManager) {
                  try {
                    this.chartPopoverManager.addPopoverManagement(
                      updatedDataOptionsForTheme,
                      themeOptions,
                      this.options.cssTheme,
                      this.cssThemeName,
                      this.options.mode
                    );
                  } catch (error) {
                    console.error('unable to init Popover Manager', error);
                  }
                }
                return { themeOptions, dataOptions: updatedDataOptionsForTheme };
              } finally {
                if (hasInitializedCompitedStyle) {
                  this.cssHelper.removeComputedStyle();
                }
              }
            }
            /**
             * externalizeLegends() configure the manager to externalize the legends from the graphs to put it directly in your HTML document.
             *
             * The generated legends
             * - will implement the Orange Design System
             * - will be link with the graph.
             *
             * @param echart the initialized eCharts object
             * @param legendHolderSelector
             * legendHolderSelector can be:
             * - a string, and then is interpreted as the CSS selector of the legends container
             * - a {@link ODSChartsLegendHolderDefinition} if you want to sepcify the orientation of the legends holder or specify the series to be displayed in the legends holder
             * - an array of {@link ODSChartsLegendHolderDefinition} if you want to group legends in several legends holders
             * @returns the theme manager object itself to be able to chain calls.
             */
            externalizeLegends(echart, legendHolderSelector) {
              this.chartLegendManager = ods_chart_legends_1.ODSChartsLegends.addLegend(echart, legendHolderSelector);
              return this;
            }
            /**
             * externalizePopover() configure the manager to externalize the management of popover or tooltip.
             *
             * The generated tooltips or popover will implement the Orange Design System.
             *
             * @param popoverConfig the configuration of the externalizePopover feature {@link ODSChartsPopoverConfig}
             * @param popoverDefinition renderer {@link ODSChartsPopoverDefinition} of the popover/tooltip. **{@link ODSChartsPopoverManagers}** is used to
             * specify preconfigured renderer for Apache ECharts, Boosted 5 or Boosted 4.
             *
             * Default value is {@link ODSChartsPopoverManagers}.NONE, that means it uses default Apache ECharts template to externalize tooltip/popover HTML element, implementing Orange Design system.
             *
             * **WARNING**: Boosted 4 or Boosted 5 rendering requires dependency on the boosted library and access to the boosted global variable.
             * @returns the theme manager object itself to be able to chain calls.
             */
            externalizePopover(popoverConfig = {}, popoverDefinition) {
              if (!popoverDefinition) {
                popoverDefinition = ods_chart_popover_definitions_1.ODSChartsPopoverManagers.NONE;
              }
              this.chartPopoverManager = ods_chart_popover_1.ODSChartsPopover.addPopoverManagement(popoverDefinition, popoverConfig);
              return this;
            }
            /**
             * manageChartResize() ensures that the graph resizes correctly when its container is resized
             *
             * @param echart the initialized eCharts object.
             * @param chartId an unique id that identify the chart container in the DOM.
             * @returns the theme manager object itself to be able to chain calls.
             */
            manageChartResize(echart, chartId) {
              this.chartResizeManager = ods_chart_resize_1.ODSChartsResize.addResizeManagement(echart, chartId);
              return this;
            }
            /**
             * manageThemeObserver() is used to enable auto-switch between dark and light mode.
             * It observe the closest element with a data-bs-theme indicator to
             * adapt the graph colour to the new theme.
             * @param echart the initialized eCharts object
             * @returns returns back the theme manager object
             */
            manageThemeObserver(echart) {
              this.chartThemeObserver = ods_charts_theme_observer_1.ODSChartsThemeObserver.addThemeObserver(echart, () => {
                // update chart options with theme options enriched with values
                // from a newly calculated global theme
                echart.setOption(this.getChartOptions(true));
              });
              return this;
            }
            /**
             * getChartOptions() build the eCharts options merging
             * - options implementing the Orange Design System {@link ODSChartsThemeOptions}
             * - optionally options implementing {@link externalizeLegends},
             * - optionally options implementing {@link externalizePopover},
             * - optionally options implementing {@link manageChartResize},
             * - optionally options implementing {@link manageThemeObserver},
             * - data from {@link setDataOptions}
             *
             * @param addGlobalThemeOptions indicates if the specificities of the global theme used in the chart init method
             * must be added in the options of the chart
             * @returns the Apache ECharts options to use in [Apache Echarts `setOption()`](https://echarts.apache.org/en/option.html) call.
             */
            getChartOptions(addGlobalThemeOptions = false) {
              if (!this.dataOptions) {
                throw new Error('the chart basic options must be set to get the theme completion');
              }
              const { themeOptions, dataOptions } = this.getThemeOptions(addGlobalThemeOptions);
              return (0, merge_objects_1.mergeObjects)(themeOptions, dataOptions);
            }
          }
          exports.ODSChartsTheme = ODSChartsTheme;

          /***/
        },

      /***/ './src/theme/popover/ods-chart-popover-definitions.ts':
        /*!************************************************************!*\
  !*** ./src/theme/popover/ods-chart-popover-definitions.ts ***!
  \************************************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsPopoverManagers =
            exports.ODSChartsPopoverConfig =
            exports.ODSChartsPopoverTooltipTrigger =
            exports.ODSChartsPopoverAxisPointer =
            exports.ODSChartsPopoverDefinitionWithRenderer =
            exports.ODSChartsPopoverDefinition =
            exports.ODSChartsPopoverItem =
            exports.ODSChartsPopoverManager =
              void 0;
          const clone_deep_object_1 = __webpack_require__(/*! ../../tools/clone-deep-object */ './src/tools/clone-deep-object.ts');
          const ods_chart_theme_1 = __webpack_require__(/*! ../ods-chart-theme */ './src/theme/ods-chart-theme.ts');
          class ODSChartsPopoverManager {
            constructor() {
              this.dispose = undefined;
              this.show = undefined;
            }
          }
          exports.ODSChartsPopoverManager = ODSChartsPopoverManager;
          class ODSChartsPopoverItem {
            constructor() {
              this.seriesName = undefined;
              this.markerColor = undefined;
            }
          }
          exports.ODSChartsPopoverItem = ODSChartsPopoverItem;
          /**
           * {@link ODSChartsPopoverDefinition} defines the interface of the manager of externalized
           * popover or tooltip {@link ODSChartsTheme.externalizePopover}.
           *
           * {@link ODSChartsPopoverDefinition} is not used directly. Instead, we use the variable **{@link ODSChartsPopoverDefinition}.
           * {@link ODSChartsPopoverManagers} gives 3 default {@link ODSChartsPopoverDefinition}
           * managers for Apache ECharts, Boosted 5 and Boosted 4.
           *
           * You probably need to use one of those.
           *
           * But even if you use one of those, you may specialize it with specific(s)
           * implementation(s) with one of the {@link ODSChartsPopoverDefinition} method(s).
           *
           * For example, you may specify the content of the tooltip:
           * ```
           *                 themeManager.externalizePopover(undefined, {
           *                  ...ODSCharts.ODSChartsPopoverManagers.NONE,
           *                  getPopupContent: (tooltipElements) => {
           *                    return 'This is my HTML code that may content <a href="https://github.com/Orange-OpenSource/ods-charts">a link</a>';
           *                  },
           *                });
           * ```
           * or if you want to use Boosted 5 tooltip renderer:
           * ```
           *                 themeManager.externalizePopover(undefined, {
           *                  ...ODSCharts.ODSChartsPopoverManagers.BOOSTED5,
           *                  getPopupContent: (tooltipElements) => {
           *                    return 'This is my HTML code that may content <a href="https://github.com/Orange-OpenSource/ods-charts">a link</a>';
           *                  },
           *                });
           * ```
           */
          class ODSChartsPopoverDefinition {}
          exports.ODSChartsPopoverDefinition = ODSChartsPopoverDefinition;
          class ODSChartsPopoverDefinitionWithRenderer extends ODSChartsPopoverDefinition {
            testIfMouseIsOverTooltip(previousPopover) {
              var _a;
              try {
                // We test if the mouse is over the previous tooltip to cancel the creation
                // of a new one and allow the mouse to enter over this previous one
                const mousePosition = { top: window.event.clientY, left: window.event.clientX };
                const tooltipRect = (_a = previousPopover.tip) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                if (
                  tooltipRect &&
                  mousePosition.top > tooltipRect.top - this.tooltipMarging &&
                  mousePosition.top < tooltipRect.top + tooltipRect.height + this.tooltipMarging &&
                  mousePosition.left > tooltipRect.left - this.tooltipMarging &&
                  mousePosition.left < tooltipRect.left + tooltipRect.width + this.tooltipMarging
                ) {
                  return true;
                }
              } catch (error) {}
              return false;
            }
          }
          exports.ODSChartsPopoverDefinitionWithRenderer = ODSChartsPopoverDefinitionWithRenderer;
          var ODSChartsPopoverAxisPointer;
          (function (ODSChartsPopoverAxisPointer) {
            ODSChartsPopoverAxisPointer['none'] = 'none';
            ODSChartsPopoverAxisPointer['shadow'] = 'shadow';
            ODSChartsPopoverAxisPointer['line'] = 'line';
            ODSChartsPopoverAxisPointer['cross'] = 'cross';
          })(ODSChartsPopoverAxisPointer || (exports.ODSChartsPopoverAxisPointer = ODSChartsPopoverAxisPointer = {}));
          var ODSChartsPopoverTooltipTrigger;
          (function (ODSChartsPopoverTooltipTrigger) {
            ODSChartsPopoverTooltipTrigger['xAxis'] = 'xAxis';
            ODSChartsPopoverTooltipTrigger['yAxis'] = 'yAxis';
            ODSChartsPopoverTooltipTrigger['grid'] = 'grid';
          })(ODSChartsPopoverTooltipTrigger || (exports.ODSChartsPopoverTooltipTrigger = ODSChartsPopoverTooltipTrigger = {}));
          /**
           * Configuration of the externalizePopover feature {@link ODSChartsTheme.externalizePopover}.
           *
           */
          class ODSChartsPopoverConfig {}
          exports.ODSChartsPopoverConfig = ODSChartsPopoverConfig;
          class BOOSTED5_Definition extends ODSChartsPopoverDefinitionWithRenderer {
            constructor() {
              super(...arguments);
              this.testAvailability = () => {
                let availability = true;
                try {
                  if (undefined === boosted) {
                    availability = false;
                  }
                } catch (error) {
                  availability = false;
                }
                if (!availability) {
                  console.warn('BOOSTED 5 popover/tooltip rendering is not avalable: boosted variable is not accessible!');
                }
                return availability;
              };
              this.getOrCreatePopupInstance = this._getOrCreatePopupInstance.bind(this);
              this.tooltipDelay = 0;
              this.tooltipMarging = 15;
            }
            _getOrCreatePopupInstance(selector, title, htmlContent, enterable, mode) {
              var _a;
              try {
                let previousPopover = boosted.Popover.getInstance(document.querySelector(selector));
                if (previousPopover) {
                  if (enterable && this.testIfMouseIsOverTooltip(previousPopover)) {
                    return undefined;
                  }
                  previousPopover.dispose();
                }
              } catch (error) {}
              const allowList = (0, clone_deep_object_1.cloneDeepObject)(boosted.Tooltip.Default.allowList);
              allowList.span = ['style', 'class'];
              allowList.div = ['class'];
              allowList.label = ['class'];
              let container = document.getElementById('ods-chart-popover-container-' + mode);
              if (!container) {
                container = document.createElement('div');
                if ([ods_chart_theme_1.ODSChartsMode.DARK, ods_chart_theme_1.ODSChartsMode.LIGHT].includes(mode)) {
                  container.setAttribute('data-bs-theme', mode);
                }
                container.id = 'ods-chart-popover-container-' + mode;
                container.classList.add('ods-charts-context');
                (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.append(container);
              }
              return boosted.Popover.getOrCreateInstance(document.querySelector(selector), {
                allowList: allowList,
                html: true,
                trigger: 'click',
                placement: 'top',
                container: container,
                title: title,
                content: htmlContent,
                customClass: enterable ? '' : 'pe-none',
              });
            }
          }
          class BOOSTED4_Definition extends ODSChartsPopoverDefinitionWithRenderer {
            constructor() {
              super(...arguments);
              this.testAvailability = () => {
                let availability = true;
                try {
                  if (undefined === boosted) {
                    availability = false;
                  }
                } catch (error) {
                  availability = false;
                }
                if (!availability) {
                  console.warn('BOOSTED 4 popover/tooltip rendering is not avalable: boosted variable is not accessible!');
                }
                return availability;
              };
              this.getOrCreatePopupInstance = this._getOrCreatePopupInstance.bind(this);
              this.tooltipDelay = 0;
              this.tooltipMarging = 10;
            }
            _getOrCreatePopupInstance(selector, title, htmlContent, enterable, mode) {
              const elt = document.querySelector(selector);
              const whiteList = (0, clone_deep_object_1.cloneDeepObject)(boosted.Tooltip.Default.whiteList);
              whiteList.span = ['style', 'class'];
              whiteList.div = ['class'];
              whiteList.label = ['class'];
              if (elt && elt.chartPopover) {
                try {
                  if (enterable && this.testIfMouseIsOverTooltip(elt.chartPopover)) {
                    return undefined;
                  }
                  if (elt.chartPopover.config.title === title && elt.chartPopover.config.content === htmlContent) {
                    elt.chartPopover.update();
                    return undefined;
                  }
                  elt.chartPopover.dispose();
                } catch (error) {}
              }
              const popover = new boosted.Popover(elt, {
                whiteList: whiteList,
                html: true,
                trigger: 'click',
                placement: 'top',
                container: 'body',
                title: title,
                content: htmlContent,
                customClass: '',
              });
              elt.chartPopover = popover;
              if (!enterable) {
                window.setTimeout(() => {
                  try {
                    elt.chartPopover.tip.style.pointerEvents = 'none';
                  } catch (error) {}
                });
              }
              return popover;
            }
          }
          /**
           * `ODSChartsPopoverManagers` is used to specify popoverDefinition parameter (popup/tooltip renderer) of {@link ODSChartsTheme.externalizePopover}.
           *
           * Available popover/tooltip renderer:
           * - `ODSChartsPopoverManagers.NONE`: to use default ECharts template to externalize tooltip/popover HTML element, implementing Orange Design System
           * - `ODSChartsPopoverManagers.BOOSTED5`: to use Boosted 5 tooltip/popover
           * - `ODSChartsPopoverManagers.BOOSTED4`: to use Boosted 4 tooltip/popover
           *
           * **WARNING**: Boosted 4 or Boosted 5 rendering requires dependency on the boosted library and access to the boosted global variable.
           */
          exports.ODSChartsPopoverManagers = {
            BOOSTED5: new BOOSTED5_Definition(),
            BOOSTED4: new BOOSTED4_Definition(),
            NONE: {},
          };

          /***/
        },

      /***/ './src/theme/popover/ods-chart-popover.ts':
        /*!************************************************!*\
  !*** ./src/theme/popover/ods-chart-popover.ts ***!
  \************************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsPopover = void 0;
          const css_themes_1 = __webpack_require__(/*! ../css-themes/css-themes */ './src/theme/css-themes/css-themes.ts');
          const merge_objects_1 = __webpack_require__(/*! ../../tools/merge-objects */ './src/tools/merge-objects.ts');
          const ods_chart_popover_definitions_1 = __webpack_require__(
            /*! ./ods-chart-popover-definitions */ './src/theme/popover/ods-chart-popover-definitions.ts'
          );
          const ods_chart_legends_1 = __webpack_require__(/*! ../legends/ods-chart-legends */ './src/theme/legends/ods-chart-legends.ts');
          const clone_deep_object_1 = __webpack_require__(/*! ../../tools/clone-deep-object */ './src/tools/clone-deep-object.ts');
          const ods_chart_theme_1 = __webpack_require__(/*! ../ods-chart-theme */ './src/theme/ods-chart-theme.ts');
          const main_axis_type_const_1 = __webpack_require__(/*! ../const/main-axis-type.const */ './src/theme/const/main-axis-type.const.ts');
          const DEFAULT_TEMPLATE_CSS = `
.ods-charts-popover {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  box-shadow: none !important;
  background: none !important;
}

.ods-charts-popover.ods-charts-enterable-false {
  pointer-events: none !important;
}

.ods-charts-popover .ods-charts-popover-inner  {
  display: inline-block;
  background-color: var(--bs-body-bg, #fff);
  color: var(--bs-body-color, #000);
  border: 2px solid var(--bs-border-color-subtle, #ccc);
  padding: 20px 18px 20px 18px;
}
.ods-charts-popover.ods-charts-mode-dark .ods-charts-popover-inner {
  background-color: var(--bs-gray-950, #141414);
  color: var(--bs-white, #fff);
  border: 2px solid var(--bs-gray-700, #666);
}
.ods-charts-popover.ods-charts-mode-light .ods-charts-popover-inner {
  background-color: var(--bs-white, #fff);
  color: var(--bs-black, #000);
  border: 2px solid var(--bs-gray-500, #ccc);
}

.ods-charts-popover .ods-charts-popover-header {
  color: var(--bs-body-color, #000);
  font-size: 18px;
  font-weight: 700;
  padding-bottom:10px;
}
.ods-charts-popover.ods-charts-mode-dark .ods-charts-popover-header {
  color: var(--bs-white, #fff);
}
.ods-charts-popover.ods-charts-mode-light .ods-charts-popover-header {
  color: var(--bs-black, #000);
}

.ods-charts-popover .ods-charts-popover-arrow  {
  position: absolute;
  bottom: -8px;
  width: 20px;
  height: 10px;
  left: calc(50% - 10px);
}


.ods-charts-popover .ods-charts-popover-arrow::before {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-top-color: var(--bs-border-color-subtle, #ccc);
  border-width: 10px;
  border-bottom-width: 0px;
  border-style: solid;
  top: 2px;
  left: 0;
}
.ods-charts-popover.ods-charts-mode-dark .ods-charts-popover-arrow::before {
  border-top-color: var(--bs-gray-700, #666);
}
.ods-charts-popover.ods-charts-mode-dark .ods-charts-popover-arrow::before {
  border-top-color: var(--bs-gray-500, #ccc);
}

.ods-charts-popover .ods-charts-popover-arrow::after {
  border-color: transparent;
  border-top-color: var(--bs-body-bg, #fff);
  border-width: 10px;
  border-bottom-width: 0px;
  position: absolute;
  display: block;
  content: "";
  border-style: solid;
  top: 0;
  left: 0;
}
.ods-charts-popover.ods-charts-mode-dark .ods-charts-popover-arrow::after{
  border-top-color: var(--bs-gray-950, #141414);
}
.ods-charts-popover.ods-charts-mode-light .ods-charts-popover-arrow::after{
  border-top-color: var(--bs-white, #fff);
}
`;
          const DEFAULT_NONE_CSS = `
.ods-charts-no-css-lib .ods-charts-popover-color-holder {
  border: 1px solid var(--bs-popover-border-color, #ccc);
  display: inline-block;
}
.ods-charts-no-css-lib.ods-charts-mode-dark .ods-charts-popover-color-holder {
  border: 1px solid var(--bs-popover-border-color, #666);
}

.ods-charts-no-css-lib .ods-charts-popover-color {
  width: 8px;
  height: 8px;
  position: relative;
  display: block;
}
.ods-charts-no-css-lib .ods-charts-popover-text {
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--bs-body-color, #000000);
}
.ods-charts-no-css-lib.ods-charts-mode-dark .ods-charts-popover-text {
  color: var(--bs-body-color, #fff);
}
`;
          class ODSChartsPopover {
            constructor(popoverDefinition, popoverConfig) {
              this.popoverDefinition = popoverDefinition;
              this.popoverConfig = popoverConfig;
              this.tooltipStyle = '';
              this.enterable = false;
              this.mode = ods_chart_theme_1.ODSChartsMode.DEFAULT;
            }
            static addPopoverManagement(popoverDefinition, popoverConfig) {
              if (undefined === popoverDefinition || (popoverDefinition.testAvailability && !popoverDefinition.testAvailability())) {
                popoverDefinition = ods_chart_popover_definitions_1.ODSChartsPopoverManagers.NONE;
              }
              if (undefined === popoverConfig) {
                popoverConfig = {};
              }
              if (undefined === popoverConfig.enabled) {
                popoverConfig.enabled = true;
              }
              if (undefined === popoverConfig.axisPointer) {
                popoverConfig.axisPointer = ods_chart_popover_definitions_1.ODSChartsPopoverAxisPointer.none;
              }
              if (undefined === popoverConfig.shared) {
                popoverConfig.shared = false;
              }
              if (undefined === popoverConfig.tooltip) {
                popoverConfig.tooltip = true;
              }
              if (undefined === popoverConfig.tooltipDelay) {
                popoverConfig.tooltipDelay = undefined === popoverDefinition.tooltipDelay ? 0 : popoverDefinition.tooltipDelay;
              }
              if (!popoverConfig.shared && 'none' !== popoverConfig.axisPointer) {
                console.warn(
                  `If you choose a specific axisPointer like ${popoverConfig.axisPointer}, the popup/tooltip content will be shared between series values (shared option forced to true)`
                );
                popoverConfig.shared = true;
              }
              return new ODSChartsPopover(popoverDefinition, popoverConfig);
            }
            getTooltipTrigger(dataOptions, themeOptions) {
              let tooltipTrigger = this.popoverConfig.axisPointer === 'cross' ? 'grid' : this.popoverConfig.tooltipTrigger;
              if (undefined == tooltipTrigger) {
                for (const axis of ['xAxis', 'yAxis']) {
                  if ((0, main_axis_type_const_1.isMainAxis)(dataOptions[axis])) {
                    tooltipTrigger = tooltipTrigger ? undefined : axis;
                  }
                }
              }
              if (undefined == tooltipTrigger) {
                for (const axis of ['xAxis', 'yAxis']) {
                  if (themeOptions[axis] && themeOptions[axis].splitLine && themeOptions[axis].splitLine.show) {
                    tooltipTrigger = tooltipTrigger ? undefined : axis;
                  }
                }
              }
              if (undefined == tooltipTrigger) {
                for (const axis of ['xAxis', 'yAxis']) {
                  if (themeOptions[axis] && themeOptions[axis].axisLine && themeOptions[axis].axisLine.show) {
                    tooltipTrigger = tooltipTrigger ? undefined : axis;
                  }
                }
              }
              if (undefined == tooltipTrigger) {
                for (const axis of ['xAxis', 'yAxis']) {
                  if (dataOptions[axis] && dataOptions[axis].data) {
                    tooltipTrigger = tooltipTrigger ? undefined : axis;
                  }
                }
              }
              if (undefined == tooltipTrigger) {
                tooltipTrigger = 'grid';
              }
              return tooltipTrigger;
            }
            getTooltipElements(params, legends) {
              return {
                categoryLabel:
                  this.popoverDefinition && this.popoverDefinition.getPopupTitle
                    ? this.popoverDefinition.getPopupTitle(params[0].axisValue, params[0].axisValueLabel, params[0].name)
                    : params[0].axisValueLabel || params[0].axisValue || params[0].name,
                tooltipElements: params
                  .map((param) => {
                    const legendLabel =
                      legends &&
                      legends.names &&
                      legends.labels &&
                      legends.labels.find((label, index) => {
                        return legends.names[index] === param.seriesName;
                      });
                    const itemValue =
                      (0, merge_objects_1.isVarArray)(param.value) && 2 == param.value.length && (!param.axisType || param.axisType.endsWith('.time'))
                        ? param.value[1]
                        : (0, merge_objects_1.isVarArray)(param.value) && param.seriesIndex + 1 < param.value.length
                          ? param.value[param.seriesIndex + 1]
                          : (0, merge_objects_1.isVarArray)(param.value)
                            ? undefined
                            : param.value;
                    const element = (0, merge_objects_1.mergeObjects)((0, clone_deep_object_1.cloneDeepObject)(param), {
                      markerColor: param.color,
                      itemValue: itemValue,
                      label: legendLabel || '',
                    });
                    if (undefined !== element.itemValue && this.popoverDefinition && this.popoverDefinition.getPopupContentValue) {
                      element.itemValue = this.popoverDefinition.getPopupContentValue(element);
                    }
                    return element;
                  })
                  .filter((elt) => {
                    if (undefined === elt.itemValue) {
                      console.error('failed displaying', elt);
                    }
                    return undefined !== elt.itemValue;
                  }),
              };
            }
            addPopoverManagement(dataOptions, themeOptions, cssTheme, cssThemeName, currentMode) {
              var _a, _b, _c;
              this.mode = currentMode;
              if (css_themes_1.ODSChartsCSSThemesNames.NONE === cssThemeName && !document.querySelector('#ods-chart-popover-none-css')) {
                let style = document.createElement('style');
                style.id = 'ods-chart-popover-none-css';
                style.textContent = DEFAULT_NONE_CSS;
                document.head.appendChild(style);
              }
              const popoverOptions = {};
              const tooltipTrigger = this.getTooltipTrigger(dataOptions, themeOptions);
              this.enterable = !!dataOptions && !!dataOptions.tooltip && !!dataOptions.tooltip.enterable;
              let legends = undefined;
              try {
                legends = ods_chart_legends_1.ODSChartsLegends.getLegendData(dataOptions);
              } catch (error) {}
              if (this.popoverConfig.enabled) {
                (0, merge_objects_1.mergeObjects)(popoverOptions, {
                  tooltip: {
                    appendTo: 'body',
                  },
                  [tooltipTrigger]: {
                    axisPointer: {
                      label: {
                        show: false,
                      },
                      handle: {
                        show: true,
                        icon: 'none',
                      },
                    },
                  },
                });
                if (!this.popoverConfig.tooltip) {
                  (0, merge_objects_1.mergeObjects)(popoverOptions, {
                    tooltip: { triggerOn: 'click', alwaysShowContent: false },
                  });
                }
                if (!this.popoverDefinition.getOrCreatePopupInstance) {
                  (0, merge_objects_1.mergeObjects)(popoverOptions, {
                    tooltip: {
                      position: (mousePosition, params, dom, rect, containerSize) => {
                        var _a;
                        let tooltipPosition = {
                          left: mousePosition[0] - containerSize.contentSize[0] / 2,
                        };
                        if (
                          (_a = dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.tooltip) === null || _a === void 0 ? void 0 : _a.confine
                        ) {
                          const arrowSize = 10;
                          const displayTooltipOnTop = mousePosition[1] > containerSize.contentSize[1];
                          let tooltipLeftPosition;
                          tooltipPosition[['top', 'bottom'][+displayTooltipOnTop]] = displayTooltipOnTop
                            ? containerSize.viewSize[1] - mousePosition[1] + 10
                            : mousePosition[1] + 10;
                          if (mousePosition[0] > containerSize.viewSize[0] - containerSize.contentSize[0] / 2) {
                            tooltipLeftPosition = Math.min(
                              mousePosition[0] - containerSize.viewSize[0] + containerSize.contentSize[0] - arrowSize,
                              containerSize.contentSize[0] - arrowSize * 2 - 5
                            );
                          } else if (mousePosition[0] < containerSize.contentSize[0] / 2) {
                            tooltipLeftPosition = Math.max(mousePosition[0] - arrowSize, 5);
                          } else {
                            tooltipLeftPosition = containerSize.contentSize[0] / 2 - arrowSize;
                          }
                          this.tooltipStyle = `${tooltipLeftPosition}px;`;
                          if (!displayTooltipOnTop) {
                            this.tooltipStyle += ' top: -8px; transform: scaleY(-1);';
                          }
                        } else {
                          tooltipPosition['top'] = mousePosition[1] - containerSize.contentSize[1] - 10;
                        }
                        return tooltipPosition;
                      },
                      formatter: (params) => {
                        if (!(0, merge_objects_1.isVarArray)(params)) {
                          params = [params];
                        }
                        params = params;
                        const elements = this.getTooltipElements(params, legends);
                        return elements && elements.tooltipElements.length > 0
                          ? new DOMParser().parseFromString(
                              this.popoverDefinition.getPopupTemplate
                                ? this.popoverDefinition.getPopupTemplate(elements.categoryLabel, elements.tooltipElements)
                                : this.getPopupTemplate(elements, cssTheme, this.mode),
                              'text/html'
                            ).body.firstChild
                          : undefined;
                      },
                      showDelay: 0,
                      hideDelay: 0,
                      appendTo: 'body',
                      renderMode: 'html',
                      className: `ods-charts-popover ods-charts-enterable-${this.enterable ? 'true' : 'false'} ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_a = cssTheme.popover) === null || _a === void 0 ? void 0 : _a.odsChartsPopover)}`,
                      axisPointer: {
                        type: this.popoverConfig.axisPointer,
                      },
                    },
                    [tooltipTrigger]: {
                      axisPointer: {
                        snap: true,
                        show: true,
                        triggerTooltip: true,
                        label: {
                          show: false,
                        },
                        handle: {
                          show: true,
                          icon: 'none',
                        },
                        lineStyle: {
                          width: 'none' === this.popoverConfig.axisPointer ? 0 : 1,
                        },
                      },
                    },
                  });
                } else {
                  (0, merge_objects_1.mergeObjects)(popoverOptions, {
                    tooltip: {
                      formatter: (params) => {
                        if (!(0, merge_objects_1.isVarArray)(params)) {
                          params = [params];
                        }
                        params = params;
                        const elements = this.getTooltipElements(params, legends);
                        if (elements && elements.tooltipElements.length > 0 && window.event) {
                          try {
                            this.displayPopup(window.event, elements, cssTheme, this.mode);
                          } catch (error) {}
                        }
                        return ' ';
                      },
                      appendTo: 'body',
                      className: 'd-none',
                      axisPointer: {
                        type: this.popoverConfig.axisPointer,
                      },
                    },
                    [tooltipTrigger]: {
                      axisPointer: {
                        snap: true,
                        show: true,
                        triggerTooltip: true,
                        label: {
                          show: false,
                        },
                        handle: {
                          show: true,
                          icon: 'none',
                        },
                        lineStyle: {
                          width: 'none' === this.popoverConfig.axisPointer ? 0 : 1,
                        },
                      },
                    },
                  });
                }
                if (
                  (_b = popoverOptions === null || popoverOptions === void 0 ? void 0 : popoverOptions.tooltip) === null || _b === void 0
                    ? void 0
                    : _b.formatter
                ) {
                  popoverOptions.tooltip.formatter.IsOdsChartsFormatter = true;
                }
                // We have to delete any default formatter as it is incompatible with externalizePopover feature
                if ((_c = dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.tooltip) === null || _c === void 0 ? void 0 : _c.formatter) {
                  if (!dataOptions.tooltip.formatter.IsOdsChartsFormatter) {
                    dataOptions.tooltip = (0, clone_deep_object_1.cloneDeepObject)(dataOptions.tooltip);
                    // But if no formatter has been provided through the popoverDefinition,
                    // we will use the Apache ECharts config
                    if (!this.popoverDefinition.getPopupContentValue) {
                      const formatter = dataOptions.tooltip.formatter;
                      this.popoverDefinition = (0, clone_deep_object_1.cloneDeepObject)(this.popoverDefinition);
                      this.popoverDefinition.getPopupContentValue = (tooltipElement) => formatter([tooltipElement]);
                    }
                  }
                  delete dataOptions.tooltip.formatter;
                }
                if (!this.popoverConfig.shared && 'none' === this.popoverConfig.axisPointer) {
                  (0, merge_objects_1.mergeObjects)(popoverOptions, { tooltip: { trigger: 'item' } });
                } else {
                  (0, merge_objects_1.mergeObjects)(popoverOptions, { tooltip: { trigger: 'axis' } });
                }
              } else {
                (0, merge_objects_1.mergeObjects)(popoverOptions, {
                  tooltip: {
                    triggerOn: 'none',
                  },
                });
              }
              (0, merge_objects_1.mergeObjects)(themeOptions, popoverOptions);
            }
            getPopupContentLine(element, cssTheme, mode) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
              return `<div
    class="ods-charts-popover-line ods-charts-mode-${mode} ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_a = cssTheme.popover) === null || _a === void 0 ? void 0 : _a.odsChartsPopoverLine)}"
    style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_b = cssTheme.popover) === null || _b === void 0 ? void 0 : _b.odsChartsPopoverLine)}"
    >
      <span class="ods-charts-popover-color-holder ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_c = cssTheme.popover) === null || _c === void 0 ? void 0 : _c.odsChartsPopoverColorHolder)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_d = cssTheme.popover) === null || _d === void 0 ? void 0 : _d.odsChartsPopoverColorHolder)}" >
        <span
          class="ods-charts-popover-color ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_e = cssTheme.popover) === null || _e === void 0 ? void 0 : _e.odsChartsPopoverColor)}"  style="background-color:${element.markerColor};  ${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_f = cssTheme.popover) === null || _f === void 0 ? void 0 : _f.odsChartsPopoverColor)};">
        </span>
      </span>

      <label class="ods-charts-popover-text ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_g = cssTheme.popover) === null || _g === void 0 ? void 0 : _g.odsChartsPopoverText)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_h = cssTheme.popover) === null || _h === void 0 ? void 0 : _h.odsChartsPopoverText)}" >
        <span class="ods-charts-popover-label ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_j = cssTheme.popover) === null || _j === void 0 ? void 0 : _j.odsChartsPopoverLabel)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_k = cssTheme.popover) === null || _k === void 0 ? void 0 : _k.odsChartsPopoverLabel)}" >${element.label ? element.label + ': ' : ''}</span>
        <span class="ods-charts-popover-value ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_l = cssTheme.popover) === null || _l === void 0 ? void 0 : _l.odsChartsPopoverValue)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_m = cssTheme.popover) === null || _m === void 0 ? void 0 : _m.odsChartsPopoverValue)}">${element.itemValue}</span>
      </label>
    </div>
        `;
            }
            getPopupContent(tooltipElements, cssTheme, mode) {
              var _a, _b;
              return `
    <div  class="ods-charts-popover-body-content ods-charts-mode-${mode} ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_a = cssTheme.popover) === null || _a === void 0 ? void 0 : _a.odsChartsPopoverBodyContent)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_b = cssTheme.popover) === null || _b === void 0 ? void 0 : _b.odsChartsPopoverBodyContent)}" >
        ${tooltipElements
          .map((element) =>
            this.popoverDefinition.getPopupContentLine ? this.popoverDefinition.getPopupContentLine(element) : this.getPopupContentLine(element, cssTheme, mode)
          )
          .join('')}
    </div>
    `;
            }
            getPopupTemplate(elements, cssTheme, mode) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
              if (!document.querySelector('#ods-chart-tooltip-default-template')) {
                let style = document.createElement('style');
                style.id = 'ods-chart-tooltip-default-template';
                style.textContent = DEFAULT_TEMPLATE_CSS;
                document.head.appendChild(style);
              }
              return `
  <div class="ods-charts-popover-holder ods-charts-context ods-charts-mode-${mode} ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_a = cssTheme.popover) === null || _a === void 0 ? void 0 : _a.odsChartsPopoverHolder)}" data-bs-theme="${mode}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_b = cssTheme.popover) === null || _b === void 0 ? void 0 : _b.odsChartsPopoverHolder)}">
    <div class="ods-charts-popover-inner ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_c = cssTheme.popover) === null || _c === void 0 ? void 0 : _c.odsChartsPopoverInner)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_d = cssTheme.popover) === null || _d === void 0 ? void 0 : _d.odsChartsPopoverInner)}">
      <div class="ods-charts-popover-content ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_e = cssTheme.popover) === null || _e === void 0 ? void 0 : _e.odsChartsPopoverContent)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_f = cssTheme.popover) === null || _f === void 0 ? void 0 : _f.odsChartsPopoverContent)}" >
        <div class="ods-charts-popover-arrow ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_g = cssTheme.popover) === null || _g === void 0 ? void 0 : _g.odsChartsPopoverArrow)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_h = cssTheme.popover) === null || _h === void 0 ? void 0 : _h.odsChartsPopoverArrow)}; left: ${this.tooltipStyle}" ></div>
          <div class="ods-charts-popover-header ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_j = cssTheme.popover) === null || _j === void 0 ? void 0 : _j.odsChartsPopoverHeader)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_k = cssTheme.popover) === null || _k === void 0 ? void 0 : _k.odsChartsPopoverHeader)}">${elements.categoryLabel}</div>
          <div class="ods-charts-popover-body ${css_themes_1.ODSChartsItemCSSDefinition.getClasses((_l = cssTheme.popover) === null || _l === void 0 ? void 0 : _l.odsChartsPopoverBody)}" style="${css_themes_1.ODSChartsItemCSSDefinition.getStyles((_m = cssTheme.popover) === null || _m === void 0 ? void 0 : _m.odsChartsPopoverBody)}">
            ${
              this.popoverDefinition.getPopupContent
                ? this.popoverDefinition.getPopupContent(elements.tooltipElements)
                : this.getPopupContent(elements.tooltipElements, cssTheme, mode)
            }
          </div>
        </div>
      </div>
    </div>
`;
            }
            displayPopup(event, item, cssTheme, mode) {
              if (0 !== this.popoverConfig.tooltipDelay) {
                if (this.tooltipDelay) {
                  return;
                }
                this.tooltipDelay = window.setTimeout(
                  () => {
                    this.tooltipDelay = undefined;
                  },
                  this.popoverConfig.tooltipDelay ? this.popoverConfig.tooltipDelay : 200
                );
              }
              let id = '' + Math.ceil(Math.random() * 100000);
              let tooltipAnchor = document.querySelector('.libPopupTooltipAnchor');
              if (!tooltipAnchor) {
                document.body.appendChild(new DOMParser().parseFromString(`<div class="libPopupTooltipAnchor" ></div>`, 'text/html').body.firstChild);
              }
              tooltipAnchor = document.querySelector('.libPopupTooltipAnchor');
              tooltipAnchor.setAttribute('data-id', id);
              tooltipAnchor.setAttribute(
                'style',
                `
                    position: absolute;
                    top: ${event.pageY}px;
                    left: ${event.pageX}px;
                    `
              );
              try {
                let popover = this.popoverDefinition.getOrCreatePopupInstance(
                  '.libPopupTooltipAnchor',
                  item.categoryLabel,
                  this.popoverDefinition.getPopupContent
                    ? this.popoverDefinition.getPopupContent(item.tooltipElements)
                    : this.getPopupContent(item.tooltipElements, cssTheme, mode),
                  this.enterable,
                  mode
                );
                if (!popover) {
                  return;
                }
                popover.show();
                if (this.tooltipTimeOut) {
                  window.clearTimeout(this.tooltipTimeOut);
                  this.tooltipTimeOut = undefined;
                }
                if (this.popoverConfig.tooltip) {
                  this.tooltipTimeOut = window.setTimeout(
                    () => {
                      try {
                        popover.dispose();
                      } catch (error) {}
                    },
                    this.popoverConfig.tooltipTimeout ? this.popoverConfig.tooltipTimeout : 3000
                  );
                }
                window.setTimeout(() => {
                  addEventListener(
                    'click',
                    (event) => {
                      if (tooltipAnchor.getAttribute('data-id') === id) {
                        try {
                          popover.dispose();
                        } catch (error) {}
                      }
                    },
                    { once: true }
                  );
                });
              } catch (error) {
                console.log(error);
              }
            }
          }
          exports.ODSChartsPopover = ODSChartsPopover;

          /***/
        },

      /***/ './src/theme/resize/ods-chart-resize.ts':
        /*!**********************************************!*\
  !*** ./src/theme/resize/ods-chart-resize.ts ***!
  \**********************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsResize = void 0;
          class ODSChartsResize {
            constructor(echart, chartId) {
              this.echart = echart;
              this.chartId = chartId;
              this.observer = undefined;
            }
            static addResizeManagement(echart, chartId) {
              return new ODSChartsResize(echart, chartId);
            }
            get divElement() {
              let div;
              div = document.getElementById(this.chartId) || undefined;
              if (!div) {
                div = this.echart.getDom() || undefined;
                if (div) {
                  div = div.parentElement || undefined;
                }
              }
              return div;
            }
            addResizeManagement() {
              this.removeListener();
              const div = this.divElement;
              if (div && ResizeObserver) {
                this.observer = new ResizeObserver(this.resizeChart.bind(this));
                this.observer.observe(div);
              } else {
                ODSChartsResize.sizeListeners[this.chartId] = this.resizeChart.bind(this);
                window.addEventListener('resize', ODSChartsResize.sizeListeners[this.chartId]);
              }
            }
            removeListener() {
              try {
                const div = this.divElement;
                if (div && ResizeObserver) {
                  if (this.observer) {
                    this.observer.unobserve(div);
                    this.observer = undefined;
                  }
                } else if (ODSChartsResize.sizeListeners[this.chartId]) {
                  window.removeEventListener('resize', ODSChartsResize.sizeListeners[this.chartId]);
                  delete ODSChartsResize.sizeListeners[this.chartId];
                }
              } catch (error) {}
            }
            resizeChart() {
              try {
                const chartOptions = this.echart.getOption();
                const opts = {};
                if (chartOptions.animation) {
                  opts.animation = {
                    duration: 'number' === typeof chartOptions.animationDuration ? chartOptions.animationDuration : 1000,
                    easing: chartOptions.animationEasing ? chartOptions.animationEasing : 'cubicInOut',
                  };
                }
                this.echart.resize(opts);
              } catch (error) {
                this.removeListener();
              }
            }
          }
          exports.ODSChartsResize = ODSChartsResize;
          ODSChartsResize.sizeListeners = {};

          /***/
        },

      /***/ './src/theme/theme-observer/ods-charts-theme-observer.ts':
        /*!***************************************************************!*\
  !*** ./src/theme/theme-observer/ods-charts-theme-observer.ts ***!
  \***************************************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.ODSChartsThemeObserver = void 0;
          class ODSChartsThemeObserver {
            constructor(echart, redraw) {
              this.echart = echart;
              this.redraw = redraw;
            }
            static addThemeObserver(echart, redraw) {
              return new ODSChartsThemeObserver(echart, redraw);
            }
            get divElement() {
              let div;
              try {
                div = this.echart.getDom();
              } catch (error) {}
              if (!div) {
                this.removeListener();
              }
              return div;
            }
            addThemeObserver() {
              this.removeListener();
              let div = this.divElement;
              if (div && MutationObserver) {
                div = div.closest('[data-bs-theme]') || undefined;
                if (div) {
                  this.observer = new MutationObserver(this.observeAttributeChange.bind(this));
                  this.observer.observe(div, { attributes: true, childList: false, subtree: false });
                }
              }
              return div;
            }
            removeListener() {
              try {
                if (this.observer) {
                  this.observer.disconnect();
                }
              } catch (error) {
              } finally {
                this.observer = undefined;
              }
            }
            observeAttributeChange(mutations, observer) {
              try {
                if (this.divElement) {
                  if (mutations.find((mutation) => mutation.type === 'attributes' && mutation.attributeName === 'data-bs-theme')) {
                    this.redraw();
                  }
                }
              } catch (error) {
                this.removeListener();
              }
            }
          }
          exports.ODSChartsThemeObserver = ODSChartsThemeObserver;

          /***/
        },

      /***/ './src/tools/clone-deep-object.ts':
        /*!****************************************!*\
  !*** ./src/tools/clone-deep-object.ts ***!
  \****************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.cloneDeepObject = cloneDeepObject;
          const merge_objects_1 = __webpack_require__(/*! ./merge-objects */ './src/tools/merge-objects.ts');
          function cloneDeepObject(obj) {
            if ((0, merge_objects_1.isVarObject)(obj)) {
              const result = {};
              for (const key of Object.keys(obj)) {
                result[key] = cloneDeepObject(obj[key]);
              }
              return result;
            } else if ((0, merge_objects_1.isVarArray)(obj)) {
              const result = [];
              for (let index = 0; index < obj.length; index++) {
                result[index] = cloneDeepObject(obj[index]);
              }
              return result;
            } else {
              return obj;
            }
          }

          /***/
        },

      /***/ './src/tools/conditional-clone-deep-object.ts':
        /*!****************************************************!*\
  !*** ./src/tools/conditional-clone-deep-object.ts ***!
  \****************************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.lookForPaths = lookForPaths;
          exports.conditionalCloneDeepObject = conditionalCloneDeepObject;
          const merge_objects_1 = __webpack_require__(/*! ./merge-objects */ './src/tools/merge-objects.ts');
          function lookForPaths(obj, condition, searchedTypes = ['string'], currentPath = '', foundPaths = []) {
            if (searchedTypes.includes(typeof obj) && condition(obj)) {
              foundPaths.push(currentPath);
            } else {
              if ((0, merge_objects_1.isVarArray)(obj)) {
                for (let index = 0; index < obj.length; index++) {
                  lookForPaths(obj[index], condition, searchedTypes, currentPath + '[' + index + ']', foundPaths);
                }
              } else if ((0, merge_objects_1.isVarObject)(obj)) {
                for (const key of Object.keys(obj)) {
                  lookForPaths(obj[key], condition, searchedTypes, ('' === currentPath ? '' : currentPath + '.') + key, foundPaths);
                }
              }
            }
            return foundPaths;
          }
          function recursiveCloneDeep(obj, pathsToCopy, currentPath = '') {
            if (pathsToCopy.find((onePathToCopy) => onePathToCopy.startsWith(currentPath))) {
              if ((0, merge_objects_1.isVarObject)(obj)) {
                const result = {};
                for (const key of Object.keys(obj)) {
                  result[key] = recursiveCloneDeep(obj[key], pathsToCopy, ('' === currentPath ? '' : currentPath + '.') + key);
                }
                return result;
              } else if ((0, merge_objects_1.isVarArray)(obj)) {
                const result = [];
                for (let index = 0; index < obj.length; index++) {
                  result[index] = recursiveCloneDeep(obj[index], pathsToCopy, currentPath + '[' + index + ']');
                }
                return result;
              }
            }
            return obj;
          }
          function conditionalCloneDeepObject(obj, condition, searchedTypes = ['string']) {
            const pathsToCopy = lookForPaths(obj, condition, searchedTypes);
            if (0 < pathsToCopy.length) {
              return recursiveCloneDeep(obj, pathsToCopy);
            }
            return obj;
          }

          /***/
        },

      /***/ './src/tools/hash.ts':
        /*!***************************!*\
  !*** ./src/tools/hash.ts ***!
  \***************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.buildHash = buildHash;
          exports.getStringValue = getStringValue;
          function buildHash(text) {
            var result = 0;
            if ('string' !== typeof text) {
              text = JSON.stringify(text);
            }
            if (text.length == 0) return '' + result;
            for (let index = 0; index < text.length; index++) {
              const charCode = text.charCodeAt(index);
              result = (result << 5) - result + charCode;
              result = result & result;
            }
            return '' + result;
          }
          function getStringValue(text) {
            return 'string' === typeof text ? text : buildHash(text);
          }

          /***/
        },

      /***/ './src/tools/merge-objects.ts':
        /*!************************************!*\
  !*** ./src/tools/merge-objects.ts ***!
  \************************************/
        /***/ (__unused_webpack_module, exports) => {
          //
          // Software Name: Orange Design System Charts
          // SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
          // SPDX-License-Identifier: MIT
          //
          // This software is distributed under the MIT license.
          //
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.isVarArray = isVarArray;
          exports.isVarObject = isVarObject;
          exports.isVarFunction = isVarFunction;
          exports.mergeObjects = mergeObjects;
          function isVarArray(obj) {
            return obj && Array.isArray(obj);
          }
          function isVarObject(obj) {
            return typeof obj === 'object' && !isVarArray(obj);
          }
          function isVarFunction(obj) {
            return typeof obj === 'function';
          }
          function mergeObjects(obj1, obj2, ...obj) {
            if (obj && isVarArray(obj) && 0 < obj.length) {
              return mergeObjects(mergeObjects(obj1, obj2), obj[0], ...obj.slice(1));
            }
            if (isVarObject(obj1) && isVarObject(obj2)) {
              for (const obj2Key of Object.keys(obj2)) {
                if (isVarObject(obj1[obj2Key]) && isVarObject(obj2[obj2Key])) {
                  mergeObjects(obj1[obj2Key], obj2[obj2Key]);
                } else {
                  obj1[obj2Key] = obj2[obj2Key];
                }
              }
            }
            return obj1;
          }

          /***/
        },

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module is referenced by other modules so it can't be inlined
    /******/ var __webpack_exports__ = __webpack_require__('./index.ts');
    /******/
    /******/ return __webpack_exports__;
    /******/
  })();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2RzLWNoYXJ0cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyw2Q0FBa0I7Ozs7Ozs7Ozs7O0FDaEIxQjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsK0RBQXlCO0FBQzNELGFBQWEsbUJBQU8sQ0FBQywrREFBeUI7QUFDOUMsYUFBYSxtQkFBTyxDQUFDLHVEQUFxQjtBQUMxQyxhQUFhLG1CQUFPLENBQUMsMkVBQStCO0FBQ3BELGFBQWEsbUJBQU8sQ0FBQywyR0FBK0M7QUFDcEUsYUFBYSxtQkFBTyxDQUFDLDJHQUErQztBQUNwRSxhQUFhLG1CQUFPLENBQUMsK0VBQWlDO0FBQ3RELHVCQUF1Qjs7Ozs7Ozs7Ozs7QUN2Q1Y7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDakpZO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0NBQWdDO0FBQ2hDLHFDQUFxQyxtQkFBTyxDQUFDLHNGQUE4QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7Ozs7Ozs7Ozs7O0FDbk9iO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCLEdB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsMEJBQTBCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT0RTQ2hhcnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvb2RzLWNoYXJ0cy50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvT0RTLnByb2plY3QudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2NoYXJ0cy10eXBlL2NoYXJ0cy10eXBlLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9jb2xvcnMvX291ZHMtY29sb3JzLWNzcy12YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2NvbG9ycy9jb2xvcnMtY3NzLXZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvY29tbW9uL09EUy5saW5lLXN0eWxlLmJyb2tlbi50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvY29tbW9uL09EUy5saW5lLXN0eWxlLnNtb290aC50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvY29tbW9uL09EUy5saW5lLXN0eWxlLndpdGgtcG9pbnRzLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9jb25zdC9tYWluLWF4aXMtdHlwZS5jb25zdC50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvY3NzLXRoZW1lcy9jc3MtaGVscGVyLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9jc3MtdGhlbWVzL2Nzcy10aGVtZXMudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT0RTLmNvbG9ycy5ibHVlLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09EUy5jb2xvcnMuY2F0ZWdvcmljYWwudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT0RTLmNvbG9ycy5kYXJrZXItdGludHMudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT0RTLmNvbG9ycy5mdW5jdGlvbmFsLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09EUy5jb2xvcnMuZ3JlZW4udHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT0RTLmNvbG9ycy5saWdodGVyLXRpbnRzLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09EUy5jb2xvcnMucGluay50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvZGVmYXVsdC9PRFMuY29sb3JzLnB1cnBsZS50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvZGVmYXVsdC9PRFMuY29sb3JzLnN1cHBvcnRpbmctY29sb3JzLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09EUy5jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT0RTLmNvbG9ycy55ZWxsb3cudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT0RTLmNvbW1vbi50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvZGVmYXVsdC9PRFMubGluZXMuYXhpcy50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvZGVmYXVsdC9PVURTLmNvbG9ycy5ibHVlLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09VRFMuY29sb3JzLmNhdGVnb3JpY2FsLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09VRFMuY29sb3JzLmZ1bmN0aW9uYWwudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT1VEUy5jb2xvcnMuZ3JlZW4udHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT1VEUy5jb2xvcnMuaGlnaGxpZ2h0LnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09VRFMuY29sb3JzLnBpbmsudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2RlZmF1bHQvT1VEUy5jb2xvcnMucHVycGxlLnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90aGVtZS9kZWZhdWx0L09VRFMuY29sb3JzLnNpbmdsZS50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvZGVmYXVsdC9PVURTLmNvbG9ycy55ZWxsb3cudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2xlZ2VuZHMvb2RzLWNoYXJ0LWxlZ2VuZHMtZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL2xlZ2VuZHMvb2RzLWNoYXJ0LWxlZ2VuZHMudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL29kcy1jaGFydC10aGVtZS50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvcG9wb3Zlci9vZHMtY2hhcnQtcG9wb3Zlci1kZWZpbml0aW9ucy50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvcG9wb3Zlci9vZHMtY2hhcnQtcG9wb3Zlci50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdGhlbWUvcmVzaXplL29kcy1jaGFydC1yZXNpemUudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3RoZW1lL3RoZW1lLW9ic2VydmVyL29kcy1jaGFydHMtdGhlbWUtb2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzLy4vc3JjL3Rvb2xzL2Nsb25lLWRlZXAtb2JqZWN0LnRzIiwid2VicGFjazovL09EU0NoYXJ0cy8uL3NyYy90b29scy9jb25kaXRpb25hbC1jbG9uZS1kZWVwLW9iamVjdC50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdG9vbHMvaGFzaC50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvLi9zcmMvdG9vbHMvbWVyZ2Utb2JqZWN0cy50cyIsIndlYnBhY2s6Ly9PRFNDaGFydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0RTQ2hhcnRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9PRFNDaGFydHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9EU0NoYXJ0c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPRFNDaGFydHNcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zcmMvb2RzLWNoYXJ0c1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFRoZW1lTWFuYWdlciA9IHZvaWQgMDtcbi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKlxuICogVGhpcyBwYWdlIGlzIGFuIGluZGV4IG9mIHRoZSBtb2R1bGUncyBjbGFzc2VzLCBpbnRlcmZhY2VzIGFuZCBlbnVtZXJhdGlvbnMuXG4gKlxuICogVGhlaXIgdXNlIGlzIGludHJvZHVjZWQgb24gdGhlIFtob21lIHBhZ2VdKC4vI21kOmRvY3VtZW50YXRpb24pLlxuICpcbiAqL1xuY29uc3Qgb2RzX2NoYXJ0X3RoZW1lXzEgPSByZXF1aXJlKFwiLi90aGVtZS9vZHMtY2hhcnQtdGhlbWVcIik7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGhlbWUvb2RzLWNoYXJ0LXRoZW1lXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aGVtZS9PRFMucHJvamVjdFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGhlbWUvY3NzLXRoZW1lcy9jc3MtdGhlbWVzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aGVtZS9wb3BvdmVyL29kcy1jaGFydC1wb3BvdmVyLWRlZmluaXRpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aGVtZS9sZWdlbmRzL29kcy1jaGFydC1sZWdlbmRzLWRlZmluaXRpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aGVtZS9jaGFydHMtdHlwZS9jaGFydHMtdHlwZVwiKSwgZXhwb3J0cyk7XG5leHBvcnRzLmdldFRoZW1lTWFuYWdlciA9IG9kc19jaGFydF90aGVtZV8xLk9EU0NoYXJ0c1RoZW1lLmdldFRoZW1lTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9EU19QUk9KRUNUID0gdm9pZCAwO1xuZXhwb3J0cy5PRFNfUFJPSkVDVCA9IHtcbiAgICBjb2xvcjogWycjNGJiNGU2JywgJyM1MGJlODcnLCAnI2ZmYjRlNicsICcjYTg4NWQ4JywgJyNmZmQyMDAnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1icy1ib2R5LWJnLCB0cmFuc3BhcmVudCknLFxuICAgIHRleHRTdHlsZToge30sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VidGV4dFN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzY2NjY2NiknLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICB9LFxuICAgICAgICBzeW1ib2xTaXplOiAwLFxuICAgICAgICBzeW1ib2w6ICdlbXB0eUNpcmNsZScsXG4gICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICB9LFxuICAgIHJhZGFyOiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHN5bWJvbFNpemU6IDQsXG4gICAgICAgIHN5bWJvbDogJ2VtcHR5Q2lyY2xlJyxcbiAgICAgICAgc21vb3RoOiBmYWxzZSxcbiAgICB9LFxuICAgIGJhcjoge1xuICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGJhckJvcmRlcldpZHRoOiAnMicsXG4gICAgICAgICAgICBiYXJCb3JkZXJDb2xvcjogJ3ZhcigtLWJzLWJvZHktYmcsICNmZmZmZmYpJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBpZToge1xuICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAnMicsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLWJvZHktYmcsICNmZmZmZmYpJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNjYXR0ZXI6IHtcbiAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICBib3JkZXJXaWR0aDogJzInLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd2YXIoLS1icy1ib2R5LWJnLCAjZmZmZmZmKScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBib3hwbG90OiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyV2lkdGg6ICcyJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAndmFyKC0tYnMtYm9keS1iZywgI2ZmZmZmZiknLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGFyYWxsZWw6IHtcbiAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICBib3JkZXJXaWR0aDogJzInLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd2YXIoLS1icy1ib2R5LWJnLCAjZmZmZmZmKScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzYW5rZXk6IHtcbiAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICBib3JkZXJXaWR0aDogJzInLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd2YXIoLS1icy1ib2R5LWJnLCAjZmZmZmZmKScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBmdW5uZWw6IHtcbiAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICBib3JkZXJXaWR0aDogJzInLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd2YXIoLS1icy1ib2R5LWJnLCAjZmZmZmZmKScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBnYXVnZToge1xuICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAnMicsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLWJvZHktYmcsICNmZmZmZmYpJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNhbmRsZXN0aWNrOiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1zdWNjZXNzLCAjMzJjODMyKScsXG4gICAgICAgICAgICBjb2xvcjA6ICd2YXIoLS1icy1kYW5nZXIsICNjZDNjMTQpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAndmFyKC0tYnMtc3VjY2VzcywgIzIyODcyMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3IwOiAndmFyKC0tYnMtZGFuZ2VyLCAjY2QzYzE0KScsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGdyYXBoOiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyV2lkdGg6ICcyJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAndmFyKC0tYnMtYm9keS1iZywgI2ZmZmZmZiknLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1zZWNvbmRhcnktY29sb3IsICM2NjY2NjYpJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3ltYm9sU2l6ZTogNCxcbiAgICAgICAgc3ltYm9sOiAnZW1wdHlDaXJjbGUnLFxuICAgICAgICBzbW9vdGg6IGZhbHNlLFxuICAgICAgICBjb2xvcjogWycjNGJiNGU2JywgJyM1MGJlODcnLCAnI2ZmYjRlNicsICcjYTg4NWQ4JywgJyNmZmQyMDAnXSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9keS1jb2xvciwgIzAwMDAwMCknLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWFwOiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgYXJlYUNvbG9yOiAndmFyKC0tYnMtc2Vjb25kYXJ5LWJnLCAjZWVlZWVlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzQ0NDQ0NCknLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAuNSxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9keS1jb2xvciwgIzAwMDAwMCknLFxuICAgICAgICB9LFxuICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYXJlYUNvbG9yOiAncmdiYSh2YXIoLS1icy13YXJuaW5nLXJnYiwgMjU1LDIxNSwwKSwwLjgpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzQ0NDQ0NCknLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ibGFjaywgcmdiKDEwMCwwLDApKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZ2VvOiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgYXJlYUNvbG9yOiAndmFyKC0tYnMtc2Vjb25kYXJ5LWJnLCAjZWVlZWVlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzQ0NDQ0NCknLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAuNSxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9keS1jb2xvciwgIzAwMDAwMCknLFxuICAgICAgICB9LFxuICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYXJlYUNvbG9yOiAncmdiYSh2YXIoLS1icy13YXJuaW5nLXJnYiwgMjU1LDIxNSwwKSwwLjgpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzQ0NDQ0NCknLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ibGFjaywgcmdiKDEwMCwwLDApKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2F0ZWdvcnlBeGlzOiB7XG4gICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWRhbmdlciwgI2ViMDkwOSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib2R5LWNvbG9yLCAjMDAwMDAwKScsXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0TGluZToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogWyd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXRBcmVhOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGFyZWFTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBbJ3ZhcigtLWJzLWJvZHktYmcsICNmZmZmZmYpJ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdmFsdWVBeGlzOiB7XG4gICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLXNlY29uZGFyeS1jb2xvciwgIzZFNzA3OSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib2R5LWNvbG9yLCAjMDAwMDAwKScsXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0TGluZToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogWyd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXRBcmVhOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGFyZWFTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBbJ3JnYmEodmFyKC0tYnMtYm9keS1iZy1yZ2IsIDI1MCwyNTAsMjUwKSwwLjIpJywgJ3JnYmEodmFyKC0tYnMtdGVydGlhcnktY29sb3ItcmdiLCAyMTAsMjE5LDIzOCksMC4yKSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxvZ0F4aXM6IHtcbiAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzZFNzA3OSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib2R5LWNvbG9yLCAjMDAwMDAwKScsXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0TGluZToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogWyd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXRBcmVhOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGFyZWFTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBbJ3JnYmEodmFyKC0tYnMtYm9keS1iZy1yZ2IsIDI1MCwyNTAsMjUwKSwwLjIpJywgJ3JnYmEodmFyKC0tYnMtdGVydGlhcnktY29sb3ItcmdiLCAyMTAsMjE5LDIzOCksMC4yKSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRpbWVBeGlzOiB7XG4gICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvcmRlci1jb2xvci1zdWJ0bGUsICNjY2NjY2MpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9keS1jb2xvciwgIzAwMDAwMCknLFxuICAgICAgICB9LFxuICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFsndmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjY2NjYyknXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0QXJlYToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBhcmVhU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogWydyZ2JhKHZhcigtLWJzLWJvZHktYmctcmdiLCAyNTAsMjUwLDI1MCksMC4yKScsICdyZ2JhKHZhcigtLWJzLXRlcnRpYXJ5LWNvbG9yLXJnYiwgMjEwLDIxOSwyMzgpLDAuMiknXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b29sYm94OiB7XG4gICAgICAgIGljb25TdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd2YXIoLS1icy1zZWNvbmRhcnktY29sb3IsICM5OTk5OTkpJyxcbiAgICAgICAgfSxcbiAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgIGljb25TdHlsZToge1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAndmFyKC0tYnMtYm9keS1jb2xvciwgIzY2NjY2NiknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9keS1jb2xvciwgIzMzMzMzMyknLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgICBheGlzUG9pbnRlcjoge1xuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3Jvc3NTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjY2NjYyknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRpbWVsaW5lOiB7XG4gICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy10ZXJ0aWFyeS1iZywgI2RhZTFmNSknLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1zZWNvbmRhcnktYmcsICNhNGIxZDcpJyxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtc2Vjb25kYXJ5LWJnLCAjYTRiMWQ3KScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1iZywgI2E0YjFkNyknLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrcG9pbnRTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1pbmZvLCAjMzE2YmYzKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ZhcigtLWJzLWJvZHktYmcsICNmZmZmZmYpJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtc2Vjb25kYXJ5LWJnLCAjYTRiMWQ3KScsXG4gICAgICAgIH0sXG4gICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvZHktYmcsICNmZmZmZmYpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1iZywgI2E0YjFkNyknLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAndmFyKC0tYnMtc2Vjb25kYXJ5LWJnLCAjYTRiMWQ3KScsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLXNlY29uZGFyeS1iZywgI2E0YjFkNyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHZpc3VhbE1hcDoge1xuICAgICAgICBjb2xvcjogWycjMDg1ZWJkJywgJyMzMTc5YzgnLCAnIzVhOTRkMycsICcjODRhZmRlJywgJyNhZGM5ZTknLCAnI2Q2ZTRmNCddLFxuICAgIH0sXG4gICAgbWFya1BvaW50OiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApJyxcbiAgICAgICAgfSxcbiAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib2R5LWNvbG9yLCAjMDAwMDAwKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTQ2hhcnRzR2F1Z2VUeXBlID0gZXhwb3J0cy5PRFNDaGFydHNCYXJUeXBlID0gZXhwb3J0cy5PRFNDaGFydHNMaW5lVHlwZSA9IGV4cG9ydHMuT0RTQ2hhcnRzQ29uZmlndXJhdGlvbiA9IGV4cG9ydHMuT0RTQ2hhcnRzVHlwZXMgPSB2b2lkIDA7XG5jb25zdCBvZHNfY2hhcnRfdGhlbWVfMSA9IHJlcXVpcmUoXCIuLi9vZHMtY2hhcnQtdGhlbWVcIik7XG4vKipcbiAqIENoYXJ0cyB0eXBlXG4gKi9cbnZhciBPRFNDaGFydHNUeXBlcztcbihmdW5jdGlvbiAoT0RTQ2hhcnRzVHlwZXMpIHtcbiAgICBPRFNDaGFydHNUeXBlc1tcIkRFRkFVTFRcIl0gPSBcIkRFRkFVTFRcIjtcbiAgICBPRFNDaGFydHNUeXBlc1tcIkxJTkVcIl0gPSBcIkxJTkVcIjtcbiAgICBPRFNDaGFydHNUeXBlc1tcIkJBUlwiXSA9IFwiQkFSXCI7XG4gICAgT0RTQ2hhcnRzVHlwZXNbXCJMSU5FX0FORF9CQVJcIl0gPSBcIkxJTkVfQU5EX0JBUlwiO1xuICAgIE9EU0NoYXJ0c1R5cGVzW1wiUElFXCJdID0gXCJQSUVcIjtcbiAgICBPRFNDaGFydHNUeXBlc1tcIkRPTlVUXCJdID0gXCJET05VVFwiO1xuICAgIE9EU0NoYXJ0c1R5cGVzW1wiSE9SSVpPTlRBTF9HQVVHRVwiXSA9IFwiSE9SSVpPTlRBTF9HQVVHRVwiO1xuICAgIE9EU0NoYXJ0c1R5cGVzW1wiQ0lSQ1VMQVJfR0FVR0VcIl0gPSBcIkNJUkNVTEFSX0dBVUdFXCI7XG59KShPRFNDaGFydHNUeXBlcyB8fCAoZXhwb3J0cy5PRFNDaGFydHNUeXBlcyA9IE9EU0NoYXJ0c1R5cGVzID0ge30pKTtcbi8qKlxuICogQ2hhcnRzQ29uZmlndXJhdGlvbiBpcyB1c2VkIHRvIHNwZWNpZnkgdGhlIGNvbmZpZ3VyYXRpb24gc3BlY2lmaWMgdG8gYSB0eXBlIG9mIGdyYXBoLlxuICpcbiAqIEZvciB0aGUgbW9tZW50IGNhbiBiZTpcbiAqIC0ge0BsaW5rIGdldExpbmVDaGFydENvbmZpZ3VyYXRpb259IDogY29uZmlndXJhdGlvbiBvZiBhIGxpbmUgY2hhcnRcbiAqIC0ge0BsaW5rIGdldEJhckNoYXJ0Q29uZmlndXJhdGlvbn0gOiBjb25maWd1cmF0aW9uIG9mIGEgYmFyIGNoYXJ0XG4gKiAtIHtAbGluayBnZXRMaW5lQW5kQmFyQ2hhcnRDb25maWd1cmF0aW9ufSA6IGNvbmZpZ3VyYXRpb24gb2YgYSBiYXIgYW5kIGxpbmUgY2hhcnRcbiAqIC0ge0BsaW5rIGdldFBpZUNoYXJ0Q29uZmlndXJhdGlvbn0gOiBjb25maWd1cmF0aW9uIG9mIGEgcGllIGNoYXJ0XG4gKiAtIHtAbGluayBnZXREb251dENoYXJ0Q29uZmlndXJhdGlvbn0gOiBjb25maWd1cmF0aW9uIG9mIGEgZG9udXQgY2hhcnRcbiAqIC0ge0BsaW5rIE9EU0NoYXJ0c0dhdWdlfSA6IGNvbmZpZ3VyYXRpb24gb2YgYSBjaGFydCBvZiB0eXBlIHtAbGluayBPRFNDaGFydHNUeXBlcy5ESUFMX0dBVUdFfSwge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLkhPUklaT05UQUxfR0FVR0V9LCB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuQ0lSQ1VMQVJfR0FVR0V9IG9yIHtAbGluayBPRFNDaGFydHNUeXBlcy5DSVJDTEVfR0FVR0V9XG4gKi9cbmNsYXNzIE9EU0NoYXJ0c0xpbmVDb25maWd1cmF0aW9uIHtcbn1cbmNsYXNzIE9EU0NoYXJ0c0NvbmZpZ3VyYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUgPSBPRFNDaGFydHNUeXBlcy5ERUZBVUxUKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXREZWZhdWx0Q2hhcnRDb25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IE9EU0NoYXJ0c0NvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gICAgc3RhdGljIGdldExpbmVDaGFydENvbmZpZ3VyYXRpb24oY29uZmlnID0geyBsaW5lU3R5bGU6IG9kc19jaGFydF90aGVtZV8xLk9EU0NoYXJ0c0xpbmVTdHlsZS5TTU9PVEggfSkge1xuICAgICAgICByZXR1cm4gbmV3IE9EU0NoYXJ0c0xpbmUoY29uZmlnLmxpbmVTdHlsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRCYXJDaGFydENvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgT0RTQ2hhcnRzQmFyKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMaW5lQW5kQmFyQ2hhcnRDb25maWd1cmF0aW9uKGNvbmZpZyA9IHsgbGluZVN0eWxlOiBvZHNfY2hhcnRfdGhlbWVfMS5PRFNDaGFydHNMaW5lU3R5bGUuU01PT1RIIH0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPRFNDaGFydHNMaW5lQW5kQmFyKGNvbmZpZy5saW5lU3R5bGUpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0UGllQ2hhcnRDb25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IE9EU0NoYXJ0c1BpZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RG9udXRDaGFydENvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgT0RTQ2hhcnRzRG9udXQoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEhvcml6b250YWxHYXVnZUNoYXJ0Q29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPRFNDaGFydHNIb3Jpem9udGFsR2F1Z2UoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldENpcmN1bGFyR2F1Z2VDaGFydENvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgT0RTQ2hhcnRzQ2lyY3VsYXJHYXVnZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuT0RTQ2hhcnRzQ29uZmlndXJhdGlvbiA9IE9EU0NoYXJ0c0NvbmZpZ3VyYXRpb247XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gb2YgYSBsaW5lIGNoYXJ0IG9mIG9uZSBvZiB0aGUgdHlwZVxuICogLSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuTElORX1cbiAqIC0ge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLkxJTkVfQU5EX0JBUn1cbiAqL1xuY2xhc3MgT0RTQ2hhcnRzTGluZVR5cGUgZXh0ZW5kcyBPRFNDaGFydHNDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlID0gT0RTQ2hhcnRzVHlwZXMuTElORSwgbGluZVN0eWxlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgICAgICB0aGlzLmxpbmVTdHlsZSA9IGxpbmVTdHlsZTtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5saW5lU3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMubGluZVN0eWxlID0gb2RzX2NoYXJ0X3RoZW1lXzEuT0RTQ2hhcnRzTGluZVN0eWxlLlNNT09USDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuT0RTQ2hhcnRzTGluZVR5cGUgPSBPRFNDaGFydHNMaW5lVHlwZTtcbi8qKlxuICogQ29uZmlndXJhdGlvbiBvZiBhIGNoYXJ0IG9mIHR5cGUge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLkxJTkVfQU5EX0JBUn1cbiAqL1xuY2xhc3MgT0RTQ2hhcnRzTGluZUFuZEJhciBleHRlbmRzIE9EU0NoYXJ0c0xpbmVUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcihsaW5lU3R5bGUpIHtcbiAgICAgICAgc3VwZXIoT0RTQ2hhcnRzVHlwZXMuTElORV9BTkRfQkFSLCBsaW5lU3R5bGUpO1xuICAgIH1cbn1cbi8qKlxuICogQ29uZmlndXJhdGlvbiBvZiBhIGNoYXJ0IG9mIHR5cGUge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLkxJTkV9XG4gKi9cbmNsYXNzIE9EU0NoYXJ0c0xpbmUgZXh0ZW5kcyBPRFNDaGFydHNMaW5lVHlwZSB7XG4gICAgY29uc3RydWN0b3IobGluZVN0eWxlKSB7XG4gICAgICAgIHN1cGVyKE9EU0NoYXJ0c1R5cGVzLkxJTkUsIGxpbmVTdHlsZSk7XG4gICAgfVxufVxuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9mIGEgYmFyIGNoYXJ0IG9mIG9uZSBvZiB0aGUgdHlwZTpcbiAqIC0ge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLkJBUn1cbiAqIC0ge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLlNUQUNLRURfQkFSfVxuICovXG5jbGFzcyBPRFNDaGFydHNCYXJUeXBlIGV4dGVuZHMgT0RTQ2hhcnRzQ29uZmlndXJhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICBzdXBlcih0eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c0JhclR5cGUgPSBPRFNDaGFydHNCYXJUeXBlO1xuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9mIGEgY2hhcnQgb2YgdHlwZSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuQkFSfVxuICovXG5jbGFzcyBPRFNDaGFydHNCYXIgZXh0ZW5kcyBPRFNDaGFydHNCYXJUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoT0RTQ2hhcnRzVHlwZXMuQkFSKTtcbiAgICB9XG59XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gb2YgYSBwaWUgY2hhcnQgb2YgdHlwZSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuUElFfVxuICovXG5jbGFzcyBPRFNDaGFydHNQaWUgZXh0ZW5kcyBPRFNDaGFydHNDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoT0RTQ2hhcnRzVHlwZXMuUElFKTtcbiAgICB9XG59XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gb2YgYSBjaGFydCBvZiB0eXBlIHtAbGluayBPRFNDaGFydHNUeXBlcy5Ib3Jpem9udGFsR2F1Z2V9XG4gKi9cbmNsYXNzIE9EU0NoYXJ0c0RvbnV0IGV4dGVuZHMgT0RTQ2hhcnRzQ29uZmlndXJhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKE9EU0NoYXJ0c1R5cGVzLkRPTlVUKTtcbiAgICB9XG59XG4vKipcbiAqIGNvbmZpZ3VyYXRpb24gb2YgYSBnYXVjaGUgY2hhcnQgb2Ygb25lIHRoZSB0eXBlXG4gKiAtIHtAbGluayBPRFNDaGFydHNUeXBlcy5ESUFMX0dBVUdFfVxuICogLSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuSE9SSVpPTlRBTF9HQVVHRX1cbiAqIC0ge0BsaW5rIE9EU0NoYXJ0c1R5cGVzLkNJUkNVTEFSX0dBVUdFfVxuICogLSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuQ0lSQ0xFX0dBVUdFfVxuICovXG5jbGFzcyBPRFNDaGFydHNHYXVnZVR5cGUgZXh0ZW5kcyBPRFNDaGFydHNDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuT0RTQ2hhcnRzR2F1Z2VUeXBlID0gT0RTQ2hhcnRzR2F1Z2VUeXBlO1xuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9mIGEgY2hhcnQgb2YgdHlwZSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuSE9SSVpPTlRBTF9HQVVHRX1cbiAqL1xuY2xhc3MgT0RTQ2hhcnRzSG9yaXpvbnRhbEdhdWdlIGV4dGVuZHMgT0RTQ2hhcnRzR2F1Z2VUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoT0RTQ2hhcnRzVHlwZXMuSE9SSVpPTlRBTF9HQVVHRSk7XG4gICAgfVxufVxuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9mIGEgY2hhcnQgb2YgdHlwZSB7QGxpbmsgT0RTQ2hhcnRzVHlwZXMuQ0lSQ1VMQVJfR0FVR0V9XG4gKi9cbmNsYXNzIE9EU0NoYXJ0c0NpcmN1bGFyR2F1Z2UgZXh0ZW5kcyBPRFNDaGFydHNHYXVnZVR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihPRFNDaGFydHNUeXBlcy5DSVJDVUxBUl9HQVVHRSk7XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTX0NIQVJUU19DT05URVhUID0gdm9pZCAwO1xuZXhwb3J0cy5PRFNfQ0hBUlRTX0NPTlRFWFQgPSBgXHJcbi5vZHMtY2hhcnRzLWNvbnRleHQsIFtkYXRhLWJzLXRoZW1lPWxpZ2h0XSAub2RzLWNoYXJ0cy1jb250ZXh0LCAub2RzLWNoYXJ0cy1jb250ZXh0W2RhdGEtYnMtdGhlbWU9bGlnaHRdIHtcclxuICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItYm9yZGVyOiAjZmZmZmZmO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItYm9yZGVyLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0xOiAjNWIyZjk4O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0xMDogIzAwOWJmMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItMjogIzNiYTA2ZTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItMzogI2IyMDA3NztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNDogI2EzODIwMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNTogIzAwN2FiZDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNjogIzhkNjBjZDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNzogIzJlN2I1NDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItODogI2U1MDA5OTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItOTogIzY2NTEwMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWZ1bmN0aW9uYWwtaW5mbzogIzAwOWJmMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWZ1bmN0aW9uYWwtbmVnYXRpdmU6ICNkYjAwMDI7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1mdW5jdGlvbmFsLXBvc2l0aXZlOiAjMTdhMDJmO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItZnVuY3Rpb25hbC13YXJuaW5nOiAjYTM4MjAwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItZ3JpZGxpbmVzOiAjY2NjY2NjO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItaGlnaGxpZ2h0OiAjZjE1ZTAwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItbmV1dHJhbDogIzhmOGY4ZjtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC0xMDA6ICNkMmVjZjk7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0xLXRpbnQtMjAwOiAjYTVkYWYzO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMS10aW50LTMwMDogIzc5YzdlYztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC00MDA6ICM0YWI0ZTY7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0xLXRpbnQtNTAwOiAjMWZhMmUwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMS10aW50LTYwMDogIzE5ODJiMztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC03MDA6ICMxMzYxODY7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0xLXRpbnQtODAwOiAjMGM0MTVhO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMS10aW50LTkwMDogIzA2MjAyZDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTItdGludC0xMDA6ICNlNWY1ZWQ7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtMjAwOiAjYzBlOGQ0O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMi10aW50LTMwMDogIzliZGFiYTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTItdGludC00MDA6ICM3NWNjYTE7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtNTAwOiAjNTBiZTg3O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMi10aW50LTYwMDogIzNiYTA2ZTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTItdGludC03MDA6ICMyZTdiNTQ7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtODAwOiAjMjA1NjNiO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMi10aW50LTkwMDogIzEyMzAyMTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTMtdGludC0xMDA6ICNmZmU1ZjY7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtMjAwOiAjZmZiNGU2O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMy10aW50LTMwMDogI2ZmODBkNDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTMtdGludC00MDA6ICNmZjRkYzM7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtNTAwOiAjZmYxYWIyO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMy10aW50LTYwMDogI2U1MDA5OTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTMtdGludC03MDA6ICNiMjAwNzc7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtODAwOiAjODAwMDU1O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMy10aW50LTkwMDogIzRkMDAzMztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC0xMDA6ICNmMWVjZjk7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC00LXRpbnQtMjAwOiAjZTBkNGYyO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNC10aW50LTMwMDogI2M1YWRlNjtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC00MDA6ICNhODg1ZDg7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC00LXRpbnQtNTAwOiAjOGQ2MGNkO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNC10aW50LTYwMDogIzViMmY5ODtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC03MDA6ICM0MzIzNzE7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC00LXRpbnQtODAwOiAjMmMxNzRhO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNC10aW50LTkwMDogIzE1MGIyMztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTUtdGludC0xMDA6ICNmZmYwY2M7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC01LXRpbnQtMjAwOiAjZmZlMTk5O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTMwMDogI2ZmZDI2NjtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTUtdGludC00MDA6ICNmZmMzMzM7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC01LXRpbnQtNTAwOiAjZmZiNDAwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTYwMDogI2NjOTAwMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTUtdGludC03MDA6ICM5OTZjMDA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC01LXRpbnQtODAwOiAjNjY0ODAwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTkwMDogIzMzMjQwMDtcclxufVxyXG5cclxuW2RhdGEtYnMtdGhlbWU9ZGFya10gLm9kcy1jaGFydHMtY29udGV4dCwgLm9kcy1jaGFydHMtY29udGV4dFtkYXRhLWJzLXRoZW1lPWRhcmtdIHtcclxuICBjb2xvci1zY2hlbWU6IGRhcms7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1ib3JkZXI6ICMxNDE0MTQ7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1ib3JkZXItY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTE6ICNhODg1ZDg7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTEwOiAjMWZhMmUwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0yOiAjNTBiZTg3O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0zOiAjZmY4MGQ0O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci00OiAjY2M5MDAwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci01OiAjNzljN2VjO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci02OiAjOGQ2MGNkO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci03OiAjOWJkYWJhO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci04OiAjZmY0ZGMzO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci05OiAjZmZkMjY2O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItZnVuY3Rpb25hbC1pbmZvOiAjMjZiMmZmO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3ItZnVuY3Rpb25hbC1uZWdhdGl2ZTogI2ZmNGQ0ZTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLWZ1bmN0aW9uYWwtcG9zaXRpdmU6ICMxZWNkM2M7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1mdW5jdGlvbmFsLXdhcm5pbmc6ICNmZmQwMDA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1ncmlkbGluZXM6ICM2NjY2NjY7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1oaWdobGlnaHQ6ICNmZjc5MDA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1uZXV0cmFsOiAjODU4NTg1O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMS10aW50LTEwMDogIzA2MjAyZDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC0yMDA6ICMwYzQxNWE7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0xLXRpbnQtMzAwOiAjMTM2MTg2O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMS10aW50LTQwMDogIzE5ODJiMztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC01MDA6ICMxZmEyZTA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0xLXRpbnQtNjAwOiAjNGFiNGU2O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMS10aW50LTcwMDogIzc5YzdlYztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC04MDA6ICNhNWRhZjM7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0xLXRpbnQtOTAwOiAjZDJlY2Y5O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMi10aW50LTEwMDogIzEyMzAyMTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTItdGludC0yMDA6ICMyMDU2M2I7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtMzAwOiAjMmU3YjU0O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMi10aW50LTQwMDogIzNiYTA2ZTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTItdGludC01MDA6ICM1MGJlODc7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtNjAwOiAjNzVjY2ExO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMi10aW50LTcwMDogIzliZGFiYTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTItdGludC04MDA6ICNjMGU4ZDQ7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtOTAwOiAjZTVmNWVkO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMy10aW50LTEwMDogIzRkMDAzMztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTMtdGludC0yMDA6ICM4MDAwNTU7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtMzAwOiAjYjIwMDc3O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMy10aW50LTQwMDogI2U1MDA5OTtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTMtdGludC01MDA6ICNmZjFhYjI7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtNjAwOiAjZmY0ZGMzO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtMy10aW50LTcwMDogI2ZmODBkNDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTMtdGludC04MDA6ICNmZmI0ZTY7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtOTAwOiAjZmZlNWY2O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNC10aW50LTEwMDogIzE1MGIyMztcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC0yMDA6ICMyYzE3NGE7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC00LXRpbnQtMzAwOiAjNDMyMzcxO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNC10aW50LTQwMDogIzViMmY5ODtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC01MDA6ICM4ZDYwY2Q7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC00LXRpbnQtNjAwOiAjYTg4NWQ4O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNC10aW50LTcwMDogI2M1YWRlNjtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC04MDA6ICNlMGQ0ZjI7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC00LXRpbnQtOTAwOiAjZjFlY2Y5O1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTEwMDogIzMzMjQwMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTUtdGludC0yMDA6ICM2NjQ4MDA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC01LXRpbnQtMzAwOiAjOTk2YzAwO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTQwMDogI2NjOTAwMDtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTUtdGludC01MDA6ICNmZmI0MDA7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC01LXRpbnQtNjAwOiAjZmZjMzMzO1xyXG4gIC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTcwMDogI2ZmZDI2NjtcclxuICAtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTUtdGludC04MDA6ICNmZmUxOTk7XHJcbiAgLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC01LXRpbnQtOTAwOiAjZmZmMGNjO1xyXG59YDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9EU19DSEFSVFNfQ1NTX1ZBUklBQkxFUyA9IHZvaWQgMDtcbmNvbnN0IF9vdWRzX2NvbG9yc19jc3NfdmFyaWFibGVzXzEgPSByZXF1aXJlKFwiLi9fb3Vkcy1jb2xvcnMtY3NzLXZhcmlhYmxlc1wiKTtcbi8qKlxuICogQWRkZWQgZm9yIE5vbmUgb3IgQm9vc3RlZCA0IHRoZW1lc1xuICovXG5jb25zdCBCT09TVEVENV9WQVJJQUJMRSA9IGBcclxuLm9kcy1jaGFydHMtY29udGV4dCwgW2RhdGEtYnMtdGhlbWU9XCJsaWdodFwiXSAub2RzLWNoYXJ0cy1jb250ZXh0LCAub2RzLWNoYXJ0cy1jb250ZXh0W2RhdGEtYnMtdGhlbWU9XCJsaWdodFwiXSwgW2RhdGEtYnMtdGhlbWVdIC5vZHMtY2hhcnRzLWNvbnRleHRbZGF0YS1icy10aGVtZT1cImxpZ2h0XCJdICB7XHJcbiAgY29sb3Itc2NoZW1lOiBsaWdodDtcclxuICAtLWJzLWJsdWU6ICM0MTcwZDg7XHJcbiAgLS1icy1pbmRpZ286ICNhODg1ZDg7XHJcbiAgLS1icy1wdXJwbGU6ICNhODg1ZDg7XHJcbiAgLS1icy1waW5rOiAjZmZiNGU2O1xyXG4gIC0tYnMtcmVkOiAjY2QzYzE0O1xyXG4gIC0tYnMtb3JhbmdlOiAjZjE2ZTAwO1xyXG4gIC0tYnMteWVsbG93OiAjZmMwO1xyXG4gIC0tYnMtZ3JlZW46ICMyMjg3MjI7XHJcbiAgLS1icy10ZWFsOiAjNTBiZTg3O1xyXG4gIC0tYnMtY3lhbjogIzRiYjRlNjtcclxuICAtLWJzLWJsYWNrOiAjMDAwO1xyXG4gIC0tYnMtd2hpdGU6ICNmZmY7XHJcbiAgLS1icy1ncmF5OiAjOTk5O1xyXG4gIC0tYnMtZ3JheS1kYXJrOiAjNTk1OTU5O1xyXG4gIC0tYnMtZ3JheS0xMDA6ICNmYWZhZmE7XHJcbiAgLS1icy1ncmF5LTIwMDogI2Y2ZjZmNjtcclxuICAtLWJzLWdyYXktMzAwOiAjZWVlO1xyXG4gIC0tYnMtZ3JheS00MDA6ICNkZGQ7XHJcbiAgLS1icy1ncmF5LTUwMDogI2NjYztcclxuICAtLWJzLWdyYXktNjAwOiAjOTk5O1xyXG4gIC0tYnMtZ3JheS03MDA6ICM2NjY7XHJcbiAgLS1icy1ncmF5LTgwMDogIzU5NTk1OTtcclxuICAtLWJzLWdyYXktOTAwOiAjMzMzO1xyXG4gIC0tYnMtZ3JheS05NTA6ICMxNDE0MTQ7XHJcbiAgLS1icy1ib2R5LWNvbG9yOiAjMDAwO1xyXG4gIC0tYnMtYm9keS1jb2xvci1yZ2I6IDAsIDAsIDA7XHJcbiAgLS1icy1ib2R5LWJnOiAjZmZmO1xyXG4gIC0tYnMtYm9keS1iZy1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1icy1saW5rLWNvbG9yOiAjMDAwO1xyXG4gIC0tYnMtYm9yZGVyLXdpZHRoOiAwLjEyNXJlbTtcclxuICAtLWJzLWJvcmRlci1jb2xvcjogIzAwMDtcclxuICAtLWJzLWJvcmRlci1jb2xvci1zdWJ0bGU6ICNjY2M7XHJcblxyXG4gIC0tYnMtc2Vjb25kYXJ5LWNvbG9yOiAjNjY2O1xyXG4gIC0tYnMtc2Vjb25kYXJ5LWJnOiAjZWVlO1xyXG4gIC0tYnMtcHJpbWFyeTogI2YxNmUwMDtcclxuICAtLWJzLXNlY29uZGFyeTogIzAwMDtcclxuICAtLWJzLXN1Y2Nlc3M6ICMyMjg3MjI7XHJcbiAgLS1icy1pbmZvOiAjNDE3MGQ4O1xyXG4gIC0tYnMtd2FybmluZzogI2ZjMDtcclxuICAtLWJzLWRhbmdlcjogI2NkM2MxNDtcclxuICAtLWJzLWxpZ2h0OiAjY2NjO1xyXG4gIC0tYnMtZGFyazogIzAwMDtcclxuXHJcbiAgLS1icy13YXJuaW5nLXJnYjogMjU1LCAyMDQsIDA7XHJcbiAgLS1icy10ZXJ0aWFyeS1jb2xvci1yZ2I6IDIwNCwgMjA0LCAyMDQ7XHJcbiAgLS1icy10ZXJ0aWFyeS1iZzogI2ZhZmFmYTtcclxufVxyXG5cclxuW2RhdGEtYnMtdGhlbWU9XCJkYXJrXCJdIC5vZHMtY2hhcnRzLWNvbnRleHQsIC5vZHMtY2hhcnRzLWNvbnRleHRbZGF0YS1icy10aGVtZT1cImRhcmtcIl0sIFtkYXRhLWJzLXRoZW1lXSAub2RzLWNoYXJ0cy1jb250ZXh0W2RhdGEtYnMtdGhlbWU9XCJkYXJrXCJdIHtcclxuICBjb2xvci1zY2hlbWU6IGRhcms7XHJcbiAgLS1icy1ib2R5LWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYm9keS1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1icy1ib2R5LWJnOiAjMTQxNDE0O1xyXG4gIC0tYnMtYm9keS1iZy1yZ2I6IDIwLCAyMCwgMjA7XHJcbiAgLS1icy1saW5rLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZTogIzY2NjtcclxuXHJcbiAgLS1icy1zZWNvbmRhcnktY29sb3I6ICM5OTk7XHJcbiAgLS1icy1zZWNvbmRhcnktYmc6ICMzMzM7XHJcbiAgLS1icy1wcmltYXJ5OiAjZmY3OTAwO1xyXG4gIC0tYnMtc2Vjb25kYXJ5OiAjZmZmO1xyXG4gIC0tYnMtc3VjY2VzczogIzZjNjtcclxuICAtLWJzLWluZm86ICM2OWY7XHJcbiAgLS1icy13YXJuaW5nOiAjZmMwO1xyXG4gIC0tYnMtZGFuZ2VyOiAjZjY2O1xyXG4gIC0tYnMtbGlnaHQ6ICNjY2M7XHJcbiAgLS1icy1kYXJrOiAjMDAwO1xyXG5cclxuICAtLWJzLXdhcm5pbmctcmdiOiAyNTUsIDIwNCwgMDtcclxuICAtLWJzLXRlcnRpYXJ5LWNvbG9yLXJnYjogMTAyLCAxMDIsIDEwMjtcclxuICAtLWJzLXRlcnRpYXJ5LWJnOiAjMDAwO1xyXG59XHJcblxyXG5cclxuW2RhdGEtYnMtdGhlbWVdIC5vZHMtY2hhcnRzLWNvbnRleHQsIC5vZHMtY2hhcnRzLWNvbnRleHRbZGF0YS1icy10aGVtZV0ge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtYm9keS1iZyk7XHJcbn1cclxuXHJcblxyXG5bZGF0YS1icy10aGVtZV0gLm9kcy1jaGFydHMtY29udGV4dCBhLCAub2RzLWNoYXJ0cy1jb250ZXh0W2RhdGEtYnMtdGhlbWVdIGEge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWxpbmstY29sb3IpO1xyXG59XHJcbmA7XG4vKipcbiAqIEFkZGVkIGZvciBhbGwgdGhlbWVzXG4gKi9cbmNvbnN0IE5PTl9CT09TVEVENV9WQVJJQUJMRSA9IGBcclxuLm9kcy1jaGFydHMtY29udGV4dCwgW2RhdGEtYnMtdGhlbWU9XCJsaWdodFwiXSAub2RzLWNoYXJ0cy1jb250ZXh0LCAub2RzLWNoYXJ0cy1jb250ZXh0W2RhdGEtYnMtdGhlbWU9XCJsaWdodFwiXSB7XHJcbiAgLS1vZHMteWVsbG93LTEwMDogI2ZmZjZiNjtcclxuICAtLW9kcy15ZWxsb3ctMjAwOiAjZmZlNDViO1xyXG4gIC0tb2RzLXllbGxvdy0zMDA6ICNmZmQyMDA7XHJcbiAgLS1vZHMteWVsbG93LTQwMDogI2ZmYjQwMDtcclxuICAtLW9kcy15ZWxsb3ctNTAwOiAjYjk4ZjExO1xyXG4gIC0tb2RzLXllbGxvdy02MDA6ICM5ZDZlMDY7XHJcblxyXG4gIC0tb2RzLXllbGxvdzogdmFyKC0tb2RzLXllbGxvdy0zMDApO1xyXG5cclxuICAtLW9kcy1ibHVlLTEwMDogI2I1ZThmNztcclxuICAtLW9kcy1ibHVlLTIwMDogIzgwY2VlZjtcclxuICAtLW9kcy1ibHVlLTMwMDogIzRiYjRlNjtcclxuICAtLW9kcy1ibHVlLTQwMDogIzNlOWRkNjtcclxuICAtLW9kcy1ibHVlLTUwMDogIzIzN2VjQTtcclxuICAtLW9kcy1ibHVlLTYwMDogIzA4NWViZDtcclxuXHJcbiAgLS1vZHMtZ3JlZW4tMTAwOiAjQjhFQkQ2O1xyXG4gIC0tb2RzLWdyZWVuLTIwMDogIzg0RDVBRjtcclxuICAtLW9kcy1ncmVlbi0zMDA6ICM1MEJFODc7XHJcbiAgLS1vZHMtZ3JlZW4tNDAwOiAjMjdBOTcxO1xyXG4gIC0tb2RzLWdyZWVuLTUwMDogIzE5OEM1MTtcclxuICAtLW9kcy1ncmVlbi02MDA6ICMwQTZFMzE7XHJcblxyXG4gIC0tb2RzLXBpbmstMTAwOiAjRkZFOEY3O1xyXG4gIC0tb2RzLXBpbmstMjAwOiAjRkZDRUVGO1xyXG4gIC0tb2RzLXBpbmstMzAwOiAjRkZCNEU2O1xyXG4gIC0tb2RzLXBpbmstNDAwOiAjRkY4QUQ0O1xyXG4gIC0tb2RzLXBpbmstNTAwOiAjRDU3M0JCO1xyXG4gIC0tb2RzLXBpbmstNjAwOiAjQkM0RDlBO1xyXG5cclxuICAtLW9kcy1wdXJwbGUtMTAwOiAjRDlDMkYwO1xyXG4gIC0tb2RzLXB1cnBsZS0yMDA6ICNDMUE0RTQ7XHJcbiAgLS1vZHMtcHVycGxlLTMwMDogI0E4ODVEODtcclxuICAtLW9kcy1wdXJwbGUtNDAwOiAjOTM3M0JEO1xyXG4gIC0tb2RzLXB1cnBsZS01MDA6ICM2RTRBQTc7XHJcbiAgLS1vZHMtcHVycGxlLTYwMDogIzQ5MjE5MTtcclxuXHJcbiAgLS1vZHMteWVsbG93LTE6IHZhcigtLW9kcy15ZWxsb3ctNjAwKTtcclxuICAtLW9kcy15ZWxsb3ctMjogdmFyKC0tb2RzLXllbGxvdy01MDApO1xyXG4gIC0tb2RzLXllbGxvdy0zOiB2YXIoLS1vZHMteWVsbG93LTQwMCk7XHJcbiAgLS1vZHMteWVsbG93LTQ6IHZhcigtLW9kcy15ZWxsb3ctMzAwKTtcclxuICAtLW9kcy15ZWxsb3ctNTogdmFyKC0tb2RzLXllbGxvdy0yMDApO1xyXG4gIC0tb2RzLXllbGxvdy02OiB2YXIoLS1vZHMteWVsbG93LTEwMCk7XHJcblxyXG4gIC0tb2RzLWJsdWUtMTogdmFyKC0tb2RzLWJsdWUtNjAwKTtcclxuICAtLW9kcy1ibHVlLTI6IHZhcigtLW9kcy1ibHVlLTUwMCk7XHJcbiAgLS1vZHMtYmx1ZS0zOiB2YXIoLS1vZHMtYmx1ZS00MDApO1xyXG4gIC0tb2RzLWJsdWUtNDogdmFyKC0tb2RzLWJsdWUtMzAwKTtcclxuICAtLW9kcy1ibHVlLTU6IHZhcigtLW9kcy1ibHVlLTIwMCk7XHJcbiAgLS1vZHMtYmx1ZS02OiB2YXIoLS1vZHMtYmx1ZS0xMDApO1xyXG5cclxuICAtLW9kcy1ncmVlbi0xOiB2YXIoLS1vZHMtZ3JlZW4tNjAwKTtcclxuICAtLW9kcy1ncmVlbi0yOiB2YXIoLS1vZHMtZ3JlZW4tNTAwKTtcclxuICAtLW9kcy1ncmVlbi0zOiB2YXIoLS1vZHMtZ3JlZW4tNDAwKTtcclxuICAtLW9kcy1ncmVlbi00OiB2YXIoLS1vZHMtZ3JlZW4tMzAwKTtcclxuICAtLW9kcy1ncmVlbi01OiB2YXIoLS1vZHMtZ3JlZW4tMjAwKTtcclxuICAtLW9kcy1ncmVlbi02OiB2YXIoLS1vZHMtZ3JlZW4tMTAwKTtcclxuXHJcbiAgLS1vZHMtcGluay0xOiB2YXIoLS1vZHMtcGluay02MDApO1xyXG4gIC0tb2RzLXBpbmstMjogdmFyKC0tb2RzLXBpbmstNTAwKTtcclxuICAtLW9kcy1waW5rLTM6IHZhcigtLW9kcy1waW5rLTQwMCk7XHJcbiAgLS1vZHMtcGluay00OiB2YXIoLS1vZHMtcGluay0zMDApO1xyXG4gIC0tb2RzLXBpbmstNTogdmFyKC0tb2RzLXBpbmstMjAwKTtcclxuICAtLW9kcy1waW5rLTY6IHZhcigtLW9kcy1waW5rLTEwMCk7XHJcblxyXG4gIC0tb2RzLXB1cnBsZS0xOiB2YXIoLS1vZHMtcHVycGxlLTYwMCk7XHJcbiAgLS1vZHMtcHVycGxlLTI6IHZhcigtLW9kcy1wdXJwbGUtNTAwKTtcclxuICAtLW9kcy1wdXJwbGUtMzogdmFyKC0tb2RzLXB1cnBsZS00MDApO1xyXG4gIC0tb2RzLXB1cnBsZS00OiB2YXIoLS1vZHMtcHVycGxlLTMwMCk7XHJcbiAgLS1vZHMtcHVycGxlLTU6IHZhcigtLW9kcy1wdXJwbGUtMjAwKTtcclxuICAtLW9kcy1wdXJwbGUtNjogdmFyKC0tb2RzLXB1cnBsZS0xMDApO1xyXG5cclxuICAtLW9kcy1jYXRlZ29yaWNhbC0xOiB2YXIoLS1vZHMtYmx1ZS02MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTI6IHZhcigtLW9kcy1ncmVlbi00MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTM6IHZhcigtLW9kcy1waW5rLTYwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtNDogdmFyKC0tb2RzLXB1cnBsZS00MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTU6IHZhcigtLW9kcy15ZWxsb3ctNjAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC02OiB2YXIoLS1icy1ncmF5LTkwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtNzogdmFyKC0tb2RzLWJsdWUtNDAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC04OiB2YXIoLS1vZHMtZ3JlZW4tNjAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC05OiB2YXIoLS1vZHMtcGluay01MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTEwOiB2YXIoLS1vZHMtcHVycGxlLTYwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtMTE6IHZhcigtLW9kcy15ZWxsb3ctNTAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC0xMjogdmFyKC0tYnMtZ3JheS03MDApO1xyXG5cclxuICAtLW9kcy1kZWZhdWx0LTE6IHZhcigtLW9kcy1ibHVlLTYwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC0yOiB2YXIoLS1vZHMtZ3JlZW4tNjAwKTtcclxuICAtLW9kcy1kZWZhdWx0LTM6IHZhcigtLW9kcy1waW5rLTYwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC00OiB2YXIoLS1vZHMtcHVycGxlLTYwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC01OiB2YXIoLS1vZHMteWVsbG93LTUwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC02OiB2YXIoLS1icy1ncmF5LTcwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC03OiB2YXIoLS1vZHMtYmx1ZS00MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtODogdmFyKC0tb2RzLWdyZWVuLTQwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC05OiB2YXIoLS1vZHMtcGluay01MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtMTA6IHZhcigtLW9kcy1wdXJwbGUtNDAwKTtcclxuICAtLW9kcy1kZWZhdWx0LTExOiB2YXIoLS1vZHMteWVsbG93LTYwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC0xMjogdmFyKC0tYnMtZ3JheS05MDApO1xyXG5cclxuICAtLW9kcy1jeWFuLWxpZ2h0OiB2YXIoLS1vZHMtYmx1ZS0xMDApO1xyXG4gIC0tb2RzLXRlYWwtbGlnaHQ6IHZhcigtLW9kcy1ncmVlbi0xMDApO1xyXG4gIC0tb2RzLXBpbmstbGlnaHQ6IHZhcigtLW9kcy1waW5rLTEwMCk7XHJcbiAgLS1vZHMtaW5kaWdvLWxpZ2h0OiB2YXIoLS1vZHMtcHVycGxlLTEwMCk7XHJcbiAgLS1vZHMteWVsbG93LWxpZ2h0OiB2YXIoLS1vZHMteWVsbG93LTEwMCk7XHJcblxyXG4gIC0tb2RzLWN5YW4tZGFyazogdmFyKC0tb2RzLWJsdWUtNjAwKTtcclxuICAtLW9kcy10ZWFsLWRhcms6IHZhcigtLW9kcy1ncmVlbi02MDApO1xyXG4gIC0tb2RzLXBpbmstZGFyazogdmFyKC0tb2RzLXBpbmstNDAwKTtcclxuICAtLW9kcy1pbmRpZ28tZGFyazogdmFyKC0tb2RzLXB1cnBsZS02MDApO1xyXG4gIC0tb2RzLXllbGxvdy1kYXJrOiB2YXIoLS1vZHMteWVsbG93LTQwMCk7XHJcblxyXG4gIC0tb2RzLWZ1bmN0aW9uYWwtMTogdmFyKC0tYnMtcHJpbWFyeSk7XHJcbiAgLS1vZHMtZnVuY3Rpb25hbC0yOiB2YXIoLS1icy1ncmF5LTMwMCk7XHJcbiAgLS1vZHMtZnVuY3Rpb25hbC0zOiB2YXIoLS1icy1zdWNjZXNzKTtcclxuICAtLW9kcy1mdW5jdGlvbmFsLTQ6IHZhcigtLWJzLXdhcm5pbmcpO1xyXG4gIC0tb2RzLWZ1bmN0aW9uYWwtNTogdmFyKC0tYnMtZGFuZ2VyKTtcclxuICAtLW9kcy1mdW5jdGlvbmFsLTY6IHZhcigtLWJzLWluZm8pO1xyXG5cclxufVxyXG5cclxuW2RhdGEtYnMtdGhlbWU9XCJkYXJrXCJdIC5vZHMtY2hhcnRzLWNvbnRleHQsIC5vZHMtY2hhcnRzLWNvbnRleHRbZGF0YS1icy10aGVtZT1cImRhcmtcIl0ge1xyXG4gIC0tb2RzLXllbGxvdy0xOiB2YXIoLS1vZHMteWVsbG93LTEwMCk7XHJcbiAgLS1vZHMteWVsbG93LTI6IHZhcigtLW9kcy15ZWxsb3ctMjAwKTtcclxuICAtLW9kcy15ZWxsb3ctMzogdmFyKC0tb2RzLXllbGxvdy0zMDApO1xyXG4gIC0tb2RzLXllbGxvdy00OiB2YXIoLS1vZHMteWVsbG93LTQwMCk7XHJcbiAgLS1vZHMteWVsbG93LTU6IHZhcigtLW9kcy15ZWxsb3ctNTAwKTtcclxuICAtLW9kcy15ZWxsb3ctNjogdmFyKC0tb2RzLXllbGxvdy02MDApO1xyXG5cclxuICAtLW9kcy1ibHVlLTE6IHZhcigtLW9kcy1ibHVlLTEwMCk7XHJcbiAgLS1vZHMtYmx1ZS0yOiB2YXIoLS1vZHMtYmx1ZS0yMDApO1xyXG4gIC0tb2RzLWJsdWUtMzogdmFyKC0tb2RzLWJsdWUtMzAwKTtcclxuICAtLW9kcy1ibHVlLTQ6IHZhcigtLW9kcy1ibHVlLTQwMCk7XHJcbiAgLS1vZHMtYmx1ZS01OiB2YXIoLS1vZHMtYmx1ZS01MDApO1xyXG4gIC0tb2RzLWJsdWUtNjogdmFyKC0tb2RzLWJsdWUtNjAwKTtcclxuXHJcbiAgLS1vZHMtZ3JlZW4tMTogdmFyKC0tb2RzLWdyZWVuLTEwMCk7XHJcbiAgLS1vZHMtZ3JlZW4tMjogdmFyKC0tb2RzLWdyZWVuLTIwMCk7XHJcbiAgLS1vZHMtZ3JlZW4tMzogdmFyKC0tb2RzLWdyZWVuLTMwMCk7XHJcbiAgLS1vZHMtZ3JlZW4tNDogdmFyKC0tb2RzLWdyZWVuLTQwMCk7XHJcbiAgLS1vZHMtZ3JlZW4tNTogdmFyKC0tb2RzLWdyZWVuLTUwMCk7XHJcbiAgLS1vZHMtZ3JlZW4tNjogdmFyKC0tb2RzLWdyZWVuLTYwMCk7XHJcblxyXG4gIC0tb2RzLXBpbmstMTogdmFyKC0tb2RzLXBpbmstMTAwKTtcclxuICAtLW9kcy1waW5rLTI6IHZhcigtLW9kcy1waW5rLTIwMCk7XHJcbiAgLS1vZHMtcGluay0zOiB2YXIoLS1vZHMtcGluay0zMDApO1xyXG4gIC0tb2RzLXBpbmstNDogdmFyKC0tb2RzLXBpbmstNDAwKTtcclxuICAtLW9kcy1waW5rLTU6IHZhcigtLW9kcy1waW5rLTUwMCk7XHJcbiAgLS1vZHMtcGluay02OiB2YXIoLS1vZHMtcGluay02MDApO1xyXG5cclxuICAtLW9kcy1wdXJwbGUtMTogdmFyKC0tb2RzLXB1cnBsZS0xMDApO1xyXG4gIC0tb2RzLXB1cnBsZS0yOiB2YXIoLS1vZHMtcHVycGxlLTIwMCk7XHJcbiAgLS1vZHMtcHVycGxlLTM6IHZhcigtLW9kcy1wdXJwbGUtMzAwKTtcclxuICAtLW9kcy1wdXJwbGUtNDogdmFyKC0tb2RzLXB1cnBsZS00MDApO1xyXG4gIC0tb2RzLXB1cnBsZS01OiB2YXIoLS1vZHMtcHVycGxlLTUwMCk7XHJcbiAgLS1vZHMtcHVycGxlLTY6IHZhcigtLW9kcy1wdXJwbGUtNjAwKTtcclxuXHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtMTogdmFyKC0tb2RzLWJsdWUtNTAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC0yOiB2YXIoLS1vZHMtZ3JlZW4tMzAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC0zOiB2YXIoLS1vZHMtcGluay00MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTQ6IHZhcigtLW9kcy1wdXJwbGUtMzAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC01OiB2YXIoLS1vZHMteWVsbG93LTQwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtNjogdmFyKC0tYnMtZ3JheS02MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTc6IHZhcigtLW9kcy1ibHVlLTMwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtODogdmFyKC0tb2RzLWdyZWVuLTUwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtOTogdmFyKC0tb2RzLXBpbmstMzAwKTtcclxuICAtLW9kcy1jYXRlZ29yaWNhbC0xMDogdmFyKC0tb2RzLXB1cnBsZS01MDApO1xyXG4gIC0tb2RzLWNhdGVnb3JpY2FsLTExOiB2YXIoLS1vZHMteWVsbG93LTMwMCk7XHJcbiAgLS1vZHMtY2F0ZWdvcmljYWwtMTI6IHZhcigtLWJzLWdyYXktNTAwKTtcclxuXHJcbiAgLS1vZHMtZGVmYXVsdC0xOiB2YXIoLS1vZHMtYmx1ZS01MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtMjogdmFyKC0tb2RzLWdyZWVuLTUwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC0zOiB2YXIoLS1vZHMtcGluay00MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtNDogdmFyKC0tb2RzLXB1cnBsZS01MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtNTogdmFyKC0tb2RzLXllbGxvdy0zMDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtNjogdmFyKC0tYnMtZ3JheS01MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtNzogdmFyKC0tb2RzLWJsdWUtMzAwKTtcclxuICAtLW9kcy1kZWZhdWx0LTg6IHZhcigtLW9kcy1ncmVlbi0zMDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtOTogdmFyKC0tb2RzLXBpbmstMzAwKTtcclxuICAtLW9kcy1kZWZhdWx0LTEwOiB2YXIoLS1vZHMtcHVycGxlLTMwMCk7XHJcbiAgLS1vZHMtZGVmYXVsdC0xMTogdmFyKC0tb2RzLXllbGxvdy00MDApO1xyXG4gIC0tb2RzLWRlZmF1bHQtMTI6IHZhcigtLWJzLWdyYXktNjAwKTtcclxuXHJcbiAgLS1vZHMtY3lhbi1saWdodDogdmFyKC0tb2RzLWJsdWUtNjAwKTtcclxuICAtLW9kcy10ZWFsLWxpZ2h0OiB2YXIoLS1vZHMtZ3JlZW4tNjAwKTtcclxuICAtLW9kcy1waW5rLWxpZ2h0OiB2YXIoLS1vZHMtcGluay00MDApO1xyXG4gIC0tb2RzLWluZGlnby1saWdodDogdmFyKC0tb2RzLXB1cnBsZS02MDApO1xyXG4gIC0tb2RzLXllbGxvdy1saWdodDogdmFyKC0tb2RzLXllbGxvdy00MDApO1xyXG5cclxuICAtLW9kcy1jeWFuLWRhcms6IHZhcigtLW9kcy1ibHVlLTEwMCk7XHJcbiAgLS1vZHMtdGVhbC1kYXJrOiB2YXIoLS1vZHMtZ3JlZW4tMTAwKTtcclxuICAtLW9kcy1waW5rLWRhcms6IHZhcigtLW9kcy1waW5rLTEwMCk7XHJcbiAgLS1vZHMtaW5kaWdvLWRhcms6IHZhcigtLW9kcy1wdXJwbGUtMTAwKTtcclxuICAtLW9kcy15ZWxsb3ctZGFyazogdmFyKC0tb2RzLXllbGxvdy0xMDApO1xyXG5cclxuICAtLW9kcy1mdW5jdGlvbmFsLTE6IHZhcigtLWJzLXByaW1hcnkpO1xyXG4gIC0tb2RzLWZ1bmN0aW9uYWwtMjogdmFyKC0tYnMtZ3JheS03MDApO1xyXG4gIC0tb2RzLWZ1bmN0aW9uYWwtMzogdmFyKC0tYnMtc3VjY2Vzcyk7XHJcbiAgLS1vZHMtZnVuY3Rpb25hbC00OiB2YXIoLS1icy13YXJuaW5nKTtcclxuICAtLW9kcy1mdW5jdGlvbmFsLTU6IHZhcigtLWJzLWRhbmdlcik7XHJcbiAgLS1vZHMtZnVuY3Rpb25hbC02OiB2YXIoLS1icy1pbmZvKTtcclxufVxyXG5gO1xuZXhwb3J0cy5PRFNfQ0hBUlRTX0NTU19WQVJJQUJMRVMgPSB7XG4gICAgQk9PU1RFRDQ6IGBcclxuICAke0JPT1NURUQ1X1ZBUklBQkxFfVxyXG4gICR7Tk9OX0JPT1NURUQ1X1ZBUklBQkxFfVxyXG4gICR7X291ZHNfY29sb3JzX2Nzc192YXJpYWJsZXNfMS5PRFNfQ0hBUlRTX0NPTlRFWFR9XHJcbiAgYCxcbiAgICBCT09TVEVENTogYFxyXG4gICR7Tk9OX0JPT1NURUQ1X1ZBUklBQkxFfVxyXG4gICR7X291ZHNfY29sb3JzX2Nzc192YXJpYWJsZXNfMS5PRFNfQ0hBUlRTX0NPTlRFWFR9XHJcbiAgYCxcbiAgICBDVVNUT006IGBcclxuICAke0JPT1NURUQ1X1ZBUklBQkxFfVxyXG4gICR7Tk9OX0JPT1NURUQ1X1ZBUklBQkxFfVxyXG4gICR7X291ZHNfY29sb3JzX2Nzc192YXJpYWJsZXNfMS5PRFNfQ0hBUlRTX0NPTlRFWFR9XHJcbiAgYCxcbiAgICBOT05FOiBgXHJcbiAgJHtCT09TVEVENV9WQVJJQUJMRX1cclxuICAke05PTl9CT09TVEVENV9WQVJJQUJMRX1cclxuICAke19vdWRzX2NvbG9yc19jc3NfdmFyaWFibGVzXzEuT0RTX0NIQVJUU19DT05URVhUfVxyXG4gIGAsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ09NTU9OX0xJTkVfU1RZTEVfQlJPS0VOID0gdm9pZCAwO1xuZXhwb3J0cy5DT01NT05fTElORV9TVFlMRV9CUk9LRU4gPSB7XG4gICAgbGluZToge1xuICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICB9LFxuICAgICAgICBzeW1ib2xTaXplOiAwLFxuICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICBzbW9vdGg6IGZhbHNlLFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ09NTU9OX0xJTkVfU1RZTEVfU01PT1RIID0gdm9pZCAwO1xuZXhwb3J0cy5DT01NT05fTElORV9TVFlMRV9TTU9PVEggPSB7XG4gICAgbGluZToge1xuICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICB9LFxuICAgICAgICBzeW1ib2xTaXplOiAwLFxuICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DT01NT05fTElORV9TVFlMRV9QT0lOVFMgPSB2b2lkIDA7XG5leHBvcnRzLkNPTU1PTl9MSU5FX1NUWUxFX1BPSU5UUyA9IHtcbiAgICBsaW5lOiB7XG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHN5bWJvbFNpemU6ICcxMCcsXG4gICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgIHNtb290aDogZmFsc2UsXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYWluQXhpc1R5cGUgPSB2b2lkIDA7XG5leHBvcnRzLmlzTWFpbkF4aXMgPSBpc01haW5BeGlzO1xudmFyIE1haW5BeGlzVHlwZTtcbihmdW5jdGlvbiAoTWFpbkF4aXNUeXBlKSB7XG4gICAgTWFpbkF4aXNUeXBlW1wiY2F0ZWdvcnlcIl0gPSBcImNhdGVnb3J5XCI7XG4gICAgTWFpbkF4aXNUeXBlW1widGltZVwiXSA9IFwidGltZVwiO1xufSkoTWFpbkF4aXNUeXBlIHx8IChleHBvcnRzLk1haW5BeGlzVHlwZSA9IE1haW5BeGlzVHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBpc01haW5BeGlzKGF4aXMpIHtcbiAgICByZXR1cm4gYXhpcyAmJiAoYXhpcy5kYXRhIHx8IChheGlzLnR5cGUgJiYgT2JqZWN0LnZhbHVlcyhNYWluQXhpc1R5cGUpLmluY2x1ZGVzKGF4aXMudHlwZSkpKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9EU0NoYXJ0c0Nzc0hlbHBlciA9IHZvaWQgMDtcbmNvbnN0IGNvbmRpdGlvbmFsX2Nsb25lX2RlZXBfb2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvY29uZGl0aW9uYWwtY2xvbmUtZGVlcC1vYmplY3RcIik7XG5jb25zdCBtZXJnZV9vYmplY3RzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvbWVyZ2Utb2JqZWN0c1wiKTtcbmNvbnN0IGNvbG9yc19jc3NfdmFyaWFibGVzXzEgPSByZXF1aXJlKFwiLi4vY29sb3JzL2NvbG9ycy1jc3MtdmFyaWFibGVzXCIpO1xuY29uc3Qgb2RzX2NoYXJ0X3RoZW1lXzEgPSByZXF1aXJlKFwiLi4vb2RzLWNoYXJ0LXRoZW1lXCIpO1xuY2xhc3MgT0RTQ2hhcnRzQ3NzSGVscGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NTZWxlY3RvciwgbW9kZSwgY3NzVGhlbWVOYW1lKSB7XG4gICAgICAgIHRoaXMuY3NzU2VsZWN0b3IgPSBjc3NTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5jc3NUaGVtZU5hbWUgPSBjc3NUaGVtZU5hbWU7XG4gICAgICAgIHRoaXMuX2NvbXB1dGVkU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2NvbXB1dGVkU3R5bGVJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNzc1ZhcnNNYXBwaW5nID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGJ1aWxkIGEgQ1NTU3R5bGVEZWNsYXJhdGlvbiBidWlsZCBmcm9tIGEgRE9NIGVsZW1lbnQgaW5zZXJ0IGluIHRoZSBjdXJyZW50IGNoYXJ0cyBob2xkZXIuXG4gICAgICogSXQgaXMgdXNlZCB0byBjYWxjdWxhdGUgcmVhbCB0aW1lIHZhbHVlcyBmb3IgdGhlIGNzcyB2YXIuXG4gICAgICovXG4gICAgZ2V0IGNvbXB1dGVkU3R5bGUoKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX2NvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNzc1NlbGVjdG9yICsgJz4ub2RzLWNoYXJ0cy1zdHlsZS0nICsgKHRoaXMubW9kZSA/IHRoaXMubW9kZSA6IG9kc19jaGFydF90aGVtZV8xLk9EU0NoYXJ0c01vZGUuREVGQVVMVCkpO1xuICAgICAgICAgICAgICAgIGlmICghY29udGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9ICh0aGlzLmNzc1NlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNzc1NlbGVjdG9yKSA6IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgJiYgdGhpcy5tb2RlICE9PSBvZHNfY2hhcnRfdGhlbWVfMS5PRFNDaGFydHNNb2RlLkRFRkFVTFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGhlbWUnLCB0aGlzLm1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb2RzLWNoYXJ0cy1jb250ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvZHMtY2hhcnRzLXN0eWxlLScgKyAodGhpcy5tb2RlID8gdGhpcy5tb2RlIDogb2RzX2NoYXJ0X3RoZW1lXzEuT0RTQ2hhcnRzTW9kZS5ERUZBVUxUKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21FbGVtZW50LmFwcGVuZChjb250ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY29tcHV0ZWRTdHlsZSA9IHRoaXMuX2NvbXB1dGVkU3R5bGUgPyB0aGlzLl9jb21wdXRlZFN0eWxlIDogbnVsbDtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY29tcHV0ZWRTdHlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBidWlsZCBjb21wdXRlZCBzdHlsZSBmb3IgY2hhcnQgY3NzIGNvbnRleHQnLCB0aGlzLmNzc1NlbGVjdG9yLCB0aGlzLmNzc1NlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZWRTdHlsZSA/IHRoaXMuX2NvbXB1dGVkU3R5bGUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXQgRE9NIGVsZW1udHMgZm9yIHN0eWxlLiBBZGQgYW55IHNwZWNpZmljIHN0eWxlIGZvciB0aGUgY3VycmVudCB0aGVtZS5cbiAgICAgKiBSZWdpc3RlciBhIGNvbXB1dGVkIHN0eWxlIHdpbGwgYmUgaW5pdGlhbGlzZWQuXG4gICAgICogaWYgYGluaXRDb21wdXRlZFN0eWxlKClgIHJldHVybiB0cnVlLCBgcmVtb3ZlQ29tcHV0ZWRTdHlsZSgpYCBtdXN0IGJlIGNhbGxlZGBhZnRlciBjdXJyZW50IHRyZWF0bWVudCBpcyBkb25lLlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHN0eWxlIHdhcyBub3QgaW5pdGlhbGlzZWQgaW4gYSBwYXJlbnQgYmxvY2sgd2hpY2ggbWVhbnMgYHJlbW92ZUNvbXB1dGVkU3R5bGUoKWAgbXVzdCBiZSBjYWxsZWRgYWZ0ZXIgY3VycmVudCB0cmVhdG1lbnQgaXMgZG9uZS5cbiAgICAgKi9cbiAgICBpbml0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuX2NvbXB1dGVkU3R5bGVJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2RzLWNoYXJ0cy1zdHlsZS0nICsgdGhpcy5jc3NUaGVtZU5hbWUpICYmIGNvbG9yc19jc3NfdmFyaWFibGVzXzEuT0RTX0NIQVJUU19DU1NfVkFSSUFCTEVTW3RoaXMuY3NzVGhlbWVOYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNvbG9yc19jc3NfdmFyaWFibGVzXzEuT0RTX0NIQVJUU19DU1NfVkFSSUFCTEVTW3RoaXMuY3NzVGhlbWVOYW1lXTtcbiAgICAgICAgICAgICAgICBzdHlsZS5pZCA9ICdvZHMtY2hhcnRzLXN0eWxlLScgKyB0aGlzLmNzc1RoZW1lTmFtZTtcbiAgICAgICAgICAgICAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY29tcHV0ZWRTdHlsZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWZ0ZXIgcmVwbGFjaW5nIGFsbCB0aGUgY3NzIHZhciBvZiB1c2VkIG9iamVjdHMgYnkgdGhlaXIgdmFsdWUgY2FsY3VsYXRlZCBpbiB0aGUgRE9NLFxuICAgICAqIHJlbW92ZSB0aGUgdXNlZCB0ZW1wb3JheSBET00gZWxlbWVudC5cbiAgICAgKiBgcmVtb3ZlQ29tcHV0ZWRTdHlsZSgpYCBtdXN0IGJlIGNhbGxlZCBpZiBhbmQgb25seSBpZiB0aGUgcHJldmlvdXMgYGluaXRDb21wdXRlZFN0eWxlKClgIGNhbGwgcmV0dXJucyB0cnVlLlxuICAgICAqL1xuICAgIHJlbW92ZUNvbXB1dGVkU3R5bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNzc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jc3NTZWxlY3RvciArICc+Lm9kcy1jaGFydHMtc3R5bGUtJyArICh0aGlzLm1vZGUgPyB0aGlzLm1vZGUgOiBvZHNfY2hhcnRfdGhlbWVfMS5PRFNDaGFydHNNb2RlLkRFRkFVTFQpKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbXB1dGVkU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2NvbXB1dGVkU3R5bGVJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnaXZlIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9mIGEgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gbmFtZSA6IHRoZSBwcm9wZXJ0eSBuYW1lXG4gICAgICogQHJldHVybnMgdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkgaW4gdGhlIHN0eWxlIGNvbXB1dGVkIGZyb20gdGhlIERPTVxuICAgICAqL1xuICAgIGdldFByb3BlcnR5VmFsdWUobmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29tcHV0ZWRTdHlsZSA/IHRoaXMuY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIDogJyc7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgYSBjc3MgdmFyIGJ5IGl0IHZhbHVlXG4gICAgICogQHBhcmFtIGNzcyB0aGUgc3RyaW5nIHRvIGJlIGFuYWx5c2VkXG4gICAgICogQHJldHVybnMgdGhlIHVwZGF0ZWQgdmFsdWVcbiAgICAgKi9cbiAgICByZXBsYWNlT25lQ3NzVmFyKGNzcykge1xuICAgICAgICBsZXQgcmV0dXJuZWRWYWx1ZSA9IGNzcztcbiAgICAgICAgaWYgKHRoaXMuY3NzU2VsZWN0b3IgJiYgJ3N0cmluZycgPT09IHR5cGVvZiByZXR1cm5lZFZhbHVlICYmICEhdGhpcy5jb21wdXRlZFN0eWxlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmdldENzc1Zhck1hdGNoKHJldHVybmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZm91bmRWYXIgb2YgbWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZm91bmRWYXIgaW4gdGhpcy5jc3NWYXJzTWFwcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJQYXJ0c1JleCA9IC92YXJcXCggPyhbXiwgXSspID8sID8oW14gXSspID9cXCkvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhclBhcnRzID0gZm91bmRWYXIubWF0Y2godmFyUGFydHNSZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJQYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJWYWx1ZSA9IHRoaXMuZ2V0UHJvcGVydHlWYWx1ZSh2YXJQYXJ0c1sxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ21pc3NpbmcgY3NzIHZhciAnLCBmb3VuZFZhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3NWYXJzTWFwcGluZ1tmb3VuZFZhcl0gPSB2YXJWYWx1ZSA/IHZhclZhbHVlIDogdmFyUGFydHNbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJOYW1lUmV4ID0gL3ZhclxcKCA/KC4rKSA/XFwpLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyTmFtZSA9IGZvdW5kVmFyLm1hdGNoKHZhck5hbWVSZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyVmFsdWUgPSB0aGlzLmdldFByb3BlcnR5VmFsdWUodmFyTmFtZVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzc1ZhcnNNYXBwaW5nW2ZvdW5kVmFyXSA9IHZhclZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWlzc2luZyBjc3MgdmFyICcsIGZvdW5kVmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzc1ZhcnNNYXBwaW5nW2ZvdW5kVmFyXSA9IGZvdW5kVmFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWlzc2luZyBjc3MgdmFyICcsIGZvdW5kVmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzVmFyc01hcHBpbmdbZm91bmRWYXJdID0gZm91bmRWYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRWYXIgaW4gdGhpcy5jc3NWYXJzTWFwcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkVmFsdWUgPSByZXR1cm5lZFZhbHVlLnJlcGxhY2UoZm91bmRWYXIsIHRoaXMuY3NzVmFyc01hcHBpbmdbZm91bmRWYXJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybmVkVmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJlcGxhY2UgYW55IGNzcyB2YXIgcmVmZXJlbmNlIGJ5IGl0cyB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdWJUcmVlQ29uZmlnOiBzdWJUcmVlIGluIHdoaWNoIGNzcyB2YXIgbXVzdCBiZSByZXBsYWNlZCBieSB0aGVpciB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHRoZSBzdWJUcmVlQ29uZmlnIHVwZGF0ZWRcbiAgICAgKi9cbiAgICByZXBsYWNlUmVjdXJzaXZlbHlDc3NWYXJzKHN1YlRyZWVDb25maWcpIHtcbiAgICAgICAgdmFyIG5ld0NvbmZpZyA9IHN1YlRyZWVDb25maWc7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld0NvbmZpZykpIHtcbiAgICAgICAgICAgIGlmICgoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyQXJyYXkpKG5ld0NvbmZpZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuZXdDb25maWdba2V5XS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgwLCBtZXJnZV9vYmplY3RzXzEuaXNWYXJPYmplY3QpKG5ld0NvbmZpZ1trZXldW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbmZpZ1trZXldW2luZGV4XSA9IHRoaXMucmVwbGFjZVJlY3Vyc2l2ZWx5Q3NzVmFycyhuZXdDb25maWdba2V5XVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgbmV3Q29uZmlnW2tleV1baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb25maWdba2V5XVtpbmRleF0gPSB0aGlzLnJlcGxhY2VPbmVDc3NWYXIobmV3Q29uZmlnW2tleV1baW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCgwLCBtZXJnZV9vYmplY3RzXzEuaXNWYXJPYmplY3QpKG5ld0NvbmZpZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG5ld0NvbmZpZ1trZXldID0gdGhpcy5yZXBsYWNlUmVjdXJzaXZlbHlDc3NWYXJzKG5ld0NvbmZpZ1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgbmV3Q29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdDb25maWdba2V5XSA9IHRoaXMucmVwbGFjZU9uZUNzc1ZhcihuZXdDb25maWdba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0NvbmZpZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hdGNoZXMgb2YgYSBjc3MgdmFyIGluIHRoZSBnaXZlbiBzdHJpbmdcbiAgICAgKiBAcGFyYW0gdmFsdWUgOiBzdHJpbmcgaW4gd2hpYyBsb29raW5nIGZvciBpbiBjc3MgdmFyXG4gICAgICogQHJldHVybnMgOiB0aGUgcmVndWxhciBleHByZXNpb24gbWF0Y2hlc1xuICAgICAqL1xuICAgIGdldENzc1Zhck1hdGNoKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL3ZhclxcKChbXixdKiksPyguKilcXCkvZztcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKHJlZ2V4KTtcbiAgICB9XG4gICAgY2hhbmdlVGhlbWVNb2RlKG1vZGUpIHtcbiAgICAgICAgdGhpcy5jc3NWYXJzTWFwcGluZyA9IHt9O1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGFueSBjc3MgdmFyIHJlZmVyZW5jZSAobGlrZSBgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSlgKSBieSBpdHMgdmFsdWUuXG4gICAgICogQHBhcmFtIHRoZW1lQ29uZmlndXJhdGlvbiA6IG9iamVjdCBjb250YWluaW5nIHNvbWUgY3NzIHZhciBzdHJpbmcgcmVmZXJuY2VcbiAgICAgKiBAcmV0dXJucyA6IHRoZSB0aGVtZUNvbmdpZ3VyYXRpb24gdXBkYXRlZFxuICAgICAqL1xuICAgIHJlcGxhY2VBbGxDc3NWYXJzKHRoZW1lQ29uZmlndXJhdGlvbikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhlbWVDb25maWd1cmF0aW9uO1xuICAgICAgICBjb25zdCBpbml0U3R5bGVOb3RZZXREb25lID0gdGhpcy5pbml0Q29tcHV0ZWRTdHlsZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5jb21wdXRlZFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5yZXBsYWNlUmVjdXJzaXZlbHlDc3NWYXJzKHRoZW1lQ29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaW5pdFN0eWxlTm90WWV0RG9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcHV0ZWRTdHlsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2UgYSBjb3B5IG9mIGFueSBvYmplY3QgcGFydHMgdGhhdCBjb250YWlucyBjc3MgdmFyIHJlZmVyZW5jZSAobGlrZSBgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSlgKVxuICAgICAqIGFuZCByZXBsYWNlIHRob3NlIGNzcyB2YXJzIGJ5IHRoZWlyIHZhbHVlLlxuICAgICAqIEBwYXJhbSBjaGFydERhdGEgOiBvYmplY3QgY29udGFpbmluZyBzb21lIGNzcyB2YXIgc3RyaW5nIHJlZmVyZW5jZVxuICAgICAqIEByZXR1cm5zIHRoZSBuZXcgb2JqZWN0IHBhcnRpYWxseSBjbG9uZVxuICAgICAqL1xuICAgIGNsb25lQW5kUmVwbGFjZUFsbENzc1ZhcnMoY2hhcnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGluaXRTdHlsZU5vdFlldERvbmUgPSB0aGlzLmluaXRDb21wdXRlZFN0eWxlKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsQ3NzVmFycygoMCwgY29uZGl0aW9uYWxfY2xvbmVfZGVlcF9vYmplY3RfMS5jb25kaXRpb25hbENsb25lRGVlcE9iamVjdCkoY2hhcnREYXRhLCAodmFsdWUpID0+ICEhdGhpcy5nZXRDc3NWYXJNYXRjaCh2YWx1ZSkpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChpbml0U3R5bGVOb3RZZXREb25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDb21wdXRlZFN0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c0Nzc0hlbHBlciA9IE9EU0NoYXJ0c0Nzc0hlbHBlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9EU0NoYXJ0c0NTU1RoZW1lcyA9IGV4cG9ydHMuT0RTQ2hhcnRzQ1NTVGhlbWVEZWZpbml0aW9uID0gZXhwb3J0cy5PRFNDaGFydHNDU1NQb3BvdmVyRGVmaW5pdGlvbiA9IGV4cG9ydHMuT0RTQ2hhcnRzQ1NTTGVnZW5kc0RlZmluaXRpb24gPSBleHBvcnRzLk9EU0NoYXJ0c0l0ZW1Hcm91cENTU0RlZmluaXRpb24gPSBleHBvcnRzLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uID0gZXhwb3J0cy5PRFNDaGFydHNDU1NUaGVtZXNOYW1lcyA9IHZvaWQgMDtcbnZhciBPRFNDaGFydHNDU1NUaGVtZXNOYW1lcztcbihmdW5jdGlvbiAoT0RTQ2hhcnRzQ1NTVGhlbWVzTmFtZXMpIHtcbiAgICBPRFNDaGFydHNDU1NUaGVtZXNOYW1lc1tcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbiAgICBPRFNDaGFydHNDU1NUaGVtZXNOYW1lc1tcIkJPT1NURUQ0XCJdID0gXCJCT09TVEVENFwiO1xuICAgIE9EU0NoYXJ0c0NTU1RoZW1lc05hbWVzW1wiQk9PU1RFRDVcIl0gPSBcIkJPT1NURUQ1XCI7XG4gICAgT0RTQ2hhcnRzQ1NTVGhlbWVzTmFtZXNbXCJDVVNUT01cIl0gPSBcIkNVU1RPTVwiO1xufSkoT0RTQ2hhcnRzQ1NTVGhlbWVzTmFtZXMgfHwgKGV4cG9ydHMuT0RTQ2hhcnRzQ1NTVGhlbWVzTmFtZXMgPSBPRFNDaGFydHNDU1NUaGVtZXNOYW1lcyA9IHt9KSk7XG4vKipcbiAqIE9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uIGRlZmluZXMgdGhlIGNsYXNzZXMgb3Igc3R5bGVzIHRvIGJlIGFkZGVkIG9uIGdlbmVyYXRlZCBIVE1MIGVsZW1lbnRcbiAqL1xuY2xhc3MgT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24ge1xuICAgIHN0YXRpYyBnZXRDbGFzc2VzKGRlZikge1xuICAgICAgICByZXR1cm4gZGVmICYmIGRlZi5jbGFzc2VzID8gZGVmLmNsYXNzZXMuam9pbignICcpIDogJyc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdHlsZXMoZGVmKSB7XG4gICAgICAgIHJldHVybiBkZWYgJiYgZGVmLnN0eWxlc1xuICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhkZWYuc3R5bGVzKVxuICAgICAgICAgICAgICAgIC5tYXAoKHByb3BlcnR5KSA9PiBgJHtwcm9wZXJ0eX06ICR7ZGVmLnN0eWxlc1twcm9wZXJ0eV19YClcbiAgICAgICAgICAgICAgICAuam9pbignOyAnKVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uID0gT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb247XG4vKipcbiAqIE9EU0NoYXJ0c0l0ZW1Hcm91cENTU0RlZmluaXRpb24gZGVmaW5lcyB0aGUgY2xhc3NlcyBhbiBzdHlsZXMgdG8gYmUgYWRkIG9uIGNvZGUgZ2VuZXJhdGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICovXG5jbGFzcyBPRFNDaGFydHNJdGVtR3JvdXBDU1NEZWZpbml0aW9uIHtcbn1cbmV4cG9ydHMuT0RTQ2hhcnRzSXRlbUdyb3VwQ1NTRGVmaW5pdGlvbiA9IE9EU0NoYXJ0c0l0ZW1Hcm91cENTU0RlZmluaXRpb247XG5jbGFzcyBPRFNDaGFydHNDU1NMZWdlbmRzRGVmaW5pdGlvbiBleHRlbmRzIE9EU0NoYXJ0c0l0ZW1Hcm91cENTU0RlZmluaXRpb24ge1xufVxuZXhwb3J0cy5PRFNDaGFydHNDU1NMZWdlbmRzRGVmaW5pdGlvbiA9IE9EU0NoYXJ0c0NTU0xlZ2VuZHNEZWZpbml0aW9uO1xuY2xhc3MgT0RTQ2hhcnRzQ1NTUG9wb3ZlckRlZmluaXRpb24gZXh0ZW5kcyBPRFNDaGFydHNJdGVtR3JvdXBDU1NEZWZpbml0aW9uIHtcbn1cbmV4cG9ydHMuT0RTQ2hhcnRzQ1NTUG9wb3ZlckRlZmluaXRpb24gPSBPRFNDaGFydHNDU1NQb3BvdmVyRGVmaW5pdGlvbjtcbi8qKlxuICogYE9EU0NoYXJ0c0NTU1RoZW1lRGVmaW5pdGlvbmAgZGVmaW5lcyB0aGUgY2xhc3NlcyBhbmQgc3R5bGVzIHRvIGJlIGFkZGVkIG9uIGNvZGUgZ2VuZXJhdGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIEluIGdlbmVyYWwsIGBPRFNDaGFydHNDU1NUaGVtZURlZmluaXRpb25gIGlzIG5vdCB1c2VkIGRpcmVjdGx5LCBidXQgb25lIG9mIHRoZSBpbnN0YW5jZXMgcHJvdmlkZWQgYnkge0BsaW5rIE9EU0NoYXJ0c0NTU1RoZW1lc30gaXMgdXNlZC5cbiAqL1xuY2xhc3MgT0RTQ2hhcnRzQ1NTVGhlbWVEZWZpbml0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNsYXNzZXMgYW4gc3R5bGVzIHRvIGJlIGFkZCB0byBsZWdlbmRzIGdlbmVyYXRlZCBjb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sZWdlbmRzID0gdW5kZWZpbmVkO1xuICAgICAgICAvKipcbiAgICAgICAgICogY2xhc3NlcyBhbiBzdHlsZXMgdG8gYmUgYWRkIHRvIHBvcG92ZXIgYW5kIHRvb2x0aXAgZ2VuZXJhdGVkIGNvZGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvcG92ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuZXhwb3J0cy5PRFNDaGFydHNDU1NUaGVtZURlZmluaXRpb24gPSBPRFNDaGFydHNDU1NUaGVtZURlZmluaXRpb247XG5jb25zdCBCT09TVEVENV9EZWZpbml0aW9uID0ge1xuICAgIGxlZ2VuZHM6IHtcbiAgICAgICAgb2RzQ2hhcnRzTGVnZW5kSG9sZGVyOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ3B0LTInXSxcbiAgICAgICAgfSxcbiAgICAgICAgb2RzQ2hhcnRzTGVnZW5kQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2QtZmxleCcsICdmbGV4LXdyYXAnLCAnanVzdGlmeS1jb250ZW50LXN0YXJ0J10sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c0xlZ2VuZENvbnRhaW5lclZlcnRpY2FsOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZsZXgtY29sdW1uJ10sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c0xlZ2VuZExpbms6IHsgY2xhc3NlczogWydteC0zJywgJ3BiLTInLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnXSB9LFxuICAgICAgICBvZHNDaGFydHNMZWdlbmRMaW5rT3BhY2l0eTogeyBjbGFzc2VzOiBbJ29wYWNpdHktMjUnXSB9LFxuICAgICAgICBvZHNDaGFydHNMZWdlbmRDb2xvckhvbGRlcjoge1xuICAgICAgICAgICAgY2xhc3NlczogWydkLWlubGluZS1ibG9jaycsICdib3JkZXInLCAnYm9yZGVyLTEnXSxcbiAgICAgICAgfSxcbiAgICAgICAgb2RzQ2hhcnRzTGVnZW5kQ29sb3I6IHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnZC1ibG9jaycsICdwb3NpdGlvbi1yZWxhdGl2ZSddLFxuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICc4cHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzhweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvZHNDaGFydHNMZWdlbmRMYWJlbDoge30sXG4gICAgfSxcbiAgICBwb3BvdmVyOiB7XG4gICAgICAgIG9kc0NoYXJ0c1BvcG92ZXJMaW5lOiB7IGNsYXNzZXM6IFsndGV4dC1ub3dyYXAnXSB9LFxuICAgICAgICBvZHNDaGFydHNQb3BvdmVyQ29sb3JIb2xkZXI6IHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnZC1pbmxpbmUtYmxvY2snLCAnYm9yZGVyJywgJ2JvcmRlci0xJ10sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c1BvcG92ZXJDb2xvcjoge1xuICAgICAgICAgICAgY2xhc3NlczogWydkLWJsb2NrJywgJ3Bvc2l0aW9uLXJlbGF0aXZlJ10sXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzhweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5jb25zdCBCT09TVEVENF9EZWZpbml0aW9uID0ge1xuICAgIGxlZ2VuZHM6IHtcbiAgICAgICAgb2RzQ2hhcnRzTGVnZW5kSG9sZGVyOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ3B0LTInXSxcbiAgICAgICAgfSxcbiAgICAgICAgb2RzQ2hhcnRzTGVnZW5kQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2QtZmxleCcsICdmbGV4LXdyYXAnLCAnanVzdGlmeS1jb250ZW50LXN0YXJ0J10sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c0xlZ2VuZENvbnRhaW5lclZlcnRpY2FsOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZsZXgtY29sdW1uJ10sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c0xlZ2VuZExpbms6IHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnbXgtMycsICdwYi0yJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJ10sXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvZHNDaGFydHNMZWdlbmRMaW5rT3BhY2l0eToge1xuICAgICAgICAgICAgY2xhc3NlczogWydvcGFjaXR5LTI1J10sXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnLjI1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c0xlZ2VuZENvbG9ySG9sZGVyOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2QtaW5saW5lLWJsb2NrJywgJ2JvcmRlciddLFxuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlci13aWR0aCc6ICcwLjEwNjI1cmVtIWltcG9ydGFudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvZHNDaGFydHNMZWdlbmRDb2xvcjoge1xuICAgICAgICAgICAgY2xhc3NlczogWydkLWJsb2NrJywgJ3Bvc2l0aW9uLXJlbGF0aXZlJ10sXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzhweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9kc0NoYXJ0c0xlZ2VuZExhYmVsOiB7fSxcbiAgICB9LFxuICAgIHBvcG92ZXI6IHtcbiAgICAgICAgb2RzQ2hhcnRzUG9wb3ZlckNvbG9ySG9sZGVyOiB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2QtaW5saW5lLWJsb2NrJywgJ2JvcmRlciddLFxuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlci13aWR0aCc6ICcwLjEwNjI1cmVtIWltcG9ydGFudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvZHNDaGFydHNQb3BvdmVyQ29sb3I6IHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnZC1ibG9jaycsICdwb3NpdGlvbi1yZWxhdGl2ZSddLFxuICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICc4cHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzhweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuY29uc3QgTk9ORSA9IHtcbiAgICBsZWdlbmRzOiB7IG9kc0NoYXJ0c0xlZ2VuZEhvbGRlcjogeyBjbGFzc2VzOiBbJ29kcy1jaGFydHMtbm8tY3NzLWxpYiddIH0gfSxcbiAgICBwb3BvdmVyOiB7XG4gICAgICAgIG9kc0NoYXJ0c1BvcG92ZXJIb2xkZXI6IHsgY2xhc3NlczogWydvZHMtY2hhcnRzLW5vLWNzcy1saWInXSB9LFxuICAgICAgICBvZHNDaGFydHNQb3BvdmVyOiB7IGNsYXNzZXM6IFsnb2RzLWNoYXJ0cy1uby1jc3MtbGliJ10gfSxcbiAgICAgICAgb2RzQ2hhcnRzUG9wb3ZlckJvZHlDb250ZW50OiB7IGNsYXNzZXM6IFsnb2RzLWNoYXJ0cy1uby1jc3MtbGliJ10gfSxcbiAgICAgICAgb2RzQ2hhcnRzUG9wb3ZlckxpbmU6IHsgY2xhc3NlczogWydvZHMtY2hhcnRzLW5vLWNzcy1saWInXSB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBQcmUtY29uZmlndXJlZCB7QGxpbmsgT0RTQ2hhcnRzQ1NTVGhlbWVEZWZpbml0aW9ufVxuICogLSBPRFNDaGFydHMuT0RTQ2hhcnRzQ1NTVGhlbWVzLk5PTkU6IHRoZSBnZW5lcmF0ZWQgY29kZSB3aWxsIHVzZSBhbiBlbWJlZGRlZCBpbmRlcGVuZGVudCBzdHlsZSBhdXRvLWdlbmVyYXRlZCBieSB0aGUgbGlicmFyeS5cbiAqIC0gT0RTQ2hhcnRzLk9EU0NoYXJ0c0NTU1RoZW1lcy5CT09TVEVENTogdGhlIGdlbmVyYXRlZCBjb2RlIHdpbGwgdXNlIEJvb3N0ZWQgNSBmcmFtZXdvcmsgQ1NTLlxuICogLSBPRFNDaGFydHMuT0RTQ2hhcnRzQ1NTVGhlbWVzLkJPT1NURUQ0OiB0aGUgZ2VuZXJhdGVkIGNvZGUgd2lsbCB1c2UgQm9vc3RlZCA0IGZyYW1ld29yayBDU1MuXG4gKi9cbmV4cG9ydHMuT0RTQ2hhcnRzQ1NTVGhlbWVzID0ge1xuICAgIEJPT1NURUQ0OiBCT09TVEVENF9EZWZpbml0aW9uLFxuICAgIEJPT1NURUQ1OiBCT09TVEVENV9EZWZpbml0aW9uLFxuICAgIE5PTkU6IE5PTkUsXG4gICAgQ1VTVE9NOiB7IGxlZ2VuZHM6IHt9LCBwb3BvdmVyOiB7fSB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX0JMVUUgPSB2b2lkIDA7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX0JMVUUgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW9kcy1ibHVlLTEsICMwODVFQkQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1ibHVlLTIsICMyMzdFQ0EpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1ibHVlLTMsICMzRTlERDYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1ibHVlLTQsICM0QkI0RTYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1ibHVlLTUsICM4MENFRUYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1ibHVlLTYsICNCNUU4RjcpJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX0NBVEVHT1JJQ0FMID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19DQVRFR09SSUNBTCA9IHtcbiAgICBjb2xvcjogW1xuICAgICAgICAndmFyKC0tb2RzLWNhdGVnb3JpY2FsLTEsICMwODVlYmQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1jYXRlZ29yaWNhbC0yLCAjMjdhOTcxKScsXG4gICAgICAgICd2YXIoLS1vZHMtY2F0ZWdvcmljYWwtMywgI2JjNGQ5YSknLFxuICAgICAgICAndmFyKC0tb2RzLWNhdGVnb3JpY2FsLTQsICM5MzczYmQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1jYXRlZ29yaWNhbC01LCAjOWQ2ZTA2KScsXG4gICAgICAgICd2YXIoLS1vZHMtY2F0ZWdvcmljYWwtNiwgIzMzMzMzMyknLFxuICAgICAgICAndmFyKC0tb2RzLWNhdGVnb3JpY2FsLTcsICMzZTlkZDYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1jYXRlZ29yaWNhbC04LCAjMGE2ZTMxKScsXG4gICAgICAgICd2YXIoLS1vZHMtY2F0ZWdvcmljYWwtOSwgI2Q1NzNiYiknLFxuICAgICAgICAndmFyKC0tb2RzLWNhdGVnb3JpY2FsLTEwLCAjNDkyMTkxKScsXG4gICAgICAgICd2YXIoLS1vZHMtY2F0ZWdvcmljYWwtMTEsICNiOThmMTEpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1jYXRlZ29yaWNhbC0xMiwgIzY2NjY2NiknLFxuICAgIF0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVGQVVMVF9DT0xPUlNfREFSS0VSX1RJTlRTID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19EQVJLRVJfVElOVFMgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW9kcy1jeWFuLWRhcmssICMwODVFQkQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy10ZWFsLWRhcmssICMwQTZFMzEpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLWRhcmssICNGRjhBRDQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1pbmRpZ28tZGFyaywgIzQ5MjE5MSknLFxuICAgICAgICAndmFyKC0tb2RzLXllbGxvdy1kYXJrLCAjRkZCNDAwKScsXG4gICAgXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19GVU5DVElPTkFMID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19GVU5DVElPTkFMID0ge1xuICAgIGNvbG9yOiBbXG4gICAgICAgICd2YXIoLS1vZHMtZnVuY3Rpb25hbC0xLCAjRjE2RTAwKScsXG4gICAgICAgICd2YXIoLS1vZHMtZnVuY3Rpb25hbC0yLCAjRUVFRUVFKScsXG4gICAgICAgICd2YXIoLS1vZHMtZnVuY3Rpb25hbC0zLCAjMjI4NzIyKScsXG4gICAgICAgICd2YXIoLS1vZHMtZnVuY3Rpb25hbC00LCAjRkZDQzAwKScsXG4gICAgICAgICd2YXIoLS1vZHMtZnVuY3Rpb25hbC01LCAjQ0QzQzE0KScsXG4gICAgICAgICd2YXIoLS1vZHMtZnVuY3Rpb25hbC02LCAjNDE3MEQ4KScsXG4gICAgXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19HUkVFTiA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9DT0xPUlNfR1JFRU4gPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW9kcy1ncmVlbi0xLCAjMEE2RTMxKScsXG4gICAgICAgICd2YXIoLS1vZHMtZ3JlZW4tMiwgIzI3QTk3MSknLFxuICAgICAgICAndmFyKC0tb2RzLWdyZWVuLTMsICM4NEQ1QUYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1ncmVlbi00LCAjMTk4QzUxKScsXG4gICAgICAgICd2YXIoLS1vZHMtZ3JlZW4tNSwgIzUwQkU4NyknLFxuICAgICAgICAndmFyKC0tb2RzLWdyZWVuLTYsICNCOEVCRDYpJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX0xJR0hURVJfVElOVFMgPSB2b2lkIDA7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX0xJR0hURVJfVElOVFMgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW9kcy1jeWFuLWxpZ2h0LCAjQjVFOEY3KScsXG4gICAgICAgICd2YXIoLS1vZHMtdGVhbC1saWdodCwgI0I4RUJENiknLFxuICAgICAgICAndmFyKC0tb2RzLXBpbmstbGlnaHQsICNGRkU4RjcpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1pbmRpZ28tbGlnaHQsICNEOUMyRjApJyxcbiAgICAgICAgJ3ZhcigtLW9kcy15ZWxsb3ctbGlnaHQsICNGRkY2QjYpJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX1BJTksgPSB2b2lkIDA7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX1BJTksgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLTEsICNCQzREOUEpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLTIsICNENTczQkIpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLTMsICNGRjhBRDQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLTQsICNGRkI0RTYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLTUsICNGRkNFRUYpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1waW5rLTYsICNGRkU4RjcpJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTX1BVUlBMRSA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9DT0xPUlNfUFVSUExFID0ge1xuICAgIGNvbG9yOiBbXG4gICAgICAgICd2YXIoLS1vZHMtcHVycGxlLTEsICM0OTIxOTEpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1wdXJwbGUtMiwgIzZFNEFBNyknLFxuICAgICAgICAndmFyKC0tb2RzLXB1cnBsZS0zLCAjOTM3M0JEKScsXG4gICAgICAgICd2YXIoLS1vZHMtcHVycGxlLTQsICNBODg1RDgpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1wdXJwbGUtNSwgI0MxQTRFNCknLFxuICAgICAgICAndmFyKC0tb2RzLXB1cnBsZS02LCAjRDlDMkYwKScsXG4gICAgXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19TVVBQT1JUSU5HX0NPTE9SUyA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9DT0xPUlNfU1VQUE9SVElOR19DT0xPUlMgPSB7XG4gICAgY29sb3I6IFsndmFyKC0tYnMtY3lhbiwgIzRiYjRlNiknLCAndmFyKC0tYnMtdGVhbCwgIzUwYmU4NyknLCAndmFyKC0tYnMtcGluaywgI2ZmYjRlNiknLCAndmFyKC0tYnMtaW5kaWdvLCAjYTg4NWQ4KScsICd2YXIoLS1vZHMteWVsbG93LCAjZmZkMjAwKSddLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09MT1JTID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SUyA9IHtcbiAgICBjb2xvcjogW1xuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtMSwgIzA4NWVkYiknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtMiwgIzBhNmUzMSknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtMywgI2JjNGQ5YSknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtNCwgIzQ5MjE5MSknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtNSwgI2I5OGYxMSknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtNiwgIzY2NjY2NiknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtNywgIzNlOWRkNiknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtOCwgIzI3YTk3MSknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtOSwgI2Q1NzNiYiknLFxuICAgICAgICAndmFyKC0tb2RzLWRlZmF1bHQtMTAsICM5MzczYmQpJyxcbiAgICAgICAgJ3ZhcigtLW9kcy1kZWZhdWx0LTExLCAjOWQ2ZTA2KScsXG4gICAgICAgICd2YXIoLS1vZHMtZGVmYXVsdC0xMiwgIzMzMzMzMyknLFxuICAgIF0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVGQVVMVF9DT0xPUlNfWUVMTE9XID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0NPTE9SU19ZRUxMT1cgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW9kcy15ZWxsb3ctMSwgIzlENkUwNiknLFxuICAgICAgICAndmFyKC0tb2RzLXllbGxvdy0yLCAjQjk4RjExKScsXG4gICAgICAgICd2YXIoLS1vZHMteWVsbG93LTMsICNGRkI0MDApJyxcbiAgICAgICAgJ3ZhcigtLW9kcy15ZWxsb3ctNCwgI0ZGRDIwMCknLFxuICAgICAgICAndmFyKC0tb2RzLXllbGxvdy01LCAjRkZFNDVCKScsXG4gICAgICAgICd2YXIoLS1vZHMteWVsbG93LTYsICNGRkY2QjYpJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfQ09NTU9OID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0NPTU1PTiA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1icy1ib2R5LWJnLCAjZmZmKScsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVGQVVMVF9MSU5FU19BWElTID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX0xJTkVTX0FYSVMgPSB7XG4gICAgY2F0ZWdvcnlBeGlzOiB7XG4gICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdmFsdWVBeGlzOiB7XG4gICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbG9nQXhpczoge1xuICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjY2NjYyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib2R5LWNvbG9yLCAjMDAwMDAwKScsXG4gICAgICAgIH0sXG4gICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjY2NjYyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRpbWVBeGlzOiB7XG4gICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjY2NjKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVGQVVMVF9PVURTX0NPTE9SU19CTFVFID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX0JMVUUgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC0xMDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC0yMDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC0zMDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC00MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC01MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC02MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC03MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC04MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTEtdGludC05MDApJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfT1VEU19DT0xPUlNfQ0FURUdPUklDQUwgPSB2b2lkIDA7XG5leHBvcnRzLkRFRkFVTFRfT1VEU19DT0xPUlNfQ0FURUdPUklDQUwgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItMSknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0yKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTMpJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci01KScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTYpJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNyknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci04KScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTkpJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItMTApJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfT1VEU19DT0xPUlNfRlVOQ1RJT05BTCA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9PVURTX0NPTE9SU19GVU5DVElPTkFMID0ge1xuICAgIGNvbG9yOiBbJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWZ1bmN0aW9uYWwtcG9zaXRpdmUpJywgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWZ1bmN0aW9uYWwtd2FybmluZyknLCAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItZnVuY3Rpb25hbC1uZWdhdGl2ZSknXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX0dSRUVOID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX0dSRUVOID0ge1xuICAgIGNvbG9yOiBbXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtMTAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtMjAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtMzAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtNDAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtNTAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtNjAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtNzAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtODAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0yLXRpbnQtOTAwKScsXG4gICAgXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX0hJR0hMSUdIVCA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9PVURTX0NPTE9SU19ISUdITElHSFQgPSB7XG4gICAgY29sb3I6IFsndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItaGlnaGxpZ2h0KScsICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1uZXV0cmFsKSddLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfT1VEU19DT0xPUlNfUElOSyA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9PVURTX0NPTE9SU19QSU5LID0ge1xuICAgIGNvbG9yOiBbXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtMTAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtMjAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtMzAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtNDAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtNTAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtNjAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtNzAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtODAwKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1zZXF1ZW50aWFsLWFjY2VudC0zLXRpbnQtOTAwKScsXG4gICAgXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vXG4vLyBTb2Z0d2FyZSBOYW1lOiBPcmFuZ2UgRGVzaWduIFN5c3RlbSBDaGFydHNcbi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IENvcHlyaWdodCAoYykgMjAyMyAtIDIwMjUgT3JhbmdlIFNBXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX1BVUlBMRSA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9PVURTX0NPTE9SU19QVVJQTEUgPSB7XG4gICAgY29sb3I6IFtcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC0xMDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC0yMDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC0zMDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC00MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC01MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC02MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC03MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC04MDApJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLXNlcXVlbnRpYWwtYWNjZW50LTQtdGludC05MDApJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfT1VEU19DT0xPUlNfU0lOR0xFID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX1NJTkdMRSA9IHtcbiAgICBjb2xvcjogW1xuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0xKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTYpJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItNyknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3ItY2F0ZWdvcmljYWwtdGllci0yKScsXG4gICAgICAgICd2YXIoLS1vdWRzLWNoYXJ0cy1jb2xvci1jYXRlZ29yaWNhbC10aWVyLTUpJyxcbiAgICAgICAgJ3ZhcigtLW91ZHMtY2hhcnRzLWNvbG9yLWNhdGVnb3JpY2FsLXRpZXItMTApJyxcbiAgICBdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfT1VEU19DT0xPUlNfWUVMTE9XID0gdm9pZCAwO1xuZXhwb3J0cy5ERUZBVUxUX09VRFNfQ09MT1JTX1lFTExPVyA9IHtcbiAgICBjb2xvcjogW1xuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTEwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTIwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTMwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTQwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTUwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTYwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTcwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTgwMCknLFxuICAgICAgICAndmFyKC0tb3Vkcy1jaGFydHMtY29sb3Itc2VxdWVudGlhbC1hY2NlbnQtNS10aW50LTkwMCknLFxuICAgIF0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTQ2hhcnRzTGVnZW5kSG9sZGVyRGVmaW5pdGlvbiA9IHZvaWQgMDtcbi8qKlxuICogRGVmaW5pdGlvbiBvZiBhIGNvbnRhaW5lciB1c2VkIHRvIGRpc3BsYXkgbGVnZW5kcywgcmVmZXIgdG8ge0BsaW5rIE9EU0NoYXJ0c1RoZW1lLmV4dGVybmFsaXplTGVnZW5kc30uXG4gKlxuICogRXhhbXBsZSBvZiB1c2U6XG4gKiBgYGBcbiAqIHRoZW1lTWFuYWdlci5leHRlcm5hbGl6ZUxlZ2VuZHMoXG4gKiAgIG15Q2hhcnQsXG4gKiAgIFt7IGxlZ2VuZEhvbGRlclNlbGVjdG9yOiAnI3Jlc3VsdHNfc3RhY2tfbGVnZW5kJywgc2VyaWVzUmVmOiBbJ3Jlc3VsdCddLCBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB9LFxuICogICAgeyBsZWdlbmRIb2xkZXJTZWxlY3RvcjogJyNnb2Fsc19zdGFja19sZWdlbmQnLCBzZXJpZXNSZWY6IFsnZ29hbHMnXSwgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfSxcbiAqICAgIHsgbGVnZW5kSG9sZGVyU2VsZWN0b3I6ICcjbGluZV9sZWdlbmQnIH1dXG4gKiApO1xuICogYGBgXG4gKi9cbmNsYXNzIE9EU0NoYXJ0c0xlZ2VuZEhvbGRlckRlZmluaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8qKlxuICAgICAqIExlZ2VuZHMgY29udGFpbmVyIENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIGxlZ2VuZEhvbGRlclNlbGVjdG9yLCBcbiAgICAvKipcbiAgICAgKiBPcHRpb25hbGx5IGluZGljYXRlcyB3aGV0aGVyIGNhcHRpb25zIGFyZSBkaXNwbGF5ZWQgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHkuXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIHZhbHVlIG9mIHRoZSBgbGVnZW5kLm9yaWVudGAgb3B0aW9uIGluIEFwYWNoZSBFQ2hhcnRzIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBJZiBgbGVnZW5kLm9yaWVudGAgZG9lcyBub3QgZXhpc3QsIHRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgYCdob3Jpem9udGFsJ2AuXG4gICAgICovXG4gICAgb3JpZW50YXRpb24sIFxuICAgIC8qKlxuICAgICAqIEFycmF5IHJlZmVyZW5jaW5nIHRoZSBzZXJpZXMgd2hvc2UgbGVnZW5kcyBhcmUgdG8gYmUgZGlzcGxheWVkIGluIHRoaXMgbGVnZW5kIGNvbnRhaW5lci5cbiAgICAgKiBUaGUgcmVmZXJlbmNlIGNhbiBiZSB0aGUgc2VyaWVzIG5hbWUsIHRoZSBzZXJpZXMgbGFiZWwgb3Igc2ltcGx5IHRoZSBzdGFjayBuYW1lIGluIHRoZSBjYXNlIG9mIHN0YWNrZWQgYmFycy5cbiAgICAgKiBJZiBgc2VyaWVzUmVmYCBpcyBhYnNlbnQsIHRoaXMgY29udGFpbmVyIHdpbGwgYmUgdGhlIGRlZmF1bHQgY29udGFpbmVyIGZvciBub24tcmVmZXJlbmNlZCBsZWdlbmRzLlxuICAgICAqL1xuICAgIHNlcmllc1JlZikge1xuICAgICAgICB0aGlzLmxlZ2VuZEhvbGRlclNlbGVjdG9yID0gbGVnZW5kSG9sZGVyU2VsZWN0b3I7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zZXJpZXNSZWYgPSBzZXJpZXNSZWY7XG4gICAgfVxufVxuZXhwb3J0cy5PRFNDaGFydHNMZWdlbmRIb2xkZXJEZWZpbml0aW9uID0gT0RTQ2hhcnRzTGVnZW5kSG9sZGVyRGVmaW5pdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9EU0NoYXJ0c0xlZ2VuZHMgPSBleHBvcnRzLk9EU0NoYXJ0c0xlZ2VuZERhdGEgPSB2b2lkIDA7XG5jb25zdCBjc3NfdGhlbWVzXzEgPSByZXF1aXJlKFwiLi4vY3NzLXRoZW1lcy9jc3MtdGhlbWVzXCIpO1xuY29uc3QgbWVyZ2Vfb2JqZWN0c18xID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzL21lcmdlLW9iamVjdHNcIik7XG5jb25zdCBERUZBVUxUX0NTUyA9IGAub2RzLWNoYXJ0cy1uby1jc3MtbGliLm9kcy1jaGFydHMtbGVnZW5kLWhvbGRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm9kcy1jaGFydHMtbm8tY3NzLWxpYiAub2RzLWNoYXJ0cy1sZWdlbmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIgLm9kcy1jaGFydHMtbGVnZW5kLWNvbnRhaW5lci12ZXJ0aWNhbCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm9kcy1jaGFydHMtbm8tY3NzLWxpYiAub2RzLWNoYXJ0cy1sZWdlbmQtbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApO1xyXG59XHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIgLm9kcy1jaGFydHMtbGVnZW5kLWxpbmsub2RzLWNoYXJ0cy1sZWdlbmQtbGluay1vcGFjaXR5IHtcclxuICBvcGFjaXR5OiAuMjU7XHJcbn1cclxuXHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIgLm9kcy1jaGFydHMtbGVnZW5kLWNvbG9yLWhvbGRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLCAjMDAwMDAwKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIgLm9kcy1jaGFydHMtbGVnZW5kLWNvbG9yIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ub2RzLWNoYXJ0cy1uby1jc3MtbGliIC5vZHMtY2hhcnRzLWxlZ2VuZC1sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodCAyNHB4XHJcbn1cclxuXHJcbltkYXRhLWJzLXRoZW1lPVwiZGFya1wiXSAub2RzLWNoYXJ0cy1uby1jc3MtbGliLm9kcy1jaGFydHMtbGVnZW5kLWhvbGRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS05NTAsICMxNDE0MTQpO1xyXG59XHJcbltkYXRhLWJzLXRoZW1lPVwiZGFya1wiXSAub2RzLWNoYXJ0cy1uby1jc3MtbGliLm9kcy1jaGFydHMtbGVnZW5kLWhvbGRlciAub2RzLWNoYXJ0cy1sZWdlbmQtbGluayB7XHJcbiAgY29sb3I6IHZhcigtLWJzLXdoaXRlLCAjZmZmKTtcclxufVxyXG5bZGF0YS1icy10aGVtZT1cImxpZ2h0XCJdIC5vZHMtY2hhcnRzLW5vLWNzcy1saWIub2RzLWNoYXJ0cy1sZWdlbmQtaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy13aGl0ZSwgI2ZmZik7XHJcbn1cclxuW2RhdGEtYnMtdGhlbWU9XCJsaWdodFwiXSAub2RzLWNoYXJ0cy1uby1jc3MtbGliLm9kcy1jaGFydHMtbGVnZW5kLWhvbGRlciAub2RzLWNoYXJ0cy1sZWdlbmQtbGluayB7XHJcbiAgY29sb3I6IHZhcigtLWJzLWJsYWNrLCAjMDAwKTtcclxufVxyXG5gO1xuY2xhc3MgT0RTQ2hhcnRzTGVnZW5kRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGFiZWxzID0gW107XG4gICAgICAgIHRoaXMubmFtZXMgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c0xlZ2VuZERhdGEgPSBPRFNDaGFydHNMZWdlbmREYXRhO1xuY2xhc3MgT0RTQ2hhcnRzTGVnZW5kcyB7XG4gICAgY29uc3RydWN0b3IoZWNoYXJ0LCBsZWdlbmRIb2xkZXJzKSB7XG4gICAgICAgIHRoaXMuZWNoYXJ0ID0gZWNoYXJ0O1xuICAgICAgICB0aGlzLmxlZ2VuZEhvbGRlcnMgPSBsZWdlbmRIb2xkZXJzO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkTGVnZW5kKGVjaGFydCwgbGVnZW5kSG9sZGVycykge1xuICAgICAgICBjb25zdCBsZWdlbmRIb2xkZXJzQXJyYXkgPSAoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyQXJyYXkpKGxlZ2VuZEhvbGRlcnMpXG4gICAgICAgICAgICA/IGxlZ2VuZEhvbGRlcnNcbiAgICAgICAgICAgIDogKDAsIG1lcmdlX29iamVjdHNfMS5pc1Zhck9iamVjdCkobGVnZW5kSG9sZGVycylcbiAgICAgICAgICAgICAgICA/IFtsZWdlbmRIb2xkZXJzXVxuICAgICAgICAgICAgICAgIDogW3sgbGVnZW5kSG9sZGVyU2VsZWN0b3I6IGxlZ2VuZEhvbGRlcnMgfV07XG4gICAgICAgIHJldHVybiBuZXcgT0RTQ2hhcnRzTGVnZW5kcyhlY2hhcnQsIGxlZ2VuZEhvbGRlcnNBcnJheSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMZWdlbmREYXRhKGRhdGFPcHRpb25zLCB1cGRhdGVEYXRhT3B0aW9uID0gdHJ1ZSkge1xuICAgICAgICBsZXQgbGVnZW5kRGF0YSA9IGRhdGFPcHRpb25zLmxlZ2VuZCAmJiBkYXRhT3B0aW9ucy5sZWdlbmQuZGF0YSA/IGRhdGFPcHRpb25zLmxlZ2VuZC5kYXRhIDogW107XG4gICAgICAgIGxldCBzZXJpZU5hbWVzO1xuICAgICAgICBjb25zdCBtb25vU2VyaWVHcmFwaGUgPSAxID09PSBkYXRhT3B0aW9ucy5zZXJpZXMubGVuZ3RoICYmIGRhdGFPcHRpb25zLnNlcmllc1swXS5kYXRhICYmIFsncGllJ10uaW5jbHVkZXMoZGF0YU9wdGlvbnMuc2VyaWVzWzBdLnR5cGUpO1xuICAgICAgICBpZiAoIWRhdGFPcHRpb25zLmxlZ2VuZCB8fCAhZGF0YU9wdGlvbnMubGVnZW5kLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhT3B0aW9ucy5kYXRhc2V0ICYmIGRhdGFPcHRpb25zLmRhdGFzZXQuc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZURhdGFPcHRpb24gJiYgIWRhdGFPcHRpb25zLmxlZ2VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9wdGlvbnMubGVnZW5kID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kRGF0YSA9IGRhdGFPcHRpb25zLmRhdGFzZXQuc291cmNlWzBdLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlRGF0YU9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9wdGlvbnMubGVnZW5kLmRhdGEgPSBsZWdlbmREYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZGF0YSBhcnJheSBvZiBsZWdlbmRzIGluIGxlZ2VuZCBjaGFydCBvcHRpb25gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZGF0YU9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGRhdGEgYXJyYXkgb2YgbGVnZW5kcyBpbiBsZWdlbmQgY2hhcnQgb3B0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlRGF0YU9wdGlvbiAmJiAhZGF0YU9wdGlvbnMubGVnZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFPcHRpb25zLmxlZ2VuZCA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW9ub1NlcmllR3JhcGhlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZERhdGEgPSBkYXRhT3B0aW9ucy5zZXJpZXNbMF0uZGF0YS5tYXAoKHNlcmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXJpZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGRhdGEgYXJyYXkgb2YgbGVnZW5kcyBpbiBsZWdlbmQgY2hhcnQgb3B0aW9uYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWUubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmREYXRhID0gZGF0YU9wdGlvbnMuc2VyaWVzLm1hcCgoc2VyaWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlcmllLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZGF0YSBhcnJheSBvZiBsZWdlbmRzIGluIGxlZ2VuZCBjaGFydCBvcHRpb25gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZURhdGFPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU9wdGlvbnMubGVnZW5kLmRhdGEgPSBsZWdlbmREYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobW9ub1NlcmllR3JhcGhlKSB7XG4gICAgICAgICAgICBzZXJpZU5hbWVzID0gZGF0YU9wdGlvbnMuc2VyaWVzWzBdLmRhdGEubWFwKChzZXJpZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlcmllLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGRhdGEgYXJyYXkgb2YgbGVnZW5kcyBpbiBsZWdlbmQgY2hhcnQgb3B0aW9uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJpZS5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodXBkYXRlRGF0YU9wdGlvbiAmJiAhZGF0YU9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YU9wdGlvbnMuc2VyaWVzID0gbGVnZW5kRGF0YS5tYXAoKHNlcmllLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlcmllX05hbWVfJyArIGluZGV4LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcmllTmFtZXMgPSBkYXRhT3B0aW9ucy5zZXJpZXMubWFwKChzZXJpZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlcmllLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cGRhdGVEYXRhT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc2VyaWVzIG5hbWVzIGluIGNoYXJ0IG9wdGlvbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlcmllLm5hbWUgPSAnc2VyaWVfTmFtZV8nICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJpZS5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsczogbGVnZW5kRGF0YSxcbiAgICAgICAgICAgIG5hbWVzOiBzZXJpZU5hbWVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRMZWdlbmQoZGF0YU9wdGlvbnMsIGNvbG9ycywgY3NzVGhlbWUsIGNzc1RoZW1lTmFtZSwgbW9kZSkge1xuICAgICAgICBpZiAoY3NzX3RoZW1lc18xLk9EU0NoYXJ0c0NTU1RoZW1lc05hbWVzLk5PTkUgPT09IGNzc1RoZW1lTmFtZSAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29kcy1jaGFydC1sZWdlbmRzLW5vbmUtY3NzJykpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZS5pZCA9ICdvZHMtY2hhcnQtbGVnZW5kcy1ub25lLWNzcyc7XG4gICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IERFRkFVTFRfQ1NTO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8ga2VlcCBBcGFjaGUgRUNoYXJ0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIGxlZ2VuZCBvcmllbnRhdGlvblxuICAgICAgICBpZiAoZGF0YU9wdGlvbnMgJiYgZGF0YU9wdGlvbnMubGVnZW5kICYmIGRhdGFPcHRpb25zLmxlZ2VuZC5vcmllbnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGVnZW5kSG9sZGVyIG9mIHRoaXMubGVnZW5kSG9sZGVycykge1xuICAgICAgICAgICAgICAgIGlmICghbGVnZW5kSG9sZGVyLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZEhvbGRlci5vcmllbnRhdGlvbiA9IGRhdGFPcHRpb25zLmxlZ2VuZC5vcmllbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbExlZ2VuZHMgPSBPRFNDaGFydHNMZWdlbmRzLmdldExlZ2VuZERhdGEoZGF0YU9wdGlvbnMpO1xuICAgICAgICBjb25zdCBsZWdlbmRIb2xkZXJzID0ge307XG4gICAgICAgIGxldCBkZWZhdWx0TGVnZW5kSG9sZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZ2VuZEhvbGRlciBvZiB0aGlzLmxlZ2VuZEhvbGRlcnMpIHtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsZWdlbmRIb2xkZXIubGVnZW5kSG9sZGVyU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBsZWdlbmQgaG9sZGVyIGZvdW5kIHdpdGggc2VsZWN0b3IgJHtsZWdlbmRIb2xkZXIubGVnZW5kSG9sZGVyU2VsZWN0b3J9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZWdlbmRIb2xkZXJzW2xlZ2VuZEhvbGRlci5sZWdlbmRIb2xkZXJTZWxlY3Rvcl0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGxlZ2VuZEhvbGRlciksIHsgbGVnZW5kczogeyBsYWJlbHM6IFtdLCBuYW1lczogW10sIGluZGV4OiBbXSB9IH0pO1xuICAgICAgICAgICAgaWYgKCFsZWdlbmRIb2xkZXIuc2VyaWVzUmVmKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdExlZ2VuZEhvbGRlciA9IGxlZ2VuZEhvbGRlcnNbbGVnZW5kSG9sZGVyLmxlZ2VuZEhvbGRlclNlbGVjdG9yXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsTGVnZW5kcy5uYW1lcy5sZW5ndGggJiYgaW5kZXggPCBhbGxMZWdlbmRzLmxhYmVscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBsZWdlbmRIb2xkZXJTZWxlY3RvciA9IE9iamVjdC5rZXlzKGxlZ2VuZEhvbGRlcnMpLmZpbmQoKGxlZ2VuZEhvbGRlcktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbGVnZW5kSG9sZGVyc1tsZWdlbmRIb2xkZXJLZXldLnNlcmllc1JlZiAmJlxuICAgICAgICAgICAgICAgICAgICAoKChfYSA9IGxlZ2VuZEhvbGRlcnNbbGVnZW5kSG9sZGVyS2V5XS5zZXJpZXNSZWYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcyhhbGxMZWdlbmRzLm5hbWVzW2luZGV4XSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoKF9iID0gbGVnZW5kSG9sZGVyc1tsZWdlbmRIb2xkZXJLZXldLnNlcmllc1JlZikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKGFsbExlZ2VuZHMubGFiZWxzW2luZGV4XSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFsZWdlbmRIb2xkZXJTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmllcyA9IGRhdGFPcHRpb25zLnNlcmllcyAmJiBkYXRhT3B0aW9ucy5zZXJpZXMuZmluZCgoc2VyaWVzKSA9PiBzZXJpZXMubmFtZSA9PT0gYWxsTGVnZW5kcy5uYW1lc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGlmIChzZXJpZXMgJiYgc2VyaWVzLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZEhvbGRlclNlbGVjdG9yID0gT2JqZWN0LmtleXMobGVnZW5kSG9sZGVycykuZmluZCgobGVnZW5kSG9sZGVyS2V5KSA9PiB7IHZhciBfYTsgcmV0dXJuICEhbGVnZW5kSG9sZGVyc1tsZWdlbmRIb2xkZXJLZXldLnNlcmllc1JlZiAmJiAoKF9hID0gbGVnZW5kSG9sZGVyc1tsZWdlbmRIb2xkZXJLZXldLnNlcmllc1JlZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKHNlcmllcy5zdGFjaykpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVnZW5kSG9sZGVyU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBsZWdlbmRIb2xkZXJzW2xlZ2VuZEhvbGRlclNlbGVjdG9yXS5sZWdlbmRzLmxhYmVscy5wdXNoKGFsbExlZ2VuZHMubGFiZWxzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgbGVnZW5kSG9sZGVyc1tsZWdlbmRIb2xkZXJTZWxlY3Rvcl0ubGVnZW5kcy5uYW1lcy5wdXNoKGFsbExlZ2VuZHMubmFtZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBsZWdlbmRIb2xkZXJzW2xlZ2VuZEhvbGRlclNlbGVjdG9yXS5sZWdlbmRzLmluZGV4LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoISFkZWZhdWx0TGVnZW5kSG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdExlZ2VuZEhvbGRlci5sZWdlbmRzLmxhYmVscy5wdXNoKGFsbExlZ2VuZHMubGFiZWxzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdExlZ2VuZEhvbGRlci5sZWdlbmRzLm5hbWVzLnB1c2goYWxsTGVnZW5kcy5uYW1lc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRMZWdlbmRIb2xkZXIubGVnZW5kcy5pbmRleC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhT3B0aW9ucy5sZWdlbmQuc2hvdyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZ2VuZEhvbGRlclNlbGVjdG9yIG9mIE9iamVjdC5rZXlzKGxlZ2VuZEhvbGRlcnMpKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSGFuZGxlcihsZWdlbmRIb2xkZXJTZWxlY3RvciwgY3NzVGhlbWUpO1xuICAgICAgICAgICAgY29uc3QgbGVnZW5kSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsZWdlbmRIb2xkZXJTZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoIWxlZ2VuZEhvbGRlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZmluZCBsZWdlbmQgaG9sZGVyIHVzaW5nIHRoZSBzZWxlY3RvciAke2xlZ2VuZEhvbGRlclNlbGVjdG9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsZWdlbmRIb2xkZXJTZWxlY3RvcikuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZUxlZ2VuZChsZWdlbmRIb2xkZXJTZWxlY3RvciwgY29sb3JzLCBsZWdlbmRIb2xkZXJzW2xlZ2VuZEhvbGRlclNlbGVjdG9yXS5sZWdlbmRzLCBjc3NUaGVtZSwgbW9kZSwgbGVnZW5kSG9sZGVyc1tsZWdlbmRIb2xkZXJTZWxlY3Rvcl0ub3JpZW50YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdlbmVyYXRlTGVnZW5kKGxlZ2VuZEhvbGRlclNlbGVjdG9yLCBjb2xvcnMsIGxlZ2VuZHMsIGNzc1RoZW1lLCBtb2RlLCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oO1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJvZHMtY2hhcnRzLWxlZ2VuZC1ob2xkZXIgb2RzLWNoYXJ0cy1tb2RlLSR7bW9kZX0gJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0Q2xhc3NlcygoX2EgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2RzQ2hhcnRzTGVnZW5kSG9sZGVyKX1cIlxyXG4gICAgc3R5bGU9XCIke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9iID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9kc0NoYXJ0c0xlZ2VuZEhvbGRlcil9XCJcclxuICAgID5cclxuICAgIDxkaXYgY2xhc3M9XCJvZHMtY2hhcnRzLWxlZ2VuZC1jb250YWluZXIgb2RzLWNoYXJ0cy1sZWdlbmQtY29udGFpbmVyLSR7b3JpZW50YXRpb259ICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9jID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm9kc0NoYXJ0c0xlZ2VuZENvbnRhaW5lcil9ICR7J3ZlcnRpY2FsJyA9PT0gb3JpZW50YXRpb24gPyBjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0Q2xhc3NlcygoX2QgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Qub2RzQ2hhcnRzTGVnZW5kQ29udGFpbmVyVmVydGljYWwpIDogY3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9lID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm9kc0NoYXJ0c0xlZ2VuZENvbnRhaW5lckhvcml6b250YWwpfVwiXHJcbiAgICBzdHlsZT1cIiR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2YgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Yub2RzQ2hhcnRzTGVnZW5kQ29udGFpbmVyKX0gJHsndmVydGljYWwnID09PSBvcmllbnRhdGlvbiA/IGNzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9nID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLm9kc0NoYXJ0c0xlZ2VuZENvbnRhaW5lclZlcnRpY2FsKSA6IGNzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9oID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLm9kc0NoYXJ0c0xlZ2VuZENvbnRhaW5lckhvcml6b250YWwpfVwiXHJcbiAgICA+XHJcbiAgICAkeyhsZWdlbmRzID8gbGVnZW5kcy5sYWJlbHMgOiBbXSkubWFwKChsZWdlbmRMYWJlbCwgaW5kZXhJbkhvbGRlcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaDtcbiAgICAgICAgICAgIGxldCBjb2xvckluZGV4ID0gbGVnZW5kcy5pbmRleFtpbmRleEluSG9sZGVyXSAlIGNvbG9ycy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwib2RzLWNoYXJ0cy1sZWdlbmQtbGluayAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfYSA9IGNzc1RoZW1lLmxlZ2VuZHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vZHNDaGFydHNMZWdlbmRMaW5rKX1cIiBcclxuICAgICAgc3R5bGU9XCIke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9iID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9kc0NoYXJ0c0xlZ2VuZExpbmspfVwiXHJcbiAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OlwiIG9uY2xpY2s9XCJvZHNfY2hhcnRfbGVnZW5kX3N3aXRjaExlZ2VuZFske0pTT04uc3RyaW5naWZ5KGxlZ2VuZEhvbGRlclNlbGVjdG9yKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyl9XSh0aGlzLCAke0pTT04uc3RyaW5naWZ5KGxlZ2VuZHMubmFtZXNbaW5kZXhJbkhvbGRlcl0pLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKX0pXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwib2RzLWNoYXJ0cy1sZWdlbmQtY29sb3ItaG9sZGVyICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9jID0gY3NzVGhlbWUubGVnZW5kcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm9kc0NoYXJ0c0xlZ2VuZENvbG9ySG9sZGVyKX1cIlxyXG4gICAgICBzdHlsZT1cIiR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2QgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Qub2RzQ2hhcnRzTGVnZW5kQ29sb3JIb2xkZXIpfVwiPiAgXHJcbiAgICAgIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke2NvbG9yc1tjb2xvckluZGV4XX07ICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2UgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Uub2RzQ2hhcnRzTGVnZW5kQ29sb3IpfVwiIGNsYXNzPVwib2RzLWNoYXJ0cy1sZWdlbmQtY29sb3IgJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0Q2xhc3NlcygoX2YgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Yub2RzQ2hhcnRzTGVnZW5kQ29sb3IpfVwiPjwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gIFxyXG4gICAgPGxhYmVsIGNsYXNzPVwib2RzLWNoYXJ0cy1sZWdlbmQtbGFiZWwgJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0Q2xhc3NlcygoX2cgPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cub2RzQ2hhcnRzTGVnZW5kTGFiZWwpfVwiXHJcbiAgICBzdHlsZT1cIiR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2ggPSBjc3NUaGVtZS5sZWdlbmRzKSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2gub2RzQ2hhcnRzTGVnZW5kTGFiZWwpfVwiXHJcbiAgICByb2xlPVwiYnV0dG9uXCI+JHtsZWdlbmRMYWJlbH08L2xhYmVsPlxyXG4gIDwvYT5gO1xuICAgICAgICB9KS5qb2luKGBcclxuICAgIGApfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICBnZW5lcmF0ZUhhbmRsZXIobGVnZW5kSG9sZGVyU2VsZWN0b3IsIGNzc1RoZW1lKSB7XG4gICAgICAgIGlmICghd2luZG93Lm9kc19jaGFydF9sZWdlbmRfc3dpdGNoTGVnZW5kKSB7XG4gICAgICAgICAgICB3aW5kb3cub2RzX2NoYXJ0X2xlZ2VuZF9zd2l0Y2hMZWdlbmQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub2RzX2NoYXJ0X2xlZ2VuZF9zd2l0Y2hMZWdlbmRbbGVnZW5kSG9sZGVyU2VsZWN0b3JdID0gKGVsdCwgbGVnZW5kTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZSA9ICFlbHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvZHMtY2hhcnRzLWxlZ2VuZC1saW5rLW9wYWNpdHknKTtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lQ2xhc3NlcyA9IGNzc1RoZW1lLmxlZ2VuZHMgJiYgY3NzVGhlbWUubGVnZW5kcy5vZHNDaGFydHNMZWdlbmRMaW5rT3BhY2l0eSAmJiBjc3NUaGVtZS5sZWdlbmRzLm9kc0NoYXJ0c0xlZ2VuZExpbmtPcGFjaXR5LmNsYXNzZXNcbiAgICAgICAgICAgICAgICA/IGNzc1RoZW1lLmxlZ2VuZHMub2RzQ2hhcnRzTGVnZW5kTGlua09wYWNpdHkuY2xhc3Nlc1xuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICBjb25zdCB0aGVtZVN0eWxlcyA9IHZpc2libGVcbiAgICAgICAgICAgICAgICA/IGNzc1RoZW1lLmxlZ2VuZHMgJiYgY3NzVGhlbWUubGVnZW5kcy5vZHNDaGFydHNMZWdlbmRMaW5rT3BhY2l0eSAmJiBjc3NUaGVtZS5sZWdlbmRzLm9kc0NoYXJ0c0xlZ2VuZExpbmtPcGFjaXR5LnN0eWxlc1xuICAgICAgICAgICAgICAgICAgICA/IGNzc1RoZW1lLmxlZ2VuZHMub2RzQ2hhcnRzTGVnZW5kTGlua09wYWNpdHkuc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICA6IGNzc1RoZW1lLmxlZ2VuZHMgJiYgY3NzVGhlbWUubGVnZW5kcy5vZHNDaGFydHNMZWdlbmRMaW5rICYmIGNzc1RoZW1lLmxlZ2VuZHMub2RzQ2hhcnRzTGVnZW5kTGluay5zdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgPyBjc3NUaGVtZS5sZWdlbmRzLm9kc0NoYXJ0c0xlZ2VuZExpbmsuc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIDoge307XG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGVsdC5jbGFzc0xpc3QuYWRkKCdvZHMtY2hhcnRzLWxlZ2VuZC1saW5rLW9wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRoZW1lQ2xhc3Mgb2YgdGhlbWVDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsdC5jbGFzc0xpc3QuYWRkKHRoZW1lQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKCdvZHMtY2hhcnRzLWxlZ2VuZC1saW5rLW9wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRoZW1lQ2xhc3Mgb2YgdGhlbWVDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKHRoZW1lQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgY3NzUHJvcGVydHkgb2YgT2JqZWN0LmtleXModGhlbWVTdHlsZXMpKSB7XG4gICAgICAgICAgICAgICAgZWx0LnN0eWxlW2Nzc1Byb3BlcnR5XSA9IHRoZW1lU3R5bGVzW2Nzc1Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWNoYXJ0LmRpc3BhdGNoQWN0aW9uKHtcbiAgICAgICAgICAgICAgICB0eXBlOiB2aXNpYmxlID8gJ2xlZ2VuZFVuU2VsZWN0JyA6ICdsZWdlbmRTZWxlY3QnLFxuICAgICAgICAgICAgICAgIG5hbWU6IGxlZ2VuZE5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c0xlZ2VuZHMgPSBPRFNDaGFydHNMZWdlbmRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTQ2hhcnRzVGhlbWUgPSBleHBvcnRzLk9EU0NoYXJ0c01vZGUgPSBleHBvcnRzLk9EU0NoYXJ0c0xpbmVTdHlsZSA9IGV4cG9ydHMuT0RTQ2hhcnRzQ29sb3JzU2V0ID0gdm9pZCAwO1xuY29uc3QgT0RTX2xpbmVfc3R5bGVfYnJva2VuXzEgPSByZXF1aXJlKFwiLi9jb21tb24vT0RTLmxpbmUtc3R5bGUuYnJva2VuXCIpO1xuY29uc3QgT0RTX2xpbmVfc3R5bGVfd2l0aF9wb2ludHNfMSA9IHJlcXVpcmUoXCIuL2NvbW1vbi9PRFMubGluZS1zdHlsZS53aXRoLXBvaW50c1wiKTtcbmNvbnN0IE9EU19saW5lX3N0eWxlX3Ntb290aF8xID0gcmVxdWlyZShcIi4vY29tbW9uL09EUy5saW5lLXN0eWxlLnNtb290aFwiKTtcbmNvbnN0IE9EU19wcm9qZWN0XzEgPSByZXF1aXJlKFwiLi9PRFMucHJvamVjdFwiKTtcbmNvbnN0IG9kc19jaGFydF9sZWdlbmRzXzEgPSByZXF1aXJlKFwiLi9sZWdlbmRzL29kcy1jaGFydC1sZWdlbmRzXCIpO1xuY29uc3QgbWVyZ2Vfb2JqZWN0c18xID0gcmVxdWlyZShcIi4uL3Rvb2xzL21lcmdlLW9iamVjdHNcIik7XG5jb25zdCBvZHNfY2hhcnRfcmVzaXplXzEgPSByZXF1aXJlKFwiLi9yZXNpemUvb2RzLWNoYXJ0LXJlc2l6ZVwiKTtcbmNvbnN0IGNzc190aGVtZXNfMSA9IHJlcXVpcmUoXCIuL2Nzcy10aGVtZXMvY3NzLXRoZW1lc1wiKTtcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCIuLi90b29scy9oYXNoXCIpO1xuY29uc3QgY2xvbmVfZGVlcF9vYmplY3RfMSA9IHJlcXVpcmUoXCIuLi90b29scy9jbG9uZS1kZWVwLW9iamVjdFwiKTtcbmNvbnN0IG9kc19jaGFydF9wb3BvdmVyXzEgPSByZXF1aXJlKFwiLi9wb3BvdmVyL29kcy1jaGFydC1wb3BvdmVyXCIpO1xuY29uc3Qgb2RzX2NoYXJ0X3BvcG92ZXJfZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuL3BvcG92ZXIvb2RzLWNoYXJ0LXBvcG92ZXItZGVmaW5pdGlvbnNcIik7XG5jb25zdCBtYWluX2F4aXNfdHlwZV9jb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3QvbWFpbi1heGlzLXR5cGUuY29uc3RcIik7XG5jb25zdCBvZHNfY2hhcnRzX3RoZW1lX29ic2VydmVyXzEgPSByZXF1aXJlKFwiLi90aGVtZS1vYnNlcnZlci9vZHMtY2hhcnRzLXRoZW1lLW9ic2VydmVyXCIpO1xuY29uc3QgY3NzX2hlbHBlcl8xID0gcmVxdWlyZShcIi4vY3NzLXRoZW1lcy9jc3MtaGVscGVyXCIpO1xuY29uc3QgT0RTX2NvbG9yc195ZWxsb3dfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT0RTLmNvbG9ycy55ZWxsb3dcIik7XG5jb25zdCBPRFNfY29sb3JzX3B1cnBsZV8xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PRFMuY29sb3JzLnB1cnBsZVwiKTtcbmNvbnN0IE9EU19jb2xvcnNfcGlua18xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PRFMuY29sb3JzLnBpbmtcIik7XG5jb25zdCBPRFNfY29sb3JzX2dyZWVuXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09EUy5jb2xvcnMuZ3JlZW5cIik7XG5jb25zdCBPRFNfY29sb3JzX2JsdWVfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT0RTLmNvbG9ycy5ibHVlXCIpO1xuY29uc3QgT0RTX2NvbG9yc19saWdodGVyX3RpbnRzXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09EUy5jb2xvcnMubGlnaHRlci10aW50c1wiKTtcbmNvbnN0IE9EU19jb2xvcnNfZGFya2VyX3RpbnRzXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09EUy5jb2xvcnMuZGFya2VyLXRpbnRzXCIpO1xuY29uc3QgT0RTX2NvbG9yc19zdXBwb3J0aW5nX2NvbG9yc18xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PRFMuY29sb3JzLnN1cHBvcnRpbmctY29sb3JzXCIpO1xuY29uc3QgT0RTX2NvbG9yc19mdW5jdGlvbmFsXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09EUy5jb2xvcnMuZnVuY3Rpb25hbFwiKTtcbmNvbnN0IE9EU19jb2xvcnNfY2F0ZWdvcmljYWxfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT0RTLmNvbG9ycy5jYXRlZ29yaWNhbFwiKTtcbmNvbnN0IE9EU19jb2xvcnNfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT0RTLmNvbG9yc1wiKTtcbmNvbnN0IE9EU19jb21tb25fMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT0RTLmNvbW1vblwiKTtcbmNvbnN0IE9EU19saW5lc19heGlzXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09EUy5saW5lcy5heGlzXCIpO1xuY29uc3QgT1VEU19jb2xvcnNfYmx1ZV8xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PVURTLmNvbG9ycy5ibHVlXCIpO1xuY29uc3QgT1VEU19jb2xvcnNfY2F0ZWdvcmljYWxfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT1VEUy5jb2xvcnMuY2F0ZWdvcmljYWxcIik7XG5jb25zdCBPVURTX2NvbG9yc19mdW5jdGlvbmFsXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09VRFMuY29sb3JzLmZ1bmN0aW9uYWxcIik7XG5jb25zdCBPVURTX2NvbG9yc19ncmVlbl8xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PVURTLmNvbG9ycy5ncmVlblwiKTtcbmNvbnN0IE9VRFNfY29sb3JzX2hpZ2hsaWdodF8xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PVURTLmNvbG9ycy5oaWdobGlnaHRcIik7XG5jb25zdCBPVURTX2NvbG9yc19waW5rXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09VRFMuY29sb3JzLnBpbmtcIik7XG5jb25zdCBPVURTX2NvbG9yc19wdXJwbGVfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHQvT1VEUy5jb2xvcnMucHVycGxlXCIpO1xuY29uc3QgT1VEU19jb2xvcnNfc2luZ2xlXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0L09VRFMuY29sb3JzLnNpbmdsZVwiKTtcbmNvbnN0IE9VRFNfY29sb3JzX3llbGxvd18xID0gcmVxdWlyZShcIi4vZGVmYXVsdC9PVURTLmNvbG9ycy55ZWxsb3dcIik7XG5jb25zdCBvZHNfY2hhcnRzXzEgPSByZXF1aXJlKFwiLi4vb2RzLWNoYXJ0c1wiKTtcbi8vIGltcG9ydCB7IERFRkFVTFRfT1VEU19DT01NT04gfSBmcm9tICcuL2RlZmF1bHQvT1VEUy5jb21tb24nOyAvLyBUT0RPOiB1c2Ugd2hlbiB3ZSBjYW4gc3dpdGNoIGJldHdlZW4gT0RTIGFuZCBPVURTXG4vLyBpbXBvcnQgeyBERUZBVUxUX09VRFNfTElORVNfQVhJUyB9IGZyb20gJy4vZGVmYXVsdC9PVURTLmxpbmVzLmF4aXMnO1xuLyoqXG4gKiBPRFNDaGFydHNDb2xvcnNTZXQgaXMgdXNlZCBmb3IgcHJlZGVmaW5lZCBjb2xvciBzZXRzLlxuICpcbiAqIERlZmF1bHQgYW5kIENhdGVnb3JpY2FsIGNvbG9yIHNldHMgYXJlIGRlZmluZWQgc28gYWxsIHRoZSBjb2xvcnMgYXJlIGBhY2Nlc3NpYmxlYCBhZ2FpbnN0IHdoaXRlL2RhcmsgYmFja2dyb3VuZCBhbmQgZGlzdGluZ3Vpc2hhYmxlIGZvciBtb3N0IGNvbG9yLWJsaW5kIHBlb3BsZS4gVGhlc2Ugc2V0cyBhcmUgbm90IGFjY2Vzc2libGUgZnJvbSBhIG1vbm9jaHJvbWFjeSBwb2ludCBvZiB2aWV3LlxuICpcbiAqIElmIHlvdSB1c2Ugb3VyIGBzZXF1ZW50aWFsYCBzZXRzLCBwbGVhc2UgY29uc2lkZXIgdXNpbmcgb25lIGNvbG9yIG91dCBvZiB0d28gaWYgcG9zc2libGUgZm9yIGEgZ3JlYXRlciBjb250cmFzdCAoZm9yIGV4YW1wbGUgMC0yLTQpLlxuICpcbiAqIC0ge0BsaW5rIERFRkFVTFR9IGlzIHRoZSBkZWZhdWx0IGNvbG9yIHNldCBmb3IgdXAgdG8gMTIgZGlmZmVyZW50IGNvbG9ycywgc2VsZWN0ZWQgdG8gZmF2b3IgY29udHJhc3RzLlxuICogLSB7QGxpbmsgQ0FURUdPUklDQUx9IGlzIGEgY29sb3Igc2V0LCBidWlsZCBmb3IgdXAgdG8gMTIgZGlmZmVyZW50IGNvbG9ycywgZGVmaW5lZCBieSB0aGUgT3JhbmdlIERlc2lnbiBTeXN0ZW0gdG8gZGlzcGxheSBkYXRhIHZpc3VhbGl6YXRpb24gY2F0ZWdvcmllcy5cbiAqIC0ge0BsaW5rIEZVTkNUSU9OQUx9IGlzIHRoZSBjb2xvciBzZXQgZW1iZWRkaW5nIHRoZSBvcmFuZ2UgdGhhdCBzaG91bGQgYmUgdXNlZCBhIGZ1bmN0aW9uYWwgZ3JheSBhbmQgYWxsIHRoZSBmdW5jdGlvbmFsIGNvbG9ycy5cbiAqIC0ge0BsaW5rIFNVUFBPUlRJTkdfQ09MT1JTfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIHN1cHBvcnRpbmcgY29sb3JzLiBDb2xvcnMgZG9uJ3QgY2hhbmdlIGJldHdlZW4gbGlnaHQgYW5kIGRhcmsgbW9kZS5cbiAqIC0ge0BsaW5rIERBUktFUl9USU5UU30gaXMgdGhlIGNvbG9yIHNldCBlbWJlZGRpbmcgYWxsIHRoZSBkYXJrZXIgdGludHMgb2YgdGhlIHN1cHBvcnRpbmcgY29sb3JzIGluIGxpZ2h0IG1vZGUgKGxpZ2h0ZXIgaW4gZGFyayBtb2RlKS5cbiAqIC0ge0BsaW5rIExJR0hURVJfVElOVFN9IGlzIHRoZSBjb2xvciBzZXQgZW1iZWRkaW5nIGFsbCB0aGUgbGlnaHRlciB0aW50cyBvZiB0aGUgc3VwcG9ydGluZyBjb2xvcnMgaW4gbGlnaHQgbW9kZSAoZGFya2VyIGluIGRhcmsgbW9kZSkuXG4gKiAtIHtAbGluayBTRVFVRU5USUFMX0JMVUV9IGlzIHRoZSBjb2xvciBzZXQgZW1iZWRkaW5nIGFsbCB0aGUgT3JhbmdlIERlc2lnbiBTeXN0ZW0gYmx1ZSBjb2xvcnMuXG4gKiAtIHtAbGluayBTRVFVRU5USUFMX0dSRUVOfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIE9yYW5nZSBEZXNpZ24gU3lzdGVtIGdyZWVuIGNvbG9ycy5cbiAqIC0ge0BsaW5rIFNFUVVFTlRJQUxfUElOS30gaXMgdGhlIGNvbG9yIHNldCBlbWJlZGRpbmcgYWxsIHRoZSBPcmFuZ2UgRGVzaWduIFN5c3RlbSBwaW5rIGNvbG9ycy5cbiAqIC0ge0BsaW5rIFNFUVVFTlRJQUxfUFVSUExFfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIE9yYW5nZSBEZXNpZ24gU3lzdGVtIHB1cnBsZSBjb2xvcnMuXG4gKiAtIHtAbGluayBTRVFVRU5USUFMX1lFTExPV30gaXMgdGhlIGNvbG9yIHNldCBlbWJlZGRpbmcgYWxsIHRoZSBPcmFuZ2UgRGVzaWduIFN5c3RlbSB5ZWxsb3cgY29sb3JzLlxuICogLSB7QGxpbmsgT1VEU19TRVFVRU5USUFMX0JMVUV9IGlzIHRoZSBjb2xvciBzZXQgZW1iZWRkaW5nIGFsbCB0aGUgT3JhbmdlIFVuaWZpZWQgRGVzaWduIFN5c3RlbSBibHVlIGNvbG9ycy4gSXQncyBzdGlsbCBleHBlcmltZW50YWwuXG4gKiAtIHtAbGluayBPVURTX1NFUVVFTlRJQUxfR1JFRU59IGlzIHRoZSBjb2xvciBzZXQgZW1iZWRkaW5nIGFsbCB0aGUgT3JhbmdlIFVuaWZpZWQgRGVzaWduIFN5c3RlbSBncmVlbiBjb2xvcnMuIEl0J3Mgc3RpbGwgZXhwZXJpbWVudGFsLlxuICogLSB7QGxpbmsgT1VEU19TRVFVRU5USUFMX1BJTkt9IGlzIHRoZSBjb2xvciBzZXQgZW1iZWRkaW5nIGFsbCB0aGUgT3JhbmdlIFVuaWZpZWQgRGVzaWduIFN5c3RlbSBwaW5rIGNvbG9ycy4gSXQncyBzdGlsbCBleHBlcmltZW50YWwuXG4gKiAtIHtAbGluayBPVURTX1NFUVVFTlRJQUxfUFVSUExFfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIE9yYW5nZSBVbmlmaWVkIERlc2lnbiBTeXN0ZW0gcHVycGxlIGNvbG9ycy4gSXQncyBzdGlsbCBleHBlcmltZW50YWwuXG4gKiAtIHtAbGluayBPVURTX1NFUVVFTlRJQUxfWUVMTE9XfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIE9yYW5nZSBVbmlmaWVkIERlc2lnbiBTeXN0ZW0geWVsbG93IGNvbG9ycy4gSXQncyBzdGlsbCBleHBlcmltZW50YWwuXG4gKiAtIHtAbGluayBPVURTX0NBVEVHT1JJQ0FMfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIE9yYW5nZSBVbmlmaWVkIERlc2lnbiBTeXN0ZW0gY2F0ZWdvcmljYWwgY29sb3JzLiBJdCdzIHN0aWxsIGV4cGVyaW1lbnRhbC5cbiAqIC0ge0BsaW5rIE9VRFNfRlVOQ1RJT05BTH0gaXMgdGhlIGNvbG9yIHNldCBlbWJlZGRpbmcgYWxsIHRoZSBPcmFuZ2UgVW5pZmllZCBEZXNpZ24gU3lzdGVtIGZ1bmN0aW9uYWwgY29sb3JzLiBJdCdzIHN0aWxsIGV4cGVyaW1lbnRhbC5cbiAqIC0ge0BsaW5rIE9VRFNfSElHSExJR0hUfSBpcyB0aGUgY29sb3Igc2V0IGVtYmVkZGluZyBhbGwgdGhlIE9yYW5nZSBVbmlmaWVkIERlc2lnbiBTeXN0ZW0gaGlnaGxpZ2h0IGNvbG9ycy4gSXQncyBzdGlsbCBleHBlcmltZW50YWwuXG4gKiAtIHtAbGluayBPVURTX1NJTkdMRX0gaXMgdGhlIGNvbG9yIHNldCBlbWJlZGRpbmcgYWxsIHRoZSBPcmFuZ2UgVW5pZmllZCBEZXNpZ24gU3lzdGVtIHNpbmdsZSBjb2xvcnMuIEl0J3Mgc3RpbGwgZXhwZXJpbWVudGFsLlxuICovXG52YXIgT0RTQ2hhcnRzQ29sb3JzU2V0O1xuKGZ1bmN0aW9uIChPRFNDaGFydHNDb2xvcnNTZXQpIHtcbiAgICBPRFNDaGFydHNDb2xvcnNTZXRbXCJERUZBVUxUXCJdID0gXCJkZWZhdWx0XCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiQ0FURUdPUklDQUxcIl0gPSBcImNhdGVnb3JpY2FsXCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiRlVOQ1RJT05BTFwiXSA9IFwiZnVuY3Rpb25hbFwiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIlNVUFBPUlRJTkdfQ09MT1JTXCJdID0gXCJzdXBwb3J0aW5nQ29sb3JzXCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiREFSS0VSX1RJTlRTXCJdID0gXCJkYXJrZXJUaW50c1wiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIkxJR0hURVJfVElOVFNcIl0gPSBcImxpZ2h0ZXJUaW50c1wiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIlNFUVVFTlRJQUxfQkxVRVwiXSA9IFwiYmx1ZVwiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIlNFUVVFTlRJQUxfR1JFRU5cIl0gPSBcImdyZWVuXCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiU0VRVUVOVElBTF9QSU5LXCJdID0gXCJwaW5rXCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiU0VRVUVOVElBTF9QVVJQTEVcIl0gPSBcInB1cnBsZVwiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIlNFUVVFTlRJQUxfWUVMTE9XXCJdID0gXCJ5ZWxsb3dcIjtcbiAgICBPRFNDaGFydHNDb2xvcnNTZXRbXCJPVURTX1NFUVVFTlRJQUxfQkxVRVwiXSA9IFwib3Vkc0JsdWVcIjtcbiAgICBPRFNDaGFydHNDb2xvcnNTZXRbXCJPVURTX1NFUVVFTlRJQUxfR1JFRU5cIl0gPSBcIm91ZHNHcmVlblwiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIk9VRFNfU0VRVUVOVElBTF9QSU5LXCJdID0gXCJvdWRzUGlua1wiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIk9VRFNfU0VRVUVOVElBTF9QVVJQTEVcIl0gPSBcIm91ZHNQdXJwbGVcIjtcbiAgICBPRFNDaGFydHNDb2xvcnNTZXRbXCJPVURTX1NFUVVFTlRJQUxfWUVMTE9XXCJdID0gXCJvdWRzWWVsbG93XCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiT1VEU19DQVRFR09SSUNBTFwiXSA9IFwib3Vkc0NhdGVnb3JpY2FsXCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiT1VEU19GVU5DVElPTkFMXCJdID0gXCJvdWRzRnVuY3Rpb25hbFwiO1xuICAgIE9EU0NoYXJ0c0NvbG9yc1NldFtcIk9VRFNfSElHSExJR0hUXCJdID0gXCJvdWRzSGlnaGxpZ2h0XCI7XG4gICAgT0RTQ2hhcnRzQ29sb3JzU2V0W1wiT1VEU19TSU5HTEVcIl0gPSBcIm91ZHNTaW5nbGVcIjtcbn0pKE9EU0NoYXJ0c0NvbG9yc1NldCB8fCAoZXhwb3J0cy5PRFNDaGFydHNDb2xvcnNTZXQgPSBPRFNDaGFydHNDb2xvcnNTZXQgPSB7fSkpO1xudmFyIE9EU0NoYXJ0c0xpbmVTdHlsZTtcbihmdW5jdGlvbiAoT0RTQ2hhcnRzTGluZVN0eWxlKSB7XG4gICAgT0RTQ2hhcnRzTGluZVN0eWxlW1wiQlJPS0VOXCJdID0gXCJicm9rZW5cIjtcbiAgICBPRFNDaGFydHNMaW5lU3R5bGVbXCJTTU9PVEhcIl0gPSBcInNtb290aFwiO1xuICAgIE9EU0NoYXJ0c0xpbmVTdHlsZVtcIkJST0tFTl9XSVRIX1BPSU5UU1wiXSA9IFwid2l0aFBvaW50c1wiO1xufSkoT0RTQ2hhcnRzTGluZVN0eWxlIHx8IChleHBvcnRzLk9EU0NoYXJ0c0xpbmVTdHlsZSA9IE9EU0NoYXJ0c0xpbmVTdHlsZSA9IHt9KSk7XG52YXIgT0RTQ2hhcnRzTW9kZTtcbihmdW5jdGlvbiAoT0RTQ2hhcnRzTW9kZSkge1xuICAgIE9EU0NoYXJ0c01vZGVbXCJMSUdIVFwiXSA9IFwibGlnaHRcIjtcbiAgICBPRFNDaGFydHNNb2RlW1wiREFSS1wiXSA9IFwiZGFya1wiO1xuICAgIE9EU0NoYXJ0c01vZGVbXCJERUZBVUxUXCJdID0gXCJkZWZhdWx0XCI7XG59KShPRFNDaGFydHNNb2RlIHx8IChleHBvcnRzLk9EU0NoYXJ0c01vZGUgPSBPRFNDaGFydHNNb2RlID0ge30pKTtcbmNvbnN0IFRIRU1FID0ge1xuICAgIGNvbW1vbjogT0RTX2NvbW1vbl8xLkRFRkFVTFRfQ09NTU9OLFxuICAgIGxpbmVzQXhpczogT0RTX2xpbmVzX2F4aXNfMS5ERUZBVUxUX0xJTkVTX0FYSVMsXG4gICAgY29sb3JzOiB7XG4gICAgICAgIGRlZmF1bHQ6IE9EU19jb2xvcnNfMS5ERUZBVUxUX0NPTE9SUyxcbiAgICAgICAgY2F0ZWdvcmljYWw6IE9EU19jb2xvcnNfY2F0ZWdvcmljYWxfMS5ERUZBVUxUX0NPTE9SU19DQVRFR09SSUNBTCxcbiAgICAgICAgZnVuY3Rpb25hbDogT0RTX2NvbG9yc19mdW5jdGlvbmFsXzEuREVGQVVMVF9DT0xPUlNfRlVOQ1RJT05BTCxcbiAgICAgICAgc3VwcG9ydGluZ0NvbG9yczogT0RTX2NvbG9yc19zdXBwb3J0aW5nX2NvbG9yc18xLkRFRkFVTFRfQ09MT1JTX1NVUFBPUlRJTkdfQ09MT1JTLFxuICAgICAgICBkYXJrZXJUaW50czogT0RTX2NvbG9yc19kYXJrZXJfdGludHNfMS5ERUZBVUxUX0NPTE9SU19EQVJLRVJfVElOVFMsXG4gICAgICAgIGxpZ2h0ZXJUaW50czogT0RTX2NvbG9yc19saWdodGVyX3RpbnRzXzEuREVGQVVMVF9DT0xPUlNfTElHSFRFUl9USU5UUyxcbiAgICAgICAgYmx1ZTogT0RTX2NvbG9yc19ibHVlXzEuREVGQVVMVF9DT0xPUlNfQkxVRSxcbiAgICAgICAgZ3JlZW46IE9EU19jb2xvcnNfZ3JlZW5fMS5ERUZBVUxUX0NPTE9SU19HUkVFTixcbiAgICAgICAgcGluazogT0RTX2NvbG9yc19waW5rXzEuREVGQVVMVF9DT0xPUlNfUElOSyxcbiAgICAgICAgcHVycGxlOiBPRFNfY29sb3JzX3B1cnBsZV8xLkRFRkFVTFRfQ09MT1JTX1BVUlBMRSxcbiAgICAgICAgeWVsbG93OiBPRFNfY29sb3JzX3llbGxvd18xLkRFRkFVTFRfQ09MT1JTX1lFTExPVyxcbiAgICAgICAgb3Vkc0JsdWU6IE9VRFNfY29sb3JzX2JsdWVfMS5ERUZBVUxUX09VRFNfQ09MT1JTX0JMVUUsXG4gICAgICAgIG91ZHNHcmVlbjogT1VEU19jb2xvcnNfZ3JlZW5fMS5ERUZBVUxUX09VRFNfQ09MT1JTX0dSRUVOLFxuICAgICAgICBvdWRzUGluazogT1VEU19jb2xvcnNfcGlua18xLkRFRkFVTFRfT1VEU19DT0xPUlNfUElOSyxcbiAgICAgICAgb3Vkc1B1cnBsZTogT1VEU19jb2xvcnNfcHVycGxlXzEuREVGQVVMVF9PVURTX0NPTE9SU19QVVJQTEUsXG4gICAgICAgIG91ZHNZZWxsb3c6IE9VRFNfY29sb3JzX3llbGxvd18xLkRFRkFVTFRfT1VEU19DT0xPUlNfWUVMTE9XLFxuICAgICAgICBvdWRzQ2F0ZWdvcmljYWw6IE9VRFNfY29sb3JzX2NhdGVnb3JpY2FsXzEuREVGQVVMVF9PVURTX0NPTE9SU19DQVRFR09SSUNBTCxcbiAgICAgICAgb3Vkc0Z1bmN0aW9uYWw6IE9VRFNfY29sb3JzX2Z1bmN0aW9uYWxfMS5ERUZBVUxUX09VRFNfQ09MT1JTX0ZVTkNUSU9OQUwsXG4gICAgICAgIG91ZHNIaWdobGlnaHQ6IE9VRFNfY29sb3JzX2hpZ2hsaWdodF8xLkRFRkFVTFRfT1VEU19DT0xPUlNfSElHSExJR0hULFxuICAgICAgICBvdWRzU2luZ2xlOiBPVURTX2NvbG9yc19zaW5nbGVfMS5ERUZBVUxUX09VRFNfQ09MT1JTX1NJTkdMRSxcbiAgICB9LFxuICAgIHZpc3VhbE1hcENvbG9yczoge1xuICAgICAgICBkZWZhdWx0OiB7IHZpc3VhbE1hcENvbG9yOiBPRFNfY29sb3JzXzEuREVGQVVMVF9DT0xPUlMuY29sb3IgfSxcbiAgICAgICAgY2F0ZWdvcmljYWw6IHsgdmlzdWFsTWFwQ29sb3I6IE9EU19jb2xvcnNfY2F0ZWdvcmljYWxfMS5ERUZBVUxUX0NPTE9SU19DQVRFR09SSUNBTC5jb2xvciB9LFxuICAgICAgICBmdW5jdGlvbmFsOiB7IHZpc3VhbE1hcENvbG9yOiBPRFNfY29sb3JzX2Z1bmN0aW9uYWxfMS5ERUZBVUxUX0NPTE9SU19GVU5DVElPTkFMLmNvbG9yIH0sXG4gICAgICAgIHN1cHBvcnRpbmdDb2xvcnM6IHsgdmlzdWFsTWFwQ29sb3I6IE9EU19jb2xvcnNfc3VwcG9ydGluZ19jb2xvcnNfMS5ERUZBVUxUX0NPTE9SU19TVVBQT1JUSU5HX0NPTE9SUy5jb2xvciB9LFxuICAgICAgICBkYXJrZXJUaW50czogeyB2aXN1YWxNYXBDb2xvcjogT0RTX2NvbG9yc19kYXJrZXJfdGludHNfMS5ERUZBVUxUX0NPTE9SU19EQVJLRVJfVElOVFMuY29sb3IgfSxcbiAgICAgICAgbGlnaHRlclRpbnRzOiB7IHZpc3VhbE1hcENvbG9yOiBPRFNfY29sb3JzX2xpZ2h0ZXJfdGludHNfMS5ERUZBVUxUX0NPTE9SU19MSUdIVEVSX1RJTlRTLmNvbG9yIH0sXG4gICAgICAgIGJsdWU6IHsgdmlzdWFsTWFwQ29sb3I6IE9EU19jb2xvcnNfYmx1ZV8xLkRFRkFVTFRfQ09MT1JTX0JMVUUuY29sb3IgfSxcbiAgICAgICAgZ3JlZW46IHsgdmlzdWFsTWFwQ29sb3I6IE9EU19jb2xvcnNfZ3JlZW5fMS5ERUZBVUxUX0NPTE9SU19HUkVFTi5jb2xvciB9LFxuICAgICAgICBwaW5rOiB7IHZpc3VhbE1hcENvbG9yOiBPRFNfY29sb3JzX3BpbmtfMS5ERUZBVUxUX0NPTE9SU19QSU5LLmNvbG9yIH0sXG4gICAgICAgIHB1cnBsZTogeyB2aXN1YWxNYXBDb2xvcjogT0RTX2NvbG9yc19wdXJwbGVfMS5ERUZBVUxUX0NPTE9SU19QVVJQTEUuY29sb3IgfSxcbiAgICAgICAgeWVsbG93OiB7IHZpc3VhbE1hcENvbG9yOiBPRFNfY29sb3JzX3llbGxvd18xLkRFRkFVTFRfQ09MT1JTX1lFTExPVy5jb2xvciB9LFxuICAgICAgICBvdWRzQmx1ZTogeyB2aXN1YWxNYXBDb2xvcjogT1VEU19jb2xvcnNfYmx1ZV8xLkRFRkFVTFRfT1VEU19DT0xPUlNfQkxVRS5jb2xvciB9LFxuICAgICAgICBvdWRzR3JlZW46IHsgdmlzdWFsTWFwQ29sb3I6IE9VRFNfY29sb3JzX2dyZWVuXzEuREVGQVVMVF9PVURTX0NPTE9SU19HUkVFTi5jb2xvciB9LFxuICAgICAgICBvdWRzUGluazogeyB2aXN1YWxNYXBDb2xvcjogT1VEU19jb2xvcnNfcGlua18xLkRFRkFVTFRfT1VEU19DT0xPUlNfUElOSy5jb2xvciB9LFxuICAgICAgICBvdWRzUHVycGxlOiB7IHZpc3VhbE1hcENvbG9yOiBPVURTX2NvbG9yc19wdXJwbGVfMS5ERUZBVUxUX09VRFNfQ09MT1JTX1BVUlBMRS5jb2xvciB9LFxuICAgICAgICBvdWRzWWVsbG93OiB7IHZpc3VhbE1hcENvbG9yOiBPVURTX2NvbG9yc195ZWxsb3dfMS5ERUZBVUxUX09VRFNfQ09MT1JTX1lFTExPVy5jb2xvciB9LFxuICAgICAgICBvdWRzQ2F0ZWdvcmljYWw6IHsgdmlzdWFsTWFwQ29sb3I6IE9VRFNfY29sb3JzX2NhdGVnb3JpY2FsXzEuREVGQVVMVF9PVURTX0NPTE9SU19DQVRFR09SSUNBTC5jb2xvciB9LFxuICAgICAgICBvdWRzRnVuY3Rpb25hbDogeyB2aXN1YWxNYXBDb2xvcjogT1VEU19jb2xvcnNfZnVuY3Rpb25hbF8xLkRFRkFVTFRfT1VEU19DT0xPUlNfRlVOQ1RJT05BTC5jb2xvciB9LFxuICAgICAgICBvdWRzSGlnaGxpZ2h0OiB7IHZpc3VhbE1hcENvbG9yOiBPVURTX2NvbG9yc19oaWdobGlnaHRfMS5ERUZBVUxUX09VRFNfQ09MT1JTX0hJR0hMSUdIVC5jb2xvciB9LFxuICAgICAgICBvdWRzU2luZ2xlOiB7IHZpc3VhbE1hcENvbG9yOiBPVURTX2NvbG9yc19zaW5nbGVfMS5ERUZBVUxUX09VRFNfQ09MT1JTX1NJTkdMRS5jb2xvciB9LFxuICAgIH0sXG4gICAgbGluZXNTdHlsZToge1xuICAgICAgICBicm9rZW46IE9EU19saW5lX3N0eWxlX2Jyb2tlbl8xLkNPTU1PTl9MSU5FX1NUWUxFX0JST0tFTixcbiAgICAgICAgd2l0aFBvaW50czogT0RTX2xpbmVfc3R5bGVfd2l0aF9wb2ludHNfMS5DT01NT05fTElORV9TVFlMRV9QT0lOVFMsXG4gICAgICAgIHNtb290aDogT0RTX2xpbmVfc3R5bGVfc21vb3RoXzEuQ09NTU9OX0xJTkVfU1RZTEVfU01PT1RILFxuICAgIH0sXG59O1xuLyoqXG4gKiBPRFNDaGFydHNUaGVtZSBpcyB0aGUgb2JqZWN0IGdldCBieSBgT0RTQ2hhcnRzLmdldFRoZW1lTWFuYWdlcmAoe0BsaW5rIE9EU0NoYXJ0c1RoZW1lT3B0aW9uc30pLCByZWZlciB0byB7QGxpbmsgT0RTQ2hhcnRzVGhlbWUuZ2V0VGhlbWVNYW5hZ2VyfVxuICpcbiAqIFRoaXMgbWFuYWdlciBpcyB1c2VkIHRvXG4gKiAtIGdldCB0aGUgT0RTIHRoZW1lLCByZWdpc3RlciBpdCwgYW5kIHVzZSBpdFxuICogYGBgXG4gKiAvLyByZWdpc3RlciB0aGlzIHRoZW1lIHRvIGVjaGFydHNcbiAqIGVjaGFydHMucmVnaXN0ZXJUaGVtZSh0aGVtZU1hbmFnZXIubmFtZSAsIHRoZW1lTWFuYWdlci50aGVtZSk7XG4gKiAvLyBpbml0aWF0ZSB0aGUgd2l0aCB0aGUgZ2VuZXJhdGVkIHRoZW1lXG4gKiB2YXIgbXlDaGFydCA9IGVjaGFydHMuaW5pdChkaXYsIHRoZW1lTWFuYWdlci5uYW1lKVxuICogYGBgXG4gKiAtIHRvIGJ1aWxkIHRoZSBncmFwaCBvcHRpb25zXG4gKiBgYGBcbiAqIC8vIFNldCB0aGUgZGF0YSB0byBiZSBkaXNwbGF5ZWQuXG4gKiB0aGVtZU1hbmFnZXIuc2V0RGF0YU9wdGlvbnMoPGRhdGFPcHRpb25zPik7XG4gKiAvLyBSZWdpc3RlciB0aGUgZXh0ZXJuYWxpemF0aW9uIG9mIHRoZSBsZWdlbmQuXG4gKiB0aGVtZU1hbmFnZXIuZXh0ZXJuYWxpemVMZWdlbmRzKC4uLik7XG4gKiAvLyBNYW5hZ2UgY2hhcnQgY29udGFpbmVyIHNpemUgY2hhbmdlZFxuICogdGhlbWVNYW5hZ2VyLm1hbmFnZUNoYXJ0UmVzaXplKC4uLik7XG4gKiAvLyBPYnNlcnZlIGRhcmsgLyBsaWdodCBtb2RlIGNoYW5nZXNcbiAqIHRoZW1lTWFuYWdlci5tYW5hZ2VUaGVtZU9ic2VydmVyKC4uLik7XG4gKiAvLyBSZWdpc3RlciB0aGUgZXh0ZXJuYWxpemF0aW9uIG9mIHRoZSB0b29sdGlwL3BvcHVwXG4gKiB0aGVtZU1hbmFnZXIuZXh0ZXJuYWxpemVQb3BvdmVyKC4uLik7XG4gKiAvLyBEaXNwbGF5IHRoZSBjaGFydCB1c2luZyB0aGUgY29uZmlndXJlZCB0aGVtZSBhbmQgZGF0YS5cbiAqIG15Q2hhcnQuc2V0T3B0aW9uKHRoZW1lTWFuYWdlci5nZXRDaGFydE9wdGlvbnMoKSk7XG4gKiBgYGBcbiAqXG4gKiBTZWUge0BsaW5rIE9EU0NoYXJ0c1RoZW1lLmdldFRoZW1lTWFuYWdlcn0gZm9yIGRldGFpbHMuXG4gKlxuICovXG5jbGFzcyBPRFNDaGFydHNUaGVtZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5pdGlhbFRoZW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gaW5pdGlhbFRoZW1lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYXJ0TGVnZW5kTWFuYWdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jaGFydFJlc2l6ZU1hbmFnZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2hhcnRQb3BvdmVyTWFuYWdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jaGFydFRoZW1lT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3NzVGhlbWVOYW1lID1cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNzc190aGVtZXNfMS5PRFNDaGFydHNDU1NUaGVtZXMpLmZpbmQoKG9uZVRoZW1lKSA9PiBjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzQ1NTVGhlbWVzW29uZVRoZW1lXSA9PT0gb3B0aW9ucy5jc3NUaGVtZSkgfHwgY3NzX3RoZW1lc18xLk9EU0NoYXJ0c0NTU1RoZW1lc05hbWVzLkNVU1RPTTtcbiAgICAgICAgdGhpcy5jc3NIZWxwZXIgPSBuZXcgY3NzX2hlbHBlcl8xLk9EU0NoYXJ0c0Nzc0hlbHBlcih0aGlzLm9wdGlvbnMuY3NzU2VsZWN0b3IsIHRoaXMub3B0aW9ucy5tb2RlLCB0aGlzLmNzc1RoZW1lTmFtZSk7XG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGlzLmNhbGN1bGF0ZVRoZW1lKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgaW4gY3VycmVudCB0aGVtZSBhbnkgY29sb3JzIHNwZWNpZnkgdGhyb3VnaCBhIGNzcyB2YXIgYnkgaXRzIGhleGEgdmFsdWUuXG4gICAgICogSW5pdGlhbGlzZWQgYSBtYXBwaW5nIGJldHdlZW4gYSBjc3MgdmFyIGFuZCBpdHMgaGF4ZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgdGhlbWUgYW5kIGRhcmsvbGlnaHQgbW9kZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgdXBkYXRlZCBjdXJyZW50IHRoZW1lXG4gICAgICovXG4gICAgY2FsY3VsYXRlVGhlbWUoKSB7XG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGlzLmNzc0hlbHBlci5yZXBsYWNlQWxsQ3NzVmFycygoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKHRoaXMuaW5pdGlhbFRoZW1lKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGRhcmsgb3IgbGlnaHQgbW9kZSBmcm9tIHRoZSBodG1sIGNvbG9yLXNjaGVtZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBkaXZUaGVtZSA6IGRpdiB1c2VkIGFzIGh0bWwgcmVmZXJlbmNlIGVsZW1lbnQgdG8gZGV0ZXJtaW5lIHRoZSBkYXJrL2xpZ2h0IG1vZGVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXREYXJrT3JMaWdodE1vZGUoZGl2VGhlbWUpIHtcbiAgICAgICAgbGV0IG1vZGUgPSBPRFNDaGFydHNNb2RlLkRFRkFVTFQ7XG4gICAgICAgIGlmIChkaXZUaGVtZSkge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdlRoZW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmRNb2RlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdjb2xvci1zY2hlbWUnKTtcbiAgICAgICAgICAgICAgICBpZiAoW09EU0NoYXJ0c01vZGUuREFSSywgT0RTQ2hhcnRzTW9kZS5MSUdIVF0uaW5jbHVkZXMoZm91bmRNb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gZm91bmRNb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW50cnkgcG9pbnQgb2YgdGhlIGxpYnJhcnkuXG4gICAgICpcbiAgICAgKiBPbmNlIHRoZSBsaWJyYXJ5IGludGVncmF0ZWQsIHZpYVxuICAgICAqIC0gc2NyaXB0IGA8c2NyaXB0IHNyYz1cIi4uLm9kcy1jaGFydHMuanNcIj5gXG4gICAgICogLSBvciBhbiBgaW1wb3J0IFxcKiBhcyBPRFNDaGFydHMgZnJvbSAnb2RzLWNoYXJ0cydgXG4gICAgICpcbiAgICAgKiB1c2UgYE9EU0NoYXJ0cy5nZXRUaGVtZU1hbmFnZXJgKHtAbGluayBPRFNDaGFydHNUaGVtZU9wdGlvbnN9KSB0byBnZXQgdGhlIHtAbGluayBPRFNDaGFydHNUaGVtZX0uXG4gICAgICpcbiAgICAgKiBJdCByZXR1cm5zIHRoZSBnZW5lcmF0ZWQgdGhlbWUgbWFuYWdlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgdXNlZCB0byBnZW5lcmF0ZSB0aGUgdGhlbWUuXG4gICAgICogQWxsIHRoZSBvcHRpb25zIHBhcmFtZXRlcnMgYXJlIG9wdGlvbmFsXG4gICAgICogLSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWVPcHRpb25zLmNvbG9yc306IGNvbG9ycyB0byBiZSB1c2VkIHRvIGdyYXBoIHRoZSBjaGFydC5cbiAgICAgKiAtIHtAbGluayBPRFNDaGFydHNUaGVtZU9wdGlvbnMuY3NzVGhlbWV9OiBvcHRpb25hbHkgaW5kaWNhdGVzIGEgZXh0ZXJuYWwgdGhlbWUgdG8gYmUgdXNlZCBsaWtlIGJvb3N0ZWQuXG4gICAgICogLSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWVPcHRpb25zLmNoYXJ0Q29uZmlndXJhdGlvbn06IHR5cGUgb2YgY2hhcnQgdXNpbmcgdGhpcyB0aGVtZSBhbmQgaXRzIGNvbmZpZ3VyYXRpb24uXG4gICAgICogLSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWVPcHRpb25zLmNzc1NlbGVjdG9yfTogc2VsZWN0b3Igb2YgdGhlIERPTSBlbGVtZW50IHdoZXJlIHRoZSBncmFwaCB3aWxsIGJlIGJ1aWx0LiBJdCBpcyB1c2VkXG4gICAgICogICAtIHRvIGdldCBjc3MgdmFyaWFibGUgdmFsdWVzIHdoZW4gdXNpbmcgYSB0aGlyZCBwYXJ0eSB0aGVtZSBnZW5lcmF0b3IgYmFzZSBvbiBjc3MgdmFyaWFibGUgbGlrZSBCb29zdGVkIDUuXG4gICAgICogICAtIHRvIGRldGVybWluZSBpZiB0aGUgZ3JhcGggaXMgZGlzcGxheWVkIGluIGRhcmsgb3IgbGlnaHQgbW9kZVxuICAgICAqIEByZXR1cm5zIHRoZSB0aGVtZSBtYW5hZ2VyLlxuICAgICAqIFRoaXMgbWFuYWdlciBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBBcGFjaGUgRUNoYXJ0cyB0aGVtZSBhbmQgbWFuYWdlIHRoZSBjaGFydCBvcHRpb25zIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgT3JhbmdlIERlc2lnbiBTeXN0ZW0uXG4gICAgICogSXQgaXMgdXNlZCB0byBhZGQgZmVhdHVyZXM6XG4gICAgICogLSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWUuZXh0ZXJuYWxpemVMZWdlbmRzfTogdG8gYWRkIE9yYW5nZSBEZXNpZ24gU3lzdGVtIHRoZW1lIHRvIGxlZ2VuZHMuXG4gICAgICogLSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWUuZXh0ZXJuYWxpemVQb3BvdmVyfTogdG8gYWRkIE9yYW5nZSBEZXNpZ24gU3lzdGVtIHRoZW1lIHRvIHBvcG92ZXIgb3IgdG9vbHRpcC5cbiAgICAgKiAtIHtAbGluayBPRFNDaGFydHNUaGVtZS5tYW5hZ2VDaGFydFJlc2l6ZX06IHRvIGR5bmFtaWNhbGx5IGFkYXB0IGdyYXBoIHNpemUgdGhlIGl0cyBjb250YWluZXIuXG4gICAgICogLSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWUubWFuYWdlVGhlbWVPYnNlcnZlcn06IHRvIGVuYWJsZSBhdXRvLXN3aXRjaCBiZXR3ZWVuIGRhcmsgYW5kIGxpZ2h0IG1vZGUuXG4gICAgICovXG4gICAgc3RhdGljIGdldFRoZW1lTWFuYWdlcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb2RlID0gT0RTQ2hhcnRzTW9kZS5ERUZBVUxUO1xuICAgICAgICBpZiAoIW9wdGlvbnMuY29sb3JzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNvbG9ycyA9IE9EU0NoYXJ0c0NvbG9yc1NldC5ERUZBVUxUO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5jaGFydENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhcnRDb25maWd1cmF0aW9uID0gb2RzX2NoYXJ0c18xLk9EU0NoYXJ0c0NvbmZpZ3VyYXRpb24uZ2V0RGVmYXVsdENoYXJ0Q29uZmlndXJhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5jc3NUaGVtZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5jc3NUaGVtZSA9IGNzc190aGVtZXNfMS5PRFNDaGFydHNDU1NUaGVtZXMuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuY3NzU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY3NzU2VsZWN0b3IgPSAnYm9keSc7XG4gICAgICAgIH1cbiAgICAgICAgbW9kZSA9IE9EU0NoYXJ0c1RoZW1lLmdldERhcmtPckxpZ2h0TW9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY3NzU2VsZWN0b3IpKTtcbiAgICAgICAgdmFyIHRoZW1lTmFtZSA9IGBvZHMuJHsoMCwgaGFzaF8xLmdldFN0cmluZ1ZhbHVlKShvcHRpb25zLmNvbG9ycyl9LiR7KDAsIGhhc2hfMS5nZXRTdHJpbmdWYWx1ZSkob3B0aW9ucy5jaGFydENvbmZpZ3VyYXRpb24pfWA7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gKDAsIGNsb25lX2RlZXBfb2JqZWN0XzEuY2xvbmVEZWVwT2JqZWN0KShPRFNfcHJvamVjdF8xLk9EU19QUk9KRUNUKTtcbiAgICAgICAgKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHRoZW1lLCAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKFRIRU1FLmNvbW1vbikpO1xuICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykodGhlbWUsICgwLCBjbG9uZV9kZWVwX29iamVjdF8xLmNsb25lRGVlcE9iamVjdCkoVEhFTUUubGluZXNBeGlzKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2xvcnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykodGhlbWUsICgwLCBjbG9uZV9kZWVwX29iamVjdF8xLmNsb25lRGVlcE9iamVjdCkoVEhFTUUuY29sb3JzW29wdGlvbnMuY29sb3JzXSkpO1xuICAgICAgICAgICAgKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHRoZW1lLCAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKFRIRU1FLnZpc3VhbE1hcENvbG9yc1tvcHRpb25zLmNvbG9yc10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICgwLCBtZXJnZV9vYmplY3RzXzEubWVyZ2VPYmplY3RzKSh0aGVtZSwgKDAsIGNsb25lX2RlZXBfb2JqZWN0XzEuY2xvbmVEZWVwT2JqZWN0KSh7XG4gICAgICAgICAgICAgICAgY29sb3I6IG9wdGlvbnMuY29sb3JzLm1hcCgoY29sb3IpID0+ICgnc3RyaW5nJyA9PT0gdHlwZW9mIGNvbG9yID8gY29sb3IgOiBUSEVNRS5jb2xvcnNbY29sb3IuY29sb3JQYWxldHRlXS5jb2xvcltjb2xvci5jb2xvckluZGV4XSkpLFxuICAgICAgICAgICAgICAgIHZpc3VhbE1hcENvbG9yOiBvcHRpb25zLmNvbG9ycy5tYXAoKGNvbG9yKSA9PiAnc3RyaW5nJyA9PT0gdHlwZW9mIGNvbG9yID8gY29sb3IgOiBUSEVNRS52aXN1YWxNYXBDb2xvcnNbY29sb3IuY29sb3JQYWxldHRlXS52aXN1YWxNYXBDb2xvcltjb2xvci5jb2xvckluZGV4XSksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHRoZW1lLCAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKFRIRU1FLmxpbmVzU3R5bGVbb3B0aW9ucy5jaGFydENvbmZpZ3VyYXRpb24ubGluZVN0eWxlXG4gICAgICAgICAgICA/IG9wdGlvbnMuY2hhcnRDb25maWd1cmF0aW9uLmxpbmVTdHlsZVxuICAgICAgICAgICAgOiBvcHRpb25zLmxpbmVTdHlsZVxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5saW5lU3R5bGVcbiAgICAgICAgICAgICAgICA6IE9EU0NoYXJ0c0xpbmVTdHlsZS5TTU9PVEhdKSk7XG4gICAgICAgIHJldHVybiBuZXcgT0RTQ2hhcnRzVGhlbWUoKDAsIGhhc2hfMS5idWlsZEhhc2gpKHRoZW1lTmFtZSksIHRoZW1lLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG1vZGUgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIG9yaWdpbmFsIFtBcGFjaGUgRWNoYXJ0cyBkYXRhIG9wdGlvbnNdKGh0dHBzOi8vZWNoYXJ0cy5hcGFjaGUub3JnL2VuL29wdGlvbi5odG1sKSBvZiB5b3VyIGdyYXBoLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiBgYGBcbiAgICAgKiAgICAgbGluZUNoYXJ0T0RTVGhlbWVcbiAgICAgKiAgICAgICAuc2V0RGF0YU9wdGlvbnMoe1xuICAgICAqICAgICAgICAgeEF4aXM6IHtcbiAgICAgKiAgICAgICAgICAgZGF0YTogWydzaGlydCcsICdjYXJkaWdhbicsICdjaGlmZm9uJywgJ3BhbnRzJywgJ2hlZWxzJywgJ3NvY2tzJ10sXG4gICAgICogICAgICAgICB9LFxuICAgICAqICAgICAgICAgc2VyaWVzOiBbXG4gICAgICogICAgICAgICAgIHtcbiAgICAgKiAgICAgICAgICAgICBuYW1lOiAnc2FsZXMnLFxuICAgICAqICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAqICAgICAgICAgICAgIGRhdGE6IFs1LCAyMCwgMzYsIDEwLCAxMCwgMjBdLFxuICAgICAqICAgICAgICAgICB9LFxuICAgICAqICAgICAgICAgXSxcbiAgICAgKiAgICAgICB9KVxuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBbQXBhY2hlIEVjaGFydHMgZGF0YSBvcHRpb25zXShodHRwczovL2VjaGFydHMuYXBhY2hlLm9yZy9lbi9vcHRpb24uaHRtbCkgb2YgeW91ciBncmFwaC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdGhlbWUgbWFuYWdlciBvYmplY3RcbiAgICAgKi9cbiAgICBzZXREYXRhT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGhlbWVDb2xvcnMgOiBjb2xvcnMgc2V0IHRvIGJlIHVzZWQgYnkgZGVmYXVsdFxuICAgICAqIEBwYXJhbSBkYXRhT3B0aW9ucyA6IGRhdGFPcHRpb25zIHRoYXQgbWF5IGNvbnRlbnQgc3BlY2lmaWMgY29sb3IgZm9yIG9uZSBkYXRhIHNlcmllXG4gICAgICogQHJldHVybnMgOiBhcnJheSBvZiBjb2xvcnNcbiAgICAgKi9cbiAgICBnZXREaXNwbGF5ZWRDb2xvcnModGhlbWVDb2xvcnMsIGRhdGFPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9ICgwLCBjbG9uZV9kZWVwX29iamVjdF8xLmNsb25lRGVlcE9iamVjdCkodGhlbWVDb2xvcnMpO1xuICAgICAgICBpZiAoZGF0YU9wdGlvbnMgJiYgZGF0YU9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzZXJpZUluZGV4ID0gMDsgc2VyaWVJbmRleCA8IGRhdGFPcHRpb25zLnNlcmllcy5sZW5ndGg7IHNlcmllSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmllID0gZGF0YU9wdGlvbnMuc2VyaWVzW3NlcmllSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChzZXJpZS5pdGVtU3R5bGUgJiYgc2VyaWUuaXRlbVN0eWxlLmNvbG9yICYmIHNlcmllLml0ZW1TdHlsZS5jb2xvciAhPT0gY29sb3JzW3NlcmllSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ29sb3JJbmRleCA9IGNvbG9ycy5pbmRleE9mKHNlcmllLml0ZW1TdHlsZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0NvbG9ySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLnNwbGljZShwcmV2aW91c0NvbG9ySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5zcGxpY2Uoc2VyaWVJbmRleCwgMCwgc2VyaWUuaXRlbVN0eWxlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXMgaXQgc2VlbXMgbm90IHBvc3NpYmxlIHRvIHVwZGF0ZSBhIHRoZW1lIGFmdGVyIHRoZSBjaGFydHMgd2FzIGluaXRpYWxpemVkLFxuICAgICAqIHRoaXMgbWV0aG9kIGNhbGN1bGF0ZSB0aGUgbmV3IHRoZW1lIHZhbHVlcyBhbmQgdXBkYXRlIHRoZXNlIHZhbHVlcyBkaXJlY3RseSBpbnNpZGUgdGhlXG4gICAgICogdGhlbWVPcHRpb25zIHRoYXQgd2lsbCBiZSBtZXJnZSB3aXRoIHRoZSBkYXRhT3B0aW9ucyB0byB1cGRhdGUgdGhlIGNoYXJ0cyBvcHRpb25zIHdpdGhcbiAgICAgKiB0aGlzIG5ldyBjaGFydE9wdGlvbnNcbiAgICAgKiBAcGFyYW0gdGhlbWVPcHRpb25zIHRoZSBiYXNpYyB0aGVtZU9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB0aGlzLnRoZW1lLCB0aGUgbmV3IGdsb2JhbCB0aGVtZSBjYWxjdWxhdGVkLlxuICAgICAqL1xuICAgIGNhbGN1bGF0ZU5ld1RoZW1lQW5kQWRkSXRJblRoZW1lT3B0aW9ucyh0aGVtZU9wdGlvbnMsIGRhdGFPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG5ld1RoZW1lID0gdGhpcy5jYWxjdWxhdGVUaGVtZSgpO1xuICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykodGhlbWVPcHRpb25zLCB7XG4gICAgICAgICAgICBjb2xvcjogbmV3VGhlbWUuY29sb3IsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ld1RoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIHRpdGxlOiBuZXdUaGVtZS50aXRsZSxcbiAgICAgICAgICAgIGdyaWQ6IHsgdG9vbHRpcDogbmV3VGhlbWUudG9vbHRpcCB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGFPcHRpb25zLnRvb2xib3gpIHtcbiAgICAgICAgICAgIHRoZW1lT3B0aW9ucy50b29sYm94ID0gbmV3VGhlbWUudG9vbGJveDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YU9wdGlvbnMudGltZWxpbmUpIHtcbiAgICAgICAgICAgIHRoZW1lT3B0aW9ucy50aW1lbGluZSA9IG5ld1RoZW1lLnRpbWVsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogY2hlY2sgdGhlIG1hcHBpbmcgb2YgcmFkYXJcbiAgICAgICAgLy8gdGhlbWVPcHRpb25zLnJhZGFyID0gbmV3VGhlbWUucmFkYXI7XG4gICAgICAgIC8vVE9ETzogIG1pc3NpbmcgcGFyYWxsZWwgbWFwcGluZ1xuICAgICAgICAvLyB0aGVtZU9wdGlvbnMucGFyYWxsZWwgPSBuZXdUaGVtZS5wYXJhbGxlbDtcbiAgICAgICAgLy9UT0RPOiBjaGVjayB0aGUgbWFwcGluZyBvZiBnZW9cbiAgICAgICAgLy8gdGhlbWVPcHRpb25zLmdlbyA9IG5ld1RoZW1lLmdlbztcbiAgICAgICAgaWYgKGRhdGFPcHRpb25zLnNlcmllcykge1xuICAgICAgICAgICAgdGhlbWVPcHRpb25zLnNlcmllcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGFPcHRpb25zLnNlcmllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGFPcHRpb25zLnNlcmllc1tpbmRleF0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lT3B0aW9ucy5zZXJpZXNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBuZXdUaGVtZS5saW5lKSwgeyBtYXJrUG9pbnQ6IG5ld1RoZW1lLm1hcmtQb2ludCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdiYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zLnNlcmllc1tpbmRleF0gPSBuZXdUaGVtZS5iYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGllJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lT3B0aW9ucy5zZXJpZXNbaW5kZXhdID0gbmV3VGhlbWUucGllO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NjYXR0ZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zLnNlcmllc1tpbmRleF0gPSBuZXdUaGVtZS5zY2F0dGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JveHBsb3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zLnNlcmllc1tpbmRleF0gPSBuZXdUaGVtZS5ib3hwbG90O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhbmtleSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnMuc2VyaWVzW2luZGV4XSA9IG5ld1RoZW1lLnNhbmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zLnNlcmllc1tpbmRleF0gPSBuZXdUaGVtZS5mdW5uZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZ2F1Z2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zLnNlcmllc1tpbmRleF0gPSBuZXdUaGVtZS5nYXVnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYW5kbGVzdGljayc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnMuc2VyaWVzW2luZGV4XSA9IG5ld1RoZW1lLmNhbmRsZXN0aWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2dyYXBoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lT3B0aW9ucy5zZXJpZXNbaW5kZXhdID0gbmV3VGhlbWUuZ3JhcGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndHJlZW1hcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnMuc2VyaWVzW2luZGV4XSA9IG5ld1RoZW1lLm1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YU9wdGlvbnMudmlzdWFsTWFwKSB7XG4gICAgICAgICAgICB0aGVtZU9wdGlvbnMudmlzdWFsTWFwID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YU9wdGlvbnMuc2VyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoZW1lT3B0aW9ucy52aXN1YWxNYXBbaW5kZXhdID0gbmV3VGhlbWUudmlzdWFsTWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgYXhpc1R5cGUgb2YgWyd4QXhpcycsICd5QXhpcyddKSB7XG4gICAgICAgICAgICBpZiAoZGF0YU9wdGlvbnNbYXhpc1R5cGVdKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhT3B0aW9uc1theGlzVHlwZV0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYXRlZ29yeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnNbYXhpc1R5cGVdID0gKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHRoZW1lT3B0aW9uc1theGlzVHlwZV0sIG5ld1RoZW1lLmNhdGVnb3J5QXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zW2F4aXNUeXBlXSA9ICgwLCBtZXJnZV9vYmplY3RzXzEubWVyZ2VPYmplY3RzKSh0aGVtZU9wdGlvbnNbYXhpc1R5cGVdLCBuZXdUaGVtZS52YWx1ZUF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnNbYXhpc1R5cGVdID0gKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHRoZW1lT3B0aW9uc1theGlzVHlwZV0sIG5ld1RoZW1lLmxvZ0F4aXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zW2F4aXNUeXBlXSA9ICgwLCBtZXJnZV9vYmplY3RzXzEubWVyZ2VPYmplY3RzKSh0aGVtZU9wdGlvbnNbYXhpc1R5cGVdLCBuZXdUaGVtZS50aW1lQXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RoZW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXRUaGVtZU9wdGlvbnMoKSBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gY2hhcnRzIG9wdGlvbnMgdG8gaW1wbGVtZW50IHRoZSBPcmFuZ2UgRGVzaWduIFN5c3RlbS5cbiAgICAgKlxuICAgICAqIGdldFRoZW1lT3B0aW9ucygpIG5lZWRzIGdyYXBoIGRhdGEgdG8gYmUgYWxyZWFkeSBzZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhZGRHbG9iYWxUaGVtZU9wdGlvbnMgaW5kaWNhdGVzIGlmIHRoZSBzcGVjaWZpY2l0aWVzIG9mIHRoZSBnbG9iYWwgdGhlbWUgdXNlZCBpbiB0aGUgY2hhcnQgaW5pdCBtZXRob2RcbiAgICAgKiBAcmV0dXJucyBtb2RpZmljYXRpb25zIHRvIGJlIG1hZGUgdG8gdGhlIFtBcGFjaGUgRWNoYXJ0cyBkYXRhIG9wdGlvbnNdKGh0dHBzOi8vZWNoYXJ0cy5hcGFjaGUub3JnL2VuL29wdGlvbi5odG1sKSB0byBpbXBsZW1lbnQgdGhlIE9yYW5nZSBEZXNpZ24gU3lzdGVtIGFuZCBkYXRhT3B0aW9ucyB3aXRoIGNzcyB2YXJzIHJlcGxhY2VkLlxuICAgICAqL1xuICAgIGdldFRoZW1lT3B0aW9ucyhhZGRHbG9iYWxUaGVtZU9wdGlvbnMgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGNoYXJ0IGJhc2ljIG9wdGlvbnMgbXVzdCBiZSBzZXQgdG8gZ2V0IHRoZSB0aGVtZSBjb21wbGV0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhcnRUaGVtZU9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kZSA9IE9EU0NoYXJ0c1RoZW1lLmdldERhcmtPckxpZ2h0TW9kZSh0aGlzLmNoYXJ0VGhlbWVPYnNlcnZlci5hZGRUaGVtZU9ic2VydmVyKCkpO1xuICAgICAgICAgICAgdGhpcy5jc3NIZWxwZXIuY2hhbmdlVGhlbWVNb2RlKHRoaXMub3B0aW9ucy5tb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYXNJbml0aWFsaXplZENvbXBpdGVkU3R5bGUgPSB0aGlzLmNzc0hlbHBlci5pbml0Q29tcHV0ZWRTdHlsZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBjb3B5IGRhdGFPcHRpb25zIGFzIHRoZW1lIGZlYXR1cmUgbWF5IGNoYW5nZSB0aGUgb3JpZ2luYWwgZGF0YU9wdGlvbnNcbiAgICAgICAgICAgIC8vIG9ubHkgbWFrZSBhbiBhc2lnbiBhdCB0aGUgZmlyc3QgbGV2ZWwgaW4gb3JkZXIgdG8gYXZvaWQgZGVlcCBjb3B5IG9mIGFsbCBkYXRhXG4gICAgICAgICAgICAvLyBlYWNoIGZlYXR1cmUgaXMgcmVzcG9uc2libGUgdG8gZGVlcCBjb3B5IHRoZSBjaGFuZ2VkIHBhcnQgYWNjb3JkaW5nIHRvIHRoZWlyIGNoYW5nZXMuXG4gICAgICAgICAgICAvLyBBbHNvIG1ha2UgYSBkZWVwIGNvcHkgd2hlbiBuZWVkZWQgdG8gcmVwbGFjZSBhbnkgY3NzIHZhclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZERhdGFPcHRpb25zRm9yVGhlbWUgPSB0aGlzLmNzc0hlbHBlci5jbG9uZUFuZFJlcGxhY2VBbGxDc3NWYXJzKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YU9wdGlvbnMpKTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXNMYWJlbCA9IHtcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBPRFNDaGFydHNNb2RlLkRFRkFVTFQgPT09IHRoaXMub3B0aW9ucy5tb2RlXG4gICAgICAgICAgICAgICAgICAgID8gJ3ZhcigtLWJzLWJvZHktY29sb3IsICMwMDApJ1xuICAgICAgICAgICAgICAgICAgICA6IE9EU0NoYXJ0c01vZGUuTElHSFQgPT09IHRoaXMub3B0aW9ucy5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd2YXIoLS1icy1ibGFjaywgIzAwMCknXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICd2YXIoLS1icy13aGl0ZSwgI2ZmZiknLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXNMaW5lID0ge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogT0RTQ2hhcnRzTW9kZS5ERUZBVUxUID09PSB0aGlzLm9wdGlvbnMubW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAndmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjYyknXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE9EU0NoYXJ0c01vZGUuTElHSFQgPT09IHRoaXMub3B0aW9ucy5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndmFyKC0tYnMtZ3JheS01MDAsICNjY2MpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ZhcigtLWJzLWdyYXktNzAwLCAjNjY2KScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzcGxpdExpbmUgPSB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBPRFNDaGFydHNNb2RlLkRFRkFVTFQgPT09IHRoaXMub3B0aW9ucy5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd2YXIoLS1icy1ib3JkZXItY29sb3Itc3VidGxlLCAjY2NjKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT0RTQ2hhcnRzTW9kZS5MSUdIVCA9PT0gdGhpcy5vcHRpb25zLm1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd2YXIoLS1icy1ncmF5LTUwMCwgI2NjYyknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndmFyKC0tYnMtZ3JheS03MDAsICM2NjYpJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBPRFNDaGFydHNNb2RlLkRFRkFVTFQgPT09IHRoaXMub3B0aW9ucy5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd2YXIoLS1icy1ib2R5LWNvbG9yLCAjMDAwKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT0RTQ2hhcnRzTW9kZS5MSUdIVCA9PT0gdGhpcy5vcHRpb25zLm1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd2YXIoLS1icy1ibGFjaywgIzAwMCknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndmFyKC0tYnMtd2hpdGUsICNmZmYpJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGljb246ICdyZWN0JyxcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDEwLFxuICAgICAgICAgICAgICAgIGl0ZW1IZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogT0RTQ2hhcnRzTW9kZS5ERUZBVUxUID09PSB0aGlzLm9wdGlvbnMubW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAndmFyKC0tYnMtYm9keS1jb2xvciwgIzAwMCknXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE9EU0NoYXJ0c01vZGUuTElHSFQgPT09IHRoaXMub3B0aW9ucy5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndmFyKC0tYnMtYmxhY2ssICMwMDApJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ZhcigtLWJzLXdoaXRlLCAjZmZmKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHRoZW1lT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB4QXhpczogeyBheGlzTGFiZWw6ICgwLCBjbG9uZV9kZWVwX29iamVjdF8xLmNsb25lRGVlcE9iamVjdCkoYXhpc0xhYmVsKSB9LFxuICAgICAgICAgICAgICAgIHlBeGlzOiB7IGF4aXNMYWJlbDogKDAsIGNsb25lX2RlZXBfb2JqZWN0XzEuY2xvbmVEZWVwT2JqZWN0KShheGlzTGFiZWwpIH0sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKGxlZ2VuZCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHVzZWRUaGVtZSA9IGFkZEdsb2JhbFRoZW1lT3B0aW9ucyA/IHRoaXMuY2FsY3VsYXRlTmV3VGhlbWVBbmRBZGRJdEluVGhlbWVPcHRpb25zKHRoZW1lT3B0aW9ucywgdXBkYXRlZERhdGFPcHRpb25zRm9yVGhlbWUpIDogdGhpcy50aGVtZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbJ3hBeGlzJywgJ3lBeGlzJ10pIHtcbiAgICAgICAgICAgICAgICBpZiAoISgwLCBtYWluX2F4aXNfdHlwZV9jb25zdF8xLmlzTWFpbkF4aXMpKHVwZGF0ZWREYXRhT3B0aW9uc0ZvclRoZW1lW2F4aXNdKSAmJiAhKHVwZGF0ZWREYXRhT3B0aW9uc0ZvclRoZW1lW2F4aXNdICYmIHVwZGF0ZWREYXRhT3B0aW9uc0ZvclRoZW1lW2F4aXNdLmF4aXNMaW5lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnNbYXhpc10uYXhpc0xpbmUgPSB7IHNob3c6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lT3B0aW9uc1theGlzXS5zcGxpdExpbmUgPSB7IHNob3c6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZU9wdGlvbnNbYXhpc10uYXhpc0xpbmUgPSAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKGF4aXNMaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWVPcHRpb25zW2F4aXNdLnNwbGl0TGluZSA9ICgwLCBjbG9uZV9kZWVwX29iamVjdF8xLmNsb25lRGVlcE9iamVjdCkoc3BsaXRMaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWRDb2xvcnMgPSB0aGlzLmdldERpc3BsYXllZENvbG9ycyh1c2VkVGhlbWUuY29sb3IsIHVwZGF0ZWREYXRhT3B0aW9uc0ZvclRoZW1lKTtcbiAgICAgICAgICAgIHRoZW1lT3B0aW9ucyA9IHRoaXMuY3NzSGVscGVyLnJlcGxhY2VBbGxDc3NWYXJzKHRoZW1lT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFydExlZ2VuZE1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0TGVnZW5kTWFuYWdlci5hZGRMZWdlbmQodXBkYXRlZERhdGFPcHRpb25zRm9yVGhlbWUsIGRpc3BsYXllZENvbG9ycywgdGhpcy5vcHRpb25zLmNzc1RoZW1lLCB0aGlzLmNzc1RoZW1lTmFtZSwgdGhpcy5vcHRpb25zLm1vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGluaXQgTGVnZW5kIE1hbmFnZXInLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcnRSZXNpemVNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydFJlc2l6ZU1hbmFnZXIuYWRkUmVzaXplTWFuYWdlbWVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGluaXQgUmVzaXplIE1hbmFnZXInLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcnRQb3BvdmVyTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRQb3BvdmVyTWFuYWdlci5hZGRQb3BvdmVyTWFuYWdlbWVudCh1cGRhdGVkRGF0YU9wdGlvbnNGb3JUaGVtZSwgdGhlbWVPcHRpb25zLCB0aGlzLm9wdGlvbnMuY3NzVGhlbWUsIHRoaXMuY3NzVGhlbWVOYW1lLCB0aGlzLm9wdGlvbnMubW9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gaW5pdCBQb3BvdmVyIE1hbmFnZXInLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdGhlbWVPcHRpb25zLCBkYXRhT3B0aW9uczogdXBkYXRlZERhdGFPcHRpb25zRm9yVGhlbWUgfTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChoYXNJbml0aWFsaXplZENvbXBpdGVkU3R5bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNzc0hlbHBlci5yZW1vdmVDb21wdXRlZFN0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogZXh0ZXJuYWxpemVMZWdlbmRzKCkgY29uZmlndXJlIHRoZSBtYW5hZ2VyIHRvIGV4dGVybmFsaXplIHRoZSBsZWdlbmRzIGZyb20gdGhlIGdyYXBocyB0byBwdXQgaXQgZGlyZWN0bHkgaW4geW91ciBIVE1MIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogVGhlIGdlbmVyYXRlZCBsZWdlbmRzXG4gICAgICogLSB3aWxsIGltcGxlbWVudCB0aGUgT3JhbmdlIERlc2lnbiBTeXN0ZW1cbiAgICAgKiAtIHdpbGwgYmUgbGluayB3aXRoIHRoZSBncmFwaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlY2hhcnQgdGhlIGluaXRpYWxpemVkIGVDaGFydHMgb2JqZWN0XG4gICAgICogQHBhcmFtIGxlZ2VuZEhvbGRlclNlbGVjdG9yXG4gICAgICogbGVnZW5kSG9sZGVyU2VsZWN0b3IgY2FuIGJlOlxuICAgICAqIC0gYSBzdHJpbmcsIGFuZCB0aGVuIGlzIGludGVycHJldGVkIGFzIHRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIGxlZ2VuZHMgY29udGFpbmVyXG4gICAgICogLSBhIHtAbGluayBPRFNDaGFydHNMZWdlbmRIb2xkZXJEZWZpbml0aW9ufSBpZiB5b3Ugd2FudCB0byBzZXBjaWZ5IHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgbGVnZW5kcyBob2xkZXIgb3Igc3BlY2lmeSB0aGUgc2VyaWVzIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbGVnZW5kcyBob2xkZXJcbiAgICAgKiAtIGFuIGFycmF5IG9mIHtAbGluayBPRFNDaGFydHNMZWdlbmRIb2xkZXJEZWZpbml0aW9ufSBpZiB5b3Ugd2FudCB0byBncm91cCBsZWdlbmRzIGluIHNldmVyYWwgbGVnZW5kcyBob2xkZXJzXG4gICAgICogQHJldHVybnMgdGhlIHRoZW1lIG1hbmFnZXIgb2JqZWN0IGl0c2VsZiB0byBiZSBhYmxlIHRvIGNoYWluIGNhbGxzLlxuICAgICAqL1xuICAgIGV4dGVybmFsaXplTGVnZW5kcyhlY2hhcnQsIGxlZ2VuZEhvbGRlclNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY2hhcnRMZWdlbmRNYW5hZ2VyID0gb2RzX2NoYXJ0X2xlZ2VuZHNfMS5PRFNDaGFydHNMZWdlbmRzLmFkZExlZ2VuZChlY2hhcnQsIGxlZ2VuZEhvbGRlclNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGV4dGVybmFsaXplUG9wb3ZlcigpIGNvbmZpZ3VyZSB0aGUgbWFuYWdlciB0byBleHRlcm5hbGl6ZSB0aGUgbWFuYWdlbWVudCBvZiBwb3BvdmVyIG9yIHRvb2x0aXAuXG4gICAgICpcbiAgICAgKiBUaGUgZ2VuZXJhdGVkIHRvb2x0aXBzIG9yIHBvcG92ZXIgd2lsbCBpbXBsZW1lbnQgdGhlIE9yYW5nZSBEZXNpZ24gU3lzdGVtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBvcG92ZXJDb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGV4dGVybmFsaXplUG9wb3ZlciBmZWF0dXJlIHtAbGluayBPRFNDaGFydHNQb3BvdmVyQ29uZmlnfVxuICAgICAqIEBwYXJhbSBwb3BvdmVyRGVmaW5pdGlvbiByZW5kZXJlciB7QGxpbmsgT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb259IG9mIHRoZSBwb3BvdmVyL3Rvb2x0aXAuICoqe0BsaW5rIE9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vyc30qKiBpcyB1c2VkIHRvXG4gICAgICogc3BlY2lmeSBwcmVjb25maWd1cmVkIHJlbmRlcmVyIGZvciBBcGFjaGUgRUNoYXJ0cywgQm9vc3RlZCA1IG9yIEJvb3N0ZWQgNC5cbiAgICAgKlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMge0BsaW5rIE9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vyc30uTk9ORSwgdGhhdCBtZWFucyBpdCB1c2VzIGRlZmF1bHQgQXBhY2hlIEVDaGFydHMgdGVtcGxhdGUgdG8gZXh0ZXJuYWxpemUgdG9vbHRpcC9wb3BvdmVyIEhUTUwgZWxlbWVudCwgaW1wbGVtZW50aW5nIE9yYW5nZSBEZXNpZ24gc3lzdGVtLlxuICAgICAqXG4gICAgICogKipXQVJOSU5HKio6IEJvb3N0ZWQgNCBvciBCb29zdGVkIDUgcmVuZGVyaW5nIHJlcXVpcmVzIGRlcGVuZGVuY3kgb24gdGhlIGJvb3N0ZWQgbGlicmFyeSBhbmQgYWNjZXNzIHRvIHRoZSBib29zdGVkIGdsb2JhbCB2YXJpYWJsZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgdGhlbWUgbWFuYWdlciBvYmplY3QgaXRzZWxmIHRvIGJlIGFibGUgdG8gY2hhaW4gY2FsbHMuXG4gICAgICovXG4gICAgZXh0ZXJuYWxpemVQb3BvdmVyKHBvcG92ZXJDb25maWcgPSB7fSwgcG9wb3ZlckRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKCFwb3BvdmVyRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgcG9wb3ZlckRlZmluaXRpb24gPSBvZHNfY2hhcnRfcG9wb3Zlcl9kZWZpbml0aW9uc18xLk9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vycy5OT05FO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcnRQb3BvdmVyTWFuYWdlciA9IG9kc19jaGFydF9wb3BvdmVyXzEuT0RTQ2hhcnRzUG9wb3Zlci5hZGRQb3BvdmVyTWFuYWdlbWVudChwb3BvdmVyRGVmaW5pdGlvbiwgcG9wb3ZlckNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBtYW5hZ2VDaGFydFJlc2l6ZSgpIGVuc3VyZXMgdGhhdCB0aGUgZ3JhcGggcmVzaXplcyBjb3JyZWN0bHkgd2hlbiBpdHMgY29udGFpbmVyIGlzIHJlc2l6ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlY2hhcnQgdGhlIGluaXRpYWxpemVkIGVDaGFydHMgb2JqZWN0LlxuICAgICAqIEBwYXJhbSBjaGFydElkIGFuIHVuaXF1ZSBpZCB0aGF0IGlkZW50aWZ5IHRoZSBjaGFydCBjb250YWluZXIgaW4gdGhlIERPTS5cbiAgICAgKiBAcmV0dXJucyB0aGUgdGhlbWUgbWFuYWdlciBvYmplY3QgaXRzZWxmIHRvIGJlIGFibGUgdG8gY2hhaW4gY2FsbHMuXG4gICAgICovXG4gICAgbWFuYWdlQ2hhcnRSZXNpemUoZWNoYXJ0LCBjaGFydElkKSB7XG4gICAgICAgIHRoaXMuY2hhcnRSZXNpemVNYW5hZ2VyID0gb2RzX2NoYXJ0X3Jlc2l6ZV8xLk9EU0NoYXJ0c1Jlc2l6ZS5hZGRSZXNpemVNYW5hZ2VtZW50KGVjaGFydCwgY2hhcnRJZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBtYW5hZ2VUaGVtZU9ic2VydmVyKCkgaXMgdXNlZCB0byBlbmFibGUgYXV0by1zd2l0Y2ggYmV0d2VlbiBkYXJrIGFuZCBsaWdodCBtb2RlLlxuICAgICAqIEl0IG9ic2VydmUgdGhlIGNsb3Nlc3QgZWxlbWVudCB3aXRoIGEgZGF0YS1icy10aGVtZSBpbmRpY2F0b3IgdG9cbiAgICAgKiBhZGFwdCB0aGUgZ3JhcGggY29sb3VyIHRvIHRoZSBuZXcgdGhlbWUuXG4gICAgICogQHBhcmFtIGVjaGFydCB0aGUgaW5pdGlhbGl6ZWQgZUNoYXJ0cyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyByZXR1cm5zIGJhY2sgdGhlIHRoZW1lIG1hbmFnZXIgb2JqZWN0XG4gICAgICovXG4gICAgbWFuYWdlVGhlbWVPYnNlcnZlcihlY2hhcnQpIHtcbiAgICAgICAgdGhpcy5jaGFydFRoZW1lT2JzZXJ2ZXIgPSBvZHNfY2hhcnRzX3RoZW1lX29ic2VydmVyXzEuT0RTQ2hhcnRzVGhlbWVPYnNlcnZlci5hZGRUaGVtZU9ic2VydmVyKGVjaGFydCwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdXBkYXRlIGNoYXJ0IG9wdGlvbnMgd2l0aCB0aGVtZSBvcHRpb25zIGVucmljaGVkIHdpdGggdmFsdWVzXG4gICAgICAgICAgICAvLyBmcm9tIGEgbmV3bHkgY2FsY3VsYXRlZCBnbG9iYWwgdGhlbWVcbiAgICAgICAgICAgIGVjaGFydC5zZXRPcHRpb24odGhpcy5nZXRDaGFydE9wdGlvbnModHJ1ZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldENoYXJ0T3B0aW9ucygpIGJ1aWxkIHRoZSBlQ2hhcnRzIG9wdGlvbnMgbWVyZ2luZ1xuICAgICAqIC0gb3B0aW9ucyBpbXBsZW1lbnRpbmcgdGhlIE9yYW5nZSBEZXNpZ24gU3lzdGVtIHtAbGluayBPRFNDaGFydHNUaGVtZU9wdGlvbnN9XG4gICAgICogLSBvcHRpb25hbGx5IG9wdGlvbnMgaW1wbGVtZW50aW5nIHtAbGluayBleHRlcm5hbGl6ZUxlZ2VuZHN9LFxuICAgICAqIC0gb3B0aW9uYWxseSBvcHRpb25zIGltcGxlbWVudGluZyB7QGxpbmsgZXh0ZXJuYWxpemVQb3BvdmVyfSxcbiAgICAgKiAtIG9wdGlvbmFsbHkgb3B0aW9ucyBpbXBsZW1lbnRpbmcge0BsaW5rIG1hbmFnZUNoYXJ0UmVzaXplfSxcbiAgICAgKiAtIG9wdGlvbmFsbHkgb3B0aW9ucyBpbXBsZW1lbnRpbmcge0BsaW5rIG1hbmFnZVRoZW1lT2JzZXJ2ZXJ9LFxuICAgICAqIC0gZGF0YSBmcm9tIHtAbGluayBzZXREYXRhT3B0aW9uc31cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhZGRHbG9iYWxUaGVtZU9wdGlvbnMgaW5kaWNhdGVzIGlmIHRoZSBzcGVjaWZpY2l0aWVzIG9mIHRoZSBnbG9iYWwgdGhlbWUgdXNlZCBpbiB0aGUgY2hhcnQgaW5pdCBtZXRob2RcbiAgICAgKiBtdXN0IGJlIGFkZGVkIGluIHRoZSBvcHRpb25zIG9mIHRoZSBjaGFydFxuICAgICAqIEByZXR1cm5zIHRoZSBBcGFjaGUgRUNoYXJ0cyBvcHRpb25zIHRvIHVzZSBpbiBbQXBhY2hlIEVjaGFydHMgYHNldE9wdGlvbigpYF0oaHR0cHM6Ly9lY2hhcnRzLmFwYWNoZS5vcmcvZW4vb3B0aW9uLmh0bWwpIGNhbGwuXG4gICAgICovXG4gICAgZ2V0Q2hhcnRPcHRpb25zKGFkZEdsb2JhbFRoZW1lT3B0aW9ucyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhT3B0aW9ucykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgY2hhcnQgYmFzaWMgb3B0aW9ucyBtdXN0IGJlIHNldCB0byBnZXQgdGhlIHRoZW1lIGNvbXBsZXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRoZW1lT3B0aW9ucywgZGF0YU9wdGlvbnMgfSA9IHRoaXMuZ2V0VGhlbWVPcHRpb25zKGFkZEdsb2JhbFRoZW1lT3B0aW9ucyk7XG4gICAgICAgIHJldHVybiAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykodGhlbWVPcHRpb25zLCBkYXRhT3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0cy5PRFNDaGFydHNUaGVtZSA9IE9EU0NoYXJ0c1RoZW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXJzID0gZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyQ29uZmlnID0gZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyVG9vbHRpcFRyaWdnZXIgPSBleHBvcnRzLk9EU0NoYXJ0c1BvcG92ZXJBeGlzUG9pbnRlciA9IGV4cG9ydHMuT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb25XaXRoUmVuZGVyZXIgPSBleHBvcnRzLk9EU0NoYXJ0c1BvcG92ZXJEZWZpbml0aW9uID0gZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVySXRlbSA9IGV4cG9ydHMuT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCBjbG9uZV9kZWVwX29iamVjdF8xID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzL2Nsb25lLWRlZXAtb2JqZWN0XCIpO1xuY29uc3Qgb2RzX2NoYXJ0X3RoZW1lXzEgPSByZXF1aXJlKFwiLi4vb2RzLWNoYXJ0LXRoZW1lXCIpO1xuY2xhc3MgT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2hvdyA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2VyID0gT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXI7XG5jbGFzcyBPRFNDaGFydHNQb3BvdmVySXRlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VyaWVzTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tYXJrZXJDb2xvciA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c1BvcG92ZXJJdGVtID0gT0RTQ2hhcnRzUG9wb3Zlckl0ZW07XG4vKipcbiAqIHtAbGluayBPRFNDaGFydHNQb3BvdmVyRGVmaW5pdGlvbn0gZGVmaW5lcyB0aGUgaW50ZXJmYWNlIG9mIHRoZSBtYW5hZ2VyIG9mIGV4dGVybmFsaXplZFxuICogcG9wb3ZlciBvciB0b29sdGlwIHtAbGluayBPRFNDaGFydHNUaGVtZS5leHRlcm5hbGl6ZVBvcG92ZXJ9LlxuICpcbiAqIHtAbGluayBPRFNDaGFydHNQb3BvdmVyRGVmaW5pdGlvbn0gaXMgbm90IHVzZWQgZGlyZWN0bHkuIEluc3RlYWQsIHdlIHVzZSB0aGUgdmFyaWFibGUgKip7QGxpbmsgT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb259LlxuICoge0BsaW5rIE9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vyc30gZ2l2ZXMgMyBkZWZhdWx0IHtAbGluayBPRFNDaGFydHNQb3BvdmVyRGVmaW5pdGlvbn1cbiAqIG1hbmFnZXJzIGZvciBBcGFjaGUgRUNoYXJ0cywgQm9vc3RlZCA1IGFuZCBCb29zdGVkIDQuXG4gKlxuICogWW91IHByb2JhYmx5IG5lZWQgdG8gdXNlIG9uZSBvZiB0aG9zZS5cbiAqXG4gKiBCdXQgZXZlbiBpZiB5b3UgdXNlIG9uZSBvZiB0aG9zZSwgeW91IG1heSBzcGVjaWFsaXplIGl0IHdpdGggc3BlY2lmaWMocylcbiAqIGltcGxlbWVudGF0aW9uKHMpIHdpdGggb25lIG9mIHRoZSB7QGxpbmsgT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb259IG1ldGhvZChzKS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgeW91IG1heSBzcGVjaWZ5IHRoZSBjb250ZW50IG9mIHRoZSB0b29sdGlwOlxuICogYGBgXG4gKiAgICAgICAgICAgICAgICAgdGhlbWVNYW5hZ2VyLmV4dGVybmFsaXplUG9wb3Zlcih1bmRlZmluZWQsIHtcbiAqICAgICAgICAgICAgICAgICAgLi4uT0RTQ2hhcnRzLk9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vycy5OT05FLFxuICogICAgICAgICAgICAgICAgICBnZXRQb3B1cENvbnRlbnQ6ICh0b29sdGlwRWxlbWVudHMpID0+IHtcbiAqICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RoaXMgaXMgbXkgSFRNTCBjb2RlIHRoYXQgbWF5IGNvbnRlbnQgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9PcmFuZ2UtT3BlblNvdXJjZS9vZHMtY2hhcnRzXCI+YSBsaW5rPC9hPic7XG4gKiAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAgICB9KTtcbiAqIGBgYFxuICogb3IgaWYgeW91IHdhbnQgdG8gdXNlIEJvb3N0ZWQgNSB0b29sdGlwIHJlbmRlcmVyOlxuICogYGBgXG4gKiAgICAgICAgICAgICAgICAgdGhlbWVNYW5hZ2VyLmV4dGVybmFsaXplUG9wb3Zlcih1bmRlZmluZWQsIHtcbiAqICAgICAgICAgICAgICAgICAgLi4uT0RTQ2hhcnRzLk9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vycy5CT09TVEVENSxcbiAqICAgICAgICAgICAgICAgICAgZ2V0UG9wdXBDb250ZW50OiAodG9vbHRpcEVsZW1lbnRzKSA9PiB7XG4gKiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUaGlzIGlzIG15IEhUTUwgY29kZSB0aGF0IG1heSBjb250ZW50IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vT3JhbmdlLU9wZW5Tb3VyY2Uvb2RzLWNoYXJ0c1wiPmEgbGluazwvYT4nO1xuICogICAgICAgICAgICAgICAgICB9LFxuICogICAgICAgICAgICAgICAgfSk7XG4gKiBgYGBcbiAqL1xuY2xhc3MgT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb24ge1xufVxuZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyRGVmaW5pdGlvbiA9IE9EU0NoYXJ0c1BvcG92ZXJEZWZpbml0aW9uO1xuY2xhc3MgT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb25XaXRoUmVuZGVyZXIgZXh0ZW5kcyBPRFNDaGFydHNQb3BvdmVyRGVmaW5pdGlvbiB7XG4gICAgdGVzdElmTW91c2VJc092ZXJUb29sdGlwKHByZXZpb3VzUG9wb3Zlcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXZSB0ZXN0IGlmIHRoZSBtb3VzZSBpcyBvdmVyIHRoZSBwcmV2aW91cyB0b29sdGlwIHRvIGNhbmNlbCB0aGUgY3JlYXRpb25cbiAgICAgICAgICAgIC8vIG9mIGEgbmV3IG9uZSBhbmQgYWxsb3cgdGhlIG1vdXNlIHRvIGVudGVyIG92ZXIgdGhpcyBwcmV2aW91cyBvbmVcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB7IHRvcDogd2luZG93LmV2ZW50LmNsaWVudFksIGxlZnQ6IHdpbmRvdy5ldmVudC5jbGllbnRYIH07XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwUmVjdCA9IChfYSA9IHByZXZpb3VzUG9wb3Zlci50aXApID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmICh0b29sdGlwUmVjdCAmJlxuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24udG9wID4gdG9vbHRpcFJlY3QudG9wIC0gdGhpcy50b29sdGlwTWFyZ2luZyAmJlxuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24udG9wIDwgdG9vbHRpcFJlY3QudG9wICsgdG9vbHRpcFJlY3QuaGVpZ2h0ICsgdGhpcy50b29sdGlwTWFyZ2luZyAmJlxuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24ubGVmdCA+IHRvb2x0aXBSZWN0LmxlZnQgLSB0aGlzLnRvb2x0aXBNYXJnaW5nICYmXG4gICAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbi5sZWZ0IDwgdG9vbHRpcFJlY3QubGVmdCArIHRvb2x0aXBSZWN0LndpZHRoICsgdGhpcy50b29sdGlwTWFyZ2luZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLk9EU0NoYXJ0c1BvcG92ZXJEZWZpbml0aW9uV2l0aFJlbmRlcmVyID0gT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb25XaXRoUmVuZGVyZXI7XG52YXIgT0RTQ2hhcnRzUG9wb3ZlckF4aXNQb2ludGVyO1xuKGZ1bmN0aW9uIChPRFNDaGFydHNQb3BvdmVyQXhpc1BvaW50ZXIpIHtcbiAgICBPRFNDaGFydHNQb3BvdmVyQXhpc1BvaW50ZXJbXCJub25lXCJdID0gXCJub25lXCI7XG4gICAgT0RTQ2hhcnRzUG9wb3ZlckF4aXNQb2ludGVyW1wic2hhZG93XCJdID0gXCJzaGFkb3dcIjtcbiAgICBPRFNDaGFydHNQb3BvdmVyQXhpc1BvaW50ZXJbXCJsaW5lXCJdID0gXCJsaW5lXCI7XG4gICAgT0RTQ2hhcnRzUG9wb3ZlckF4aXNQb2ludGVyW1wiY3Jvc3NcIl0gPSBcImNyb3NzXCI7XG59KShPRFNDaGFydHNQb3BvdmVyQXhpc1BvaW50ZXIgfHwgKGV4cG9ydHMuT0RTQ2hhcnRzUG9wb3ZlckF4aXNQb2ludGVyID0gT0RTQ2hhcnRzUG9wb3ZlckF4aXNQb2ludGVyID0ge30pKTtcbnZhciBPRFNDaGFydHNQb3BvdmVyVG9vbHRpcFRyaWdnZXI7XG4oZnVuY3Rpb24gKE9EU0NoYXJ0c1BvcG92ZXJUb29sdGlwVHJpZ2dlcikge1xuICAgIE9EU0NoYXJ0c1BvcG92ZXJUb29sdGlwVHJpZ2dlcltcInhBeGlzXCJdID0gXCJ4QXhpc1wiO1xuICAgIE9EU0NoYXJ0c1BvcG92ZXJUb29sdGlwVHJpZ2dlcltcInlBeGlzXCJdID0gXCJ5QXhpc1wiO1xuICAgIE9EU0NoYXJ0c1BvcG92ZXJUb29sdGlwVHJpZ2dlcltcImdyaWRcIl0gPSBcImdyaWRcIjtcbn0pKE9EU0NoYXJ0c1BvcG92ZXJUb29sdGlwVHJpZ2dlciB8fCAoZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyVG9vbHRpcFRyaWdnZXIgPSBPRFNDaGFydHNQb3BvdmVyVG9vbHRpcFRyaWdnZXIgPSB7fSkpO1xuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9mIHRoZSBleHRlcm5hbGl6ZVBvcG92ZXIgZmVhdHVyZSB7QGxpbmsgT0RTQ2hhcnRzVGhlbWUuZXh0ZXJuYWxpemVQb3BvdmVyfS5cbiAqXG4gKi9cbmNsYXNzIE9EU0NoYXJ0c1BvcG92ZXJDb25maWcge1xufVxuZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyQ29uZmlnID0gT0RTQ2hhcnRzUG9wb3ZlckNvbmZpZztcbmNsYXNzIEJPT1NURUQ1X0RlZmluaXRpb24gZXh0ZW5kcyBPRFNDaGFydHNQb3BvdmVyRGVmaW5pdGlvbldpdGhSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudGVzdEF2YWlsYWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBhdmFpbGFiaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBib29zdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhdmFpbGFiaWxpdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0JPT1NURUQgNSBwb3BvdmVyL3Rvb2x0aXAgcmVuZGVyaW5nIGlzIG5vdCBhdmFsYWJsZTogYm9vc3RlZCB2YXJpYWJsZSBpcyBub3QgYWNjZXNzaWJsZSEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0T3JDcmVhdGVQb3B1cEluc3RhbmNlID0gdGhpcy5fZ2V0T3JDcmVhdGVQb3B1cEluc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9vbHRpcERlbGF5ID0gMDtcbiAgICAgICAgdGhpcy50b29sdGlwTWFyZ2luZyA9IDE1O1xuICAgIH1cbiAgICBfZ2V0T3JDcmVhdGVQb3B1cEluc3RhbmNlKHNlbGVjdG9yLCB0aXRsZSwgaHRtbENvbnRlbnQsIGVudGVyYWJsZSwgbW9kZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNQb3BvdmVyID0gYm9vc3RlZC5Qb3BvdmVyLmdldEluc3RhbmNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1BvcG92ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50ZXJhYmxlICYmIHRoaXMudGVzdElmTW91c2VJc092ZXJUb29sdGlwKHByZXZpb3VzUG9wb3ZlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb3BvdmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICBjb25zdCBhbGxvd0xpc3QgPSAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKGJvb3N0ZWQuVG9vbHRpcC5EZWZhdWx0LmFsbG93TGlzdCk7XG4gICAgICAgIGFsbG93TGlzdC5zcGFuID0gWydzdHlsZScsICdjbGFzcyddO1xuICAgICAgICBhbGxvd0xpc3QuZGl2ID0gWydjbGFzcyddO1xuICAgICAgICBhbGxvd0xpc3QubGFiZWwgPSBbJ2NsYXNzJ107XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2RzLWNoYXJ0LXBvcG92ZXItY29udGFpbmVyLScgKyBtb2RlKTtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKFtvZHNfY2hhcnRfdGhlbWVfMS5PRFNDaGFydHNNb2RlLkRBUkssIG9kc19jaGFydF90aGVtZV8xLk9EU0NoYXJ0c01vZGUuTElHSFRdLmluY2x1ZGVzKG1vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10aGVtZScsIG1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmlkID0gJ29kcy1jaGFydC1wb3BvdmVyLWNvbnRhaW5lci0nICsgbW9kZTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvZHMtY2hhcnRzLWNvbnRleHQnKTtcbiAgICAgICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib29zdGVkLlBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSwge1xuICAgICAgICAgICAgYWxsb3dMaXN0OiBhbGxvd0xpc3QsXG4gICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGh0bWxDb250ZW50LFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IGVudGVyYWJsZSA/ICcnIDogJ3BlLW5vbmUnLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBCT09TVEVENF9EZWZpbml0aW9uIGV4dGVuZHMgT0RTQ2hhcnRzUG9wb3ZlckRlZmluaXRpb25XaXRoUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRlc3RBdmFpbGFiaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gYm9vc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYXZhaWxhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdCT09TVEVEIDQgcG9wb3Zlci90b29sdGlwIHJlbmRlcmluZyBpcyBub3QgYXZhbGFibGU6IGJvb3N0ZWQgdmFyaWFibGUgaXMgbm90IGFjY2Vzc2libGUhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXZhaWxhYmlsaXR5O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldE9yQ3JlYXRlUG9wdXBJbnN0YW5jZSA9IHRoaXMuX2dldE9yQ3JlYXRlUG9wdXBJbnN0YW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvb2x0aXBEZWxheSA9IDA7XG4gICAgICAgIHRoaXMudG9vbHRpcE1hcmdpbmcgPSAxMDtcbiAgICB9XG4gICAgX2dldE9yQ3JlYXRlUG9wdXBJbnN0YW5jZShzZWxlY3RvciwgdGl0bGUsIGh0bWxDb250ZW50LCBlbnRlcmFibGUsIG1vZGUpIHtcbiAgICAgICAgY29uc3QgZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHdoaXRlTGlzdCA9ICgwLCBjbG9uZV9kZWVwX29iamVjdF8xLmNsb25lRGVlcE9iamVjdCkoYm9vc3RlZC5Ub29sdGlwLkRlZmF1bHQud2hpdGVMaXN0KTtcbiAgICAgICAgd2hpdGVMaXN0LnNwYW4gPSBbJ3N0eWxlJywgJ2NsYXNzJ107XG4gICAgICAgIHdoaXRlTGlzdC5kaXYgPSBbJ2NsYXNzJ107XG4gICAgICAgIHdoaXRlTGlzdC5sYWJlbCA9IFsnY2xhc3MnXTtcbiAgICAgICAgaWYgKGVsdCAmJiBlbHQuY2hhcnRQb3BvdmVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlbnRlcmFibGUgJiYgdGhpcy50ZXN0SWZNb3VzZUlzT3ZlclRvb2x0aXAoZWx0LmNoYXJ0UG9wb3ZlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsdC5jaGFydFBvcG92ZXIuY29uZmlnLnRpdGxlID09PSB0aXRsZSAmJiBlbHQuY2hhcnRQb3BvdmVyLmNvbmZpZy5jb250ZW50ID09PSBodG1sQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbHQuY2hhcnRQb3BvdmVyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHQuY2hhcnRQb3BvdmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9wb3ZlciA9IG5ldyBib29zdGVkLlBvcG92ZXIoZWx0LCB7XG4gICAgICAgICAgICB3aGl0ZUxpc3Q6IHdoaXRlTGlzdCxcbiAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogaHRtbENvbnRlbnQsXG4gICAgICAgICAgICBjdXN0b21DbGFzczogJycsXG4gICAgICAgIH0pO1xuICAgICAgICBlbHQuY2hhcnRQb3BvdmVyID0gcG9wb3ZlcjtcbiAgICAgICAgaWYgKCFlbnRlcmFibGUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBlbHQuY2hhcnRQb3BvdmVyLnRpcC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcG92ZXI7XG4gICAgfVxufVxuLyoqXG4gKiBgT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXJzYCBpcyB1c2VkIHRvIHNwZWNpZnkgcG9wb3ZlckRlZmluaXRpb24gcGFyYW1ldGVyIChwb3B1cC90b29sdGlwIHJlbmRlcmVyKSBvZiB7QGxpbmsgT0RTQ2hhcnRzVGhlbWUuZXh0ZXJuYWxpemVQb3BvdmVyfS5cbiAqXG4gKiBBdmFpbGFibGUgcG9wb3Zlci90b29sdGlwIHJlbmRlcmVyOlxuICogLSBgT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXJzLk5PTkVgOiB0byB1c2UgZGVmYXVsdCBFQ2hhcnRzIHRlbXBsYXRlIHRvIGV4dGVybmFsaXplIHRvb2x0aXAvcG9wb3ZlciBIVE1MIGVsZW1lbnQsIGltcGxlbWVudGluZyBPcmFuZ2UgRGVzaWduIFN5c3RlbVxuICogLSBgT0RTQ2hhcnRzUG9wb3Zlck1hbmFnZXJzLkJPT1NURUQ1YDogdG8gdXNlIEJvb3N0ZWQgNSB0b29sdGlwL3BvcG92ZXJcbiAqIC0gYE9EU0NoYXJ0c1BvcG92ZXJNYW5hZ2Vycy5CT09TVEVENGA6IHRvIHVzZSBCb29zdGVkIDQgdG9vbHRpcC9wb3BvdmVyXG4gKlxuICogKipXQVJOSU5HKio6IEJvb3N0ZWQgNCBvciBCb29zdGVkIDUgcmVuZGVyaW5nIHJlcXVpcmVzIGRlcGVuZGVuY3kgb24gdGhlIGJvb3N0ZWQgbGlicmFyeSBhbmQgYWNjZXNzIHRvIHRoZSBib29zdGVkIGdsb2JhbCB2YXJpYWJsZS5cbiAqL1xuZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyTWFuYWdlcnMgPSB7XG4gICAgQk9PU1RFRDU6IG5ldyBCT09TVEVENV9EZWZpbml0aW9uKCksXG4gICAgQk9PU1RFRDQ6IG5ldyBCT09TVEVENF9EZWZpbml0aW9uKCksXG4gICAgTk9ORToge30sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTQ2hhcnRzUG9wb3ZlciA9IHZvaWQgMDtcbmNvbnN0IGNzc190aGVtZXNfMSA9IHJlcXVpcmUoXCIuLi9jc3MtdGhlbWVzL2Nzcy10aGVtZXNcIik7XG5jb25zdCBtZXJnZV9vYmplY3RzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvbWVyZ2Utb2JqZWN0c1wiKTtcbmNvbnN0IG9kc19jaGFydF9wb3BvdmVyX2RlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi9vZHMtY2hhcnQtcG9wb3Zlci1kZWZpbml0aW9uc1wiKTtcbmNvbnN0IG9kc19jaGFydF9sZWdlbmRzXzEgPSByZXF1aXJlKFwiLi4vbGVnZW5kcy9vZHMtY2hhcnQtbGVnZW5kc1wiKTtcbmNvbnN0IGNsb25lX2RlZXBfb2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvY2xvbmUtZGVlcC1vYmplY3RcIik7XG5jb25zdCBvZHNfY2hhcnRfdGhlbWVfMSA9IHJlcXVpcmUoXCIuLi9vZHMtY2hhcnQtdGhlbWVcIik7XG5jb25zdCBtYWluX2F4aXNfdHlwZV9jb25zdF8xID0gcmVxdWlyZShcIi4uL2NvbnN0L21haW4tYXhpcy10eXBlLmNvbnN0XCIpO1xuY29uc3QgREVGQVVMVF9URU1QTEFURV9DU1MgPSBgXHJcbi5vZHMtY2hhcnRzLXBvcG92ZXIge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbi5vZHMtY2hhcnRzLXBvcG92ZXIub2RzLWNoYXJ0cy1lbnRlcmFibGUtZmFsc2Uge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vZHMtY2hhcnRzLXBvcG92ZXIgLm9kcy1jaGFydHMtcG9wb3Zlci1pbm5lciAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ib2R5LWJnLCAjZmZmKTtcclxuICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvciwgIzAwMCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjYyk7XHJcbiAgcGFkZGluZzogMjBweCAxOHB4IDIwcHggMThweDtcclxufVxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyLm9kcy1jaGFydHMtbW9kZS1kYXJrIC5vZHMtY2hhcnRzLXBvcG92ZXItaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktOTUwLCAjMTQxNDE0KTtcclxuICBjb2xvcjogdmFyKC0tYnMtd2hpdGUsICNmZmYpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJzLWdyYXktNzAwLCAjNjY2KTtcclxufSBcclxuLm9kcy1jaGFydHMtcG9wb3Zlci5vZHMtY2hhcnRzLW1vZGUtbGlnaHQgLm9kcy1jaGFydHMtcG9wb3Zlci1pbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtd2hpdGUsICNmZmYpO1xyXG4gIGNvbG9yOiB2YXIoLS1icy1ibGFjaywgIzAwMCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnMtZ3JheS01MDAsICNjY2MpO1xyXG59IFxyXG5cclxuLm9kcy1jaGFydHMtcG9wb3ZlciAub2RzLWNoYXJ0cy1wb3BvdmVyLWhlYWRlciB7XHJcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IsICMwMDApO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbn0gIFxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyLm9kcy1jaGFydHMtbW9kZS1kYXJrIC5vZHMtY2hhcnRzLXBvcG92ZXItaGVhZGVyIHtcclxuICBjb2xvcjogdmFyKC0tYnMtd2hpdGUsICNmZmYpO1xyXG59XHJcbi5vZHMtY2hhcnRzLXBvcG92ZXIub2RzLWNoYXJ0cy1tb2RlLWxpZ2h0IC5vZHMtY2hhcnRzLXBvcG92ZXItaGVhZGVyIHtcclxuICBjb2xvcjogdmFyKC0tYnMtYmxhY2ssICMwMDApO1xyXG59XHJcblxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyIC5vZHMtY2hhcnRzLXBvcG92ZXItYXJyb3cgIHsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLThweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTtcclxufVxyXG5cclxuXHJcbi5vZHMtY2hhcnRzLXBvcG92ZXIgLm9kcy1jaGFydHMtcG9wb3Zlci1hcnJvdzo6YmVmb3JlIHsgIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tYnMtYm9yZGVyLWNvbG9yLXN1YnRsZSwgI2NjYyk7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLm9kcy1jaGFydHMtcG9wb3Zlci5vZHMtY2hhcnRzLW1vZGUtZGFyayAub2RzLWNoYXJ0cy1wb3BvdmVyLWFycm93OjpiZWZvcmUge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWJzLWdyYXktNzAwLCAjNjY2KTtcclxufVxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyLm9kcy1jaGFydHMtbW9kZS1kYXJrIC5vZHMtY2hhcnRzLXBvcG92ZXItYXJyb3c6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tYnMtZ3JheS01MDAsICNjY2MpO1xyXG59XHJcblxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyIC5vZHMtY2hhcnRzLXBvcG92ZXItYXJyb3c6OmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWJzLWJvZHktYmcsICNmZmYpO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyLm9kcy1jaGFydHMtbW9kZS1kYXJrIC5vZHMtY2hhcnRzLXBvcG92ZXItYXJyb3c6OmFmdGVye1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWJzLWdyYXktOTUwLCAjMTQxNDE0KTtcclxufVxyXG4ub2RzLWNoYXJ0cy1wb3BvdmVyLm9kcy1jaGFydHMtbW9kZS1saWdodCAub2RzLWNoYXJ0cy1wb3BvdmVyLWFycm93OjphZnRlcntcclxuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1icy13aGl0ZSwgI2ZmZik7XHJcbn1cclxuYDtcbmNvbnN0IERFRkFVTFRfTk9ORV9DU1MgPSBgXHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIgLm9kcy1jaGFydHMtcG9wb3Zlci1jb2xvci1ob2xkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLXBvcG92ZXItYm9yZGVyLWNvbG9yLCAjY2NjKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm9kcy1jaGFydHMtbm8tY3NzLWxpYi5vZHMtY2hhcnRzLW1vZGUtZGFyayAub2RzLWNoYXJ0cy1wb3BvdmVyLWNvbG9yLWhvbGRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtcG9wb3Zlci1ib3JkZXItY29sb3IsICM2NjYpO1xyXG59XHJcblxyXG4ub2RzLWNoYXJ0cy1uby1jc3MtbGliIC5vZHMtY2hhcnRzLXBvcG92ZXItY29sb3Ige1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIgLm9kcy1jaGFydHMtcG9wb3Zlci10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IsICMwMDAwMDApO1xyXG59XHJcbi5vZHMtY2hhcnRzLW5vLWNzcy1saWIub2RzLWNoYXJ0cy1tb2RlLWRhcmsgLm9kcy1jaGFydHMtcG9wb3Zlci10ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvciwgI2ZmZik7XHJcbn1cclxuYDtcbmNsYXNzIE9EU0NoYXJ0c1BvcG92ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBvcG92ZXJEZWZpbml0aW9uLCBwb3BvdmVyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMucG9wb3ZlckRlZmluaXRpb24gPSBwb3BvdmVyRGVmaW5pdGlvbjtcbiAgICAgICAgdGhpcy5wb3BvdmVyQ29uZmlnID0gcG9wb3ZlckNvbmZpZztcbiAgICAgICAgdGhpcy50b29sdGlwU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5lbnRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gb2RzX2NoYXJ0X3RoZW1lXzEuT0RTQ2hhcnRzTW9kZS5ERUZBVUxUO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkUG9wb3Zlck1hbmFnZW1lbnQocG9wb3ZlckRlZmluaXRpb24sIHBvcG92ZXJDb25maWcpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcG9wb3ZlckRlZmluaXRpb24gfHwgKHBvcG92ZXJEZWZpbml0aW9uLnRlc3RBdmFpbGFiaWxpdHkgJiYgIXBvcG92ZXJEZWZpbml0aW9uLnRlc3RBdmFpbGFiaWxpdHkoKSkpIHtcbiAgICAgICAgICAgIHBvcG92ZXJEZWZpbml0aW9uID0gb2RzX2NoYXJ0X3BvcG92ZXJfZGVmaW5pdGlvbnNfMS5PRFNDaGFydHNQb3BvdmVyTWFuYWdlcnMuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwb3BvdmVyQ29uZmlnKSB7XG4gICAgICAgICAgICBwb3BvdmVyQ29uZmlnID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcG9wb3ZlckNvbmZpZy5lbmFibGVkKSB7XG4gICAgICAgICAgICBwb3BvdmVyQ29uZmlnLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHBvcG92ZXJDb25maWcuYXhpc1BvaW50ZXIpIHtcbiAgICAgICAgICAgIHBvcG92ZXJDb25maWcuYXhpc1BvaW50ZXIgPSBvZHNfY2hhcnRfcG9wb3Zlcl9kZWZpbml0aW9uc18xLk9EU0NoYXJ0c1BvcG92ZXJBeGlzUG9pbnRlci5ub25lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHBvcG92ZXJDb25maWcuc2hhcmVkKSB7XG4gICAgICAgICAgICBwb3BvdmVyQ29uZmlnLnNoYXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHBvcG92ZXJDb25maWcudG9vbHRpcCkge1xuICAgICAgICAgICAgcG9wb3ZlckNvbmZpZy50b29sdGlwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwb3BvdmVyQ29uZmlnLnRvb2x0aXBEZWxheSkge1xuICAgICAgICAgICAgcG9wb3ZlckNvbmZpZy50b29sdGlwRGVsYXkgPVxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA9PT0gcG9wb3ZlckRlZmluaXRpb24udG9vbHRpcERlbGF5XG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHBvcG92ZXJEZWZpbml0aW9uLnRvb2x0aXBEZWxheTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBvcG92ZXJDb25maWcuc2hhcmVkICYmICdub25lJyAhPT0gcG9wb3ZlckNvbmZpZy5heGlzUG9pbnRlcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJZiB5b3UgY2hvb3NlIGEgc3BlY2lmaWMgYXhpc1BvaW50ZXIgbGlrZSAke3BvcG92ZXJDb25maWcuYXhpc1BvaW50ZXJ9LCB0aGUgcG9wdXAvdG9vbHRpcCBjb250ZW50IHdpbGwgYmUgc2hhcmVkIGJldHdlZW4gc2VyaWVzIHZhbHVlcyAoc2hhcmVkIG9wdGlvbiBmb3JjZWQgdG8gdHJ1ZSlgKTtcbiAgICAgICAgICAgIHBvcG92ZXJDb25maWcuc2hhcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IE9EU0NoYXJ0c1BvcG92ZXIocG9wb3ZlckRlZmluaXRpb24sIHBvcG92ZXJDb25maWcpO1xuICAgIH1cbiAgICBnZXRUb29sdGlwVHJpZ2dlcihkYXRhT3B0aW9ucywgdGhlbWVPcHRpb25zKSB7XG4gICAgICAgIGxldCB0b29sdGlwVHJpZ2dlciA9IHRoaXMucG9wb3ZlckNvbmZpZy5heGlzUG9pbnRlciA9PT0gJ2Nyb3NzJyA/ICdncmlkJyA6IHRoaXMucG9wb3ZlckNvbmZpZy50b29sdGlwVHJpZ2dlcjtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PSB0b29sdGlwVHJpZ2dlcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBheGlzIG9mIFsneEF4aXMnLCAneUF4aXMnXSkge1xuICAgICAgICAgICAgICAgIGlmICgoMCwgbWFpbl9heGlzX3R5cGVfY29uc3RfMS5pc01haW5BeGlzKShkYXRhT3B0aW9uc1theGlzXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRyaWdnZXIgPSB0b29sdGlwVHJpZ2dlciA/IHVuZGVmaW5lZCA6IGF4aXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT0gdG9vbHRpcFRyaWdnZXIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbJ3hBeGlzJywgJ3lBeGlzJ10pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhlbWVPcHRpb25zW2F4aXNdICYmIHRoZW1lT3B0aW9uc1theGlzXS5zcGxpdExpbmUgJiYgdGhlbWVPcHRpb25zW2F4aXNdLnNwbGl0TGluZS5zaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUcmlnZ2VyID0gdG9vbHRpcFRyaWdnZXIgPyB1bmRlZmluZWQgOiBheGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZWZpbmVkID09IHRvb2x0aXBUcmlnZ2VyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgWyd4QXhpcycsICd5QXhpcyddKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoZW1lT3B0aW9uc1theGlzXSAmJiB0aGVtZU9wdGlvbnNbYXhpc10uYXhpc0xpbmUgJiYgdGhlbWVPcHRpb25zW2F4aXNdLmF4aXNMaW5lLnNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRyaWdnZXIgPSB0b29sdGlwVHJpZ2dlciA/IHVuZGVmaW5lZCA6IGF4aXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT0gdG9vbHRpcFRyaWdnZXIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbJ3hBeGlzJywgJ3lBeGlzJ10pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU9wdGlvbnNbYXhpc10gJiYgZGF0YU9wdGlvbnNbYXhpc10uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwVHJpZ2dlciA9IHRvb2x0aXBUcmlnZ2VyID8gdW5kZWZpbmVkIDogYXhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PSB0b29sdGlwVHJpZ2dlcikge1xuICAgICAgICAgICAgdG9vbHRpcFRyaWdnZXIgPSAnZ3JpZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvb2x0aXBUcmlnZ2VyO1xuICAgIH1cbiAgICBnZXRUb29sdGlwRWxlbWVudHMocGFyYW1zLCBsZWdlbmRzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXRlZ29yeUxhYmVsOiB0aGlzLnBvcG92ZXJEZWZpbml0aW9uICYmIHRoaXMucG9wb3ZlckRlZmluaXRpb24uZ2V0UG9wdXBUaXRsZVxuICAgICAgICAgICAgICAgID8gdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cFRpdGxlKHBhcmFtc1swXS5heGlzVmFsdWUsIHBhcmFtc1swXS5heGlzVmFsdWVMYWJlbCwgcGFyYW1zWzBdLm5hbWUpXG4gICAgICAgICAgICAgICAgOiBwYXJhbXNbMF0uYXhpc1ZhbHVlTGFiZWwgfHwgcGFyYW1zWzBdLmF4aXNWYWx1ZSB8fCBwYXJhbXNbMF0ubmFtZSxcbiAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50czogcGFyYW1zXG4gICAgICAgICAgICAgICAgLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWdlbmRMYWJlbCA9IGxlZ2VuZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kcy5uYW1lcyAmJlxuICAgICAgICAgICAgICAgICAgICBsZWdlbmRzLmxhYmVscyAmJlxuICAgICAgICAgICAgICAgICAgICBsZWdlbmRzLmxhYmVscy5maW5kKChsYWJlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWdlbmRzLm5hbWVzW2luZGV4XSA9PT0gcGFyYW0uc2VyaWVzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gKDAsIG1lcmdlX29iamVjdHNfMS5pc1ZhckFycmF5KShwYXJhbS52YWx1ZSkgJiYgMiA9PSBwYXJhbS52YWx1ZS5sZW5ndGggJiYgKCFwYXJhbS5heGlzVHlwZSB8fCBwYXJhbS5heGlzVHlwZS5lbmRzV2l0aCgnLnRpbWUnKSlcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJhbS52YWx1ZVsxXVxuICAgICAgICAgICAgICAgICAgICA6ICgwLCBtZXJnZV9vYmplY3RzXzEuaXNWYXJBcnJheSkocGFyYW0udmFsdWUpICYmIHBhcmFtLnNlcmllc0luZGV4ICsgMSA8IHBhcmFtLnZhbHVlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJhbS52YWx1ZVtwYXJhbS5zZXJpZXNJbmRleCArIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICgwLCBtZXJnZV9vYmplY3RzXzEuaXNWYXJBcnJheSkocGFyYW0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhcmFtLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykoKDAsIGNsb25lX2RlZXBfb2JqZWN0XzEuY2xvbmVEZWVwT2JqZWN0KShwYXJhbSksIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyQ29sb3I6IHBhcmFtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWU6IGl0ZW1WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxlZ2VuZExhYmVsIHx8ICcnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IGVsZW1lbnQuaXRlbVZhbHVlICYmIHRoaXMucG9wb3ZlckRlZmluaXRpb24gJiYgdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lml0ZW1WYWx1ZSA9IHRoaXMucG9wb3ZlckRlZmluaXRpb24uZ2V0UG9wdXBDb250ZW50VmFsdWUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBlbHQuaXRlbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWxlZCBkaXNwbGF5aW5nJywgZWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAhPT0gZWx0Lml0ZW1WYWx1ZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRQb3BvdmVyTWFuYWdlbWVudChkYXRhT3B0aW9ucywgdGhlbWVPcHRpb25zLCBjc3NUaGVtZSwgY3NzVGhlbWVOYW1lLCBjdXJyZW50TW9kZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5tb2RlID0gY3VycmVudE1vZGU7XG4gICAgICAgIGlmIChjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzQ1NTVGhlbWVzTmFtZXMuTk9ORSA9PT0gY3NzVGhlbWVOYW1lICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2RzLWNoYXJ0LXBvcG92ZXItbm9uZS1jc3MnKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLmlkID0gJ29kcy1jaGFydC1wb3BvdmVyLW5vbmUtY3NzJztcbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gREVGQVVMVF9OT05FX0NTUztcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvcG92ZXJPcHRpb25zID0ge307XG4gICAgICAgIGNvbnN0IHRvb2x0aXBUcmlnZ2VyID0gdGhpcy5nZXRUb29sdGlwVHJpZ2dlcihkYXRhT3B0aW9ucywgdGhlbWVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbnRlcmFibGUgPSAhIWRhdGFPcHRpb25zICYmICEhZGF0YU9wdGlvbnMudG9vbHRpcCAmJiAhIWRhdGFPcHRpb25zLnRvb2x0aXAuZW50ZXJhYmxlO1xuICAgICAgICBsZXQgbGVnZW5kcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxlZ2VuZHMgPSBvZHNfY2hhcnRfbGVnZW5kc18xLk9EU0NoYXJ0c0xlZ2VuZHMuZ2V0TGVnZW5kRGF0YShkYXRhT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgaWYgKHRoaXMucG9wb3ZlckNvbmZpZy5lbmFibGVkKSB7XG4gICAgICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykocG9wb3Zlck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbdG9vbHRpcFRyaWdnZXJdOiB7XG4gICAgICAgICAgICAgICAgICAgIGF4aXNQb2ludGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wb3ZlckNvbmZpZy50b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHBvcG92ZXJPcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHsgdHJpZ2dlck9uOiAnY2xpY2snLCBhbHdheXNTaG93Q29udGVudDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRPckNyZWF0ZVBvcHVwSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykocG9wb3Zlck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IChtb3VzZVBvc2l0aW9uLCBwYXJhbXMsIGRvbSwgcmVjdCwgY29udGFpbmVyU2l6ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBtb3VzZVBvc2l0aW9uWzBdIC0gY29udGFpbmVyU2l6ZS5jb250ZW50U2l6ZVswXSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9hID0gZGF0YU9wdGlvbnMgPT09IG51bGwgfHwgZGF0YU9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFPcHRpb25zLnRvb2x0aXApID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25maW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycm93U2l6ZSA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5VG9vbHRpcE9uVG9wID0gbW91c2VQb3NpdGlvblsxXSA+IGNvbnRhaW5lclNpemUuY29udGVudFNpemVbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b29sdGlwTGVmdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwUG9zaXRpb25bWyd0b3AnLCAnYm90dG9tJ11bK2Rpc3BsYXlUb29sdGlwT25Ub3BdXSA9IGRpc3BsYXlUb29sdGlwT25Ub3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29udGFpbmVyU2l6ZS52aWV3U2l6ZVsxXSAtIG1vdXNlUG9zaXRpb25bMV0gKyAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb3VzZVBvc2l0aW9uWzFdICsgMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3VzZVBvc2l0aW9uWzBdID4gY29udGFpbmVyU2l6ZS52aWV3U2l6ZVswXSAtIGNvbnRhaW5lclNpemUuY29udGVudFNpemVbMF0gLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwTGVmdFBvc2l0aW9uID0gTWF0aC5taW4obW91c2VQb3NpdGlvblswXSAtIGNvbnRhaW5lclNpemUudmlld1NpemVbMF0gKyBjb250YWluZXJTaXplLmNvbnRlbnRTaXplWzBdIC0gYXJyb3dTaXplLCBjb250YWluZXJTaXplLmNvbnRlbnRTaXplWzBdIC0gYXJyb3dTaXplICogMiAtIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1vdXNlUG9zaXRpb25bMF0gPCBjb250YWluZXJTaXplLmNvbnRlbnRTaXplWzBdIC8gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcExlZnRQb3NpdGlvbiA9IE1hdGgubWF4KG1vdXNlUG9zaXRpb25bMF0gLSBhcnJvd1NpemUsIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcExlZnRQb3NpdGlvbiA9IGNvbnRhaW5lclNpemUuY29udGVudFNpemVbMF0gLyAyIC0gYXJyb3dTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcFN0eWxlID0gYCR7dG9vbHRpcExlZnRQb3NpdGlvbn1weDtgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc3BsYXlUb29sdGlwT25Ub3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcFN0eWxlICs9ICcgdG9wOiAtOHB4OyB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uWyd0b3AnXSA9IG1vdXNlUG9zaXRpb25bMV0gLSBjb250YWluZXJTaXplLmNvbnRlbnRTaXplWzFdIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b29sdGlwUG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyQXJyYXkpKHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gW3BhcmFtc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0VG9vbHRpcEVsZW1lbnRzKHBhcmFtcywgbGVnZW5kcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzLnRvb2x0aXBFbGVtZW50cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnBvcG92ZXJEZWZpbml0aW9uLmdldFBvcHVwVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cFRlbXBsYXRlKGVsZW1lbnRzLmNhdGVnb3J5TGFiZWwsIGVsZW1lbnRzLnRvb2x0aXBFbGVtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRQb3B1cFRlbXBsYXRlKGVsZW1lbnRzLCBjc3NUaGVtZSwgdGhpcy5tb2RlKSwgJ3RleHQvaHRtbCcpLmJvZHkuZmlyc3RDaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTW9kZTogJ2h0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBgb2RzLWNoYXJ0cy1wb3BvdmVyIG9kcy1jaGFydHMtZW50ZXJhYmxlLSR7dGhpcy5lbnRlcmFibGUgPyAndHJ1ZScgOiAnZmFsc2UnfSAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfYSA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vZHNDaGFydHNQb3BvdmVyKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnBvcG92ZXJDb25maWcuYXhpc1BvaW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbdG9vbHRpcFRyaWdnZXJdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlzUG9pbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNuYXA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdub25lJyA9PT0gdGhpcy5wb3BvdmVyQ29uZmlnLmF4aXNQb2ludGVyID8gMCA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykocG9wb3Zlck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyQXJyYXkpKHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gW3BhcmFtc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0VG9vbHRpcEVsZW1lbnRzKHBhcmFtcywgbGVnZW5kcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnRvb2x0aXBFbGVtZW50cy5sZW5ndGggPiAwICYmIHdpbmRvdy5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UG9wdXAod2luZG93LmV2ZW50LCBlbGVtZW50cywgY3NzVGhlbWUsIHRoaXMubW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZC1ub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNQb2ludGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5wb3BvdmVyQ29uZmlnLmF4aXNQb2ludGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW3Rvb2x0aXBUcmlnZ2VyXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbmFwOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnbm9uZScgPT09IHRoaXMucG9wb3ZlckNvbmZpZy5heGlzUG9pbnRlciA/IDAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChfYiA9IHBvcG92ZXJPcHRpb25zID09PSBudWxsIHx8IHBvcG92ZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3BvdmVyT3B0aW9ucy50b29sdGlwKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgcG9wb3Zlck9wdGlvbnMudG9vbHRpcC5mb3JtYXR0ZXIuSXNPZHNDaGFydHNGb3JtYXR0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBkZWxldGUgYW55IGRlZmF1bHQgZm9ybWF0dGVyIGFzIGl0IGlzIGluY29tcGF0aWJsZSB3aXRoIGV4dGVybmFsaXplUG9wb3ZlciBmZWF0dXJlXG4gICAgICAgICAgICBpZiAoKF9jID0gZGF0YU9wdGlvbnMgPT09IG51bGwgfHwgZGF0YU9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFPcHRpb25zLnRvb2x0aXApID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGFPcHRpb25zLnRvb2x0aXAuZm9ybWF0dGVyLklzT2RzQ2hhcnRzRm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFPcHRpb25zLnRvb2x0aXAgPSAoMCwgY2xvbmVfZGVlcF9vYmplY3RfMS5jbG9uZURlZXBPYmplY3QpKGRhdGFPcHRpb25zLnRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICAvLyBCdXQgaWYgbm8gZm9ybWF0dGVyIGhhcyBiZWVuIHByb3ZpZGVkIHRocm91Z2ggdGhlIHBvcG92ZXJEZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIHVzZSB0aGUgQXBhY2hlIEVDaGFydHMgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gZGF0YU9wdGlvbnMudG9vbHRpcC5mb3JtYXR0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcG92ZXJEZWZpbml0aW9uID0gKDAsIGNsb25lX2RlZXBfb2JqZWN0XzEuY2xvbmVEZWVwT2JqZWN0KSh0aGlzLnBvcG92ZXJEZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wb3ZlckRlZmluaXRpb24uZ2V0UG9wdXBDb250ZW50VmFsdWUgPSAodG9vbHRpcEVsZW1lbnQpID0+IGZvcm1hdHRlcihbdG9vbHRpcEVsZW1lbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgZGF0YU9wdGlvbnMudG9vbHRpcC5mb3JtYXR0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wb3ZlckNvbmZpZy5zaGFyZWQgJiYgJ25vbmUnID09PSB0aGlzLnBvcG92ZXJDb25maWcuYXhpc1BvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICAoMCwgbWVyZ2Vfb2JqZWN0c18xLm1lcmdlT2JqZWN0cykocG9wb3Zlck9wdGlvbnMsIHsgdG9vbHRpcDogeyB0cmlnZ2VyOiAnaXRlbScgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICgwLCBtZXJnZV9vYmplY3RzXzEubWVyZ2VPYmplY3RzKShwb3BvdmVyT3B0aW9ucywgeyB0b29sdGlwOiB7IHRyaWdnZXI6ICdheGlzJyB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHBvcG92ZXJPcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyT246ICdub25lJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIG1lcmdlX29iamVjdHNfMS5tZXJnZU9iamVjdHMpKHRoZW1lT3B0aW9ucywgcG9wb3Zlck9wdGlvbnMpO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnRMaW5lKGVsZW1lbnQsIGNzc1RoZW1lLCBtb2RlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tO1xuICAgICAgICByZXR1cm4gYDxkaXYgXHJcbiAgICBjbGFzcz1cIm9kcy1jaGFydHMtcG9wb3Zlci1saW5lIG9kcy1jaGFydHMtbW9kZS0ke21vZGV9ICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9hID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9kc0NoYXJ0c1BvcG92ZXJMaW5lKX1cIlxyXG4gICAgc3R5bGU9XCIke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9iID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9kc0NoYXJ0c1BvcG92ZXJMaW5lKX1cIiAgICBcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJvZHMtY2hhcnRzLXBvcG92ZXItY29sb3ItaG9sZGVyICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9jID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm9kc0NoYXJ0c1BvcG92ZXJDb2xvckhvbGRlcil9XCIgc3R5bGU9XCIke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9kID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLm9kc0NoYXJ0c1BvcG92ZXJDb2xvckhvbGRlcil9XCIgPiAgXHJcbiAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICBjbGFzcz1cIm9kcy1jaGFydHMtcG9wb3Zlci1jb2xvciAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfZSA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5vZHNDaGFydHNQb3BvdmVyQ29sb3IpfVwiICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHtlbGVtZW50Lm1hcmtlckNvbG9yfTsgICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2YgPSBjc3NUaGVtZS5wb3BvdmVyKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Yub2RzQ2hhcnRzUG9wb3ZlckNvbG9yKX07XCI+XHJcbiAgICAgICAgPC9zcGFuPiBcclxuICAgICAgPC9zcGFuPlxyXG4gICAgXHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cIm9kcy1jaGFydHMtcG9wb3Zlci10ZXh0ICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9nID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLm9kc0NoYXJ0c1BvcG92ZXJUZXh0KX1cIiBzdHlsZT1cIiR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2ggPSBjc3NUaGVtZS5wb3BvdmVyKSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2gub2RzQ2hhcnRzUG9wb3ZlclRleHQpfVwiID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9kcy1jaGFydHMtcG9wb3Zlci1sYWJlbCAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfaiA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5vZHNDaGFydHNQb3BvdmVyTGFiZWwpfVwiIHN0eWxlPVwiJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0U3R5bGVzKChfayA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfay5vZHNDaGFydHNQb3BvdmVyTGFiZWwpfVwiID4ke2VsZW1lbnQubGFiZWwgPyBlbGVtZW50LmxhYmVsICsgJzogJyA6ICcnfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9kcy1jaGFydHMtcG9wb3Zlci12YWx1ZSAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfbCA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5vZHNDaGFydHNQb3BvdmVyVmFsdWUpfVwiIHN0eWxlPVwiJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0U3R5bGVzKChfbSA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9tID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbS5vZHNDaGFydHNQb3BvdmVyVmFsdWUpfVwiPiR7ZWxlbWVudC5pdGVtVmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgYDtcbiAgICB9XG4gICAgZ2V0UG9wdXBDb250ZW50KHRvb2x0aXBFbGVtZW50cywgY3NzVGhlbWUsIG1vZGUpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIGBcclxuICAgIDxkaXYgIGNsYXNzPVwib2RzLWNoYXJ0cy1wb3BvdmVyLWJvZHktY29udGVudCBvZHMtY2hhcnRzLW1vZGUtJHttb2RlfSAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfYSA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vZHNDaGFydHNQb3BvdmVyQm9keUNvbnRlbnQpfVwiIHN0eWxlPVwiJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0U3R5bGVzKChfYiA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vZHNDaGFydHNQb3BvdmVyQm9keUNvbnRlbnQpfVwiID5cclxuICAgICAgICAke3Rvb2x0aXBFbGVtZW50c1xuICAgICAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4gdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnRMaW5lID8gdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnRMaW5lKGVsZW1lbnQpIDogdGhpcy5nZXRQb3B1cENvbnRlbnRMaW5lKGVsZW1lbnQsIGNzc1RoZW1lLCBtb2RlKSlcbiAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcbiAgICB9XG4gICAgZ2V0UG9wdXBUZW1wbGF0ZShlbGVtZW50cywgY3NzVGhlbWUsIG1vZGUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29kcy1jaGFydC10b29sdGlwLWRlZmF1bHQtdGVtcGxhdGUnKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLmlkID0gJ29kcy1jaGFydC10b29sdGlwLWRlZmF1bHQtdGVtcGxhdGUnO1xuICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBERUZBVUxUX1RFTVBMQVRFX0NTUztcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgIFxyXG4gIDxkaXYgY2xhc3M9XCJvZHMtY2hhcnRzLXBvcG92ZXItaG9sZGVyIG9kcy1jaGFydHMtY29udGV4dCBvZHMtY2hhcnRzLW1vZGUtJHttb2RlfSAke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRDbGFzc2VzKChfYSA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vZHNDaGFydHNQb3BvdmVySG9sZGVyKX1cIiBkYXRhLWJzLXRoZW1lPVwiJHttb2RlfVwiIHN0eWxlPVwiJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0U3R5bGVzKChfYiA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vZHNDaGFydHNQb3BvdmVySG9sZGVyKX1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJvZHMtY2hhcnRzLXBvcG92ZXItaW5uZXIgJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0Q2xhc3NlcygoX2MgPSBjc3NUaGVtZS5wb3BvdmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mub2RzQ2hhcnRzUG9wb3ZlcklubmVyKX1cIiBzdHlsZT1cIiR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2QgPSBjc3NUaGVtZS5wb3BvdmVyKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Qub2RzQ2hhcnRzUG9wb3ZlcklubmVyKX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9kcy1jaGFydHMtcG9wb3Zlci1jb250ZW50ICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9lID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm9kc0NoYXJ0c1BvcG92ZXJDb250ZW50KX1cIiBzdHlsZT1cIiR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldFN0eWxlcygoX2YgPSBjc3NUaGVtZS5wb3BvdmVyKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Yub2RzQ2hhcnRzUG9wb3ZlckNvbnRlbnQpfVwiID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib2RzLWNoYXJ0cy1wb3BvdmVyLWFycm93ICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9nID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLm9kc0NoYXJ0c1BvcG92ZXJBcnJvdyl9XCIgc3R5bGU9XCIke2Nzc190aGVtZXNfMS5PRFNDaGFydHNJdGVtQ1NTRGVmaW5pdGlvbi5nZXRTdHlsZXMoKF9oID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLm9kc0NoYXJ0c1BvcG92ZXJBcnJvdyl9OyBsZWZ0OiAke3RoaXMudG9vbHRpcFN0eWxlfVwiID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZHMtY2hhcnRzLXBvcG92ZXItaGVhZGVyICR7Y3NzX3RoZW1lc18xLk9EU0NoYXJ0c0l0ZW1DU1NEZWZpbml0aW9uLmdldENsYXNzZXMoKF9qID0gY3NzVGhlbWUucG9wb3ZlcikgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLm9kc0NoYXJ0c1BvcG92ZXJIZWFkZXIpfVwiIHN0eWxlPVwiJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0U3R5bGVzKChfayA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfay5vZHNDaGFydHNQb3BvdmVySGVhZGVyKX1cIj4ke2VsZW1lbnRzLmNhdGVnb3J5TGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib2RzLWNoYXJ0cy1wb3BvdmVyLWJvZHkgJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0Q2xhc3NlcygoX2wgPSBjc3NUaGVtZS5wb3BvdmVyKSA9PT0gbnVsbCB8fCBfbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2wub2RzQ2hhcnRzUG9wb3ZlckJvZHkpfVwiIHN0eWxlPVwiJHtjc3NfdGhlbWVzXzEuT0RTQ2hhcnRzSXRlbUNTU0RlZmluaXRpb24uZ2V0U3R5bGVzKChfbSA9IGNzc1RoZW1lLnBvcG92ZXIpID09PSBudWxsIHx8IF9tID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbS5vZHNDaGFydHNQb3BvdmVyQm9keSl9XCI+XHJcbiAgICAgICAgICAgICR7dGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnRcbiAgICAgICAgICAgID8gdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnQoZWxlbWVudHMudG9vbHRpcEVsZW1lbnRzKVxuICAgICAgICAgICAgOiB0aGlzLmdldFBvcHVwQ29udGVudChlbGVtZW50cy50b29sdGlwRWxlbWVudHMsIGNzc1RoZW1lLCBtb2RlKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgXHJcbmA7XG4gICAgfVxuICAgIGRpc3BsYXlQb3B1cChldmVudCwgaXRlbSwgY3NzVGhlbWUsIG1vZGUpIHtcbiAgICAgICAgaWYgKDAgIT09IHRoaXMucG9wb3ZlckNvbmZpZy50b29sdGlwRGVsYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXBEZWxheSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9vbHRpcERlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcERlbGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSwgdGhpcy5wb3BvdmVyQ29uZmlnLnRvb2x0aXBEZWxheSA/IHRoaXMucG9wb3ZlckNvbmZpZy50b29sdGlwRGVsYXkgOiAyMDApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpZCA9ICcnICsgTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICAgICAgICBsZXQgdG9vbHRpcEFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWJQb3B1cFRvb2x0aXBBbmNob3InKTtcbiAgICAgICAgaWYgKCF0b29sdGlwQW5jaG9yKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoYDxkaXYgY2xhc3M9XCJsaWJQb3B1cFRvb2x0aXBBbmNob3JcIiA+PC9kaXY+YCwgJ3RleHQvaHRtbCcpLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9vbHRpcEFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWJQb3B1cFRvb2x0aXBBbmNob3InKTtcbiAgICAgICAgdG9vbHRpcEFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIHRvb2x0aXBBbmNob3Iuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAke2V2ZW50LnBhZ2VZfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7ZXZlbnQucGFnZVh9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcG9wb3ZlciA9IHRoaXMucG9wb3ZlckRlZmluaXRpb24uZ2V0T3JDcmVhdGVQb3B1cEluc3RhbmNlKCcubGliUG9wdXBUb29sdGlwQW5jaG9yJywgaXRlbS5jYXRlZ29yeUxhYmVsLCB0aGlzLnBvcG92ZXJEZWZpbml0aW9uLmdldFBvcHVwQ29udGVudFxuICAgICAgICAgICAgICAgID8gdGhpcy5wb3BvdmVyRGVmaW5pdGlvbi5nZXRQb3B1cENvbnRlbnQoaXRlbS50b29sdGlwRWxlbWVudHMpXG4gICAgICAgICAgICAgICAgOiB0aGlzLmdldFBvcHVwQ29udGVudChpdGVtLnRvb2x0aXBFbGVtZW50cywgY3NzVGhlbWUsIG1vZGUpLCB0aGlzLmVudGVyYWJsZSwgbW9kZSk7XG4gICAgICAgICAgICBpZiAoIXBvcG92ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3BvdmVyLnNob3coKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXBUaW1lT3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRvb2x0aXBUaW1lT3V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBUaW1lT3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9wb3ZlckNvbmZpZy50b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b29sdGlwVGltZU91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcG92ZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wb3BvdmVyQ29uZmlnLnRvb2x0aXBUaW1lb3V0ID8gdGhpcy5wb3BvdmVyQ29uZmlnLnRvb2x0aXBUaW1lb3V0IDogMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBBbmNob3IuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcG92ZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5PRFNDaGFydHNQb3BvdmVyID0gT0RTQ2hhcnRzUG9wb3ZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9EU0NoYXJ0c1Jlc2l6ZSA9IHZvaWQgMDtcbmNsYXNzIE9EU0NoYXJ0c1Jlc2l6ZSB7XG4gICAgY29uc3RydWN0b3IoZWNoYXJ0LCBjaGFydElkKSB7XG4gICAgICAgIHRoaXMuZWNoYXJ0ID0gZWNoYXJ0O1xuICAgICAgICB0aGlzLmNoYXJ0SWQgPSBjaGFydElkO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkUmVzaXplTWFuYWdlbWVudChlY2hhcnQsIGNoYXJ0SWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPRFNDaGFydHNSZXNpemUoZWNoYXJ0LCBjaGFydElkKTtcbiAgICB9XG4gICAgZ2V0IGRpdkVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBkaXY7XG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY2hhcnRJZCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIWRpdikge1xuICAgICAgICAgICAgZGl2ID0gdGhpcy5lY2hhcnQuZ2V0RG9tKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGRpdikge1xuICAgICAgICAgICAgICAgIGRpdiA9IGRpdi5wYXJlbnRFbGVtZW50IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBhZGRSZXNpemVNYW5hZ2VtZW50KCkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIGNvbnN0IGRpdiA9IHRoaXMuZGl2RWxlbWVudDtcbiAgICAgICAgaWYgKGRpdiAmJiBSZXNpemVPYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcih0aGlzLnJlc2l6ZUNoYXJ0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRpdik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPRFNDaGFydHNSZXNpemUuc2l6ZUxpc3RlbmVyc1t0aGlzLmNoYXJ0SWRdID0gdGhpcy5yZXNpemVDaGFydC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIE9EU0NoYXJ0c1Jlc2l6ZS5zaXplTGlzdGVuZXJzW3RoaXMuY2hhcnRJZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gdGhpcy5kaXZFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGRpdiAmJiBSZXNpemVPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoT0RTQ2hhcnRzUmVzaXplLnNpemVMaXN0ZW5lcnNbdGhpcy5jaGFydElkXSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBPRFNDaGFydHNSZXNpemUuc2l6ZUxpc3RlbmVyc1t0aGlzLmNoYXJ0SWRdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgT0RTQ2hhcnRzUmVzaXplLnNpemVMaXN0ZW5lcnNbdGhpcy5jaGFydElkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cbiAgICByZXNpemVDaGFydCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHRoaXMuZWNoYXJ0LmdldE9wdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICAgICAgaWYgKGNoYXJ0T3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvcHRzLmFuaW1hdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICdudW1iZXInID09PSB0eXBlb2YgY2hhcnRPcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID8gY2hhcnRPcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uIDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBjaGFydE9wdGlvbnMuYW5pbWF0aW9uRWFzaW5nID8gY2hhcnRPcHRpb25zLmFuaW1hdGlvbkVhc2luZyA6ICdjdWJpY0luT3V0JyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lY2hhcnQucmVzaXplKG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5PRFNDaGFydHNSZXNpemUgPSBPRFNDaGFydHNSZXNpemU7XG5PRFNDaGFydHNSZXNpemUuc2l6ZUxpc3RlbmVycyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT0RTQ2hhcnRzVGhlbWVPYnNlcnZlciA9IHZvaWQgMDtcbmNsYXNzIE9EU0NoYXJ0c1RoZW1lT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVjaGFydCwgcmVkcmF3KSB7XG4gICAgICAgIHRoaXMuZWNoYXJ0ID0gZWNoYXJ0O1xuICAgICAgICB0aGlzLnJlZHJhdyA9IHJlZHJhdztcbiAgICB9XG4gICAgc3RhdGljIGFkZFRoZW1lT2JzZXJ2ZXIoZWNoYXJ0LCByZWRyYXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPRFNDaGFydHNUaGVtZU9ic2VydmVyKGVjaGFydCwgcmVkcmF3KTtcbiAgICB9XG4gICAgZ2V0IGRpdkVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBkaXY7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXYgPSB0aGlzLmVjaGFydC5nZXREb20oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICBpZiAoIWRpdikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIGFkZFRoZW1lT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgbGV0IGRpdiA9IHRoaXMuZGl2RWxlbWVudDtcbiAgICAgICAgaWYgKGRpdiAmJiBNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBkaXYgPSBkaXYuY2xvc2VzdCgnW2RhdGEtYnMtdGhlbWVdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGRpdikge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9ic2VydmVBdHRyaWJ1dGVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IGZhbHNlLCBzdWJ0cmVlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9ic2VydmVBdHRyaWJ1dGVDaGFuZ2UobXV0YXRpb25zLCBvYnNlcnZlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGl2RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbnMuZmluZCgobXV0YXRpb24pID0+IG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1icy10aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5PRFNDaGFydHNUaGVtZU9ic2VydmVyID0gT0RTQ2hhcnRzVGhlbWVPYnNlcnZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsb25lRGVlcE9iamVjdCA9IGNsb25lRGVlcE9iamVjdDtcbmNvbnN0IG1lcmdlX29iamVjdHNfMSA9IHJlcXVpcmUoXCIuL21lcmdlLW9iamVjdHNcIik7XG5mdW5jdGlvbiBjbG9uZURlZXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKCgwLCBtZXJnZV9vYmplY3RzXzEuaXNWYXJPYmplY3QpKG9iaikpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY2xvbmVEZWVwT2JqZWN0KG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbHNlIGlmICgoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyQXJyYXkpKG9iaikpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gY2xvbmVEZWVwT2JqZWN0KG9ialtpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLy9cbi8vIFNvZnR3YXJlIE5hbWU6IE9yYW5nZSBEZXNpZ24gU3lzdGVtIENoYXJ0c1xuLy8gU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogQ29weXJpZ2h0IChjKSAyMDIzIC0gMjAyNSBPcmFuZ2UgU0Fcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvb2tGb3JQYXRocyA9IGxvb2tGb3JQYXRocztcbmV4cG9ydHMuY29uZGl0aW9uYWxDbG9uZURlZXBPYmplY3QgPSBjb25kaXRpb25hbENsb25lRGVlcE9iamVjdDtcbmNvbnN0IG1lcmdlX29iamVjdHNfMSA9IHJlcXVpcmUoXCIuL21lcmdlLW9iamVjdHNcIik7XG5mdW5jdGlvbiBsb29rRm9yUGF0aHMob2JqLCBjb25kaXRpb24sIHNlYXJjaGVkVHlwZXMgPSBbJ3N0cmluZyddLCBjdXJyZW50UGF0aCA9ICcnLCBmb3VuZFBhdGhzID0gW10pIHtcbiAgICBpZiAoc2VhcmNoZWRUeXBlcy5pbmNsdWRlcyh0eXBlb2Ygb2JqKSAmJiBjb25kaXRpb24ob2JqKSkge1xuICAgICAgICBmb3VuZFBhdGhzLnB1c2goY3VycmVudFBhdGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCgwLCBtZXJnZV9vYmplY3RzXzEuaXNWYXJBcnJheSkob2JqKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsb29rRm9yUGF0aHMob2JqW2luZGV4XSwgY29uZGl0aW9uLCBzZWFyY2hlZFR5cGVzLCBjdXJyZW50UGF0aCArICdbJyArIGluZGV4ICsgJ10nLCBmb3VuZFBhdGhzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyT2JqZWN0KShvYmopKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG4gICAgICAgICAgICAgICAgbG9va0ZvclBhdGhzKG9ialtrZXldLCBjb25kaXRpb24sIHNlYXJjaGVkVHlwZXMsICgnJyA9PT0gY3VycmVudFBhdGggPyAnJyA6IGN1cnJlbnRQYXRoICsgJy4nKSArIGtleSwgZm91bmRQYXRocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kUGF0aHM7XG59XG5mdW5jdGlvbiByZWN1cnNpdmVDbG9uZURlZXAob2JqLCBwYXRoc1RvQ29weSwgY3VycmVudFBhdGggPSAnJykge1xuICAgIGlmIChwYXRoc1RvQ29weS5maW5kKChvbmVQYXRoVG9Db3B5KSA9PiBvbmVQYXRoVG9Db3B5LnN0YXJ0c1dpdGgoY3VycmVudFBhdGgpKSkge1xuICAgICAgICBpZiAoKDAsIG1lcmdlX29iamVjdHNfMS5pc1Zhck9iamVjdCkob2JqKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSByZWN1cnNpdmVDbG9uZURlZXAob2JqW2tleV0sIHBhdGhzVG9Db3B5LCAoJycgPT09IGN1cnJlbnRQYXRoID8gJycgOiBjdXJyZW50UGF0aCArICcuJykgKyBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoMCwgbWVyZ2Vfb2JqZWN0c18xLmlzVmFyQXJyYXkpKG9iaikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gcmVjdXJzaXZlQ2xvbmVEZWVwKG9ialtpbmRleF0sIHBhdGhzVG9Db3B5LCBjdXJyZW50UGF0aCArICdbJyArIGluZGV4ICsgJ10nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvbmFsQ2xvbmVEZWVwT2JqZWN0KG9iaiwgY29uZGl0aW9uLCBzZWFyY2hlZFR5cGVzID0gWydzdHJpbmcnXSkge1xuICAgIGNvbnN0IHBhdGhzVG9Db3B5ID0gbG9va0ZvclBhdGhzKG9iaiwgY29uZGl0aW9uLCBzZWFyY2hlZFR5cGVzKTtcbiAgICBpZiAoMCA8IHBhdGhzVG9Db3B5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVjdXJzaXZlQ2xvbmVEZWVwKG9iaiwgcGF0aHNUb0NvcHkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYnVpbGRIYXNoID0gYnVpbGRIYXNoO1xuZXhwb3J0cy5nZXRTdHJpbmdWYWx1ZSA9IGdldFN0cmluZ1ZhbHVlO1xuZnVuY3Rpb24gYnVpbGRIYXNoKHRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB0ZXh0KSB7XG4gICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeSh0ZXh0KTtcbiAgICB9XG4gICAgaWYgKHRleHQubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybiAnJyArIHJlc3VsdDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGV4dC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSB0ZXh0LmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICByZXN1bHQgPSAocmVzdWx0IDw8IDUpIC0gcmVzdWx0ICsgY2hhckNvZGU7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuICcnICsgcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0U3RyaW5nVmFsdWUodGV4dCkge1xuICAgIHJldHVybiAnc3RyaW5nJyA9PT0gdHlwZW9mIHRleHQgPyB0ZXh0IDogYnVpbGRIYXNoKHRleHQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gU29mdHdhcmUgTmFtZTogT3JhbmdlIERlc2lnbiBTeXN0ZW0gQ2hhcnRzXG4vLyBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiBDb3B5cmlnaHQgKGMpIDIwMjMgLSAyMDI1IE9yYW5nZSBTQVxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNWYXJBcnJheSA9IGlzVmFyQXJyYXk7XG5leHBvcnRzLmlzVmFyT2JqZWN0ID0gaXNWYXJPYmplY3Q7XG5leHBvcnRzLmlzVmFyRnVuY3Rpb24gPSBpc1ZhckZ1bmN0aW9uO1xuZXhwb3J0cy5tZXJnZU9iamVjdHMgPSBtZXJnZU9iamVjdHM7XG5mdW5jdGlvbiBpc1ZhckFycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgQXJyYXkuaXNBcnJheShvYmopO1xufVxuZnVuY3Rpb24gaXNWYXJPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFpc1ZhckFycmF5KG9iaik7XG59XG5mdW5jdGlvbiBpc1ZhckZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG9iajEsIG9iajIsIC4uLm9iaikge1xuICAgIGlmIChvYmogJiYgaXNWYXJBcnJheShvYmopICYmIDAgPCBvYmoubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdHMobWVyZ2VPYmplY3RzKG9iajEsIG9iajIpLCBvYmpbMF0sIC4uLm9iai5zbGljZSgxKSk7XG4gICAgfVxuICAgIGlmIChpc1Zhck9iamVjdChvYmoxKSAmJiBpc1Zhck9iamVjdChvYmoyKSkge1xuICAgICAgICBmb3IgKGNvbnN0IG9iajJLZXkgb2YgT2JqZWN0LmtleXMob2JqMikpIHtcbiAgICAgICAgICAgIGlmIChpc1Zhck9iamVjdChvYmoxW29iajJLZXldKSAmJiBpc1Zhck9iamVjdChvYmoyW29iajJLZXldKSkge1xuICAgICAgICAgICAgICAgIG1lcmdlT2JqZWN0cyhvYmoxW29iajJLZXldLCBvYmoyW29iajJLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iajFbb2JqMktleV0gPSBvYmoyW29iajJLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmoxO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
