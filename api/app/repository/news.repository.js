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
        if (!response.data.data) {

            throw  ApiError.DataBaseError('cybersport')
        }
        const data = await response.data.data.reduce(async (acc, item) => {
            const previousValue = await acc;

            if (await dbNews.checkExistence({title: item.attributes.title})) {
                return previousValue;
            }


            previousValue.push({
                'id': crypto.randomUUID(),
                'title': item.attributes.title,
                'publishedAt': item.attributes.publishedAt,
                'slug': item.attributes.slug,
                'image': Variables.cybersportImageLink + item.attributes.image,
                'text': await this.getTextDataFromCybersport(item.id),
                'category': 'cybersport'
            });

            return previousValue;
        }, []);

        if (!data) {
            throw ApiError.BadRequest('All news upp to date')
        }

        return await dbNews.saveData(data);

    }

    getTextDataFromCybersport = async (newsId) => {
        const news = await axios.get(Variables.cybersportOneNewsLink + newsId);

        try {
            return news.data.data.attributes.content.blocks
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
        } catch (e) {
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
            const query = {title: new RegExp(newsTitle, 'i')};

            return await dbNews.getDataByCriteria(query);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getAllNews = async (page, limit, category) => {
        try {
            const options = limit === '-1' ? {
                pagination: false,
            } : {
                page: page,
                limit: limit,
            };
            const query = category !== 'all' ? {category: category} : {};

            return await News.paginate(query, options);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getNewsById = async (newsId) => {
        try {
            return await dbNews.getDataByCriteria({_id: newsId});
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

    getNewsByCategory = async (category, page) => {
        try {
            const options = {
                page: page || 1,
                limit: Variables.defaultNewsLimit,
            };

            const query = {category: category.toLowerCase()};

            return await News.paginate(query, options);

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getNewsFromGuardian = async () => {
        try {
            const pageSize = 100;
            const showFields = 'headline,bodyText,thumbnail';
            const showTags = 'keyword';
            const response = await axios.get(Variables.guardianNewsLineLink, {
                params: {
                    'api-key': process.env.GUARDIAN_API_KEY,
                    'page-size': pageSize,
                    'show-fields': showFields,
                    'show-tags': showTags,
                },
            });

            const newsList = await response.data.response.results.reduce(async (acc, result) => {
                const previousValue = await acc;
                if (await dbNews.checkExistence({title: result.webTitle})) {
                    return previousValue;
                }


                previousValue.push({
                    title: result.webTitle,
                    publishedAt: Date.parse(result.webPublicationDate),
                    text: result.fields.bodyText,
                    slug: Utils.formatUrlString(result.id),
                    image: result.fields.thumbnail,
                    category: 'politic',
                });

                return previousValue;
            }, []);

            if (!newsList) {
                throw ApiError.BadRequest('All news upp to date')
            }

            return await dbNews.saveData(newsList);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }

    }
}

module.exports = new NewsRepository();