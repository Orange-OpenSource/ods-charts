import 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js';

var themeElements = {
  BOOSTED5: {
    css: [
      'https://cdn.jsdelivr.net/npm/boosted@5.3.2/dist/css/boosted.min.css',
    ],
    script: [
      'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
      'https://cdn.jsdelivr.net/npm/boosted@5.3.2/dist/js/boosted.min.js',
    ],
  },
  BOOSTED4: {
    css: [
      'https://cdn.jsdelivr.net/npm/boosted@4.6.2/dist/css/boosted.min.css',
    ],
    script: [
      'https://code.jquery.com/jquery-3.5.1.slim.min.js',
      'https://cdn.jsdelivr.net/npm/boosted@4.6.2/dist/js/boosted.bundle.min.js',
    ],
  },
  NONE: {
    css: [],
    script: [],
  },
};

function buildChartDiv(id) {
  return `<div id="${id}_chart" style="width:100%; height:50vh"  class=" position-relative "></div>`;
}

async function wait(timer = 0) {
  await new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, timer);
  });
}

function generateChartDiv(id) {
  return `
  <div class="border border-light position-relative">
    <div class="chart_title">
        <h4 class="display-4 mx-3 mb-1 mt-3">Title</h4>
        <h5 class="display-5 mx-3 mb-1 mt-0">Sub-Title</h5>
    </div>
    <div id="${id}_holder">
        ${buildChartDiv(id)}
    </div>
    <div  id="${id}_legend">
    </div>
  </div>`;
}

