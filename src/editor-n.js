const tmp = require('tmp');
const util = require('util');
const {
    ReadFile
} = require('./file-io');
const {
    spawn
} = require('child_process');
const {
    edit
} = require('external-editor');

const isWin = process.platform === "win32";
const editor = process.env.EDITOR || 'vi';

const deps = {
    readFile: ReadFile,
    ExtractResult,
    LaunchEditor,
};

async function OpenEditor() {
    try {
        let result = await deps.LaunchEditor();

        if (result.hasOwnProperty('path')) {
            return await ExtractResult(result.path);
        } else {
            return result.value;
        }
    } catch (err) {
        return '';
    }
}

function LaunchEditor() {
    var result = {};
    return new Promise((resolve, reject) => {
        if (!isWin) {
            tmp.file((err, path, fd, cleanUpCb) => {
                if (err) return;

                var child = spawn(editor, [path], {
                    stdio: 'inherit'
                });

                child.on('exit', function (e, code) {
                    result.path = path;
                    resolve(result);
                });
            });
        } else {
            let value = edit();
            result.value = value;
            resolve(result);
        }
        reject();
    });
}

async function ExtractResult(path) {
    try {
        let value = await deps.readFile(path);
        return value;
    } catch (err) {
        return '';
    }
}


module.exports = {
    OpenEditor,
    deps
}