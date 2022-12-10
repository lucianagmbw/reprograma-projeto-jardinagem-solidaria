require('dotenv').config()
const express = require ('express')
const cors =  require('cors')

const app = express()
//chamar os routes da aplicação

const database = require('./database/mongoConfig')
const jardimRoutes = require('./routes/jardinagemSolidariaRoutes')

const userRoutes = require('./routes/userRoutes')




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//colocar a rota raiz da aplicação
app.use("/jardinagem",jardimRoutes)

//Rota de autenticação
app.use("/users", userRoutes)

database.connect()

module.exports = app
