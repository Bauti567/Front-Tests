const mongoose = require('mongoose');

// Modelo de usuario
const Users = mongoose.model('User',{
    name: { type: String, required: true, minLength: 3},
    lastName: { type: String, required: true, minLength: 3},

});

module.exports = Users // Exportando el modelo para poder almacenar

