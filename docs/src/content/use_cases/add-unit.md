---
title: Add unit - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Add unit</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Add unit in both Y axis and tooltip display</h5>
      <p class="card-text pe-5">Apache ECharts offer the availability to add a unit formatter.</p>
      <p class="card-text pe-5">
        There are two functions to provide. One for Y axis and one for the tooltip:
        <code>
          <pre>
            yAxis: {
              axisLabel: {
                formatter: "{value} °C"
              }
            },
            tooltip: {
              formatter: function (params) {
                return (
                  Math.round(params[0].value * 100) / 100 + " °C"
                );
              }
            },
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="barLine_holder">
            <div id="barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="barLine_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/add-unit_codeId.js" id="codeId" onload="addViewCode()"></script>
    </div>
  </div>
</div>
