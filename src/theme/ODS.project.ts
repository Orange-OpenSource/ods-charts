//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

export const ODS_PROJECT = {
  color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
  backgroundColor: 'transparent',
  textStyle: {},
  title: {
    textStyle: {
      color: '#000000',
    },
    subtextStyle: {
      color: '#666666',
    },
  },
  line: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 0,
    symbol: 'emptyCircle',
    smooth: true,
  },
  radar: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: '2',
      barBorderColor: '#ffffff',
    },
  },
  pie: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
  },
  candlestick: {
    itemStyle: {
      color: '#32C832',
      color0: '#CD3C14',
      borderColor: '#32C832',
      borderColor0: '#CD3C14',
      borderWidth: 1,
    },
  },
  graph: {
    itemStyle: {
      borderWidth: '2',
      borderColor: '#ffffff',
    },
    lineStyle: {
      width: 1,
      color: '#aaa',
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
    color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
    label: {
      color: '#000000',
    },
  },
  map: {
    itemStyle: {
      areaColor: '#eee',
      borderColor: '#444',
      borderWidth: 0.5,
    },
    label: {
      color: '#000',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
        borderWidth: 1,
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: '#eee',
      borderColor: '#444',
      borderWidth: 0.5,
    },
    label: {
      color: '#000',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
        borderWidth: 1,
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#eb0909',
      },
    },
    axisLabel: {
      show: true,
      color: '#000000',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#cccccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['#ffffff'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisLabel: {
      show: true,
      color: '#000000',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#cccccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#cccccc',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisLabel: {
      show: true,
      color: '#000000',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#cccccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#cccccc',
      },
    },
    axisLabel: {
      show: true,
      color: '#000000',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#cccccc'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: '#999',
    },
    emphasis: {
      iconStyle: {
        borderColor: '#666',
      },
    },
  },
  legend: {
    textStyle: {
      color: '#333',
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: '#ccc',
        width: 1,
      },
      crossStyle: {
        color: '#ccc',
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: '#DAE1F5',
      width: 2,
    },
    itemStyle: {
      color: '#A4B1D7',
      borderWidth: 1,
    },
    controlStyle: {
      color: '#A4B1D7',
      borderColor: '#A4B1D7',
      borderWidth: 1,
    },
    checkpointStyle: {
      color: '#316bf3',
      borderColor: 'fff',
    },
    label: {
      color: '#A4B1D7',
    },
    emphasis: {
      itemStyle: {
        color: '#FFF',
      },
      controlStyle: {
        color: '#A4B1D7',
        borderColor: '#A4B1D7',
        borderWidth: 1,
      },
      label: {
        color: '#A4B1D7',
      },
    },
  },
  visualMap: {
    color: ['#085ebd', '#3179c8', '#5a94d3', '#84afde', '#adc9e9', '#d6e4f4'],
  },
  dataZoom: {
    handleSize: 'undefined%',
    textStyle: {},
  },
  markPoint: {
    label: {
      color: '#000000',
    },
    emphasis: {
      label: {
        color: '#000000',
      },
    },
  },
};
