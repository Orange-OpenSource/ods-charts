//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { COMMON_LINE_STYLE_BROKEN } from './common/ODS.line-style.broken';
import { COMMON_LINE_STYLE_POINTS } from './common/ODS.line-style.with-points';
import { COMMON_LINE_STYLE_SMOOTH } from './common/ODS.line-style.smooth';
import { EChartsProject, ODS_PROJECT } from './ODS.project';
import { ODSChartsLegends } from './legends/ods-chart-legends';
import { isVarArray, isVarObject, mergeObjects } from '../tools/merge-objects';
import { ODSChartsResize } from './resize/ods-chart-resize';
import { ODSChartsCSSThemeDefinition, ODSChartsCSSThemes, ODSChartsCSSThemesNames } from './css-themes/css-themes';
import { getStringValue } from '../tools/hash';
import { cloneDeepObject } from '../tools/clone-deep-object';
import { ODSChartsPopover } from './popover/ods-chart-popover';
import { ODSChartsPopoverConfig, ODSChartsPopoverDefinition, ODSChartsPopoverManagers } from './popover/ods-chart-popover-definitions';
import { isMainAxis } from './const/main-axis-type.const';
import { ODSChartsLegendHolderDefinition } from './legends/ods-chart-legends-definitions';
import { DEFAULT_COLORS_YELLOW } from './default/ODS.colors.yellow';
import { DEFAULT_COLORS_PURPLE } from './default/ODS.colors.purple';
import { DEFAULT_COLORS_PINK } from './default/ODS.colors.pink';
import { DEFAULT_COLORS_GREEN } from './default/ODS.colors.green';
import { DEFAULT_COLORS_BLUE } from './default/ODS.colors.blue';
import { DEFAULT_COLORS_LIGHTER_TINTS } from './default/ODS.colors.lighter-tints';
import { DEFAULT_COLORS_DARKER_TINTS } from './default/ODS.colors.darker-tints';
import { DEFAULT_COLORS_SUPPORTING_COLORS } from './default/ODS.colors.supporting-colors';
import { DEFAULT_COLORS_FUNCTIONAL } from './default/ODS.colors.functional';
import { DEFAULT_COLORS_CATEGORICAL } from './default/ODS.colors.categorical';
import { DEFAULT_COLORS } from './default/ODS.colors';
import { DEFAULT_COMMON } from './default/ODS.common';
import { DEFAULT_LINES_AXIS } from './default/ODS.lines.axis';
import { ODS_CHARTS_CSS_VARIABLES } from './colors/colors-css-variables';
import { ODSChartsThemeObserver } from './theme-observer/ods-charts-theme-observer';

import { DEFAULT_OUDS_COLORS_BLUE } from './default/OUDS.colors.blue';
import { DEFAULT_OUDS_COLORS_CATEGORICAL } from './default/OUDS.colors.categorical';
import { DEFAULT_OUDS_COLORS_FUNCTIONAL } from './default/OUDS.colors.functional';
import { DEFAULT_OUDS_COLORS_GREEN } from './default/OUDS.colors.green';
import { DEFAULT_OUDS_COLORS_HIGHLIGHT } from './default/OUDS.colors.highlight';
import { DEFAULT_OUDS_COLORS_PINK } from './default/OUDS.colors.pink';
import { DEFAULT_OUDS_COLORS_PURPLE } from './default/OUDS.colors.purple';
import { DEFAULT_OUDS_COLORS_SINGLE } from './default/OUDS.colors.single';
import { DEFAULT_OUDS_COLORS_YELLOW } from './default/OUDS.colors.yellow';
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
export enum ODSChartsColorsSet {
  DEFAULT = 'default',
  CATEGORICAL = 'categorical',
  FUNCTIONAL = 'functional',
  SUPPORTING_COLORS = 'supportingColors',
  DARKER_TINTS = 'darkerTints',
  LIGHTER_TINTS = 'lighterTints',
  SEQUENTIAL_BLUE = 'blue',
  SEQUENTIAL_GREEN = 'green',
  SEQUENTIAL_PINK = 'pink',
  SEQUENTIAL_PURPLE = 'purple',
  SEQUENTIAL_YELLOW = 'yellow',
  OUDS_SEQUENTIAL_BLUE = 'oudsBlue',
  OUDS_SEQUENTIAL_GREEN = 'oudsGreen',
  OUDS_SEQUENTIAL_PINK = 'oudsPink',
  OUDS_SEQUENTIAL_PURPLE = 'oudsPurple',
  OUDS_SEQUENTIAL_YELLOW = 'oudsYellow',
  OUDS_CATEGORICAL = 'oudsCategorical',
  OUDS_FUNCTIONAL = 'oudsFunctional',
  OUDS_HIGHLIGHT = 'oudsHighlight',
  OUDS_SINGLE = 'oudsSingle',
}

