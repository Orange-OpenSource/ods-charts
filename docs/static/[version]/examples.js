const BOOSTED4_VERSION = '4.6.2';
const BOOSTED5_VERSION = '5.3.3';

var initialOptions = {};

var themeElements = {
  BOOSTED5: {
    css: [
      `https://cdn.jsdelivr.net/npm/boosted@${BOOSTED5_VERSION}/dist/css/orange-helvetica.min.css`,
      `https://cdn.jsdelivr.net/npm/boosted@${BOOSTED5_VERSION}/dist/css/boosted.min.css`,
    ],
    script: [`https://cdn.jsdelivr.net/npm/boosted@${BOOSTED5_VERSION}/dist/js/boosted.bundle.min.js`],
  },
  BOOSTED4: {
    css: [
      `https://cdn.jsdelivr.net/npm/boosted@${BOOSTED4_VERSION}/dist/css/orangeHelvetica.min.css`,
      `https://cdn.jsdelivr.net/npm/boosted@${BOOSTED4_VERSION}/dist/css/boosted.min.css`,
    ],
    script: [`https://cdn.jsdelivr.net/npm/boosted@${BOOSTED4_VERSION}/dist/js/boosted.bundle.min.js`, `https://code.jquery.com/jquery-3.5.1.slim.min.js`],
  },
  NONE: {
    css: [],
    script: [],
  },
};

// Generate examples
function buildChartDiv(id) {
  return `<div id="${id}_chart" style="width:100%; height:100%; position: relative;"></div>`;
}

async function wait(timer = 0) {
  await new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, timer);
  });
}

function generateChartDiv(id, direction, mode) {
  return `
  <div class="border ods-charts-context graph-holder"${['dark', 'light'].includes(mode) ? ' data-bs-theme="' + mode + '"' : ''}
    style="display: flex; flex-direction: column; height: 100%; --bs-border-color: var(--bs-border-color-subtle);">
    <div class="chart_title mx-3">
      <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
      <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
    </div>

    <div id="${id}_holder_with_legend" style="flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: ${direction};">
      <div id="${id}_holder" style="flex-grow: 1; flex-shrink: 1;">
        ${buildChartDiv(id)}
      </div>
      <div id="${id}_legend" style="min-width: 150px;"></div>
    </div>
  </div>`;
}

function generateConfigurator(id) {
  const accordionThemes = {
    accordion: {
      begin: (id) => `<div class="accordion" id="${id}">`,
      end: (id) => `</div>`,
    },
    item: {
      begin: (id, itemId) => `<div class="accordion-item">`,
      end: (id, itemId) => `</div>`,
    },
    header: {
      begin: (id, itemId) => `<h2 class="accordion-header" id="${itemId}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
    data-bs-target="#collapse_${itemId}" aria-expanded="false" aria-controls="collapse_${itemId}">`,
      end: (id, itemId) => `</button>
</h2>`,
    },
    content: {
      begin: (id, itemId) => `<div id="collapse_${itemId}" class="accordion-collapse collapse"
    aria-labelledby="${itemId}" data-bs-parent="#${id}">
    <div class="accordion-body" id="body_${itemId}">`,
      end: (id, itemId) => `</div>
    </div>`,
    },
  };
  return `
  ${accordionThemes.accordion.begin('accordion_' + id)}
    ${accordionThemes.item.begin('accordion_' + id, 'content_1_' + id)}
      ${accordionThemes.header.begin('accordion_' + id, 'content_1_' + id)}
        Theme configuration
      ${accordionThemes.header.end('accordion_' + id, 'content_1_' + id)}
      ${accordionThemes.content.begin('accordion_' + id, 'content_1_' + id)}
        <div class="one-chart-configurator" data-chart-id="${id}">
          <form class="row g-3">
            <div class="col-md-4">
              <label for="darkModeInput" class="form-label">Dark mode</label>
              <select class="form-select" aria-label="Dark mode" id="darkModeInput" onchange="changeTheme('${id}')">
                <option value="default">Default mode</option>
                <option value="light">White mode</option>
                <option value="dark">Dark mode</option>
              </select>
            </div>
            <div class="col-md-4 color-config">
              <label for="colorSetInput" class="form-label">Colors</label>
              <select class="form-select" aria-label="Color set" id="colorSetInput" onchange="changeTheme('${id}')">
                <option value="${ODSCharts.ODSChartsColorsSet.DEFAULT}">[ODS] Default colors (12)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.CATEGORICAL}">[ODS] Categorical colors (12)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.FUNCTIONAL}">[ODS] Functional (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS}">[ODS] Supporting colors (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.LIGHTER_TINTS}">[ODS] Lighter tints (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.DARKER_TINTS}">[ODS] Darker tints (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE}">[ODS] Blue (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_GREEN}">[ODS] Green (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PINK}">[ODS] Pink (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE}">[ODS] Purple (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_YELLOW}">[ODS] Yellow (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_BLUE}">[OUDS] Blue (9)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_GREEN}">[OUDS] Green (9)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_PINK}">[OUDS] Pink (9)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_PURPLE}">[OUDS] Purple (9)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_YELLOW}">[OUDS] Yellow (9)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_CATEGORICAL}">[OUDS] Categorical (10)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_FUNCTIONAL}">[OUDS] Functional (3)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_HIGHLIGHT}">[OUDS] Highlight (2)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.OUDS_SINGLE}">[OUDS] Single (6)</option>
              </select>
            </div>

            <div class="col-md-4 line-style-config">
              <label for="lineStyleInput" class="form-label">Line style</label>
              <select class="form-select" id="lineStyleInput" onchange="changeTheme('${id}')">
                <option value="smooth">Smooth</option>
                <option value="broken">Broken</option>
                <option value="brokenWithPoints">Broken with points</option>
                <option value="smoothWithPoints">Smooth with points</option>
                <option value="points">Only points</option>
              </select>
            </div>

            <div class="col-md-4 pt-3">
              <button  class="btn btn-primary mt-1" onclick="downloadTheme('${id}'); event.preventDefault()">Download theme</button>
            </div>
            <div class="col-12">
              <h2>Optional features</h2>
            </div>

            <div class="col-md-4">
              <label for="rendererInput" class="form-label">SVG (recommended) or Canvas (<a href="https://echarts.apache.org/handbook/en/best-practices/canvas-vs-svg/" target="apache_doc">See Apache ECharts documentation</a>)</label>
              <select class="form-select" id="rendererInput" onchange="changeTheme('${id}')">
                <option value="svg">SVG</option>
                <option value="canvas">Canvas</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="popoverInput" class="form-label">Popover or Tooltip</label>
              <select class="form-select" id="popoverInput" onchange="changeTheme('${id}')">
                <option value="none">None</option>
                <option value="popover">Popover</option>
                <option value="tooltip">Tooltip</option>
                <option value="enterable">Enterable tooltip</option>
              </select>
            </div>

            <div class="col-md-4 popover-config">
              <label for="popoverSharedInput" class="form-label">Tooltip/Popover content</label>
              <select class="form-select" id="popoverSharedInput" onchange="changeTheme('${id}')">
                <option value="none">Not shared</option>
                <option value="shared">Shared</option>
              </select>
            </div>

            <div class="col-md-4 popover-config">
              <label for="popoverAxisInput" class="form-label">Tooltip/Popover axis pointer</label>
              <select class="form-select" id="popoverAxisInput" onchange="changeTheme('${id}')">
                <option value="none">None</option>
                <option value="shadow">Shadow</option>
                <option value="line">Line</option>
                <option value="cross">Cross</option>
              </select>
            </div>

            <div class="col-md-4 popover-renderer">
              <label for="popoverTemplateInput" class="form-label">Popover renderer</label>
              <select class="form-select" id="popoverTemplateInput" onchange="changeTheme('${id}')">
                <option value="internal">Apache ECharts renderer</option>
                <option value="external">Boosted renderer</option>
              </select>
            </div>

            <div class="col-md-4 legends-style">
                <label for="usedLegends" class="form-label">Legends</label>
                <select class="form-select" id="usedLegends" onchange="changeTheme('${id}')">
                    <option value="echarts">Apache ECharts legend</option>
                    <option value="odscharts">ODS Charts legend</option>
                </select>
            </div>

            <div class="col-md-4 legends-style">
              <label for="legendsOrientation" class="form-label">Legends orientation</label>
              <select class="form-select" id="legendsOrientation" onchange="changeTheme('${id}')">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>

            <div class="col-12">
              <h2>Global theme reference</h2>
            </div>
            <div class="col-md-4">
              <label for="cssTheme" class="form-label">Used CSS</label>
              <select class="form-select" id="cssTheme" onchange="changeTheme('${id}')">
                <option value="NONE">NONE</option>
                <option value="BOOSTED4">Boosted 4</option>
                <option value="BOOSTED5">Boosted 5</option>
              </select>
            </div>
          </form>
        </div>
      ${accordionThemes.content.end('accordion_' + id, 'content_1_' + id)}
    ${accordionThemes.item.end('accordion_' + id, 'content_1_' + id)}
    ${accordionThemes.item.begin('accordion_' + id, 'content_2_' + id)}
      ${accordionThemes.header.begin('accordion_' + id, 'content_2_' + id)}
        View code
      ${accordionThemes.header.end('accordion_' + id, 'content_2_' + id)}
      ${accordionThemes.content.begin('accordion_' + id, 'content_2_' + id)}
        <div class="border border-subtle position-relative mt-2 p-2">
          <div class="display-5">HTML</div>
          <code>
            <pre id=${id + '_html'}></pre>
          </code>
        </div>
        <div class="border border-subtle position-relative mt-2 p-2">
          <div class="display-5">JavaScript / ODS Charts</div>
          <code>
            <pre id=${id + '_code'}></pre>
          </code>
        </div>
      ${accordionThemes.content.end('accordion_' + id, 'content_2_' + id)}
    ${accordionThemes.item.end('accordion_' + id, 'content_2_' + id)}
  ${accordionThemes.accordion.end('accordion_' + id)}
`;
}

