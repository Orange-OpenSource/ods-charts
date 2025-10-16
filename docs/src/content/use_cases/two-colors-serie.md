---
title: Two colors for one series - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Two colors for one series</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Two colors for one series example</h5>
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
      <script>
        addViewCode();
      </script>
    </div>
  </div>
  <script id="codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    var goals = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var results = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var resultsOK = results.map((res, i) => (res >= goals[i] ? results[i] : 0));
    var resultsNOK = results.map((res, i) => (res < goals[i] ? results[i] : 0));
    var dates = new Array(...new Array(12).keys()).map((i) => {
      var d = new Date();
      d.setMonth(d.getMonth() - i);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        year: 'numeric',
      });
    });

    // Data to be displayed
    var dataOptions = {
      xAxis: {
        type: 'category',
        data: dates,
      },
      yAxis: {},
      series: [
        {
          data: resultsOK,
          type: 'bar',
          stack: 'result',
        },
        {
          data: resultsNOK,
          type: 'bar',
          stack: 'result',
        },
        {
          data: goals,
          type: 'line',
        },
      ],
      legend: {
        data: ['Results OK', 'Results NOK', 'Goal'],
      },
      tooltip: {
        formatter: function (params) {
          return params[0].value ? Math.round(params[0].value * 100) / 100 + '$' : undefined;
        },
      },
    };

    ///////////////////////////////////////////////////
    // ODS Charts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager();
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // Get the chart holder and initiate it with the generated theme
    var div = document.getElementById('barLine_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#barLine_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'barLine_chart');
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup and use the second parameter as specified in https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition to change the popup value (cf https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition#getPopupContentValue)
    themeManager.externalizePopover();
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>
