---
title: Bar Charts - Examples - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Bar charts example</h1>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Vertical bar chart</h5>
      <p class="card-text">Used to compare related data sets.</p>
      <div id="barChart"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChart');
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Horizontal bar chart</h5>
      <p class="card-text">Used to compare related data sets.</p>
      <div id="barChartH"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartH', true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Vertical grouped bar chart</h5>
      <p class="card-text">A grouped bar chart is used to compare values across multiple categories.</p>
      <div id="barChartGV"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartGV', false, true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Horizontal grouped bar chart</h5>
      <p class="card-text">A grouped bar chart is used to compare values across multiple categories.</p>
      <div id="barChartGH"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarChart('barChartGH', true, true);
        });
      </script>
    </div>
  </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Grouped bar chart with dataset</h5>
      <p class="card-text">A grouped bar chart is used to compare values across multiple categories.</p>
      <div id="barChartdataset"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateDatasetBarChart('barChartdataset');
        });
      </script>
    </div>
  </div>
</div>
