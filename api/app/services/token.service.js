const jwt = require('jsonwebtoken');
const tokenRepository = require('../repository/token.repository');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1d'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {

            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);

        } catch (e) {
            throw e;
        }
    }

    async saveToken(userId, refreshToken) {

        const tokenData = await tokenRepository.getToken({user: userId});

        if (tokenData) {
            return await tokenRepository.updateToken(tokenData._id, {refreshToken});

        }

        return await tokenRepository.saveToken({user: userId, refreshToken});

    }

    async deleteToken(refreshToken) {

        return await tokenRepository.deleteToken(refreshToken);

    }

    async deleteAllTokens() {

        return await tokenRepository.deleteAllTokens();

    }

    async findToken(refreshToken) {

        return await tokenRepository.getToken({refreshToken});

    }
}

module.exports = new TokenService();
