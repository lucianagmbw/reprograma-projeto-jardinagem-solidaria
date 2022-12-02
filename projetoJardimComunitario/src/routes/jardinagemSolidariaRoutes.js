const express = require('express')
const router = express.Router()

const jardineiroController = require('../controllers/jardineiroSolidarioController')
const mudasController = require('../controllers/doadorDeMudasController')

router.post('/cadastrar/jardineiro',jardineiroController.criarJardineiro)
router.patch('/atualizar/jardineiro/:id',jardineiroController.atualizarJardineiro)
router.get('/exibirtodos/jardineiro', jardineiroController.buscarJardineiro)
router.get('/buscarpornome/jardineiro', jardineiroController.buscarJardineiro)
router.get('/buscar/jardineiro/:id',jardineiroController.buscarJardineiroPorId)
router.delete('/deletar/jardineiro/:id',jardineiroController.deletarJardineiro)

router.post('/cadastrar/doador', mudasController.criarDoadordeMudas)
router.patch('/atualizar/doador/:id',mudasController.atualizarDoadorDeMudas)
router.get('/exibirtodos/doador', mudasController.buscarDoadorDeMudas)
router.get('/buscarpornome/doador', mudasController.buscarDoadorDeMudas)
router.get('/buscar/doador/:id',mudasController.buscarDoadorPorId)
router.delete('/deletar/doador/:id',mudasController.deletarDoador)



module.exports = router