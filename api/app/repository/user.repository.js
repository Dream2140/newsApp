const User = require('../models/user.model');
const {default: axios} = require("axios");
const Database = require('../database/dbApi');
const Variables = require("../helpers/variables");
const Utils = require("../helpers/utils");
const triggerError = require('../exceptions/ApiError');
const crypto = require('crypto');
const ApiError = require("../exceptions/ApiError");
const News = require("../models/news.model");

const dbNews = new Database(User);

class UserRepository {

    createUser = async (userData) => {
        try {
            return await dbNews.saveData(userData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }

    }

    deleteNewsById = async (newsId) => {
        try {
            return await dbNews.deleteDataItemById(newsId);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    updateNewsById = async (newsId, newsData) => {
        try {
            return await dbNews.updateDataItemById(newsId, newsData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getNewsByTitle = async (newsTitle) => {
        try {

            const regex = new RegExp(newsTitle, 'i');

            return await dbNews.getDataByСriteria({title: regex});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getAllNews = async (page, limit) => {
        try {
            const options = limit === '-1' ? {
                pagination: false,
            } : {
                page: page,
                limit: limit,
                sort: {date: -1}
            };

            return await News.paginate({}, options);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getNewsById = async (newsId) => {
        try {
            return await dbNews.getDataByСriteria({_id: newsId});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    deleteAllNews = async (newsId) => {
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
}

module.exports = new UserRepository();