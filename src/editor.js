const {
    edit
} = require('external-editor');

const deps = {
    LaunchEditor,
};

function OpenEditor() {
    let value = deps.LaunchEditor();
    return value;
}

function LaunchEditor() {
    let value = edit();
    return value;
}


module.exports = {
    OpenEditor,
    deps
}