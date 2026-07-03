///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Data to be displayed
var div2_dataOptions = {
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
var div2_themeManager = ODSCharts.getThemeManager({});
echarts.registerTheme(div2_themeManager.name, div2_themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('div2_chart');
var myChart = echarts.init(div, div2_themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
div2_themeManager.setDataOptions(div2_dataOptions);
// Register the externalization of the legend.
div2_themeManager.manageChartResize(myChart, 'div2_chart');
// Observe dark / light mode changes
div2_themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
div2_themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContentLine: ({ seriesName, itemValue, seriesIndex }) => {
    return `<p>${div2_themeManager.getPopoverMarker(seriesIndex)}This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
  },
});
// Display the chart using the configured theme and data.
myChart.setOption(div2_themeManager.getChartOptions());
