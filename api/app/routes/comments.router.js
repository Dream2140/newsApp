const express = require('express');


const router = express();

const commentsController = require('../controllers/comments.controller');

const createCommentValidator = require('../validators/joi/news/createCommentValidator');


router.post('/',createCommentValidator, commentsController.createComment);
/*
router.get('/', commentsController.getAll);
router.get('/:id', commentsController.getById);
router.put('/:id', commentsController.updateById);
router.delete('/:id', commentsController.deleteById);
*/

module.exports = router;