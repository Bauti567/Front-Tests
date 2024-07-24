import express from 'express'
import { pool } from './db.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
const PORT = 3000

app.use(express.json())

// Routes

app.use(employeesRoutes)
app.use(indexRoutes)


app.listen(PORT)
console.log('App is working on ',PORT)



