const User = require('../models/user.model');
const Database = require('../database/dbApi');
const ApiError = require("../exceptions/ApiError");

const dbNews = new Database(User);

class UserRepository {

    createUser = async (userData) => {
        try {
            return await dbNews.saveData(userData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }

    }

    deleteUserById = async (userId) => {
        try {
            return await dbNews.deleteDataItemById(userId);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    updateUserById = async (userId, userData) => {
        try {
            return await dbNews.updateDataItemById(userId, userData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    updatePassword = async (userId, userData) => {
        try {
            return await dbNews.updateDataItemById(userId, userData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getAllUsers = async (page, limit) => {
        try {
            const options = limit === '-1' ? {
                select: 'nickname email role isActivated', pagination: false,
            } : {
                select: 'nickname email role isActivated', page: page, limit: limit, sort: {date: -1}
            };

            return await User.paginate({}, options);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getUserById = async (userId) => {
        try {
            return await dbNews.getOneDataByCriteria({_id: userId}, 'nickname email role isActivated');
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }
    getUserPassword = async (userId) => {
        try {
            return await dbNews.getOneDataByCriteria({_id: userId}, 'password');
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    deleteAllUsers = async () => {
        try {
            return await dbNews.deleteAllData();
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    checkUserDuplicate = async (criteria) => {
        const user = await dbNews.checkExistence(criteria);
        return !!user;
    }

    loginUser = async (userMail) => {
        try {
            return await dbNews.getOneDataByCriteria({email: userMail});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    activateUser = async (activationLink) => {
        try {

            const user = await dbNews.getOneDataByCriteria({activationLink});

            if (!user) {
                throw ApiError.BadRequest('Wrong activation link');
            }

            return await dbNews.updateDataItemById(user._id, {isActivated: true});

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }
}

module.exports = new UserRepository();