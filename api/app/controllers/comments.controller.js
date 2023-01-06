const commentService = require('../services/comment.service');

class CommentsController {

    createComment = async (req, res, next) => {
        try {
            const data = {
                content: req.body.content,
                publishedAt: req.body.publishedAt,
                news: req.body.newsId,
                user: req.body.userId
            };

            const comment = await commentService.createComment(data);

            return res.status(200).json(comment);

        } catch (e) {
            next(e);
        }
    }

    getComment = async (req, res, next) => {
        try {
            const { id } = req.params;
            const comment = await commentService.getComment(id);
            return res.status(200).json(comment);

        } catch (e) {
            next(e);
        }
    }

    udateCommentById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = { content: req.body.content };
            const comment = await commentService.udateCommentById(id, data);
            return res.status(200).json(comment);

        } catch (e) {
            next(e);
        }
    }

    deleteCommentById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const comment = await commentService.deleteCommentById(id);
            return res.status(200).json(comment);

        } catch (e) {
            next(e);
        }
    }

    getAllNewsComments = async (req, res, next) => {
        try {
            const { id } = req.params;
            const commentsList = await commentService.getAllNewsComments(id);
            return res.status(200).json(commentsList);

        } catch (e) {
            next(e);
        }
    }

    getAllUserComments = async (req, res, next) => {
        try {
            const { id } = req.params;
            const commentsList = await commentService.getAllUserComments(id);
            return res.status(200).json(commentsList);

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CommentsController();