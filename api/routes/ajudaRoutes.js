var express = require('express');
var ajudaController = require('../controllers/ajudaController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/ajuda')
    .get(autenticacao.validaToken, ajudaController.obterTodosAjuda)
    .post(autenticacao.validaToken, ajudaController.inserirAjuda);

router.route('/ajuda/:id')
    .get(autenticacao.validaToken, ajudaController.obterAjuda)
    .delete(autenticacao.validaToken, ajudaController.deletarAjuda)
    .put(autenticacao.validaToken, ajudaController.alterarAjuda);

router.route('/ajudaUsuario/:usuarioId')
    .get(autenticacao.validaToken, ajudaController.obterAjudaPorUsuario);

router.route('/ajuda/imagemUsuario/:id')
    .get(autenticacao.validaToken, ajudaController.obterImagemAjuda);

router.route('/todosAjudasValidos')
    .get(autenticacao.validaToken, ajudaController.obterTodosAjudaValidos);

module.exports = router;