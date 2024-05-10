const Users = require('./user') // IMPORTANDO EL MODELO USUARIO

const User = {

    get: async(req,res)=>{
        const { id } = req.params
        const user = await Users.findOne({_id:id})
        res.status(200).send(user);
        
    
    },
    list: async (req,res) =>{
        const users = await Users.find()
        res.status(200).send(users);

    },

    //Crear usuario
    create: async(req,res)=>{
        const user = new Users(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)
        
    },
    update: async(req,res)=>{
        res.status(204).send('Actualizando user')
    },
    destroy: async(req,res)=>{
        res.status(204).send('Eliminando usuario')

    }
}

module.exports = User // Al momento de importar el archivo 
// Enviamos el objeto de usuario

