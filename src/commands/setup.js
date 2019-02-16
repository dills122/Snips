const {
    schema
} = require('../models/config-schema');
const Joi = require('joi');

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