function colorIsDark(bgColor) {
  let color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  let r = parseInt(color.substring(0, 2), 16); // hexToR
  let g = parseInt(color.substring(2, 4), 16); // hexToG
  let b = parseInt(color.substring(4, 6), 16); // hexToB
  let uicolors = [r / 255, g / 255, b / 255];
  let c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  let L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L <= 0.179;
}

function displayColorSet(containerId, colorSet, colorSetLabel) {
  const theme = ODSCharts.getThemeManager({ colors: ODSCharts.ODSChartsColorsSet[colorSet], cssSelector: '#' + containerId + colorSet });
  const initialColors = theme.initialTheme.color;
  const colors = theme.theme.color;

  document.getElementById(containerId + colorSet).innerHTML = `
  ${initialColors
    .map((color, index) => {
      const textColor = colorIsDark(colors[index]) ? 'var(--bs-white)' : 'var(--bs-black)';

      return `
     <div style="color: ${textColor}; background-color: ${colors[index]}" class="pt-3 px-2 mb-2">
  <p class="h5 text-center">
    <span>Index ${index}</span>
    </p>
    <div class="text-start" style="font-size: smaller;">${color}</div>
    <div class="text-end pb-1">${colors[index]}</div>
</div>
    `;
    })
    .join('')}

    `;

  if (colorSetLabel) {
    document
      .getElementById(containerId + colorSet)
      .closest('.card-body')
      .querySelector('h3').innerHTML = colorSetLabel + ' (' + colors.length + ')';
  }
}

function displayAllColorSets(divId) {
  var sets = [
    ['DEFAULT', 'Default colors'],
    ['CATEGORICAL', 'Categorical colors'],
    ['FUNCTIONAL', 'Functional'],
    ['SUPPORTING_COLORS', 'Supporting colors'],
    ['LIGHTER_TINTS', 'Lighter tints'],
    ['DARKER_TINTS', 'Darker tints'],
    ['SEQUENTIAL_BLUE', 'Blue'],
    ['SEQUENTIAL_GREEN', 'Green'],
    ['SEQUENTIAL_PINK', 'Pink'],
    ['SEQUENTIAL_PURPLE', 'Purple'],
    ['SEQUENTIAL_YELLOW', 'Yellow'],
    ['OUDS_SEQUENTIAL_BLUE', '[OUDS] Blue'],
    ['OUDS_SEQUENTIAL_GREEN', '[OUDS] Green'],
    ['OUDS_SEQUENTIAL_PINK', '[OUDS] Pink'],
    ['OUDS_SEQUENTIAL_PURPLE', '[OUDS] Purple'],
    ['OUDS_SEQUENTIAL_YELLOW', '[OUDS] Yellow'],
    ['OUDS_CATEGORICAL', '[OUDS] Categorical'],
    ['OUDS_FUNCTIONAL', '[OUDS] Functional'],
    ['OUDS_HIGHLIGHT', '[OUDS] Highlight'],
    ['OUDS_SINGLE', '[OUDS] Single'],
  ];
  document.getElementById(divId).innerHTML = sets
    .map(
      (element) => `
  <div class="col-12 col-lg-4 col-md-6 align-self-stretch py-2">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h3">${element[1]}</h3>
          <h4 class="card-subtitle">ODSCharts.<br />&nbsp;&nbsp;ODSChartsColorsSet.<br />&nbsp;&nbsp;&nbsp;&nbsp;${element[0]}</h4>
          <div id="${divId + element[0]}"></div>
        </div>
      </div>
    </div>
  `
    )
    .join('');
  sets.forEach((element) => {
    displayColorSet(divId, element[0], `${element[1]}${element[1].startsWith('[OUDS]') ? ' (Experimental)' : ''}`);
  });
}

function addThemeObserver() {
  let div = document.getElementById('container');
  if (div && MutationObserver) {
    div = div.closest('[data-bs-theme]') || undefined;
    if (div) {
      const observer = new MutationObserver(() => {
        displayAllColorSets('container');

        if ('light' === div.getAttribute('data-bs-theme')) {
          document.getElementById('containerLight').closest('.container-fluid').classList.add('d-none');
          document.getElementById('containerDark').closest('.container-fluid').classList.remove('d-none');
          document.getElementById('container').closest('.container').querySelector('h2').innerHTML = 'Default light mode theme';
        } else {
          document.getElementById('containerDark').closest('.container-fluid').classList.add('d-none');
          document.getElementById('containerLight').closest('.container-fluid').classList.remove('d-none');
          document.getElementById('container').closest('.container').querySelector('h2').innerHTML = 'Default dark mode theme';
        }
      });
      observer.observe(div, { attributes: true, childList: false, subtree: false });
    }
  }
  return div;
}
