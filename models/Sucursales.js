const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SucursalSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },

    codigo: {
        type: String,
        required: true,
    },

    
    telefono: {
        type: String,
        require: true
    },

    direccion: {
        type: String,
        required: true,
    },
    
    ubicacion: {
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

module.exports = mongoose.model('Sucursales', SucursalSchema);