function generateConfigurator(id, cssThemeName) {
  const accordionThemes = {
    [ODSCharts.ODSChartsCSSThemesNames.BOOSTED5]: {
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
      data-bs-target="#collapse_${itemId}" aria-expanded="false" aria-controls="collapse_${itemId}">
`,
        end: (id, itemId) => `</button>
</h2>`,
      },
      content: {
        begin: (
          id,
          itemId
        ) => `<div id="collapse_${itemId}" class="accordion-collapse collapse" 
      aria-labelledby="${itemId}" data-bs-parent="#${id}">
      <div class="accordion-body" id="body_${itemId}">`,
        end: (id, itemId) => ` </div>
      </div>`,
      },
    },
    [ODSCharts.ODSChartsCSSThemesNames.BOOSTED4]: {
      accordion: {
        begin: (id) => `<div id="${id}" role="tablist" class="accordion">`,
        end: (id) => `</div>`,
      },
      item: {
        begin: (id, itemId) => `<div class="card multi">`,
        end: (id, itemId) => `</div>`,
      },
      header: {
        begin: (
          id,
          itemId
        ) => `<div class="card-header" role="tab" id="${itemId}">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#${id}" href="#collapse_${itemId}" role="button" 
        aria-expanded="false" aria-controls="collapse_${itemId}">
`,
        end: (id, itemId) => `</a>
        </h5>
      </div>`,
      },
      content: {
        begin: (
          id,
          itemId
        ) => `<div id="collapse_${itemId}" class="collapse" role="tabpanel" aria-labelledby="${itemId}">
      <div class="card-body" id="body_${itemId}">`,
        end: (id, itemId) => `</div>
        </div>`,
      },
    },
    [ODSCharts.ODSChartsCSSThemesNames.NONE]: {
      accordion: { begin: (id) => `<div id="${id}">`, end: (id) => `</div>` },
      item: { begin: (id, itemId) => `<div>`, end: (id, itemId) => `</div>` },
      header: {
        begin: (id, itemId) => `<div id="${itemId}"><h5>`,
        end: (id, itemId) => `</h5></div>`,
      },
      content: {
        begin: (id, itemId) =>
          `<div id="collapse_${itemId}"> <div id="body_${itemId}">`,
        end: (id, itemId) => `</div></div>`,
      },
    },
  };
  return `
  ${accordionThemes[cssThemeName].accordion.begin('accordion_' + id)}
    ${accordionThemes[cssThemeName].item.begin(
      'accordion_' + id,
      'content_1_' + id
    )}
      ${accordionThemes[cssThemeName].header.begin(
        'accordion_' + id,
        'content_1_' + id
      )}
        Theme configuration
      ${accordionThemes[cssThemeName].header.end(
        'accordion_' + id,
        'content_1_' + id
      )}
      ${accordionThemes[cssThemeName].content.begin(
        'accordion_' + id,
        'content_1_' + id
      )}
        <div class="one-chart-configurator" data-chart-id="${id}">                
          <form class="row g-3">
            <div class="col-md-4">
              <label for="darkModeInput" class="form-label">Dark mode</label>
              <select class="form-select" aria-label="Dark mode" id="darkModeInput" onchange="changeTheme('${id}')">
                <option value="light" >White mode</option>
                <option value="dark">Dark mode</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="colorSetInput" class="form-label">Categorical Color</label>
              <select class="form-select" aria-label="Color set" id="colorSetInput" onchange="changeTheme('${id}')">
                <option value="${
                  ODSCharts.ODSCHartsCategoricalColorsSet
                    .DEFAULT_SUPPORTING_COLORS
                }" >Default supporting colours</option>
                <option value="${
                  ODSCharts.ODSCHartsCategoricalColorsSet.LIGHTER_TINTS
                }" >Lighter tints</option>
                <option value="${
                  ODSCharts.ODSCHartsCategoricalColorsSet.DARKER_TINTS
                }">Darker tints</option>
                <option value="${
                  ODSCharts.ODSCHartsCategoricalColorsSet.SEQUENTIAL_BLUE
                }">Blue</option>
                <option value="${
                  ODSCharts.ODSCHartsCategoricalColorsSet.SEQUENTIAL_GREEN
                }">Green</option>
                <option value="${
                  ODSCharts.ODSCHartsCategoricalColorsSet.SEQUENTIAL_PURPLE
                }">Purple</option>
              </select>
            </div>

            <div class="col-md-4">
                <label for="visualMapColorInput" class="form-label">visual Map Color</label>
                <select class="form-select" aria-label="visual Map Color" id="visualMapColorInput" onchange="changeTheme('${id}')">
                    <option value="blue" >Blue</option>
                    <option value="green" >Green</option>
                    <option value="purple" >Purple</option>
                </select>
            </div>
            
            
            <div class="col-md-4">
                <label for="lineStyleInput" class="form-label">Line style</label>
                <select class="form-select" aria-label="Line style" id="lineStyleInput" onchange="changeTheme('${id}')">
                    <option value="smooth" >Smooth</option>
                    <option value="broken" >Broken</option>
                    <option value="withPoints" >Broken with points</option>
                </select>
            </div>

            <div class="col-md-4 pt-3">
                <button  class="btn btn-primary mt-1" onclick="downloadTheme('${id}'); event.preventDefault()">Download theme</button>
            </div>
            <div class="col-12">
                <h2>Optional features</h2>
            </div>


            <div class="col-md-4">
                <label for="popoverInput" class="form-label">Popover or Tooltip</label>
                <select class="form-select" aria-label="Line style" id="popoverInput" onchange="changeTheme('${id}')">
                    <option value="none" >None</option>
                    <option value="popover" >Popover</option>
                    <option value="tooltip" >Tooltip</option>
                </select>
            </div>          

            <div class="col-md-4 popover-config">
                <label for="popoverSharedInput" class="form-label">Tooltip/Popover content</label>
                <select class="form-select" aria-label="Line style" id="popoverSharedInput" onchange="changeTheme('${id}')">
                    <option value="none" >Not shared</option>
                    <option value="shared" >Shared</option>
                </select>
            </div>

            <div class="col-md-4 popover-config">
                <label for="popoverAxisInput" class="form-label">Tooltip/Popover axis pointer</label>
                <select class="form-select" aria-label="Line style" id="popoverAxisInput" onchange="changeTheme('${id}')">
                    <option value="none" >None</option>
                    <option value="shadow" >Shadow</option>
                    <option value="line" >Line</option>
                    <option value="cross" >Cross</option>
                </select>
            </div>

            <div class="col-md-4 popover-renderer">
                <label for="popoverTemplateInput" class="form-label">Popover renderer</label>
                <select class="form-select" aria-label="Line style" id="popoverTemplateInput" onchange="changeTheme('${id}')">
                    <option value="internal" >Chartjs renderer</option>
                    <option value="external" >Boosted renderer</option>
                </select>
            </div>

            <div class="col-12">
              <h2>Global theme reference</h2>
            </div>
            <div class="col-md-4">
                <label for="cssTheme" class="form-label">Used CSS</label>
                <select class="form-select" aria-label="Line style" id="cssTheme" onchange="changeCssTheme(this.value)">
                    <option value="NONE" >NONE</option>
                    <option value="BOOSTED4" >Boosted 4</option>
                    <option value="BOOSTED5" >Boosted 5</option>
                </select>
            </div>
          </form>
        </div>
      ${accordionThemes[cssThemeName].content.end(
        'accordion_' + id,
        'content_1_' + id
      )}
    ${accordionThemes[cssThemeName].item.end(
      'accordion_' + id,
      'content_1_' + id
    )}
    ${accordionThemes[cssThemeName].item.begin(
      'accordion_' + id,
      'content_2_' + id
    )}
      ${accordionThemes[cssThemeName].header.begin(
        'accordion_' + id,
        'content_2_' + id
      )}
        View code
      ${accordionThemes[cssThemeName].header.end(
        'accordion_' + id,
        'content_2_' + id
      )}
      ${accordionThemes[cssThemeName].content.begin(
        'accordion_' + id,
        'content_2_' + id
      )}
        <div class="border border-light position-relative mt-2 p-2">
          <div class="display-5"> HTML
          </div>
          <code >
            <pre id=${id + '_html'}>
            </pre>
          </code>
        </div>
        <div class="border border-light position-relative mt-2 p-2">
          <div class="display-5"> Javascript / ODSCharts
          </div>
          <code >
            <pre id=${id + '_code'}>
            </pre>
          </code>
        </div>
      ${accordionThemes[cssThemeName].content.end(
        'accordion_' + id,
        'content_2_' + id
      )}
    ${accordionThemes[cssThemeName].item.end(
      'accordion_' + id,
      'content_2_' + id
    )}
  ${accordionThemes[cssThemeName].accordion.end('accordion_' + id)}
