const BOOSTED4_VERSION = '4.6.2';
const BOOSTED5_VERSION = '5.3.3';

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
    <div class="chart_title">
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
            <div class="col-md-4">
              <label for="colorSetInput" class="form-label">Colors</label>
              <select class="form-select" aria-label="Color set" id="colorSetInput" onchange="changeTheme('${id}')">
                <option value="${ODSCharts.ODSChartsColorsSet.DEFAULT}">Default colors (12)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.CATEGORICAL}">Categorical colors (12)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.FUNCTIONAL}">Functional (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS}">Supporting colors (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.LIGHTER_TINTS}">Lighter tints (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.DARKER_TINTS}">Darker tints (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE}">Blue (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_GREEN}">Green (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PINK}">Pink (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE}">Purple (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_YELLOW}">Yellow (6)</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="visualMapColorInput" class="form-label">Visual Map Colors</label>
              <select class="form-select" aria-label="Visual Map Colors" id="visualMapColorInput" onchange="changeTheme('${id}')">
                <option value="${ODSCharts.ODSChartsColorsSet.DEFAULT}">Default colors (12)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.CATEGORICAL}">Categorical colors (12)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.FUNCTIONAL}">Functional (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SUPPORTING_COLORS}">Supporting colors (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.LIGHTER_TINTS}">Lighter tints (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.DARKER_TINTS}">Darker tints (5)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_BLUE}">Blue (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_GREEN}">Green (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PINK}">Pink (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE}">Purple (6)</option>
                <option value="${ODSCharts.ODSChartsColorsSet.SEQUENTIAL_YELLOW}">Yellow (6)</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="lineStyleInput" class="form-label">Line style</label>
              <select class="form-select" id="lineStyleInput" onchange="changeTheme('${id}')">
                <option value="smooth">Smooth</option>
                <option value="broken">Broken</option>
                <option value="withPoints">Broken with points</option>
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
  var div = document.getElementById(id);

  div.innerHTML = `<iframe style="width: 100%; min-height: 60vh;"></iframe>
  <div id="configurator_${id}">
    ${generateConfigurator(id)}
  </div>
`;

  let iframeDocument = div.querySelector('iframe').contentDocument;
  // Firefox approach
  iframeDocument.open();
  iframeDocument.write(`
<link id="mainFont" href="${themeElements.BOOSTED5.css[0]}" rel="stylesheet">
<link id="mainCSS" cssThemeName="BOOSTED5" href="${themeElements.BOOSTED5.css[1]}" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js" integrity="sha384-Mx5lkUEQPM1pOJCwFtUICyX45KNojXbkWdYhkKUKsbv391mavbfoAmONbzkgYPzR" crossorigin="anonymous"></script>
<script type="text/javascript" src="../../dist/ods-charts.js"></script>
<script type="module" src="./index.js"></script>
<script id="mainJS" src="${themeElements.BOOSTED5.script[0]}"></script>
${generateChartDiv(id, direction)}`);
  iframeDocument.close();
}

