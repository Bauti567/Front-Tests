// Conexion con base de datos llamado Pool
import { createPool } from "mysql2/promise";


// Parámetros de conexión
export const pool = createPool({
    host: 'localhost', //-------- Aquí iría una IP ---------
    user: 'root',
    password: 'JuanDev*$1',
    port: 3306,
    database: 'companydb'    
})


// El query permite generar consultas SQL
pool.query()
