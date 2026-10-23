///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var choroplethMapCountryAdoption = [
  { name: 'United States', value: 86 },
  { name: 'Canada', value: 72 },
  { name: 'Mexico', value: 48 },
  { name: 'Brazil', value: 63 },
  { name: 'France', value: 78 },
  { name: 'Germany', value: 81 },
  { name: 'Spain', value: 67 },
  { name: 'United Kingdom', value: 75 },
  { name: 'South Africa', value: 42 },
  { name: 'India', value: 58 },
  { name: 'China', value: 69 },
  { name: 'Japan', value: 83 },
  { name: 'Australia', value: 71 },
];

var choroplethMapDataOptions = {
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      if (typeof value !== 'number' || !Number.isFinite(value)) {
        return undefined; //'No data';
      }

      return value + '%';
    },
  },
  visualMap: {
    min: 0,
    max: 100,
    splitNumber: 5,
    text: ['Adoption rate'],
  },
  series: [
    {
      name: 'Adoption rate',
      type: 'map',
      map: 'world-svg-choropleth',
      data: choroplethMapCountryAdoption,
    },
  ],
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////

fetch('../../maps/world.svg')
  .then(function (response) {
    return response.text();
  })
  .then(function (svg) {
    echarts.registerMap('world-svg-choropleth', { svg: svg });

    var choroplethMapThemeManager = ODSCharts.getThemeManager({
      chartConfiguration: ODSCharts.ODSChartsConfiguration.getChoroplethMapChartConfiguration(),
      colors: ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_BLUE,
      cssSelector: '#choropleth_map_chart',
    });

    echarts.registerTheme(choroplethMapThemeManager.name, choroplethMapThemeManager.theme);

    var choroplethMapDiv = document.getElementById('choropleth_map_chart');
    var choroplethMapChart = echarts.init(choroplethMapDiv, choroplethMapThemeManager.name, {
      renderer: 'svg',
    });

    choroplethMapThemeManager.setDataOptions(choroplethMapDataOptions);
    choroplethMapThemeManager.manageChartResize(choroplethMapChart, 'choropleth_map_chart');
    choroplethMapThemeManager.manageThemeObserver(choroplethMapChart);
    choroplethMapThemeManager.externalizePopover();

    choroplethMapChart.setOption(choroplethMapThemeManager.getChartOptions());
  });
