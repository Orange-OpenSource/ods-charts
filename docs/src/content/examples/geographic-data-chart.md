---
title: Geographic Data - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Geographic data example</h1>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="alert alert-warning">
    <span class="alert-icon"></span>
    <div>
      <h2 class="alert-heading mb-2"><span class="visually-hidden">Warning about </span>Map assets</h2>
      <p>The maps used in this page aren't studied for a commercial use. We use them as placeholders in our docs. We're trying our best to provide some, that you'll be able to use on your side. In the meantime, be sure to check the licenses associated to maps you use.</p>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Choropleth map</h5>
      <p class="card-text pe-5">A choropleth map uses colour progression to represent specific amounts of data. These are best used when comparing a dataset by a specific geographic region, which can show variation or patterns across the displayed location.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground" data-additional-js-before="fetch('https://raw.githubusercontent.com/gregoiredavid/france-geojson/refs/heads/master/regions-version-simplifiee.geojson').then((res) => res.json()).then((json) => JSON.parse(JSON.stringify(json).replaceAll('nom', 'name'))).then((res) => echarts.registerMap('france-regions', res)).then(res => {"
      data-additional-js-after="});"
      >
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="choropletRegionshMapChart" style="min-height: 500px"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateChoroplethMapChart('choropletRegionshMapChart');
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Bubble map</h5>
      <p class="card-text pe-5">A bubble map uses circles over a specific geographical region. The area or size of the circle is proportional depending on the size or value of the dataset. These maps are best when comparing proportions over geographical regions that are close to one another.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground" data-additional-js-before="fetch('https://raw.githubusercontent.com/apache/echarts-website/refs/heads/asf-site/examples/data/asset/geo/world.json').then((response) => response.json()).then((res) => echarts.registerMap('world', res)).then(res => {"
      data-additional-js-after="});">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="bubbleMapChart" style="min-height: 500px"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBubbleMapChart('bubbleMapChart');
        });
      </script>
    </div>
  </div>
</div>
