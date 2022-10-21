const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    clave: {
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

module.exports = mongoose.model('Roles', RolSchema);