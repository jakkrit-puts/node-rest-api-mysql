const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passportJWT = require('./../middleware/passportJWT');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/profile', passportJWT.isLogin, userController.profile);

module.exports = router;
