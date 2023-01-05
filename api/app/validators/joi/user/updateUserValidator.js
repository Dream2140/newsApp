const Joi = require('joi');

const validateRequest = require('../index');

const schema = Joi.object({
    body: {
        nickname: Joi.string().min(3),
        password: Joi.string().min(3)
    }
}).unknown(true);

module.exports = validateRequest(schema);