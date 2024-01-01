#! /usr/bin/env node
const { exec } = require("child_process");
const fs = require('fs');
const yargs = require('yargs');

const root = __dirname.replace("/bin", "/");
const gitLogFilePath = `${root}/bin/git-log.js`;

/* get-diff-commit.js  */
const getDiffCommit = (current, latest) => {
  return new Promise((response, reject) => {
    console.log(`git log ${latest}..${current}`);
    exec(`git log ${latest}..${current}`, (err, stdout, stderr) => {
      if (err) reject(err);
      if (stderr) reject(err)
      if (stdout === "") reject("no commits found");
      response(stdout)
    });
  });
}

/* create-git-log-file */
const createGitLogFile = (commits) => {
  return new Promise((response, reject) => {
    fs.writeFile(gitLogFilePath, `var gitLog = ${JSON.stringify(commits)}`, (err) => {
      if (err) reject(err);
      response();
    });
  });
}

/* create-git-log-file */
const openUI = () => {
  return new Promise((response, reject) => {
    exec(`open ${__dirname}/index.html`, (err, stdout, stderr) => {
      if (err) reject(err);
      if (stderr) reject(err);
      response(stdout);
    });
  });
}

// Set required arguments and cli options
const Yargs = yargs(process.argv.slice(2))
  .option("current", {
    alias: "c",
    describe: "Current tag version",
  })
  .option("latest", {
    alias: "l",
    describe: "latest tag version",
  })
  .demandOption(["current", "latest"])
  .help(true)

const { current, latest } = Yargs.argv;

const init = async () => {
  try {
    const result = await getDiffCommit(current, latest);
    const commits = result.split(/(?=commit \w{40})/);

    await createGitLogFile(commits);
    await openUI();
  } catch (e) {
    console.error({ e })
    Yargs.exit(1);
  } finally {
    console.log('Done! a new tab with the commits will be open in your browser');
  }
}

init();
