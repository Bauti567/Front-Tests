// Importando la conexión con la base de datos
import { createPool } from "mysql2";

// Bien saborioki
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'JuanDev*$1',
    port: 3306,
    database: 'deharomasdb'
})