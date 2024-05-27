// Encargado de arrancar la app
import app from './app.js';
import {connectDB} from './db.js'
import authRoutes from "./routes/auth.routes.js"

const PORT = 3000

connectDB();
app.listen(PORT, ()=>{
    console.log('Server on Port', 3000);

})

