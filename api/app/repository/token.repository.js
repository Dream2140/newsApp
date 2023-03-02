const tokenModel = require('../models/token.model');
const Database = require('../database/dbApi');
const ApiError = require("../exceptions/ApiError");

const dbToken = new Database(tokenModel);

class TokenRepository {

    saveToken = async (tokenData) => {
        try {

            return await dbToken.saveData(tokenData);

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    getToken = async (tokenData) => {
        try {
            return await dbToken.getOneDataByCriteria(tokenData);

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    updateToken = async (id, tokenData) => {
        try {
            return await dbToken.updateDataItemById(id, tokenData);

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    deleteToken = async (tokenData) => {
        try {

            return await dbToken.deleteItem(tokenData);

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }

    deleteAllTokens = async () => {
        try {

            return await dbToken.deleteAllData();

        } catch (error) {
            throw ApiError.DataBaseError(error)
        }
    }
}

module.exports = new TokenRepository();