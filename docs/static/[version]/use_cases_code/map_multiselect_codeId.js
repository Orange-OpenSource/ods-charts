///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var multiselectMapContinentNames = ['Africa', 'Asia', 'Australia', 'Oceania', 'South America', 'Europe', 'North America'];

var multiselectMapDataOptions = {
  tooltip: {
    show: false,
  },
  visualMap: {
    show: false,
  },
  series: [
    {
      name: 'Distribution areas',
      type: 'map',
      map: 'world-continents-multiselect',
      nameProperty: 'CONTINENT',
      label: {
        show: true,
      },
      data: multiselectMapContinentNames.map(function (name) {
        return { name: name };
      }),
    },
  ],
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////

fetch('../../maps/world-continents.geojson')
  .then(function (response) {
    return response.json();
  })
  .then(function (geoJson) {
    echarts.registerMap('world-continents-multiselect', geoJson);

    var multiselectMapThemeManager = ODSCharts.getThemeManager({
      chartConfiguration: ODSCharts.ODSChartsConfiguration.getChoroplethMapChartConfiguration({ allowSelection: ODSCharts.ODSChartsAllowSelction.MULTIPLE }),
      cssSelector: '#multiselect_map_chart',
    });

    echarts.registerTheme(multiselectMapThemeManager.name, multiselectMapThemeManager.theme);

    var multiselectMapDiv = document.getElementById('multiselect_map_chart');
    var multiselectMapChart = echarts.init(multiselectMapDiv, multiselectMapThemeManager.name, {
      renderer: 'svg',
    });

    multiselectMapThemeManager.setDataOptions(multiselectMapDataOptions);
    multiselectMapThemeManager.manageChartResize(multiselectMapChart, 'multiselect_map_chart');
    multiselectMapThemeManager.manageThemeObserver(multiselectMapChart);
    multiselectMapThemeManager.externalizePopover();

    multiselectMapChart.setOption(multiselectMapThemeManager.getChartOptions());

    var multiselectStatus = document.getElementById('multiselect_status');
    var multiselectResetButton = document.getElementById('multiselect_reset');

    function updateMultiselectStatus(params) {
      var seriesSelection =
        params && params.selected
          ? params.selected.find(function (entry) {
              return entry.seriesIndex === 0;
            })
          : undefined;
      var selected = (seriesSelection ? seriesSelection.dataIndex : []).map(function (dataIndex) {
        return multiselectMapContinentNames[dataIndex];
      });
      multiselectStatus.textContent = selected.length === 0 ? 'No continent selected' : 'Selected areas: ' + selected.join(', ');
    }

    multiselectMapChart.on('selectchanged', updateMultiselectStatus);

    multiselectResetButton.addEventListener('click', function () {
      multiselectMapChart.dispatchAction({
        type: 'unselect',
        seriesIndex: 0,
        name: multiselectMapContinentNames,
      });
      updateMultiselectStatus();
    });
  });
