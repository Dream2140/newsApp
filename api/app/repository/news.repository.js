const News = require('../models/news.model');
const {default: axios} = require("axios");
const Database = require('../database/dbApi');
const Variables = require("../helpers/variables");
const Utils = require("../helpers/utils");
const triggerError = require('../helpers/errorHandler');
const crypto = require('crypto');

const dbNews = new Database(News);

class NewsRepository {
    getAllTasksFromCybersport = async () => {

        try {
            const response = await axios.get(Variables.cybersportNewsLineLink);

            const data = await Promise.all(response.data.data.map(async (item) => {
                return {
                    '_id': crypto.randomUUID(),
                    'title': item.attributes.title,
                    'publishedAt': item.attributes.publishedAt,
                    'slug': item.attributes.slug,
                    'image': Variables.cybersportImageLink + item.attributes.image,
                    'text': await this.getTextDataFromCybersport(item.id)
                }
            }));

            return await dbNews.saveData(data, (err) => {
                if (err.code === 11000) {
                    return;
                }
                console.error(err);
                throw err;
            });

        } catch (error) {

            triggerError({
                status: 400, message: error.message
            });

        }
    }

    getTextDataFromCybersport = async (newsId) => {
        const news = await axios.get(Variables.cybersportOneNewsLink + newsId);

        const text = news.data.data.attributes.content.blocks
            .map(item => {

                try {

                    if (item.data.text) {
                        return Utils.clearHtmlTags(item.data.text)
                    }

                } catch (err) {
                    return;
                }
            })
            .join(' ')

        return text;
    }

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

module.exports = new NewsRepository();