`;
}

function generateExampleDiv(id, cssThemeName) {
  var div = document.getElementById(id);

  div.innerHTML = `${generateChartDiv(id)}
  <div id="configurator_${id}" data-css-theme-name="${cssThemeName}">
    ${generateConfigurator(id, cssThemeName)}
  </div>
`;
}

async function displayChart(
  id,
  options,
  mode,
  categoricalColors,
  visualMapColor,
  lineStyle,
  popoverInput,
  popoverSharedInput,
  popoverAxisInput,
  popoverTemplateInput,
  cssThemeName,
  refresh = false
) {
  if (!cssThemeName) {
    cssThemeName = ODSCharts.ODSChartsCSSThemesNames.BOOSTED5;
  }
  if (!popoverInput) {
    popoverInput = 'tooltip';
  }
  if (!popoverSharedInput) {
    popoverSharedInput = 'none';
  }
  if (!popoverAxisInput) {
    popoverAxisInput = ODSCharts.ODSChartsPopoverAxisPointer.none;
  }
  let cssTheme = ODSCharts.ODSChartsCSSThemes[cssThemeName];

  var themeManager = ODSCharts.getThemeManager({
    mode,
    categoricalColors,
    visualMapColor,
    lineStyle,
    cssTheme,
  });
  cssThemeName = Object.keys(ODSCharts.ODSChartsCSSThemes).find((name) =>
    _.isEqual(ODSCharts.ODSChartsCSSThemes[name], themeManager.options.cssTheme)
  );
  if (!popoverTemplateInput) {
    popoverTemplateInput =
      ODSCharts.ODSChartsCSSThemesNames.NONE === cssThemeName
        ? 'internal'
        : 'external';
  }

  const actualTheme = document.querySelector('[data-css-theme]');
  if (
    (!actualTheme && 'NONE' !== cssThemeName) ||
    (actualTheme && cssThemeName !== actualTheme.getAttribute('data-css-theme'))
  ) {
    for (const elt of document.querySelectorAll('[data-css-theme]')) {
      elt.remove();
    }
    for (const css of themeElements[cssThemeName].css) {
      const linkElt = document.createElement('link');
      linkElt.href = css;
      linkElt.rel = 'stylesheet';
      linkElt.setAttribute('crossorigin', 'anonymous');
      linkElt.setAttribute('data-css-theme', cssThemeName);
      document.head.appendChild(linkElt);
    }
    for (const script of themeElements[cssThemeName].script) {
      const scriptElt = document.createElement('script');
      scriptElt.src = script;
      scriptElt.setAttribute('crossorigin', 'anonymous');
      scriptElt.setAttribute('data-css-theme', cssThemeName);
      document.head.appendChild(scriptElt);
    }
  }
  await wait(50);
  if (cssThemeName !== 'NONE') {
    while (!window.boosted) {
      await wait(500);
    }
    while ('BOOSTED4' === cssThemeName && typeof $ === 'undefined') {
      await wait(500);
    }
  }
  await wait(50);

  var theme = themeManager.theme;

  echarts.registerTheme(themeManager.name, theme);

  var legends = false;

  if (
    !(options.dataset && options.dataset.source) &&
    !(options.legend && options.legend.data) &&
    options.series.length > 1
  ) {
    options.legend = {
      data:
        options.series.length > 1
          ? options.series.map((serie, i) => 'label ' + i)
          : undefined,
    };
  }

  legends =
    (options.legend && options.legend.data && !options.legend.show) ||
    (options.dataset && options.dataset.source);

  var dataOptions = _.cloneDeep(options);

  var chartId = id + '_chart';
  let newCSSTheme = !refresh;
  let customColorOption = undefined;
  if (!refresh) {
    generateExampleDiv(id, cssThemeName);
  } else {
    newCSSTheme =
      document
        .getElementById('configurator_' + id)
        .getAttribute('data-css-theme-name') !== cssThemeName;
    if (newCSSTheme) {
      customColorOption = document.querySelector(
        `#configurator_${id} [data-custom-categorical-color]`
      );

      document
        .getElementById('configurator_' + id)
        .setAttribute('data-css-theme-name', cssThemeName);
      document.getElementById('configurator_' + id).innerHTML =
        generateConfigurator(id, cssThemeName);
    }
  }

  var div = document.getElementById(chartId);

  if (refresh) {
    echarts.dispose(div);
    document.getElementById(id + '_holder').innerHTML = buildChartDiv(id);
    await wait();
    div = document.getElementById(chartId);
  }

  document.getElementById(id + '_html').innerText = generateChartDiv(id);
  document.getElementById(
    id + '_code'
  ).innerText = `///////////////////////////////////////////////////
// Used data
///////////////////////////////////////////////////

// this is the data to be displayed
var dataOptions = ${JSON.stringify(options, undefined, 2)};   

///////////////////////////////////////////////////
// ODSCharts
///////////////////////////////////////////////////
// Build the theme
var themeManager = ODSCharts.getThemeManager({
  mode: ${
    'ODSCharts.ODSChartsMode.' +
    Object.keys(ODSCharts.ODSChartsMode).find(
      (key) => ODSCharts.ODSChartsMode[key] === themeManager.options.mode
    )
  },
  categoricalColors: ${
    'string' === typeof themeManager.options.categoricalColors
      ? 'ODSCharts.ODSCHartsCategoricalColorsSet.' +
        Object.keys(ODSCharts.ODSCHartsCategoricalColorsSet).find(
          (key) =>
            ODSCharts.ODSCHartsCategoricalColorsSet[key] ===
            themeManager.options.categoricalColors
        )
      : `[
      ${themeManager.options.categoricalColors.map((color) =>
        'string' === typeof color
          ? JSON.stringify(color)
          : `{"colorPalette": ${
              'ODSCharts.ODSCHartsCategoricalColorsSet.' +
              Object.keys(ODSCharts.ODSCHartsCategoricalColorsSet).find(
                (key) =>
                  ODSCharts.ODSCHartsCategoricalColorsSet[key] ===
                  color.colorPalette
              )
            }, "colorIndex": ${color.colorIndex}}`
      ).join(`,
      `)}
    ]`
  },
  visualMapColor:  ${
    'ODSCharts.ODSCHartsSequentialColorsSet.' +
    Object.keys(ODSCharts.ODSCHartsSequentialColorsSet).find(
      (key) =>
        ODSCharts.ODSCHartsSequentialColorsSet[key] ===
        themeManager.options.visualMapColor
    )
  },
  lineStyle: ${
    'ODSCharts.ODSChartsLineStyle.' +
    Object.keys(ODSCharts.ODSChartsLineStyle).find(
      (key) =>
        ODSCharts.ODSChartsLineStyle[key] === themeManager.options.lineStyle
    )
  },
  cssTheme: ODSCharts.ODSChartsCSSThemes.${Object.keys(
    ODSCharts.ODSChartsCSSThemes
  ).find((key) => key === cssThemeName)}
});

// register this theme to echarts
echarts.registerTheme(themeManager.name , themeManager.theme);

// get the chart holder and initiate it with the generated theme
var div = document.getElementById('${id}_chart');
var myChart = echarts.init(div, themeManager.name, {
  renderer: 'svg',
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
    tooltip: ${'tooltip' === popoverInput ? 'true' : 'false'},
    axisPointer: ODSCharts.ODSChartsPopoverAxisPointer.${popoverAxisInput},
  }, 
  ODSCharts.ODSChartsPopoverManagers.${
    'external' === popoverTemplateInput ? cssThemeName : 'NONE'
  }
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

  if (newCSSTheme || !refresh) {
    if ('string' === typeof themeManager.options.categoricalColors) {
      document
        .querySelector(
          `#accordion_${id} #colorSetInput option[value="${themeManager.options.categoricalColors}"]`
        )
        .setAttribute('selected', 'selected');
    } else {
      if (!customColorOption) {
        customColorOption = document.createElement('option');
        customColorOption.value = JSON.stringify(
          themeManager.options.categoricalColors
        );
        customColorOption.selected = true;
        customColorOption.setAttribute('selected', 'selected');
        customColorOption.setAttribute('data-custom-categorical-color', true);
        customColorOption.innerText = 'Custom palette';
      }
    }
    if (customColorOption) {
      document
        .querySelector(`#accordion_${id} #colorSetInput`)
        .append(customColorOption);
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
                'ODSCharts.ODSCHartsCategoricalColorsSet.' +
                Object.keys(ODSCharts.ODSCHartsCategoricalColorsSet).find(
                  (key) =>
                    ODSCharts.ODSCHartsCategoricalColorsSet[key] ===
                    color.colorPalette
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

    document
      .querySelector(
        `#accordion_${id} #darkModeInput option[value="${themeManager.options.mode}"]`
      )
      .setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #visualMapColorInput option[value="${themeManager.options.visualMapColor}"]`
      )
      .setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #lineStyleInput option[value="${themeManager.options.lineStyle}"]`
      )
      .setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #popoverInput option[value="${popoverInput}"]`
      )
      .setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #popoverSharedInput option[value="${popoverSharedInput}"]`
      )
      .setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #popoverAxisInput option[value="${popoverAxisInput}"]`
      )
      .setAttribute('selected', 'selected');
    document
      .querySelector(
        `#accordion_${id} #popoverTemplateInput option[value="${popoverTemplateInput}"]`
      )
      .setAttribute('selected', 'selected');

    document
      .querySelector(
        `#accordion_${id} #cssTheme option[value="${cssThemeName}"]`
      )
      .setAttribute('selected', 'selected');
  }

  document
    .querySelectorAll(`#accordion_${id} .popover-renderer`)
    .forEach((elt) => {
      elt.style.display =
        ODSCharts.ODSChartsCSSThemesNames.NONE === cssThemeName ||
        'none' === popoverInput
          ? 'none'
          : 'block';
    });
  document
    .querySelectorAll(`#accordion_${id} .popover-config`)
    .forEach((elt) => {
      elt.style.display = 'none' === popoverInput ? 'none' : 'block';
    });

  var myChart = echarts.init(div, themeManager.name, {
    renderer: 'svg',
  });

  themeManager.setDataOptions(options);
  if (legends) {
    themeManager.externalizeLegends(myChart, '#' + id + '_legend');
  }
  themeManager.manageChartResize(myChart, chartId);
  if ('none' !== popoverInput) {
    themeManager.externalizePopover(
      {
        enabled: 'none' !== popoverInput,
        shared: 'shared' === popoverSharedInput,
        tooltip: 'tooltip' === popoverInput,
        axisPointer: popoverAxisInput,
      },
      ODSCharts.ODSChartsPopoverManagers[
        'external' === popoverTemplateInput
          ? cssThemeName
          : ODSCharts.ODSChartsCSSThemesNames.NONE
      ]
    );
  }

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(themeManager.getChartOptions());
}

