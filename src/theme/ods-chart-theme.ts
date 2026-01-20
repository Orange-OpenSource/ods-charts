//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { COMMON_LINE_STYLE_BROKEN } from './common/ODS.line-style.broken';
import { COMMON_LINE_STYLE_POINTS } from './common/ODS.line-style.points';
import { COMMON_LINE_STYLE_SMOOTH } from './common/ODS.line-style.smooth';
import { EChartsProject, ODS_PROJECT } from './ODS.project';
import { ODSChartsLegends } from './legends/ods-chart-legends';
import { ODSChartsResize } from './resize/ods-chart-resize';
import { ODSChartsCSSThemeDefinition, ODSChartsCSSThemes, ODSChartsCSSThemesNames } from './css-themes/css-themes';
import { buildHash, getStringValue } from '../tools/hash';
import { cloneDeepObject } from '../tools/clone-deep-object';
import { ODSChartsPopover } from './popover/ods-chart-popover';
import { ODSChartsPopoverConfig, ODSChartsPopoverDefinition, ODSChartsPopoverManagers } from './popover/ods-chart-popover-definitions';
import { isMainAxis } from './const/main-axis-type.const';
import { ODSChartsLegendHolderDefinition } from './legends/ods-chart-legends-definitions';
import { ODSChartsThemeObserver } from './theme-observer/ods-charts-theme-observer';
import { ODSChartsCssHelper } from './css-themes/css-helper';

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
import { DEFAULT_OUDS_COLORS_BLUE } from './default/OUDS.colors.blue';
import { DEFAULT_OUDS_COLORS_CATEGORICAL } from './default/OUDS.colors.categorical';
import { DEFAULT_OUDS_COLORS_FUNCTIONAL } from './default/OUDS.colors.functional';
import { DEFAULT_OUDS_COLORS_GREEN } from './default/OUDS.colors.green';
import { DEFAULT_OUDS_COLORS_HIGHLIGHT } from './default/OUDS.colors.highlight';
import { DEFAULT_OUDS_COLORS_PINK } from './default/OUDS.colors.pink';
import { DEFAULT_OUDS_COLORS_PURPLE } from './default/OUDS.colors.purple';
import { DEFAULT_OUDS_COLORS_SINGLE } from './default/OUDS.colors.single';
import { DEFAULT_OUDS_COLORS_YELLOW } from './default/OUDS.colors.yellow';
import { ODSChartsConfiguration } from '../ods-charts';
import { mergeObjectsAndArrays, mergeObjectsAndReplaceArrays } from '../tools/merge-objects';
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

/**
 * ODSChartsLineStyle is used to define the line style in line charts.
 */
export enum ODSChartsLineStyle {
  /**
   * Broken line style (straight lines between points).
   */
  BROKEN = 'broken',
  /**
   * Smooth line style (curved lines between points).
   */
  SMOOTH = 'smooth',
  /**
   * Broken line style with points displayed.
   */
  BROKEN_WITH_POINTS = 'brokenWithPoints',
  /**
   * Smooth line style with points displayed.
   */
  SMOOTH_WITH_POINTS = 'smoothWithPoints',
  /**
   * Only points displayed, no line.
   */
  POINTS = 'points',
  /**
   * Equivalent to {@link ODSChartsLineStyle.BROKEN_WITH_POINTS}.
   * kept for retrocompatibility.
   * @deprecated Use new value option {@link ODSChartsLineStyle.BROKEN_WITH_POINTS}.
   */
  WITH_POINTS = 'withPoints',
}

// Re-export ODSChartsMode from the separate file to avoid circular dependencies
import { ODSChartsMode } from './ods-chart-mode';
import { COMMON_LINE_STYLE_NONE } from './common/ODS.line-style.none';

