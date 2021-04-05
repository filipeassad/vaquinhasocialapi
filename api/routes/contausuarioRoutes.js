var express = require('express');
var contausuarioController = require('../controllers/contausuarioController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/contausuario')
    .get(autenticacao.validaToken, contausuarioController.obterTodosContaUsuario)
    .post(autenticacao.validaToken, contausuarioController.inserirContaUsuario);

router.route('/contausuario/:id')
    .get(autenticacao.validaToken, contausuarioController.obterContaUsuario)
    .delete(autenticacao.validaToken, contausuarioController.deletarContaUsuario)
    .put(autenticacao.validaToken, contausuarioController.alterarContaUsuario);

router.route('/contausuarioUsuario/:usuarioId')
    .get(autenticacao.validaToken, contausuarioController.obterContaUsuarioPorUsuario);

router.route('/contausuario/imagemUsuario/:id')
    .get(autenticacao.validaToken, contausuarioController.obterImagemContaUsuario);

router.route('/todosContaUsuariosValidos')
    .get(autenticacao.validaToken, contausuarioController.obterTodosContaUsuarioValidos);

module.exports = router;