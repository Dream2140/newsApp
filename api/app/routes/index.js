const express = require('express');

const router = express();

const newsRouter = require('./news.router');

router.use('/news/', newsRouter);



module.exports = router;
