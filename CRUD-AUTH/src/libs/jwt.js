import {TOKEN_SECRET} from '../config.js'

function createAccesToken(payload) {
    jwt.sign({
        payload,
        TOKEN_SECRET
    },
    {
        expiresIn:"1d",
    },(err,token)=>{
        if (err) console.log(err);
            res.cookie('token', token)
            res.json({
                message: "User created succesfuly"
            })

    });
}