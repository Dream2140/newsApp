const commentRepository = require('../repository/comment.repository');
const ApiError = require("../exceptions/ApiError");

class CommentService {

    createComment = async (commentData) => {
        return await commentRepository.createComment(commentData);
    }

    getComment = async (commentId) => {
        return await commentRepository.getComment(commentId);
    }
    udateCommentById = async (commentId,data) => {
        return await commentRepository.udateCommentById(commentId,data);
    }

    deleteCommentById = async (commentId) => {

        const comment = await commentRepository.deleteCommentById(commentId);

        if (!comment) {
            throw ApiError.NotFoundRequest(`Cannot delete comment with id ${commentId}. Maybe user was not found`)
        }

        return {message: `Comment with ${commentId}  was deleted successfully.`};
    }

    getAllNewsComments = async (newsId) => {
        return await commentRepository.getAllNewsComments(newsId);
    }
}

module.exports = new CommentService();