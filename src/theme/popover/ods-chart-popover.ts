//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { ODSChartsCSSThemeDefinition, ODSChartsCSSThemesNames, ODSChartsItemCSSDefinition } from '../css-themes/css-themes';
import { mergeObjects, isVarArray } from '../../tools/merge-objects';
import {
  ODSChartsPopoverAxisPointer,
  ODSChartsPopoverConfig,
  ODSChartsPopoverDefinition,
  ODSChartsPopoverDefinitionWithRenderer,
  ODSChartsPopoverItem,
  ODSChartsPopoverManagers,
} from './ods-chart-popover-definitions';
import { ODSChartsLegendData, ODSChartsLegends } from '../legends/ods-chart-legends';
import { cloneDeepObject } from '../../tools/clone-deep-object';
import { ODSChartsMode } from '../ods-chart-theme';
import { isMainAxis } from '../const/main-axis-type.const';

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
  background-color: white;
  border: 2px solid rgb(204, 204, 204);
  padding: 20px 18px 20px 18px;
}

.ods-charts-popover .ods-charts-popover-header {
  color: black;
  font-size: 18px;
  font-weight: 700;
  padding-bottom:10px;
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
  border-top-color: rgb(204, 204, 204);
  border-width: 10px;
  border-bottom-width: 0px;
  border-style: solid;
  top: 2px;
  left: 0;
}
.ods-charts-popover .ods-charts-popover-arrow::after {
  border-color: transparent;
  border-top-color: white;
  border-width: 10px;
  border-bottom-width: 0px;
  position: absolute;
  display: block;
  content: "";
  border-style: solid;
  top: 0;
  left: 0;
}
`;

const DEFAULT_NONE_CSS = `
.ods-charts-no-css-lib .ods-charts-popover-color-holder {
  border: 1px solid #000;
  display: inline-block;
}

