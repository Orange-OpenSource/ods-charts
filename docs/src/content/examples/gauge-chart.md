---
title: Gauge Charts - Examples - ODS Charts
---

<div class="title-bar">
    <div class="container-xxl">
        <h1 class="display-1">Gauge charts example</h1>
    </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
    <div class="card w-100">
        <div class="card-body">
        <h5 class="card-title">Horizontal gauge</h5>
        <p class="card-text pe-5">A horizontal gauge displays a single data value along a linear scale and shows progress toward a specific value.</p>
        <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="#lightning-charge-fill" />
            </svg>
            <span class="visually-hidden">Open in playground using StackBlitz</span>
        </button>
        <div id="horizontalGaugeChart" style="min-height: 200px"></div>
        <script>
            window.addEventListener('DOMContentLoaded', () => {
            window.generateHorizontalGaugeChart('horizontalGaugeChart');
            });
        </script>
        </div>
    </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
    <div class="card w-100">
        <div class="card-body">
        <h5 class="card-title">Semicircle gauge chart</h5>
        <p class="card-text pe-5">A semicircle gauges display a single data value along a semicircle scale and shows progress toward a specific value.</p>
        <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="#lightning-charge-fill" />
          </svg>
          <span class="visually-hidden">Open in playground using StackBlitz</span>
        </button>
        <div id="gaugeChart"></div>
        <script>
            window.addEventListener('DOMContentLoaded', () => {
            window.generateGaugeChart('gaugeChart');
            });
        </script>
        </div>
    </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
    <div class="card w-100">
        <div class="card-body">
        <h5 class="card-title">Circular gauge chart</h5>
        <p class="card-text pe-5">Circular gauges show progress toward a specific value, with the circle representing 100% of the total. Circular gauges can progress either by filling or draining, depending on the information conveyed.</p>
        <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="#lightning-charge-fill" />
          </svg>
          <span class="visually-hidden">Open in playground using StackBlitz</span>
        </button>
        <div id="circularGaugeChart"></div>
        <script>
            window.addEventListener('DOMContentLoaded', () => {
            window.generateGaugeChart('circularGaugeChart', true);
            });
        </script>
        </div>
    </div>
</div>
<div class="container-xxl d-flex flex-nowrap pt-3">
    <div class="card w-100">
        <div class="card-body">
        <h5 class="card-title">Dial gauge</h5>
        <p class="card-text pe-5">Dial gauges are essentially like the speedometer or the fuel gauge of a car. You can use a dial gauge to display a specific data point, using a dial over a radial scale with defined limits. You can associate colours with sections of the data to indicate specific ranges within the data, e.g., green for satisfactory, yellow for caution, and red for alarm.</p>
        <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="#lightning-charge-fill" />
          </svg>
          <span class="visually-hidden">Open in playground using StackBlitz</span>
        </button>
        <div id="dialGaugeChart"></div>
        <script>
            window.addEventListener('DOMContentLoaded', () => {
            window.generateGaugeChart('dialGaugeChart', false, true);
            });
        </script>
        </div>
    </div>
</div>