function generateExampleDiv(id, direction) {
  let iframeHolder = document.getElementById('iframe_' + id);
  if (!iframeHolder) {
    const div = document.getElementById(id);
    const clientHeight = div.clientHeight;
    div.innerHTML = `<div id="iframe_${id}" data-iframe-min-height="${clientHeight ? 'min-height: ' + clientHeight + 'px;' : 'min-height: 60vh;'}""></div>
  <div id="configurator_${id}">
    ${generateConfigurator(id)}
  </div>
`;
    iframeHolder = document.getElementById('iframe_' + id);
  }

  iframeHolder.innerHTML = `<iframe style="width: 100%; ${iframeHolder.getAttribute('data-iframe-min-height')}"></iframe>`;

  let iframeDocument = iframeHolder.querySelector('iframe').contentDocument;
  // Firefox approach
  iframeDocument.open();
  iframeDocument.write(`
<link id="mainFont" href="${themeElements.BOOSTED5.css[0]}" rel="stylesheet">
<link id="mainCSS" cssThemeName="BOOSTED5" href="${themeElements.BOOSTED5.css[1]}" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/echarts@6.0.0/dist/echarts.min.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="/0.4/ods-charts.js"></script>
<script type="module" src="/0.4/examples.js"></script>
<script id="mainJS" src="${themeElements.BOOSTED5.script[0]}"></script>
${generateChartDiv(id, direction)}`);
  iframeDocument.close();
}

