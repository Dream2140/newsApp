const userRepository = require('../repository/user.repository');
const ApiError = require("../exceptions/ApiError");
const mailService = require('./mail.service');

const bcrypt = require('bcrypt');
const crypto = require("crypto");
const UserDto = require("../dto/user.dto");
const tokenService = require('./token.service')

class UserService {

    createUser = async (userData) => {

        userData.password = await bcrypt.hash(userData.password, 3);
        userData.activationLink = crypto.randomUUID();

        const user = await userRepository.createUser(userData);
        await mailService.sendActivationMail(userData.email, `${process.env.API_URL}/api/user/activate/${userData.activationLink}`);

        const userDto = new UserDto(user);

        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}


    }
    checkUserDuplicate = async (userData) => {
        return await userRepository.checkUserDuplicate(userData);
    }

    deleteUserById = async (userId) => {

        const data = await userRepository.deleteUserById(userId);

        if (!data) {
            throw ApiError.NotFoundRequest(`Cannot delete user with id ${userId}. Maybe user was not found`)
        }

        await tokenService.deleteToken({user: userId})

        return {message: `User with ${userId}  was deleted successfully.`};
    }

    updateUserById = async (userId, userData) => {

        if (!userData || Object.keys(userData).length === 0) {
            throw ApiError.BadRequest('You have write at least one field')
        }

        return await userRepository.updateUserById(userId, userData);
    }

    updatePassword = async (userId, currentPassword, newPassword) => {

        const user = await userRepository.getUserPassword(userId);

        if (!user) {
            throw ApiError.BadRequest('User not found');
        }
        const isPassEquals = await bcrypt.compare(currentPassword, user.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Wrong password');
        }

        user.password = await bcrypt.hash(newPassword, 3);

        return await userRepository.updateUserById(userId, {password: user.password});
    }

    getAllUsers = async (page, limit) => {
        return await userRepository.getAllUsers(page, limit);
    }

    getUserById = async (newsId) => {
        return await userRepository.getUserById(newsId);
    }

    deleteAllUsers = async () => {
        const users = await userRepository.deleteAllUsers();

        if (users.deletedCount > 0) {
            return {message: `${users.deletedCount} users were deleted successfully!`};
        }

        await tokenService.deleteAllTokens();

        return {message: `Nothing to delete`}
    }

    loginUser = async (inputUserData) => {

        const user = await userRepository.loginUser(inputUserData.email);

        const isPassEquals = await bcrypt.compare(inputUserData.password, user.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Wrong password');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}

    }

    logoutUser = async (refreshToken) => {
        return await tokenService.deleteToken({refreshToken});
    }

    activateUser = async (activationLink) => {
        return await userRepository.activateUser(activationLink);
    }

    refreshUser = async (refreshToken) => {

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await userRepository.getUserById(userData.id);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});


        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
}

module.exports = new UserService();