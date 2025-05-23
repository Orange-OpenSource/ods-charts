import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as ODSCharts from 'ods-charts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { DatasetComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { LegendComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
echarts.use([BarChart, GridComponent, CanvasRenderer, LegendComponent, TooltipComponent, LineChart, DatasetComponent]);

import { ECharts } from 'echarts/core';

import type {
  // The series option types are defined with the SeriesOption suffix
  BarSeriesOption,
  LineSeriesOption,
} from 'echarts/charts';
import type {
  // The component option types are defined with the ComponentOption suffix
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from 'echarts/components';
import type { ComposeOption } from 'echarts/core';

// Create an Option type with only the required components and charts via ComposeOption
type EChartsOption = ComposeOption<
  BarSeriesOption | LineSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | DatasetComponentOption
>;

@Component({
  selector: 'app-graph',
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('graph') graph: ElementRef;
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
  private echartsGraph: ECharts;

  ngAfterViewInit(): void {
    // ODS Charts
    this.myTheme = ODSCharts.getThemeManager({
      colors: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
      chartConfiguration: ODSCharts.ODSChartsConfiguration.getBarChartConfiguration(),
    });

    echarts.registerTheme(this.myTheme.name, this.myTheme.theme);

    this.echartsGraph = echarts.init(this.graph.nativeElement, this.myTheme.name);

    this.graph.nativeElement.id = 'graph_' + Math.ceil(Math.random() * 1000000);

    this.options = this.myTheme
      .setDataOptions(this.options)
      .externalizeLegends(this.echartsGraph, '#legend')
      .externalizePopover()
      .manageChartResize(this.echartsGraph, this.graph.nativeElement.id)
      .getChartOptions();

    this.echartsGraph.setOption(this.options);
  }

  public generateRandomDataset() {
    this.options.dataset = {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', ...this.getRandomValues()],
        ['Milk Tea', ...this.getRandomValues()],
        ['Cheese Cocoa', ...this.getRandomValues()],
        ['Walnut Brownie', ...this.getRandomValues()],
      ],
    };
    this.echartsGraph.setOption(this.options);
  }

  private getRandomValues() {
    const res: number[] = [];
    for (let i = 0; i < 3; i++) {
      res.push(Math.random() * 100);
    }
    return res;
  }
}
