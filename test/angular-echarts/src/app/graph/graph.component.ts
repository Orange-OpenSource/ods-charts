import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as ODSCharts from 'ods-charts';
import * as echarts from 'echarts';
import { ECharts, EChartsOption } from 'echarts';

@Component({
    selector: 'app-graph',
    imports: [],
    templateUrl: './graph.component.html',
    styleUrl: './graph.component.scss'
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
      mode: ODSCharts.ODSChartsMode.LIGHT,
      colors: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
      visualMapColor: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE,
      lineStyle: ODSCharts.ODSChartsLineStyle.SMOOTH,
    });

    echarts.registerTheme(this.myTheme.name, this.myTheme.theme);

    this.echartsGraph = echarts.init(this.graph.nativeElement, this.myTheme.name);

    this.options = this.myTheme.setDataOptions(this.options).externalizeLegends(this.echartsGraph, '#legend').externalizePopover().getChartOptions();

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
