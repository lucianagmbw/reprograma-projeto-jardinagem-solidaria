const express = require('express')
const router = express.Router()

const jardineiroController = require('../controllers/jardineiroSolidarioController')

router.post('/cadastrar/jardineiro',jardineiroController.criarJardineiro)
router.patch('/atualizar/jardineiro/:id',jardineiroController.atualizarJardineiro)
router.get('/exibirtodos/jardineiro', jardineiroController.buscarJardineiro)
router.get('/buscarpornome/jardineiro', jardineiroController.buscarJardineiro)
router.get('/buscar/jardineiro/:id',jardineiroController.buscarJardineiroPorId)
router.delete('/deletar/jardineiro/:id',jardineiroController.deletarJardineiro)





module.exports = router