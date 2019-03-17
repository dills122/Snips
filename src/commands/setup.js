const Joi = require('joi');
const {
    OpenEditor
} = require('../editor');
const {
    WriteFile,
    ReadFile
} = require('../file-io');
const {
    schema
} = require('../models/config-schema');

const _configPath = '/config.json';
const _failStatement = 'That is not a valid config, update failed';

const deps = {
    ValidateInput,
    UpdateConfig,
    ReadFile
};

function ValidateInput(input) {
    return new Promise((resolve, reject) => {
        Joi.validate(input, schema, (err) => {
            if (err) {
                console.log(err);
                resolve(false);
            }
            resolve(true);
        });
        reject();
    });
}

function UpdateConfig(config) {
    ValidateInput(config).then((isValid) => {
        if (isValid) {
            WriteFile(_configPath, JSON.stringify(config));
            console.log('Successfully Updated Config');
        } else {
            console.log(_failStatement);
        }
    }).catch((err) => {
        console.log(err);
    });
}

function Setup() {
    let config = OpenEditor();
    UpdateConfig(JSON.parse(config));
}

async function PrintConfig() {
    let config = await deps.ReadFile(_configPath);
    if (config) {
        console.dir(config);
    } else {
        console.log('Error finding config');
    }
}

module.exports = {
    Setup,
    PrintConfig,
    deps
}