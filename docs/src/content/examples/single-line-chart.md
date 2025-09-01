---
title: Single Line Charts - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Single line charts example</h1>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Single line chart example</h5>
      <p class="card-text pe-5">A single line chart is used to show the change of values over a continuous time interval or time span.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="singleLineChart"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateSingleLineChart('singleLineChart');
        });
      </script>
    </div>
  </div>
</div>
