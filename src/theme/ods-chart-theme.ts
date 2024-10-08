//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { LIGHT_COMMON } from './light/ODS.common';
import { LIGHT_LINES_AXIS } from './light/ODS.lines.axis';
import { LIGHT_CATEGORICAL_COLORS } from './light/ODS.categorical-colors';
import { LIGHT_CATEGORICAL_COLORS_CATEGORICAL } from './light/ODS.categorical-colors.categorical';
import { LIGHT_CATEGORICAL_COLORS_FUNCTIONAL } from './light/ODS.categorical-colors.functional';
import { LIGHT_CATEGORICAL_COLORS_SUPPORTING_COLORS } from './light/ODS.categorical-colors.supporting-colors';
import { LIGHT_CATEGORICAL_COLORS_DARKER_TINTS } from './light/ODS.categorical-colors.darker-tints';
import { LIGHT_CATEGORICAL_COLORS_LIGHTER_TINTS } from './light/ODS.categorical-colors.lighter-tints';
import { LIGHT_CATEGORICAL_COLORS_BLUE } from './light/ODS.categorical-colors.blue';
import { LIGHT_CATEGORICAL_COLORS_GREEN } from './light/ODS.categorical-colors.green';
import { LIGHT_CATEGORICAL_COLORS_PINK } from './light/ODS.categorical-colors.pink';
import { LIGHT_CATEGORICAL_COLORS_PURPLE } from './light/ODS.categorical-colors.purple';
import { LIGHT_CATEGORICAL_COLORS_YELLOW } from './light/ODS.categorical-colors.yellow';
import { LIGHT_SEQUENTIAL_COLORS_BLUE } from './light/ODS.sequential-colors.blue';
import { LIGHT_SEQUENTIAL_COLORS_GREEN } from './light/ODS.sequential-colors.green';
import { LIGHT_SEQUENTIAL_COLORS_PINK } from './light/ODS.sequential-colors.pink';
import { LIGHT_SEQUENTIAL_COLORS_PURPLE } from './light/ODS.sequential-colors.purple';
import { LIGHT_SEQUENTIAL_COLORS_YELLOW } from './light/ODS.sequential-colors.yellow';
import { COMMON_LINE_STYLE_BROKEN } from './common/ODS.line-style.broken';
import { COMMON_LINE_STYLE_POINTS } from './common/ODS.line-style.with-points';
import { COMMON_LINE_STYLE_SMOOTH } from './common/ODS.line-style.smooth';
import { DARK_COMMON } from './dark/ODS.common';
import { DARK_LINES_AXIS } from './dark/ODS.lines.axis';
import { DARK_CATEGORICAL_COLORS } from './dark/ODS.categorical-colors';
import { DARK_CATEGORICAL_COLORS_CATEGORICAL } from './dark/ODS.categorical-colors.categorical';
import { DARK_CATEGORICAL_COLORS_FUNCTIONAL } from './dark/ODS.categorical-colors.functional';
import { DARK_CATEGORICAL_COLORS_SUPPORTING_COLORS } from './dark/ODS.categorical-colors.supporting-colors';
import { DARK_CATEGORICAL_COLORS_DARKER_TINTS } from './dark/ODS.categorical-colors.darker-tints';
import { DARK_CATEGORICAL_COLORS_LIGHTER_TINTS } from './dark/ODS.categorical-colors.lighter-tints';
import { DARK_CATEGORICAL_COLORS_BLUE } from './dark/ODS.categorical-colors.blue';
import { DARK_CATEGORICAL_COLORS_GREEN } from './dark/ODS.categorical-colors.green';
import { DARK_CATEGORICAL_COLORS_PINK } from './dark/ODS.categorical-colors.pink';
import { DARK_CATEGORICAL_COLORS_PURPLE } from './dark/ODS.categorical-colors.purple';
import { DARK_CATEGORICAL_COLORS_YELLOW } from './dark/ODS.categorical-colors.yellow';
import { DARK_SEQUENTIAL_COLORS_BLUE } from './dark/ODS.sequential-colors.blue';
import { DARK_SEQUENTIAL_COLORS_GREEN } from './dark/ODS.sequential-colors.green';
import { DARK_SEQUENTIAL_COLORS_PINK } from './dark/ODS.sequential-colors.pink';
import { DARK_SEQUENTIAL_COLORS_PURPLE } from './dark/ODS.sequential-colors.purple';
import { DARK_SEQUENTIAL_COLORS_YELLOW } from './dark/ODS.sequential-colors.yellow';
import { EChartsProject, ODS_PROJECT } from './ODS.project';
import { ODSChartsLegends } from './legends/ods-chart-legends';
import { mergeObjects } from '../tools/merge-objects';
import { ODSChartsResize } from './resize/ods-chart-resize';
import { ODSChartsCSSThemeDefinition, ODSChartsCSSThemes, ODSChartsCSSThemesNames } from './css-themes/css-themes';
import { getStringValue } from '../tools/hash';
import { cloneDeepObject } from '../tools/clone-deep-object';
import { ODSChartsPopover } from './popover/ods-chart-popover';
import { ODSChartsPopoverConfig, ODSChartsPopoverDefinition, ODSChartsPopoverManagers } from './popover/ods-chart-popover-definitions';
import { isMainAxis } from './const/main-axis-type.const';
import { ODSChartsLegendHolderDefinition } from './legends/ods-chart-legends-definitions';

