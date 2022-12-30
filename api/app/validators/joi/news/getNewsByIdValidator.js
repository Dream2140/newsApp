const Joi = require('joi');

const validateRequest = require('../index');

const schema = Joi.object({
    params: {
        title: Joi.string().min(3)
    }
}).unknown(true);

module.exports = validateRequest(schema);
