import fs from 'node:fs';
import path from 'node:path';

function fromDir(startPath, filter) {
  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory() && !filename.endsWith('node_modules') && !filename.endsWith('dist') && !filename.endsWith('docs/api')) {
      fromDir(filename, filter);
    } else if (filename.endsWith(filter)) {
      console.log(`Bump copyright year in ${filename}`);
      fs.writeFileSync(
        filename,
        fs
          .readFileSync(filename)
          .toString()
          .replaceAll(/(\d{4,} - )\d{4,}/g, `$1${new Date().getFullYear()}`)
      );
    }
  }
}

console.log(`Bump copyright year\n`);
fromDir('./src', '');
fromDir('.', 'LICENSE');
fromDir('.', 'NOTICE.txt');
