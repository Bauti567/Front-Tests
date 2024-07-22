import express from 'express'
import { pool } from './db.js'

const app = express()
const PORT = 3000


// Routes


app.listen(PORT)
console.log('App is working on ',PORT)



