require('dotenv').config()                                   //nos da acceso al manejo 

const express = require("express")                            //importando express y otras librerias
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {              //funcion para conectar a base de datos del archivo .env
    useNewUrlParser: true,
    useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

console.log('**************', process.env)

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')  //se hace una conexion de archivo con subscribers a traves de esa ruta

// ******** intente crear otro archivo llamado app.js pero las rutas que nesecitaria serian las mismas  
app.use('/api', subscribersRouter)             

app.listen(3000, () => console.log('server is running'))      //poner el puerto en modo escucha