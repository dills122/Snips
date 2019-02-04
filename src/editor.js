const tmp = require('tmp');
const util = require('util');
const openInEditor = require('open-in-editor');
const fs = require('fs');

const editor = openInEditor.configure({
    editor: 'vim'
}, function (err) {
    console.error('Something went wrong: ' + err);
});

const useTmp = util.promisify(tmp.file);
const readFile = util.promisify(fs.readFile);

function AddSnippet() {
    tmp.file((err, path, fd, cleanUpCb) => {
        editor.open(path).then(() => {
            return readFile('/var/folders/zz/875t1n655jj36843tscdbnsr0000gn/T/tmp-1811HZ7yPv6GaagX.tmp', 'utf8');
        }).then((snippet) => {
            console.log(snippet);
        }).catch((error) => {
            console.log(error);
        });
        //cleanUpCb();
    });
}

module.exports = {
    AddSnippet
}