///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Data to be displayed
var div4_dataOptions = {
  xAxis: { type: 'category', data: ['24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May'] },
  yAxis: {},
  series: [
    { data: [510, 1414, 1412, 1406, 1400, 1430, 784], type: 'bar', stack: 'true', barWidth: 30 },
    { data: [5, 0, 10, 20, 0, 0, 0], type: 'bar', stack: 'true', barWidth: 30 },
  ],
  legend: { show: false },
  tooltip: {
    confine: true,
    enterable: true,
  },
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
    containLabel: true,
  },
};

var popupContents = [
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >510 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >5 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1414 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1412 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >10 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1406 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >20 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1400 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1430 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
  '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >784 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
];

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var div4_themeManager = ODSCharts.getThemeManager({ colors: [{ colorIndex: 4, colorPalette: ODSCharts.ODSChartsColorsSet.DARKER_TINTS }] });
echarts.registerTheme(div4_themeManager.name, div4_themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('div4_chart');
var myChart = echarts.init(div, div4_themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
div4_themeManager.setDataOptions(div4_dataOptions);
// Register the externalization of the legend.
div4_themeManager.manageChartResize(myChart, 'div4_chart');
// Observe dark / light mode changes
div4_themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
div4_themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContent: (tooltipElements) => {
    return tooltipElements.length > 0 && popupContents.length > tooltipElements[0].dataIndex ? popupContents[tooltipElements[0].dataIndex] : '';
  },
});
// Display the chart using the configured theme and data.
myChart.setOption(div4_themeManager.getChartOptions());
