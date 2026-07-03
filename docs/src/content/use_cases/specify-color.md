---
title: Specific series color - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Specific series color</h1>
  </div>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Specify the color of a series</h5>
      <p class="card-text pe-5">You may want to specify the color of a series in the series itself, regardless of its index. This can happen if the number of series displayed changes but, for a specific type of data, you want to keep the same color regardless of the series' place in the list of series to be displayed. This means that the ordered list of colors to use will change according to the series displayed.</p>
      <p class="card-text pe-5">
        To freeze the color of a series, Apache ECharts provides the
        <code>itemStyle.color</code> option, which can be added to the series definition like this:
        <code>
          <pre>
series: [
  ...
  {
    ...
    itemStyle: {
      color: 'var(--ouds-charts-color-categorical-tier-2)'
    }
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
      <div id="htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="barLine_holder">
            <div id="barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="barLine_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/specify-color_codeId.js" id="codeId" onload="addViewCode()"></script>
    </div>
  </div>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Two colors for one series example</h5>
      <p class="card-text pe-5">When representing data on a bar chart, it is possible to want to represent this data with a different color depending on a condition on the value. For example, green for a target achieved, red otherwise.</p>
      <p class="card-text pe-5">You would then need to be able to have:</p>
      <ul>
        <li>both colors in the legend</li>
        <li>the color associated with the current value in the tooltip or popover</li>
      </ul>
      <p class="card-text pe-5">For this example, we have chosen to put the data in two series depending on whether or not the objective has been achieved. In this way, the two colors are clearly visible both on the graph and in the legend.</p>
      <p class="card-text pe-5">On the other hand, this requires us to filter the values displayed in the tooltip so as not to display the series of a target that has not been reached when it has been reached and vice versa.</p>
      <p class="card-text pe-5">
        This filter is created using tooltip value formatter in the default Apache ECharts configuration, and to send back
        <code>undefined</code> if we don't want the value to be displayed:
        <code>
          <pre>
tooltip: {
  formatter: function (params) {
    return (
      params[0].value ? Math.round(params[0].value * 100) / 100 + '$' : undefined
    );
  }
}
          </pre>
        </code>
      </p>
      <div class="ms-5 mb-2 p-2 pe-5 text-body-secondary border-start border-subtle bg-body-secondary">
        <p class="card-text text-body-secondary">
          <small>
            NB: This formatter could also be provided through
            <code class="text-body-secondary">getPopupContentValue()</code> callback of the <code class="text-body-secondary">externalizePopover()</code> feature:
            <code class="text-body-secondary">
              <pre>
themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContentValue: ({ seriesName, itemValue }) =>
    itemValue ? Math.round(itemValue * 100) / 100 + '$' : undefined,
});
              </pre>
            </code>
          </small>
        </p>
      </div>
      <p>
        In the example below, we prefer the Apache ECharts
        <code>tooltip.formatter</code> method.
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="two_colors_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="two_colors_barLine_holder">
            <div id="two_colors_barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="two_colors_barLine_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/specify-color_two_colors_codeId.js" id="two_colors_codeId" onload="addViewCode('two_colors_')"></script>
    </div>
  </div>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Marker specific color</h5>
      <p class="card-text pe-5">This example illustrates the case where one wishes to change the color of a point, for example, to highlight the fact that it is below a threshold.</p>
      <p class="card-text pe-5">In this example, we provide the line color (<code>lineStyle</code>) and the default color of points (<code>itemStyle</code>) globally for the entire series :
        <code>
          <pre>
series: [
  ...
  {
    ...
    lineStyle: { color: 'var(--ods-categorical-12)', width: 2 },
    itemStyle: {
      borderWidth: 2,
      color: 'var(--ods-functional-2)',
      borderColor: 'var(--ods-categorical-12)',
    },
  }
          </pre>
        </code>
        and for the points in particular below this threshold, we provide a different color:
        <code>
          <pre>
series: [
  ...
  {
    ...
    data: [
      ...
      {
        value: 18,
        itemStyle: {
          color: 'var(--ods-pink-4)',
          borderColor: 'var(--ods-functional-5)',
        },
      }
      ...
      ],
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
      <div id="threshold_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="threshold_barLine_holder">
            <div id="threshold_barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="threshold_barLine_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/specify-color_threshold_codeId.js" id="threshold_codeId" onload="addViewCode('threshold_')"></script>
    </div>

  </div>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title pe-5">Bar specific color</h5>
      <p class="card-text pe-5">This example shows the example of using two colors for a single series. But this time, we actually keep a single series, displayed once in the legend, while modifying the color of the bars that are below the objective.</p>
      <p>To do this, we associate in the list of values the red color with the value below the objectives via the Apache ECharts <code>itemStyle.color</code> parameter:
        <code>
          <pre>
series: [
  ...
  {
    ...
    data: [
      ...
      {
        value:results[i],
        itemStyle: {
          color: 'var(--ouds-charts-color-functional-negative)'
        }
      }
    ]
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
      <div id="two_colors_in_one_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="two_colors_in_one_barLine_holder">
            <div id="two_colors_in_one_barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="two_colors_in_one_barLine_legend"></div>
        </div>
      </div>
      <script src="../../use_cases_code/specify-color_two_colors_in_one_codeId.js" id="two_colors_in_one_codeId" onload="addViewCode('two_colors_in_one_')"></script>
    </div>
  </div>
</div>
