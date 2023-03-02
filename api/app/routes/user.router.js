router = require("express-promise-router")();

const authUserMiddleware = require('../middlewares/auth.user.middleware');
const authAminMiddleware = require('../middlewares/auth.admin.middleware');

const userController = require('../controllers/user.controller');

const createUserValidator = require('../validators/joi/user/createUserValidation');

const validateUser = require('../validators/custom/user/validateUserFields');

const validateUserId = require('../validators/joi/user/validateUserId');

const loginUserValidation = require('../validators/joi/user/loginUserValidation');


router.post('/register/', createUserValidator, validateUser.validateRegisterNickname, validateUser.validateRegisterEmail, userController.createUser);

router.get('/user-info/:id', validateUserId, userController.getUserById);

router.get('/all-users/', authAminMiddleware, userController.getAllUsers);

router.delete('/delete-user/:id', authAminMiddleware, validateUserId, userController.deleteUserById);

router.delete('/delete-all-users/', authAminMiddleware, userController.deleteAllUsers);

router.put('/update-user/:id', authUserMiddleware, userController.updateUserById);

router.put('/update-password/:id', authUserMiddleware, userController.updatePassword);

router.post('/login', loginUserValidation, validateUser.validateLoginEmail, userController.loginUser);

router.post('/logout', userController.logoutUser);

router.get('/activate/:link', userController.activateUser);

router.get('/refresh', validateUser.validateRefreshToken, userController.refreshUser);


module.exports = router;