# Snips

[![CodeFactor](https://www.codefactor.io/repository/github/dills122/snips/badge)](https://www.codefactor.io/repository/github/dills122/snips)

The code snippet manager at the execution of a command.

## Getting Started

Install

``` bash
npm install -g {workingDir}\Snips
```

Navigate to the location your global npm packages are installed and find **Snips** here you can setup your **config** file here.

> if you don't know where your npm global packages are installed run this command `npm list -g`

Config Schema

``` json
{
    "user-settings": {
        "username": "username",
        "cloud": true
    }
}
```

## Commands

* `add` - `add <name> [language] [version]` adds a new snippet to your collection
  * language - optional parameter that allows you to have multiple snippets with the same name, but different languages
  * version - optional parameter that currently is only for personal tracking, improved capabilities to come
* `fetch` - `fetch <name> [language]` fetches a snippet and adds it to your clipboard
  * language - optional parameter to fetch a snippet by language, if not used the results will return the first snippet of the given name

## Storage Options

Local storage is provided by NeDB a NoSql local database. [NeDB](https://github.com/louischatriot/nedb)

Cloud storage is done through Firebase's Firestore. [Firebase](https://firebase.google.com/)

## Built With

* [clipboardy](https://github.com/sindresorhus/clipboardy)
* [external-editor](https://github.com/exteditor/exteditor)
* [joi](https://github.com/hapijs/joi)
* [tmp](https://github.com/raszi/node-tmp)
* [yargs](https://github.com/yargs/yargs)
* Storage providers listed above