export { ODSChartsMode };

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
   *
   * @deprecated Use new configuration option {@link chartConfiguration}.
   */
  lineStyle?: ODSChartsLineStyle;
  /**
   * chart configuration {@link ODSChartsConfiguration}
   */
  chartConfiguration?: ODSChartsConfiguration;
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
    broken: cloneDeepObject(COMMON_LINE_STYLE_BROKEN),
    smooth: cloneDeepObject(COMMON_LINE_STYLE_SMOOTH),
    brokenWithPoints: mergeObjectsAndReplaceArrays(cloneDeepObject(COMMON_LINE_STYLE_BROKEN), cloneDeepObject(COMMON_LINE_STYLE_POINTS)),
    smoothWithPoints: mergeObjectsAndReplaceArrays(cloneDeepObject(COMMON_LINE_STYLE_SMOOTH), cloneDeepObject(COMMON_LINE_STYLE_POINTS)),
    points: mergeObjectsAndReplaceArrays(cloneDeepObject(COMMON_LINE_STYLE_NONE), cloneDeepObject(COMMON_LINE_STYLE_POINTS)),
    // Added for retrocompatibility if a lib user used directly the 'withPoints' string value
    withPoints: mergeObjectsAndReplaceArrays(cloneDeepObject(COMMON_LINE_STYLE_BROKEN), cloneDeepObject(COMMON_LINE_STYLE_POINTS)),
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
  public theme: EChartsProject;
  private cssHelper: ODSChartsCssHelper;
  private _displayedColors: string[] = [];

  private constructor(
    public name: string,
    private initialTheme: EChartsProject,
    public options: ODSChartsThemeOptions & { mode: ODSChartsMode }
  ) {
    this.cssThemeName =
      (Object.keys(ODSChartsCSSThemes).find(
        (oneTheme) => ODSChartsCSSThemes[oneTheme as ODSChartsCSSThemesNames] === options.cssTheme
      ) as ODSChartsCSSThemesNames) || ODSChartsCSSThemesNames.CUSTOM;

    this.cssHelper = new ODSChartsCssHelper(this.options.cssSelector as string, this.options.mode, this.cssThemeName);
    this.theme = this.calculateTheme();
  }

  /**
   * Replace in current theme any colors specify through a css var by its hexa value.
   * Initialised a mapping between a css var and its haxe value for the current theme and dark/light mode.
   * @returns the updated current theme
   */
  private calculateTheme(): EChartsProject {
    this.theme = this.cssHelper.replaceAllCssVars(cloneDeepObject(this.initialTheme));
    return this.theme;
  }

  /**
   * Determine the dark or light mode from the html color-scheme property
   * @param divTheme : div used as html reference element to determine the dark/light mode
   * @returns
   */
  private static getDarkOrLightMode(divTheme: Element | null | undefined): ODSChartsMode {
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
  public static getThemeManager(options?: ODSChartsThemeOptions): ODSChartsTheme {
    if (!options) {
      options = {};
    }
    let mode: ODSChartsMode = ODSChartsMode.DEFAULT;
    if (!options.colors) {
      options.colors = ODSChartsColorsSet.DEFAULT;
    }
    if (!options.chartConfiguration) {
      options.chartConfiguration = ODSChartsConfiguration.getDefaultChartConfiguration();
    }
    if (!options.cssTheme) {
      options.cssTheme = ODSChartsCSSThemes.NONE;
    }
    if (!options.cssSelector) {
      options.cssSelector = 'body';
    }

    mode = ODSChartsTheme.getDarkOrLightMode(document.querySelector(options.cssSelector));

    var themeName = `ods.${getStringValue(options.colors)}.${getStringValue(options.chartConfiguration)}`;

    const theme: EChartsProject = cloneDeepObject(ODS_PROJECT);

    mergeObjectsAndReplaceArrays(theme, cloneDeepObject(THEME.common));

    mergeObjectsAndReplaceArrays(theme, cloneDeepObject(THEME.linesAxis));

    if (typeof options.colors === 'string') {
      mergeObjectsAndReplaceArrays(theme, cloneDeepObject(THEME.colors[options.colors]));
      mergeObjectsAndReplaceArrays(theme, cloneDeepObject(THEME.visualMapColors[options.colors]));
    } else {
      mergeObjectsAndReplaceArrays(
        theme,
        cloneDeepObject({
          color: options.colors.map((color) => ('string' === typeof color ? color : THEME.colors[color.colorPalette].color[color.colorIndex])),
          visualMapColor: options.colors.map((color) =>
            'string' === typeof color ? color : THEME.visualMapColors[color.colorPalette].visualMapColor[color.colorIndex]
          ),
        })
      );
    }

    mergeObjectsAndReplaceArrays(
      theme,
      cloneDeepObject(
        THEME.linesStyle[
          (options.chartConfiguration as any).lineStyle
            ? ((options.chartConfiguration as any).lineStyle as ODSChartsLineStyle)
            : options.lineStyle
              ? options.lineStyle
              : ODSChartsLineStyle.SMOOTH
        ]
      )
    );

    return new ODSChartsTheme(buildHash(themeName), theme, { ...options, mode });
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

  private sliceColor(colors: string[], color: string, seriesIndex: number) {
    const previousColorIndex = colors.indexOf(color);
    if (previousColorIndex > -1) {
      colors.splice(previousColorIndex, 1);
    }
    colors.splice(seriesIndex, 0, color);
  }

  /**
   *
   * @param themeColors : colors set to be used by default
   * @param dataOptions : dataOptions that may content specific color for one data serie
   * @returns : array of colors
   */
  private getDisplayedColors(themeColors: string[], dataOptions: any): string[] {
    const colors: string[] = cloneDeepObject(themeColors);
    if (dataOptions && dataOptions.series) {
      for (let seriesIndex = 0; seriesIndex < dataOptions.series.length; seriesIndex++) {
        const serie = dataOptions.series[seriesIndex];
        if (serie.lineStyle && serie.lineStyle.color) {
          // In case of a line series with a custom color, we will replace the default color by the specified one
          if (serie.lineStyle.color !== colors[seriesIndex]) {
            this.sliceColor(colors, serie.lineStyle.color, seriesIndex);
          }
        } else if (serie.itemStyle && serie.itemStyle.color && serie.itemStyle.color !== colors[seriesIndex]) {
          // In case of a series with custom item style color, we will replace the default color by the specified one
          this.sliceColor(colors, serie.itemStyle.color, seriesIndex);
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
  private calculateNewThemeAndAddItInThemeOptions(themeOptions: any, dataOptions: any): any {
    const newTheme = this.calculateTheme();
    mergeObjectsAndArrays(
      themeOptions,
      {
        color: newTheme.color,
        backgroundColor: newTheme.backgroundColor,
        title: newTheme.title,
        grid: { tooltip: newTheme.tooltip },
      },
      this.options.chartConfiguration?.getDefaultConfiguration()
    );

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
        themeOptions.series[index] = {};
        switch (dataOptions.series[index].type) {
          case 'line':
            themeOptions.series[index] = { ...cloneDeepObject(newTheme.line), markPoint: cloneDeepObject(newTheme.markPoint) };
            break;
          case 'bar':
            themeOptions.series[index] = cloneDeepObject(newTheme.bar);
            break;
          case 'pie':
            themeOptions.series[index] = cloneDeepObject(newTheme.pie);
            break;
          case 'scatter':
            themeOptions.series[index] = cloneDeepObject(newTheme.scatter);
            break;
          case 'boxplot':
            themeOptions.series[index] = cloneDeepObject(newTheme.boxplot);
            break;
          case 'sankey':
            themeOptions.series[index] = cloneDeepObject(newTheme.sankey);
            break;
          case 'funnel':
            themeOptions.series[index] = cloneDeepObject(newTheme.funnel);
            break;
          case 'gauge':
            themeOptions.series[index] = cloneDeepObject(newTheme.gauge);
            break;
          case 'candlestick':
            themeOptions.series[index] = cloneDeepObject(newTheme.candlestick);
            break;
          case 'graph':
            themeOptions.series[index] = cloneDeepObject(newTheme.graph);
            break;
          case 'treemap':
            themeOptions.series[index] = cloneDeepObject(newTheme.map);
            break;
        }
        themeOptions.series[index] = {
          ...themeOptions.series[index],
          ...this.options.chartConfiguration?.getSerieConfiguration(dataOptions.series[index], themeOptions, dataOptions),
        };
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
            themeOptions[axisType] = mergeObjectsAndReplaceArrays(themeOptions[axisType], newTheme.categoryAxis);
            break;
          case 'value':
            themeOptions[axisType] = mergeObjectsAndReplaceArrays(themeOptions[axisType], newTheme.valueAxis);
            break;
          case 'log':
            themeOptions[axisType] = mergeObjectsAndReplaceArrays(themeOptions[axisType], newTheme.logAxis);
            break;
          case 'time':
            themeOptions[axisType] = mergeObjectsAndReplaceArrays(themeOptions[axisType], newTheme.timeAxis);
            break;
        }
      }
    }
    return newTheme;
  }

  /**
   * displayedColors gives the list of colors effectively used to display the data series.
   *
   * It takes into account any specific color defined in the dataOptions for a serie.
   *
   * @returns the list of colors effectively used to display the data series.
   */
  public get displayedColors(): string[] {
    if (this._displayedColors.length === 0) {
      this._displayedColors = this.getDisplayedColors(this.theme.color as string[], this.dataOptions);
    }
    return this._displayedColors;
  }

  /**
   * Get the color used to display a specific series.
   * @param seriesIndex: index of the series
   * @returns the color used to display the series
   */
  public getSeriesColor(seriesIndex: number): string {
    const colors = this.displayedColors;
    return colors[seriesIndex % colors.length];
  }

  /**
   * Get the legend marker HTML code for a specific series.
   * @param seriesIndex: index of the series
   * @returns the HTML code of the legend marker
   */
  public getLegendMarker(seriesIndex: number): string | undefined {
    if (this.chartLegendManager) {
      return `<span style="display: inline-block">${this.chartLegendManager.getSeriesMarker(this.options.cssTheme as ODSChartsCSSThemeDefinition, this.getSeriesColor(seriesIndex))}</span>`;
    }
  }

  /**
   * Get the popover marker HTML code for a specific series.
   * @param seriesIndex: index of the series
   * @returns the HTML code of the popover marker
   */
  public getPopoverMarker(seriesIndex: number): string | undefined {
    if (this.chartPopoverManager) {
      return `<span style="display: inline-block">${this.chartPopoverManager.getSeriesMarker(this.options.cssTheme as ODSChartsCSSThemeDefinition, this.getSeriesColor(seriesIndex))}</span>`;
    }
  }

  /**
   * getThemeOptions() can be used to get the options that should be added to charts options to implement the Orange Design System.
   *
   * getThemeOptions() needs graph data to be already set
   *
   * @param addGlobalThemeOptions indicates if the specificities of the global theme used in the chart init method
   * @returns modifications to be made to the [Apache Echarts data options](https://echarts.apache.org/en/option.html) to implement the Orange Design System and dataOptions with css vars replaced.
   */
  private getThemeOptions(): { themeOptions: any; dataOptions: any } {
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
      const updatedDataOptionsForTheme: any = this.cssHelper.cloneAndReplaceAllCssVars({ ...this.dataOptions });
      updatedDataOptionsForTheme.xAxis = updatedDataOptionsForTheme.xAxis ? cloneDeepObject(updatedDataOptionsForTheme.xAxis) : {};
      updatedDataOptionsForTheme.yAxis = updatedDataOptionsForTheme.yAxis ? cloneDeepObject(updatedDataOptionsForTheme.yAxis) : {};
      updatedDataOptionsForTheme.legend = updatedDataOptionsForTheme.legend ? cloneDeepObject(updatedDataOptionsForTheme.legend) : {};
      updatedDataOptionsForTheme.grid = updatedDataOptionsForTheme.grid ? cloneDeepObject(updatedDataOptionsForTheme.grid) : {};

      const axisLabel = {
        fontStyle: 'normal',
        fontWeight: 'var(--bs-body-font-weight, 400)',
        fontSize: 14,
        fontFamily: 'Helvetica Neue, sans-serif',
        color: 'var(--bs-body-color, #000)',
      };
      const axisLine = {
        show: true,
        lineStyle: {
          width: 2,
          color: 'var(--bs-border-color-subtle, #ccc)',
        },
      };
      const splitLine = {
        show: true,
        lineStyle: {
          width: 1,
          color: 'var(--bs-border-color-subtle, #ccc)',
        },
      };
      const axisTick = {
        show: true,
        alignWithLabel: true,
        length: 8,
        lineStyle: {
          width: 1,
          color: 'var(--bs-border-color-subtle, #ccc)',
        },
      };

      const grid: any = {
        left: 50,
        right: 50,
        top: 50,
        bottom: 30,
      };

      const legend: any = {
        textStyle: {
          fontWeight: 'var(--bs-body-font-weight, 400)',
          fontSize: 14,
          color:
            ODSChartsMode.DEFAULT === this.options.mode
              ? 'var(--bs-body-color, #000)'
              : ODSChartsMode.LIGHT === this.options.mode
                ? 'var(--bs-black, #000)'
                : 'var(--bs-white, #fff)',
          padding: [0, 0, 0, 5],
        },
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12,
      };

      if (!this.chartLegendManager) {
        const legendsOrientation = (updatedDataOptionsForTheme.legend && updatedDataOptionsForTheme.legend.orient) || 'horizontal';
        if ('horizontal' === legendsOrientation) {
          legend.orient = 'horizontal';
          legend.bottom = 20;
          legend.left = 0;
          legend.padding = [0, 40, 10, 40];
          legend.formatter = function (name: string) {
            return name + '   '; // Add spaces at the end of the line
          };
          grid.bottom = 100;
        } else {
          legend.orient = 'vertical';
          legend.right = 50;
          legend.itemGap = 12;
          legend.top = 30;
          grid.right = 200;
        }
      }

      let themeOptions: any = {
        xAxis: { axisLabel: cloneDeepObject(axisLabel) },
        yAxis: { axisLabel: cloneDeepObject(axisLabel) },
        legend: cloneDeepObject(legend),
        grid: cloneDeepObject(grid),
      };

      let usedTheme = this.calculateNewThemeAndAddItInThemeOptions(themeOptions, updatedDataOptionsForTheme);

      for (const axis of ['xAxis', 'yAxis']) {
        if (!isMainAxis(updatedDataOptionsForTheme[axis]) && !(updatedDataOptionsForTheme[axis] && updatedDataOptionsForTheme[axis].axisLine)) {
          // We configure a value axis with no line, no split but keeping the label and the split
          themeOptions[axis].axisLine = { show: false };
          themeOptions[axis].splitLine = cloneDeepObject(splitLine);
          themeOptions[axis].axisTick = { show: false };
        } else {
          // For categorical and time axis, we do not display split lines but keep axis line.
          themeOptions[axis].axisLine = cloneDeepObject(axisLine);
          themeOptions[axis].splitLine = { show: false };
          // we also display ticks if we display only line
          if (this.dataOptions.series?.every((serie: any) => serie.type === 'line')) {
            themeOptions[axis].axisTick = cloneDeepObject(axisTick);
          } else {
            themeOptions[axis].axisTick = { show: false };
          }
        }
      }

      this._displayedColors = this.getDisplayedColors(usedTheme.color, updatedDataOptionsForTheme);

      themeOptions = this.cssHelper.replaceAllCssVars(themeOptions);

      if (this.chartLegendManager) {
        try {
          this.chartLegendManager.addLegend(
            updatedDataOptionsForTheme,
            this._displayedColors,
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
            updatedDataOptionsForTheme,
            themeOptions,
            this._displayedColors,
            this.options.cssTheme as ODSChartsCSSThemeDefinition,
            this.cssThemeName,
            this.options.mode as ODSChartsMode
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
   * Example of use with a single legend container:
   * ```
   * themeManager.externalizeLegends(
   *   myChart,
   *   '#my_legend_container'
   * );
   * ```
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
      echart.setOption(this.getChartOptions());
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
  public getChartOptions(): any {
    if (!this.dataOptions) {
      throw new Error('the chart basic options must be set to get the theme completion');
    }

    const { themeOptions, dataOptions } = this.getThemeOptions();
    return mergeObjectsAndArrays(themeOptions, dataOptions);
  }
}
