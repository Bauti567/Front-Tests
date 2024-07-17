// Conexion con base de datos llamado Pool
import { createPool } from "mysql2";


// Parámetros de conexión
createPool({
    host: 'localhost', //-------- Aquí iría una IP ---------
    user: 'root',
    password: 'JuanDev*$1',
    port: 3306,
    database: 'companydb'    
})
