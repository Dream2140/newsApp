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

            const imagePath = process.env.API_URL + '/uploads/' + req.file.filename;

            const newsData = {
                title: req.body.title,
                publishedAt: req.body.publishedAt,
                text: req.body.text,
                slug: req.body.slug,
                image: imagePath,
                category: req.body.category
            }

            const data = await newsService.createNews(newsData);

            return res.status(200).json(data);


        } catch (e) {
            next(e);
        }
    }

    deleteNewsById = async (req, res, next) => {
        try {

            const {id} = req.params;

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
            const {title} = req.query;

            const news = await newsService.getNewsByTitle(title.toLowerCase());
            return res.status(200).json(news);

        } catch (e) {
            next(e);
        }
    }

    getAllNews = async (req, res, next) => {
        try {

            const page = req.query.page || 1;
            const limit = req.query.limit || 10;
            const category = req.query.category?.toLowerCase() || 'all';

            const news = await newsService.getAllNews(page, limit, category);

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

    getNewsByCategory = async (req, res, next) => {
        try {
            const {category, page} = req.query;

            const news = await newsService.getNewsByCategory(category, page);

            return res.status(200).json(news);

        } catch (e) {
            next(e);
        }
    }

    getNewsFromGuardian = async (req, res, next) => {
        try {

            const data = await newsService.getNewsFromGuardian();

            return res.status(200).json(data);

        } catch (e) {
            next(e);
        }
    }

}

module.exports = new NewsController();