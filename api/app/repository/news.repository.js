const News = require('../models/news.model');
const {default: axios} = require("axios");
const Database = require('../database/dbApi');
const Variables = require("../helpers/variables");
const Utils = require("../helpers/utils");
const crypto = require('crypto');
const ApiError = require("../exceptions/ApiError");

const dbNews = new Database(News);

class NewsRepository {
    getAllTasksFromCybersport = async () => {

            const response = await axios.get(Variables.cybersportNewsLineLink);

            const data = await response.data.data.reduce(async (acc,item) => {

                if(await dbNews.checkExistence({ title: item.attributes.title })){
                    return;
                }

                const previousValue = await acc;

                previousValue.push( {
                    'id': crypto.randomUUID(),
                    'title': item.attributes.title,
                    'publishedAt': item.attributes.publishedAt,
                    'slug': item.attributes.slug,
                    'image': Variables.cybersportImageLink + item.attributes.image,
                    'text': await this.getTextDataFromCybersport(item.id)
                });

                return previousValue;
            },[]);

            if(!data){
                throw ApiError.BadRequest('All news upp to date')
            }

            return await dbNews.saveData(data);

    }

    getTextDataFromCybersport = async (newsId) => {
        const news = await axios.get(Variables.cybersportOneNewsLink + newsId);

        try {
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
        } catch (e){
            return ''
        }
    }

    createNews = async (newsData) => {
        try {
            return await dbNews.saveData(newsData);
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

            };

            const news= await News.paginate({}, options);

            return news
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

    deleteAllNews = async () => {
        try {
            return await dbNews.deleteAllData();
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

}

module.exports = new NewsRepository();