/**
 * `ODSChartsCustomColor` is used to define a color.
 *
 * - It can be the string value of the color
 *
 * - Or it can be a {@link ODSChartsColor} to reference a color of one predefined set of Orange Design System colors.
 *
 * example
 * ```
 * {
 *  colorPalette: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
 *  colorIndex: 0,
 * }
 * ```
 */
export type ODSChartsCustomColor = ODSChartsColor | string;

/**
 * `ODSChartsColor` is a color extract from one set of color of Orange Design System.
 */
export interface ODSChartsColor {
  /**
   * The {@link ODSChartsColorsSet} to be used to extract a specific color.
   * (example {@link ODSChartsColorsSet.SUPPORTING_COLORS})
   */
  colorPalette: ODSChartsColorsSet;
  /**
   * Index of the color in the {@link ODSChartsColorsSet}
   */
  colorIndex: number;
}

export enum ODSChartsLineStyle {
  BROKEN = 'broken',
  SMOOTH = 'smooth',
  BROKEN_WITH_POINTS = 'withPoints',
}

export enum ODSChartsMode {
  LIGHT = 'light',
  DARK = 'dark',
  DEFAULT = 'default',
}

/**
 * `ODSChartsThemeOptions` is used to set options of the theme [ODSCharts.getThemeManager( ODSChartsThemeOptions)](../#md:documentation).
 */
export interface ODSChartsThemeOptions {
  /**
   * colors is the set of colors to be used to graph the chart.
   *
   * It can be
   * - one of the predefined {@link ODSChartsColorsSet} defined in Orange Design System
   *
   * example: `ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS`.
   *
   * - Or it can be an array of colors {@link ODSChartsCustomColor}
   *
   * example:
   * ```
   *      [
   *        {
   *          colorPalette:
   *            ODSCharts.ODSChartsColorsSet
   *              .SUPPORTING_COLORS,
   *          colorIndex: 2,
   *        },
   *        {
   *          colorPalette:
   *            ODSCharts.ODSChartsColorsSet.SEQUENTIAL_GREEN,
   *          colorIndex: 0,
   *        },
   *      ]
   * ```
   * Default colors is {@link ODSChartsColorsSet.DEFAULT}
   */
  colors?: ODSChartsColorsSet | ODSChartsCustomColor[];
  /**
   * lineStyle specifies the style of line in lineCharts.
   *
   * It can be {@link ODSChartsLineStyle.BROKEN}, {@link ODSChartsLineStyle.SMOOTH} of {@link ODSChartsLineStyle.BROKEN_WITH_POINTS}.
   *
   * Default lineStyle is {@link ODSChartsLineStyle.SMOOTH}
   */
  lineStyle?: ODSChartsLineStyle;
  /**
   * cssTheme is the CSS styles to be used for designing legends and popover elements.
   *
   * - It is possible to use one of the delivered value of {@link ODSChartsCSSThemes}
   * - It is also possible to defined a cssTheme for any other framework with a {@link ODSChartsCSSThemeDefinition}
   *
   * Default cssTheme in  {@link ODSChartsCSSThemes} is `ODSChartsCSSThemes.NONE`
   */
  cssTheme?: ODSChartsCSSThemeDefinition;
  /**
   * cssSelector the selector of the DOM element where the graph will be built.
   * It is used
   * - to get css variable values when using a third party theme generator base on css variable like Boosted 5.
   * - to determine if the graph is displayed in dark or light mode
   *
   * Default cssSelector is `'body'`
   */
  cssSelector?: string;
}

