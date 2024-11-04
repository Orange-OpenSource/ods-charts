//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

/**
 * Echarts theme options
 */
export interface EChartsProject {
  color: string[];
  backgroundColor: string;
  textStyle: {};
  title: {
    textStyle: {
      color: string;
    };
    subtextStyle: {
      color: string;
    };
  };
  line: {
    itemStyle: {
      borderWidth: number;
    };
    lineStyle: {
      width: number;
    };
    symbolSize: number;
    symbol: string;
    smooth: true;
  };
  radar: {
    itemStyle: {
      borderWidth: number;
    };
    lineStyle: {
      width: number;
    };
    symbolSize: number;
    symbol: string;
    smooth: false;
  };
  bar: {
    itemStyle: {
      barBorderWidth: string;
      barBorderColor: string;
    };
  };
  pie: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  scatter: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  boxplot: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  parallel: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  sankey: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  funnel: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  gauge: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
  };
  candlestick: {
    itemStyle: {
      color: string;
      color0: string;
      borderColor: string;
      borderColor0: string;
      borderWidth: number;
    };
  };
  graph: {
    itemStyle: {
      borderWidth: string;
      borderColor: string;
    };
    lineStyle: {
      width: number;
      color: string;
    };
    symbolSize: number;
    symbol: string;
    smooth: false;
    color: string[];
    label: {
      color: string;
    };
  };
  map: {
    itemStyle: {
      areaColor: string;
      borderColor: string;
      borderWidth: number;
    };
    label: {
      color: string;
    };
    emphasis: {
      itemStyle: {
        areaColor: string;
        borderColor: string;
        borderWidth: number;
      };
      label: {
        color: string;
      };
    };
  };
  geo: {
    itemStyle: {
      areaColor: string;
      borderColor: string;
      borderWidth: number;
    };
    label: {
      color: string;
    };
    emphasis: {
      itemStyle: {
        areaColor: string;
        borderColor: string;
        borderWidth: number;
      };
      label: {
        color: string;
      };
    };
  };
  categoryAxis: {
    axisLine: {
      show: true;
      lineStyle: {
        color: string;
      };
    };
    axisTick: {
      show: false;
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      show: true;
      color: string;
    };
    splitLine: {
      show: false;
      lineStyle: {
        color: string[];
      };
    };
    splitArea: {
      show: false;
      areaStyle: {
        color: string[];
      };
    };
  };
  valueAxis: {
    axisLine: {
      show: true;
      lineStyle: {
        color: string;
      };
    };
    axisTick: {
      show: false;
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      show: true;
      color: string;
    };
    splitLine: {
      show: false;
      lineStyle: {
        color: string[];
      };
    };
    splitArea: {
      show: false;
      areaStyle: {
        color: string[];
      };
    };
  };
  logAxis: {
    axisLine: {
      show: false;
      lineStyle: {
        color: string;
      };
    };
    axisTick: {
      show: false;
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      show: true;
      color: string;
    };
    splitLine: {
      show: false;
      lineStyle: {
        color: string[];
      };
    };
    splitArea: {
      show: false;
      areaStyle: {
        color: string[];
      };
    };
  };
  timeAxis: {
    axisLine: {
      show: true;
      lineStyle: {
        color: string;
      };
    };
    axisTick: {
      show: false;
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      show: true;
      color: string;
    };
    splitLine: {
      show: false;
      lineStyle: {
        color: string[];
      };
    };
    splitArea: {
      show: false;
      areaStyle: {
        color: string[];
      };
    };
  };
  toolbox: {
    iconStyle: {
      borderColor: string;
    };
    emphasis: {
      iconStyle: {
        borderColor: string;
      };
    };
  };
  legend: {
    textStyle: {
      color: string;
    };
  };
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: string;
        width: number;
      };
      crossStyle: {
        color: string;
        width: number;
      };
    };
  };
  timeline: {
    lineStyle: {
      color: string;
      width: number;
    };
    itemStyle: {
      color: string;
      borderWidth: number;
    };
    controlStyle: {
      color: string;
      borderColor: string;
      borderWidth: number;
    };
    checkpointStyle: {
      color: string;
      borderColor: string;
    };
    label: {
      color: string;
    };
    emphasis: {
      itemStyle: {
        color: string;
      };
      controlStyle: {
        color: string;
        borderColor: string;
        borderWidth: number;
      };
      label: {
        color: string;
      };
    };
  };
  visualMap: {
    color: string[];
  };
  dataZoom?: {
    borderColor?: string;
    textStyle?: {
      color: string;
    };
    brushStyle?: {
      color: string;
    };
    handleStyle?: {
      color?: string;
      borderColor?: string;
    };
    moveHandleStyle?: {
      color?: string;
      opacity?: number;
    };
    fillerColor?: string;
    emphasis?: {
      handleStyle?: {
        borderColor?: string;
        color?: string;
      };
      moveHandleStyle: {
        color?: string;
        opacity?: number;
      };
    };
    dataBackground?: {
      lineStyle?: {
        color?: string;
        width?: number;
      };
      areaStyle?: {
        color?: string;
      };
    };
    selectedDataBackground?: {
      lineStyle?: {
        color?: string;
      };
      areaStyle?: {
        color?: string;
      };
    };
  };
  markPoint: {
    label: {
      color: string;
    };
    emphasis: {
      label: {
        color: string;
      };
    };
  };
}

export const ODS_PROJECT: EChartsProject = {
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
