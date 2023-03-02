const userService = require('../services/user.service');

class UserController {

    createUser = async (req, res, next) => {
        try {

            const {nickname, email, password} = req.body;

            const userData = await userService.createUser({nickname, email, password});

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.status(200).json(userData);

        } catch (e) {
            next(e);
        }
    }

    deleteUserById = async (req, res, next) => {
        try {

            const {id} = req.params;

            const data = await userService.deleteUserById(id);

            return res.status(200).json(data);

        } catch (e) {
            next(e);
        }
    }

    updateUserById = async (req, res, next) => {
        try {
            const {id} = req.params;

            const updatedUser = await userService.updateUserById(id, req.body);

            return res.status(200).json(updatedUser);

        } catch (e) {
            next(e);
        }
    }

    updatePassword = async (req, res, next) => {
        try {
            const {id} = req.params;

            const {currentPassword, newPassword} = req.body;
            const updatedUser = await userService.updatePassword(id, currentPassword, newPassword);

            return res.status(200).json(updatedUser);

        } catch (e) {
            next(e);
        }
    }

    getAllUsers = async (req, res, next) => {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || '-1';

            const userList = await userService.getAllUsers(page, limit);

            return res.status(200).json(userList);

        } catch (e) {
            next(e);
        }
    }

    getUserById = async (req, res, next) => {
        try {

            const {id} = req.params;
            const user = await userService.getUserById(id);

            return res.status(200).json(user);

        } catch (e) {
            next(e);
        }
    }

    deleteAllUsers = async (req, res, next) => {
        try {
            const data = await userService.deleteAllUsers();

            return res.status(200).json(data);

        } catch (e) {
            next(e);
        }
    }

    loginUser = async (req, res, next) => {
        try {
            const {email, password} = req.body;

            const user = await userService.loginUser({email, password});

            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.status(200).json(user);

        } catch (e) {
            next(e);
        }
    }

    logoutUser = async (req, res, next) => {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logoutUser(refreshToken);
            res.clearCookie('refreshToken');

            return res.status(200).json(token);

        } catch (e) {
            next(e);
        }
    }

    activateUser = async (req, res, next) => {
        try {
            const activationLink = req.params.link;

            await userService.activateUser(activationLink);

            return res.redirect('https://www.youtube.com/');

        } catch (e) {
            next(e);
        }
    }

    refreshUser = async (req, res, next) => {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refreshUser(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();