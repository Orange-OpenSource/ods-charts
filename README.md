<h1 align="center">Orange Design System Charts</h1>

<p align="center">
  ODS Charts provides Orange Charts components to developers.
  <br>
  <a href="https://ods-charts.netlify.app/"><strong>Visit ODS Charts documentation</strong></a>
  <br>
  <br>
  <a href="https://github.com/Orange-OpenSource/ods-charts/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/Orange-OpenSource/ods-charts/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)


## Quick start for users
The ODS Chart library is to be used with Apache ECharts to produce charts in line with the Orange Design System.

It has been designed to be minimally intrusive and not to interfere with the use of the Apchae Echarts library. The Apache Echarts documentation remains the reference for configuring graphics.

For example, an Apache Echarts user will initialize a graph with code like this:
```
var div = document.getElementById('barLine_chart');
var myChart = echarts.init(div, undefined, {
  renderer: 'svg', // we prefer svg renderer
});
// Display the chart.
myChart.setOption(dataOptions);
```

Adding the theme managed by ODS Charts will then consist of doing:
```
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  // you can configure here some optional options
});

// register this theme to echarts
echarts.registerTheme(themeManager.name , themeManager.theme);

var div = document.getElementById('barLine_chart');
var myChart = echarts.init(div, 
  themeManager.name,  // initialized the chart with the generated theme 
  {
    renderer: 'svg', // we still prefer svg renderer
  }
);

// Enriched dataOptions to complete implementation of the Orange Design System.
myChart.setOption(themeManager.getChartOptions(dataOptions));  

```
The `themeManager` returned by `getThemeManager()` can be used to add other features supported by the ODS Charts library. Please refer to [the online documentation for more details](https://ods-charts.netlify.app/). 

## Quick start for contributors

Several quick start options are available:

- Clone the repo: `git clone https://github.com/Orange-OpenSource/ods-charts.git`
- Install with [npm](https://www.npmjs.com/): `npm install ods-charts`

Read the [documentation](https://ods-charts.netlify.app/) for information on the library content and examples.

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/3df609fb-4f36-4c09-ba31-284e261f2d8d/deploy-status)](https://app.netlify.com/sites/ods-charts/deploys)
[![npm version](https://img.shields.io/npm/v/ods-charts?logo=npm&logoColor=fff)](https://www.npmjs.com/package/ods-charts)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Orange-OpenSource/ods-charts/blob/main/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Orange-OpenSource/ods-charts/issues/new/choose).

## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/ods-charts/blob/main/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Please refer to the [developer guide](https://github.com/Orange-OpenSource/ods-charts/blob/main/DEVELOP.md) for information on how to build the library.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, ODS Charts is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/ods-charts/releases) for changelogs for each release version of ODS Charts.

## Copyright and license

Code released under the MIT License.
