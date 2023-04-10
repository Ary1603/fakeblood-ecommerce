'use strict'

var express = require('express');
var md_Auth = require('../middlewares/authentication');
const upload = require('../libs/storage')

//Functions of the User Controller
var ProductController = require('../controllers/product');


var api = express.Router(); //Para tener acceso a los metodos GER POST DELETE

api.post('/upload-product',upload.single('image'), md_Auth.ensureAuth,ProductController.saveProduct );
api.delete('/delete-product/:id', md_Auth.ensureAuth, ProductController.deleteProduct);
api.get('/get-products', ProductController.getProducts)
module.exports = api;