/**
 * ODSChartsCategoricalColorsSet is used for predefined color sets.
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
 */
export enum ODSChartsCategoricalColorsSet {
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
}

/**
 * ODSChartsCustomCategoricalColor is used to define a color.
 *
 * - It can be the string value of the color
 *
 * - Or it can be a {@link ODSChartsCategoricalColor} to reference a color of one predefined set of Orange Design System colors.
 *
 * example
 * ```
 * {
 *  colorPalette: ODSCharts.ODSChartsCategoricalColorsSet.DARKER_TINTS,
 *  colorIndex: 0,
 * }
 * ```
 */
export type ODSChartsCustomCategoricalColor = ODSChartsCategoricalColor | string;

/**
 * ODSChartsCategoricalColor is a color extract from one set of color of Orange Design System.
 */
export interface ODSChartsCategoricalColor {
  /**
   * The {@link ODSChartsCategoricalColorsSet} to be used to extract a specific color.
   * (example {@link ODSChartsCategoricalColorsSet.SUPPORTING_COLORS})
   */
  colorPalette: ODSChartsCategoricalColorsSet;
  /**
   * Index of the color in the {@link ODSChartsCategoricalColorsSet}
   */
  colorIndex: number;
}

export enum ODSChartsSequentialColorsSet {
  SEQUENTIAL_BLUE = 'blue',
  SEQUENTIAL_GREEN = 'green',
  SEQUENTIAL_PINK = 'pink',
  SEQUENTIAL_PURPLE = 'purple',
  SEQUENTIAL_YELLOW = 'yellow',
}

export enum ODSChartsLineStyle {
  BROKEN = 'broken',
  SMOOTH = 'smooth',
  BROKEN_WITH_POINTS = 'withPoints',
}

