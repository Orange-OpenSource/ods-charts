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
var dataOptions = {
  xAxis: {
    type: 'category',
    data: dates,
  },
  tooltip: {
    formatter: function (params) {
      return Math.round(params[0].value);
    },
  },
  series: [
    {
      data: resultsOK,
      type: 'bar',
      itemStyle: {
        color: 'var(--ouds-charts-color-functional-positive)',
      },
    },
    {
      data: resultsNOK,
      type: 'bar',
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
