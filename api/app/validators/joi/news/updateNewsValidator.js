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
        title: Joi.string().min(3),
        text: Joi.string().min(3),
        publishedAt: Joi.string(),
        slug: Joi.any(),
    }
}).unknown(true);

module.exports = validateRequest(schema);