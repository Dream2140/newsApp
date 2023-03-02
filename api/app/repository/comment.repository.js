const CommentSchema = require('../models/comment.model');
const Database = require('../database/dbApi');
const ApiError = require("../exceptions/ApiError");

const dbComment = new Database(CommentSchema);

class CommentRepository {
    createComment = async (commentData) => {
        try {
            return await dbComment.saveData(commentData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getComment = async (commentId) => {
        try {
            return await dbComment.getOneDataByCriteria({_id: commentId});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    udateCommentById = async (commentId, data) => {
        try {
            return await dbComment.updateDataItemById(commentId, data);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    deleteCommentById = async (commentId) => {
        try {
            return await dbComment.deleteDataItemById(commentId);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getAllNewsComments = async (newsId) => {
        try {

            return await dbComment.getDataByCriteria({news: newsId});

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getAllUserComments = async (userId) => {
        try {
            return await dbComment.getDataByCriteria({user: userId});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }
}

module.exports = new CommentRepository();