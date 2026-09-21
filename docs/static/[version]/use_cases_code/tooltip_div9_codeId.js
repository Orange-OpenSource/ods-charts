///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var div9_dataOptions = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          name: 'Label 1',
          value: 25,
        },
        {
          name: 'Label 2',
          value: 50,
        },
        {
          name: 'Label 3',
          value: 75,
        },
        {
          name: 'Label 4',
          value: 10,
        },
        {
          name: 'Label 5',
          value: 100,
        },
        {
          name: 'Label 6',
          value: 30,
        },
        {
          name: 'Label 7',
          value: 5,
        },
      ],
    },
  ],
  legend: {
    orient: 'vertical',
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////

var div9_themeManager = ODSCharts.getThemeManager({
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getPieChartConfiguration(),
  cssSelector: '#div9_chart',
});
echarts.registerTheme(div9_themeManager.name, div9_themeManager.theme);

var div9_chart = document.getElementById('div9_chart');
var myChart = echarts.init(div9_chart, div9_themeManager.name, {
  renderer: 'svg',
});

div9_themeManager.setDataOptions(div9_dataOptions);

// Manage window size changed
div9_themeManager.manageChartResize(myChart, 'div9_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
div9_themeManager.manageThemeObserver(myChart);

// No externalizePopover(): Apache ECharts displays the native tooltip.
myChart.setOption(div9_themeManager.getChartOptions());
