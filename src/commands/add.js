const {
    db
} = require('../localdb');
const {
    Add: insertCloud
} = require('../fsdb');
const config = require('../config.json');
const {
    BuildModel
} = require('../models/snippet-model');
const {
    OpenEditor
} = require('../editor');

const deps = {
    Add,
    GetSnippet
};

function Add(snippet, args) {
    if (!db) return;

    let model = BuildModel(snippet, args);
    if (Object.keys(model).length !== 0) {
        db.insert(model, (err, doc) => {
            if (!err) {
                console.log('local inserted');
            }
        });
        if (config['user-settings'].cloud) {
            insertCloud(model);
            console.log('firestore inserted');
        }
    }
    return true;
}

function GetSnippet(args) {
    let snippet = OpenEditor();
    Add(snippet, args);
}

function ExecuteAdd(args) {
    GetSnippet(args);
}

module.exports = {
    ExecuteAdd,
    deps
}