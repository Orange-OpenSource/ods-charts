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
      <p class="card-text pe-5">You may wish to display the legends vertically, for example to the right       postItemContent: (legendName, legendIndex, color, colorIndex) => {
        // Vous pouvez utiliser tous les paramètres pour personnaliser le contenu
        switch(legendName) {
          case 'Sales':
            return `&lt;div class="legend-note sales-note" style="color: ${color}"&gt;
                     Legend ${legendIndex + 1} - Including taxes
                   &lt;/div&gt;`;
          case 'Profit':
            return `&lt;div class="legend-note profit-note"&gt;
                     Using color ${colorIndex + 1} - After adjustments
                   &lt;/div&gt;`;
          default:
            return '';
        }
      }ph.</p>
      <p class="card-text pe-5">
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
      <div class="ms-5 mb-2 p-2 pe-5 text-body-secondary border-start border-subtle bg-body-secondary">
        <p class="card-text text-body-secondary">
          <small>
            NB: This orientation could also be provided through
            <code class="text-body-secondary">externalizeLegends()</code> method providing in place of the CSS selector for the caption container an object including the selector and the orientation <code class="text-body-secondary">{ legendHolderSelector: string; orientation: 'vertical' | 'horizontal';}</code> :
            <code class="text-body-secondary">
              <pre>
themeManager.externalizeLegends(myChart, {legendHolderSelector: '#barChartSH_legend', orientation: 'vertical'});
              </pre>
            </code>
          </small>
        </p>
      </div>
      <p class="card-text pe-5">In the example below, we prefer the Apache ECharts <code>legend.orient</code> method.</p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">      
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="vertical_htmlId">
        <div class="border border-subtle" style="display: flex; flex-direction: column; height: 100%">
          <div class="chart_title mx-3">
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

  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Specific legend labels</h5>
      <p class="card-text pe-5">It is possible to use something else than the serie name as label in legends generated by ODS Charts.</p>
      <p class="card-text pe-5">
        To do this, you must use the Apache ECharts <code>legend.formatter</code> option:
        <code>
          <pre>
