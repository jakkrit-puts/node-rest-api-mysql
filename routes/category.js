const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const passportJWT = require('./../middleware/passportJWT');

router.get('/', passportJWT.isLogin, categoryController.getAll);
router.get('/:id', passportJWT.isLogin, categoryController.getByID);
router.post('/', passportJWT.isLogin, categoryController.create);
router.put('/', passportJWT.isLogin, categoryController.update);
router.delete('/:id', passportJWT.isLogin, categoryController.remove);

module.exports = router;