async function displayChart(
  chartConfigMethod,
  id,
  options,
  mode,
  colors,
  lineStyle,
  rendererInput,
  popoverInput,
  popoverSharedInput,
  popoverAxisInput,
  popoverTemplateInput,
  usedLegends,
  cssThemeName,
  legendsOrientation,
  refresh = false
) {
  if (!chartConfigMethod) {
    chartConfigMethod = document.getElementById(id).getAttribute('data-chartConfigMethod');
  } else {
    document.getElementById(id).setAttribute('data-chartConfigMethod', chartConfigMethod);
  }
  if (!mode) {
    mode = 'default';
  }

  if (!cssThemeName) {
    cssThemeName = 'BOOSTED5';
  }
  let generateIFrame = !refresh;
  let iframe = document.querySelector(`#${id} iframe`);
  if (iframe) {
    // In case of theme change, we need to recreate the iframe to avoid javascript and css themes cohabitation
    const actualTheme = iframe.contentDocument.getElementById('mainCSS').getAttribute('cssThemeName');
    if (actualTheme !== cssThemeName) {
      iframe.remove();
      generateIFrame = true;
    }
  }
  if (generateIFrame) {
    generateExampleDiv(id, (!usedLegends || usedLegends === 'odscharts') && 'vertical' === legendsOrientation ? 'row' : 'column');
    iframe = document.querySelector(`#${id} iframe`);
    while (!(iframe.contentWindow.boosted && iframe.contentWindow.ODSCharts && iframe.contentWindow.echarts)) {
      await wait(50);
    }
    await loadMaps(iframe.contentWindow.echarts);

    if (document.querySelector('[data-bs-theme]')) {
      iframe.contentDocument.body.setAttribute('data-bs-theme', document.querySelector('[data-bs-theme]').getAttribute('data-bs-theme'));
    }
  }

  if (initialOptions[id]) {
    options = initialOptions[id];
  } else {
    initialOptions[id] = options;
  }

  if (!rendererInput) {
    rendererInput = 'svg';
  }
  if (!popoverInput) {
    popoverInput = 'tooltip';
  }
  if (!popoverSharedInput) {
    popoverSharedInput = 'none';
  }
  if (!popoverAxisInput) {
    popoverAxisInput = iframe.contentWindow.ODSCharts.ODSChartsPopoverAxisPointer.none;
  }
  let cssTheme = iframe.contentWindow.ODSCharts.ODSChartsCSSThemes[cssThemeName];

  if (['light', 'dark'].includes(mode)) {
    iframe.contentDocument.querySelector('.graph-holder').setAttribute('data-bs-theme', mode);
  } else {
    iframe.contentDocument.querySelector('.graph-holder').removeAttribute('data-bs-theme');
  }

  var themeManager = iframe.contentWindow.ODSCharts.getThemeManager({
    colors,
    chartConfiguration: iframe.contentWindow.ODSCharts.ODSChartsConfiguration[chartConfigMethod](
      -1 < chartConfigMethod.search(/Line/)
        ? { lineStyle }
        : 'getDialGaugeChartConfiguration' === chartConfigMethod
          ? {
              dialPoints: [
                { value: 0, label: 'A' },
                { value: 25, label: 'B' },
                { value: 50, label: 'C', beforeColor: 'var(--ouds-charts-color-functional-positive)' },
                { value: 75, label: 'D', beforeColor: 'var(--ouds-charts-color-functional-warning)' },
                { value: 100, label: 'E', beforeColor: 'var(--ouds-charts-color-functional-negative)' },
              ],
            }
          : 'getHorizontalGaugeChartConfiguration' === chartConfigMethod
            ? { minValue: 0, maxValue: 400 }
            : -1 < chartConfigMethod.search(/Gauge/)
              ? { minValue: 0, maxValue: 100 }
              : {}
    ),
    cssTheme,
    cssSelector: `#${id}_chart`,
  });

  cssThemeName = Object.keys(iframe.contentWindow.ODSCharts.ODSChartsCSSThemes).find(
    (name) => JSON.stringify(iframe.contentWindow.ODSCharts.ODSChartsCSSThemes[name]) === JSON.stringify(themeManager.options.cssTheme)
  );
  if (!popoverTemplateInput) {
    popoverTemplateInput = iframe.contentWindow.ODSCharts.ODSChartsCSSThemesNames.NONE === cssThemeName ? 'internal' : 'external';
  }
  if (!usedLegends) {
    usedLegends = 'odscharts';
  }
  if (!legendsOrientation) {
    legendsOrientation = 'horizontal';
  }

  const actualTheme = iframe.contentDocument.getElementById('mainCSS').getAttribute('cssThemeName');

  if (actualTheme !== cssThemeName) {
    iframe.contentDocument.getElementById('mainFont').href = `${themeElements[cssThemeName].css[0] || ''}`;
    iframe.contentDocument.getElementById('mainCSS').href = `${themeElements[cssThemeName].css[1] || ''}`;

    // Recreate Boosted JS script tag inside iframe
    iframe.contentDocument.head.removeChild(iframe.contentDocument.getElementById('mainJS'));
    let boostedScript = iframe.contentDocument.createElement('script');
    boostedScript.setAttribute('id', 'mainJS');
    boostedScript.setAttribute('src', `${themeElements[cssThemeName].script[0] || ''}`);

    if (actualTheme === 'BOOSTED4') {
      iframe.contentDocument.head.removeChild(iframe.contentDocument.getElementById('jQuery'));
      iframe.contentDocument.head.appendChild(boostedScript);
    }

    if (cssThemeName === 'BOOSTED4') {
      let jQueryScript = iframe.contentDocument.createElement('script');
      jQueryScript.setAttribute('id', 'jQuery');
      jQueryScript.setAttribute('src', `${themeElements.BOOSTED4.script[1]}`);
      jQueryScript.addEventListener('load', (e) => {
        iframe.contentDocument.head.appendChild(boostedScript);
      });
      iframe.contentDocument.head.appendChild(jQueryScript);
    } else {
      iframe.contentDocument.head.appendChild(boostedScript);
    }

    iframe.contentDocument.getElementById('mainCSS').setAttribute('cssThemeName', cssThemeName);
  }

  var theme = themeManager.theme;

  iframe.contentWindow.echarts.registerTheme(themeManager.name, theme);

  var legends = false;
  let hasLegend = false;

  if ('odscharts' === usedLegends) {
    if (
      !(options.dataset && options.dataset.source) &&
      !(options.legend && options.legend.data) &&
      (options.series.length > 1 || (1 === options.series.length && 0 < options.series[0].data.length && options.series[0].data[0].name))
    ) {
      if (!options.legend) {
        options.legend = {};
      }
      if (options.series.length > 1 && !options.series[0].name) {
        // If no serie has a name, we set it to "label x"
        options.legend = {
          data: options.series.length > 1 ? options.series.map((serie, i) => serie.name || 'label ' + (i + 1)) : options.series[0].data.map((val) => val.name),
        };
      }
      hasLegend = true;
    }
    if (options.legend) {
      if ('vertical' === legendsOrientation) {
        options.legend.orient = legendsOrientation;
      } else {
        delete options.legend.orient;
      }
    }
  } else {
    if (!options.legend) {
      options.legend = {};
    }
    if (options.series && 1 < options.series.length) {
      // If no serie has a name, we set it to "label x"
      options.series = options.series.map((serie, index) => {
        return { ...serie, name: serie.name || 'label ' + (index + 1) };
      });
    }
    if ('vertical' === legendsOrientation) {
      options.legend.orient = legendsOrientation;
    } else {
      delete options.legend.orient;
    }
  }

  legends =
    usedLegends === 'odscharts' &&
    ((options.legend && options.legend.data && !options.legend.show) ||
      (options.dataset && options.dataset.source) ||
      (options.series && 1 === options.series.length && 'pie' === options.series[0].type));

  if (legends && usedLegends === 'odscharts' && 'vertical' === legendsOrientation) {
    iframe.contentDocument.getElementById(id + '_holder_with_legend').style.flexDirection = 'row';
  } else {
    iframe.contentDocument.getElementById(id + '_holder_with_legend').style.flexDirection = 'column';
  }

  if ((!legends && !hasLegend && usedLegends === 'odscharts') || chartConfigMethod.search(/MapChart/)) {
    document.querySelectorAll(`#accordion_${id} .legends-style`).forEach((elt) => {
      elt.style.display = 'none';
    });
  }

  if ('enterable' === popoverInput) {
    if (!options.tooltip) {
      options.tooltip = {};
    }
    options.tooltip.enterable = true;
  } else if (options.tooltip) {
    delete options.tooltip.enterable;
  }

  var dataOptions = JSON.parse(JSON.stringify(options));

  var chartId = id + '_chart';
  let customColorOption = undefined;
  var div = iframe.contentDocument.getElementById(chartId);

  if (refresh) {
    iframe.contentWindow.echarts.dispose(div);
    iframe.contentDocument.getElementById(id + '_holder').innerHTML = buildChartDiv(id);
    await wait();
    div = iframe.contentDocument.getElementById(chartId);
  }

  document.getElementById(id + '_html').innerText = generateChartDiv(
    id,
    usedLegends === 'odscharts' && 'vertical' === legendsOrientation ? 'row' : 'column',
    mode
  );
  document.getElementById(id + '_code').innerText = `///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// this is the data to be displayed
var dataOptions = ${JSON.stringify(options, undefined, 2)};

///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  colors: ${
    'string' === typeof themeManager.options.colors
      ? 'ODSCharts.ODSChartsColorsSet.' +
        Object.keys(iframe.contentWindow.ODSCharts.ODSChartsColorsSet).find(
          (key) => iframe.contentWindow.ODSCharts.ODSChartsColorsSet[key] === themeManager.options.colors
        )
      : `[
      ${themeManager.options.colors.map((color) =>
        'string' === typeof color
          ? JSON.stringify(color)
          : `{"colorPalette": ${
              'ODSCharts.ODSChartsColorsSet.' +
              Object.keys(iframe.contentWindow.ODSCharts.ODSChartsColorsSet).find(
                (key) => iframe.contentWindow.ODSCharts.ODSChartsColorsSet[key] === color.colorPalette
              )
            }, "colorIndex": ${color.colorIndex}}`
      ).join(`,
      `)}
    ]`
  },
  chartConfiguration: ODSCharts.ODSChartsConfiguration.${chartConfigMethod}(${
    -1 < chartConfigMethod.search(/Line/)
      ? `{
    lineStyle: ODSCharts.ODSChartsLineStyle.` +
        Object.keys(iframe.contentWindow.ODSCharts.ODSChartsLineStyle).find(
          (key) =>
            iframe.contentWindow.ODSCharts.ODSChartsLineStyle[key] ===
            (themeManager.options.chartConfiguration.lineStyle ? themeManager.options.chartConfiguration.lineStyle : 'smooth')
        ) +
        `
  }`
      : 'getDialGaugeChartConfiguration' === chartConfigMethod
        ? `{
    dialPoints: [
      { value: 0, label: 'A' },
      { value: 25, label: 'B' },
      { value: 50, label: 'C', beforeColor: 'var(--ouds-charts-color-functional-positive)' },
      { value: 75, label: 'D', beforeColor: 'var(--ouds-charts-color-functional-warning)' },
      { value: 100, label: 'E', beforeColor: 'var(--ouds-charts-color-functional-negative)' },
    ],
  }`
        : 'getHorizontalGaugeChartConfiguration' === chartConfigMethod
          ? `{ minValue: 0, maxValue: 400 }`
          : -1 < chartConfigMethod.search(/Gauge/)
            ? `{ minValue: 0, maxValue: 100 }`
            : ''
  }),
  cssTheme: ODSCharts.ODSChartsCSSThemes.${Object.keys(iframe.contentWindow.ODSCharts.ODSChartsCSSThemes).find((key) => key === cssThemeName)},
  cssSelector: '#${id}_chart'
});

// register this theme to echarts
echarts.registerTheme(themeManager.name , themeManager.theme);

// get the chart holder and initiate it with the generated theme
var div = document.getElementById('${id}_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: '${rendererInput}',
});

// Set the data to be displayed.
themeManager.setDataOptions(dataOptions);${
    legends
      ? `
// Register the externalization of the legend.
themeManager.externalizeLegends(myChart, '#${id}_legend');`
      : ''
  }
// Manage window size changed
themeManager.manageChartResize(myChart, '${chartId}');
// Automatically manage data-bs-theme attribute change. Only needed if you want the
// chart to automatically react to the global light or dark theme change
themeManager.manageThemeObserver(myChart);${
    'none' !== popoverInput
      ? `
// Register the externalization of the tooltip/popup
themeManager.externalizePopover({
    enabled: ${'none' !== popoverInput ? 'true' : 'false'},
    shared: ${'shared' === popoverSharedInput ? 'true' : 'false'},
    tooltip: ${'tooltip' === popoverInput || 'enterable' === popoverInput ? 'true' : 'false'},
    axisPointer: ODSCharts.ODSChartsPopoverAxisPointer.${popoverAxisInput},
  },
  ODSCharts.ODSChartsPopoverManagers.${'external' === popoverTemplateInput ? cssThemeName : 'NONE'}
);`
      : ''
  }
// Display the chart using the configured theme and data.
myChart.setOption(themeManager.getChartOptions());
  `;

  document.getElementById(id).dataset.odsExample = JSON.stringify({
    option: dataOptions,
    themeManager,
  });

  if (!refresh) {
    if ('string' === typeof themeManager.options.colors) {
      document.querySelector(`#accordion_${id} #colorSetInput option[value="${themeManager.options.colors}"]`).setAttribute('selected', 'selected');
    } else {
      if (!customColorOption) {
        customColorOption = document.createElement('option');
        customColorOption.value = JSON.stringify(themeManager.options.colors);
        customColorOption.selected = true;
        customColorOption.setAttribute('selected', 'selected');
        customColorOption.setAttribute('data-custom-categorical-color', true);
        customColorOption.innerText = 'Custom palette';
      }
    }
    if (customColorOption) {
      document.querySelector(`#accordion_${id} #colorSetInput`).append(customColorOption);
      let custumColorDiv = document.createElement('div');
      custumColorDiv.id = 'view_custom_color_' + id;
      custumColorDiv.innerHTML = `
      <label class="mt-3 form-label">Used custom palette</label>
      <code>
      <pre id="custom_color_${id}">
      [
        ${JSON.parse(customColorOption.value).map((color) =>
          'string' === typeof color
            ? JSON.stringify(color)
            : `{"colorPalette": ${
                'ODSCharts.ODSChartsColorsSet.' +
                Object.keys(iframe.contentWindow.ODSCharts.ODSChartsColorsSet).find(
                  (key) => iframe.contentWindow.ODSCharts.ODSChartsColorsSet[key] === color.colorPalette
                )
              }, "colorIndex": ${color.colorIndex}}`
        ).join(`,
        `)}
      ]
      </pre>
      </code>
      `;
      document.querySelector(`#body_content_1_${id}`).append(custumColorDiv);
    }

    document.querySelector(`#accordion_${id} #darkModeInput option[value="${mode}"]`).setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #lineStyleInput option[value="${
          themeManager.options.chartConfiguration.lineStyle ? themeManager.options.chartConfiguration.lineStyle : 'smooth'
        }"]`
      )
      .setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #rendererInput option[value="${rendererInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverInput option[value="${popoverInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverSharedInput option[value="${popoverSharedInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverAxisInput option[value="${popoverAxisInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverTemplateInput option[value="${popoverTemplateInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #usedLegends option[value="${usedLegends}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #legendsOrientation option[value="${legendsOrientation}"]`).setAttribute('selected', 'selected');

    document.querySelector(`#accordion_${id} #cssTheme option[value="${cssThemeName}"]`).setAttribute('selected', 'selected');
  }

  document.querySelectorAll(`#accordion_${id} .popover-renderer`).forEach((elt) => {
    elt.style.display = iframe.contentWindow.ODSCharts.ODSChartsCSSThemesNames.NONE === cssThemeName || 'none' === popoverInput ? 'none' : 'block';
  });
  document.querySelectorAll(`#accordion_${id} .popover-config`).forEach((elt) => {
    elt.style.display = 'none' === popoverInput || chartConfigMethod.search(/MapChart/) ? 'none' : 'block';
  });
  document.querySelectorAll(`#accordion_${id} .line-style-config`).forEach((elt) => {
    elt.style.display = -1 === chartConfigMethod.search(/Line/) ? 'none' : 'block';
  });
  document.querySelectorAll(`#accordion_${id} .color-config`).forEach((elt) => {
    elt.style.display = 'getDialGaugeChartConfiguration' === chartConfigMethod ? 'none' : 'block';
  });

  var myChart = iframe.contentWindow.echarts.init(div, themeManager.name, {
    renderer: rendererInput,
  });

  themeManager.setDataOptions(options);
  if (legends) {
    themeManager.externalizeLegends(myChart, `#${id}_legend`);
  } else {
    iframe.contentDocument.getElementById(id + '_legend').innerHTML = '';
  }
  themeManager.manageChartResize(myChart, chartId);
  themeManager.manageThemeObserver(myChart);
  if ('none' !== popoverInput) {
    themeManager.externalizePopover(
      {
        enabled: 'none' !== popoverInput,
        shared: 'shared' === popoverSharedInput,
        tooltip: 'tooltip' === popoverInput || 'enterable' === popoverInput,
        axisPointer: popoverAxisInput,
      },
      iframe.contentWindow.ODSCharts.ODSChartsPopoverManagers[
        'external' === popoverTemplateInput ? cssThemeName : iframe.contentWindow.ODSCharts.ODSChartsCSSThemesNames.NONE
      ]
    );
  }

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(themeManager.getChartOptions());
}