legend: {
  formatter: (name)=> name + ' zone'
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
      <div id="format_htmlId">
        <div class="border border-subtle" style="display: flex; flex-direction: column; height: 100%">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="format_barChart_holder">
                <div id="format_barChart_chart" style="width: 100%; height: 50vh"></div>
              </div>
            </div>
            <div class="col-2">
              <div id="format_barChart_legend"></div>
            </div>
          </div>
        </div>
      </div>
      <script>
        addViewCode('format_');
      </script>
    </div>
  </div>
  <script id="format_codeId">
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
          name: 'Label 1',
          data: [10, 22, 28.8956454657, 23, 19, 15],
          type: 'bar',
          stack: true,
        },
        {
          name: 'Label 2',
          data: [28.8956454657, 23, 19, 15, 18, 12],
          type: 'bar',
          stack: true,
        },
        {
          name: 'Label 3',
          data: [19, 15, 18, 12, 28.8956454657, 23],
          type: 'bar',
          stack: true,
        },
      ],
      legend: {
        formatter: (name)=> name + ' zone'
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
    var div = document.getElementById('format_barChart_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart, '#format_barChart_legend');
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'format_barChart_chart');
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
      <p class="card-text pe-5">In the following example, we want to display the legends for a first set of stacked bars separately from those for a second set of stacked bars and the legend for a curve.</p>
      <p class="card-text pe-5">To do this, we pass as a parameter to the externalizeLegends() method not a CSS selector of the legend container but an array of containers defined by the <code>{legendHolderSelector: string; orientation?: 'vertical' | 'horizontal'; seriesRef?: string[]}</code> object.</p>
      <ul>
        <li><code>legendHolderSelector</code> is the CSS selector of the legend holder.</li>
        <li><code>orientation</code> optionally indicates whether captions are displayed horizontally or vertically. By default, the value of the <code>legend.orient</code> option in Apache Echarts will be used if it exists, otherwise it will be <code>'horizontal'</code>.</li>
        <li>
          <code>seriesRef</code> is an array referencing the series whose legends are to be displayed in this legend container. The reference can be the series name, the series label or simply the stack name in the case of stacked bars.<br />
          If <code>seriesRef</code> is absent, this container will be the default container for non-referenced legends.
        </li>
      </ul>
      <p class="card-text pe-5">
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
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="stacked_htmlId">
        <div class="border border-subtle position-relative">
          <div class="chart_title mx-3">
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

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title">Legend holder with custom content example</h5>
      <p class="card-text pe-5">In this example, we show a very simple example on how to add custom HTML content after the legend items using the <code>postItemContent</code> option.</p>
      <p class="card-text pe-5">The <code>postItemContent</code> property allows you to inject HTML content in three ways:</p>
      <ol>
        <li>As a string: content will be displayed after all legend items</li>
        <li>As a function: content will be customized for each legend label</li>
        <li>As a Map: content will be mapped directly to legend labels</li>
        <li>As an array: content will be matched with legends by position (first array element for first legend, etc.)</li>
      </ol>
      <p class="card-text pe-5">
        For full illustration, have a look to the next use case, here will illustrate usage of the map:
        <code>
          <pre>
themeManager.externalizeLegends(
  myChart,
  {
    legendHolderSelector: '#legend_with_custom_content',
    postItemContent: new Map([
      ['label 1', '&lt;small>(partial result)&lt;/small>']
    ])
  }
);
          </pre>
        </code>
      </p>
      <button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
        <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="#lightning-charge-fill" />          
        </svg>
        <span class="visually-hidden">Open in playground using StackBlitz</span>
      </button>
      <div id="custom_simple_content_htmlId">
        <div class="border border-subtle" style="display: flex; flex-direction: column; height: 100%">
          <div class="chart_title mx-3">
            <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
            <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
          </div>
          <div class="row">
            <div class="col-9">
              <div id="barChartCSC_holder">
                <div id="barChartCSC_chart" style="width: 100%; height: 50vh"></div>
              </div>
            </div>
            <div class="col-3">
              <div id="barChartCSC_legend"></div>
            </div>
          </div>
        </div>
      </div>
      <script>
        addViewCode('custom_simple_content_');
      </script>
    </div>

  </div>
  <script id="custom_simple_content_codeId">
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
    var div = document.getElementById('barChartCSC_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Set the data to be displayed.
    themeManager.setDataOptions(dataOptions);
    // Register the externalization of the legend.
    themeManager.externalizeLegends(myChart,
      {
        legendHolderSelector: '#barChartCSC_legend',
        postItemContent: {
          'label 1': '<small>(partial result)</small>',
        }
      }
    );
    // Manage window size changed
    themeManager.manageChartResize(myChart, 'barChartCSC_chart');
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover();
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>

  <div class="card w-100 mt-3">
    <div class="card-body">
      <h5 class="card-title">Legend holder with custom content complex example</h5>
      <p class="card-text pe-5">In this example, we demonstrate how to add custom HTML content to your legends using both <code>postItemContent</code> and <code>afterLegendContent</code> options.</p>
      <p class="card-text pe-5">There are two ways to add custom content to your legends:</p>
      <ol>
        <li>Using <code>postItemContent</code> to add content after each individual legend item:
          <ul>
            <li>As a function: customize content for each legend label</li>
            <li>As an object: map legend labels directly to their custom content</li>
          </ul>
        </li>
        <li>Using <code>afterLegendContent</code> to add content that appears after all legend items:
          <ul>
            <li>As a string: single piece of content displayed at the bottom of the legend group</li>
          </ul>
        </li>
      </ol>
      <p class="card-text pe-5">
        Here's how to use both options:
        <code>
          <pre>
// Example 1: Function-based postItemContent - Customize content per legend
themeManager.externalizeLegends(
  myChart,
  {
    legendHolderSelector: '#legend_with_custom_content', 
    postItemContent: (legendLabel, legendName, legendIndex, color, colorIndex) => {
      switch(legendLabel) {
        case 'Sales':
          return `&lt;div class="legend-note sales-note" style="color:${color}"&gt;Including taxes (Series ${legendIndex + 1})&lt;/div&gt;`;
        case 'Profit':
          return `&lt;div class="legend-note profit-note"&gt;After adjustments (Color ${colorIndex + 1})&lt;/div&gt;`;
        default:
          return '';
      }
    }
  }
);
          </pre>
          <pre>
// Example 2: Map-based postItemContent - Map labels to content
themeManager.externalizeLegends(
  myChart,
  {
    legendHolderSelector: '#legend_with_map_content', 
    postItemContent: new Map([
      ['Sales', '&lt;div class="legend-note sales-note"&gt;Including taxes&lt;/div&gt;'],
      ['Profit', '&lt;div class="legend-note profit-note"&gt;After adjustments&lt;/div&gt;']
    ])
  }
);
          </pre>
          <pre>
// Example 3: Array-based postItemContent - Position-based content
themeManager.externalizeLegends(
  myChart,
  {
    legendHolderSelector: '#legend_with_array_content', 
    postItemContent: [
      '&lt;div class="legend-note first-note"&gt;First legend additional info&lt;/div&gt;',
      '&lt;div class="legend-note second-note"&gt;Second legend details&lt;/div&gt;',
      '&lt;div class="legend-note third-note"&gt;Third legend description&lt;/div&gt;'
    ]
  }
);

// Example 4: Using afterLegendContent - Add global content after all legends
themeManager.externalizeLegends(
myChart,
{
legendHolderSelector: '#legend\*with_string_content',
afterLegendContent: '&lt;div class="global-note"&gt;Last updated: October 2025&lt;/div&gt;'
}
);

</pre>
</code>
</p>
<button class="btn btn-icon btn-outline-secondary btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Open in playground">
<svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
<use xlink:href="#lightning-charge-fill" />  
 </svg>
<span class="visually-hidden">Open in playground using StackBlitz</span>
</button>
<div id="custom_content_htmlId">  
 <div class="border border-subtle">
<div class="chart_title mx-3">
<h4 class="display-4 mx-3 mb-1 mt-3">Sales Chart</h4>
<h5 class="display-5 mx-3 mb-1 mt-0">Monthly Performance</h5>
</div>
<div id="customContent_holder">
<div id="customContent_chart" style="width: 100%; height: 40vh"></div>
</div>
<div class="mx-3">
<h6 class="mt-3 mb-2">Financial Performance (Function-based legend)</h6>
<div id="legend_with_custom_content"></div>  
 <h6 class="mt-4 mb-2">Year-over-Year Sales (Map-based legend)</h6>
<div id="legend_with_map_content"></div>
<h6 class="mt-4 mb-2">Web Analytics (Array-based legend)</h6>
<div id="legend_with_array_content"></div>
<h6 class="mt-4 mb-2">Performance Metrics (Global note example)</h6>
<div id="legend_with_string_content"></div>
</div>
</div>
</div>
<script>
addViewCode('custom_content*');
</script>
</div>

  </div>
  <script id="custom_content_codeId">
    ///////////////////////////////////////////////////
    // Used data
    ///////////////////////////////////////////////////

    // Sample data generation for different metrics
    const generateData = () => Array(6).fill(0).map(() => Math.floor(Math.random() * 100));
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    // Generate data for 9 different series (3 groups of 3 series each)
    const data = {
      group1: {
        revenue: generateData(),
        costs: generateData(),
        profits: generateData()
      },
      group2: {
        sales2025: generateData(),
        sales2024: generateData(),
        growth: generateData()
      },
      group3: {
        pageviews: generateData(),
        sessionDuration: generateData(),
        bounce: generateData()
      },
      group4: {
        visits: generateData(),
        conversions: generateData(),
        rate: generateData()
      }
    };

    // Data configuration for the chart
    const legendsDataOptions = {
      xAxis: {
        type: 'category',
        data: months,
      },
      yAxis: [{
        type: 'value',
        name: 'Main Metrics',
        position: 'left'
      }, {
        type: 'value',
        name: 'Secondary Metrics',
        position: 'right'
      }],
      series: [
        // Group 1 - Function-based example
        {
          name: 'Revenue',
          data: data.group1.revenue,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group1'
        },
        {
          name: 'Costs',
          data: data.group1.costs,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group1'
        },
        {
          name: 'Net Profit',
          data: data.group1.profits,
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          symbol: 'circle',
          symbolSize: 8
        },
        // Group 2 - Object-based example
        {
          name: 'Sales 2025',
          data: data.group2.sales2025,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group2'
        },
        {
          name: 'Sales 2024',
          data: data.group2.sales2024,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group2'
        },
        {
          name: 'Growth Rate',
          data: data.group2.growth,
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          symbol: 'diamond',
          symbolSize: 8
        },
        // Group 3 - Array-based example
        {
          name: 'Pageviews',
          data: data.group3.pageviews,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group3'
        },
        {
          name: 'Session Duration',
          data: data.group3.sessionDuration,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group3'
        },
        {
          name: 'Bounce Rate',
          data: data.group3.bounce,
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          symbol: 'triangle',
          symbolSize: 8
        },
        // Group 4 - Global note example
        {
          name: 'Site Visits',
          data: data.group4.visits,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group4'
        },
        {
          name: 'Conversions',
          data: data.group4.conversions,
          type: 'bar',
          yAxisIndex: 0,
          stack: 'group4'
        },
        {
          name: 'Success Rate',
          data: data.group4.rate,
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          symbol: 'diamond',
          symbolSize: 8
        }
      ]
    };

    ///////////////////////////////////////////////////
    // ODS Charts
    ///////////////////////////////////////////////////
    // Build the theme
    var themeManager = ODSCharts.getThemeManager();
    echarts.registerTheme(themeManager.name, themeManager.theme);

    // Get the chart holder and initiate it with the generated theme
    var div = document.getElementById('customContent_chart');
    var myChart = echarts.init(div, themeManager.name, {
      renderer: 'svg',
    });

    // Style classes for legend notes
    var styles = document.createElement('style');
    styles.textContent = `
      .global-note {
        background-color: #f8f9fa;
        border-radius: 4px;
        font-style: italic;
      }
      .metric-note {
        display: inline-block;
        font-size: 0.85em;
        background: #e9ecef;
        border-radius: 4px;
        padding: 2px 0px;
      }
      .revenue-note { color: #1b6ec2; }
      .profit-note { color: #2b8a3e; }
      .conversion-note { color: #e8590c; }
    `;
    document.head.appendChild(styles);

    // Set up the chart with all series
    themeManager.setDataOptions(legendsDataOptions);

    // Configure the externalized legends with different postItemContent types
    themeManager.externalizeLegends(myChart, [
      {
        // Example 1: Function-based content - Dynamic content based on legend label
        legendHolderSelector: '#legend_with_custom_content',
        orientation: 'horizontal',
        seriesRef: ['Revenue', 'Costs', 'Net Profit'],
        postItemContent: (legendLabel, legendName, legendIndex, color, colorIndex) => {
          switch(legendLabel) {
            case 'Revenue':
              return `<span class="metric-note revenue-note">
                       Gross revenue including taxes (${legendName} at index ${legendIndex + 1})
                     </span>`;
            case 'Costs':
              return `<span class="metric-note profit-note">
                       Operating expenses only (Using color ${color})
                     </span>`;
            case 'Net Profit':
              return `<span class="metric-note conversion-note">
                       After all deductions (Color palette index ${colorIndex + 1})
                     </span>`;
            default:
              return '';
          }
        }
      },
      {
        // Example 2: Map-based content - Direct mapping between labels and content
        legendHolderSelector: '#legend_with_map_content',
        orientation: 'horizontal',
        seriesRef: ['Sales 2025', 'Sales 2024', 'Growth Rate'],
        postItemContent: new Map([
          ['Sales 2025', '<span class="metric-note revenue-note">Projected data</span>'],
          ['Sales 2024', '<span class="metric-note profit-note">Historical data</span>'],
          ['Growth Rate', '<span class="metric-note conversion-note">Year-over-year change</span>']
        ])
      },
      {
        // Example 3: Array-based content - Position-based content matching
        legendHolderSelector: '#legend_with_array_content',
        orientation: 'horizontal',
        seriesRef: ['Pageviews', 'Session Duration', 'Bounce Rate'],
        postItemContent: [
          '<span class="metric-note views-note">Total page impressions</span>',
          '<span class="metric-note duration-note">Average time spent on site</span>',
          '<span class="metric-note bounce-note">Session abandonment rate</span>'
        ]
      },
      {
        // Example 4: Content after all legends using afterLegendContent
        legendHolderSelector: '#legend_with_string_content',
        orientation: 'horizontal',
        seriesRef: ['Site Visits', 'Conversions', 'Success Rate'],
        afterLegendContent: '<div class="global-note">Data from our analytics platform - Updated daily</div>'
      }
    ]);

    // Manage window size changed
    themeManager.manageChartResize(myChart, 'customContent_chart');
    // Register the externalization of the tooltip/popup
    themeManager.externalizePopover();
    // Observe dark / light mode changes
    themeManager.manageThemeObserver(myChart);
    // Display the chart using the configured theme and data.
    myChart.setOption(themeManager.getChartOptions());

  </script>
</div>
