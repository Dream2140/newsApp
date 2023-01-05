const commentsRepository = require('../repository/comments.repository');
const ApiError = require("../exceptions/ApiError");

class CommentsService {

    createComment = async () => {
        return await commentsRepository.createComment();
    }
}

module.exports = new CommentsService();