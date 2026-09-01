///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// Sample data generation for different metrics
const generateData = () =>
  Array(6)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100));
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// Generate data for 9 different series (3 groups of 3 series each)
const data = {
  group1: {
    revenue: generateData(),
    costs: generateData(),
    profits: generateData(),
  },
  group2: {
    sales2025: generateData(),
    sales2024: generateData(),
    growth: generateData(),
  },
  group3: {
    pageviews: generateData(),
    sessionDuration: generateData(),
    bounce: generateData(),
  },
  group4: {
    visits: generateData(),
    conversions: generateData(),
    rate: generateData(),
  },
};

// Data configuration for the chart
const legendsDataOptions = {
  xAxis: {
    type: 'category',
    data: months,
  },
  yAxis: [
    {
      type: 'value',
      name: 'Main Metrics',
      position: 'left',
    },
    {
      type: 'value',
      name: 'Secondary Metrics',
      position: 'right',
    },
  ],
  series: [
    // Group 1 - Function-based example
    {
      name: 'Revenue',
      data: data.group1.revenue,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group1',
    },
    {
      name: 'Costs',
      data: data.group1.costs,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group1',
    },
    {
      name: 'Net Profit',
      data: data.group1.profits,
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
    },
    // Group 2 - Object-based example
    {
      name: 'Sales 2025',
      data: data.group2.sales2025,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group2',
    },
    {
      name: 'Sales 2024',
      data: data.group2.sales2024,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group2',
    },
    {
      name: 'Growth Rate',
      data: data.group2.growth,
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      symbol: 'diamond',
      symbolSize: 8,
    },
    // Group 3 - Array-based example
    {
      name: 'Pageviews',
      data: data.group3.pageviews,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group3',
    },
    {
      name: 'Session Duration',
      data: data.group3.sessionDuration,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group3',
    },
    {
      name: 'Bounce Rate',
      data: data.group3.bounce,
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      symbol: 'triangle',
      symbolSize: 8,
    },
    // Group 4 - Global note example
    {
      name: 'Site Visits',
      data: data.group4.visits,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group4',
    },
    {
      name: 'Conversions',
      data: data.group4.conversions,
      type: 'bar',
      yAxisIndex: 0,
      stack: 'group4',
    },
    {
      name: 'Success Rate',
      data: data.group4.rate,
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      symbol: 'diamond',
      symbolSize: 8,
    },
  ],
};

///////////////////////////////////////////////////
// ODSCharts
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
      switch (legendLabel) {
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
    },
  },
  {
    // Example 2: Object-based content - Direct mapping between labels and content
    legendHolderSelector: '#legend_with_object_content',
    orientation: 'horizontal',
    seriesRef: ['Sales 2025', 'Sales 2024', 'Growth Rate'],
    postItemContent: {
      'Sales 2025': '<span class="metric-note revenue-note">Projected data</span>',
      'Sales 2024': '<span class="metric-note profit-note">Historical data</span>',
      'Growth Rate': '<span class="metric-note conversion-note">Year-over-year change</span>',
    },
  },
  {
    // Example 3: Array-based content - Position-based content matching
    legendHolderSelector: '#legend_with_array_content',
    orientation: 'horizontal',
    seriesRef: ['Pageviews', 'Session Duration', 'Bounce Rate'],
    postItemContent: [
      '<span class="metric-note views-note">Total page impressions</span>',
      '<span class="metric-note duration-note">Average time spent on site</span>',
      '<span class="metric-note bounce-note">Session abandonment rate</span>',
    ],
  },
  {
    // Example 4: Content after all legends using afterLegendContent
    legendHolderSelector: '#legend_with_string_content',
    orientation: 'horizontal',
    seriesRef: ['Site Visits', 'Conversions', 'Success Rate'],
    afterLegendContent: '<div class="global-note">Data from our analytics platform - Updated daily</div>',
  },
]);

// Manage window size changed
themeManager.manageChartResize(myChart, 'customContent_chart');
// Register the externalization of the tooltip/popup
themeManager.externalizePopover();
// Observe dark / light mode changes
themeManager.manageThemeObserver(myChart);
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
