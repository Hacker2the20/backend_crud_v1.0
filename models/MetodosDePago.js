const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetodoDePagoSchema = new Schema({
    
    nombre: {
        type: String,
        required: true,
    },


    codigo: {
        type: String,
        required: true,
    },

    /*
    metodo: {
        type: String,
        required: true,   
    },
    /*
    sucursal: {
        type: String,
        require: true
    },
    
    date: {
    type: date,
    default: Date.now,
    }  
    */  
});

module.exports = mongoose.model('MetodosDePago', MetodoDePagoSchema);