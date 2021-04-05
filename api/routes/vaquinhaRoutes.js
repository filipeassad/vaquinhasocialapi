var express = require('express');
var vaquinhaController = require('../controllers/vaquinhaController');
var vaquinha = require('../../vaquinha/vaquinhaController');
var router = express.Router();

router.route('/vaquinha')
    .get(vaquinha.validaToken, vaquinhaController.obterTodosVaquinha)
    .post(vaquinha.validaToken, vaquinhaController.inserirVaquinha);

router.route('/vaquinha/:id')
    .get(vaquinha.validaToken, vaquinhaController.obterVaquinha)
    .delete(vaquinha.validaToken, vaquinhaController.deletarVaquinha)
    .put(vaquinha.validaToken, vaquinhaController.alterarVaquinha);

router.route('/vaquinhaVaquinha/:vaquinhaId')
    .get(vaquinha.validaToken, vaquinhaController.obterVaquinhaPorVaquinha);

router.route('/vaquinha/imagemVaquinha/:id')
    .get(vaquinha.validaToken, vaquinhaController.obterImagemVaquinha);

router.route('/todosVaquinhasValidos')
    .get(vaquinha.validaToken, vaquinhaController.obterTodosVaquinhaValidos);

module.exports = router;