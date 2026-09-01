///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////
// this is the data to be displayed
var dataOptions = {
  series: [
    {
      type: 'pie',
      data: [
        {
          name: 'Demonstrator',
          value: 15,
        },
        {
          name: 'Demonstrator LCD',
          value: 3,
        },
        {
          name: 'Microchip RN2483',
          value: 2,
        },
        {
          name: 'Demonstrator2',
          value: 1,
        },
        {
          name: ' RF Sensors',
          value: 1,
        },
        {
          name: 'Label 6',
          value: 1,
        },
        {
          name: 'Label 754',
          value: 1,
        },
      ],
      center: ['50%', '50%'],
      radius: ['0%', '85%'],
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
var themeManager = ODSCharts.getThemeManager({
  colors: ODSCharts.ODSChartsColorsSet.DEFAULT,
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getPieChartConfiguration(),
  cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
  cssSelector: '#pct_legend_pieChart_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('pct_legend_pieChart_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, {
  legendHolderSelector: '#pct_legend_pieChart_legend',
  postItemContent: (legendLabel, legendName, legendIndex, color, colorIndex) => {
    let total = 0;
    let value = 0;
    dataOptions.series[0].data.forEach((item) => {
      total += item.value;
      if (item.name === legendName) {
        value = item.value;
      }
    });
    let percent = ((value / total) * 100).toFixed(2);
    return percent + '%';
  },
});
// Manage window size changed
themeManager.manageChartResize(myChart, 'pct_legend_pieChart_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover(
  {
    enabled: true,
    shared: false,
    tooltip: false,
  },
  ODSCharts.ODSChartsPopoverManagers.BOOSTED5
);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
