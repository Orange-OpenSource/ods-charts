///////////////////////////////////////////////////
// Used data with dataset
///////////////////////////////////////////////////
var dataOptions = {
  dataset: {
    source: [
      ['Product', 'Q1', 'Q2', 'Q3', 'Q4'],
      ['Apples', 320, 332, 301, 334],
      ['Oranges', 220, 182, 191, 234],
      ['Bananas', 150, 232, 201, 154],
      ['Grapes', 250, 201, 154, 190],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  legend: {
    x: 'center',
    y: 'bottom',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
};
///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getBarChartConfiguration(),
  cssSelector: '#dataset_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('dataset_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#dataset_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'dataset_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