export enum ODSChartsMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ODSChartsThemeOptions {
  /**
   * The mode of the theme can be {@link ODSChartsMode.LIGHT} or  {@link ODSChartsMode.DARK}.
   *
   * Default mode is {@link ODSChartsMode.LIGHT}
   */
  mode?: ODSChartsMode;
  /**
   * categoricalColors is the set of colors to be used to graph the chart.
   *
   * It can be
   * - one of the predefined {@link ODSChartsCategoricalColorsSet} defined in Orange Design System
   *
   * example: `ODSCharts.ODSChartsCategoricalColorsSet.SUPPORTING_COLORS`.
   *
   * - Or it can be an array of colors {@link ODSChartsCustomCategoricalColor}
   *
   * example:
   * ```
   *      [
   *        {
   *          colorPalette:
   *            ODSCharts.ODSChartsCategoricalColorsSet
   *              .SUPPORTING_COLORS,
   *          colorIndex: 2,
   *        },
   *        {
   *          colorPalette:
   *            ODSCharts.ODSChartsCategoricalColorsSet.SEQUENTIAL_GREEN,
   *          colorIndex: 0,
   *        },
   *      ]
   * ```
   * Default categoricalColors is {@link ODSChartsCategoricalColorsSet.DEFAULT}
   */
  categoricalColors?: ODSChartsCategoricalColorsSet | ODSChartsCustomCategoricalColor[];
  /**
   * visualMapColor is the set of colors to be used if map graphs (like Heatmap)
   *
   * Default visualMapColor is {@link ODSChartsSequentialColorsSet.SEQUENTIAL_BLUE}
   */
  visualMapColor?: ODSChartsSequentialColorsSet;
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
   * Default cssTheme is {@link ODSChartsCSSThemes.NONE}
   */
  cssTheme?: ODSChartsCSSThemeDefinition;
}

const THEMES: {
  [mode in ODSChartsMode]: {
    common: any;
    linesAxis: any;
    categoricalColors: {
      [colorSet in ODSChartsCategoricalColorsSet]: { color: string[] };
    };
    sequentialColors: {
      [colorSet in ODSChartsSequentialColorsSet]: { visualMapColor: string[] };
    };
    linesStyle: { [style in ODSChartsLineStyle]: any };
  };
} = {
  light: {
    common: LIGHT_COMMON,
    linesAxis: LIGHT_LINES_AXIS,
    categoricalColors: {
      default: LIGHT_CATEGORICAL_COLORS,
      categorical: LIGHT_CATEGORICAL_COLORS_CATEGORICAL,
      functional: LIGHT_CATEGORICAL_COLORS_FUNCTIONAL,
      supportingColors: LIGHT_CATEGORICAL_COLORS_SUPPORTING_COLORS,
      darkerTints: LIGHT_CATEGORICAL_COLORS_DARKER_TINTS,
      lighterTints: LIGHT_CATEGORICAL_COLORS_LIGHTER_TINTS,
      blue: LIGHT_CATEGORICAL_COLORS_BLUE,
      green: LIGHT_CATEGORICAL_COLORS_GREEN,
      pink: LIGHT_CATEGORICAL_COLORS_PINK,
      purple: LIGHT_CATEGORICAL_COLORS_PURPLE,
      yellow: LIGHT_CATEGORICAL_COLORS_YELLOW,
    },
    sequentialColors: {
      blue: LIGHT_SEQUENTIAL_COLORS_BLUE,
      green: LIGHT_SEQUENTIAL_COLORS_GREEN,
      pink: LIGHT_SEQUENTIAL_COLORS_PINK,
      purple: LIGHT_SEQUENTIAL_COLORS_PURPLE,
      yellow: LIGHT_SEQUENTIAL_COLORS_YELLOW,
    },
    linesStyle: {
      broken: COMMON_LINE_STYLE_BROKEN,
      withPoints: COMMON_LINE_STYLE_POINTS,
      smooth: COMMON_LINE_STYLE_SMOOTH,
    },
  },
  dark: {
    common: DARK_COMMON,
    linesAxis: DARK_LINES_AXIS,
    categoricalColors: {
      default: DARK_CATEGORICAL_COLORS,
      categorical: DARK_CATEGORICAL_COLORS_CATEGORICAL,
      functional: DARK_CATEGORICAL_COLORS_FUNCTIONAL,
      supportingColors: DARK_CATEGORICAL_COLORS_SUPPORTING_COLORS,
      darkerTints: DARK_CATEGORICAL_COLORS_DARKER_TINTS,
      lighterTints: DARK_CATEGORICAL_COLORS_LIGHTER_TINTS,
      blue: DARK_CATEGORICAL_COLORS_BLUE,
      green: DARK_CATEGORICAL_COLORS_GREEN,
      pink: DARK_CATEGORICAL_COLORS_PINK,
      purple: DARK_CATEGORICAL_COLORS_PURPLE,
      yellow: DARK_CATEGORICAL_COLORS_YELLOW,
    },
    sequentialColors: {
      blue: DARK_SEQUENTIAL_COLORS_BLUE,
      green: DARK_SEQUENTIAL_COLORS_GREEN,
      pink: DARK_SEQUENTIAL_COLORS_PINK,
      purple: DARK_SEQUENTIAL_COLORS_PURPLE,
      yellow: DARK_SEQUENTIAL_COLORS_YELLOW,
    },
    linesStyle: {
      broken: COMMON_LINE_STYLE_BROKEN,
      withPoints: COMMON_LINE_STYLE_POINTS,
      smooth: COMMON_LINE_STYLE_SMOOTH,
    },
  },
};

