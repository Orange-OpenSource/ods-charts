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
      <p class="card-text">Two metric values showing quantity alongside changes in trends over time.</p>
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
      <p class="card-text">Two metric values showing quantity alongside changes in trends over time.</p>
      <div id="barLineGroup"></div>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          window.generateBarLineChart('barLineGroup', false, true, false);
        });
      </script>
    </div>
  </div>
</div>
