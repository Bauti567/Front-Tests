const mongoose = require('mongoose')

const UserApp = mongoose.model('Prueba',{
    NombreUsr : {type: String, required: true},
    ApellidoUsr: {type: String, required: true} 
})