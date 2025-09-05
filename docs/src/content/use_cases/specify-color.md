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
      <h5 class="card-title">Specify the color of a series</h5>
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

    var resultsOK = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var resultsNOK = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });
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
      tooltip: {
        formatter: function (params) {
          return Math.round(params[0].value);
        },
      },
      series: [
        {
          data: resultsOK,
          type: 'bar',
          itemStyle: {
            color: 'var(--ouds-charts-color-categorical-tier-2)',
          },
        },
        {
          data: resultsNOK,
          type: 'bar',
        },
        {
          data: goals,
          type: 'line',
          itemStyle: {
            color: 'var(--ouds-charts-color-functional-negative)',
          },
        },
      ],
      legend: {
        data: ['Results OK', 'Results NOK', 'Goal'],
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
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover();
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>
