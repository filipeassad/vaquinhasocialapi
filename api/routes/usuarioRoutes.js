var express = require('express');
var usuarioController = require('../controllers/usuarioController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/usuario')
    .get(autenticacao.validaToken, usuarioController.obterTodosUsuario)
    .post(autenticacao.validaToken, usuarioController.inserirUsuario);

router.route('/usuario/:id')
    .get(autenticacao.validaToken, usuarioController.obterUsuario)
    .delete(autenticacao.validaToken, usuarioController.deletarUsuario)
    .put(autenticacao.validaToken, usuarioController.alterarUsuario);

router.route('/usuarioUsuario/:usuarioId')
    .get(autenticacao.validaToken, usuarioController.obterUsuarioPorUsuario);

router.route('/usuario/imagemUsuario/:id')
    .get(autenticacao.validaToken, usuarioController.obterImagemUsuario);

router.route('/todosUsuariosValidos')
    .get(autenticacao.validaToken, usuarioController.obterTodosUsuarioValidos);

module.exports = router;