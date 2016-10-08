WebApplication Skeleton
=======================

Command Line Quick Referecne:
-----------------------------
- List Files:  `$ls -la`
- Change Directory:   `$cd <dir_name>`
- Create Directory:   `$mkdir <dir_name>`
- Remove Directory:   `$rmdir <dir_name>`

Prerequisites
-------------
- Install a Code Editor
- Install [Node.js](https://nodejs.org/en/)
- Install [git](https://git-scm.com)
- Create project Directory

How to use npm global without sudo on OSX
-----------------------------------------
Follow the instructions in the link :
<https://johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/>

How to setup a new Project with this Skeleton:
---------------------------------------------
- Open terminal (Mac OSX/Linux) or command prompt (Windows)
- Change to the Directory that will contain the project. In the terminal, type `cd <Directory_Name>` (where `<Directory_Name>` is the Directory that will contain the project.
- Copy the source repository to your machine, `git clone <Git_Repo_URL_to_Clone_Goes_Here>`
- Change to the project directory: `cd <Path_to_the_Project_Directory>`

Advantages to using NPM as build tool
-------------------------------------
- Self documentation
- Command Line Processing
- Dependency Resolution
- Code, Not Configuration
- Straightforward and simple

Installing Local Dependencies:
------------------------------
- Install dependency : `npm install --ignore-scripts --save-dev gulp`
- Check it in : 
```
git add .
git commit -am "Installed gulp"
```
- Run install scripts : `npm rebuild`
- Look for build artifacts : `git status`
- Ignore build artifacts : [add any files listed by `git status` to `.gitignore` file]

*NOTE*: 
We install packages with --ignore-scripts so as not to include build scripts in the `node_modules` folder, as we do not want to check in any build artifacts.
`npm rebuild` runs the scripts under `node_modules` directory to create all the build artifacts. 