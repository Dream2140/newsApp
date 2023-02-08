const express = require('express');


const router = express();

const commentsController = require('../controllers/comments.controller');

const createCommentValidator = require('../validators/joi/comment/createCommentValidator');

const commentIdValidator = require('../validators/joi/comment/createCommentValidator');

const updateCommentValidator = require('../validators/joi/comment/updateCommentValidator');

router.post('/',createCommentValidator, commentsController.createComment);

router.get('/:id',commentIdValidator, commentsController.getComment);

router.put('/:id',updateCommentValidator, commentsController.udateCommentById);

router.delete('/:id',commentIdValidator, commentsController.deleteCommentById);

router.get('/news-coments/:id', commentsController.getAllNewsComments);

router.get('/user-coments/:id',commentIdValidator, commentsController.getAllUserComments);

module.exports = router;