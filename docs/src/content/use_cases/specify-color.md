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
          itemStyle: {
            color: 'var(--ouds-charts-color-functional-negative)',
          },
        },
        {
          data: goals,
          type: 'line',
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
      <script>
        addViewCode('two_colors_');
      </script>
    </div>
  </div>
  <script id="two_colors_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    var goals = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var results = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var resultsOK = results.map((res, i) => (res >= goals[i] ? res : 0));
    var resultsNOK = results.map((res, i) => (res < goals[i] ? res : 0));
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
    var div = document.getElementById('two_colors_barLine_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#two_colors_barLine_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'two_colors_barLine_chart');
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup and use the second parameter as specified in https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition to change the popup value (cf https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition#getPopupContentValue)
    themeManager.externalizePopover();
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Marker specific color</h5>
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
      <script>
        addViewCode('threshold_');
      </script>
    </div>

  </div>
  <script id="threshold_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    var dataOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
      },
      yAxis: { type: 'value', min: 10, max: 35 },
      series: [
        {
          name: 'Critical threshold',
          type: 'line',
          data: [20, 20, 20, 20, 20, 20, 20],
          showSymbol: false,
          lineStyle: {
            width: 2,
            color: 'var(--ouds-charts-color-neutral)',
            type: 'solid',
          },
          areaStyle: { color: 'var(--ods-functional-2)', origin: 'start' },
          emphasis: {
            focus: 'none',
            areaStyle: { color: 'var(--ods-functional-2)' },
            lineStyle: { color: 'var(--ouds-charts-color-neutral)' },
          },
          color: 'transparent',
          stack: 'threshold',
          z: 0,
        },
        {
          name: 'Average',
          type: 'line',
          lineStyle: { color: 'var(--ods-categorical-12)', width: 2 },
          itemStyle: {
            borderWidth: 2,
            color: 'var(--ods-functional-2)',
            borderColor: 'var(--ods-categorical-12)',
          },
          data: [
            {
              value: 22,
            },
            {
              value: 18,
              itemStyle: {
                color: 'var(--ods-pink-4)',
                borderColor: 'var(--ods-functional-5)',
              },
            },
            {
              value: 23,
            },
            {
              value: 17,
              itemStyle: {
                color: 'var(--ods-pink-4)',
                borderColor: 'var(--ods-functional-5)',
              },
            },
            {
              value: 24,
            },
            {
              value: 27,
            },
            {
              value: 25,
            },
          ],
        },
        {
          name: 'Min',
          type: 'line',
          itemStyle: {
            borderWidth: 2,
            color: 'var(--ods-yellow-light)',
            borderColor: 'var(--ods-yellow)',
          },
          lineStyle: { color: 'var(--ods-yellow)', width: 2 },
          data: [
            {
              value: 18,
              itemStyle: {
                color: 'var(--ods-pink-4)',
                borderColor: 'var(--ods-functional-5)',
              },
            },
            {
              value: 14,
              itemStyle: {
                color: 'var(--ods-pink-4)',
                borderColor: 'var(--ods-functional-5)',
              },
            },
            {
              value: 19,
              itemStyle: {
                color: 'var(--ods-pink-4)',
                borderColor: 'var(--ods-functional-5)',
              },
            },
            {
              value: 13,
              itemStyle: {
                color: 'var(--ods-pink-4)',
                borderColor: 'var(--ods-functional-5)',
              },
            },
            {
              value: 20,
            },
            {
              value: 22,
            },
            {
              value: 21,
            },
          ],
        },
        {
          name: 'Max',
          type: 'line',
          itemStyle: {
            color: 'var(--ods-blue-6)',
            borderColor: 'var(--ods-blue-4)',
            borderWidth: 2,
          },
          lineStyle: { color: 'var(--ods-blue-4)', width: 2 },
          data: [26, 22, 27, 21, 28, 32, 29],
        },
      ],
      legend: { show: false },
    };

    ///////////////////////////////////////////////////
    // ODS Charts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager({
      chartConfiguration:
        ODSCharts.ODSChartsConfiguration.getLineChartConfiguration({
          lineStyle: ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS,
        }),
    });
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // Get the chart holder and initiate it with the generated theme
    var div = document.getElementById('threshold_barLine_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart,
      [{
        legendHolderSelector: '#threshold_barLine_legend',
        seriesRef: ['Max', 'Min', 'Average'],
      }]);
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'threshold_barLine_chart');
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover();
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Bar specific color</h5>
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
      <div id="two_colors_in_one_in_one_htmlId">
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
      <script>
        addViewCode('two_colors_in_one_');
      </script>
    </div>
  </div>
  <script id="two_colors_in_one_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    var goals = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var results = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    }).map((res, i) => (res >= goals[i] ? res : {
        value: res,
        itemStyle: {
        color: 'var(--ouds-charts-color-functional-negative)',
        },
      }));

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
          data: results,
          type: 'bar',
          stack: 'result',
        },
        {
          data: goals,
          type: 'line',
        },
      ],
      legend: {
        data: ['Results', 'Goal'],
      },
      tooltip: {
        formatter: function (params) {
          return Math.round(params[0].value * 100) / 100 + '$';
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
    var div = document.getElementById('two_colors_in_one_barLine_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#two_colors_in_one_barLine_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'two_colors_in_one_barLine_chart');
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup and use the second parameter as specified in https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition to change the popup value (cf https://charts.unified-design-system.orange.com/0.3/api/classes/odschartspopoverdefinition#getPopupContentValue)
    themeManager.externalizePopover();
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>
