---
title: Geographic Data - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Geographic data example</h1>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Choropleth map</h5>
      <p class="card-text pe-5">A choropleth map uses colour progression to represent specific amounts of data. These are best used when comparing a dataset by a specific geographic region, which can show variation or patterns across the displayed location.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="choroplethMapChart" style="min-height: 500px"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateChoroplethMapChart('choroplethMapChart');
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
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
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
