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
      <p class="card-text pe-5">This example uses the same SVG map as a choropleth map, where each country area is colored from a data value.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground" data-additional-js-before="fetch('https://raw.githubusercontent.com/Orange-OpenSource/ods-charts/main/src/assets/world.svg').then((response) =&gt; response.text()).then((svg) =&gt; echarts.registerMap('world-svg-choropleth', { svg })).then(() =&gt; {" data-additional-js-after="});">
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
      <script src="../../use_cases_code/map_choropleth_codeId.js" id="choropleth_codeId" onload="addViewCode('choropleth_')"></script>
    </div>
  </div>
</div>
