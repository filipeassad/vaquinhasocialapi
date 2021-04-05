var express = require('express');
var contausuarioController = require('../controllers/contausuarioController');
var contausuario = require('../../contausuario/contausuarioController');
var router = express.Router();

router.route('/contausuario')
    .get(contausuario.validaToken, contausuarioController.obterTodosContaUsuario)
    .post(contausuario.validaToken, contausuarioController.inserirContaUsuario);

router.route('/contausuario/:id')
    .get(contausuario.validaToken, contausuarioController.obterContaUsuario)
    .delete(contausuario.validaToken, contausuarioController.deletarContaUsuario)
    .put(contausuario.validaToken, contausuarioController.alterarContaUsuario);

router.route('/contausuarioUsuario/:usuarioId')
    .get(contausuario.validaToken, contausuarioController.obterContaUsuarioPorUsuario);

router.route('/contausuario/imagemUsuario/:id')
    .get(contausuario.validaToken, contausuarioController.obterImagemContaUsuario);

router.route('/todosContaUsuariosValidos')
    .get(contausuario.validaToken, contausuarioController.obterTodosContaUsuarioValidos);

module.exports = router;