---
title: Multiple line Charts - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Multiple line charts example</h1>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Multiple line chart example</h5>
      <p class="card-text">Compare the relationship between several values over categories.</p>
      <div id="multipleLineChart"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateMultipleLineChart('multipleLineChart');
        });
      </script>
    </div>
  </div>
</div>
<div class="container d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Time series line chart example</h5>
      <p class="card-text">Compare the relationship between several values over time.</p>
      <div id="timeSeriesChart"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateTimeSeriesLineChart('timeSeriesChart');
        });
      </script>
    </div>
  </div>
</div>
