const User = {
    get: (req,res)=>{
        res.status(200).send('Este es un usuario');
    },
    list: (req,res) =>{
        res.status(200).send('Hola API');

    },
    create: (req,res)=>{
        res.status(201).send('Creando un user')
    },
    update: (req,res)=>{
        res.status(204).send('Actualizando user')
    },
    destroy: (req,res)=>{
        res.status(204).send('Eliminando usuario')

    }
}

module.exports = User // Al momento de importar el archivo 
// Enviamos el objeto de usuario

