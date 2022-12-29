const News = require('../models/news.model');
const {default: axios} = require("axios");
const Database = require('../database/dbApi');
const Variables = require("../helpers/variables");
const Utils = require("../helpers/utils");
const DbErrorHandler = require("../helpers/dbErrorHandler");

const dbNews = new Database(News);

class NewsRepository {
    getAllTasksFromCybersport = async () => {


        const response = await axios.get(Variables.cybersportNewsLineLink);

        const data = await Promise.all(response.data.data.map(async (item) => {
            return {
                '_id': item.id,
                'title': item.attributes.title,
                'publishedAt': item.attributes.publishedAt,
                'slug': item.attributes.slug,
                'image': item.attributes.image,
                'text': await this.getTextDataFromCybersport(item.id)
            }
        }));

        await dbNews.saveData(data, (err) => DbErrorHandler.handleError(err) );

        return data
    }

    getTextDataFromCybersport = async (newsId) => {
        const news = await axios.get(Variables.cybersportOneNewsLink + newsId);
        const text = news.data.data.attributes.content.blocks.map(item => {

            try {

                if (item.data.text) {
                    return Utils.clearHtmlTags(item.data.text)
                }

            }catch (err){
                return '' ;
            }

        })

        return text;
    }

    createNews = async (newsData) => {
        try {

            return await dbNews.saveData(newsData);

        } catch (error) {
            throw error;
            console.error(error);

        }
    }
}

module.exports = new NewsRepository();