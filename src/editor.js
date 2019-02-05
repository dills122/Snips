const tmp = require('tmp');
const util = require('util');
const fs = require('fs');
const {
    spawn
} = require('child_process');

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
        return CleanUp(cleanUpCb);
    }).then(() => {
        //Calls the cleanup
    }).catch((err) => {
        console.log(err);
    });
}

async function CleanUp(cleanUpCb) {
    cleanUpCb();
}

module.exports = {
    AddSnippet
}