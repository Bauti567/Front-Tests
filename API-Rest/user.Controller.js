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
    
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            res.sendStatus(204);
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).send('Error del servidor');
        }
    },
    destroy: async(req,res)=>{
        res.status(204).send('Eliminando usuario')

    }
}

module.exports = User // Al momento de importar el archivo 
// Enviamos el objeto de usuario

