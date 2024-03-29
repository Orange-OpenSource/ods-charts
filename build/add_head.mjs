import fs from "node:fs";
import path from "node:path";

function fromDir(startPath, filter, prefix = '../') {
  const favicon = `
  <link rel="apple-touch-icon" href="${prefix}images/favicons/apple-touch-icon.png" sizes="180x180">
  <link rel="icon" href="${prefix}images/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="${prefix}images/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="manifest" href="${prefix}images/favicons/manifest.json">
  <link rel="mask-icon" href="${prefix}images/favicons/safari-pinned-tab.svg" color="#000">
  <link rel="icon" href="${prefix}images/favicons/favicon.ico">
  <meta name="msapplication-config" content="${prefix}images/favicons/browserconfig.xml">
  <meta name="theme-color" content="#000">`;
  const boosted_CSS = `
  <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.3/dist/css/orange-helvetica.min.css" rel="stylesheet" integrity="sha384-A0Qk1uKfS1i83/YuU13i2nx5pk79PkIfNFOVzTcjCMPGKIDj9Lqx9lJmV7cdBVQZ" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.3/dist/css/boosted.min.css" rel="stylesheet" integrity="sha384-laZ3JUZ5Ln2YqhfBvadDpNyBo7w5qmWaRnnXuRwNhJeTEFuSdGbzl4ZGHAEnTozR" crossorigin="anonymous">
  <link href="${prefix}assets/tarteaucitron-config.css" rel="stylesheet">`;
  const cookies = `
  <script src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.17.0/tarteaucitron.min.js" integrity="sha384-g6Xxn1zA15svldHyZ/Ow+wUUeRxHf/v7eOOO2sMafcnMPFD25n80Yz/3bbhJBSoN" crossorigin="anonymous"></script>
  <script src="${prefix}assets/tarteaucitron-config.js"></script>`;

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, `${prefix}../`);
    } else if (filename.endsWith(filter)) {
      fs.writeFileSync(filename, fs.readFileSync(filename).toString().replace("<head>", `<head>${boosted_CSS}${favicon}`).replace("</body>", `\n${cookies}\n</body>`));
    };
  };
};

console.log(`\n\nAdding cookies to API files\n`)
fromDir('./docs/api', '.html');
