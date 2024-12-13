import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ECharts, EChartsOption } from 'echarts';
import * as ODSCharts from 'ods-charts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ColorModeService } from '@services/color-mode.service';

@Component({
  selector: 'app-ods-charts',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './ods-charts.component.html',
  styleUrl: './ods-charts.component.scss',
})
export class OdsChartsComponent {
  currentMode!: string;
  public myTheme1!: ODSCharts.ODSChartsTheme;
  public myTheme2!: ODSCharts.ODSChartsTheme;

  // TODO: We can probably merge the two charts into one.
  public options1: EChartsOption = {
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
    xAxis: { type: 'category', data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'] },
    // Declare a y-axis (value axis).
    yAxis: {},
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };
  public updateOptions1: EChartsOption = {};

  public options2: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide a set of data.
      source: [
        ['year', 'Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
        ['2015', 43.3, 83.1, 86.4, 72.4],
        ['2016', 85.8, 73.4, 65.2, 53.9],
        ['2017', 93.7, 55.1, 82.5, 39.1],
      ],
    },
    // Declare an x-axis (category axis).
    // The category map the first column in the dataset by default.
    xAxis: { type: 'category', data: ['2015', '2016', '2017'] },
    // Declare a y-axis (value axis).
    yAxis: {},
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };
  public updateOptions2: EChartsOption = {};

  constructor(private colorModeService: ColorModeService) {
    this.colorModeService.currentMode.subscribe((value) => {
      if (this.currentMode !== value) {
        this.currentMode = value;
        this.generateThemes();
      }
    });
    this.generateThemes();
  }

  public onChart1Init(ec: ECharts) {
    this.options1 = this.myTheme1
      .setDataOptions(this.options1)
      .externalizeLegends(ec, '#legend1')
      .externalizePopover({}, ODSCharts.ODSChartsPopoverManagers.BOOSTED5)
      .getChartOptions();
  }

  public onChart2Init(ec: ECharts) {
    this.options2 = this.myTheme2
      .setDataOptions(this.options2)
      .externalizeLegends(ec, '#legend2')
      .externalizePopover({}, ODSCharts.ODSChartsPopoverManagers.BOOSTED5)
      .getChartOptions();
  }

  public generateRandomDataset() {
    const data = this.getRandomValues(12);
    this.updateOptions1 = {
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', data[0], data[1], data[2]],
          ['Milk Tea', data[3], data[4], data[5]],
          ['Cheese Cocoa', data[6], data[7], data[8]],
          ['Walnut Brownie', data[9], data[10], data[11]],
        ],
      },
    };
    this.updateOptions2 = {
      dataset: {
        source: [
          ['year', 'Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
          ['2015', data[0], data[3], data[6], data[9]],
          ['2016', data[1], data[4], data[7], data[10]],
          ['2017', data[2], data[5], data[8], data[11]],
        ],
      },
    };
  }

  private getRandomValues(number: number) {
    const res: number[] = [];
    for (let i = 0; i < number; i++) {
      res.push(Math.random() * 100);
    }
    return res;
  }

  private generateThemes() {
    this.myTheme1 = ODSCharts.getThemeManager({
      mode: this.currentMode === 'light' ? ODSCharts.ODSChartsMode.LIGHT : ODSCharts.ODSChartsMode.DARK,
      colors: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE,
      visualMapColor: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE,
      lineStyle: ODSCharts.ODSChartsLineStyle.SMOOTH,
    });
    this.myTheme2 = ODSCharts.getThemeManager({
      mode: this.currentMode === 'light' ? ODSCharts.ODSChartsMode.LIGHT : ODSCharts.ODSChartsMode.DARK,
      colors: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
      visualMapColor: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE,
      lineStyle: ODSCharts.ODSChartsLineStyle.SMOOTH,
    });
  }
}
