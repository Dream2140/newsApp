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
            return await dbComment.getOneDataByСriteria({_id:commentId});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    udateCommentById = async (commentId,data) => {
        try {
            return await dbComment.updateDataItemById(commentId,data);
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
            console.log(newsId)
            return await dbComment.getDataByСriteria({news:newsId});

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getAllUserComments = async (userId) => {
        try {
            return await dbComment.getDataByСriteria({user:userId});
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }
}

module.exports = new CommentRepository();