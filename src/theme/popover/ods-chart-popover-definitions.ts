//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { cloneDeepObject } from '../../tools/clone-deep-object';
import { ODSChartsCSSThemesNames } from '../css-themes/css-themes';
import { ODSChartsMode } from '../ods-chart-mode';
declare var boosted: any;

export const DEFAULT_ARROW_SIZE: number = 0; // in px. Set to 0 to disable arrow

export class ODSChartsPopoverManager {
  public dispose: () => void = undefined as any;
  public show: () => void = undefined as any;
}

export class ODSChartsPopoverItem {
  seriesName!: string;
  markerColor!: string;
  seriesColor!: string;
  itemColor!: string;
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
export class ODSChartsPopoverDefinition {
  /**
   * getPopupTitle() may be specify to change the html code of the popup/tooltip title
   */
  public getPopupTitle?: (axisValue: string, axisValueLabel?: string, name?: string) => string;
  /**
   * getPopupTitle() may be specify to change the html code of all the popup/tooltip content
   */
  public getPopupContent?: (tooltipElements: ODSChartsPopoverItem[]) => string;
  /**
   * getPopupContentLine() may be specify to change the html code of one line of the popup/tooltip
   */
  public getPopupContentLine?: (tooltipElement: ODSChartsPopoverItem) => string;
  /**
   * getPopupContentValue() may be specify to change the html code of value displayed in the popup/tooltip
   */
  public getPopupContentValue?: (tooltipElement: ODSChartsPopoverItem) => string;
  /**
   * getPopupTemplate() may be specify to replace a specific template for the  popup/tooltip to replace the default one
   */
  public getPopupTemplate?: (categoryLabel: string, tooltipElements: ODSChartsPopoverItem[]) => string;
  /**
   * if provided, the `testAvailability()` will be called to check if this renderer is available.
   * If not, the fall back is an empty `ODSChartsPopoverDefinition`, ie `ODSChartsPopoverManagers.NONE`
   */
  public testAvailability?: () => boolean;
}

export abstract class ODSChartsPopoverDefinitionWithRenderer extends ODSChartsPopoverDefinition {
  public abstract tooltipDelay: number;
  public abstract tooltipMarging: number;
  public abstract getOrCreatePopupInstance: (
    selector: string,
    title: string,
    htmlContent: string,
    enterable: boolean,
    mode: ODSChartsMode
  ) => ODSChartsPopoverManager | undefined;

  protected testIfMouseIsOverTooltip(previousPopover: ODSChartsPopoverManager) {
    try {
      // We test if the mouse is over the previous tooltip to cancel the creation
      // of a new one and allow the mouse to enter over this previous one
      const mousePosition: { top: number; left: number } = { top: (window.event as MouseEvent).clientY, left: (window.event as MouseEvent).clientX };
      const tooltipRect: { bottom: number; height: number; left: number; right: number; top: number; width: number } = (
        previousPopover as any
      ).tip?.getBoundingClientRect();
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
 * Configuration of the externalizePopover feature {@link ODSChartsTheme.externalizePopover}.
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

class BOOSTED5_Definition extends ODSChartsPopoverDefinitionWithRenderer {
  public testAvailability = (): boolean => {
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

  public getOrCreatePopupInstance: (
    selector: string,
    title: string,
    htmlContent: string,
    enterable: boolean,
    mode: ODSChartsMode
  ) => ODSChartsPopoverManager | undefined = this._getOrCreatePopupInstance.bind(this);
  public tooltipDelay = 0;
  public tooltipMarging = 15;

  private _getOrCreatePopupInstance(
    selector: string,
    title: string,
    htmlContent: string,
    enterable: boolean,
    mode: ODSChartsMode
  ): ODSChartsPopoverManager | undefined {
    try {
      let previousPopover: ODSChartsPopoverManager = boosted.Popover.getInstance(document.querySelector(selector));
      if (previousPopover) {
        if (enterable && this.testIfMouseIsOverTooltip(previousPopover)) {
          return undefined;
        }
        previousPopover.dispose();
      }
    } catch (error) {}

    const allowList = cloneDeepObject(boosted.Tooltip.Default.allowList);
    allowList.span = ['style', 'class'];
    allowList.div = ['class'];
    allowList.label = ['class'];

    let container: HTMLElement = document.getElementById('ods-chart-popover-container-' + mode) as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      if ([ODSChartsMode.DARK, ODSChartsMode.LIGHT].includes(mode)) {
        container.setAttribute('data-bs-theme', mode);
      }
      container.id = 'ods-chart-popover-container-' + mode;
      container.classList.add('ods-charts-context');

      document.querySelector('body')?.append(container);
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
  public testAvailability = (): boolean => {
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

  public getOrCreatePopupInstance: (
    selector: string,
    title: string,
    htmlContent: string,
    enterable: boolean,
    mode: ODSChartsMode
  ) => ODSChartsPopoverManager | undefined = this._getOrCreatePopupInstance.bind(this);
  public tooltipDelay = 0;
  public tooltipMarging = 10;

  private _getOrCreatePopupInstance(selector: string, title: string, htmlContent: string, enterable: boolean, mode: ODSChartsMode) {
    const elt: any = document.querySelector(selector);
    const whiteList = cloneDeepObject(boosted.Tooltip.Default.whiteList);
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
    let container: HTMLElement = document.getElementById('ods-chart-popover-container-' + mode) as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      if ([ODSChartsMode.DARK, ODSChartsMode.LIGHT].includes(mode)) {
        container.setAttribute('data-bs-theme', mode);
      }
      container.id = 'ods-chart-popover-container-' + mode;
      container.classList.add('ods-charts-context');

      document.querySelector('body')?.append(container);
    }
    const popover = new boosted.Popover(elt, {
      whiteList: whiteList,
      html: true,
      trigger: 'click',
      placement: 'top',
      container: container,
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
export const ODSChartsPopoverManagers: {
  [name in ODSChartsCSSThemesNames]?: ODSChartsPopoverDefinition;
} = {
  BOOSTED5: new BOOSTED5_Definition(),
  BOOSTED4: new BOOSTED4_Definition(),
  NONE: {},
};
