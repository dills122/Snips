const Joi = require('joi');

module.exports = {
    schema: Joi.object().keys({
        username: Joi.string().min(1).required(),
        name: Joi.string().required(),
        lang: Joi.string().optional(),
        version: Joi.number().min(1),
        snippet: Joi.string().min(1).max(2000).required()
    })
};