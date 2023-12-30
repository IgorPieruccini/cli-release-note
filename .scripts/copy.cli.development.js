const fs = require('fs');
const rootProject = require('./root-project');

const dir = rootProject() + "/bin/";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.copyFile('cli.js', 'bin/cli.js', (err) => {
  if (err) throw err;
});
