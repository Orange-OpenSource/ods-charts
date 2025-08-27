---
title: Specific legend holders - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Specific legend holders</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Vertical legend holder example</h5>
      <p class="card-text">You may wish to display the legends vertically, for example to the right of the graph.</p>
      <p class="card-text">
        To do this, you can use the Apache ECharts <code>legend.orient</code> option:
        <code>
          <pre>
legend: {
  data: ['label 0', 'label 1', 'label 2'],
  orient: 'vertical',
}
          </pre>
        </code>
      </p>
      <div class="ms-5 mb-2 p-2 text-body-secondary border-start border-subtle bg-body-secondary">
        <p class="card-text text-body-secondary">
          <small>
            NB: This orientation could also be provided through
            <code class="text-body-secondary">externalizeLegends()</code> method providing in place of the CSS selector for the caption container an object including the selector and the orientation <code class="text-body-secondary">{ legendHolderSelector: string; orientation: 'vertical' | 'horizontal';}</code> :
            <code class="text-body-secondary">
              <pre>
themeManager.externalizeLegends(myChart, {legendHolderSelector: '#barChartSH_legend', orientation: 'vertical'});
            </pre
              >
            </code>
          </small>
        </p>
      </div>
      <p class="card-text">In the example below, we prefer the Apache ECharts <code>legend.orient</code> method.</p>
      <div id="vertical_htmlId">
        <div class="border border-subtle" style="display: flex; flex-direction: column; height: 100%">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="barChartSH_holder">
                <div id="barChartSH_chart" style="width: 100%; height: 50vh"></div>
              </div>
            </div>
            <div class="col-2">
              <div id="barChartSH_legend"></div>
            </div>
          </div>
        </div>
      </div>
      <script>
        addViewCode('vertical_');
      </script>
    </div>
  </div>
  <script id="vertical_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    // this is the data to be displayed
    var dataOptions = {
      yAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      xAxis: {},
      series: [
        {
          data: [10, 22, 28.8956454657, 23, 19, 15],
          type: 'bar',
          stack: true,
        },
        {
          data: [28.8956454657, 23, 19, 15, 18, 12],
          type: 'bar',
          stack: true,
        },
        {
          data: [19, 15, 18, 12, 28.8956454657, 23],
          type: 'bar',
          stack: true,
        },
      ],
      legend: {
        data: ['label 0', 'label 1', 'label 2'],
        orient: 'vertical',
      },
    };

    ///////////////////////////////////////////////////
    // ODSCharts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager();

    // register this theme to echarts
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // get the chart holder and initiate it with the generated theme
    var div = document.getElementById('barChartSH_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#barChartSH_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'barChartSH_chart');
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover();
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title">Legends holders for stacked bars example</h5>
      <p class="card-text">In the following example, we want to display the legends for a first set of stacked bars separately from those for a second set of stacked bars and the legend for a curve.</p>
      <p class="card-text">To do this, we pass as a parameter to the externalizeLegends() method not a CSS selector of the legend container but an array of containers defined by the <code>{legendHolderSelector: string; orientation?: 'vertical' | 'horizontal'; seriesRef?: string[]}</code> object.</p>
      <ul>
        <li><code>legendHolderSelector</code> is the CSS selector of the legend holder.</li>
        <li><code>orientation</code> optionally indicates whether captions are displayed horizontally or vertically. By default, the value of the <code>legend.orient</code> option in Apache Echarts will be used if it exists, otherwise it will be <code>'horizontal'</code>.</li>
        <li>
          <code>seriesRef</code> is an array referencing the series whose legends are to be displayed in this legend container. The reference can be the series name, the series label or simply the stack name in the case of stacked bars.<br />
          If <code>seriesRef</code> is absent, this container will be the default container for non-referenced legends.
        </li>
      </ul>
      <p class="card-text">
        We'll then have the following code to externalize our three types of legend into three different containers:
        <code>
          <pre>
themeManager.externalizeLegends(
  myChart,
  [{ legendHolderSelector: '#results_stack_legend', seriesRef: ['result'], orientation: 'vertical' },
    { legendHolderSelector: '#goals_stack_legend', seriesRef: ['goals'], orientation: 'vertical' },
    { legendHolderSelector: '#line_legend'
  }]
);
          </pre>
        </code>
      </p>
      <div id="stacked_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="barLine_holder">
            <div id="barLine_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div class="row mx-2">
            <div class="col-4">
              <label class="label">Results</label>
              <div id="results_stack_legend"></div>
            </div>
            <div class="col-4">
              <label class="label">Goals</label>
              <div id="goals_stack_legend"></div>
            </div>
            <div class="col-4">
              <label class="label visually-hidden">Average</label>
              <div id="line_legend"></div>
            </div>
          </div>
        </div>
      </div>
      <script>
        addViewCode('stacked_');
      </script>
    </div>

  </div>
  <script id="stacked_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    var average = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });

    var results1 = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });
    var results2 = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });
    var results3 = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });
    var goals1 = new Array(...new Array(12).keys()).map((i) => {
      return 50 + Math.random() * 50;
    });
    var goals2 = new Array(...new Array(12).keys()).map((i) => {
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
      yAxis: {},
      series: [
        {
          data: results1,
          type: 'bar',
          stack: 'result',
        },
        {
          data: results2,
          type: 'bar',
          stack: 'result',
        },
        {
          data: results3,
          type: 'bar',
          stack: 'result',
        },
        {
          data: goals1,
          type: 'bar',
          stack: 'goals',
        },
        {
          data: goals2,
          type: 'bar',
          stack: 'goals',
        },
        {
          data: average,
          type: 'line',
        },
      ],
      legend: {
        data: ['Results 1', 'Results 2', 'Results 3', 'Goal 1', 'Goal 2', 'Average'],
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
    themeManager.externalizeLegends(myChart, [{ legendHolderSelector: '#results_stack_legend', seriesRef: ['result'], orientation: 'vertical' }, { legendHolderSelector: '#goals_stack_legend', seriesRef: ['goals'], orientation: 'vertical' }, { legendHolderSelector: '#line_legend' }]);
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
