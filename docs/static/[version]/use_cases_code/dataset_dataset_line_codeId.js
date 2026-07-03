///////////////////////////////////////////////////
// Used data with dataset
///////////////////////////////////////////////////
var dataOptions = {
  dataset: {
    source: [
      ['Month', 'Paris', 'London', 'Berlin', 'Madrid'],
      ['Jan', 3, 5, 1, 9],
      ['Feb', 5, 6, 3, 11],
      ['Mar', 9, 9, 7, 14],
      ['Apr', 13, 12, 12, 18],
      ['May', 17, 15, 17, 22],
      ['Jun', 21, 18, 20, 27],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    axisLabel: { formatter: '{value} °C' },
  },
  series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }, { type: 'line' }],
  legend: {
    x: 'center',
    y: 'bottom',
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      return Math.round(params[0].itemValue * 100) / 100 + ' °C';
    },
  },
};
///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getLineChartConfiguration(),
  cssSelector: '#dataset_line_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('dataset_line_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#dataset_line_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'dataset_line_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
