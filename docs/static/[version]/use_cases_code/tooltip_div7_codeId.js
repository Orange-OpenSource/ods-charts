///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Data to be displayed
var div7_dataOptions = {
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: {},
  series: [
    { name: 'Sales', data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', barWidth: 30 },
    { name: 'Revenue', data: [150, 230, 224, 218, 135, 147, 260], type: 'line' },
  ],
  legend: { data: ['Sales', 'Revenue'] },
  tooltip: {
    confine: true,
  },
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
    containLabel: true,
  },
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////
// Build the theme
var div7_themeManager = ODSCharts.getThemeManager({});
echarts.registerTheme(div7_themeManager.name, div7_themeManager.theme);

// Get the chart holder and initiate it with the generated theme
var div = document.getElementById('div7_chart');
var myChart = echarts.init(div, div7_themeManager.name, {
  renderer: 'svg',
});

// Set the data to be displayed.
div7_themeManager.setDataOptions(div7_dataOptions);
// Register the externalization of the legend.
div7_themeManager.externalizeLegends(myChart, '#div7_legend');
// Manage window size changed
div7_themeManager.manageChartResize(myChart, 'div7_chart');
// Observe dark / light mode changes
div7_themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup with custom template
div7_themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupTemplate: (categoryLabel, tooltipElements) => {
    let content = `<div class="custom-tooltip" style="padding: 12px; background-color: #fff; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">`;
    content += `<h6 class="text-primary mb-2" style="font-weight: bold;">${categoryLabel}</h6>`;
    content += `<ul class="list-unstyled mb-0">`;
    tooltipElements.forEach((element) => {
      content += `<li style="margin-bottom: 5px;">${element.marker} <strong>${element.seriesName}:</strong> ${element.itemValue}</li>`;
    });
    content += `</ul></div>`;
    return content;
  },
});
// Display the chart using the configured theme and data.
myChart.setOption(div7_themeManager.getChartOptions());
