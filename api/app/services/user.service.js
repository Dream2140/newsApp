const userRepository = require('../repository/user.repository');
const ApiError = require("../exceptions/ApiError");
const mailService = require('./mail.service');

const bcrypt=require('bcrypt');
const crypto = require("crypto");

class UserService {

    createUser = async (userData) => {

        const isNicknameDuplicate = await userRepository.checkUserDuplicate({nickname: userData.nickname});
        const isMailDuplicate = await userRepository.checkUserDuplicate({email: userData.email});

        if (isNicknameDuplicate) {
            throw ApiError.BadRequest(`Nickname ${userData.nickname} already exists`);
        }

        if (isMailDuplicate) {
            throw ApiError.BadRequest(`User with email ${userData.email} already exists`);
        }

        userData.password = await bcrypt.hash(userData.password, 5);
        userData.activationLink = crypto.randomUUID();

        await userRepository.createUser(userData);
        await mailService.sendActivationMail(userData.email, `${process.env.API_URL}/api/user/activate/${userData.activationLink }`);

        return await userRepository.createUser(userData);
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