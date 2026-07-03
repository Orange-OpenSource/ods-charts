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
      <script src="../../use_cases_code/dataset_dataset_codeId.js" id="dataset_codeId" onload="addViewCode('dataset_')"></script>
    </div>
  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Dataset line chart example</h5>
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
      <script src="../../use_cases_code/dataset_dataset_line_codeId.js" id="dataset_line_codeId" onload="addViewCode('dataset_line_')"></script>
    </div>
  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Dataset bar and line chart example</h5>
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
      <script src="../../use_cases_code/dataset_dataset_mix_codeId.js" id="dataset_mix_codeId" onload="addViewCode('dataset_mix_')"></script>
    </div>
  </div>

</div>
