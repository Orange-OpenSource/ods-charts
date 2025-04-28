//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { type EChartsOption, type ECharts, type ResizeOpts } from 'echarts';
export class ODSChartsResize {
  private static sizeListeners: any = {};
  private observer: ResizeObserver | undefined = undefined;
  private constructor(
    private echart: ECharts,
    private chartId: string
  ) {}

  public static addResizeManagement(echart: ECharts, chartId: string): ODSChartsResize {
    return new ODSChartsResize(echart, chartId);
  }

  private get divElement(): Element | undefined {
    let div: HTMLElement | undefined;
    div = document.getElementById(this.chartId) || undefined;
    if (!div) {
      div = this.echart.getDom() || undefined;
      if (div) {
        div = div.parentElement || undefined;
      }
    }
    return div;
  }

  public addResizeManagement() {
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

  private removeListener() {
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

  private resizeChart() {
    try {
      const chartOptions: EChartsOption = this.echart.getOption() as EChartsOption;
      const opts: ResizeOpts = {};
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