/**
 * ODSChartsTheme is the object get by `ODSCharts.getThemeManager`({@link ODSChartsThemeOptions})
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
 * // Manage window size changed
 * themeManager.manageChartResize(...);
 * // Register the externalization of the tooltip/popup
 * themeManager.externalizePopover(...);
 * // Display the chart using the configured theme and data.
 * myChart.setOption(themeManager.getChartOptions());
 * ```
 */
export class ODSChartsTheme {
  private dataOptions: any;
  private chartLegendManager: ODSChartsLegends = undefined as unknown as ODSChartsLegends;
  private chartResizeManager: ODSChartsResize = undefined as unknown as ODSChartsResize;
  private chartPopoverManager: ODSChartsPopover = undefined as unknown as ODSChartsPopover;
  public cssThemeName: ODSChartsCSSThemesNames;

  private constructor(
    public name: string,
    public theme: EChartsProject,
    public options: ODSChartsThemeOptions
  ) {
    this.cssThemeName =
      (Object.keys(ODSChartsCSSThemes).find(
        (oneTheme) => ODSChartsCSSThemes[oneTheme as ODSChartsCSSThemesNames] === options.cssTheme
      ) as ODSChartsCSSThemesNames) || ODSChartsCSSThemesNames.CUSTOM;
  }

  /**
   * Entry point of the library. It returns the generated theme manager.
   *
   * This manager is used to retrieve the Apache ECharts theme and manage the chart options in accordance with the Orange Design System.
   *
   * The method takes the theme configuration as a parameter {@link ODSChartsThemeOptions}.
   * @param options default option used to generate the theme
   * @returns the theme manager
   */
  public static getThemeManager(options?: ODSChartsThemeOptions): ODSChartsTheme {
    if (!options) {
      options = {};
    }
    if (!options.mode) {
      options.mode = ODSChartsMode.LIGHT;
    }
    const mode: ODSChartsMode = options.mode;
    if (!options.categoricalColors) {
      options.categoricalColors = ODSChartsCategoricalColorsSet.DEFAULT;
    }
    if (!options.visualMapColor) {
      options.visualMapColor = ODSChartsSequentialColorsSet.SEQUENTIAL_BLUE;
    }
    if (!options.lineStyle) {
      options.lineStyle = ODSChartsLineStyle.SMOOTH;
    }
    if (!options.cssTheme) {
      options.cssTheme = ODSChartsCSSThemes.NONE;
    }
    var themeName = `ods.${getStringValue(mode)}.${getStringValue(options.categoricalColors)}.${getStringValue(options.visualMapColor)}.${getStringValue(
      options.lineStyle
    )}`;

    const theme: EChartsProject = cloneDeepObject(ODS_PROJECT);

    mergeObjects(theme, cloneDeepObject(THEMES[mode].common));

    mergeObjects(theme, cloneDeepObject(THEMES[mode].linesAxis));

    if (typeof options.categoricalColors === 'string') {
      mergeObjects(theme, cloneDeepObject(THEMES[mode].categoricalColors[options.categoricalColors]));
    } else {
      mergeObjects(
        theme,
        cloneDeepObject({
          color: options.categoricalColors.map((color) =>
            'string' === typeof color ? color : THEMES[mode].categoricalColors[color.colorPalette].color[color.colorIndex]
          ),
        })
      );
    }

    mergeObjects(theme, cloneDeepObject(THEMES[mode].sequentialColors[options.visualMapColor]));

    mergeObjects(theme, cloneDeepObject(THEMES[mode].linesStyle[options.lineStyle]));

    return new ODSChartsTheme(themeName, theme, options);
  }

