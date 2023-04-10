'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');

//Ruta de prueba
function home(req, res) {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    });
}

//User register
function saveUser(req, res) {
    let params = req.body;
    let user = new User();
    

    console.log(params)
    if (params.name && params.lastName && params.email && params.password) {
        user.name = params.name;
        user.lastName = params.lastName;
        user.email = params.email;
        user.password = params.password;
        user.image = null;

        //Check that the email of the user doesn't be register before

        User.find({
            email: user.email
        }).exec((err, users) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición de usuarios '
            });

            if (users && users.length >= 1) {
                return res.status(200).send({
                    message: 'El usuario que intentas registrar ya existe'
                });
            } else {

                // Aqui Cifra la contraseña y guarda los datos
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    user.password = hash;

                    user.save((err, userStored) => {
                        if (err) return res.status(500).send({
                            message: 'Error al guardar el usurio '
                        });

                        if (userStored) {
                            res.status(200).send({
                                user: userStored
                            });
                        } else {
                            res.status(404).send({
                                message: 'No se ha registrado el usuario'
                            });
                        }
                    });
                });
            }
        })
    } else {
        res.status(200).send({
            message: 'Algo salio mal comprube que se hayan enviado todos los campos'
        });
    }
}


// Login 
function loginUser(req, res) {
    let params = req.body;
    let email = params.email;
    let password = params.password;


    User.findOne({
        email: email
    }, (err, user) => {
        if (err) return res.status(500).send({
            message: 'Error en la petición'
        });
        if (user) {
            bcrypt.compare(password, user.password, (err, check) => {
                if (check) {
                    // Return the user
                    if (params.gettoken) {
                        // Generar y Devolver un token 
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        });

                    } else {
                        //Devolver datos de usrio 

                        user.password = undefined; // Lo que hace aqui es para ya no devolver la contraseñaa y la vean 

                        return res.status(200).send({ user });

                    }
                } else {
                    return res.status(404).send({ message: 'El usuario no se a ha podido identificar' });
                }
            });
        } else {
            return res.status(404).send({ message: 'El usuario no se a ha podido identificar!!' })
        }
    });
}
//Exportamos las funciones
module.exports = {
    home,
    saveUser, 
    loginUser
}