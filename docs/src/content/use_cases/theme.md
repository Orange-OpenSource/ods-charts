---
title: Theme use cases - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Theme use cases</h1>
  </div>
</div>
<div class="container pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h3 class="card-title">Global <span class="text-primary">Boosted</span> theme for <u>CSS</u> and <u>popover renderer</u></h3>
      <p class="card-text">The most common use case should be using Boosted framework and its theme.</p>
      <p class="card-text">
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
      <div id="t1-htmlId">
        <div data-bs-theme="light">
          <div class="chart_title overflow-hidden">
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
      <script>
        addViewCode('t1-');
      </script>
    </div>

  </div>
  <script id="t1-codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    // this is the data to be displayed
    var dataOptions = {
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
          data: [28.8956454657, 23, 19, 15, 18, 12],
          type: 'bar',
        },
        {
          data: [12, 28.8956454657, 23, 15, 15, 18],
          type: 'line',
        },
      ],
      legend: {
        data: ['label 0', 'label 1', 'label 2'],
      },
    };

    ///////////////////////////////////////////////////
    // ODSCharts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager({
      cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
      cssSelector: '#t1-barLineGroup_chart',
    });

    // register this theme to echarts
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // get the chart holder and initiate it with the generated theme
    var div = document.getElementById('t1-barLineGroup_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#t1-barLineGroup_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 't1-barLineGroup_chart');
    // Automatically manage data-bs-theme attribute change. Only needed if you want the
    // chart to automatically react to the global light or dark theme change
    themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover({}, ODSCharts.ODSChartsPopoverManagers.BOOSTED5);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h3 class="card-title">Global <span class="text-primary">Boosted</span> theme for <u>CSS</u> but <span class="text-primary">Apache Echarts</span> for <u>popover renderer</u></h3>
      <p>
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
      <div id="t2-htmlId">
        <div data-bs-theme="light">
          <div class="chart_title overflow-hidden">
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
      <script>
        addViewCode('t2-');
      </script>
    </div>

  </div>
  <script id="t2-codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    // this is the data to be displayed
    var dataOptions = {
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
          data: [28.8956454657, 23, 19, 15, 18, 12],
          type: 'bar',
        },
        {
          data: [12, 28.8956454657, 23, 15, 15, 18],
          type: 'line',
        },
      ],
      legend: {
        data: ['label 0', 'label 1', 'label 2'],
      },
    };

    ///////////////////////////////////////////////////
    // ODSCharts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager({
      cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
      cssSelector: '#t2-barLineGroup_chart',
    });

    // register this theme to echarts
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // get the chart holder and initiate it with the generated theme
    var div = document.getElementById('t2-barLineGroup_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#t2-barLineGroup_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 't2-barLineGroup_chart');
    // Automatically manage data-bs-theme attribute change. Only needed if you want the
    // chart to automatically react to the global light or dark theme change
    themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover({}, ODSCharts.ODSChartsPopoverManagers.NONE);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h3 class="card-title"><span class="text-primary">ODS Charts</span> embedded <u>CSS</u> theme and <span class="text-primary">Apache Echarts</span> <u>popover renderer</u></h3>
      <p>
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
<div id="t3-htmlId">
<div class="ods-charts-context" data-bs-theme="light">
<div class="chart_title overflow-hidden">
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
      <script>
        addViewCode('t3-');
      </script>
    </div>

  </div>
  <script id="t3-codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    // this is the data to be displayed
    var dataOptions = {
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
          data: [28.8956454657, 23, 19, 15, 18, 12],
          type: 'bar',
        },
        {
          data: [12, 28.8956454657, 23, 15, 15, 18],
          type: 'line',
        },
      ],
      legend: {
        data: ['label 0', 'label 1', 'label 2'],
      },
    };

    ///////////////////////////////////////////////////
    // ODSCharts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager({
      cssTheme: ODSCharts.ODSChartsCSSThemes.NONE,
      cssSelector: '#t3-barLineGroup_chart',
    });

    // register this theme to echarts
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // get the chart holder and initiate it with the generated theme
    var div = document.getElementById('t3-barLineGroup_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#t3-barLineGroup_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 't3-barLineGroup_chart');
    // Automatically manage data-bs-theme attribute change. Only needed if you want the
    // chart to automatically react to the global light or dark theme change
    themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover({}, ODSCharts.ODSChartsPopoverManagers.NONE);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>
