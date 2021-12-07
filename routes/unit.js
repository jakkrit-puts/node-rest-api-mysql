const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');
const passportJWT = require('./../middleware/passportJWT');

router.post('/', passportJWT.isLogin, unitController.create);
router.get('/', passportJWT.isLogin, unitController.getAll);

module.exports = router;