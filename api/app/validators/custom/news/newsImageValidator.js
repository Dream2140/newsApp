const ApiError = require('../../../exceptions/ApiError');

module.exports = function newsImageValidator(req, res, next) {
    if (!req.file) {
        throw ApiError.BadRequest('Image is required field');
    }
    if (req.file.size > 5000000) {
        throw ApiError.BadRequest('Image must be less than 5 MB in size');
    }
    if (req.fileValidationError) {
        throw ApiError.BadRequest('File should be an image type');
    }
    next();
}