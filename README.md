# CLI Release Note 
CLI tool to help creating release note visually and easily.

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
