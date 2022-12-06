const { default: mongoose } = require("mongoose")
const espacoJardimSchema = require("../models/espacoJardimSchema")



const cadastrarEspaco = async (req, res) => {

    const { nome_responsavel, telefone_responsavel, localidade, area_livre,  data_sugestao, observacao } = req.body

    try {
        const espaco = new espacoJardimSchema({
            
            nome_responsavel: nome_responsavel,
            telefone_responsavel: telefone_responsavel,
            localidade: localidade,
            area_livre: area_livre,
            data_sugestao: data_sugestao,
            observacao: observacao
        })  
              
        const salvarEspaco = await espaco.save()
        res.status(201).json({
            message: `${espaco.nome_responsavel}, sua sugestão foi salva com sucesso!`,
            espaco: salvarEspaco

        })
       
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}




const atualizarEspaco = async (req,res) => {
    
    try {
    
    const {id} = req.params
    const { nome_responsavel, telefone_responsavel, localidade, area_livre,  data_sugestao, observacao } = req.body
    
    const procurarEspaco = await espacoJardimSchema.findById(id)

    procurarEspaco.nome_responsavel = nome_responsavel ||   procurarEspaco.nome_responsavel 
    procurarEspaco.telefone_responsavel = telefone_responsavel || procurarEspaco.telefone_responsavel
    procurarEspaco.localidade = localidade || procurarEspaco.localidade
    
    procurarEspaco.area_livre = area_livre || procurarEspaco.area_livre
    procurarEspaco.data_sugestao = data_sugestao || procurarEspaco.data_sugestao
    procurarEspaco.observacao = observacao || procurarEspaco.observacao
   
     
    const espacoAtualizado = procurarEspaco.save()
   
    res.status(200).json({
        message : `${procurarEspaco.nome_responsavel}, seu cadastro do espaço para jardim foi atualizado com sucesso!`,
        atualizado: procurarEspaco
    })


    } catch (error) {
     
        res.status(400).json({
            message : error.message
        })
        
    }
}


const buscarEspaco = async(req,res) =>{
   
    const {nome_responsavel} = req.query
    let query = {}
    if (nome_responsavel) query.nome_responsavel = new RegExp(nome_responsavel,'i')
   
    try {
    
        const espaco = await espacoJardimSchema.find(query) 
         
            res.status(200).json({
            message : `Busca realizada com sucesso!`,           
            espacos: espaco
           
        })        
        
    } catch (error) {
            res.status(500).json({
            message: error.message
        })
       
    }
} 


const buscarEspacoPorId = async(req,res) =>{
   
    try {
        
        const espaco = await espacoJardimSchema.findById(req.params.id)
        res.status(200).json({
            message : `${espaco.nome_responsavel}, seu cadastro foi encontrado com sucesso, por Id !`,
            espaco: epaco
          })        
    } catch (error) {
       
            res.status(500).json({
            message : error.message        
        })
        
    }
}



const deletarEspaco = async(req, res) => {
   
    try {

        const espaco = await espacoJardimSchema.findById(req.params.id)
        console.log( `VALOR EXCLUIDO:`,espaco)
        await espaco.delete()
         

        res.status(200).json({
            message : `Espaco para jardim removido do Sistema`
        })

    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}






module.exports = {
    cadastrarEspaco,
    atualizarEspaco,
    buscarEspaco,
    deletarEspaco,
    buscarEspacoPorId
}