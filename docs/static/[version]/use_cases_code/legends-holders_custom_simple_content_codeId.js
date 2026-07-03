///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// this is the data to be displayed
var dataOptions = {
  yAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  xAxis: {},
  series: [
    {
      data: [10, 22, 28.8956454657, 23, 19, 15],
      type: 'bar',
      name: 'Label 1',
      stack: true,
    },
    {
      data: [28.8956454657, 23, 19, 15, 18, 12],
      type: 'bar',
      name: 'Label 2',
      stack: true,
    },
    {
      data: [19, 15, 18, 12, 28.8956454657, 23],
      type: 'bar',
      name: 'Label 3',
      stack: true,
    },
  ],
  legend: {
    orient: 'vertical',
  },
};

///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager();

// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);

// get the chart holder and initiate it with the generated theme
var div = document.getElementById('barChartCSC_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, {
  legendHolderSelector: '#barChartCSC_legend',
  postItemContent: {
    'Label 2': '<small>(partial result)</small>',
  },
});
// Manage window size changed
themeManager.manageChartResize(myChart, 'barChartCSC_chart');
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
