'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secretKey = 'ecommerce-secret-key';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
        iat: moment().unix(), // iat: siginifca decha de cración del token
        exp: moment().add(30, 'days').unix
    };

    return jwt.encode(payload, secretKey);

};