  /**
   * setDataOptions is used to set the graph data.
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
   * @param options
   * @returns returns back the theme manager object
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
   * getThemeOptions() can be used to get the options that should be added to charts options to implement the Orange Design System.
   *
   * getThemeOptions() does not need to be called if you use getChartOptions() as getChartOptions() internally already calls it.
   *
   * getThemeOptions() needs graph data, already set or given in the dataOptions parameter
   * @returns  returns back the theme manager object
   */
  public getThemeOptions(dataOptions?: any): any {
    if (dataOptions) {
      this.dataOptions = dataOptions;
    }
    if (!this.dataOptions) {
      throw new Error('the chart basic options must be set to get the theme completion');
    }
    // need to copy dataOptions as theme feature may change the original dataOptions
    // only make an asign at the first level in order to avoid deep copy of all data
    // each feature is responsible to deep copy the changed part according to their changes
    this.dataOptions = { ...this.dataOptions };

    const axisLabel = {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 14,
      fontFamily: 'Helvetica Neue, sans-serif',
      color: ODSChartsMode.LIGHT === this.options.mode ? 'rgba(0, 0, 0, 1)' : '#FFFFFF',
    };
    const axisLine = {
      show: true,
      lineStyle: {
        width: 2,
        color: ODSChartsMode.LIGHT === this.options.mode ? '#CCCCCC' : '#666666',
      },
    };
    const splitLine = {
      show: true,
      lineStyle: {
        width: 1,
        color: ODSChartsMode.LIGHT === this.options.mode ? '#CCCCCC' : '#666666',
      },
    };
    const legend = {
      textStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: ODSChartsMode.LIGHT === this.options.mode ? '#000000' : '#FFFFFF',
      },
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      itemStyle: {
        borderColor: ODSChartsMode.LIGHT === this.options.mode ? '#000000' : '#FFFFFF',
        borderWidth: 1,
      },
    };

    const themeOptions: any = {
      xAxis: { axisLabel: cloneDeepObject(axisLabel) },
      yAxis: { axisLabel: cloneDeepObject(axisLabel) },
      legend: cloneDeepObject(legend),
    };

    for (const axis of ['xAxis', 'yAxis']) {
      if (!isMainAxis(this.dataOptions[axis]) && !(this.dataOptions[axis] && this.dataOptions[axis].axisLine)) {
        themeOptions[axis].axisLine = { show: false };
        themeOptions[axis].splitLine = { show: false };
      } else {
        themeOptions[axis].axisLine = cloneDeepObject(axisLine);
        themeOptions[axis].splitLine = cloneDeepObject(splitLine);
      }
    }

    const displayedColors = this.getDisplayedColors(this.theme.color);

    if (this.chartLegendManager) {
      this.chartLegendManager.addLegend(
        this.dataOptions,
        displayedColors,
        this.options.cssTheme as ODSChartsCSSThemeDefinition,
        this.cssThemeName,
        this.options.mode as ODSChartsMode
      );
    }

