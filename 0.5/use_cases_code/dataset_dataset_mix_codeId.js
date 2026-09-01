///////////////////////////////////////////////////
// Used data with mixed bar and line series
///////////////////////////////////////////////////
var dataOptions = {
  dataset: {
    source: [
      ['Month', 'Sales', 'Costs', 'Target'],
      ['Jan', 120, 90, 110],
      ['Feb', 132, 101, 115],
      ['Mar', 101, 85, 112],
      ['Apr', 134, 105, 120],
      ['May', 190, 140, 150],
      ['Jun', 230, 180, 170],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'line' }],
  legend: {
    x: 'center',
    y: 'bottom',
  },
  tooltip: {
    trigger: 'axis',
  },
};
///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getLineAndBarChartConfiguration(),
  cssSelector: '#dataset_mix_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('dataset_mix_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#dataset_mix_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'dataset_mix_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
