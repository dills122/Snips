const tmp = require('tmp');
const util = require('util');
const fs = require('fs');
const {
    spawn
} = require('child_process');
const {
    ExecuteAdd
} = require('./create');
const {
    edit
} = require('external-editor');

const isWin = process.platform === "win32";
const readFile = util.promisify(fs.readFile);
const editor = process.env.EDITOR || 'vi';

function AddSnippet(cmd) {
    console.log(cmd);
    if (!isWin) {
        tmp.file((err, path, fd, cleanUpCb) => {
            var child = spawn(editor, [path], {
                stdio: 'inherit'
            });

            child.on('exit', function (e, code) {
                console.log("finished");
                GetSnippet(path, cleanUpCb);
            });
        });
    } else {
        let snippet = edit();
        AddToDb(snippet);
    }
}

function GetSnippet(path, cleanUpCb) {
    readFile(path, 'utf8').then((snippet) => {
        snippet.trim();
        return AddToDb(snippet);
    }).then(() => {
        //Calls the cleanup
        return CleanUp(cleanUpCb);
    }).then(() => {

    }).catch((err) => {
        console.log(err);
    });
}

async function AddToDb(snippet) {
    let args = {};
    args.snippet = snippet;
    ExecuteAdd('test', args);
}

async function CleanUp(cleanUpCb) {
    cleanUpCb();
}

module.exports = {
    AddSnippet
}