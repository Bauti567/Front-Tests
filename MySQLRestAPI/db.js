// Conexion con base de datos llamado Pool
import { createPool } from "mysql2/promise";


// Parámetros de conexión

export const pool = createPool({
    //-------- Aquí iría una IP ---------
    host: 'localhost', 
    user: 'root',
    password: 'JuanDev*$1',
    port: 3306,
    database: 'companydb'  

})





