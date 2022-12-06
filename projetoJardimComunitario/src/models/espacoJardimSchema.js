const mongoose = require('mongoose');

const espacoJardimSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,

    nome_responsavel: {
        type: String,
        required: true
    },
    telefone_responsavel: {
        type: String,
        required: true
    },


    localidade: {
       
        rua: {
            type: String,
            required: false
        },
             
        bairro: {
            type: String,
            required: false
        },

        referencia: {
            type: String,
            required: false
        }
    },
   
   area_livre: {
        type: String,
        required : false
    },
    

    data_sugestao: {
        type: String,
        required: true
    },

    observacao: {
        type: String,
        required: false
    }




}, { timestamps: true })


module.exports = mongoose.model('espacoJardim', espacoJardimSchema)





