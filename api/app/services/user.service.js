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

    deleteNewsById = async (newsId) => {
        return await NewsRepository.deleteNewsById(newsId);
    }

    updateNewsById = async (newsId, newsData) => {
        return await NewsRepository.updateNewsById(newsId, newsData);
    }

    getNewsByTitle = async (newsTitle) => {
        return await NewsRepository.getNewsByTitle(newsTitle);
    }

    getAllNews = async (page, limit) => {
        return await NewsRepository.getAllNews(page, limit);
    }

    getNewsById = async (newsId) => {
        return await NewsRepository.getNewsById(newsId);
    }

    deleteAllNews = async (newsId) => {
        return await NewsRepository.deleteAllNews();
    }
}

module.exports = new UserService();