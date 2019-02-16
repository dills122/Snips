const Joi = require('joi');

module.exports = {
    schema : Joi.object().keys({
        "user-settings": Joi.object().keys({
            username: Joi.string().required(),
            cloud: Joi.bool().required()
        })
    })
};