async function changeTheme(id) {
  var { option } = JSON.parse(document.getElementById(id).dataset.odsExample);
  displayChart(
    undefined,
    id,
    option,
    document.querySelector(`#accordion_${id} #darkModeInput`).value,
    20 === document.querySelector(`#accordion_${id} #colorSetInput`).selectedIndex
      ? JSON.parse(document.querySelector(`#accordion_${id} #colorSetInput`).value)
      : document.querySelector(`#accordion_${id} #colorSetInput`).value,
    document.querySelector(`#accordion_${id} #lineStyleInput`).value,
    document.querySelector(`#accordion_${id} #rendererInput`).value,
    document.querySelector(`#accordion_${id} #popoverInput`).value,
    document.querySelector(`#accordion_${id} #popoverSharedInput`).value,
    document.querySelector(`#accordion_${id} #popoverAxisInput`).value,
    document.querySelector(`#accordion_${id} #popoverTemplateInput`).value,
    document.querySelector(`#accordion_${id} #usedLegends`).value,

    document.querySelector(`#accordion_${id} #cssTheme`).value,
    document.querySelector(`#accordion_${id} #legendsOrientation`).value,
    true
  );
  if (document.querySelector('#view_custom_color_' + id)) {
    if (20 === document.querySelector(`#accordion_${id} #colorSetInput`).selectedIndex) {
      document.querySelector('#view_custom_color_' + id).classList.remove('d-none');
    } else {
      document.querySelector('#view_custom_color_' + id).classList.add('d-none');
    }
  }
}
window.changeTheme = changeTheme;

