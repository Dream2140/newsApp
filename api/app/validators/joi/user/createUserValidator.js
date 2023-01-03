const Joi = require('joi');

const validateRequest = require('../index');


const schema = Joi.object({
    body: {
        nickname: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
        role: Joi.string().valid('ADMIN', 'USER'),
    }
}).unknown(true);

module.exports = validateRequest(schema);