const THEME: {
  common: any;
  linesAxis: any;
  colors: {
    [colorSet in ODSChartsColorsSet]: { color: string[] };
  };
  visualMapColors: {
    [colorSet in ODSChartsColorsSet]: { visualMapColor: string[] };
  };
  linesStyle: { [style in ODSChartsLineStyle]: any };
} = {
  common: DEFAULT_COMMON,
  linesAxis: DEFAULT_LINES_AXIS,
  colors: {
    default: DEFAULT_COLORS,
    categorical: DEFAULT_COLORS_CATEGORICAL,
    functional: DEFAULT_COLORS_FUNCTIONAL,
    supportingColors: DEFAULT_COLORS_SUPPORTING_COLORS,
    darkerTints: DEFAULT_COLORS_DARKER_TINTS,
    lighterTints: DEFAULT_COLORS_LIGHTER_TINTS,
    blue: DEFAULT_COLORS_BLUE,
    green: DEFAULT_COLORS_GREEN,
    pink: DEFAULT_COLORS_PINK,
    purple: DEFAULT_COLORS_PURPLE,
    yellow: DEFAULT_COLORS_YELLOW,
    oudsBlue: DEFAULT_OUDS_COLORS_BLUE,
    oudsGreen: DEFAULT_OUDS_COLORS_GREEN,
    oudsPink: DEFAULT_OUDS_COLORS_PINK,
    oudsPurple: DEFAULT_OUDS_COLORS_PURPLE,
    oudsYellow: DEFAULT_OUDS_COLORS_YELLOW,
    oudsCategorical: DEFAULT_OUDS_COLORS_CATEGORICAL,
    oudsFunctional: DEFAULT_OUDS_COLORS_FUNCTIONAL,
    oudsHighlight: DEFAULT_OUDS_COLORS_HIGHLIGHT,
    oudsSingle: DEFAULT_OUDS_COLORS_SINGLE,
  },
  visualMapColors: {
    default: { visualMapColor: DEFAULT_COLORS.color },
    categorical: { visualMapColor: DEFAULT_COLORS_CATEGORICAL.color },
    functional: { visualMapColor: DEFAULT_COLORS_FUNCTIONAL.color },
    supportingColors: { visualMapColor: DEFAULT_COLORS_SUPPORTING_COLORS.color },
    darkerTints: { visualMapColor: DEFAULT_COLORS_DARKER_TINTS.color },
    lighterTints: { visualMapColor: DEFAULT_COLORS_LIGHTER_TINTS.color },
    blue: { visualMapColor: DEFAULT_COLORS_BLUE.color },
    green: { visualMapColor: DEFAULT_COLORS_GREEN.color },
    pink: { visualMapColor: DEFAULT_COLORS_PINK.color },
    purple: { visualMapColor: DEFAULT_COLORS_PURPLE.color },
    yellow: { visualMapColor: DEFAULT_COLORS_YELLOW.color },
    oudsBlue: { visualMapColor: DEFAULT_OUDS_COLORS_BLUE.color },
    oudsGreen: { visualMapColor: DEFAULT_OUDS_COLORS_GREEN.color },
    oudsPink: { visualMapColor: DEFAULT_OUDS_COLORS_PINK.color },
    oudsPurple: { visualMapColor: DEFAULT_OUDS_COLORS_PURPLE.color },
    oudsYellow: { visualMapColor: DEFAULT_OUDS_COLORS_YELLOW.color },
    oudsCategorical: { visualMapColor: DEFAULT_OUDS_COLORS_CATEGORICAL.color },
    oudsFunctional: { visualMapColor: DEFAULT_OUDS_COLORS_FUNCTIONAL.color },
    oudsHighlight: { visualMapColor: DEFAULT_OUDS_COLORS_HIGHLIGHT.color },
    oudsSingle: { visualMapColor: DEFAULT_OUDS_COLORS_SINGLE.color },
  },
  linesStyle: {
    broken: COMMON_LINE_STYLE_BROKEN,
    withPoints: COMMON_LINE_STYLE_POINTS,
    smooth: COMMON_LINE_STYLE_SMOOTH,
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
export class ODSChartsTheme {
  private dataOptions: any;
  private chartLegendManager: ODSChartsLegends = undefined as unknown as ODSChartsLegends;
  private chartResizeManager: ODSChartsResize = undefined as unknown as ODSChartsResize;
  private chartPopoverManager: ODSChartsPopover = undefined as unknown as ODSChartsPopover;
  private chartThemeObserver: ODSChartsThemeObserver = undefined as unknown as ODSChartsThemeObserver;
  public cssThemeName: ODSChartsCSSThemesNames;
  private cssVarsMapping: { [variable: string]: string } = {};
  public theme: EChartsProject;

  private _computedStyle: CSSStyleDeclaration | undefined | null = undefined;

  private constructor(
    public name: string,
    private initialTheme: EChartsProject,
    public options: ODSChartsThemeOptions & { mode: ODSChartsMode }
  ) {
    this.cssThemeName =
      (Object.keys(ODSChartsCSSThemes).find(
        (oneTheme) => ODSChartsCSSThemes[oneTheme as ODSChartsCSSThemesNames] === options.cssTheme
      ) as ODSChartsCSSThemesNames) || ODSChartsCSSThemesNames.CUSTOM;
    this.theme = this.calculateTheme();
  }

  private get computedStyle(): CSSStyleDeclaration | undefined {
    if (undefined === this._computedStyle) {
      if (this.options.cssSelector) {
        let contextElement = document.querySelector(
          this.options.cssSelector + '>.ods-charts-style-' + (this.options.mode ? this.options.mode : ODSChartsMode.DEFAULT)
        );
        if (!contextElement) {
          const domElement: Element = (this.options.cssSelector ? document.querySelector(this.options.cssSelector) : null) as Element;
          if (domElement) {
            contextElement = document.createElement('div');
            if (this.options.mode && this.options.mode !== ODSChartsMode.DEFAULT) {
              contextElement.setAttribute('data-bs-theme', this.options.mode);
            }
            contextElement.classList.add('ods-charts-context');
            contextElement.classList.add('ods-charts-style-' + (this.options.mode ? this.options.mode : ODSChartsMode.DEFAULT));
            domElement.append(contextElement);
          }
        }
        if (contextElement) {
          this._computedStyle = window.getComputedStyle(contextElement);
        }
      }
      this._computedStyle = this._computedStyle ? this._computedStyle : null;
      if (!this._computedStyle) {
        console.error('unable to build computed style for chart css context', this.options.cssSelector, this.options.cssSelector);
      }
    }
    return this._computedStyle ? this._computedStyle : undefined;
  }

  private removeComputedStyle() {
    if (this.options.cssSelector) {
      const contextElement = document.querySelector(
        this.options.cssSelector + '>.ods-charts-style-' + (this.options.mode ? this.options.mode : ODSChartsMode.DEFAULT)
      );
      if (contextElement) {
        contextElement.remove();
      }
      this._computedStyle = undefined;
    }
  }

  private getPropertyValue(name: string): string {
    const value = this.computedStyle ? this.computedStyle.getPropertyValue(name) : '';
    return value ? value : '';
  }

  private replaceOneCssVar(css: any) {
    let returnedValue = css;
    if (this.options.cssSelector && 'string' === typeof returnedValue && !!this.computedStyle) {
      try {
        const regex = /var\(([^,]*),?(.*)\)/g;
        const matches = returnedValue.match(regex);
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

  private replaceRecursivelyCssVars<T extends { [key: string]: any }>(subTreeConfig: T): T {
    var newConfig: { [key: string]: any } = subTreeConfig;
    for (const key of Object.keys(newConfig)) {
      if (isVarArray(newConfig[key])) {
        for (let index = 0; index < newConfig[key].length; index++) {
          if (isVarObject(newConfig[key][index])) {
            newConfig[key][index] = this.replaceRecursivelyCssVars(newConfig[key][index]);
          } else if ('string' === typeof newConfig[key][index]) {
            newConfig[key][index] = this.replaceOneCssVar(newConfig[key][index]);
          }
        }
      } else if (isVarObject(newConfig[key])) {
        newConfig[key] = this.replaceRecursivelyCssVars(newConfig[key]);
      } else if ('string' === typeof newConfig[key]) {
        newConfig[key] = this.replaceOneCssVar(newConfig[key]);
      }
    }
    return newConfig as T;
  }

  private replaceAllCssVars<T extends { [key: string]: any }>(themeConfiguration: T): T {
    let result = themeConfiguration;
    if (!document.getElementById('ods-charts-style-' + this.cssThemeName) && ODS_CHARTS_CSS_VARIABLES[this.cssThemeName]) {
      const style = document.createElement('style');
      style.textContent = ODS_CHARTS_CSS_VARIABLES[this.cssThemeName];
      style.id = 'ods-charts-style-' + this.cssThemeName;
      document.querySelector('head')?.append(style);
    }
    if (!!this.computedStyle) {
      result = this.replaceRecursivelyCssVars(themeConfiguration);
      this.removeComputedStyle();
    }
    return result;
  }

  private calculateTheme(): EChartsProject {
    this.cssVarsMapping = {};
    this.theme = this.replaceAllCssVars(cloneDeepObject(this.initialTheme));
    return this.theme;
  }

  private static getMode(divTheme: Element | null | undefined): ODSChartsMode {
    let mode: ODSChartsMode = ODSChartsMode.DEFAULT;
    if (divTheme) {
      const computedStyle = window.getComputedStyle(divTheme);
      if (computedStyle) {
        const foundMode = computedStyle.getPropertyValue('color-scheme');
        if ([ODSChartsMode.DARK, ODSChartsMode.LIGHT].includes(foundMode as ODSChartsMode)) {
          mode = foundMode as ODSChartsMode;
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
   * - {@link ODSChartsThemeOptions.colors}: colors to be used to graph the chart.
   * - {@link ODSChartsThemeOptions.cssTheme}: optionaly indicates a external theme to be used like boosted.
   * - {@link ODSChartsThemeOptions.lineStyle}: style of line in lineCharts.
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
  public static getThemeManager(options?: ODSChartsThemeOptions): ODSChartsTheme {
    if (!options) {
      options = {};
    }
    let mode: ODSChartsMode = ODSChartsMode.DEFAULT;
    if (!options.colors) {
      options.colors = ODSChartsColorsSet.DEFAULT;
    }
    if (!options.lineStyle) {
      options.lineStyle = ODSChartsLineStyle.SMOOTH;
    }
    if (!options.cssTheme) {
      options.cssTheme = ODSChartsCSSThemes.NONE;
    }
    if (!options.cssSelector) {
      options.cssSelector = 'body';
    }

    mode = ODSChartsTheme.getMode(document.querySelector(options.cssSelector));

    var themeName = `ods.${getStringValue(options.colors)}.${getStringValue(options.lineStyle)}`;

    const theme: EChartsProject = cloneDeepObject(ODS_PROJECT);

    mergeObjects(theme, cloneDeepObject(THEME.common));

    mergeObjects(theme, cloneDeepObject(THEME.linesAxis));

    if (typeof options.colors === 'string') {
      mergeObjects(theme, cloneDeepObject(THEME.colors[options.colors]));
      mergeObjects(theme, cloneDeepObject(THEME.visualMapColors[options.colors]));
    } else {
      mergeObjects(
        theme,
        cloneDeepObject({
          color: options.colors.map((color) => ('string' === typeof color ? color : THEME.colors[color.colorPalette].color[color.colorIndex])),
          visualMapColor: options.colors.map((color) =>
            'string' === typeof color ? color : THEME.visualMapColors[color.colorPalette].visualMapColor[color.colorIndex]
          ),
        })
      );
    }

    mergeObjects(theme, cloneDeepObject(THEME.linesStyle[options.lineStyle]));

    return new ODSChartsTheme(themeName, theme, { ...options, mode });
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
  public setDataOptions(options: any): ODSChartsTheme {
    this.dataOptions = options;
    return this;
  }

  private getDisplayedColors(themeColors: string[]) {
    const colors: string[] = cloneDeepObject(themeColors);
    if (this.dataOptions && this.dataOptions.series) {
      for (let serieIndex = 0; serieIndex < this.dataOptions.series.length; serieIndex++) {
        const serie = this.dataOptions.series[serieIndex];
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
  private calculateNewThemeAndAddItInThemeOptions(themeOptions: any): any {
    const newTheme = this.calculateTheme();
    mergeObjects(themeOptions, {
      color: newTheme.color,
      backgroundColor: newTheme.backgroundColor,
      title: newTheme.title,
      grid: { tooltip: newTheme.tooltip },
    });

    if (this.dataOptions.toolbox) {
      themeOptions.toolbox = newTheme.toolbox;
    }
    if (this.dataOptions.timeline) {
      themeOptions.timeline = newTheme.timeline;
    }
    //TODO: check the mapping of radar
    // themeOptions.radar = newTheme.radar;
    //TODO:  missing parallel mapping
    // themeOptions.parallel = newTheme.parallel;
    //TODO: check the mapping of geo
    // themeOptions.geo = newTheme.geo;

    if (this.dataOptions.series) {
      themeOptions.series = [];
      for (let index = 0; index < this.dataOptions.series.length; index++) {
        switch (this.dataOptions.series[index].type) {
          case 'line':
            themeOptions.series[index] = { ...newTheme.line, markPoint: newTheme.markPoint };
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

    if (this.dataOptions.visualMap) {
      themeOptions.visualMap = [];
      for (let index = 0; index < this.dataOptions.series.length; index++) {
        themeOptions.visualMap[index] = newTheme.visualMap;
      }
    }
    for (const axisType of ['xAxis', 'yAxis']) {
      if (this.dataOptions[axisType]) {
        switch (this.dataOptions[axisType].type) {
          case 'category':
            themeOptions[axisType] = mergeObjects(themeOptions[axisType], newTheme.categoryAxis);
            break;
          case 'value':
            themeOptions[axisType] = mergeObjects(themeOptions[axisType], newTheme.valueAxis);
            break;
          case 'log':
            themeOptions[axisType] = mergeObjects(themeOptions[axisType], newTheme.logAxis);
            break;
          case 'time':
            themeOptions[axisType] = mergeObjects(themeOptions[axisType], newTheme.timeAxis);
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
   * @returns modifications to be made to the [Apache Echarts data options](https://echarts.apache.org/en/option.html) to implement the Orange Design System.
   */
  private getThemeOptions(addGlobalThemeOptions: boolean = false): any {
    if (!this.dataOptions) {
      throw new Error('the chart basic options must be set to get the theme completion');
    }
    // need to copy dataOptions as theme feature may change the original dataOptions
    // only make an asign at the first level in order to avoid deep copy of all data
    // each feature is responsible to deep copy the changed part according to their changes
    this.dataOptions = { ...this.dataOptions };

    if (this.chartThemeObserver) {
      this.options.mode = ODSChartsTheme.getMode(this.chartThemeObserver.addThemeObserver());
    }

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

    let themeOptions: any = {
      xAxis: { axisLabel: cloneDeepObject(axisLabel) },
      yAxis: { axisLabel: cloneDeepObject(axisLabel) },
      legend: cloneDeepObject(legend),
    };

    let usedTheme = addGlobalThemeOptions ? this.calculateNewThemeAndAddItInThemeOptions(themeOptions) : this.theme;

    for (const axis of ['xAxis', 'yAxis']) {
      if (!isMainAxis(this.dataOptions[axis]) && !(this.dataOptions[axis] && this.dataOptions[axis].axisLine)) {
        themeOptions[axis].axisLine = { show: false };
        themeOptions[axis].splitLine = { show: false };
      } else {
        themeOptions[axis].axisLine = cloneDeepObject(axisLine);
        themeOptions[axis].splitLine = cloneDeepObject(splitLine);
      }
    }

    const displayedColors = this.getDisplayedColors(usedTheme.color);

    themeOptions = this.replaceAllCssVars(themeOptions);

    if (this.chartLegendManager) {
      try {
        this.chartLegendManager.addLegend(
          this.dataOptions,
          displayedColors,
          this.options.cssTheme as ODSChartsCSSThemeDefinition,
          this.cssThemeName,
          this.options.mode as ODSChartsMode
        );
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
          this.dataOptions,
          themeOptions,
          this.options.cssTheme as ODSChartsCSSThemeDefinition,
          this.cssThemeName,
          this.options.mode as ODSChartsMode
        );
      } catch (error) {
        console.error('unable to init Popover Manager', error);
      }
    }

    return themeOptions;
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
  public externalizeLegends(echart: any, legendHolderSelector: string | ODSChartsLegendHolderDefinition | ODSChartsLegendHolderDefinition[]): ODSChartsTheme {
    this.chartLegendManager = ODSChartsLegends.addLegend(echart, legendHolderSelector);
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
  public externalizePopover(popoverConfig: ODSChartsPopoverConfig = {}, popoverDefinition?: ODSChartsPopoverDefinition): ODSChartsTheme {
    if (!popoverDefinition) {
      popoverDefinition = ODSChartsPopoverManagers.NONE;
    }
    this.chartPopoverManager = ODSChartsPopover.addPopoverManagement(popoverDefinition as ODSChartsPopoverDefinition, popoverConfig);
    return this;
  }

  /**
   * manageChartResize() ensures that the graph resizes correctly when its container is resized
   *
   * @param echart the initialized eCharts object.
   * @param chartId an unique id that identify the chart container in the DOM.
   * @returns the theme manager object itself to be able to chain calls.
   */
  public manageChartResize(echart: any, chartId: string): ODSChartsTheme {
    this.chartResizeManager = ODSChartsResize.addResizeManagement(echart, chartId);
    return this;
  }

  /**
   * manageThemeObserver() is used to enable auto-switch between dark and light mode.
   * It observe the closest element with a data-bs-theme indicator to
   * adapt the graph colour to the new theme.
   * @param echart the initialized eCharts object
   * @returns returns back the theme manager object
   */
  public manageThemeObserver(echart: any): ODSChartsTheme {
    this.chartThemeObserver = ODSChartsThemeObserver.addThemeObserver(echart, () => {
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
  public getChartOptions(addGlobalThemeOptions: boolean = false): any {
    if (!this.dataOptions) {
      throw new Error('the chart basic options must be set to get the theme completion');
    }
    const result = mergeObjects(this.getThemeOptions(addGlobalThemeOptions), this.dataOptions);
    return result;
  }
}
