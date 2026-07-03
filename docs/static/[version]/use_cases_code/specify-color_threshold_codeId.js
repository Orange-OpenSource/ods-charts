///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var dataOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false,
  },
  yAxis: { type: 'value', min: 10, max: 35 },
  series: [
    {
      name: 'Critical threshold',
      type: 'line',
      data: [20, 20, 20, 20, 20, 20, 20],
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: 'var(--ouds-charts-color-neutral)',
        type: 'solid',
      },
      areaStyle: { color: 'var(--ods-functional-2)', origin: 'start' },
      emphasis: {
        focus: 'none',
        areaStyle: { color: 'var(--ods-functional-2)' },
        lineStyle: { color: 'var(--ouds-charts-color-neutral)' },
      },
      color: 'transparent',
      stack: 'threshold',
      z: 0,
    },
    {
      name: 'Average',
      type: 'line',
      lineStyle: { color: 'var(--ods-categorical-12)', width: 2 },
      itemStyle: {
        borderWidth: 2,
        color: 'var(--ods-functional-2)',
        borderColor: 'var(--ods-categorical-12)',
      },
      data: [
        {
          value: 22,
        },
        {
          value: 18,
          itemStyle: {
            color: 'var(--ods-pink-4)',
            borderColor: 'var(--ods-functional-5)',
          },
        },
        {
          value: 23,
        },
        {
          value: 17,
          itemStyle: {
            color: 'var(--ods-pink-4)',
            borderColor: 'var(--ods-functional-5)',
          },
        },
        {
          value: 24,
        },
        {
          value: 27,
        },
        {
          value: 25,
        },
      ],
    },
    {
      name: 'Min',
      type: 'line',
      itemStyle: {
        borderWidth: 2,
        color: 'var(--ods-yellow-light)',
        borderColor: 'var(--ods-yellow)',
      },
      lineStyle: { color: 'var(--ods-yellow)', width: 2 },
      data: [
        {
          value: 18,
          itemStyle: {
            color: 'var(--ods-pink-4)',
            borderColor: 'var(--ods-functional-5)',
          },
        },
        {
          value: 14,
          itemStyle: {
            color: 'var(--ods-pink-4)',
            borderColor: 'var(--ods-functional-5)',
          },
        },
        {
          value: 19,
          itemStyle: {
            color: 'var(--ods-pink-4)',
            borderColor: 'var(--ods-functional-5)',
          },
        },
        {
          value: 13,
          itemStyle: {
            color: 'var(--ods-pink-4)',
            borderColor: 'var(--ods-functional-5)',
          },
        },
        {
          value: 20,
        },
        {
          value: 22,
        },
        {
          value: 21,
        },
      ],
    },
    {
      name: 'Max',
      type: 'line',
      itemStyle: {
        color: 'var(--ods-blue-6)',
        borderColor: 'var(--ods-blue-4)',
        borderWidth: 2,
      },
      lineStyle: { color: 'var(--ods-blue-4)', width: 2 },
      data: [26, 22, 27, 21, 28, 32, 29],
    },
  ],
  legend: { show: false },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getLineChartConfiguration({
    lineStyle: ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS,
  }),
});
echarts.registerTheme(themeManager.name, themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('threshold_barLine_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, [
  {
    legendHolderSelector: '#threshold_barLine_legend',
    seriesRef: ['Max', 'Min', 'Average'],
  },
]);
// Manage window size changed
themeManager.manageChartResize(myChart, 'threshold_barLine_chart');
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
