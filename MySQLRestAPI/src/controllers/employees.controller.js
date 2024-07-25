// Almacenando la lógica de las rutas
import { pool } from "../db.js"


export const getEmployees = async (req,res)=>{
    const [rows] =  await pool.query('SELECT * FROM employee ')
    res.json(rows)

}

export const getEmployee = async (req,res)=>{
    console.log(req.params)   
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[req.params.id])
    if(rows.length <= 0 ) return res.status(404).json({
        message: 'No se ha encontrado el usuario por id'

    })
    res.json(rows[0])

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

export const updateEmployee = async(req,res)=>{
    const {id} = req.params
    const {name,salary} = req.body

    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',[name,salary,id])
    console.log(result)
    if(result.affectedRows <= 0) res.status(404).json({
        message : 'Empleado no encontrado'
    })
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[id])
    
    res.json('Recibido')
}

export const deleteEmployee = async(req,res)=>{
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
    console.log(result)
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'No se pudo eliminar el usuario, no hay existencia de ese id'
    })
    
    res.sendStatus(204)


}