const express = require('express');

const router = express();

const userController = require('../controllers/user.controller');

const createUserValidator = require('../validators/joi/user/createUserValidator');


router.post('/update-from-cybersport/', createUserValidator, userController.createUser);


module.exports = router;