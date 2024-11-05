// Se ejecuta antes de llegar a una ruta sin autenticar
// validará la existencia del token

// npm install cookie parser
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'
import errorMap from 'zod/locales/en.js'

export const authRequired = (req,res,next)=>{
    const {token} = req.cookies
    if(!token) return res.status(400).json({
        message: "No token no cats"

    })
    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err) return res.status(403).json({
            message: 'Invalid token'
        })

        req.user = user
        next();

    })


}

