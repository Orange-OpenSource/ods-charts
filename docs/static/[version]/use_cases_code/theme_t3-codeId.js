///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// this is the data to be displayed
var dataOptions = {
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28.8956454657, 23, 19, 15],
      type: 'bar',
    },
    {
      data: [28.8956454657, 23, 19, 15, 18, 12],
      type: 'bar',
    },
    {
      data: [12, 28.8956454657, 23, 15, 15, 18],
      type: 'line',
    },
  ],
  legend: {
    data: ['label 0', 'label 1', 'label 2'],
  },
};

///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  cssTheme: ODSCharts.ODSChartsCSSThemes.NONE,
  cssSelector: '#t3-barLineGroup_chart',
});

// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);

// get the chart holder and initiate it with the generated theme
var div = document.getElementById('t3-barLineGroup_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#t3-barLineGroup_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 't3-barLineGroup_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover({}, ODSCharts.ODSChartsPopoverManagers.NONE);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