async function changeCssTheme(newCss) {
  console.log(newCss);
  const chartIds = [];
  document.querySelectorAll('.one-chart-configurator').forEach((elt) => {
    const chartId = elt.getAttribute('data-chart-id');
    chartIds.push(chartId);
    document
      .querySelector(
        `#accordion_${chartId} #cssTheme option[value="${newCss}"]`
      )
      .setAttribute('selected', 'selected');
    document.querySelector(
      `#accordion_${chartId} #cssTheme option[value="${newCss}"]`
    ).value = newCss;
  });
  for (const chartId of chartIds) {
    await changeTheme(chartId);
  }
}

async function changeTheme(id) {
  var { option } = JSON.parse(document.getElementById(id).dataset.odsExample);
  displayChart(
    id,
    option,
    document.querySelector(`#accordion_${id} #darkModeInput`).value,
    6 ===
      document.querySelector(`#accordion_${id} #colorSetInput`).selectedIndex
      ? JSON.parse(
          document.querySelector(`#accordion_${id} #colorSetInput`).value
        )
      : document.querySelector(`#accordion_${id} #colorSetInput`).value,
    document.querySelector(`#accordion_${id} #visualMapColorInput`).value,
    document.querySelector(`#accordion_${id} #lineStyleInput`).value,
    document.querySelector(`#accordion_${id} #popoverInput`).value,
    document.querySelector(`#accordion_${id} #popoverSharedInput`).value,
    document.querySelector(`#accordion_${id} #popoverAxisInput`).value,
    document.querySelector(`#accordion_${id} #popoverTemplateInput`).value,

    document.querySelector(`#accordion_${id} #cssTheme`).value,
    true
  );
  if (document.querySelector('#view_custom_color_' + id)) {
    if (
      6 ===
      document.querySelector(`#accordion_${id} #colorSetInput`).selectedIndex
    ) {
      document
        .querySelector('#view_custom_color_' + id)
        .classList.remove('d-none');
    } else {
      document
        .querySelector('#view_custom_color_' + id)
        .classList.add('d-none');
    }
  }
}
window.changeTheme = changeTheme;
window.changeCssTheme = changeCssTheme;

