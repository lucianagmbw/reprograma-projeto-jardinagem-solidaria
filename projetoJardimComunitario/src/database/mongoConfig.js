const mongoose = require('mongoose')
const conexao = process.env.MONGODB_URI

const connect = async()=>{
    try {
        await mongoose.connect(conexao,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('<<<<Mongodb conectado>>>>')
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {
    connect
}