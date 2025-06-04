---
title: Size management - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Size management</h1>
  </div>
</div>
<div class="container pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Collapsed graph example</h5>
      <p class="card-text">The size of the graph may change due to window resizing or modifications in the DOM structure or content. For instance, the graph's size can be affected if it is displayed within a collapsed panel.</p>
      <p class="card-text">Apache ECharts has a <code>resize</code> method to manage that. But you can ask to the <code>ODSChartsTheme</code> to manage it for you calling the <code>externalizeLegends</code> method.</p>
      <p class="card-text">
        In the following collapsed div, the resize is managed by the following code:
        <code>
          <pre>
themeManager.manageChartResize(myChart, 'barLine_chart');
          </pre>
        </code>
      </p>
      <div id="htmlId">
        <p class="d-inline-flex gap-1">
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChart" aria-expanded="false" aria-controls="collapseChart">Click here to see the graph</button>
        </p>
        <div class="collapse" id="collapseChart">
          <div class="card card-body">
            <div>
              <div class="border border-subtle position-relative">
                <div class="chart_title">
                  <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
                  <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
                </div>
                <div id="barLine_holder">
                  <div id="barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
                </div>
                <div id="barLine_legend"></div>
              </div>
            </div>
          </div>
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

    // Data to be displayed
    var dataOptions = {
      grid: {
        left: '0%',
        right: '0%',
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28.8956454657, 23, 19, 15],
          type: 'bar',
        },
        {
          data: [12, 28.8956454657, 23, 15, 15, 18],
          type: 'line',
        },
      ],
      legend: {
        data: ['label 0', 'label 1'],
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
