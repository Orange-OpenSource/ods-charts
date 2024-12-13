import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as ODSCharts from 'ods-charts';
import * as echarts from 'echarts/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import necessary echarts components
import { BarChart, LineChart } from 'echarts/charts';
import { DatasetComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { LegendComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
echarts.use([BarChart, GridComponent, CanvasRenderer, LegendComponent, TooltipComponent, LineChart, DatasetComponent]);

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEchartsCore({ echarts })],
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
      colors: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
      lineStyle: ODSCharts.ODSChartsLineStyle.SMOOTH,
    });
  }

  public onChartInit(ec: echarts.ECharts) {
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
