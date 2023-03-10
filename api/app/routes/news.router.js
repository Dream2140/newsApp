const express = require('express');
const multer = require("multer");

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
];

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '.jpg');
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (!whitelist.includes(file.mimetype)) {
            req.fileValidationError = "Forbidden file extension";
            cb(null, false, req.fileValidationError);
        }
        cb(null, true)
    },
    limits: {
        fileSize: 5000000
    }
});


const router = express();

const newsController = require('../controllers/news.controller');

const createNewsValidator = require('../validators/joi/news/createNewsValidator');

const deleteNewsValidator = require('../validators/joi/news/deleteNewsValidator');

const updateNewsValidator = require('../validators/joi/news/updateNewsValidator');

const getNewsByTitleValidator = require('../validators/joi/news/getNewsByTitleValidator');

const getNewsByIdValidator = require('../validators/joi/news/getNewsByIdValidator');

const newsImageValidator = require('../validators/custom/news/newsImageValidator');

router.get('/update-from-cybersport/', newsController.getAllNewsFromCybersport);

router.get('/update-from-guardian/', newsController.getNewsFromGuardian);

router.post('/post-news/', upload.single('image'), newsImageValidator, createNewsValidator, newsController.createNews);

router.delete('/delete-news/:id/', deleteNewsValidator, newsController.deleteNewsById);

router.delete('/delete-all-news/', newsController.deleteAllNews);

router.put('/update-news/:id/', updateNewsValidator, newsController.updateNewsById);

router.get('/get-news-by-title/', getNewsByTitleValidator, newsController.getNewsByTitle);

router.get('/get-news-by-id/:id/', getNewsByIdValidator, newsController.getNewsById);

router.get('/get-all-news/', newsController.getAllNews);

router.get('/category/', newsController.getNewsByCategory);

module.exports = router;