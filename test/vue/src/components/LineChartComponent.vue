<script setup lang="ts">
import * as echarts from 'echarts'

import * as ODSCharts from 'ods-charts'
import { onMounted } from 'vue'

let base = +new Date(1968, 9, 3)
let oneDay = 24 * 3600 * 1000
let date: Array<String> = []
let data = [Math.random() * 300]
let data2 = [Math.random() * 300]

onMounted(() => {
  for (var i = 1; i < 50; i++) {
    var now = new Date((base += oneDay))
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
    data2.push(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]))
  }
  let dataOptions = {
    title: {
      left: 'center',
      text: 'Line Chart'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    series: [
      {
        name: 'year',
        type: 'line',
        sampling: 'average',
        data: data
      },
      {
        name: 'month',
        type: 'line',
        sampling: 'average',
        data: data2
      }
    ]
  }

  // ODS Charts
  const lineChartODSTheme = ODSCharts.getThemeManager({
    colors: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
    lineStyle: ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS,
    cssSelector: '#chartsContainer'
  })

  console.log('>>', ODSCharts)
  console.log(lineChartODSTheme)

  echarts.registerTheme(lineChartODSTheme.name, lineChartODSTheme.theme)

  console.log(document.querySelector('#lineChartCanvasODS'))

  let lineChartODS = echarts.init(
    document.querySelector('#lineChartCanvasODS') as HTMLElement,
    lineChartODSTheme.name,
    {
      renderer: 'svg'
    }
  )

  lineChartODS.setOption(
    lineChartODSTheme
      .setDataOptions(dataOptions)
      .externalizeLegends(lineChartODS, '#lineChartLegendODS')
      .manageChartResize(lineChartODS, 'lineChartCanvasODS')
      .manageThemeObserver(lineChartODS)
      .externalizePopover()
      .getChartOptions()
  )

  // echarts initialization
  let lineChart = echarts.init(document.querySelector('#lineChartCanvas') as HTMLElement)

  lineChart.setOption({
    tooltip: {
      trigger: 'axis',
      position: function (pt: any) {
        return [pt[0], '10%']
      }
    },
    title: {
      left: 'center',
      text: 'Line Chart'
    },
    toolbox: {
      feature: {
        dataZoom: {
          title: 'zoom',
          yAxisIndex: 'none'
        },
        restore: {
          title: 'restore'
        },
        saveAsImage: {
          title: 'save'
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10,
        handleIcon:
          'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: 'var(--bs-white)',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }
    ],
    series: [
      {
        name: 'year',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: data
      }
    ]
  })
})
</script>

<template>
  <div className="mGraph-wrapper">
    <div className="mGraph" id="lineChartCanvas"></div>
  </div>
  <hr />
  <div className="ods-charts-context" id="chartsContainer" data-bs-theme="dark">
    <div className="mGraph-wrapper">
      <div className="mGraph" id="lineChartCanvasODS"></div>
    </div>
    <div className="mGraph" id="lineChartLegendODS"></div>
  </div>
</template>

<style scoped>
.mGraph-wrapper {
  width: 100%;
  height: 239px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mGraph-wrapper .mGraph {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
