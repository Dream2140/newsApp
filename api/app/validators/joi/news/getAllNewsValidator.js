const Joi = require('joi');

const validateRequest = require('../index');


const schema = Joi.object({
    query: {
        page: Joi.number().min(1),
        limit: Joi.number().min(-1).required()
    }
}).unknown(true);

module.exports = validateRequest(schema);
