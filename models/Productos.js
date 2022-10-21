const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },

    
    sku: {
        type: String,
        required: true,
    },

    stock: {
        type: String,
        required: true,
    },

    sucursal: {
        type: String,
        require: true
    },

    precio: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        require: true
    },
    /*
    date: {
    type: date,
    default: Date.now,
    }  
    */  
});

module.exports = mongoose.model('Productos', ProductoSchema);