function downloadTheme(id) {
  var { themeManager } = JSON.parse(
    document.getElementById(id).dataset.odsExample
  );

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
  displayChart(
    id,
    option,
    undefined,
    ODSCharts.ODSCHartsCategoricalColorsSet.SEQUENTIAL_PURPLE
  );
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
    ],
  };
  displayChart(
    id,
    option,
    undefined,
    ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
    undefined,
    ODSCharts.ODSChartsLineStyle.BROKEN
  );
};

window.generateBarChart = async (
  id,
  horizontal = false,
  grouped = false,
  stacked = false
) => {
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
            colorPalette: ODSCharts.ODSCHartsCategoricalColorsSet.DARKER_TINTS,
            colorIndex: 0,
          },
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
            colorIndex: 0,
          },
          {
            colorPalette: ODSCharts.ODSCHartsCategoricalColorsSet.LIGHTER_TINTS,
            colorIndex: 0,
          },
        ]
      : grouped
      ? [
          {
            colorPalette: ODSCharts.ODSCHartsCategoricalColorsSet.DARKER_TINTS,
            colorIndex: 0,
          },
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
            colorIndex: 0,
          },
        ]
      : horizontal
      ? [
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
            colorIndex: 1,
          },
        ]
      : [
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
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
  displayChart(
    id,
    option,
    undefined,
    ODSCharts.ODSCHartsCategoricalColorsSet.DARKER_TINTS
  );
};

window.generateBarLineChart = async (
  id,
  horizontal = false,
  grouped = false,
  stacked = true
) => {
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
    //ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS
    grouped
      ? [
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
            colorIndex: 1,
          },
          {
            colorPalette: ODSCharts.ODSCHartsCategoricalColorsSet.LIGHTER_TINTS,
            colorIndex: 1,
          },
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.SEQUENTIAL_PURPLE,
            colorIndex: 0,
          },
        ]
      : [
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.DEFAULT_SUPPORTING_COLORS,
            colorIndex: 2,
          },
          {
            colorPalette:
              ODSCharts.ODSCHartsCategoricalColorsSet.SEQUENTIAL_GREEN,
            colorIndex: 0,
          },
        ],
    undefined,
    ODSCharts.ODSChartsLineStyle.BROKEN_WITH_POINTS
  );
};
