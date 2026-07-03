///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var goals = new Array(...new Array(12).keys()).map((i) => {
  return 50 + Math.random() * 50;
});

var results = new Array(...new Array(12).keys())
  .map((i) => {
    return 50 + Math.random() * 50;
  })
  .map((res, i) =>
    res >= goals[i]
      ? res
      : {
          value: res,
          itemStyle: {
            color: 'var(--ouds-charts-color-functional-negative)',
          },
        }
  );

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
      data: results,
      type: 'bar',
      stack: 'result',
    },
    {
      data: goals,
      type: 'line',
    },
  ],
  legend: {
    data: ['Results', 'Goal'],
  },
  tooltip: {
    formatter: function (params) {
      return Math.round(params[0].value * 100) / 100 + '$';
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
var div = document.getElementById('two_colors_in_one_barLine_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#two_colors_in_one_barLine_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'two_colors_in_one_barLine_chart');
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup and use the second parameter as specified in https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition to change the popup value (cf https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition#getPopupContentValue)
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