.ods-charts-no-css-lib .ods-charts-popover-color {
  width: 10px;
  height: 10px;
  position: relative;
  display: block;
}
.ods-charts-no-css-lib .ods-charts-popover-text {
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: black;
}
`;

export class ODSChartsPopover {
  private tooltipTimeOut: any;
  private tooltipDelay: any;
  private tooltipStyle: string = '';
  private enterable: boolean = false;
  private constructor(
    private popoverDefinition: ODSChartsPopoverDefinition,
    private popoverConfig: ODSChartsPopoverConfig
  ) {}

  public static addPopoverManagement(popoverDefinition: ODSChartsPopoverDefinition, popoverConfig: ODSChartsPopoverConfig): ODSChartsPopover {
    if (undefined === popoverDefinition) {
      popoverDefinition = ODSChartsPopoverManagers.NONE as ODSChartsPopoverDefinition;
    }
    if (undefined === popoverConfig) {
      popoverConfig = {};
    }
    if (undefined === popoverConfig.enabled) {
      popoverConfig.enabled = true;
    }
    if (undefined === popoverConfig.axisPointer) {
      popoverConfig.axisPointer = ODSChartsPopoverAxisPointer.none;
    }
    if (undefined === popoverConfig.shared) {
      popoverConfig.shared = false;
    }
    if (undefined === popoverConfig.tooltip) {
      popoverConfig.tooltip = true;
    }
    if (undefined === popoverConfig.tooltipDelay) {
      popoverConfig.tooltipDelay =
        undefined === (popoverDefinition as ODSChartsPopoverDefinitionWithRenderer).tooltipDelay
          ? 0
          : (popoverDefinition as ODSChartsPopoverDefinitionWithRenderer).tooltipDelay;
    }
    if (!popoverConfig.shared && 'none' !== popoverConfig.axisPointer) {
      console.warn(
        `If you choose a specific axisPointer like ${popoverConfig.axisPointer}, the popup/tooltip content will be shared between series values (shared option forced to true)`
      );
      popoverConfig.shared = true;
    }
    return new ODSChartsPopover(popoverDefinition, popoverConfig);
  }

  private getTooltipTrigger(dataOptions: any, themeOptions: any): 'xAxis' | 'yAxis' | 'grid' {
    let tooltipTrigger: 'xAxis' | 'yAxis' | 'grid' = this.popoverConfig.axisPointer === 'cross' ? 'grid' : (this.popoverConfig.tooltipTrigger as any);

    if (undefined == tooltipTrigger) {
      for (const axis of ['xAxis', 'yAxis'] as ['xAxis', 'yAxis']) {
        if (isMainAxis(dataOptions[axis])) {
          tooltipTrigger = tooltipTrigger ? (undefined as any) : axis;
        }
      }
    }
    if (undefined == tooltipTrigger) {
      for (const axis of ['xAxis', 'yAxis'] as ['xAxis', 'yAxis']) {
        if (themeOptions[axis] && themeOptions[axis].splitLine && themeOptions[axis].splitLine.show) {
          tooltipTrigger = tooltipTrigger ? (undefined as any) : axis;
        }
      }
    }
    if (undefined == tooltipTrigger) {
      for (const axis of ['xAxis', 'yAxis'] as ['xAxis', 'yAxis']) {
        if (themeOptions[axis] && themeOptions[axis].axisLine && themeOptions[axis].axisLine.show) {
          tooltipTrigger = tooltipTrigger ? (undefined as any) : axis;
        }
      }
    }
    if (undefined == tooltipTrigger) {
      for (const axis of ['xAxis', 'yAxis'] as ['xAxis', 'yAxis']) {
        if (dataOptions[axis] && dataOptions[axis].data) {
          tooltipTrigger = tooltipTrigger ? (undefined as any) : axis;
        }
      }
    }
    if (undefined == tooltipTrigger) {
      tooltipTrigger = 'grid';
    }
    return tooltipTrigger;
  }

  private getTooltipElements(
    params: ODSChartsPopoverItem[],
    legends: ODSChartsLegendData
  ): {
    categoryLabel: string;
    tooltipElements: ODSChartsPopoverItem[];
  } {
    return {
      categoryLabel:
        this.popoverDefinition && this.popoverDefinition.getPopupTitle
          ? this.popoverDefinition.getPopupTitle(params[0].axisValue, params[0].axisValueLabel, params[0].name)
          : params[0].axisValueLabel || params[0].axisValue || params[0].name,
      tooltipElements: params
        .map(
          (param: {
            seriesName: string;
            color?: string;
            value?: any;
            seriesIndex?: number;
            axisType?: 'xAxis.time' | 'xAxis.category' | 'yAxis.time' | 'yAxis.category';
          }) => {
            const legendLabel =
              legends &&
              legends.names &&
              legends.labels &&
              legends.labels.find((label, index) => {
                return legends.names[index] === param.seriesName;
              });
            const itemValue =
              isVarArray(param.value) && 2 == param.value.length && (!param.axisType || param.axisType.endsWith('.time'))
                ? param.value[1]
                : isVarArray(param.value) && (param.seriesIndex as number) + 1 < param.value.length
                  ? param.value[(param.seriesIndex as number) + 1]
                  : isVarArray(param.value)
                    ? undefined
                    : param.value;
            const element: ODSChartsPopoverItem = mergeObjects(cloneDeepObject(param), {
              markerColor: param.color,
              itemValue: itemValue,
              label: legendLabel || '',
            });

            if (undefined !== element.itemValue && this.popoverDefinition && this.popoverDefinition.getPopupContentValue) {
              element.itemValue = this.popoverDefinition.getPopupContentValue(element);
            }

            return element;
          }
        )
        .filter((elt) => {
          if (undefined === elt.itemValue) {
            console.error('failed displaying', elt);
          }
          return undefined !== elt.itemValue;
        }),
    };
  }

  public addPopoverManagement(dataOptions: any, themeOptions: any, cssTheme: ODSChartsCSSThemeDefinition, cssThemeName: string, mode: ODSChartsMode) {
    if (ODSChartsCSSThemesNames.NONE === cssThemeName && !document.querySelector('#ods-chart-popover-none-css')) {
      let style = document.createElement('style');
      style.id = 'ods-chart-popover-none-css';
      style.textContent = DEFAULT_NONE_CSS;
      document.head.appendChild(style);
    }
    const popoverOptions = {};
    const tooltipTrigger: 'xAxis' | 'yAxis' | 'grid' = this.getTooltipTrigger(dataOptions, themeOptions);
    this.enterable = !!dataOptions && !!dataOptions.tooltip && !!dataOptions.tooltip.enterable;

    let legends: ODSChartsLegendData = undefined as any;
    try {
      legends = ODSChartsLegends.getLegendData(dataOptions);
    } catch (error) {}

    if (this.popoverConfig.enabled) {
      mergeObjects(popoverOptions, {
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
        mergeObjects(popoverOptions, {
          tooltip: { triggerOn: 'click', alwaysShowContent: false },
        });
      }

      if (!(this.popoverDefinition as ODSChartsPopoverDefinitionWithRenderer).getOrCreatePopupInstance) {
        mergeObjects(popoverOptions, {
          tooltip: {
            position: (
              mousePosition: number[],
              params: any,
              dom: HTMLElement,
              rect: { [position: string]: number },
              containerSize: { [size: string]: number[] }
            ) => {
              let tooltipPosition: { [position: string]: number | string } = {
                left: mousePosition[0] - containerSize.contentSize[0] / 2,
              };

              if (dataOptions?.tooltip?.confine) {
                const arrowSize: number = 10;
                const displayTooltipOnTop: boolean = mousePosition[1] > containerSize.contentSize[1];
                let tooltipLeftPosition: number;

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

            formatter: (params: ODSChartsPopoverItem[] | ODSChartsPopoverItem) => {
              if (!isVarArray(params)) {
                params = [params as ODSChartsPopoverItem];
              }
              params = params as ODSChartsPopoverItem[];

              const elements = this.getTooltipElements(params, legends);
              return elements && elements.tooltipElements.length > 0
                ? new DOMParser().parseFromString(
                    this.popoverDefinition.getPopupTemplate
                      ? this.popoverDefinition.getPopupTemplate(elements.categoryLabel, elements.tooltipElements)
                      : this.getPopupTemplate(elements, cssTheme, mode),
                    'text/html'
                  ).body.firstChild
                : undefined;
            },
            showDelay: 0,
            hideDelay: 0,
            appendTo: 'body',
            renderMode: 'html',
            className: `ods-charts-popover ods-charts-enterable-${this.enterable ? 'true' : 'false'} ods-charts-mode-${mode} ${ODSChartsItemCSSDefinition.getClasses(cssTheme.popover?.odsChartsPopover)}`,
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
        mergeObjects(popoverOptions, {
          tooltip: {
            formatter: (params: ODSChartsPopoverItem[] | ODSChartsPopoverItem) => {
              if (!isVarArray(params)) {
                params = [params as ODSChartsPopoverItem];
              }
              params = params as ODSChartsPopoverItem[];

              const elements: {
                categoryLabel: string;
                tooltipElements: ODSChartsPopoverItem[];
              } = this.getTooltipElements(params, legends);
              if (elements && elements.tooltipElements.length > 0) {
                this.displayPopup(window.event as MouseEvent, elements, cssTheme, mode);
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

      // We have to delete any default formatter as it is incompatible with externalizePopover feature
      if (dataOptions?.tooltip?.formatter) {
        dataOptions.tooltip = cloneDeepObject(dataOptions.tooltip);
        // But if no formatter has been provided through the popoverDefinition,
        // we will use the Apache ECharts config
        if (!this.popoverDefinition.getPopupContentValue) {
          const formatter = dataOptions.tooltip.formatter;
          this.popoverDefinition = cloneDeepObject(this.popoverDefinition);
          this.popoverDefinition.getPopupContentValue = (tooltipElement: ODSChartsPopoverItem) => formatter([tooltipElement]);
        }
        delete dataOptions.tooltip.formatter;
      }

      if (!this.popoverConfig.shared && 'none' === this.popoverConfig.axisPointer) {
        mergeObjects(popoverOptions, { tooltip: { trigger: 'item' } });
      } else {
        mergeObjects(popoverOptions, { tooltip: { trigger: 'axis' } });
      }
    } else {
      mergeObjects(popoverOptions, {
        tooltip: {
          triggerOn: 'none',
        },
      });
    }
    mergeObjects(themeOptions, popoverOptions);
  }

  private getPopupContentLine(element: ODSChartsPopoverItem, cssTheme: ODSChartsCSSThemeDefinition, mode: ODSChartsMode): string {
    return `<div 
    class="ods-charts-popover-line ods-charts-mode-${mode} ${ODSChartsItemCSSDefinition.getClasses(cssTheme.popover?.odsChartsPopoverLine)}"
    style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverLine)}"    
    >
      <span class="ods-charts-popover-color-holder ${ODSChartsItemCSSDefinition.getClasses(
        cssTheme.popover?.odsChartsPopoverColorHolder
      )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverColorHolder)}" >  
        <span 
          class="ods-charts-popover-color ${ODSChartsItemCSSDefinition.getClasses(cssTheme.popover?.odsChartsPopoverColor)}"  style="background-color:${
            element.markerColor
          };  ${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverColor)};">
        </span> 
      </span>
    
      <label class="ods-charts-popover-text ${ODSChartsItemCSSDefinition.getClasses(
        cssTheme.popover?.odsChartsPopoverText
      )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverText)}" >
        <span class="ods-charts-popover-label ${ODSChartsItemCSSDefinition.getClasses(
          cssTheme.popover?.odsChartsPopoverLabel
        )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverLabel)}" >${element.label ? element.label + ': ' : ''}</span>
        <span class="ods-charts-popover-value ${ODSChartsItemCSSDefinition.getClasses(
          cssTheme.popover?.odsChartsPopoverValue
        )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverValue)}">${element.itemValue}</span>
      </label>
    </div>
        `;
  }

  private getPopupContent(tooltipElements: ODSChartsPopoverItem[], cssTheme: ODSChartsCSSThemeDefinition, mode: ODSChartsMode): string {
    return `
    <div  class="ods-charts-popover-body-content ods-charts-mode-${mode} ${ODSChartsItemCSSDefinition.getClasses(
      cssTheme.popover?.odsChartsPopoverBodyContent
    )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverBodyContent)}" >
        ${tooltipElements
          .map((element) =>
            this.popoverDefinition.getPopupContentLine ? this.popoverDefinition.getPopupContentLine(element) : this.getPopupContentLine(element, cssTheme, mode)
          )
          .join('')}
    </div>
    `;
  }

  private getPopupTemplate(
    elements: {
      categoryLabel: string;
      tooltipElements: ODSChartsPopoverItem[];
    },
    cssTheme: ODSChartsCSSThemeDefinition,
    mode: ODSChartsMode
  ): string {
    if (!document.querySelector('#ods-chart-tooltip-default-template')) {
      let style = document.createElement('style');
      style.id = 'ods-chart-tooltip-default-template';
      style.textContent = DEFAULT_TEMPLATE_CSS;
      document.head.appendChild(style);
    }

    return `
  <div class="ods-charts-popover-holder ods-charts-mode-${mode} ${ODSChartsItemCSSDefinition.getClasses(
    cssTheme.popover?.odsChartsPopoverHolder
  )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverHolder)}">
    <div class="ods-charts-popover-inner ${ODSChartsItemCSSDefinition.getClasses(
      cssTheme.popover?.odsChartsPopoverInner
    )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverInner)}">
      <div class="ods-charts-popover-content ${ODSChartsItemCSSDefinition.getClasses(
        cssTheme.popover?.odsChartsPopoverContent
      )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverContent)}" >
        <div class="ods-charts-popover-arrow ${ODSChartsItemCSSDefinition.getClasses(
          cssTheme.popover?.odsChartsPopoverArrow
        )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverArrow)}; left: ${this.tooltipStyle}" ></div>
          <div class="ods-charts-popover-header ${ODSChartsItemCSSDefinition.getClasses(
            cssTheme.popover?.odsChartsPopoverHeader
          )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverHeader)}">${elements.categoryLabel}</div>
          <div class="ods-charts-popover-body ${ODSChartsItemCSSDefinition.getClasses(
            cssTheme.popover?.odsChartsPopoverBody
          )}" style="${ODSChartsItemCSSDefinition.getStyles(cssTheme.popover?.odsChartsPopoverBody)}">
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

  private displayPopup(
    event: MouseEvent,
    item: {
      categoryLabel: string;
      tooltipElements: ODSChartsPopoverItem[];
    },
    cssTheme: ODSChartsCSSThemeDefinition,
    mode: ODSChartsMode
  ) {
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

    let tooltipAnchor: HTMLElement = document.querySelector('.libPopupTooltipAnchor') as HTMLElement;
    if (!tooltipAnchor) {
      document.body.appendChild(new DOMParser().parseFromString(`<div class="libPopupTooltipAnchor" ></div>`, 'text/html').body.firstChild as ChildNode);
    }
    tooltipAnchor = document.querySelector('.libPopupTooltipAnchor') as HTMLElement;
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
      let popover = (this.popoverDefinition as ODSChartsPopoverDefinitionWithRenderer).getOrCreatePopupInstance(
        '.libPopupTooltipAnchor',
        item.categoryLabel,
        this.popoverDefinition.getPopupContent
          ? this.popoverDefinition.getPopupContent(item.tooltipElements)
          : this.getPopupContent(item.tooltipElements, cssTheme, mode),
        this.enterable
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
