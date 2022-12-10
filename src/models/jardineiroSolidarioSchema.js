const mongoose = require('mongoose');

const jardineiroSolidarioSchema = new mongoose.Schema({

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
            required: true
        },
        numero: {
            type: Number,
            required: true
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
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        }
    },


    diaDaSemana: {
        type: String,
        required: true
    },

    horario: {
        type: String,
        required: true
    },

    bairros_atuantes: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: false
    }




}, { timestamps: true })


module.exports = mongoose.model('jardineiroSolidario', jardineiroSolidarioSchema)