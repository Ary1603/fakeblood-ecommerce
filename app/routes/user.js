'use strict'

var express = require('express');

//Functions of the User Controller
var UserController = require('../controllers/user');

var api = express.Router();

// Aqui se cargan los middlewares

var api = express.Router(); //Para tener acceso a los metodos GER POST DELETE

api.get('/home', UserController.home);
api.post('/register-user',UserController.saveUser);
api.post('/login-user', UserController.loginUser);// Aqui consigo el tokenn con gettoken true en body

module.exports = api;