router = require("express-promise-router")();

const userController = require('../controllers/user.controller');

const createUserValidator = require('../validators/joi/user/createUserValidator');

const validateUser = require('../validators/custom/user/validateUserFields');



router.post('/register-user/', createUserValidator,  validateUser.validateNickname, validateUser.validateEmail, userController.createUser);


module.exports = router;