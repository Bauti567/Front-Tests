// uso de paquetes y arranque de app

import app from "./app.js";
import { ConnectDB } from "./db.js";

const PORT = 8089

ConnectDB()
app.listen(PORT,()=>{
    console.log('App is running on Port: ', PORT)
})