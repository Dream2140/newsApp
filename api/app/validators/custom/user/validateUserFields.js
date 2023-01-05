const ApiError = require("../../../exceptions/ApiError");

const userService = require('../../../services/user.service');

class validateUser {

    validateRegisterNickname = async (req, res, next) => {

        const nickname = req.body.nickname;

        const isNicknameDuplicate = await userService.checkUserDuplicate({nickname: nickname});

        if (isNicknameDuplicate) {
            throw ApiError.BadRequest(`Nickname ${nickname} already exists`);
        }

        next();
    }
    validateRegisterEmail = async (req, res, next) => {
        const email = req.body.email;

        const isMailDuplicate = await userService.checkUserDuplicate({email: email});

        if (isMailDuplicate) {
            throw ApiError.BadRequest(`User with email ${email} already exists`);
        }

        next();
    }

    validateLoginEmail = async (req, res, next) => {
        const email = req.body.email;

        const isMailExist = await userService.checkUserDuplicate({email: email});

        if (!isMailExist) {
            throw ApiError.BadRequest(`User with email ${email} is not registered`);
        }

        next();
    }

    validateRefreshToken = async (req, res, next) => {

        const {refreshToken} = req.cookies;

        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        next();
    }
}
module.exports = new validateUser();
