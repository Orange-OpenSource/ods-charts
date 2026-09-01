///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Data to be displayed
var div1_dataOptions = {
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
    data: ['label 1', 'label 2'],
  },
  tooltip: {
    confine: true,
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var div1_themeManager = ODSCharts.getThemeManager();
echarts.registerTheme(div1_themeManager.name, div1_themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('div1_chart');
var myChart = echarts.init(div, div1_themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
div1_themeManager.setDataOptions(div1_dataOptions);
// Register the externalization of the legend.
div1_themeManager.externalizeLegends(myChart, '#div1_legend');
// Manage window size changed
div1_themeManager.manageChartResize(myChart, 'div1_chart');
// Observe dark / light mode changes
div1_themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
div1_themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(div1_themeManager.getChartOptions());
