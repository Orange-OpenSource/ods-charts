///////////////////////////////////////////////////
// Geo coordinates mapping
///////////////////////////////////////////////////
// world.svg is a stylized illustration, not a true equirectangular
// projection, so real [lon, lat] values do not always land on the right
// pixel once ECharts applies its own linear geoViewBox transform.
// createGeoCoordinateCorrector() fits an affine transform (least squares,
// 6 parameters) from a handful of "control points": for each point, `real`
// is the true geographic coordinate of a reference and `calibrated` is the
// [lon, lat] value that must be passed to ECharts to make a marker land
// exactly on that reference on this specific SVG.
function createGeoCoordinateCorrector(controlPoints) {
  if (controlPoints.length < 3) {
    throw new Error('At least 3 control points are required to fit an affine transform.');
  }

  function fitAxis(rows, values) {
    var AtA = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    var Atb = [0, 0, 0];

    rows.forEach(function (row, i) {
      for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
          AtA[r][c] += row[r] * row[c];
        }
        Atb[r] += row[r] * values[i];
      }
    });

    return solve3x3(AtA, Atb);
  }

  function solve3x3(m, b) {
    function det(matrix) {
      return (
        matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
        matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
        matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
      );
    }

    var detM = det(m);
    if (Math.abs(detM) < 1e-10) {
      throw new Error('Control points are collinear or degenerate; cannot fit affine transform.');
    }

    return [0, 1, 2].map(function (col) {
      var replaced = m.map(function (row, i) {
        return row.map(function (v, j) {
          return j === col ? b[i] : v;
        });
      });
      return det(replaced) / detM;
    });
  }

  var rows = controlPoints.map(function (point) {
    return [point.real[0], point.real[1], 1];
  });
  var lonCoeffs = fitAxis(
    rows,
    controlPoints.map(function (point) {
      return point.calibrated[0];
    })
  );
  var latCoeffs = fitAxis(
    rows,
    controlPoints.map(function (point) {
      return point.calibrated[1];
    })
  );

  return function correct(lonLat) {
    var row = [lonLat[0], lonLat[1], 1];
    var lon = row[0] * lonCoeffs[0] + row[1] * lonCoeffs[1] + row[2] * lonCoeffs[2];
    var lat = row[0] * latCoeffs[0] + row[1] * latCoeffs[1] + row[2] * latCoeffs[2];
    return [lon, lat];
  };
}

// Real-world geographic centroid of a few compact, well spread countries
// whose `id`/`name` attributes exist in world.svg (e.g. `<path id="US"
// name="United States" .../>`). Bounding-box centers are only a good proxy
// for the true centroid on compact, convex-ish countries, so avoid using
// countries with scattered territories (islands, exclaves...) as reference.
var countryGeoReferences = [
  { id: 'FR', name: 'France', real: [2.2137, 46.2276] },
  { id: 'BR', name: 'Brazil', real: [-51.9253, -14.235] },
  { id: 'AU', name: 'Australia', real: [133.7751, -25.2744] },
  { id: 'ZA', name: 'South Africa', real: [22.9375, -30.5595] },
  { id: 'IN', name: 'India', real: [78.9629, 20.5937] },
  { id: 'US', name: 'United States', real: [-95.7129, 37.0902] },
];

// For each reference country, locates its rendered `<path>` in the already
// drawn chart and asks ECharts itself (via convertFromPixel) what [lon, lat]
// currently maps to that pixel. This is more reliable than re-deriving the
// SVG's projection formula by hand: it reuses ECharts' own geo/SVG transform
// (whatever `geoViewBox` format it expects), so it stays correct even if
// that internal format changes.
function deriveCountryControlPointsFromChart(chart, chartContainer, references) {
  var containerRect = chartContainer.getBoundingClientRect();

  return references
    .map(function (reference) {
      var path = chartContainer.querySelector('path[name="' + reference.name + '"]') || chartContainer.querySelector('path[id="' + reference.id + '"]');
      if (!path) {
        return null;
      }

      var rect = path.getBoundingClientRect();
      var pixel = [rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top];
      var calibrated = chart.convertFromPixel({ geoIndex: 0 }, pixel);
      if (!calibrated) {
        return null;
      }

      return { real: reference.real, calibrated: calibrated };
    })
    .filter(Boolean);
}

