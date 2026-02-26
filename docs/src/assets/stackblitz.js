import sdk from '@stackblitz/sdk';

document.querySelectorAll('.btn-edit').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const id = event.target.closest('.btn-edit').nextElementSibling?.id;
    document.getElementById(`collapse_content_2_${id}`)?.classList.add('d-block');
    document.getElementById(`${id}_viewCode`)?.classList.add('d-block');
    const htmlText = document.getElementById(`${id}_html`).innerText; // Problème pour le formatage
    let codeText = btn.getAttribute('data-additional-js') ? btn.getAttribute('data-additional-js') + '\n\n' : '';
    codeText += document.getElementById(`${id}_code`).innerText;
    codeText += btn.getAttribute('data-additional-js') ? '});' : '';
    document.getElementById(`collapse_content_2_${id}`)?.classList.remove('d-block');
    document.getElementById(`${id}_viewCode`)?.classList.remove('d-block');

    const libVersion = document.querySelector('[data-ods-charts-version]').getAttribute('data-ods-charts-version');
    const echartsVersion = document.querySelector('[data-echarts-version]').getAttribute('data-echarts-version');

    openChartsSnippet(htmlText, codeText, libVersion, echartsVersion);
  });
});

const openChartsSnippet = (htmlSnippet, jsSnippet, libVersion, echartsVersion) => {
  const project = {
    files: {
      'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!--
      Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
      Patent and Trademark Office and may be registered in certain other jurisdictions.
      Copyright © 2014 Monotype Imaging Inc. All rights reserved.
      Orange has purchased the right to use Helvetica in its websites and mobile applications.
      If you are not authorized to used it, don’t include the orange-helvetica.css
      See NOTICE.txt for more information.
    -->
    <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.7/dist/fonts/HelvNeue55_W1G.woff2" rel="preload" as="font" type="font/woff2" />
    <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.7/dist/fonts/HelvNeue75_W1G.woff2" rel="preload" as="font" type="font/woff2" />
    <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.7/dist/css/orange-helvetica.min.css" rel="stylesheet" />

    <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.7/dist/css/boosted.min.css" rel="stylesheet" />
    <title>ODS Charts example</title>

    <${'script'} src="https://cdn.jsdelivr.net/npm/echarts@${echartsVersion}/dist/echarts.min.js"></${'script'}>
    <${'script'} src="https://cdn.jsdelivr.net/npm/ods-charts@${libVersion}/dist/ods-charts.min.js"></${'script'}>
  </head>
  <body class="p-3 m-0 border-0" style="height: 65vh;">
    <!-- Example Code -->
    ${htmlSnippet}
    <!-- End Example Code -->
  </body>
</html>`,
      'index.js': jsSnippet,
    },
    title: 'ODS Charts example',
    description: `Official example from ${window.location.href}`,
    template: 'javascript',
    tags: ['ODS_Charts'],
  };

  sdk.openProject(project, { openFile: 'index.js' });
};
