'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model of the user

var UserSchema = Schema({
    name: String,
    lastName: String,
    email: String,
    password: String, 
    image: String
});

module.exports = mongoose.model('User', UserSchema);