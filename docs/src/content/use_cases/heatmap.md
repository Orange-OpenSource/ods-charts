---
title: Heatmap - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Heatmap</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
    <h5 class="card-title pe-5">Heatmap example</h5>
      <p class="card-text pe-5">This use case illustrates the use of heat maps to visualize the distribution 
      of message reception per quarter hour over a week.</p>
      <p class="card-text pe-5">
      Heatmap series is described with a series:
        <code>
          <pre>          
    {
      type: 'heatmap',
      data: [
        ...
      ],
    }, 
</pre>
</code>
where each data is an array of <code>[xAxisIndex, yAxisIndex, value]</code>. Use <code>ODSChartsConfiguration.getHeatmapChartConfiguration()</code> to apply the ODS heatmap defaults.
</p>
      <p class="card-text pe-5">
      Heatmap uses a <code>visualMap</code>. By default, <code>ODSChartsVisualMapColorRangeMode.FORCE_COLOR_SET</code> keeps colors strictly within the provided color set. Use <code>ODSChartsVisualMapColorRangeMode.GENERATE_COLOR_RANGE</code> if you want Apache ECharts to generate a continuous range from the first to the last color.
        <code>
          <pre>
var themeManager = ODSCharts.getThemeManager({
  colors: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE,
  chartConfiguration: ODSCharts.ODSChartsConfiguration.getHeatmapChartConfiguration({
    visualMapColorRangeMode: ODSCharts.ODSChartsVisualMapColorRangeMode.FORCE_COLOR_SET,
  })
});
</pre>
</code>
</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="heatmap_holder">
            <div id="heatmap_chart" style="width: 100%; height: 600px" class="position-relative"></div>
          </div>
          <div id="heatmap_legend"></div>
        </div>
      </div>
      <script>
        var htmlCode = getHtmlCode();
      </script>
      <script src="../../use_cases_code/heatmap_codeId.js" id="codeId" onload="addViewCode(htmlCode)"></script>
    </div>
  </div>

<!-- prettier-ignore -->
</div>
