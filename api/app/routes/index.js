const express = require('express');

const router = express();

const newsRouter = require('./news.router');
const userRouter = require('./user.router');

router.use('/news/', newsRouter);

router.use('/user/', userRouter);



module.exports = router;