function downloadTheme(id) {
  var { themeManager } = JSON.parse(document.getElementById(id).dataset.odsExample);

  const filename = `${themeManager.name}.json`;

  const blob = new Blob([JSON.stringify(themeManager.theme, undefined, 2)], {
    type: 'json;',
  });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
window.downloadTheme = downloadTheme;

window.generateSingleLineChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28.8956454657, 23, 19, 15],
        type: 'line',
      },
    ],
  };
  displayChart('getLineChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE);
};

window.generateMultipleLineChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yAxis: {},
    series: [
      { data: [10, 22, 28.8956454657, 23, 19, 15], type: 'line' },
      { data: [28.8956454657, 23, 19, 15, 18, 12], type: 'line' },
      { data: [19, 15, 18, 12, 28.8956454657, 23], type: 'line' },
      { data: [12, 28.8956454657, 23, 15, 15, 18], type: 'line' },
      { data: [10, 13, 23, 22, 21, 15], type: 'line' },
      { data: [15, 14, 23, 21, 22, 10], type: 'line' },
      { data: [23, 22, 10, 23, 21, 15], type: 'line' },
      { data: [24, 19, 17, 26, 20, 30], type: 'line' },
      { data: [19, 17, 26, 20, 30, 24], type: 'line' },
      { data: [26, 26, 12, 14, 10, 20], type: 'line' },
      { data: [19, 26, 20, 30, 24, 17], type: 'line' },
      { data: [26, 12, 14, 10, 20, 26], type: 'line' },
    ],
  };
  displayChart('getLineChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.DEFAULT, ODSCharts.ODSChartsLineStyle.BROKEN);
};

