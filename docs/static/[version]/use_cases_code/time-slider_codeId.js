///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}

// Data to be displayed
var dataOptions = {
  xAxis: {
    type: 'time',
  },
  yAxis: {
    type: 'value',
  },
  toolbox: {
    feature: {
      dataZoom: {},
      restore: {},
    },
  },
  dataZoom: [
    {
      type: 'inside',
    },
    {
      type: 'slider',
    },
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      symbol: 'none',
      areaStyle: {},
      data: data,
    },
  ],
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
// Register the externalization of the tooltip/popup and use the second parameter as specified in https://charts.unified-design-system.orange.com/0.5/api/classes/odschartspopoverdefinition to change the popup value (cf https://charts.unified-design-system.orange.com/0.5/api/classes/odschartspopoverdefinition#getPopupContentValue)
themeManager.externalizePopover();
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
