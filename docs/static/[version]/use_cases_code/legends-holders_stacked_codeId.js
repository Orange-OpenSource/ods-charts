///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var average = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var results1 = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});
var results2 = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});
var results3 = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});
var goals1 = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});
var goals2 = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var dates = new Array(...new Array(12).keys()).map((i) => {
  var d = new Date();
  d.setMonth(d.getMonth() - i);
  return d.toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  });
});

// Data to be displayed
var dataOptions = {
  xAxis: {
    type: 'category',
    data: dates,
  },
  yAxis: {},
  series: [
    {
      data: results1,
      type: 'bar',
      stack: 'result',
    },
    {
      data: results2,
      type: 'bar',
      stack: 'result',
    },
    {
      data: results3,
      type: 'bar',
      stack: 'result',
    },
    {
      data: goals1,
      type: 'bar',
      stack: 'goals',
    },
    {
      data: goals2,
      type: 'bar',
      stack: 'goals',
    },
    {
      data: average,
      type: 'line',
    },
  ],
  legend: {
    data: ['Results 1', 'Results 2', 'Results 3', 'Goal 1', 'Goal 2', 'Average'],
  },
};

///////////////////////////////////////////////////
// ODSCharts
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
themeManager.externalizeLegends(myChart, [
  { legendHolderSelector: '#results_stack_legend', seriesRef: ['result'], orientation: 'vertical' },
  { legendHolderSelector: '#goals_stack_legend', seriesRef: ['goals'], orientation: 'vertical' },
  { legendHolderSelector: '#line_legend' },
]);
// Manage window size changed
themeManager.manageChartResize(myChart, 'barLine_chart');
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
