const Joi = require('joi');

const validateRequest = require('../index');

const schema = Joi.object({
    params: {
        id: Joi.string().guid({
            version: [
                'uuidv4'
            ]
        }).required(),
    },
    body: {
        content: Joi.string().min(3),
    }
}).unknown(true);

module.exports = validateRequest(schema);