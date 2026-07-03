///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var goals = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var results = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var resultsOK = results.map((res, i) => (res >= goals[i] ? res : undefined));
var resultsNOK = results.map((res, i) => (res < goals[i] ? res : undefined));
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
      data: resultsOK,
      type: 'bar',
      stack: 'result',
      itemStyle: {
        color: 'var(--ouds-charts-color-functional-positive)',
      },
    },
    {
      data: resultsNOK,
      type: 'bar',
      stack: 'result',
      itemStyle: {
        color: 'var(--ouds-charts-color-functional-negative)',
      },
    },
    {
      data: goals,
      type: 'line',
      lineStyle: {
        color: 'var(--ouds-charts-color-categorical-tier-5)',
      },
    },
  ],
  legend: {
    data: ['Results OK', 'Results NOK', 'Goal'],
  },
  tooltip: {
    formatter: function (params) {
      return params[0].value ? Math.round(params[0].value * 100) / 100 + '$' : undefined;
    },
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager();
echarts.registerTheme(themeManager.name, themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('two_colors_barLine_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#two_colors_barLine_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'two_colors_barLine_chart');
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup and use the second parameter as specified in https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition to change the popup value (cf https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition#getPopupContentValue)
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
