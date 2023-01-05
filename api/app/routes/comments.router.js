const express = require('express');


const router = express();

const commentsController = require('../controllers/comments.controller');

const createCommentValidator = require('../validators/joi/comment/createCommentValidator');
const getCommentValidator= 

router.post('/',createCommentValidator, commentsController.createComment);

router.get('/:id', commentsController.getComment);

router.put('/:id', commentsController.udateCommentById);

router.delete('/:id', commentsController.deleteCommentById);

router.get('/new-comemnts', commentsController.getAllNewsComments);


module.exports = router;