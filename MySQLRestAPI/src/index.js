import express from 'express'
import { pool } from './db.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
const PORT = 3000


// Routes

app.use(employeesRoutes)


app.listen(PORT)
console.log('App is working on ',PORT)



