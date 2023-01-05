const Joi = require('joi');

const validateRequest = require('../index');

const schema = Joi.object({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(30).regex(/^[a-zA-Z0-9]{8,30}$/).required()
    }
}).unknown(true);

module.exports = validateRequest(schema);