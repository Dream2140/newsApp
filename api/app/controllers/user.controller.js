const userService = require('../services/user.service');
const newsService = require("../services/news.service");

class UserController {

    createUser = async (req, res, next) => {
        try {

            const {nickname, email, password} = req.body;

            const userData = await userService.createUser({nickname, email, password});

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.status(200).json(userData);

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

module.exports = new UserController();