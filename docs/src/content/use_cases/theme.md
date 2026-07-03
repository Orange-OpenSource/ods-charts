---
title: Theme use cases - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Theme use cases</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h3 class="card-title">Global <span class="text-primary">Boosted</span> theme for <u>CSS</u> and <u>popover renderer</u></h3>
      <p class="card-text pe-5">The most common use case should be using Boosted framework and its theme.</p>
      <p class="card-text pe-5">
        To do so, the <code>getThemeManager()</code> has one <code>cssTheme</code> option that allows you to specify the css theme used:
        <code>
          <pre>
cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
          </pre>
        </code>
      </p>
      <p>
        When using the external popover/tooltip feature, You can also specify the javascript used to display popover or tooltip. The popover/tooltip renderer can be specify by the second argument of the <code>externalizePopover()</code> feature of the theme manager:
        <code>
          <pre>
themeManager.externalizePopover({},
  ODSCharts.ODSChartsPopoverManagers.BOOSTED5
);
      </pre>
        </code>
      </p>
      <p>
        To choose between light or dark mode, you use the <code>cssSelector</code> option of <code>getThemeManager()</code>. It must give an HTML selector of an HTML element where the chart is displayed:
        <code>
          <pre>
cssSelector: '#barLineGroup_chart'
      </pre
          >
        </code>
      </p>
      <p>
        To interact with a dynamic dark/light mode switch, you use the <code>manageThemeObserver()</code> feature of the theme manager:
        <code>
          <pre>
themeManager.manageThemeObserver(myChart);
      </pre
          >
        </code>
      </p>
      <select class="form-select float-end" style="width: 300px" aria-label="Default select example" onchange="document.querySelector('#t1-htmlId>div').setAttribute('data-bs-theme',this.value)">
        <option value="dark">Dark</option>
        <option value="light" selected>Light</option>
      </select>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="t1-htmlId">
        <div data-bs-theme="light">
          <div class="chart_title mx-3 overflow-hidden">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="t1-barLineGroup_holder_with_legend" style="flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column">
            <div id="t1-barLineGroup_holder">
              <div id="t1-barLineGroup_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
            </div>
            <div id="t1-barLineGroup_legend"></div>
          </div>
        </div>
      </div>
      <script src="../../use_cases_code/theme_t1-codeId.js" id="t1-codeId" onload="addViewCode('t1-')"></script>
    </div>

  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h3 class="card-title">Global <span class="text-primary">Boosted</span> theme for <u>CSS</u> but <span class="text-primary">Apache Echarts</span> for <u>popover renderer</u></h3>
      <p class="pe-5">
        Let's change the previous use case to keep Boosted 5 as CSS theme but let's use Apache Echarts javascript to display popover/tooltip by changing the second argument of the <code>externalizePopover()</code> feature of the theme manager:
        <code>
          <pre>
  themeManager.externalizePopover({},
    ODSCharts.ODSChartsPopoverManagers.NONE
  );
          </pre>
        </code>
      </p>
      <select class="form-select float-end" style="width: 300px" aria-label="Default select example" onchange="document.querySelector('#t2-htmlId>div').setAttribute('data-bs-theme',this.value)">
        <option value="dark">Dark</option>
        <option value="light" selected>Light</option>
      </select>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="t2-htmlId">
        <div data-bs-theme="light">
          <div class="chart_title mx-3 overflow-hidden">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="t2-barLineGroup_holder_with_legend" style="flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column">
            <div id="t2-barLineGroup_holder">
              <div id="t2-barLineGroup_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
            </div>
            <div id="t2-barLineGroup_legend"></div>
          </div>
        </div>
      </div>
      <script src="../../use_cases_code/theme_t2-codeId.js" id="t2-codeId" onload="addViewCode('t2-')"></script>
    </div>

  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h3 class="card-title"><span class="text-primary">ODS Charts</span> embedded <u>CSS</u> theme and <span class="text-primary">Apache Echarts</span> <u>popover renderer</u></h3>
      <p class="pe-5">
        Some ODS Charts usage may be independent from Boosted. For that, ODS Charts has a minimal CSS embedded. To use it, change the <code>cssTheme</code> option of <code>getThemeManager()</code> with:
        <code>
          <pre>
cssTheme: ODSCharts.ODSChartsCSSThemes.NONE,
          </pre>
        </code>
      </p>
      <p>
        You still can use a dark/light theme mode by adding the <code>ods-charts-context</code> class and <code>data-bs-theme</code> attribute on the graph element holder:
        <code>
          <pre>

&lt;div class="ods-charts-context" data-bs-theme="light"&gt;

</pre>
</code>
</p>
<select class="form-select float-end" style="width: 300px" aria-label="Default select example" onchange="document.querySelector('#t3-htmlId>div').setAttribute('data-bs-theme',this.value)">
<option value="dark">Dark</option>
<option value="light" selected>Light</option>
</select>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
<div id="t3-htmlId">
<div class="ods-charts-context" data-bs-theme="light">
<div class="chart_title mx-3 overflow-hidden">
<h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
<h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
</div>
          <div id="t3-barLineGroup_holder_with_legend" style="flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column">
            <div id="t3-barLineGroup_holder">
              <div id="t3-barLineGroup_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
            </div>
            <div id="t3-barLineGroup_legend"></div>
          </div>
        </div>
      </div>
      <script src="../../use_cases_code/theme_t3-codeId.js" id="t3-codeId" onload="addViewCode('t3-')"></script>
    </div>

  </div>
</div>
