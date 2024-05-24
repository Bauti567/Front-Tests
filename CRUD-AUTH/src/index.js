// Encargado de arrancar la app
const app = require('./app.js')
const connectDB = require('./db.js')
const PORT = 3000


connectDB();
app.listen(PORT, ()=>{
    console.log('Server on Port', 3000);

})

