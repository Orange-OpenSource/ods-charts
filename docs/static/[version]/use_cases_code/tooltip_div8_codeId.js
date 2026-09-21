///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var div8_dataOptions = {
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Product A',
      type: 'bar',
      data: [36, 30, 48, 42, 44, 34],
    },
    {
      name: 'Product B',
      type: 'bar',
      data: [24, 18, 28, 26, 28, 22],
    },
  ],
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////

var div8_themeManager = ODSCharts.getThemeManager();
echarts.registerTheme(div8_themeManager.name, div8_themeManager.theme);

var div = document.getElementById('div8_chart');
var myChart = echarts.init(div, div8_themeManager.name, {
  renderer: 'svg',
});

div8_themeManager.setDataOptions(div8_dataOptions);

// No externalizePopover(): Apache ECharts displays the native tooltip.
myChart.setOption(div8_themeManager.getChartOptions());
