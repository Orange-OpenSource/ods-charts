<h1 align="center">Orange Design System Charts</h1>

<p align="center">
  ODS Charts provides Orange Charts components to developers.
</p>

## Table of contents

- [Documentation](#documentation)
- [Example](#example)
- [Copyright and license](#copyright-and-license)

## Documentation

Once the library integrated, via

- script &lt;script src="...ods-charts.js"&gt;
- or an import \* as ODSCharts from 'ods-charts'

use `ODSCharts.getThemeManager`({@link ODSChartsThemeOptions}) to get the {@link ODSChartsTheme}.

The {@link ODSChartsTheme} is used to build the ODS theme and the charts options.

## Examples

```
<html lang="en">
  <head>
    <script type="text/javascript" src="<...>ods-charts.js"></script>
    <script src=" https://cdn.jsdelivr.net/npm/echarts@latest/dist/echarts.min.js "></script>
  </head>
  <body>
    <div id="chart1" style="width: 800px; height: 400px"></div>
    <div id="chart1_legends" ></div>
    <script>
      var lineChartODSTheme = ODSCharts.getThemeManager();
      echarts.registerTheme(lineChartODSTheme.name, lineChartODSTheme.theme);

      const chart1 = echarts.init(
        document.getElementById('chart1'),
        lineChartODSTheme.name,
        {
          renderer: 'svg',
        }
      );
      chart1.setOption(
        lineChartODSTheme
          .setDataOptions({
            xAxis: {
              data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
            },
            series: [
              {
                name: 'sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
              },
            ],
          })
          .manageChartResize(chart1, 'chart1')
          .externalizePopover()
          .externalizeLegends(chart1, 'chart1_legends')
          .getChartOptions()
      );
    </script>
  </body>
</html>

```

<a href="../examples/">See more online dynamic examples</a>

## Copyright and license

Code released under the MIT License.

<script>
  if (document.location.href.endsWith('/api'))   {
    document.location.href = document.location.href + '/'
  }
</script>
