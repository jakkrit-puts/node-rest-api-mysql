const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const passportJWT = require('./../middleware/passportJWT');

router.get('/', passportJWT.isLogin, productController.getAll);
router.get('/:id', passportJWT.isLogin, productController.getByID);
router.post('/', passportJWT.isLogin, productController.create);
router.put('/:id', passportJWT.isLogin, productController.update);
router.delete('/:id', passportJWT.isLogin, productController.remove);

module.exports = router;