window.generateTimeSeriesLineChart = async (id) => {
  // Specify the configuration items and data for the chart
  const NB_POINTS = 1000;
  const generateDate = () => {
    const date = [new Date(1993, 9, 3)];
    let base = date[0].getTime();
    const oneDay = 24 * 3600 * 1000;
    for (var i = 1; i < NB_POINTS; i++) {
      const now = new Date((base += oneDay * 2 * Math.random()));
      date.push(now);
    }
    return date;
  };
  const dates = generateDate();
  const generateData = () => {
    const dataDates = dates;
    const data = [{ time: dataDates[0], value: Math.random() * 300 }];
    let lastValue = data[0].value;
    for (var i = 1; i < NB_POINTS; i++) {
      data.push({
        time: dataDates[i],
        value: Math.random() < 0.4 ? undefined : Math.max(0, Math.round((Math.random() - 0.5) * 20 + lastValue)),
      });
      lastValue = undefined !== data[data.length - 1].value ? data[data.length - 1].value : lastValue;
    }
    return data;
  };

  var option = {
    xAxis: {
      type: 'time',
      boundaryGap: false,
    },
    yAxis: {},
    series: [
      {
        name: 'Label 1',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        sampling: 'average',
        type: 'line',
      },
      {
        name: 'Label 2',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Label 3',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Label 4',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Label 5',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Label 6',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
    ],
  };
  displayChart('getLineChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.DEFAULT, ODSCharts.ODSChartsLineStyle.BROKEN);
};

window.generateBarChart = async (id, horizontal = false, grouped = false, stacked = false) => {
  // Specify the configuration items and data for the chart
  var option = {
    [horizontal ? 'yAxis' : 'xAxis']: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    [horizontal ? 'xAxis' : 'yAxis']: {},
    series: [
      {
        data: [10, 22, 28.8956454657, 23, 19, 15],
        type: 'bar',
        stack: stacked ? true : undefined,
      },
    ]
      .concat(
        grouped
          ? [
              {
                data: [28.8956454657, 23, 19, 15, 18, 12],
                type: 'bar',
                stack: stacked ? true : undefined,
              },
            ]
          : []
      )
      .concat(
        stacked
          ? [
              {
                data: [19, 15, 18, 12, 28.8956454657, 23],
                type: 'bar',
                stack: stacked ? true : undefined,
              },
            ]
          : []
      ),
  };
  displayChart(
    'getBarChartConfiguration',
    id,
    option,
    undefined,
    stacked
      ? [
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
            colorIndex: 0,
          },
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS,
            colorIndex: 0,
          },
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.LIGHTER_TINTS,
            colorIndex: 0,
          },
        ]
      : grouped
        ? [
            {
              colorPalette: ODSCharts.ODSChartsColorsSet.DARKER_TINTS,
              colorIndex: 0,
            },
            {
              colorPalette: ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS,
              colorIndex: 0,
            },
          ]
        : horizontal
          ? [
              {
                colorPalette: ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS,
                colorIndex: 1,
              },
            ]
          : [
              {
                colorPalette: ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS,
                colorIndex: 3,
              },
            ]
  );
};

window.generateDatasetBarChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide a set of data.
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
    },
    // Declare an x-axis (category axis).
    // The category map the first column in the dataset by default.
    xAxis: { type: 'category' },
    // Declare a y-axis (value axis).
    yAxis: {},
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };
  displayChart('getBarChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.DARKER_TINTS);
};

window.generateBarLineChart = async (id, horizontal = false, grouped = false, stacked = true, dualAxis = false) => {
  // Specify the configuration items and data for the chart
  var option = {
    [horizontal ? 'yAxis' : 'xAxis']: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    [horizontal ? 'xAxis' : 'yAxis']: dualAxis
      ? [
          {
            type: 'value',
            name: 'Quantité',
            position: 'left',
          },
          {
            type: 'value',
            name: 'Pourcentage',
            position: 'right',
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ]
      : {},
    series: [
      {
        name: 'Quantité',
        data: [120, 200, 150, 180, 230, 190],
        type: 'bar',
        stack: stacked ? true : undefined,
        yAxisIndex: 0,
      },
    ]
      .concat(
        grouped
          ? [
              {
                data: [28.8956454657, 23, 19, 15, 18, 12],
                type: 'bar',
                stack: stacked ? true : undefined,
                yAxisIndex: 0,
              },
            ]
          : []
      )
      .concat([
        {
          name: 'Taux de croissance',
          data: [15, 25, 18, 22, 28, 20],
          type: 'line',
          yAxisIndex: dualAxis ? 1 : 0,
          symbol: 'circle',
          symbolSize: 8,
        },
      ]),
  };
  displayChart(
    'getLineAndBarChartConfiguration',
    id,
    option,
    undefined,
    //ODSCharts.ODSChartsColorsSet.DEFAULT
    grouped
      ? [
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS,
            colorIndex: 1,
          },
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.LIGHTER_TINTS,
            colorIndex: 1,
          },
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE,
            colorIndex: 0,
          },
        ]
      : [
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS,
            colorIndex: 2,
          },
          {
            colorPalette: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_GREEN,
            colorIndex: 0,
          },
        ],

    ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS
  );
};

