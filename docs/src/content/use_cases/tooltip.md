---
title: Tooltip - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Tooltip</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Confine tooltip example</h5>
      <p class="card-text pe-5">ODS Charts library uses the tooltip containment feature of the Apache ECharts library to ensure that the tooltip or popover is displayed within the confines of the graph, avoiding overflow beyond the display window.</p>
      <p class="card-text pe-5">
        This function is activated by configuring the graph options as follows:
        <code>
          <pre>
tooltip: {
  confine: true,
}
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="div1_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div1_holder">
            <div id="div1_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div1_legend"></div>
        </div>
      </div>
    </div>
  </div>
  <script src="../../use_cases_code/tooltip_div1_codeId.js" id="div1_codeId" onload="addViewCode('div1_')"></script>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Specific value tooltip content</h5>
      <p class="card-text pe-5">You may need to specify a specific tooltip content.</p>
      <p class="card-text pe-5">The first use case is to provide a sepcific content for a tooltip/popover value.</p>
      <p class="card-text pe-5">
        For that you just have to specify the <code>formatter</code> method of the <code>tooltip</code> Apache Echarts option :
        <code>
          <pre>
            tooltip: {
              formatter: function (params) {
                return `&lt;span style="color: red; font-size:x-large">${Math.round(params[0].value * 100) / 100}&lt;/span> °C\`;
              },
            },
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="div6_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div6_holder">
            <div id="div6_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div6_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/tooltip_div6_codeId.js" id="div6_codeId" onload="addViewCode('div6_')"></script>
    </div>

  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Other specific content, specific line, with ODS Charts series marker</h5>
      <p class="card-text pe-5">if you want to specialize more than the value display, you can use the second parameter of the method <code>externalizePopover</code>.</p>
      <p class="card-text pe-5">
        This parameter must implement the <a href="../api/classes/ODSChartsPopoverDefinition"><code>ODSChartsPopoverDefinition</code></a> interface. Generally this is initialized with <a href="../api/variables/ODSChartsPopoverManagers">one of the tooltip managers provided</a> <code>ODSChartsPopoverManagers.BOOSTED5</code>, <code>ODSChartsPopoverManagers.BOOSTED4</code> or <code>ODSChartsPopoverManagers.NONE</code>.<br />
        <code>ODSChartsPopoverManagers.NONE</code> is the default one.
      </p>
      <p>You can extend the tooltip manager to implement <a href="../api/classes/ODSChartsPopoverDefinition">one of the ODSChartsPopoverDefinition method.</a></p>
      <p>
        For example, in the example below, we extend the tooltip manager to implement <code>getPopupContentLine</code> method and return the html code to be displayed for one line:
        <code>
          <pre>
            themeManager.externalizePopover(undefined, {
              ...ODSCharts.ODSChartsPopoverManagers.NONE,
              getPopupContentLine: ({ seriesName, itemValue, seriesIndex }) => {
                return `&lt;p>${themeManager.getPopoverMarker(seriesIndex)}This is my HTML code of one line for ${itemValue} of ${seriesName}&lt;/p>`;
              },
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
      <div id="div2_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div2_holder">
            <div id="div2_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div2_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/tooltip_div2_codeId.js" id="div2_codeId" onload="addViewCode('div2_')"></script>
    </div>

  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Using Boosted 5 tooltip</h5>
      <p class="card-text">
        The same code using the Boosted 5 tooltips:
        <code>
          <pre>
            themeManager.externalizePopover(undefined, {
              ...ODSCharts.ODSChartsPopoverManagers.BOOSTED5,
              getPopupContentLine: ({ seriesName, itemValue }) => {
                return `&lt;p>This is my HTML code of one line for ${itemValue} of ${seriesName}&lt;/p>`;
              },
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
      <div id="div3_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div3_holder">
            <div id="div3_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div3_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/tooltip_div3_codeId.js" id="div3_codeId" onload="addViewCode('div3_')"></script>
    </div>

  </div>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Tooltip with HTML link(s)</h5>
      <p class="card-text pe-5">You may need to specify a specific tooltip which include a link.</p>
      <p class="card-text pe-5">
        In this case, you must set to <code>true</code> the parameter <code>enterable</code> of the <code>tooltip</code> Apache Echarts option:
        <code>
          <pre>
            tooltip: {
              enterable: true,
            },
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="div4_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div4_holder">
            <div id="div4_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div4_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/tooltip_div4_codeId.js" id="div4_codeId" onload="addViewCode('div4_')"></script>
    </div>

  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Using links in a Boosted 5 tooltip</h5>
      <p class="card-text pe-5">The same code using the Boosted 5 tooltips:</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="div5_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div5_holder">
            <div id="div5_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div5_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/tooltip_div5_codeId.js" id="div5_codeId" onload="addViewCode('div5_')"></script>
    </div>

  </div>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title pe-5">Custom tooltip template</h5>
      <p class="card-text pe-5">If you need to completely customize the tooltip template, you can use the <code>getPopupTemplate</code> method.</p>
      <p class="card-text pe-5">
        This method allows you to replace the entire tooltip HTML structure with your own custom template:
        <code>
          <pre>
            themeManager.externalizePopover(undefined, {
              ...ODSCharts.ODSChartsPopoverManagers.NONE,
              getPopupTemplate: (categoryLabel, tooltipElements) => {
                let content = `&lt;div class="custom-tooltip" style="padding: 12px; background-color: #fff; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">`;
                content += `&lt;h6 class="text-primary" style="font-weight: bold;">${categoryLabel}&lt;/h6>`;
                content += `&lt;ul class="list-unstyled mb-0">`;
                tooltipElements.forEach(element => {
                  content += `&lt;li>${element.marker} &lt;strong>${element.seriesName}:&lt;/strong> ${element.itemValue}&lt;/li>`;
                });
                content += `&lt;/ul>&lt;/div>`;
                return content;
              },
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
      <div id="div7_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div7_holder">
            <div id="div7_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div7_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/tooltip_div7_codeId.js" id="div7_codeId" onload="addViewCode('div7_')"></script>
    </div>

  </div>
</div>
