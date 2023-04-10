'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secretKey = 'ecommerce-secret-key';

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
    
    }

    var token = req.headers.authorization.replace(/['"]+/g,''); //En el primer parametro se dice que se van a eliminar las comillas dobles y simples y despues de la come dice que se sutituira por nada
    console.log(token)
    
    try{
        console.log("entre")
        
        var payload = jwt.decode(token, secretKey);
        console.log("Payload:")
        console.log(payload)
        if(payload.exp <= moment().unix()){
            return res.status(401).send({
                message: 'El token a expirado'
            });
        }
    }catch(ex){
        return res.status(404).send({
            message: 'El token no es valido'
        });
    }
    
    req.user = payload;

    next();


};