    if (this.chartResizeManager) {
      this.chartResizeManager.addResizeManagement();
    }

    if (this.chartPopoverManager) {
      this.chartPopoverManager.addPopoverManagement(
        this.dataOptions,
        themeOptions,
        this.options.cssTheme as ODSChartsCSSThemeDefinition,
        this.cssThemeName,
        this.options.mode as ODSChartsMode
      );
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
   * externalizeLegends() needs:
   * - echart: the initialized eCharts object
   * - legendHolderSelector: the CSS selector of the legends container if it a string. But it can also be a {@link ODSChartsLegendHolderDefinition} or an array of {@link ODSChartsLegendHolderDefinition}
   *
   * optionally you can use this call to set dataOptions
   * @returns returns back the theme manager object
   */
  public externalizeLegends(
    echart: any,
    legendHolderSelector: string | ODSChartsLegendHolderDefinition | ODSChartsLegendHolderDefinition[],
    dataOptions?: any
  ): ODSChartsTheme {
    if (dataOptions) {
      this.dataOptions = dataOptions;
    }
    this.chartLegendManager = ODSChartsLegends.addLegend(echart, legendHolderSelector);
    return this;
  }

  /**
   * externalizePopover() configure the manager to externalize the management of popover or tooltip.
   *
   * The generated tooltips or popover will implement the Orange Design System.
   *
   * externalizePopover() needs:
   * - popoverConfig: the configuration of the externalizePopover feature {@link ODSChartsPopoverConfig}
   * - popoverDefinition: a renderer {@link ODSChartsPopoverDefinition} of the popover/tooltip
   *
   *   {@link ODSChartsPopoverManagers} gives preconfigured renderer
   *
   *   default value is  {@link ODSChartsPopoverManagers.NONE}: uses default Apache ECharts template to externalize tooltip/popover HTML element, implementing Orange Design system
   *
   * optionally you can use this call to set dataOptions
   * @returns returns back the theme manager object
   */
  public externalizePopover(popoverConfig: ODSChartsPopoverConfig = {}, popoverDefinition?: ODSChartsPopoverDefinition, dataOptions?: any): ODSChartsTheme {
    if (dataOptions) {
      this.dataOptions = dataOptions;
    }
    if (!popoverDefinition) {
      popoverDefinition = ODSChartsPopoverManagers.NONE;
    }
    this.chartPopoverManager = ODSChartsPopover.addPopoverManagement(popoverDefinition as ODSChartsPopoverDefinition, popoverConfig);
    return this;
  }

  /**
   * manageChartResize() ensures that the graph resizes correctly when the window is resized
   *
   * manageChartResize() needs:
   * - echart: the initialized eCharts object
   * - chartId: an unique id to identify the chart
   *
   * optionally you can use this call to set dataOptions
   * @returns returns back the theme manager object
   */
  public manageChartResize(echart: any, chartId: string, dataOptions?: any): ODSChartsTheme {
    if (dataOptions) {
      this.dataOptions = dataOptions;
    }
    this.chartResizeManager = ODSChartsResize.addResizeManagement(echart, chartId);
    return this;
  }

  /**
   * getChartOptions() build the eCharts options merging
   * - options implementing the Orange Design System
   * - optionally options implementing {@link externalizeLegends},
   * - optionally options implementing {@link externalizePopover},
   * - optionally options implementing {@link manageChartResize},
   * - data from {@link setDataOptions}
   *
   * optionally you can use this call to set dataOptions
   * @returns the Apache ECharts options
   */
  public getChartOptions(dataOptions?: any): any {
    if (dataOptions) {
      this.dataOptions = dataOptions;
    }
    if (!this.dataOptions) {
      throw new Error('the chart basic options must be set to get the theme completion');
    }
    const result = mergeObjects(this.getThemeOptions(), this.dataOptions);
    return result;
  }
}
