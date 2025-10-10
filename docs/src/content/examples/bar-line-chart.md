---
title: Bar + line Charts - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Bar + line charts example</h1>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Bar chart and line chart</h5>
      <p class="card-text pe-5">Two metric values showing quantity alongside changes in trends over time.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barLine"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarLineChart('barLine', false, false, false);
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Grouped bar and line chart</h5>
      <p class="card-text pe-5">Two metric values showing quantity alongside changes in trends over time.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barLineGroup"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarLineChart('barLineGroup', false, true, false);
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Bar chart with dual axis line chart</h5>
      <p class="card-text pe-5">Quantity values on the left axis with percentage trend line on the right axis.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="barLineDual"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarLineChart('barLineDual', false, false, false, true);
        });
      </script>
    </div>
  </div>
</div>
