var express = require('express');
var usuarioController = require('../controllers/usuarioController');
var usuario = require('../../usuario/usuarioController');
var router = express.Router();

router.route('/usuario')
    .get(usuario.validaToken, usuarioController.obterTodosUsuario)
    .post(usuario.validaToken, usuarioController.inserirUsuario);

router.route('/usuario/:id')
    .get(usuario.validaToken, usuarioController.obterUsuario)
    .delete(usuario.validaToken, usuarioController.deletarUsuario)
    .put(usuario.validaToken, usuarioController.alterarUsuario);

router.route('/usuarioUsuario/:usuarioId')
    .get(usuario.validaToken, usuarioController.obterUsuarioPorUsuario);

router.route('/usuario/imagemUsuario/:id')
    .get(usuario.validaToken, usuarioController.obterImagemUsuario);

router.route('/todosUsuariosValidos')
    .get(usuario.validaToken, usuarioController.obterTodosUsuarioValidos);

module.exports = router;