const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
    sucursal: {
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

module.exports = mongoose.model('Users', UserSchema);