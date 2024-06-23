// Validación de datos del login de usuarios

export const validateSchema = (schema) => (req,res,next) =>{
    // Ejecutar validaciones de usuario (login registro etx)
    try{
        schema.parse(req.body)
        next()
    }catch(error){
        console.log(error.errors)
        return res.status(400).json(error.errors.map((error) => error.message))
    }  
   // Retornando los errores al validar un usuario
    
}