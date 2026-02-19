---
title: Heatmap - Specific use cases - ODS Charts
---

<div class="title-bar">
  <div class="container-xxl">
    <h1 class="display-1">Heatmap</h1>
  </div>
</div>
<div class="container-xxl pt-3">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Heatmap example</h5>
      <p class="card-text pe-5">This use case illustrates the use of heat maps to visualize the distribution 
      of message reception per quarter hour over a week.</p>
      <p class="card-text pe-5">
      Heatmap series is describe with a series 
        You can add the timeline slider with the <code>dataZoom</code> option:
        <code>
          <pre>          
    {
      type: 'heatmap',
      data: [
        ...
      ],
      label: { show: false },
      emphasis: { itemStyle: {} },
    }, 
</pre>
</code>
where each data is an array of <code>[xAxisIndex, yAxisIndex, value]</code>
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
          <div id="heatmap_holder">
            <div id="heatmap_chart" style="width: 100%; height: 600px" class="position-relative"></div>
          </div>
          <div id="heatmap_legend"></div>
        </div>
      </div>
      <script>
        addViewCode();
      </script>
    </div>
  </div>

<!-- prettier-ignore -->
  <script id="codeId">
///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// this is the data to be displayed
var dataOptions = {
    yAxis: {
        axisLabel: {},
        type: 'category',
        data: [
            '24h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '21h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '18h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '15h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '12h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '9h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '6h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '3h',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ],
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    xAxis: {
        axisLabel: {},
        type: 'category',
        data: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ],
        splitLine: {
            show: true
        },
        splitArea: {
            show: false
        },
    },
    tooltip: {
        confine: true,
        trigger: 'item',
        enterable: true
    },
    grid: {
        top: '5px',
        left: '50px',
        right: '20px',
        bottom: '100px'
    },
    visualMap: {
        textStyle: {
            fontWeight: '400',
            fontSize: 14,
            color: 'var(--bs-body-color)',
            padding: [0, 0, 0, 5],
        },
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12,
        orient: 'horizontal',
        bottom: 20,
        left: 'center',
        padding: [0, 40, 10, 40],
        type: 'piecewise',
        itemSymbol: 'rect',
        pieces: [{
                min: 3,
                max: 3.5,
                label: '3'
            },
            {
                min: 3.5,
                max: 4.5,
                label: '4'
            },
            {
                min: 4.5,
                max: 5.5,
                label: '5'
            },
            {
                min: 5.5,
                max: 7.5,
                label: '7'
            },
            {
                min: 7.5,
                max: 9.5,
                label: '9'
            },
            {
                min: 9.5,
                max: 10.5,
                label: '10'
            },
            {
                min: 10.5,
                max: 11.5,
                label: '11'
            },
            {
                min: 11.5,
                max: 12.5,
                label: '12'
            },
            {
                min: 12.5,
                max: 13.5,
                label: '13'
            },
            {
                min: 13.5,
                max: 14.5,
                label: '14'
            },
            {
                min: 14.5,
                max: 15.5,
                label: '15'
            },
            {
                min: 15.5,
                max: 20.5,
                label: '20 messages per 15 minutes'
            },
        ],
        min: 3,
        max: 20,
        precision: 0,
    },
    series: [{
        type: 'heatmap',
        data: [
            [0, 61, 15],
            [0, 60, 20],
            [0, 59, 15],
            [0, 58, 15],
            [0, 57, 10],
            [1, 56, 10],
            [1, 55, 15],
            [1, 54, 15],
            [1, 53, 15],
            [1, 52, 15],
            [1, 51, 15],
            [1, 50, 15],
            [1, 49, 15],
            [1, 48, 15],
            [1, 47, 15],
            [1, 46, 15],
            [1, 45, 15],
            [1, 44, 15],
            [1, 43, 15],
            [1, 42, 15],
            [1, 41, 15],
            [1, 40, 15],
            [1, 39, 15],
            [1, 38, 13],
            [1, 37, 14],
            [1, 36, 14],
            [1, 35, 13],
            [1, 34, 14],
            [1, 33, 14],
            [1, 32, 14],
            [1, 31, 14],
            [1, 30, 14],
            [1, 29, 15],
            [1, 28, 15],
            [1, 27, 14],
            [1, 26, 14],
            [1, 25, 15],
            [1, 24, 3],
            [2, 60, 12],
            [2, 59, 15],
            [2, 58, 15],
            [2, 57, 15],
            [2, 56, 15],
            [2, 55, 12],
            [2, 54, 15],
            [2, 53, 11],
            [2, 52, 15],
            [2, 51, 15],
            [2, 50, 15],
            [2, 49, 15],
            [2, 48, 15],
            [2, 47, 15],
            [2, 46, 15],
            [2, 45, 15],
            [2, 44, 15],
            [2, 43, 15],
            [2, 42, 15],
            [2, 41, 15],
            [2, 40, 15],
            [2, 39, 15],
            [2, 38, 15],
            [2, 37, 15],
            [2, 36, 15],
            [2, 35, 15],
            [2, 34, 15],
            [2, 33, 15],
            [2, 32, 15],
            [2, 31, 15],
            [2, 30, 15],
            [2, 29, 15],
            [2, 28, 4],
            [3, 53, 12],
            [3, 52, 15],
            [3, 51, 15],
            [3, 50, 15],
            [3, 49, 15],
            [3, 48, 15],
            [3, 47, 9],
            [7, 55, 5],
            [7, 54, 15],
            [7, 53, 15],
            [7, 52, 15],
            [7, 51, 15],
            [7, 50, 15],
            [7, 49, 7],
            [9, 59, 11],
            [9, 58, 15],
            [9, 57, 15],
            [9, 56, 15],
            [9, 55, 15],
            [9, 54, 10],
            [11, 58, 13],
            [11, 57, 15],
            [11, 56, 15],
            [11, 55, 14],
            [11, 54, 12],
            [11, 53, 14],
            [11, 52, 15],
            [11, 51, 15],
            [11, 50, 15],
            [11, 49, 15],
            [11, 48, 15],
            [11, 47, 15],
            [11, 46, 15],
            [11, 45, 15],
            [11, 44, 15],
            [11, 43, 15],
            [11, 42, 15],
            [11, 41, 15],
            [11, 40, 10],
        ],
        label: {
            show: false
        },
        emphasis: {
            itemStyle: {}
        },
    }, ],
};

///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
    colors: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE,
    chartConfiguration: ODSCharts.ODSChartsConfiguration.getBarChartConfiguration(),
    cssTheme: ODSCharts.ODSChartsCSSThemes.BOOSTED5,
    cssSelector: '#heatmap_chart',
});

