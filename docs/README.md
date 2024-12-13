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

The ODS Charts library is configured

- by settings options on {@link ODSChartsThemeOptions}
- by calling features on {@link ODSChartsTheme}

{@link ODSChartsTheme.getThemeManager}

### Theme options

The theme is configured with {@link ODSChartsThemeOptions}:

- {@link ODSChartsThemeOptions.categoricalColors}: colors to be used to graph the chart.
- {@link ODSChartsThemeOptions.cssTheme}: optionally indicates an external theme to be used like boosted.
- {@link ODSChartsThemeOptions.lineStyle}: style of line in lineCharts.
- {@link ODSChartsThemeOptions.mode}: fixes the light or dark mode.

### Graph features

Additional features can be added calling methods on {@link ODSChartsTheme}:

- {@link ODSChartsTheme.externalizeLegends}: to add Orange Design System theme to legends.
- {@link ODSChartsTheme.externalizePopover}: to add Orange Design System theme to popover or tooltip.
- {@link ODSChartsTheme.manageChartResize}`: to dynamically adapt graph size to its container.

The {@link ODSChartsTheme} is used to build the ODS theme and the charts options.

## Examples

```html
<html lang="en">
  <head>
    <script type="text/javascript" src="<...>ods-charts.js"></script>
    <script src=" https://cdn.jsdelivr.net/npm/echarts@latest/dist/echarts.min.js "></script>
  </head>
  <body>
    <div id="chart1" style="width: 800px; height: 400px"></div>
    <div id="chart1_legends"></div>
    <script>
      var lineChartODSTheme = ODSCharts.getThemeManager();
      echarts.registerTheme(lineChartODSTheme.name, lineChartODSTheme.theme);

      const chart1 = echarts.init(document.getElementById('chart1'), lineChartODSTheme.name, {
        renderer: 'svg',
      });
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
          .manageThemeObserver(chart1)
          .getChartOptions()
      );
    </script>
  </body>
</html>
```

<a href="/examples/">See more online dynamic examples</a>

## Copyright and license

Code released under the MIT License.

<script>
  if (document.location.href.endsWith('/api'))   {
    document.location.href = document.location.href + '/'
  }
</script>
