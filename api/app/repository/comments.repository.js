const CommentSchema = require('../models/comment.model');
const {default: axios} = require("axios");
const Database = require('../database/dbApi');
const ApiError = require("../exceptions/ApiError");

const dbComment = new Database(CommentSchema);

class CommentRepository {
    createComment = async (newsData) => {
        try {
            return await dbComment.saveData(newsData);
        } catch (error) {
            throw ApiError.DataBaseError(error)
        }

    }

}

module.exports = new CommentRepository();