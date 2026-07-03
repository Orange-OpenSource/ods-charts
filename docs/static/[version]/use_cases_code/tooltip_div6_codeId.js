///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var goals = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var resultsOK = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var resultsNOK = new Array(...new Array(12).keys()).map((i) => {
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
var div6_dataOptions = {
  xAxis: {
    type: 'category',
    data: dates,
  },
  tooltip: {
    formatter: function (params) {
      return `<span style="color: red; font-size:x-large">${Math.round(params[0].value * 100) / 100}</span> °C`;
    },
  },
  series: [
    {
      data: resultsOK,
      type: 'bar',
    },
    {
      data: resultsNOK,
      type: 'bar',
    },
    {
      data: goals,
      type: 'line',
    },
  ],
  legend: {
    data: ['Results OK', 'Results NOK', 'Goal'],
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var div6_themeManager = ODSCharts.getThemeManager();
echarts.registerTheme(div6_themeManager.name, div6_themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('div6_chart');
var myChart = echarts.init(div, div6_themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
div6_themeManager.setDataOptions(div6_dataOptions);
// Register the externalization of the legend.
div6_themeManager.manageChartResize(myChart, 'div6_chart');
// Observe dark / light mode changes
div6_themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
div6_themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(div6_themeManager.getChartOptions());
