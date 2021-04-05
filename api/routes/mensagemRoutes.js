var express = require('express');
var mensagemController = require('../controllers/mensagemController');
var mensagem = require('../../mensagem/mensagemController');
var router = express.Router();

router.route('/mensagem')
    .get(mensagem.validaToken, mensagemController.obterTodosMensagem)
    .post(mensagem.validaToken, mensagemController.inserirMensagem);

router.route('/mensagem/:id')
    .get(mensagem.validaToken, mensagemController.obterMensagem)
    .delete(mensagem.validaToken, mensagemController.deletarMensagem)
    .put(mensagem.validaToken, mensagemController.alterarMensagem);

router.route('/mensagemUsuario/:usuarioId')
    .get(mensagem.validaToken, mensagemController.obterMensagemPorUsuario);

router.route('/mensagem/imagemUsuario/:id')
    .get(mensagem.validaToken, mensagemController.obterImagemMensagem);

router.route('/todosMensagemsValidos')
    .get(mensagem.validaToken, mensagemController.obterTodosMensagemValidos);

module.exports = router;