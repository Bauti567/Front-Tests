// En este archivo se procesan las peticiones de la URL

export const register = (req,res)=>{
    console.log(req.body)
    res.send('registrando')
}

export const login = (req,res)=>{
    res.send('Login')
}