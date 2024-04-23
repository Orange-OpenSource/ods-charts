//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { type ECharts } from 'echarts';
import { ODSChartsCSSThemeDefinition, ODSChartsCSSThemesNames, ODSChartsItemCSSDefinition } from '../css-themes/css-themes';
import { ODSChartsMode } from '../ods-chart-theme';

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

.ods-charts-no-css-lib .ods-charts-legend-link {
  text-decoration: none;
  padding-bottom: 0.625rem;
  margin-right: 20px;
  margin-left: 20px;
  color: #000;
}
.ods-charts-no-css-lib .ods-charts-legend-link.ods-charts-legend-link-opacity {
  opacity: .25;
}

.ods-charts-no-css-lib .ods-charts-legend-color-holder {
  border: 1px solid #000;
  display: inline-block;
}

.ods-charts-no-css-lib .ods-charts-legend-color {
  width: 10px;
  height: 10px;
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

.ods-charts-no-css-lib.ods-charts-legend-holder.ods-charts-mode-dark {
  background-color: #000;
}
.ods-charts-mode-dark .ods-charts-legend-link {
  color: #fff;
}
`;

export class ODSChartsLegendData {
  public labels: string[] = [];
  public names: string[] = [];
}

export class ODSChartsLegends {
  private constructor(
    private echart: ECharts,
    private legendHolderSelector: string
  ) {}

  public static addLegend(echart: ECharts, legendHolderSelector: string): ODSChartsLegends {
    return new ODSChartsLegends(echart, legendHolderSelector);
  }

  public static getLegendData(dataOptions: any, updateDataOption: boolean = true): ODSChartsLegendData {
    let legendData: string[] = dataOptions.legend && dataOptions.legend.data ? dataOptions.legend.data : [];

    if (!dataOptions.legend || !dataOptions.legend.data) {
      if (dataOptions.dataset && dataOptions.dataset.source) {
        try {
          if (updateDataOption && !dataOptions.legend) {
            dataOptions.legend = {};
          }
          legendData = dataOptions.dataset.source[0].reduce((accumulator: any[], currentValue: any, currentIndex: number) => {
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
        legendData = dataOptions.series.map((serie: any, index: number) => {
          if (!serie.name) {
            throw new Error(`Missing data array of legends in legend chart option`);
          }
          return serie.name;
        });
        if (updateDataOption) {
          dataOptions.legend.data = legendData;
        }
      }
    }

    if (updateDataOption && !dataOptions.series) {
      dataOptions.series = legendData.map((serie: any, index: number) => ({
        name: 'serie_Name_' + index,
      }));
    }
    return {
      labels: legendData,
      names: dataOptions.series.map((serie: any, index: number) => {
        if (!serie.name) {
          if (!updateDataOption) {
            throw new Error(`Missing series names in chart option`);
          }
          serie.name = 'serie_Name_' + index;
        }
        return serie.name;
      }),
    };
  }

  public addLegend(dataOptions: any, colors: string[], cssTheme: ODSChartsCSSThemeDefinition, cssThemeName: ODSChartsCSSThemesNames, mode: ODSChartsMode) {
    if (ODSChartsCSSThemesNames.NONE === cssThemeName && !document.querySelector('#ods-chart-legends-none-css')) {
      let style = document.createElement('style');
      style.id = 'ods-chart-legends-none-css';
      style.textContent = DEFAULT_CSS;
      document.head.appendChild(style);
    }
    if (!document.querySelector(this.legendHolderSelector)) {
      throw new Error(`No legend holder found with selector ${this.legendHolderSelector}`);
    }

    const legends: ODSChartsLegendData = ODSChartsLegends.getLegendData(dataOptions);
    dataOptions.legend.show = false;

    this.generateHandler(cssTheme);
    const legendHolder = document.querySelector(this.legendHolderSelector);
    if (!legendHolder) {
      throw new Error(`Can't find legend holder using the selector ${this.legendHolderSelector}`);
    }

    (document.querySelector(this.legendHolderSelector) as Element).innerHTML = this.generateLegend(colors, legends, cssTheme, mode);
  }

  private generateLegend(colors: string[], legends: { labels: string[]; names: string[] }, cssTheme: ODSChartsCSSThemeDefinition, mode: ODSChartsMode) {
    return `<div class="ods-charts-legend-holder ods-charts-mode-${mode} ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendHolder)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendHolder)}"
    >
    <div class="ods-charts-legend-container ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendContainer)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendContainer)}"
    >
    ${(legends ? legends.labels : []).map(
      (legendLabel: string, index: number) => `<a class="ods-charts-legend-link ${ODSChartsItemCSSDefinition.getClasses(
        cssTheme.legends?.odsChartsLegendLink
      )}" 
      style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendLink)}"
      href="javascript:" onclick="ods_chart_legend_switchLegend[${JSON.stringify(this.legendHolderSelector).replace(/"/g, '&quot;')}](this, ${JSON.stringify(
        legends.names[index]
      ).replace(/"/g, '&quot;')})">
      <span class="ods-charts-legend-color-holder ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendColorHolder)}"
      style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendColorHolder)}">  
      <span style="background-color:${colors[index]}; ${ODSChartsItemCSSDefinition.getStyles(
        cssTheme.legends?.odsChartsLegendColor
      )}" class="ods-charts-legend-color ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendColor)}"></span>
      </span>
  
    <label class="ods-charts-legend-label ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendLabel)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendLabel)}"
    role="button">${legendLabel}</label>
  </a>`
    ).join(`
    `)}
    </div>
    </div>`;
  }

  private generateHandler(cssTheme: ODSChartsCSSThemeDefinition) {
    if (!(window as any).ods_chart_legend_switchLegend) {
      (window as any).ods_chart_legend_switchLegend = {};
    }
    (window as any).ods_chart_legend_switchLegend[this.legendHolderSelector] = (elt: HTMLElement, legendName: string) => {
      const visible = !elt.classList.contains('ods-charts-legend-link-opacity');
      const themeClasses =
        cssTheme.legends && cssTheme.legends.odsChartsLegendLinkOpacity && cssTheme.legends.odsChartsLegendLinkOpacity.classes
          ? cssTheme.legends.odsChartsLegendLinkOpacity.classes
          : [];
      const themeStyles: { [cssProperty: string]: string } = visible
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
        (elt.style as any)[cssProperty] = themeStyles[cssProperty];
      }
      this.echart.dispatchAction({
        type: visible ? 'legendUnSelect' : 'legendSelect',
        name: legendName,
      });
    };
  }
}
