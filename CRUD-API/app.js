// Este es el punto de inicio de mi app
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 4000


// Este es el Middleware
app.listen(PORT,()=>{
    console.log('APP IS RUNNING ', PORT)

})
