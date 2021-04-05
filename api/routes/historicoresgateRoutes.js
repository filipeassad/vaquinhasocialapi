var express = require('express');
var historicoresgateController = require('../controllers/historicoresgateController');
var historicoresgate = require('../../historicoresgate/historicoresgateController');
var router = express.Router();

router.route('/historicoresgate')
    .get(historicoresgate.validaToken, historicoresgateController.obterTodosHistoricoresgate)
    .post(historicoresgate.validaToken, historicoresgateController.inserirHistoricoresgate);

router.route('/historicoresgate/:id')
    .get(historicoresgate.validaToken, historicoresgateController.obterHistoricoresgate)
    .delete(historicoresgate.validaToken, historicoresgateController.deletarHistoricoresgate)
    .put(historicoresgate.validaToken, historicoresgateController.alterarHistoricoresgate);

router.route('/historicoresgateUsuario/:usuarioId')
    .get(historicoresgate.validaToken, historicoresgateController.obterHistoricoresgatePorUsuario);

router.route('/historicoresgate/imagemUsuario/:id')
    .get(historicoresgate.validaToken, historicoresgateController.obterImagemHistoricoresgate);

router.route('/todosHistoricoresgatesValidos')
    .get(historicoresgate.validaToken, historicoresgateController.obterTodosHistoricoresgateValidos);

module.exports = router;