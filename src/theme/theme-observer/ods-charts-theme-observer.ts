//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { ECharts } from 'echarts';

export class ODSChartsThemeObserver {
  private observer: MutationObserver | undefined;

  private constructor(
    private echart: ECharts,
    private redraw: () => void
  ) {}

  public static addThemeObserver(echart: ECharts, redraw: () => void): ODSChartsThemeObserver {
    return new ODSChartsThemeObserver(echart, redraw);
  }

  private get divElement(): Element | undefined {
    let div: HTMLElement | undefined;
    try {
      div = this.echart.getDom();
    } catch (error) {}
    if (!div) {
      this.removeListener();
    }
    return div;
  }

  public addThemeObserver() {
    this.removeListener();

    let div = this.divElement;
    if (div && MutationObserver) {
      div = div.closest('[data-bs-theme]') || undefined;
      if (div) {
        this.observer = new MutationObserver(this.observeAttributeChange.bind(this));
        this.observer.observe(div, { attributes: true, childList: false, subtree: false });
      }
    }
  }

  private removeListener() {
    try {
      if (this.observer) {
        this.observer.disconnect();
      }
    } catch (error) {
    } finally {
      this.observer = undefined;
    }
  }

  private observeAttributeChange(mutations: MutationRecord[], observer: MutationObserver) {
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
