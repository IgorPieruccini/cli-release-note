const fs = require('fs');

const dir = __dirname + "/bin/";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.copyFile('cli.js', 'bin/cli.js', (err) => {
  if (err) throw err;
});
