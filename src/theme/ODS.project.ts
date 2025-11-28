//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
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
  backgroundColor: 'var(--bs-body-bg, transparent)',
  textStyle: {},
  title: {
    textStyle: {
      color: 'var(--bs-body-color, #000000)',
    },
    subtextStyle: {
      color: 'var(--bs-secondary-color, #666666)',
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
      barBorderColor: 'transparent',
    },
  },
  pie: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
  },
  candlestick: {
    itemStyle: {
      color: 'var(--bs-success, #32c832)',
      color0: 'var(--bs-danger, #cd3c14)',
      borderColor: 'var(--bs-success, #228722)',
      borderColor0: 'var(--bs-danger, #cd3c14)',
      borderWidth: 1,
    },
  },
  graph: {
    itemStyle: {
      borderWidth: '2',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
    lineStyle: {
      width: 1,
      color: 'var(--bs-secondary-color, #666666)',
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
    color: [],
    label: {
      color: 'var(--bs-body-color, #000000)',
    },
  },
  map: {
    itemStyle: {
      areaColor: 'var(--bs-secondary-bg, #eeeeee)',
      borderColor: 'var(--bs-secondary-color, #444444)',
      borderWidth: 0.5,
    },
    label: {
      color: 'var(--bs-body-color, #000000)',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(var(--bs-warning-rgb, 255,215,0),0.8)',
        borderColor: 'var(--bs-secondary-color, #444444)',
        borderWidth: 1,
      },
      label: {
        color: 'var(--bs-black, rgb(100,0,0))',
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: 'var(--bs-secondary-bg, #eeeeee)',
      borderColor: 'var(--bs-secondary-color, #444444)',
      borderWidth: 0.5,
    },
    label: {
      color: 'var(--bs-body-color, #000000)',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(var(--bs-warning-rgb, 255,215,0),0.8)',
        borderColor: 'var(--bs-secondary-color, #444444)',
        borderWidth: 1,
      },
      label: {
        color: 'var(--bs-black, rgb(100,0,0))',
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'var(--bs-danger, #eb0909)',
      },
    },
    axisLabel: {
      show: true,
      color: 'var(--bs-body-color, #000000)',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['var(--bs-border-color-subtle, #cccccc)'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['var(--bs-body-bg, #ffffff)'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'var(--secondary-color, #6E7079)',
      },
    },
    axisLabel: {
      show: true,
      color: 'var(--bs-body-color, #000000)',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['var(--bs-border-color-subtle, #cccccc)'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'var(--bs-secondary-color, #6E7079)',
      },
    },
    axisLabel: {
      show: true,
      color: 'var(--bs-body-color, #000000)',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['var(--bs-border-color-subtle, #cccccc)'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
      },
    },
    axisLabel: {
      show: true,
      color: 'var(--bs-body-color, #000000)',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['var(--bs-border-color-subtle, #cccccc)'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(var(--bs-body-bg-rgb, 250,250,250),0.2)', 'rgba(var(--bs-tertiary-color-rgb, 210,219,238),0.2)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: 'var(--bs-secondary-color, #999999)',
    },
    emphasis: {
      iconStyle: {
        borderColor: 'var(--bs-body-color, #666666)',
      },
    },
  },
  legend: {
    textStyle: {
      color: 'var(--bs-body-color, #333333)',
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
        width: 1,
      },
      crossStyle: {
        color: 'var(--bs-border-color-subtle, #cccccc)',
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: 'var(--bs-tertiary-bg, #dae1f5)',
      width: 2,
    },
    itemStyle: {
      color: 'var(--bs-secondary-bg, #a4b1d7)',
      borderWidth: 1,
    },
    controlStyle: {
      color: 'var(--bs-secondary-bg, #a4b1d7)',
      borderColor: 'var(--bs-secondary-bg, #a4b1d7)',
      borderWidth: 1,
    },
    checkpointStyle: {
      color: 'var(--bs-info, #316bf3)',
      borderColor: 'var(--bs-body-bg, #ffffff)',
    },
    label: {
      color: 'var(--bs-secondary-bg, #a4b1d7)',
    },
    emphasis: {
      itemStyle: {
        color: 'var(--bs-body-bg, #ffffff)',
      },
      controlStyle: {
        color: 'var(--bs-secondary-bg, #a4b1d7)',
        borderColor: 'var(--bs-secondary-bg, #a4b1d7)',
        borderWidth: 1,
      },
      label: {
        color: 'var(--bs-secondary-bg, #a4b1d7)',
      },
    },
  },
  visualMap: {
    color: ['#085ebd', '#3179c8', '#5a94d3', '#84afde', '#adc9e9', '#d6e4f4'],
  },
  markPoint: {
    label: {
      color: 'var(--bs-body-color, #000000)',
    },
    emphasis: {
      label: {
        color: 'var(--bs-body-color, #000000)',
      },
    },
  },
};
