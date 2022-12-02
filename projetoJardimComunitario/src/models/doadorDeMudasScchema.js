const mongoose = require('mongoose');

const doadorDeMudasSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,

    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },


    endereco: {
        cep: {
            type: String,
            required: false
        },
        rua: {
            type: String,
            required: false
        },
        numero: {
            type: Number,
            required: false
        },
        complemento: {
            type: String,
            required: false
        },
        referencia: {
            type: String,
            required: false
        },
        estado: {
            type: String,
            required: false
        },
        cidade: {
            type: String,
            required: false
        },
        bairro: {
            type: String,
            required: false
        }
    },
    

    especies: [{
        type: String,
        required : false
    }],
    
    quantidade: {
        type: Number,
        required : false
    },

    localDaDoacao: {
        type: String,
        required: true
    },

    data: {
        type: String,
        required: true
    },

    observacao: {
        type: String,
        required: false
    }




}, { timestamps: true })


module.exports = mongoose.model('doadorDeMudas', doadorDeMudasSchema)