window.generatePieChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Label 1', value: 25 },
          { name: 'Label 2', value: 50 },
          { name: 'Label 3', value: 75 },
          { name: 'Label 4', value: 10 },
          { name: 'Label 5', value: 100 },
          { name: 'Label 6', value: 30 },
          { name: 'Label 7', value: 5 },
        ],
      },
    ],
  };
  displayChart(
    'getPieChartConfiguration',
    id,
    option,
    undefined,
    ODSCharts.ODSChartsColorsSet.DEFAULT_SUPPORTING_COLORS,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'vertical'
  );
};

window.generateDonutChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Label 1', value: 25 },
          { name: 'Label 2', value: 50 },
          { name: 'Label 3', value: 75 },
          { name: 'Label 4', value: 10 },
          { name: 'Label 5', value: 100 },
          { name: 'Label 6', value: 30 },
          { name: 'Label 7', value: 5 },
        ],
      },
    ],
  };
  displayChart(
    'getDonutChartConfiguration',
    id,
    option,
    undefined,
    ODSCharts.ODSChartsColorsSet.DEFAULT_SUPPORTING_COLORS,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'vertical'
  );
};

window.generateGaugeChart = async (id, circular = false, dial = false) => {
  // Specify the configuration items and data for the chart
  var option = {
    series: [
      {
        type: 'gauge',
        data: [
          {
            value: 40,
          },
        ],
      },
    ],
  };
  displayChart(
    dial ? 'getDialGaugeChartConfiguration' : circular ? 'getCircularGaugeChartConfiguration' : 'getSemiCircularGaugeChartConfiguration',
    id,
    option,
    undefined,
    [{ colorPalette: ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE, colorIndex: 1 }],
    undefined,
    undefined,
    'none'
  );
};

window.generateHorizontalGaugeChart = async (id) => {
  const barData = [
    {
      value: 250,
    },
  ];
  // Specify the configuration items and data for the chart
  var option = {
    yAxis: {
      data: ['Data'],
    },
    series: [
      {
        type: 'bar',
        data: barData,
      },
    ],
  };
  displayChart('getHorizontalGaugeChartConfiguration', id, option, undefined, [{ colorPalette: ODSCharts.ODSChartsColorsSet.OUDS_CATEGORICAL, colorIndex: 4 }]);
};

// const worldMap = async () => {
//   // TODO: License
// 1Mo
// License: https://mapsvg.com/maps/world
//   return await fetch(`/0.4/images/maps/world.svg`).then((response) => response.text());
// };

// 1Mo: https://raw.githubusercontent.com/apache/echarts-website/refs/heads/asf-site/examples/data/asset/geo/world.json
// No License so far
const worldMap = async () => {
  return await fetch('/0.4/images/maps/world.geo.json').then((response) => response.json());
};

// 250Ko
// License: Unlicense
// const worldMap = async () => {
//   return await fetch('https://raw.githubusercontent.com/johan/world.geo.json/refs/heads/master/countries.geo.json').then((response) => response.json());
// };

// 14Mo
// License: https://opendatacommons.org/licenses/pddl/1-0/
// const worldMap = async () => {
//   return await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson').then((response) => response.json());
// };

// License to ask for the 2 following
const franceDeps = async () => {
  return await fetch('https://raw.githubusercontent.com/gregoiredavid/france-geojson/refs/heads/master/departements-version-simplifiee.geojson')
    .then((response) => response.json())
    .then((json) => JSON.parse(JSON.stringify(json).replaceAll('nom', 'name')));
};

const franceRegions = async () => {
  // https://adresse.data.gouv.fr/data/contours-administratifs/latest/geojson/regions-1000m.geojson
  return await fetch('https://raw.githubusercontent.com/gregoiredavid/france-geojson/refs/heads/master/regions-version-simplifiee.geojson')
    .then((response) => response.json())
    .then((json) => JSON.parse(JSON.stringify(json).replaceAll('nom', 'name')));
};

const loadMaps = async (echarts) => {
  let worldMapGeoJson = await worldMap();
  // let franceDepsGeoJson = await franceDeps();
  let franceRegionsGeoJson = await franceRegions();

  // Register the map with ECharts if loaded
  if (worldMapGeoJson && typeof echarts !== 'undefined') {
    // echarts.registerMap('world', { svg: worldMapGeoJson });
    echarts.registerMap('world', worldMapGeoJson);
  }

  // if (franceDepsGeoJson && typeof echarts !== 'undefined') {
  //   echarts.registerMap('france-deps', franceDepsGeoJson);
  // }

  if (franceRegionsGeoJson && typeof echarts !== 'undefined') {
    echarts.registerMap('france-regions', franceRegionsGeoJson);
  }
};

