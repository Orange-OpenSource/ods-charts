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
      <h5 class="card-title">Confine tooltip example</h5>
      <p class="card-text">ODS Charts library uses the tooltip containment feature of the Apache ECharts library to ensure that the tooltip or popover is displayed within the confines of the graph, avoiding overflow beyond the display window.</p>
      <p class="card-text">
        This function is activated by configuring the graph options as follows:
        <code>
          <pre>
tooltip: {
  confine: true,
}
          </pre>
        </code>
      </p>
      <div id="div1_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div1_holder">
            <div id="div1_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div1_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('div1_');
      </script>
    </div>
  </div>
  <script id="div1_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    // Data to be displayed
    var div1_dataOptions = {
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
      tooltip: {
        confine: true,
      },
    };

    ///////////////////////////////////////////////////
    // ODS Charts
    ///////////////////////////////////////////////////
    // Build the theme
    var div1_themeManager = ODSCharts.getThemeManager();
    echarts.registerTheme(div1_themeManager.name, div1_themeManager.theme);

    // Get the chart holder and initiate it with the generated theme
    var div = document.getElementById('div1_chart');
    var myChart = echarts.init(div, div1_themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    div1_themeManager.setDataOptions(div1_dataOptions);
    // Register the externalization of the legend.
    div1_themeManager.externalizeLegends(myChart, '#div1_legend');
    // Manage window size changed
    div1_themeManager.manageChartResize(myChart, 'div1_chart');
    // Observe dark / light mode changes
    div1_themeManager.manageThemeObserver(myChart);
    // Register the externalization of the tooltip/popup
    div1_themeManager.externalizePopover();
    // Display the chart using the configured theme and data.
    myChart.setOption(div1_themeManager.getChartOptions());

  </script>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Specific value tooltip content</h5>
      <p class="card-text">You may need to specify a specific tooltip content.</p>
      <p class="card-text">The first use case is to provide a sepcific content for a tooltip/popover value.</p>
      <p class="card-text">
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
      <div id="div6_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div6_holder">
            <div id="div6_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div6_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('div6_');
      </script>
      <script id="div6_codeId">
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
        var div6_dataOptions = {
          xAxis: {
            type: 'category',
            data: dates,
          },
          tooltip: {
            formatter: function (params) {
              return `<span style="color: red; font-size:x-large">${Math.round(params[0].value * 100) / 100}</span> °C`;
            },
          },
          series: [
            {
              data: resultsOK,
              type: 'bar',
            },
            {
              data: resultsNOK,
              type: 'bar',
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
        var div6_themeManager = ODSCharts.getThemeManager();
        echarts.registerTheme(div6_themeManager.name, div6_themeManager.theme);

        // Get the chart holder and initiate it with the generated theme
        var div = document.getElementById('div6_chart');
        var myChart = echarts.init(div, div6_themeManager.name, {
          renderer: 'svg',
        });

        // Set the data to be displayed.
        div6_themeManager.setDataOptions(div6_dataOptions);
        // Register the externalization of the legend.
        div6_themeManager.manageChartResize(myChart, 'div6_chart');
        // Observe dark / light mode changes
        div6_themeManager.manageThemeObserver(myChart);
        // Register the externalization of the tooltip/popup
        div6_themeManager.externalizePopover();
        // Display the chart using the configured theme and data.
        myChart.setOption(div6_themeManager.getChartOptions());
      </script>

      <h5 class="mt-5">Other specific content</h5>

      <p class="card-text">if you want to specialize more than the value display, you can use the second parameter of the method <code>externalizePopover</code>.</p>
      <p class="card-text">
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
              getPopupContentLine: ({ seriesName, itemValue }) => {
                return `&lt;p>This is my HTML code of one line for ${itemValue} of ${seriesName}&lt;/p>`;
              },
            });
          </pre>
        </code>
      </p>
      <div id="div2_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div2_holder">
            <div id="div2_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div2_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('div2_');
      </script>
      <script id="div2_codeId">
        ///////////////////////////////////////////////////
        // Used data
        ///////////////////////////////////////////////////

        // Data to be displayed
        var div2_dataOptions = {
          xAxis: { type: 'category', data: ['24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May'] },
          yAxis: {},
          series: [
            { data: [10, 22, 28.8956454657, 23, 19, 15], type: 'bar', barWidth: 30 },
            { data: [12, 28.8956454657, 23, 15, 15, 18], type: 'bar', barWidth: 30 },
          ],
          legend: { show: false },
          tooltip: {
            confine: true,
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
            containLabel: true,
          },
        };

        ///////////////////////////////////////////////////
        // ODS Charts
        ///////////////////////////////////////////////////
        // Build the theme
        var div2_themeManager = ODSCharts.getThemeManager({});
        echarts.registerTheme(div2_themeManager.name, div2_themeManager.theme);

        // Get the chart holder and initiate it with the generated theme
        var div = document.getElementById('div2_chart');
        var myChart = echarts.init(div, div2_themeManager.name, {
          renderer: 'svg',
        });

        // Set the data to be displayed.
        div2_themeManager.setDataOptions(div2_dataOptions);
        // Register the externalization of the legend.
        div2_themeManager.manageChartResize(myChart, 'div2_chart');
        // Observe dark / light mode changes
        div2_themeManager.manageThemeObserver(myChart);
        // Register the externalization of the tooltip/popup
        div2_themeManager.externalizePopover(undefined, {
          ...ODSCharts.ODSChartsPopoverManagers.NONE,
          getPopupContentLine: ({ seriesName, itemValue }) => {
            return `<p>This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
          },
        });
        // Display the chart using the configured theme and data.
        myChart.setOption(div2_themeManager.getChartOptions());
      </script>

      <h5 class="mt-5">Using Boosted 5 tooltip</h5>
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
      <div id="div3_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div3_holder">
            <div id="div3_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div3_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('div3_');
      </script>
      <script id="div3_codeId">
        ///////////////////////////////////////////////////
        // Used data
        ///////////////////////////////////////////////////

        // Data to be displayed
        var div3_dataOptions = {
          xAxis: { type: 'category', data: ['24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May'] },
          yAxis: {},
          series: [
            { data: [10, 22, 28.8956454657, 23, 19, 15], type: 'bar', barWidth: 30 },
            { data: [12, 28.8956454657, 23, 15, 15, 18], type: 'bar', barWidth: 30 },
          ],
          legend: { show: false },
          tooltip: {
            confine: true,
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
            containLabel: true,
          },
        };

        ///////////////////////////////////////////////////
        // ODS Charts
        ///////////////////////////////////////////////////
        // Build the theme
        var div3_themeManager = ODSCharts.getThemeManager({
          cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
        });
        echarts.registerTheme(div3_themeManager.name, div3_themeManager.theme);

        // Get the chart holder and initiate it with the generated theme
        var div = document.getElementById('div3_chart');
        var myChart = echarts.init(div, div3_themeManager.name, {
          renderer: 'svg',
        });

        // Set the data to be displayed.
        div3_themeManager.setDataOptions(div3_dataOptions);
        // Register the externalization of the legend.
        div3_themeManager.manageChartResize(myChart, 'div3_chart');
        // Observe dark / light mode changes
        div3_themeManager.manageThemeObserver(myChart);
        // Register the externalization of the tooltip/popup
        div3_themeManager.externalizePopover(undefined, {
          ...ODSCharts.ODSChartsPopoverManagers.BOOSTED5,
          getPopupContentLine: ({ seriesName, itemValue }) => {
            return `<p>This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
          },
        });
        // Display the chart using the configured theme and data.
        myChart.setOption(div3_themeManager.getChartOptions());
      </script>
    </div>

  </div>
</div>

<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Tooltip with HTML link(s)</h5>
      <p class="card-text">You may need to specify a specific tooltip which include a link.</p>
      <p class="card-text">
        In this case, you must set to <code>true</code> the parameter <code>enterable</code> of the <code>tooltip</code> Apache Echarts option:
        <code>
          <pre>
            tooltip: {
              enterable: true,
            },
          </pre>
        </code>
      </p>
      <div id="div4_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div4_holder">
            <div id="div4_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div4_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('div4_');
      </script>
      <script id="div4_codeId">
        ///////////////////////////////////////////////////
        // Used data
        ///////////////////////////////////////////////////

        // Data to be displayed
        var div4_dataOptions = {
          xAxis: { type: 'category', data: ['24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May'] },
          yAxis: {},
          series: [
            { data: [510, 1414, 1412, 1406, 1400, 1430, 784], type: 'bar', stack: 'true', barWidth: 30 },
            { data: [5, 0, 10, 20, 0, 0, 0], type: 'bar', stack: 'true', barWidth: 30 },
          ],
          legend: { show: false },
          tooltip: {
            confine: true,
            enterable: true,
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
            containLabel: true,
          },
        };

        var popupContents = [
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >510 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >5 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1414 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1412 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >10 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1406 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >20 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1400 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1430 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >784 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
        ];

        ///////////////////////////////////////////////////
        // ODS Charts
        ///////////////////////////////////////////////////
        // Build the theme
        var div4_themeManager = ODSCharts.getThemeManager({ colors: [{ colorIndex: 4, colorPalette: ODSCharts.ODSChartsColorsSet.DARKER_TINTS }] });
        echarts.registerTheme(div4_themeManager.name, div4_themeManager.theme);

        // Get the chart holder and initiate it with the generated theme
        var div = document.getElementById('div4_chart');
        var myChart = echarts.init(div, div4_themeManager.name, {
          renderer: 'svg',
        });

        // Set the data to be displayed.
        div4_themeManager.setDataOptions(div4_dataOptions);
        // Register the externalization of the legend.
        div4_themeManager.manageChartResize(myChart, 'div4_chart');
        // Observe dark / light mode changes
        div4_themeManager.manageThemeObserver(myChart);
        // Register the externalization of the tooltip/popup
        div4_themeManager.externalizePopover(undefined, {
          ...ODSCharts.ODSChartsPopoverManagers.NONE,
          getPopupContent: (tooltipElements) => {
            return tooltipElements.length > 0 && popupContents.length > tooltipElements[0].dataIndex ? popupContents[tooltipElements[0].dataIndex] : '';
          },
        });
        // Display the chart using the configured theme and data.
        myChart.setOption(div4_themeManager.getChartOptions());
      </script>

      <h5 class="mt-5">Using links in a Boosted 5 tooltip</h5>
      <p class="card-text">The same code using the Boosted 5 tooltips:</p>
      <div id="div5_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div id="div5_holder">
            <div id="div5_chart" style="width: 100%; height: 50vh" class="position-relative"></div>
          </div>
          <div id="div5_legend"></div>
        </div>
      </div>
      <script>
        addViewCode('div5_');
      </script>
      <script id="div5_codeId">
        ///////////////////////////////////////////////////
        // Used data
        ///////////////////////////////////////////////////

        // Data to be displayed
        var div5_dataOptions = {
          xAxis: { type: 'category', data: ['24 May', '25 May', '26 May', '27 May', '28 May', '29 May', '30 May'] },
          yAxis: {},
          series: [
            { data: [510, 1414, 1412, 1406, 1400, 1430, 784], type: 'bar', stack: 'true', barWidth: 30 },
            { data: [5, 0, 10, 20, 0, 0, 0], type: 'bar', stack: 'true', barWidth: 30 },
          ],
          legend: { show: false },
          tooltip: {
            confine: true,
            enterable: true,
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
            containLabel: true,
          },
        };

        var popupContents = [
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >510 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >5 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1414 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1412 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >10 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1406 errors</a>\n</span><br><span class="font-weight-bold">Notification - FIFO: <a href="../"\n                target="_self"\n                class=""\n            >20 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1400 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >1430 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
          '<span class="font-weight-bold">Notification - Http push: <a href="../"\n                target="_self"\n                class=""\n            >784 errors</a>\n</span><br><span class="font-weight-bold"><a data-analytics="show_audit_logs_from_dashboard"\n                href="../"\n                target="_self"\n                class=""\n            >See all errors</a>\n</span>',
        ];

        ///////////////////////////////////////////////////
        // ODS Charts
        ///////////////////////////////////////////////////
        // Build the theme
        var div5_themeManager = ODSCharts.getThemeManager({
          colors: [
            {
              colorIndex: 4,
              colorPalette: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
              cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
            },
          ],
        });
        echarts.registerTheme(div5_themeManager.name, div5_themeManager.theme);

        // Get the chart holder and initiate it with the generated theme
        var div = document.getElementById('div5_chart');
        var myChart = echarts.init(div, div5_themeManager.name, {
          renderer: 'svg',
        });

        // Set the data to be displayed.
        div5_themeManager.setDataOptions(div5_dataOptions);
        // Register the externalization of the legend.
        div5_themeManager.manageChartResize(myChart, 'div5_chart');
        // Observe dark / light mode changes
        div5_themeManager.manageThemeObserver(myChart);
        // Register the externalization of the tooltip/popup
        div5_themeManager.externalizePopover(undefined, {
          ...ODSCharts.ODSChartsPopoverManagers.BOOSTED5,
          getPopupContent: (tooltipElements) => {
            return tooltipElements.length > 0 && popupContents.length > tooltipElements[0].dataIndex ? popupContents[tooltipElements[0].dataIndex] : '';
          },
        });
        // Display the chart using the configured theme and data.
        myChart.setOption(div5_themeManager.getChartOptions());
      </script>
    </div>

  </div>
</div>
