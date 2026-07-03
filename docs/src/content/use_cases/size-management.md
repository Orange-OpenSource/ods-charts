---
title: Size management - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Size management</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Collapsed graph example</h5>
      <p class="card-text pe-5">The size of the graph may change due to window resizing or modifications in the DOM structure or content. For instance, the graph's size can be affected if it is displayed within a collapsed panel.</p>
      <p class="card-text pe-5">Apache ECharts has a <code>resize</code> method to manage that. But you can ask to the <code>ODSChartsTheme</code> to manage it for you calling the <code>externalizeLegends</code> method.</p>
      <p class="card-text pe-5">
        In the following collapsed div, the resize is managed by the following code:
        <code>
          <pre>
themeManager.manageChartResize(myChart, 'barLine_chart');
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
        <p class="d-inline-flex gap-1">
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChart" aria-expanded="false" aria-controls="collapseChart">Click here to see the graph</button>
        </p>
        <div class="collapse" id="collapseChart">
          <div class="card card-body">
            <div>
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
          </div>
        </div>
      </div>
      <script src="../../use_cases_code/size-management_codeId.js" id="codeId" onload="addViewCode()"></script>
    </div>
  </div>
</div>
