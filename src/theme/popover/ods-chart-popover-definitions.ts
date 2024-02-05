//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { cloneDeepObject } from '../../tools/clone-deep-object';
import { ODSChartsCSSThemesNames } from '../css-themes/css-themes';
declare var boosted: any;

export class ODSChartsPopoverManager {
  public dispose: () => void = undefined as any;
  public show: () => void = undefined as any;
}

export class ODSChartsPopoverItem {
  seriesName: string = undefined as any;
  markerColor: string = undefined as any;
  itemValue: any;
  color?: string;
  value?: any;
  axisValueLabel?: string;
  axisValue: any;
  name?: string;
  borderColor?: string;
  componentIndex?: number;
  componentSubType?: string;
  componentType?: string;
  data: any;
  dataIndex?: number;
  dataType?: string;
  label?: string;
  marker?: string;
  seriesId?: string;
  seriesIndex?: number;
  seriesType?: string;
}

export class ODSChartsPopoverDefinition {
  public getOrCreatePopupInstance?: (
    selector: string,
    title: string,
    htmlContent: string
  ) => ODSChartsPopoverManager;
  public tooltipDelay?: number;
  public getPopupTitle?: (
    axisValue: string,
    axisValueLabel?: string,
    name?: string
  ) => string;
  public getPopupContent?: (tooltipElements: ODSChartsPopoverItem[]) => string;
  public getPopupContentLine?: (tooltipElement: ODSChartsPopoverItem) => string;
  public getPopupContentValue?: (
    tooltipElement: ODSChartsPopoverItem
  ) => string;
  public getPopupTemplate?: (
    categoryLabel: string,
    tooltipElements: ODSChartsPopoverItem[]
  ) => string;
}

export enum ODSChartsPopoverAxisPointer {
  none = 'none',
  shadow = 'shadow',
  line = 'line',
  cross = 'cross',
}

export enum ODSChartsPopoverTooltipTrigger {
  xAxis = 'xAxis',
  yAxis = 'yAxis',
  grid = 'grid',
}

/**
 * Configuration of the externalizePopover feature.
 *
 */
export class ODSChartsPopoverConfig {
  /**
   * determine if popover or tooltip are enabled
   */
  enabled?: boolean;
  /**
   * - true if a tooltip/popover should display values of all the series.
   * - false if a tooltip/popover should display only the value of the current point.
   *
   * Default value is false
   *
   * If you use axisPointer, value is forced to true
   */
  shared?: boolean;
  /**
   * - true: to display tooltip
   * - false: to display popover
   */
  tooltip?: boolean;
  /**
   * - true: to display tooltip inside the chart at any cost
   * - false: to display tooltip normally
   */
  tooltipConfine?: boolean;
  /**
   * tooltipTimeout is used to set the timeout in milliseconds of the tooltip display.
   *
   * default value is 3000
   */
  tooltipTimeout?: number;
  /**
   * tooltipDelay is used to add a delay before moving tooltip with the mouse movement.
   *
   * The default value is retrieved from {@link ODSChartsPopoverDefinition} if set and otherwise is 0
   */
  tooltipDelay?: number;
  /**
   * define the type of pointer {@link ODSChartsPopoverAxisPointer}
   *
   * Default is no pointer {@link ODSChartsPopoverAxisPointer.none}
   */
  axisPointer?: ODSChartsPopoverAxisPointer;
  /**
   * define how the tooltip should be triggered {@link ODSChartsPopoverTooltipTrigger}
   *
   * In case of axisPointer {@link ODSChartsPopoverAxisPointer.cross}, tooltipTrigger must be {@link ODSChartsPopoverTooltipTrigger.grid}
   *
   * Otherwise, the default value of tooltipTrigger will be
   * - {@link ODSChartsPopoverTooltipTrigger.xAxis} for a vertical graph
   * - {@link ODSChartsPopoverTooltipTrigger.yAxis} for an horizontal graph
   */
  tooltipTrigger?: ODSChartsPopoverTooltipTrigger;
}

class BOOSTED5_Definition extends ODSChartsPopoverDefinition {
  constructor() {
    super();
    this.getOrCreatePopupInstance = this._getOrCreatePopupInstance.bind(this);
    this.tooltipDelay = 0;
  }

  private _getOrCreatePopupInstance(
    selector: string,
    title: string,
    htmlContent: string
  ): ODSChartsPopoverManager {
    try {
      let previousPopover: ODSChartsPopoverManager =
        boosted.Popover.getInstance(document.querySelector(selector));
      if (previousPopover) {
        previousPopover.dispose();
      }
    } catch (error) {}

    const allowList = cloneDeepObject(boosted.Tooltip.Default.allowList);
    allowList.span = ['style', 'class'];
    allowList.div = ['class'];
    allowList.label = ['class'];

    return boosted.Popover.getOrCreateInstance(
      document.querySelector(selector),
      {
        allowList: allowList,
        html: true,
        trigger: 'click',
        placement: 'top',
        container: 'body',
        title: title,
        content: htmlContent,
        customClass: 'pe-none',
      }
    );
  }
}

class BOOSTED4_Definition extends ODSChartsPopoverDefinition {
  constructor() {
    super();
    this.getOrCreatePopupInstance = this._getOrCreatePopupInstance.bind(this);
    this.tooltipDelay = 200;
  }

  private _getOrCreatePopupInstance(
    selector: string,
    title: string,
    htmlContent: string
  ) {
    const elt: any = document.querySelector(selector);
    const whiteList = cloneDeepObject(boosted.Tooltip.Default.whiteList);
    whiteList.span = ['style', 'class'];
    whiteList.div = ['class'];
    whiteList.label = ['class'];
    if (elt && elt.chart) {
      try {
        elt.chart.dispose();
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
      customClass: 'pe-none',
    });
    elt.chart = popover;

    return popover;
  }
}

/**
 * Available popover/tooltip renderer:
 * - ODSChartsPopoverManagers.NONE: to use default ECharts template to externalize tooltip/popover HTML element, implementing Orange Design System
 * - ODSChartsPopoverManagers.BOOSTED5: to use Boosted 5 tooltip/popover
 * - ODSChartsPopoverManagers.BOOSTED4: to use Boosted 4 tooltip/popover
 */
export const ODSChartsPopoverManagers: {
  [name in ODSChartsCSSThemesNames]?: ODSChartsPopoverDefinition;
} = {
  BOOSTED5: new BOOSTED5_Definition(),
  BOOSTED4: new BOOSTED4_Definition(),
  NONE: {},
};
