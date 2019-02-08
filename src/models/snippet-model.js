const snippet = require('./snippet-schema');
const Joi = require('joi');
const config = require('../config.json');

function BuildModel(name, args) {
    var model =  {
        username: config['user-settings'].username,
        name: name,
        type: args.type || 'gen',
        version: args.version || 1.0,
        snippet: args.snippet || ''
    };

    Joi.validate(model, snippet.schema, (err) => {
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