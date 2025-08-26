import fs from 'node:fs';
import path from 'node:path';

const version = 0.2;

function fromDir(startPath, filter, prefix = `/${version}/`) {
  const favicon = `
  <link rel="apple-touch-icon" href="${prefix}images/favicons/apple-touch-icon.png" sizes="180x180">
  <link rel="icon" href="${prefix}images/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="${prefix}images/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="manifest" href="${prefix}images/favicons/manifest.json">
  <link rel="mask-icon" href="${prefix}images/favicons/safari-pinned-tab.svg" color="#000">
  <link rel="icon" href="${prefix}images/favicons/favicon.ico">
  <meta name="msapplication-config" content="${prefix}images/favicons/browserconfig.xml">
  <meta name="theme-color" content="#000">`;
  const boosted_CSS = `<link href="${prefix}tarteaucitron-config.css" rel="stylesheet">`;
  const cookies = `
  <script src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.17.0/tarteaucitron.min.js" integrity="sha384-g6Xxn1zA15svldHyZ/Ow+wUUeRxHf/v7eOOO2sMafcnMPFD25n80Yz/3bbhJBSoN" crossorigin="anonymous"></script>
  <script src="${prefix}tarteaucitron-config.js"></script>`;

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, `${prefix}../`);
    } else if (filename.endsWith(filter)) {
      fs.writeFileSync(
        filename,
        fs.readFileSync(filename).toString().replace('<head>', `<head>${boosted_CSS}${favicon}`).replace('</body>', `\n${cookies}\n</body>`)
      );
    }
  }
}

console.log(`\n\nAdding cookies to API files\n`);
fromDir(`./docs/dist/${version}/api`, '.html');
