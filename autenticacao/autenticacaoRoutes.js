var express = require('express');
var router = express.Router();
var autenticacao = require('./autenticacaoController');

router.route('/login')
    .post(autenticacao.login);

router.route('/valida_token')
    .get(autenticacao.validaToken, autenticacao.sucessoLogin);

module.exports = router;