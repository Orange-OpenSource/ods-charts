---
title: Stacked bar Charts - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Stacked bar charts example</h1>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Vertical stacked bar chart</h5>
      <p class="card-text">Compare proportional contributions within a category.</p>
      <div id="barChartSV"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartSV', false, true, true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Horizontal stacked bar chart</h5>
      <p class="card-text">Compare proportional contributions within a category.</p>
      <div id="barChartSH"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartSH', true, true, true);
        });
      </script>
    </div>
  </div>
</div>
