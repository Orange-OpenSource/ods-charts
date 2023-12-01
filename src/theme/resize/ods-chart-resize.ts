//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { type ECharts } from 'echarts';
export class ODSChartsResize {
  private static sizeListeners: any = {};
  private constructor(private echart: ECharts, private chartId: string) {}

  public static addResizeManagement(
    echart: ECharts,
    chartId: string
  ): ODSChartsResize {
    return new ODSChartsResize(echart, chartId);
  }

  public addResizeManagement() {
    this.removeListener();

    ODSChartsResize.sizeListeners[this.chartId] = this.resizeChart.bind(this);
    window.addEventListener(
      'resize',
      ODSChartsResize.sizeListeners[this.chartId]
    );
  }

  private removeListener() {
    if (ODSChartsResize.sizeListeners[this.chartId]) {
      window.removeEventListener(
        'resize',
        ODSChartsResize.sizeListeners[this.chartId]
      );
      delete ODSChartsResize.sizeListeners[this.chartId];
    }
  }

  private resizeChart() {
    try {
      this.echart.resize();
    } catch (error) {
      this.removeListener();
    }
  }
}
