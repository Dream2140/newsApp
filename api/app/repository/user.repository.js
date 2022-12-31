const User = require('../models/user.model');
const {default: axios} = require("axios");
const Database = require('../database/dbApi');
const Variables = require("../helpers/variables");
const Utils = require("../helpers/utils");
const triggerError = require('../helpers/errorHandler');
const crypto = require('crypto');

const dbNews = new Database(User);

class UserRepository {

    createNews = async (newsData) => {
        try {

            return await dbNews.saveData(newsData);

        } catch (error) {

            triggerError({
                status: 400, message: error.message
            });

        }
    }

    deleteNewsById = async (newsId) => {
        try {

            return await dbNews.deleteDataItemById(newsId);

        } catch (error) {

            console.error(error);

            triggerError({
                status: 400, message: error.message
            });
        }
    }

    updateNewsById = async (newsId, newsData) => {
        try {

            return await dbNews.updateDataItemById(newsId, newsData);

        } catch (error) {

            console.error(error);

            triggerError({
                status: 400, message: error.message
            });
        }
    }

    getNewsByTitle = async (newsTitle) => {
        try {
            const regex = new RegExp(newsTitle, 'i');

            return await dbNews.getDataByСriteria({title: regex});

        } catch (error) {

            console.error(error);

            triggerError({
                status: 400, message: error.message
            });
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

            console.error(error);

            triggerError({
                status: 400, message: error.message
            });
        }
    }

    getNewsById = async (newsId) => {
        try {

            return await dbNews.getDataByСriteria({_id: newsId});

        } catch (error) {

            console.error(error);

            triggerError({
                status: 400, message: error.message
            });
        }
    }

    deleteAllNews = async (newsId) => {
        try {

            return await dbNews.deleteAllData();

        } catch (error) {

            console.error(error);

            triggerError({
                status: 400, message: error.message
            });
        }
    }

}

module.exports = new UserRepository();