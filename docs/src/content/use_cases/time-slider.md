---
title: Time slider axis - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Time slider axis</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Time slider axis example</h5>
      <p class="card-text pe-5">This use case illustrates the use of the timeline slider.</p>
      <p class="card-text pe-5">
        You can add the timeline slider with the <code>dataZoom</code> option:
        <code>
          <pre>

dataZoom: [
{
type: 'inside',
},
{
type: 'slider',
},
],

</pre>
</code>
</p>
<p class="card-text pe-5">
You can also configure the toolbox to switch between zoom and slider with the <code>toolbox</code> option:
        <code>
          <pre>

toolbox: {
feature: {
dataZoom: {},
restore: {},
},
},

</pre>
</code>
</p>
<p class="card-text pe-5">
Refer to the online Apache ECharts documentation for more detail on <a href="https://echarts.apache.org/en/option.html#dataZoom" target="_blank">dataZoom</a> and on <a href="https://echarts.apache.org/en/option.html#toolbox.feature" target="_blank">toolbox</a>
configurations
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
      <script src="../../use_cases_code/time-slider_codeId.js" id="codeId" onload="addViewCode()"></script>
    </div>

  </div>
</div>
