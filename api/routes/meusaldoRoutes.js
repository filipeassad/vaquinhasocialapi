var express = require('express');
var meusaldoController = require('../controllers/meusaldoController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/meusaldo')
    .get(autenticacao.validaToken, meusaldoController.obterTodosMeuSaldo)
    .post(autenticacao.validaToken, meusaldoController.inserirMeuSaldo);

router.route('/meusaldo/:id')
    .get(autenticacao.validaToken, meusaldoController.obterMeuSaldo)
    .delete(autenticacao.validaToken, meusaldoController.deletarMeuSaldo)
    .put(autenticacao.validaToken, meusaldoController.alterarMeuSaldo);

router.route('/meusaldoUsuario/:usuarioId')
    .get(autenticacao.validaToken, meusaldoController.obterMeuSaldoPorUsuario);

router.route('/meusaldo/imagemUsuario/:id')
    .get(autenticacao.validaToken, meusaldoController.obterImagemMeuSaldo);

router.route('/todosMeuSaldosValidos')
    .get(autenticacao.validaToken, meusaldoController.obterTodosMeuSaldoValidos);

module.exports = router;