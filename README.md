# CLI Release Note 
CLI tool to help creating release note visually and easily.

> [!WARNING]
> This tool is in Beta release, and main contain issues, feel free to open
> your own PR to help fix it.

## How it works
It uses the outpout of a git log between tags or branches to input data into a static website, and then
it opens this website locally in your default browser so you can visually selected the commits and create more
readable release notes easily.

## Install 
Install the package __globally__, to be able to run it from any repository.

> npm install cli-release-note -g

## Run

Open the terminal inside a git repository, cli-release-note uses the local git data and commands to generate the commits preview for you.

Now input the release into your terminal:
```bash
release -current tag/branch -latest tag/branch
```

eg:
```bash
release -current v1.2.0 -latest v.1.1.0 
```
```bash
release -c v1.2.0 -l v.1.1.0 
```
```bash
release -current feature/Login-page -latest main 
```

After running the command if everything goes without error, a new tab will open in your default browser, listing all the commits
from the tags/branches, and a text editor to easily create your releases note.

<img width="1438" alt="Screenshot 2023-12-28 at 22 34 59" src="https://github.com/IgorPieruccini/cli-release-note/assets/65550992/0307283a-8bbe-407c-9c46-0ff123aaaf91">

## Command arguments
Arguments | Alias | Description 
--- | --- | --- 
current | c | the current tag or branch to be released
latest | l | the latest tag or branch on production to be released

> [!WARNING]
> cli-release-note does a git log [current]..[latest] diff comparison.

In case of __no__ tag or branch match, the terminal you show you the git error,
if you are referring to a local tag or branch, make sure you have it locally.

## Run project locally

Install all dependencies
> npm ci

This project consist in two parts, the CLI that will gather information from git
and create a js file with all commits inside an array.

And the web app that presents the commits from the created file and the text editor.

### CLI
`cli.js` contains the logic of the cli, it's a plain js run by node when the user
enters "release" in the terminal.

To test changes locally first build the project:
> npm run build

Then install the package globally:
> npm install -g .

Now you can run the release command in your terminal.
When making to change to cli.js build it again with this command:
> npm run build:cli

This will make sure to add your changes you mad inside cli.js to the build, without re-building
the entire web app

### Web App

Assuming you have installed all dependencies, run:
> npm run dev

This will start a server on port [9000](http://localhost:9000), with the web app, using a fake content,
that comes from ./src/git-log.js, or if you have run the command before, will show the latest commits from that time.
