function colorIsDark(bgColor) {
  let color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  let r = parseInt(color.substring(0, 2), 16); // hexToR
  let g = parseInt(color.substring(2, 4), 16); // hexToG
  let b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 <= 186;
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
    displayColorSet(divId, element[0], element[1]);
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
