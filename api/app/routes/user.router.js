const express = require('express');

const router = express();

const newsController = require('../controllers/news.controller');

const createNewsValidator = require('../validators/joi/news/createNewsValidator');



router.get('/update-from-cybersport/', newsController.getAllNewsFromCybersport);


module.exports = router;