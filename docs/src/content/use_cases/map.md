---
title: SVG map - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">SVG map</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Choropleth map</h5>
      <p class="card-text pe-5">Apache ECharts accepts either GeoJSON or SVG as input for a map. This example illustrates the use of an SVG map, reused here as a choropleth map, where each country area is colored from a data value.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="choropleth_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">World coverage</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Service adoption by country</h5>
          </div>
          <div id="choropleth_map_holder">
            <div id="choropleth_map_chart" style="width: 100%; height: 600px" class="position-relative"></div>
          </div>
        </div>
      </div>
      <script>
        var choropleth_htmlCode = getHtmlCode('choropleth_');
      </script>
      <script src="../../use_cases_code/map_choropleth_codeId.js" id="choropleth_codeId" onload="addViewCode(choropleth_htmlCode, 'choropleth_')"></script>
    </div>
  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Multi-select map</h5>
      <p class="card-text pe-5">This example uses a GeoJSON map to let users select one or more areas. Click a continent to toggle its selection.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="multiselect_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Distribution areas</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Select one or more continents</h5>
          </div>
          <div id="multiselect_map_holder">
            <div id="multiselect_map_chart" style="width: 100%; height: 600px" class="position-relative"></div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center m-3">
          <p id="multiselect_status" class="mb-0 fw-bold" aria-live="polite">No continent selected</p>
          <button id="multiselect_reset" class="btn btn-primary" type="button">Reset selection</button>
        </div>
      </div>
      <script>
        var multiselect_htmlCode = getHtmlCode('multiselect_');
      </script>
      <script src="../../use_cases_code/map_multiselect_codeId.js" id="multiselect_codeId" onload="addViewCode(multiselect_htmlCode, 'multiselect_')"></script>
    </div>
  </div>
</div>
