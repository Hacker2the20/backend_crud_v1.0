const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
    productos: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    sucursal: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        require: true
    },

    metodoDePago: {
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

module.exports = mongoose.model('Ventas', VentaSchema);