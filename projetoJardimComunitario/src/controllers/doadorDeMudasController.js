const { default: mongoose } = require("mongoose")
const doadorDeMudasScchema = require("../models/doadorDeMudasScchema")



const criarDoadordeMudas = async (req, res) => {

    const { nome, telefone, endereco, especies,quantidade, localDaDoacao, data,observacao } = req.body

    try {
        const doadorMudas = new doadorDeMudasScchema({
            
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            especies: especies,
            quantidade: quantidade,
            localDaDoacao: localDaDoacao,
            data: data,
            observacao: observacao
        })  
              
        const salvarDoador = await doadorMudas.save()
        res.status(201).json({
            message: `${doadorMudas.nome}, seu cadastro foi efetuado com sucesso!`,
            doador: salvarDoador

        })
       
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}



const atualizarDoadorDeMudas = async (req,res) => {
    
    try {
    
    const {id} = req.params
    const { nome, telefone, endereco, especies,quantidade, localDaDoacao, data,observacao } = req.body
    const procurarDoadorDeMudas = await doadorDeMudasScchema.findById(id)

    procurarDoadorDeMudas.nome = nome || procurarDoadorDeMudas.nome  
    procurarDoadorDeMudas.telefone = telefone || procurarDoadorDeMudas.telefone 
    procurarDoadorDeMudas.endereco = endereco || procurarDoadorDeMudas.endereco
    procurarDoadorDeMudas.especies = especies || procurarDoadorDeMudas.especies
    procurarDoadorDeMudas.quantidade = quantidade || procurarDoadorDeMudas.quantidade
    procurarDoadorDeMudas.localDaDoacao = localDaDoacao || procurarDoadorDeMudas.localDaDoacao
    procurarDoadorDeMudas.data = data || procurarDoadorDeMudas.data 
    procurarDoadorDeMudas.observacao = observacao || procurarDoadorDeMudas.observacao
   
     
    const doadorAtualizado = procurarDoadorDeMudas.save()
   
    res.status(200).json({
        message : `${procurarDoadorDeMudas.nome}, seu cadastro foi atualizado com sucesso!`,
        novoCadastro: procurarDoadorDeMudas
    })


    } catch (error) {
     
        res.status(400).json({
            message : error.message
        })
        
    }
}


const buscarDoadorDeMudas = async(req,res) =>{
   
    const {nome} = req.query
    let query = {}
    if (nome) query.nome = new RegExp(nome,'i')

    try {
    
        const doadorMudas = await doadorDeMudasScchema.find(query) 
         
            res.status(200).json({
            message : `Busca realizada com sucesso!`,           
            doador: doadorMudas//parei aqui
           
        })        
        
    } catch (error) {
            res.status(500).json({
            message: error.message
        })
       
    }
} 

const buscarDoadorPorId = async(req,res) =>{
   
    try {
        
        const doador = await doadorDeMudasScchema.findById(req.params.id)
        res.status(200).json({
            message : `${doador.nome}, seu cadastro foi encontrado com sucesso, por Id !`,
            Doador: doador
          })        
    } catch (error) {
       
            res.status(500).json({
            message : error.message        
        })
        
    }
}



const deletarDoador = async(req, res) => {
   
    try {

        const doador = await doadorDeMudasScchema.findById(req.params.id)
        console.log( `VALOR EXCLUIDO:`,doador)
        await doador.delete()
         

        res.status(200).json({
            message : `Doador removido do Sistema`
        })

    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}



module.exports = {
    criarDoadordeMudas,
    atualizarDoadorDeMudas,
    buscarDoadorDeMudas,
    buscarDoadorPorId,
    deletarDoador
    
}