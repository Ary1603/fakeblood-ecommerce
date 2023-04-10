'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model of the user

var ProductSchema = Schema({
    name: String,
    price: String,
    brand: String,
    image: String,
    categorie: String,
    description: String,
    created_at: String, //Esta es la fecha de la punlicación
    user: { type: Schema.ObjectId, ref:'User'}
});

ProductSchema.methods.setImgUrl = function setImgUrl (filename) {
    this.image = `http://localhost:3800/public/${filename}`
}

module.exports = mongoose.model('Product', ProductSchema);