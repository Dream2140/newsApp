const commentsService = require('../services/comments.service');

class CommentsController {

    createComment = async (req, res, next) => {
        try {

            const data = await commentsService.createComment();

            return res.status(200).json(data);

        } catch (e) {
            next(e);
        }
    }

}

module.exports = new CommentsController();