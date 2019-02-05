const tmp = require('tmp');
const util = require('util');
const fs = require('fs');
const {
    spawn
} = require('child_process');
const {ExecuteAdd} = require('./create');

const readFile = util.promisify(fs.readFile);
const editor = process.env.EDITOR || 'vi';

function AddSnippet() {
    tmp.file((err, path, fd, cleanUpCb) => {
        var child = spawn(editor, [path], {
            stdio: 'inherit'
        });
    
        child.on('exit', function (e, code) {
            console.log("finished");
            GetSnippet(path, cleanUpCb);
        });
    });
}

function GetSnippet(path, cleanUpCb) {
    readFile(path, 'utf8').then((snippet) => {
        console.log(snippet);

        //ExecuteAdd('test', args);
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