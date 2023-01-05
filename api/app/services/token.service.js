const jwt = require('jsonwebtoken');
const tokenRepository = require('../repository/token.repository');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            console.log(userData)
            return userData;

        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {

            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

            return userData;

        } catch (e) {
            throw e;
        }
    }

    async saveToken(userId, refreshToken) {

        const tokenData = await tokenRepository.getToken({user: userId});

        if (tokenData) {
            return await tokenRepository.updateToken(tokenData._id, {refreshToken});

        }

        const token = await tokenRepository.saveToken({user: userId, refreshToken});

        return token;
    }

    async deleteToken(refreshToken) {

        const tokenData = await tokenRepository.deleteToken(refreshToken);

        return tokenData;
    }

    async deleteAllTokens() {

        const tokenData = await tokenRepository.deleteAllTokens();

        return tokenData;
    }

    async findToken(refreshToken) {

        const tokenData = await tokenRepository.getToken({refreshToken});

        return tokenData;
    }
}

module.exports = new TokenService();
