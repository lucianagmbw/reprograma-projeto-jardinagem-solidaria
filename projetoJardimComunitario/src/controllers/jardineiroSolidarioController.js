const { default: mongoose } = require("mongoose")
const jardineiroSchema = require("../models/jardineiroSolidarioSchema")



const criarJardineiro = async (req, res) => {

    const { nome, telefone, endereco, diaDaSemana, horario, bairros_atuantes, observacao } = req.body

    try {
        const jardineiro = new jardineiroSchema({
            
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            diaDaSemana: diaDaSemana,
            horario: horario,
            bairros_atuantes: bairros_atuantes,
            observacao: observacao
        })  
              
        const salvarJardineiro = await jardineiro.save()
        res.status(201).json({
            message: `${jardineiro.nome}, seu cadastro foi efetuado com sucesso!`,
            jardineiro: salvarJardineiro

        })
       
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}



const atualizarJardineiro = async (req,res) => {
    
    try {
    
    const {id} = req.params
    const { nome, telefone, endereco, diaDaSemana, horario, bairros_atuantes, observacao } = req.body
    const procurarJardineiro = await jardineiroSchema.findById(id)

    procurarJardineiro.nome = nome || procurarJardineiro.nome  
    procurarJardineiro.telefone = telefone || procurarJardineiro.telefone 
    procurarJardineiro.endereco = endereco || procurarJardineiro.endereco
    procurarJardineiro.diaDaSemana = diaDaSemana || procurarJardineiro.diaDaSemana
    procurarJardineiro.horario = horario || procurarJardineiro.horario
    procurarJardineiro.bairros_atuantes = bairros_atuantes || procurarJardineiro.bairros_atuantes
    procurarJardineiro.observacao = observacao || procurarJardineiro.observacao
   
     
    const jardineiroAtualizado = procurarJardineiro.save()
   
    res.status(200).json({
        message : `${procurarJardineiro.nome}, seu cadastro foi atualizado com sucesso!`,
        novoCadastro: procurarJardineiro
    })


    } catch (error) {
     
        res.status(400).json({
            message : error.message
        })
        
    }
}

const buscarJardineiro = async(req,res) =>{
   
    const {nome} = req.query
    let query = {}
    if (nome) query.nome = new RegExp(nome,'i')

    try {
    
        const jardineiro = await jardineiroSchema.find(query) 
         
            res.status(200).json({
            message : `${nome}, seu cadastro foi encontrado com sucesso!`,
            jardineiro: jardineiro
          })        
        
    } catch (error) {
            res.status(500).json({
            message: error.message
        })
       
    }
} 

const buscarJardineiroPorId = async(req,res) =>{
   
    try {
        
        const jardineiro = await jardineiroSchema.findById(req.params.id)
        res.status(200).json({
            message : `${jardineiro.nome}, seu cadastro foi encontrado com sucesso, por Id !`,
            jardineiro: jardineiro
          })        
    } catch (error) {
       
            res.status(500).json({
            message : error.message        
        })
        
    }
}

const deletarJardineiro = async(req, res) => {
   
    try {

        const jardineiro = await jardineiroSchema.findById(req.params.id)
        console.log( `VALOR EXCLUIDO:`,jardineiro)
        await jardineiro.delete()
         

        res.status(200).json({
            message : `Jardineiro removido do Sistema`
        })

    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}



module.exports = {
    criarJardineiro,
    atualizarJardineiro,
    buscarJardineiro,
    buscarJardineiroPorId,
    deletarJardineiro
}