window.generateChoroplethMapChart = async (id) => {
  // Sample data for choropleth map - using world map (built-in)
  const mapData = [
    { name: 'China', value: 1380 },
    { name: 'India', value: 1370 },
    { name: 'United States', value: 329 },
    { name: 'Indonesia', value: 264 },
    { name: 'Brazil', value: 211 },
    { name: 'Pakistan', value: 197 },
    { name: 'Nigeria', value: 196 },
    { name: 'Bangladesh', value: 164 },
    { name: 'Russia', value: 146 },
    { name: 'Japan', value: 126 },
    { name: 'Mexico', value: 128 },
    { name: 'Philippines', value: 109 },
    { name: 'Ethiopia', value: 105 },
    { name: 'Egypt', value: 99 },
    { name: 'Vietnam', value: 96 },
    { name: 'Germany', value: 83 },
    { name: 'Turkey', value: 82 },
    { name: 'Iran', value: 82 },
    { name: 'Thailand', value: 70 },
    { name: 'France', value: 67 },
    { name: 'United Kingdom', value: 66 },
    { name: 'Italy', value: 60 },
    { name: 'South Africa', value: 58 },
    { name: 'Tanzania', value: 58 },
    { name: 'Myanmar', value: 54 },
    { name: 'South Korea', value: 51 },
    { name: 'Colombia', value: 50 },
    { name: 'Kenya', value: 52 },
    { name: 'Spain', value: 47 },
    { name: 'Argentina', value: 45 },
  ];

  // Specify the configuration items and data for the chart
  var option = {
    visualMap: {
      left: 'center',
      min: 0,
      max: 1500,
      splitNumber: 6,
      text: ['High density', 'Low density'],
    },
    series: [
      {
        name: 'Population (millions)',
        type: 'map',
        map: 'world',
        data: mapData,
      },
    ],
  };

  displayChart('getChoroplethMapChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_BLUE);
};

window.generateRegionsChoroplethMapChart = async (id) => {
  // Sample data for choropleth map - using regions map (built-in)
  const mapData = [
    { name: 'Auvergne-Rhône-Alpes', value: 8260 },
    { name: 'Bourgogne-Franche-Comté', value: 2793 },
    { name: 'Bretagne', value: 3475 },
    { name: 'Centre-Val de Loire', value: 2581 },
    { name: 'Corse', value: 360 },
    { name: 'Grand Est', value: 5544 },
    { name: 'Hauts-de-France', value: 5973 },
    { name: 'Île-de-France', value: 12450 },
    { name: 'Normandie', value: 3341 },
    { name: 'Nouvelle-Aquitaine', value: 6191 },
    { name: 'Occitanie', value: 6201 },
    { name: 'Pays de la Loire', value: 3936 },
    { name: "Provence-Alpes-Côte d'Azur", value: 5241 },
  ];

  // Specify the configuration items and data for the chart
  var option = {
    visualMap: {
      min: 0,
      max: 12450,
      splitNumber: 4,
      text: ['Population (in thousands)'],
    },
    series: [
      {
        name: 'Population (thousands)',
        type: 'map',
        map: 'france-regions',
        data: mapData,
      },
    ],
  };

  displayChart('getChoroplethMapChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_BLUE);
};

window.generateBubbleMapChart = async (id) => {
  // Données des principales économies mondiales
  // Format: [longitude, latitude, PIB en trillions USD, population en millions, nom du pays]
  const bubbleData = [
    // Amérique du Nord
    [-95.7129, 37.0902, 21.43, 331, 'États-Unis'],
    [-106.3468, 56.1304, 1.74, 38, 'Canada'],
    [-102.5528, 23.6345, 1.29, 128, 'Mexique'],

    // Europe
    [10.4515, 51.1657, 3.85, 83, 'Allemagne'],
    [2.2137, 46.2276, 2.94, 65, 'France'],
    [-3.436, 55.3781, 2.83, 67, 'Royaume-Uni'],
    [12.5674, 41.8719, 2.11, 60, 'Italie'],
    [-3.7492, 40.4637, 1.39, 47, 'Espagne'],
    [19.1451, 51.9194, 0.59, 38, 'Pologne'],
    [31.1656, 48.3794, 0.2, 44, 'Ukraine'],
    [37.6173, 55.7558, 1.48, 146, 'Russie'],

    // Asie
    [104.1954, 35.8617, 14.34, 1439, 'Chine'],
    [138.2529, 36.2048, 4.94, 126, 'Japon'],
    [127.7669, 35.9078, 1.81, 52, 'Corée du Sud'],
    [77.1025, 28.7041, 3.18, 1380, 'Inde'],
    [113.9213, -0.7893, 1.16, 273, 'Indonésie'],
    [100.9925, 15.87, 0.54, 70, 'Thaïlande'],
    [108.2772, 14.0583, 0.36, 97, 'Vietnam'],
    [121.774, 12.8797, 0.38, 109, 'Philippines'],
    [101.9758, 4.2105, 0.37, 32, 'Malaisie'],
    [103.8198, 1.3521, 0.34, 6, 'Singapour'],

    // Moyen-Orient
    [53.8478, 23.4241, 0.7, 35, 'Arabie Saoudite'],
    [51.1839, 35.6892, 0.23, 83, 'Iran'],
    [35.2444, 31.0461, 0.48, 9, 'Israël'],
    [54.3773, 24.4539, 0.51, 10, 'Émirats Arabes Unis'],

    // Afrique
    [22.9375, -30.5595, 0.42, 59, 'Afrique du Sud'],
    [30.8025, 26.8206, 0.4, 102, 'Égypte'],
    [-1.0232, 7.9465, 0.07, 31, 'Ghana'],
    [37.9062, -0.0236, 0.11, 53, 'Kenya'],
    [17.8739, 13.5317, 0.05, 206, 'Nigeria'],

    // Amérique du Sud
    [-51.9253, -14.235, 1.61, 212, 'Brésil'],
    [-58.3816, -34.6037, 0.45, 45, 'Argentine'],
    [-74.2973, 4.5709, 0.31, 50, 'Colombie'],
    [-76.0152, -9.19, 0.2, 33, 'Pérou'],
    [-66.5897, -16.2902, 0.04, 12, 'Bolivie'],

    // Océanie
    [133.7751, -25.2744, 1.55, 25, 'Australie'],
    [174.886, -40.9006, 0.25, 5, 'Nouvelle-Zélande'],
  ];

  // Conversion des données pour ECharts
  const scatterData = bubbleData.map((item) => ({
    name: item[4],
    value: [item[0], item[1], item[2], item[3]], // [lng, lat, PIB, population]
    symbolSize: Math.sqrt(item[2]) * 15, // Taille basée sur le PIB
  }));

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        params = params[0];
        if (params.seriesType === 'scatter') {
          const data = params.value;
          return `
<strong>${params.name}</strong><br/>
PIB: ${data[2]} trillions USD<br/>
Population: ${data[3]} millions<br/>
Coordonnées: ${data[0].toFixed(2)}°, ${data[1].toFixed(2)}°`;
        }
        return params.name;
      },
    },
    geo: {
      map: 'world',
      zoom: 1.2,
      center: [0, 15],
    },
    grid: {
      top: 0,
      right: 100,
    },
    series: [
      {
        name: 'Pays',
        type: 'scatter',
        data: scatterData,
        symbolSize: function (val) {
          return Math.sqrt(val[2]) * 12; // Taille basée sur le PIB
        },
      },
    ],
    visualMap: {
      min: 0,
      max: 1500,
      dimension: 3, // Population (4ème valeur dans value array)
      pieces: [
        { min: 0, max: 50 },
        { min: 50, max: 100 },
        { min: 100, max: 200 },
        { min: 200, max: 800 },
        { min: 800, max: 1500 },
      ],
      text: ['Population'],
    },
  };

  displayChart('getBubbleMapChartConfiguration', id, option, undefined, ODSCharts.ODSChartsColorsSet.OUDS_SEQUENTIAL_BLUE);
};
