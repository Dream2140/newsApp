const newsService = require('../services/news.service');
const multer = require('multer');
const crypto = require('crypto');
class NewsController {

    getAllNewsFromCybersport = async (req, res) => {
        try {

            const data = await newsService.getAllTasksFromCybersport();

            return res.status(200).send(data);

        } catch (err) {
            console.error(err);

            res.status(500).send({
                message: "Some error occurred while getting news list from cybersport.ru."
            });
        }
    }

    createNews = async (req, res) => {
        try {
            if (req.file.size > 5000000) {
                return res.status(400).send('Image must be less than 5 MB in size');
            }
            if (req.fileValidationError) {
                return res.status(400).send('File should be an image');
            }

            const imagePath = 'downloads/' + req.file.originalname;

            const newsData= {
                _id:"4757f196-f91c-4dd0-b3b5-d2f0bddebb8b",
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

            res.status(500).send({
                message: "Some error occurred while creating news"
            });
        }
    }

}

module.exports = new NewsController();