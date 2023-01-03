const express = require('express');

const router = express();

const newsRouter = require('./news.router');
const userRouter = require('./user.router');

router.use('/news/', newsRouter);

router.use('/user/', userRouter);

router.all('*', (request, response) => {
    response.status(404).json({message:'Route not found'});
});

module.exports = router;
