var express = require('express');
var vaquinhaController = require('../controllers/vaquinhaController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/vaquinha')
    .get(autenticacao.validaToken, vaquinhaController.obterTodosVaquinha)
    .post(autenticacao.validaToken, vaquinhaController.inserirVaquinha);

router.route('/vaquinha/:id')
    .get(autenticacao.validaToken, vaquinhaController.obterVaquinha)
    .delete(autenticacao.validaToken, vaquinhaController.deletarVaquinha)
    .put(autenticacao.validaToken, vaquinhaController.alterarVaquinha);

router.route('/vaquinha/imagemVaquinha/:id')
    .get(autenticacao.validaToken, vaquinhaController.obterImagemVaquinha);

module.exports = router;