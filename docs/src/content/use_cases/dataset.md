---
title: Dataset - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Dataset</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Dataset example</h5>
      <p class="card-text pe-5">Apache ECharts supports a <code>dataset</code> component to manage data separately from chart configuration. This allows data to be reused across multiple series and simplifies series definitions.</p>
      <p class="card-text pe-5">
        Instead of providing data directly in each series, you define a single dataset source and let the series reference it:
        <code>
          <pre>
dataset: {
  source: [
    ['Product', 'Q1', 'Q2', 'Q3', 'Q4'],
    ['Apples',  320, 332, 301, 334],
    ...
  ],
},
series: [{ type: 'bar' }, { type: 'bar' }, ...]
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="dataset_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Quarterly Sales Report</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sales vs Costs Comparison</h5>
          </div>
          <div id="dataset_holder">
            <div id="dataset_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="dataset_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('dataset_');
      </script>
    </div>
  </div>
  <script id="dataset_codeId">
///////////////////////////////////////////////////
// Used data with dataset
///////////////////////////////////////////////////
var dataOptions = {
  dataset: {
    source: [
      ['Product', 'Q1', 'Q2', 'Q3', 'Q4'],
      ['Apples', 320, 332, 301, 334],
      ['Oranges', 220, 182, 191, 234],
      ['Bananas', 150, 232, 201, 154],
      ['Grapes', 250, 201, 154, 190],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  legend: {
    x: 'center',
    y: 'bottom',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
};
///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
chartConfiguration:
ODSCharts.ODSChartsConfiguration.getBarChartConfiguration(),
    cssSelector: '#dataset_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('dataset_chart');
var myChart = echarts.init(div, themeManager.name, {
    renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#dataset_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'dataset_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
</script>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title">Dataset line chart example</h5>
      <p class="card-text pe-5">The <code>dataset</code> component works equally well with line charts. The series definitions stay minimal — only the chart type changes.</p>
      <p class="card-text pe-5">
        Use <code>getLineChartConfiguration()</code> and declare series with <code>type: 'line'</code>. A formatter adds the <code>°C</code> unit on both the Y axis and the tooltip:
        <code>
          <pre>
chartConfiguration: ODSCharts.ODSChartsConfiguration.getLineChartConfiguration(),
...
yAxis: {
  axisLabel: { formatter: '{value} °C' },
},
tooltip: {
  trigger: 'axis',
  valueFormatter: (value) => value + ' °C',
},
series: [{ type: 'line' }, { type: 'line' }, ...]
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="dataset_line_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Monthly Temperature Report</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Average Temperature by City</h5>
          </div>
          <div id="dataset_line_holder">
            <div id="dataset_line_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="dataset_line_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('dataset_line_');
      </script>
    </div>
  </div>
  <script id="dataset_line_codeId">
///////////////////////////////////////////////////
// Used data with dataset
///////////////////////////////////////////////////
var dataOptions = {
  dataset: {
    source: [
      ['Month', 'Paris', 'London', 'Berlin', 'Madrid'],
      ['Jan', 3, 5, 1, 9],
      ['Feb', 5, 6, 3, 11],
      ['Mar', 9, 9, 7, 14],
      ['Apr', 13, 12, 12, 18],
      ['May', 17, 15, 17, 22],
      ['Jun', 21, 18, 20, 27],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    axisLabel: { formatter: '{value} °C' },
  },
  series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }, { type: 'line' }],
  legend: {
    x: 'center',
    y: 'bottom',
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      return Math.round(params[0].itemValue * 100) / 100 + ' °C';
    },
  },
};
///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  chartConfiguration:
    ODSCharts.ODSChartsConfiguration.getLineChartConfiguration(),
  cssSelector: '#dataset_line_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('dataset_line_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#dataset_line_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'dataset_line_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
  </script>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title">Dataset bar and line chart example</h5>
      <p class="card-text pe-5">You can also combine bar and line series from the same <code>dataset</code> source. This is useful to compare measured values (bars) with a trend or target line.</p>
      <p class="card-text pe-5">
        Use <code>getLineAndBarChartConfiguration()</code> and mix series types:
        <code>
          <pre>
chartConfiguration: ODSCharts.ODSChartsConfiguration.getLineAndBarChartConfiguration(),
...
series: [{ type: 'bar' }, { type: 'bar' }, { type: 'line' }]
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="dataset_mix_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Monthly Sales Performance</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sales, Costs and Target Trend</h5>
          </div>
          <div id="dataset_mix_holder">
            <div id="dataset_mix_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="dataset_mix_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('dataset_mix_');
      </script>
    </div>
  </div>
  <script id="dataset_mix_codeId">
///////////////////////////////////////////////////
// Used data with mixed bar and line series
///////////////////////////////////////////////////
var dataOptions = {
  dataset: {
    source: [
      ['Month', 'Sales', 'Costs', 'Target'],
      ['Jan', 120, 90, 110],
      ['Feb', 132, 101, 115],
      ['Mar', 101, 85, 112],
      ['Apr', 134, 105, 120],
      ['May', 190, 140, 150],
      ['Jun', 230, 180, 170],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'line' }],
  legend: {
    x: 'center',
    y: 'bottom',
  },
  tooltip: {
    trigger: 'axis',
  },
};
///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  chartConfiguration:
    ODSCharts.ODSChartsConfiguration.getLineAndBarChartConfiguration(),
  cssSelector: '#dataset_mix_chart',
});
// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);
// get the chart holder and initiate it with the generated theme
var div = document.getElementById('dataset_mix_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
});
// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#dataset_mix_legend');
// Manage window size changed
themeManager.manageChartResize(myChart, 'dataset_mix_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
  </script>

</div>