// register this theme to echarts
echarts.registerTheme(themeManager.name, themeManager.theme);

// get the chart holder and initiate it with the generated theme
var div = document.getElementById('heatmap_chart');
var myChart = echarts.init(div, themeManager.name, {
    renderer: 'svg',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);
// Manage window size changed
themeManager.manageChartResize(myChart, 'heatmap_chart');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);
// Register the externalization of the tooltip/popup
themeManager.externalizePopover({
    enabled: true,
    shared: false,
    tooltip: true,
    axisPointer: ODSCharts.ODSChartsPopoverAxisPointer.none,
}, {
    getPopupContentValue: (tooltipElement) => {
        console.log(tooltipElement)
        const baseDate = new Date('2026-02-16');
        const minutesToAdd =
            tooltipElement.value[0] * 24 * 60 +
            (24 * 4 - tooltipElement.value[1] - 1) * 15;

        const startTime = new Date(baseDate.getTime() + minutesToAdd * 60 * 1000);
        const endTime = new Date(startTime.getTime() + 15 * 60 * 1000);

        const formatTime = (date) => {
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        };

        return (
            formatTime(startTime) +
            '-' +
            formatTime(endTime) +
            ' : ' +
            tooltipElement.value[2]
        );
    },

});
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());

</script>

</div>
