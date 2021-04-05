var express = require('express');
var mensagemController = require('../controllers/mensagemController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/mensagem')
    .get(autenticacao.validaToken, mensagemController.obterTodosMensagem)
    .post(autenticacao.validaToken, mensagemController.inserirMensagem);

router.route('/mensagem/:id')
    .get(autenticacao.validaToken, mensagemController.obterMensagem)
    .delete(autenticacao.validaToken, mensagemController.deletarMensagem)
    .put(autenticacao.validaToken, mensagemController.alterarMensagem);

router.route('/mensagemUsuario/:usuarioId')
    .get(autenticacao.validaToken, mensagemController.obterMensagemPorUsuario);

router.route('/mensagem/imagemUsuario/:id')
    .get(autenticacao.validaToken, mensagemController.obterImagemMensagem);

router.route('/todosMensagemsValidos')
    .get(autenticacao.validaToken, mensagemController.obterTodosMensagemValidos);

module.exports = router;