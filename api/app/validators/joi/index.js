const ApiError = require("../../exceptions/ApiError");

module.exports = (schema) => (req, res, next) => {

    const {error} = schema.validate(req);

    if (error) {

        console.error(error)

        throw ApiError.BadRequest(error.details[0].message);
    }

    next();
};
