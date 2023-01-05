const Joi = require('joi');

const validateRequest = require('../index');


const schema = Joi.object({
    body: {
        content: Joi.string().min(3).required(),
        userId: Joi.string().guid({
            version: [
                'uuidv4'
            ]
        }).required(),
        newsId: Joi.string().guid({
            version: [
                'uuidv4'
            ]
        }).required(),
        publishedAt: Joi.string(),
    }
}).unknown(true);

module.exports = validateRequest(schema);
