const fs = require('fs');
const util = require('util');
const appPath = require('app-root-path');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//File Functions will take partial paths to just 

function WriteFile(filePath, contents) {
    writeFile(VerifyPath(filePath), contents).then((err) => {
        if (err) {
            console.log(err);
        }
    });
}

async function ReadFile(filePath) {
    return await readFile(filePath, 'utf8');
    ß
}

function VerifyPath(path) {
    if (path) {
        return `${appPath}/src${path}`;
    }
}

module.exports = {
    WriteFile,
    ReadFile
}