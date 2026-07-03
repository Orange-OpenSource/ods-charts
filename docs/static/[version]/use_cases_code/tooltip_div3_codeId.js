///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Data to be displayed
var div3_dataOptions = {
  xAxis: { type: 'category', data: ['24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May'] },
  yAxis: {},
  series: [
    { data: [10, 22, 28.8956454657, 23, 19, 15], type: 'bar', barWidth: 30 },
    { data: [12, 28.8956454657, 23, 15, 15, 18], type: 'bar', barWidth: 30 },
  ],
  legend: { show: false },
  tooltip: {
    confine: true,
  },
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
    containLabel: true,
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var div3_themeManager = ODSCharts.getThemeManager({
  cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
});
echarts.registerTheme(div3_themeManager.name, div3_themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('div3_chart');
var myChart = echarts.init(div, div3_themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
div3_themeManager.setDataOptions(div3_dataOptions);
// Register the externalization of the legend.
div3_themeManager.manageChartResize(myChart, 'div3_chart');
// Observe dark / light mode changes
div3_themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
div3_themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.BOOSTED5,
  getPopupContentLine: ({ seriesName, itemValue }) => {
    return `<p>This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
  },
});
// Display the chart using the configured theme and data.
myChart.setOption(div3_themeManager.getChartOptions());