async function displayChart(
  id,
  options,
  mode,
  colors,
  visualMapColor,
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
  if (!refresh) {
    generateExampleDiv(id, (!usedLegends || usedLegends === 'odscharts') && 'vertical' === legendsOrientation ? 'row' : 'column');
    let iframe = document.querySelector(`#${id} iframe`);
    while (!(iframe.contentWindow.boosted && iframe.contentWindow.ODSCharts && iframe.contentWindow.echarts)) {
      await wait(50);
    }

    if (document.querySelector('[data-bs-theme]')) {
      iframe.contentDocument.body.setAttribute('data-bs-theme', document.querySelector('[data-bs-theme]').getAttribute('data-bs-theme'));
    }
  }

  let iframe = document.querySelector(`#${id} iframe`);

  if (document.getElementById(id).dataset.initialOptions) {
    options = JSON.parse(document.getElementById(id).dataset.initialOptions);
  } else {
    document.getElementById(id).dataset.initialOptions = JSON.stringify(options);
  }
  if (!cssThemeName) {
    cssThemeName = iframe.contentWindow.ODSCharts.ODSChartsCSSThemesNames.BOOSTED5;
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

  var themeManager = iframe.contentWindow.ODSCharts.getThemeManager({
    mode,
    colors,
    visualMapColor,
    lineStyle,
    cssTheme,
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

  if (['light', 'dark'].includes(themeManager.options.mode)) {
    iframe.contentDocument.querySelector('.graph-holder').setAttribute('data-bs-theme', themeManager.options.mode);
  } else {
    iframe.contentDocument.querySelector('.graph-holder').removeAttribute('data-bs-theme');
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

  if ('odscharts' === usedLegends) {
    if (
      !(options.dataset && options.dataset.source) &&
      !(options.legend && options.legend.data) &&
      (options.series.length > 1 || (1 === options.series.length && 0 < options.series[0].data.length && options.series[0].data[0].name))
    ) {
      options.legend = {
        data: options.series.length > 1 ? options.series.map((serie, i) => 'label ' + i) : options.series[0].data.map((val) => val.name),
      };
      if ('vertical' === legendsOrientation) {
        options.legend.orient = legendsOrientation;
      }
    }
  } else {
    if (!options.legend) {
      options.legend = {};
    }
    if (options.series && 1 < options.series.length) {
      options.series.forEach((serie, index) => {
        if (!serie.name) serie.name = 'label ' + index;
      });
    }
    if ('horizontal' === legendsOrientation) {
      options.legend.orient = 'horizontal';
      options.legend.bottom = 10;
      options.legend.left = 'left';
      options.legend.padding = [0, 0, 0, 40];
    } else {
      options.legend.orient = 'vertical';
      options.legend.right = 10;
      options.legend.top = 'top';
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

  if (!legends && usedLegends === 'odscharts') {
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
    themeManager.options.mode
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
  mode: ${'ODSCharts.ODSChartsMode.' + Object.keys(iframe.contentWindow.ODSCharts.ODSChartsMode).find((key) => iframe.contentWindow.ODSCharts.ODSChartsMode[key] === themeManager.options.mode)},
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
  visualMapColor:  ${
    'ODSCharts.ODSChartsColorsSet.' +
    Object.keys(iframe.contentWindow.ODSCharts.ODSChartsColorsSet).find(
      (key) => iframe.contentWindow.ODSCharts.ODSChartsColorsSet[key] === themeManager.options.visualMapColor
    )
  },
  lineStyle: ${
    'ODSCharts.ODSChartsLineStyle.' +
    Object.keys(iframe.contentWindow.ODSCharts.ODSChartsLineStyle).find(
      (key) => iframe.contentWindow.ODSCharts.ODSChartsLineStyle[key] === themeManager.options.lineStyle
    )
  },
  cssTheme: ODSCharts.ODSChartsCSSThemes.${Object.keys(iframe.contentWindow.ODSCharts.ODSChartsCSSThemes).find((key) => key === cssThemeName)}
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
themeManager.manageChartResize(myChart, '${chartId}');${
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

    document.querySelector(`#accordion_${id} #darkModeInput option[value="${themeManager.options.mode}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #visualMapColorInput option[value="${themeManager.options.visualMapColor}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #lineStyleInput option[value="${themeManager.options.lineStyle}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #rendererInput option[value="${rendererInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverInput option[value="${popoverInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverSharedInput option[value="${popoverSharedInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverAxisInput option[value="${popoverAxisInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #popoverTemplateInput option[value="${popoverTemplateInput}"]`).setAttribute('selected', 'selected');
    document.querySelector(`#accordion_${id} #usedLegends option[value="${usedLegends}"]`).setAttribute('selected', 'selected');

    document.querySelector(`#accordion_${id} #cssTheme option[value="${cssThemeName}"]`).setAttribute('selected', 'selected');
  }

  document.querySelectorAll(`#accordion_${id} .popover-renderer`).forEach((elt) => {
    elt.style.display = iframe.contentWindow.ODSCharts.ODSChartsCSSThemesNames.NONE === cssThemeName || 'none' === popoverInput ? 'none' : 'block';
  });
  document.querySelectorAll(`#accordion_${id} .popover-config`).forEach((elt) => {
    elt.style.display = 'none' === popoverInput ? 'none' : 'block';
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
    id,
    option,
    document.querySelector(`#accordion_${id} #darkModeInput`).value,
    11 === document.querySelector(`#accordion_${id} #colorSetInput`).selectedIndex
      ? JSON.parse(document.querySelector(`#accordion_${id} #colorSetInput`).value)
      : document.querySelector(`#accordion_${id} #colorSetInput`).value,
    document.querySelector(`#accordion_${id} #visualMapColorInput`).value,
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
    if (11 === document.querySelector(`#accordion_${id} #colorSetInput`).selectedIndex) {
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
  displayChart(id, option, undefined, ODSCharts.ODSChartsColorsSet.SEQUENTIAL_PURPLE);
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
  displayChart(id, option, undefined, ODSCharts.ODSChartsColorsSet.DEFAULT, undefined, ODSCharts.ODSChartsLineStyle.BROKEN);
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
        value: Math.random() < 0.3 ? undefined : Math.round((Math.random() - 0.5) * 20 + lastValue),
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
        name: 'Serie 1',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        sampling: 'average',
        type: 'line',
      },
      {
        name: 'Serie 2',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Serie 3',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Serie 4',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Serie 5',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
      {
        name: 'Serie 6',
        data: generateData()
          .filter((oneData) => undefined !== oneData.value)
          .map((oneData) => [oneData.time, oneData.value]),
        type: 'line',
      },
    ],
  };
  displayChart(id, option, undefined, ODSCharts.ODSChartsColorsSet.DEFAULT, undefined, ODSCharts.ODSChartsLineStyle.BROKEN);
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
  displayChart(id, option, undefined, ODSCharts.ODSChartsColorsSet.DARKER_TINTS);
};

window.generateBarLineChart = async (id, horizontal = false, grouped = false, stacked = true) => {
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
      .concat([{ data: [12, 28.8956454657, 23, 15, 15, 18], type: 'line' }]),
  };
  displayChart(
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
    undefined,
    ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS
  );
};

window.generatePieChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    series: [
      {
        type: 'pie',
        label: { show: false },
        labelLine: { show: false },
        data: [
          { name: 'Label 1', value: 25 },
          { name: 'Label 2', value: 50 },
          { name: 'Label 3', value: 75 },
          { name: 'Label 4', value: 10 },
          { name: 'Label 5', value: 100 },
          { name: 'Label 6', value: 30 },
          { name: 'Label 7', value: 5 },
        ],
        label: {
          show: false,
          position: 'outside',
        },
        radius: ['0%', '95%'],
      },
    ],
  };
  displayChart(id, option, undefined, ODSCharts.ODSChartsColorsSet.DEFAULT_SUPPORTING_COLORS);
};

window.generateDonutChart = async (id) => {
  // Specify the configuration items and data for the chart
  var option = {
    series: [
      {
        type: 'pie',
        label: { show: false },
        labelLine: { show: false },
        data: [
          { name: 'Label 1', value: 25 },
          { name: 'Label 2', value: 50 },
          { name: 'Label 3', value: 75 },
          { name: 'Label 4', value: 10 },
          { name: 'Label 5', value: 100 },
          { name: 'Label 6', value: 30 },
          { name: 'Label 7', value: 5 },
        ],
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 35,
            fontWeight: 700,
            formatter: '{d}%',
          },
        },
        radius: ['80%', '95%'],
      },
    ],
  };
  displayChart(id, option, undefined, ODSCharts.ODSChartsColorsSet.DEFAULT_SUPPORTING_COLORS);
};
