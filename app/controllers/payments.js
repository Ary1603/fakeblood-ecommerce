'use strict'

const express = require('express');
const cors = require('cors');
const request = require('request');
const e = require('express');
var moment = require('moment');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const CLIENT = process.env.PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_SECRET_KEY;
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const PAYPAL_REQUEST_ID = {'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a'}


const auth = {
    user: CLIENT,
    pass: SECRET
}
// const body = {
//     intent: 'CAPTURE',
//     purchase_units: [{
//         amount: {
//             currency_code:'MXN',//La divisa
//             value: '115'// El monto a pagar
//         }
//     }], 
//     application_context: {
//         brand_name: 'NOSTRA',
//         landing_page: 'NO_REFERENCE',
//         user_action: 'PAY_NOW',
//         return_url: 'http://localhost:3800/api/execute-payment',
//         cancel_url: 'http://localhost:3800/api/cancel-payment'
//     }
// }

// application_context: {
//     brand_name: 'NOSTRA',
//     landing_page: 'NO_REFERENCE',
//     user_action: 'PAY_NOW',
//     return_url: 'http://localhost:3800/api/execute-payment',
//     cancel_url: 'http://localhost:3800/api/cancel-payment'
// }
const createPayment = (req, res) => {
    let params =req.body
    //console.log(params)
    const body = {
        "intent": "CAPTURE",
        "purchase_units": [
            {
            
              "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
              "amount": {
                "currency_code": "USD",
                "value": params.total
              }
            }
         ],
          "payment_source": {
            "paypal": {
              "experience_context": {
                "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                "payment_method_selected": "PAYPAL",
                "brand_name": "NOSTRA",
                "locale": "en-US",
                "landing_page": "LOGIN",
                "shipping_preference": "SET_PROVIDED_ADDRESS",
                "user_action": "PAY_NOW",
                "return_url": "http://localhost:5173/",//"http://localhost:3800/api/execute-payment",
                "cancel_url": "https://example.com/cancelUrl"
              }
            }
          }
    }

    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        headers: {
            "PayPal-Request-Id": '7b92603e-77ed-4896-8e78-5dea2050476b' + moment().unix()//"7b92603e-77ed-4896-8e78-5dea2050476b"//Hay que ponder el id del usuario
        },
        auth,
        
        body,
        json: true
    }, (err, response) => {
        //console.log('entre')
        res.json({
            data: response.body
        })
    })
}

/** 
    * CAPTURA EL DINERO
    * @param {*} req
    * @param {*} res

*/

const executePayment = (req, res) => {
    const token = req.query.token;
    //console.log(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`);

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        headers: {
            "PayPal-Request-Id": "7b92603e-77ed-4896-8e78-5dea2050476a"
        },
        auth,
        
        body:{},
        json: true
    }, (err, response) => {
        //console.log('entre')
        res.json({
            data: response.body
        })
    
    })
}

//Exportamos las funciones
module.exports = {
    createPayment,
    executePayment
}