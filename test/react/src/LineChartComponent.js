import React, { Component } from 'react';
import * as echarts from 'echarts';
import './LineChartComponent.css';

import * as ODSCharts from 'ods-charts';

class LineChartComponent extends Component {
  base = +new Date(1968, 9, 3);
  oneDay = 24 * 3600 * 1000;
  date = [];
  data = [Math.random() * 300];
  data2 = [Math.random() * 300];

  componentDidMount() {
    for (var i = 1; i < 50; i++) {
      var now = new Date((this.base += this.oneDay));
      this.date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
      );
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
      this.data2.push(
        Math.round((Math.random() - 0.5) * 20 + this.data2[i - 1])
      );
    }
    let dataOptions = {
      title: {
        left: 'center',
        text: 'Line Chart',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.date,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
      },
      series: [
        {
          name: 'year',
          type: 'line',
          sampling: 'average',
          data: this.data,
        },
        {
          name: 'month',
          type: 'line',
          sampling: 'average',
          data: this.data2,
        },
      ],
    };

    // ODS Charts
    const lineChartODSTheme = ODSCharts.getThemeManager({
      mode: ODSCharts.ODSChartsMode.DARK,
      categoricalColors: ODSCharts.ODSChartsCategoricalColorsSet.DARKER_TINTS,
      visualMapColor: ODSCharts.ODSChartsSequentialColorsSet.SEQUENTIAL_BLUE,
      lineStyle: ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS,
    });

    console.log('>>', ODSCharts);
    console.log(lineChartODSTheme);

    echarts.registerTheme(lineChartODSTheme.name, lineChartODSTheme.theme);

    console.log(document.querySelector('#lineChartCanvasODS'));

    let lineChartODS = echarts.init(
      document.querySelector('#lineChartCanvasODS'),
      lineChartODSTheme.name,
      {
        renderer: 'svg',
      }
    );

    lineChartODS.setOption(
      lineChartODSTheme
        .setDataOptions(dataOptions)
        .externalizeLegends(lineChartODS, '#lineChartLegendODS')
        .manageChartResize(lineChartODS, 'lineChartCanvasODS')
        .externalizePopover()
        .getChartOptions()
    );

    // echarts initialization
    let lineChart = echarts.init(document.querySelector('#lineChartCanvas'));

    lineChart.setOption({
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        },
      },
      title: {
        left: 'center',
        text: 'Line Chart',
      },
      toolbox: {
        feature: {
          dataZoom: {
            title: 'zoom',
            yAxisIndex: 'none',
          },
          restore: {
            title: 'restore',
          },
          saveAsImage: {
            title: 'save',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.date,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 10,
        },
        {
          start: 0,
          end: 10,
          handleIcon:
            'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
        },
      ],
      series: [
        {
          name: 'year',
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            color: 'rgb(255, 70, 131)',
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 158, 68)',
              },
              {
                offset: 1,
                color: 'rgb(255, 70, 131)',
              },
            ]),
          },
          data: this.data,
        },
      ],
    });
  }

  render() {
    return (
      <>
        <div className="mGraph-wrapper">
          <div className="mGraph" id="lineChartCanvas"></div>
        </div>
        <hr />
        <div className="mGraph-wrapper">
          <div className="mGraph" id="lineChartCanvasODS"></div>
        </div>
        <div className="mGraph" id="lineChartLegendODS"></div>
      </>
    );
  }
}

export default LineChartComponent;
