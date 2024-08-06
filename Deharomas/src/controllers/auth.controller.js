import { pool } from "../db.js"

export const Register = async(req,res)=>{
    const { email,password,usearname } = req.body
    const [rows] = await pool.query('INSERT INTO') 
    res.send({
        id: rows.insertId,
        email,
        password,
        usearname
    })
    

}


export const Login = (req,res)=>{
   res.send('Login page') 

}