///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

var bubbleMapCityTraffic = [
  { name: 'New York', value: [-74.006, 40.7128, 820] },
  { name: 'Sao Paulo', value: [-46.6333, -23.5505, 640] },
  { name: 'Paris', value: [2.3522, 48.8566, 520] },
  { name: 'Cairo', value: [31.2357, 30.0444, 430] },
  { name: 'Mumbai', value: [72.8777, 19.076, 760] },
  { name: 'Singapore', value: [103.8198, 1.3521, 610] },
  { name: 'Tokyo', value: [139.6917, 35.6895, 700] },
  { name: 'Sydney', value: [151.2093, -33.8688, 360] },
];

var bubbleMapDataOptions = {
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (params.seriesType !== 'scatter') {
        return params.name;
      }

      return '<strong>' + params.name + '</strong><br/>Traffic: ' + params.value[2] + 'k requests';
    },
  },
  geo: {
    map: 'world-svg',
    zoom: 1.15,
    center: [10, 20],
    regions: [],
  },
  visualMap: {
    min: 0,
    max: 900,
    dimension: 2,
    pieces: [
      { min: 0, max: 300, label: '0-300k' },
      { min: 300, max: 500, label: '300-500k' },
      { min: 500, max: 700, label: '500-700k' },
      { min: 700, max: 900, label: '700-900k' },
    ],
  },
  series: [
    {
      name: 'Traffic',
      type: 'scatter',
      data: bubbleMapCityTraffic,
      symbolSize: function (value) {
        return Math.max(10, Math.sqrt(value[2]) * 1.2);
      },
    },
  ],
};

///////////////////////////////////////////////////
// ODS Charts
///////////////////////////////////////////////////

fetch('../../images/maps/world.svg')
  .then(function (response) {
    return response.text();
  })
  .then(function (svg) {
    echarts.registerMap('world-svg', { svg: svg });

    var bubbleMapThemeManager = ODSCharts.getThemeManager({
      chartConfiguration: ODSCharts.ODSChartsConfiguration.getBubbleMapChartConfiguration(),
      colors: ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_BLUE,
      cssSelector: '#map_chart',
    });

    echarts.registerTheme(bubbleMapThemeManager.name, bubbleMapThemeManager.theme);

    var bubbleMapDiv = document.getElementById('map_chart');
    var bubbleMapChart = echarts.init(bubbleMapDiv, bubbleMapThemeManager.name, {
      renderer: 'svg',
    });

    bubbleMapThemeManager.setDataOptions(bubbleMapDataOptions);
    bubbleMapThemeManager.manageChartResize(bubbleMapChart, 'map_chart');
    bubbleMapThemeManager.manageThemeObserver(bubbleMapChart);
    bubbleMapThemeManager.externalizePopover({
      enabled: true,
      shared: false,
      tooltip: true,
      axisPointer: ODSCharts.ODSChartsPopoverAxisPointer.none,
    });

    bubbleMapChart.setOption(bubbleMapThemeManager.getChartOptions());

    // ECharts renders the SVG map asynchronously, so the country <path>
    // elements are not guaranteed to exist in the DOM right after setOption:
    // wait for the "finished" event before deriving the correction from them.
    bubbleMapChart.on('finished', function applyGeoCoordinateCorrection() {
      bubbleMapChart.off('finished', applyGeoCoordinateCorrection);

      var controlPoints = deriveCountryControlPointsFromChart(bubbleMapChart, bubbleMapDiv, countryGeoReferences);
      var geoCoordinateCorrector = createGeoCoordinateCorrector(controlPoints);
      var correctedData = bubbleMapCityTraffic.map(function (city) {
        var corrected = geoCoordinateCorrector([city.value[0], city.value[1]]);
        return { name: city.name, value: [corrected[0], corrected[1], city.value[2]] };
      });
      bubbleMapChart.setOption({ series: [{ data: correctedData }] });
    });
    bubbleMapChart.setOption({ series: [{ data: correctedData }] });
  });
