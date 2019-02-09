const {schema} = require('./snippet-schema');
const Joi = require('joi');
const config = require('../config.json');

function BuildModel(snippet, args) {
    var model =  {
        username: config['user-settings'].username,
        name: args.name,
        lang: args.lang || 'txt',
        version: args.version || 1.0,
        snippet: snippet || ''
    };

    Joi.validate(model, schema, (err) => {
        if(err) {
            console.log(err);
            model = {};
        }      
    });
    return model;
}

module.exports = {
    BuildModel
}