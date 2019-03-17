const {
    edit
} = require('external-editor');

const deps = {
    LaunchEditor,
    edit
};

function OpenEditor() {
    let value = deps.LaunchEditor();
    return value;
}

function LaunchEditor() {
    let value = deps.edit();
    return value;
}


module.exports = {
    OpenEditor,
    deps
}