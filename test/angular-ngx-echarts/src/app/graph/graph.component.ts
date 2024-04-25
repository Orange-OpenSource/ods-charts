import { Component } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import * as ODSCharts from 'ods-charts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent {
  public options: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide a set of data.
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
    },
    // Declare an x-axis (category axis).
    // The category map the first column in the dataset by default.
    xAxis: { type: 'category' },
    // Declare a y-axis (value axis).
    yAxis: {},
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };
  public myTheme: ODSCharts.ODSChartsTheme;
  public mergeOptions: EChartsOption = {
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    dataset: {
      // Provide a set of data.
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
    },
  };

  constructor() {
    this.myTheme = ODSCharts.getThemeManager({
      mode: ODSCharts.ODSChartsMode.LIGHT,
      categoricalColors: ODSCharts.ODSChartsCategoricalColorsSet.DARKER_TINTS,
      visualMapColor: ODSCharts.ODSChartsSequentialColorsSet.SEQUENTIAL_BLUE,
      lineStyle: ODSCharts.ODSChartsLineStyle.SMOOTH,
    });
  }

  public onChartInit(ec: ECharts) {
    this.options = this.myTheme.setDataOptions(this.options).externalizeLegends(ec, '#legend').externalizePopover().getChartOptions();
  }

  public generateRandomDataset() {
    this.mergeOptions = {
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', ...this.getRandomValues()],
          ['Milk Tea', ...this.getRandomValues()],
          ['Cheese Cocoa', ...this.getRandomValues()],
          ['Walnut Brownie', ...this.getRandomValues()],
        ],
      },
    };
  }

  private getRandomValues() {
    const res: number[] = [];
    for (let i = 0; i < 3; i++) {
      res.push(Math.random() * 100);
    }
    return res;
  }
}
