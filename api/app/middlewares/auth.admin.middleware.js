const ApiError = require('../exceptions/ApiError');
const tokenService = require('../services/token.service');

module.exports = function (req, res, next) {
    try {

        const authorizationHeader = req.header('Authorization');

        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (userData.role !== 'ADMIN') {
            return next(ApiError.NotAllowedError());
        }

        next();
    } catch (e) {
        throw e;
    }
};
