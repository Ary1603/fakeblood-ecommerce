'use strict'

let express = require('express');

let PaymentsController = require('../controllers/payments')

let api = express.Router(); //Para tener acceso a los metodos GER POST DELETE


api.post('/create-payment', PaymentsController.createPayment)
api.get('/execute-payment', PaymentsController.executePayment)

module.exports = api;
