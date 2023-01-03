const newsService = require('../services/news.service');

class NewsController {

    getAllNewsFromCybersport = async (req, res, next) => {
        try {

            const data = await newsService.getAllTasksFromCybersport();

            return res.status(200).json(data);

        } catch (e) {
            next(e);
        }
    }

    createNews = async (req, res, next) => {
        try {

            const imagePath = 'downloads/' + req.file.originalname;

            const newsData = {
                title: req.body.title,
                publishedAt: req.body.publishedAt,
                text: req.body.text,
                slug: req.body.slug,
                image: imagePath
            }

            const data = await newsService.createNews(newsData);

            return res.status(200).json(data);


        } catch (e) {
            next(e);
        }
    }

    deleteNewsById = async (req, res, next) => {
        try {

            const {id} = req.body;

            const data = await newsService.deleteNewsById(id);

            return res.status(200).json(data);

        } catch (e) {
            next(e);
        }
    }

    updateNewsById = async (req, res, next) => {
        try {
            const {id} = req.params;

            const updatedNews = await newsService.updateNewsById(id, req.body);

            return res.status(200).json(updatedNews);

        } catch (e) {
            next(e);
        }
    }

    getNewsByTitle = async (req, res, next) => {
        try {

            const {title} = req.body;
            const news = await newsService.getNewsByTitle(title);

            return res.status(200).json(news);

        } catch (e) {
            next(e);
        }
    }

    getAllNews = async (req, res, next) => {
        try {

            const page = req.query.page || 1;
            const limit = req.query.limit || 10;

            const news = await newsService.getAllNews(page, limit);

            return res.status(200).json(news);

        } catch (e) {
            next(e);
        }
    }

    getNewsById = async (req, res, next) => {
        try {

            const {id} = req.params;
            const news = await newsService.getNewsById(id);

            return res.status(200).json(news);

        } catch (e) {
            next(e);
        }
    }

    deleteAllNews = async (req, res, next) => {
        try {
            const news = await newsService.deleteAllNews();

            return res.status(200).json(news);

        } catch (e) {
            next(e);
        }
    }

}

module.exports = new NewsController();