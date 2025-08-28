---
title: Bar Charts - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Bar charts example</h1>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Vertical bar chart</h5>
      <p class="card-text pe-5">Used to compare related data sets.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barChart"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChart');
        });
      </script>
    </div>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Horizontal bar chart</h5>
      <p class="card-text pe-5">Used to compare related data sets.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barChartH"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartH', true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Vertical grouped bar chart</h5>
      <p class="card-text pe-5">A grouped bar chart is used to compare values across multiple categories.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barChartGV"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartGV', false, true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Horizontal grouped bar chart</h5>
      <p class="card-text pe-5">A grouped bar chart is used to compare values across multiple categories.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barChartGH"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartGH', true, true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Grouped bar chart with dataset</h5>
      <p class="card-text pe-5">A grouped bar chart is used to compare values across multiple categories.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barChartdataset"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateDatasetBarChart('barChartdataset');
        });
      </script>
    </div>
  </div>
</div>
