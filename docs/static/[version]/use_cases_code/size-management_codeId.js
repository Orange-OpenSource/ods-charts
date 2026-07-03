///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Data to be displayed
var dataOptions = {
  grid: {
    left: '0%',
    right: '0%',
  },
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
      data: [12, 28.8956454657, 23, 15, 15, 18],
      type: 'line',
    },
  ],
  legend: {
    data: ['label 0', 'label 1'],
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager();
echarts.registerTheme(themeManager.name, themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('barLine_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#barLine_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'barLine_chart');
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
