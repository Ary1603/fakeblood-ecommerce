'use strict'

var Product = require('../models/product');
var moment = require('moment');
var FileReader = require('filereader')
var path = require('path');
var fs = require('fs');


//Save new product

function saveProduct(req, res) {

    const reader = new FileReader();
    
    let params = req.body;
    let product = new Product();
    console.log('desde productos')
    console.log(req.body)
    console.log(req.file)

    
    if (params.name && params.brand && params.price && params.categorie && params.description) {
        product.name = params.name;
        product.brand = params.brand;
        product.price = params.price;
        //product.image = params.image
        product.categorie = params.categorie;
        product.description = params.description
        product.user = req.user.sub; //aqui es el usuario quien lo sube
        product.created_at = moment().unix();
        console.log('req file')
        console.log(req.files)
        //let reader = new FileReader();
        // fs.readFile(params.image, (err, data) =>{
        //     if(err){
        //         throw new Error(err)
        //     }

        //     console.log(data)
        // })
        //console.log( fs.createReadStream(params.image))
        if(req.file){
            console.log('entre al file')
            const { filename } =  req.file; 
            product.setImgUrl(filename)
        }

        Product.find({
           $and:[{name: product.name},
            {brand: product.brand}] 
        }).exec((err, products) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición de usuarios '
            });

            if (products && products.length >= 1) {
                return res.status(200).send({
                    message: 'El producto que intentas registrar ya existe'
                });
            } else {
                product.save((err, productStored) => {
                    //Cambio guardar imagen
                    
                    if (err) return res.status(500).send({
                        message: 'Error al guardar el producto '
                    });

                    if (productStored) {
                        res.status(200).send({
                            product: productStored
                        });
                    } else {
                        res.status(404).send({
                            message: 'No se ha registrado el producto'
                        });
                    }
                });
            }
        })



    } else {
        res.status(200).send({
            message: 'Algo salio mal comprube que se hayan enviado todos los campos'
        });
    }

}

function deleteProduct(req, res){
    console.log(req)
    var productId = req.params.id;
    console.log(productId)
    Product.find({'user': req.user.sub, '_id': productId}).remove((err, productRemoved) => {
        if(err) return res.status(500).send({message: 'Error al intentar eliminar la publicación'});
 
        if(productRemoved) return res.status(404).send({message: 'El producto no existe o ya ha sido eliminada'});
 
        return res.status(200).send({message: 'El producto ha sido eliminadao'});
    });
}

function getProducts(req, res){
    let page = 1;
    var itemsPerpage = 5;
    Product.find().exec((err, products) => {
        if(err) return res.status(500).send({message: 'Error en la peticion'});

        if(!products){
            return res.status(404).send({message: 'No hay productos disponibles '});
        } else{
            res.send(products)
        }
    })

    // Product.find().sort('_id').paginate(page, itemsPerpage, (err, products, total) => {
    //     if(err) return res.status(500).send({message: 'Error en la peticion'});

    //     if(!products){
    //         return res.status(404).send({message: 'No hay productos disponibles '});
    //     } else{
    //         res.send(products)
    //     }
    // })
}

//Exportamos las funciones
module.exports = {
    saveProduct, 
    deleteProduct, 
    getProducts
}