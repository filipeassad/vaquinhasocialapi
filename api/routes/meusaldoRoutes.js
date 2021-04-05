var express = require('express');
var meusaldoController = require('../controllers/meusaldoController');
var meusaldo = require('../../meusaldo/meusaldoController');
var router = express.Router();

router.route('/meusaldo')
    .get(meusaldo.validaToken, meusaldoController.obterTodosMeuSaldo)
    .post(meusaldo.validaToken, meusaldoController.inserirMeuSaldo);

router.route('/meusaldo/:id')
    .get(meusaldo.validaToken, meusaldoController.obterMeuSaldo)
    .delete(meusaldo.validaToken, meusaldoController.deletarMeuSaldo)
    .put(meusaldo.validaToken, meusaldoController.alterarMeuSaldo);

router.route('/meusaldoUsuario/:usuarioId')
    .get(meusaldo.validaToken, meusaldoController.obterMeuSaldoPorUsuario);

router.route('/meusaldo/imagemUsuario/:id')
    .get(meusaldo.validaToken, meusaldoController.obterImagemMeuSaldo);

router.route('/todosMeuSaldosValidos')
    .get(meusaldo.validaToken, meusaldoController.obterTodosMeuSaldoValidos);

module.exports = router;