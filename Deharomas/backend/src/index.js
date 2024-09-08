import app from "./app.js";
import { ConnectDb } from "./db.js";


const PORT = 4000
ConnectDb()
app.listen(PORT,()=>{
    console.log('Deharomas App on port',PORT)
})
