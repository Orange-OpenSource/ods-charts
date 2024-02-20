import fs from "node:fs";
import path from "node:path";

const favicon = `<!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/images/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/images/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/images/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/images/favicons/manifest.json">
<link rel="mask-icon" href="/docs/images/favicons/safari-pinned-tab.svg" color="#000">
<link rel="icon" href="/docs/images/favicons/favicon.ico">
<meta name="msapplication-config" content="/docs/images/favicons/browserconfig.xml">
<meta name="theme-color" content="#000">`;
const boosted_CSS = `<!-- Boosted CSS -->
<link href="https://cdn.jsdelivr.net/npm/boosted@5.3.2/dist/css/orange-helvetica.min.css" rel="stylesheet" integrity="sha384-A0Qk1uKfS1i83/YuU13i2nx5pk79PkIfNFOVzTcjCMPGKIDj9Lqx9lJmV7cdBVQZ" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/boosted@5.3.2/dist/css/boosted.min.css" rel="stylesheet" integrity="sha384-fyenpx19UpfUhZ+SD9o9IdxeIJKE6upKx0B54OcXy1TqnO660Qw9xw6rOASP+eir" crossorigin="anonymous">`;
const cookies = fs.readFileSync('build/tarteaucitron.html')

function fromDir(startPath, filter) {
  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter);
    } else if (filename.endsWith(filter)) {
      fs.writeFileSync(filename, fs.readFileSync(filename).toString().replace("<head>", `<head>${boosted_CSS}${favicon}`).replace("</body>", `\n${cookies}\n</body>`));
    };
  };
};

console.log(`\n\nAdding cookies to api files\n`)
fromDir('./docs/api', '.html');
