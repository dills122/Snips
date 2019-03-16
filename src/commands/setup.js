const Joi = require('joi');
const {
    schema
} = require('../models/config-schema');
const {
    WriteFile
} = require('../file-io');

const _configPath = '/config.json';
const _failStatment = 'That is not a valid config, update failed';

const deps = {
    ValidateInput
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
        if(isValid) {
            WriteFile(_configPath, JSON.stringify(config));
            console.log('Successfully Updated Config');
        } else {
            console.log(_failStatment);
        }
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    UpdateConfig,
    deps
}