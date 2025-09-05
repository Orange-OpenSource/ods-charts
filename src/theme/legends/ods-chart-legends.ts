//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { type ECharts } from 'echarts';
import { ODSChartsCSSThemeDefinition, ODSChartsCSSThemesNames, ODSChartsItemCSSDefinition } from '../css-themes/css-themes';
import { ODSChartsMode } from '../ods-chart-theme';
import { isVarArray, isVarObject } from '../../tools/merge-objects';
import { ODSChartsLegendHolderDefinition } from './ods-chart-legends-definitions';

const DEFAULT_CSS = `.ods-charts-no-css-lib.ods-charts-legend-holder {
  padding-top: 10px;
  padding-bottom: 20px;
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


.ods-charts-no-css-lib .ods-charts-legend-container-horizontal {
  margin-left: 30px;
  margin-right: 30px;
}

.ods-charts-no-css-lib .ods-charts-legend-link {
  text-decoration: none;
  padding-bottom: 0.625rem;
  margin-right: 10px;
  margin-left: 10px;
  color: var(--bs-body-color, #000000);
}
.ods-charts-no-css-lib .ods-charts-legend-link.ods-charts-legend-link-opacity {
  opacity: .25;
}

.ods-charts-no-css-lib .ods-charts-legend-color-holder {
  display: inline-block;
}

.ods-charts-no-css-lib .ods-charts-legend-color {
  margin-right: 5px;
  width: 12px;
  height: 12px;
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

export class ODSChartsLegendData {
  public labels: string[] = [];
  public names: string[] = [];
}

export class ODSChartsLegends {
  private constructor(
    private echart: ECharts,
    private legendHolders: ODSChartsLegendHolderDefinition[]
  ) {}

  public static addLegend(echart: ECharts, legendHolders: string | ODSChartsLegendHolderDefinition | ODSChartsLegendHolderDefinition[]): ODSChartsLegends {
    const legendHoldersArray: ODSChartsLegendHolderDefinition[] = isVarArray(legendHolders)
      ? (legendHolders as ODSChartsLegendHolderDefinition[])
      : isVarObject(legendHolders)
        ? [legendHolders as ODSChartsLegendHolderDefinition]
        : [{ legendHolderSelector: legendHolders as string }];
    return new ODSChartsLegends(echart, legendHoldersArray);
  }

  public static getLegendData(dataOptions: any, updateDataOption: boolean = true): ODSChartsLegendData {
    let legendData: string[] = dataOptions.legend && dataOptions.legend.data ? dataOptions.legend.data : [];
    let serieNames: string[];
    const monoSerieGraphe = 1 === dataOptions.series.length && dataOptions.series[0].data && ['pie'].includes(dataOptions.series[0].type);

    if (updateDataOption) {
      if (dataOptions.legend) {
        dataOptions.legend = { ...dataOptions.legend };
      }
      if (dataOptions.series) {
        dataOptions.series = [...dataOptions.series.map((v: any) => ({ ...v }))];
      }
    }

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
        if (monoSerieGraphe) {
          legendData = dataOptions.series[0].data.map((serie: any, _index: number) => {
            if (!serie.name) {
              throw new Error(`Missing data array of legends in legend chart option`);
            }
            return serie.name;
          });
        } else {
          legendData = dataOptions.series.map((serie: any, _index: number) => {
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
      serieNames = dataOptions.series[0].data.map((serie: any, _index: number) => {
        if (!serie.name) {
          throw new Error(`Missing data array of legends in legend chart option`);
        }
        return serie.name;
      });
    } else {
      if (updateDataOption && !dataOptions.series) {
        dataOptions.series = legendData.map((_serie: any, index: number) => ({
          name: 'serie_Name_' + index,
        }));
      }
      serieNames = dataOptions.series.map((serie: any, index: number) => {
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

  public addLegend(dataOptions: any, colors: string[], cssTheme: ODSChartsCSSThemeDefinition, cssThemeName: ODSChartsCSSThemesNames, mode: ODSChartsMode) {
    if (ODSChartsCSSThemesNames.NONE === cssThemeName && !document.querySelector('#ods-chart-legends-none-css')) {
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

    const allLegends: ODSChartsLegendData = ODSChartsLegends.getLegendData(dataOptions);
    const legendHolders: { [legendHolderSelector: string]: ODSChartsLegendHolderDefinition & { legends: ODSChartsLegendData & { index: number[] } } } = {};
    let defaultLegendHolder: (ODSChartsLegendHolderDefinition & { legends: ODSChartsLegendData & { index: number[] } }) | undefined = undefined;
    for (const legendHolder of this.legendHolders) {
      if (!document.querySelector(legendHolder.legendHolderSelector)) {
        throw new Error(`No legend holder found with selector ${legendHolder.legendHolderSelector}`);
      }
      legendHolders[legendHolder.legendHolderSelector] = { ...legendHolder, legends: { labels: [], names: [], index: [] } };
      if (!legendHolder.seriesRef) {
        defaultLegendHolder = legendHolders[legendHolder.legendHolderSelector];
      }
    }
    for (let index = 0; index < allLegends.names.length && index < allLegends.labels.length; index++) {
      let legendHolderSelector = Object.keys(legendHolders).find(
        (legendHolderKey) =>
          !!legendHolders[legendHolderKey].seriesRef &&
          (legendHolders[legendHolderKey].seriesRef?.includes(allLegends.names[index]) ||
            legendHolders[legendHolderKey].seriesRef?.includes(allLegends.labels[index]))
      );
      if (!legendHolderSelector) {
        const series = dataOptions.series && dataOptions.series.find((series: { name?: string }) => series.name === allLegends.names[index]);
        if (series && series.stack) {
          legendHolderSelector = Object.keys(legendHolders).find(
            (legendHolderKey) => !!legendHolders[legendHolderKey].seriesRef && legendHolders[legendHolderKey].seriesRef?.includes(series.stack)
          );
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

      (document.querySelector(legendHolderSelector) as Element).innerHTML = this.generateLegend(
        legendHolderSelector,
        colors,
        legendHolders[legendHolderSelector].legends,
        cssTheme,
        mode,
        legendHolders[legendHolderSelector].orientation
      );
    }
  }

  private generateLegend(
    legendHolderSelector: string,
    colors: string[],
    legends: { labels: string[]; names: string[]; index: number[] },
    cssTheme: ODSChartsCSSThemeDefinition,
    mode: ODSChartsMode,
    orientation: 'vertical' | 'horizontal' = 'horizontal'
  ) {
    return `<div class="ods-charts-legend-holder ods-charts-mode-${mode} ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendHolder)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendHolder)}"
    >
    <div class="ods-charts-legend-container ods-charts-legend-container-${orientation} ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendContainer)} ${'vertical' === orientation ? ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendContainerVertical) : ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendContainerHorizontal)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendContainer)} ${'vertical' === orientation ? ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendContainerVertical) : ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendContainerHorizontal)}"
    >
    ${(legends ? legends.labels : []).map((legendLabel: string, indexInHolder: number) => {
      let colorIndex = legends.index[indexInHolder] % colors.length;
      return `<a class="ods-charts-legend-link ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendLink)}" 
      style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendLink)}"
      href="javascript:" onclick="ods_chart_legend_switchLegend[${JSON.stringify(legendHolderSelector).replace(/"/g, '&quot;')}](this, ${JSON.stringify(
        legends.names[indexInHolder]
      ).replace(/"/g, '&quot;')})">
      <span class="ods-charts-legend-color-holder ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendColorHolder)}"
      style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendColorHolder)}">  
      <span style="background-color:${colors[colorIndex]}; ${ODSChartsItemCSSDefinition.getStyles(
        cssTheme.legends?.odsChartsLegendColor
      )}" class="ods-charts-legend-color ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendColor)}"></span>
      </span>
  
    <label class="ods-charts-legend-label ${ODSChartsItemCSSDefinition.getClasses(cssTheme.legends?.odsChartsLegendLabel)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.legends?.odsChartsLegendLabel)}"
    role="button">${legendLabel}</label>
  </a>`;
    }).join(`
    `)}
    </div>
    </div>`;
  }

  private generateHandler(legendHolderSelector: string, cssTheme: ODSChartsCSSThemeDefinition) {
    if (!(window as any).ods_chart_legend_switchLegend) {
      (window as any).ods_chart_legend_switchLegend = {};
    }
    (window as any).ods_chart_legend_switchLegend[legendHolderSelector] = (elt: HTMLElement, legendName: string) => {
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
