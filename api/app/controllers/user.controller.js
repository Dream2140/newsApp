const userService = require('../services/user.service');

class UserController {

    getAllNewsFromCybersport = async (req, res) => {
        try {

            const data = await newsService.getAllTasksFromCybersport();

            return res.status(200).send(data);

        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while getting news list from cybersport.ru."
            });
        }
    }

    createNews = async (req, res) => {
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

            return res.status(200).send(data);


        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while creating news"
            });
        }
    }

    deleteNewsById = async (req, res) => {
        try {

            const newsId = req.body.id

            const data = await newsService.deleteNewsById(newsId);

            if (!data) {

                return res.status(400).send({
                    message: `Cannot delete news. Maybe news was not found`
                });
            }

            return res.status(200).send({
                message: `News with ${newsId}  was deleted successfully.`
            });

        } catch (err) {
            console.error(err);

            res.status(500).send({
                message: "Some error occurred while deleting"
            });
        }
    }

    updateNewsById = async (req, res) => {
        try {
            const newsId = req.params.id;

            const updatedNews = await newsService.updateNewsById(newsId, req.body);

            return res.send(updatedNews);

        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while updating news."
            });
        }
    }

    getNewsByTitle = async (req, res) => {
        try {
            const newsTitle = req.body.title;

            const news = await newsService.getNewsByTitle(newsTitle);

            return res.send(news);

        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while updating news."
            });
        }
    }

    getAllNews = async (req, res) => {
        try {

            const page = req.query.page || 1;
            const limit = req.query.limit || 10;

            const news = await newsService.getAllNews(page, limit);

            return res.json({
                news
            });

        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while getting all news."
            });
        }
    }

    getNewsById = async (req, res) => {
        try {
            const newsId = req.params.id;

            const news = await newsService.getNewsById(newsId);

            return res.send(news);

        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while getting news by id."
            });
        }
    }

    deleteAllNews = async (req, res) => {
        try {
            const news = await newsService.deleteAllNews();

            if (news.deletedCount > 0) {
                return res.send({
                    message: `${news.deletedCount} news were deleted successfully!`
                });
            }

            return res.send({
                message: `Nothing to delete`
            });

        } catch (err) {
            console.error(err);

            res.status(err.cause?.status || 500).send({
                message: err.cause?.message || "Some error occurred while getting news by id."
            });
        }
    }

}

module.exports = new NewsController();