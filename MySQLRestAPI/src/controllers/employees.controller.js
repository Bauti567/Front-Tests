// Almacenando la lógica de las rutas
import { pool } from "../db.js"


export const getEmployees = (req,res)=>{
    res.send('Obteniendo empleados')
}

export const createEmployee = async (req,res)=>{
    //console.log(req.body) // ver los datos enviados
    const {name,salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)',[name,salary])    
    res.send({
        id: rows.insertId,
        name,
        salary,

    })
}

export const updataEmployee = (req,res)=>{
    res.send('Actualizando empleados')

}

export const deleteEmployee = (req,res)=>{
    res.send('Eliminando empleados')

}