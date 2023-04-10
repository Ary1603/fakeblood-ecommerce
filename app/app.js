'use strict'

// BACKEND

var express = require('express'); //aqui se carga el modulo express y nos permite trabajar con las rutas y el protocolo http
var bodyParser = require('body-parser'); // sirve para convertir lo que nos llegan en las peticiones a convertirlo en objetos JS
const { restart } = require('nodemon');

var app = express();

// Cargar rutas
var user_routes = require('./routes/user');
var product_routes = require('./routes/product')
var payments_routes = require('./routes/payments')

// Middlewares (es un software que asiste a una app para interactuar o comunicarse con apps entre muchas cosas mas)

app.use(bodyParser.urlencoded({extended:false}));//estaba en false
app.use(bodyParser.json());


// Configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

// Rutas
app.use('/api',user_routes);
app.use('/api',product_routes);
app.use('/api', payments_routes);

//Img mongo
app.use('/public', express.static(`${__dirname}/storage/imgs`))
//exportar 
module.exports = app;