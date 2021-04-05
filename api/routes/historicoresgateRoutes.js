var express = require('express');
var historicoresgateController = require('../controllers/historicoresgateController');
var autenticacao = require('../../autenticacao/autenticacaoController');
var router = express.Router();

router.route('/historicoresgate')
    .get(autenticacao.validaToken, historicoresgateController.obterTodosHistoricoresgate)
    .post(autenticacao.validaToken, historicoresgateController.inserirHistoricoresgate);

router.route('/historicoresgate/:id')
    .get(autenticacao.validaToken, historicoresgateController.obterHistoricoresgate)
    .delete(autenticacao.validaToken, historicoresgateController.deletarHistoricoresgate)
    .put(autenticacao.validaToken, historicoresgateController.alterarHistoricoresgate);

router.route('/historicoresgateUsuario/:usuarioId')
    .get(autenticacao.validaToken, historicoresgateController.obterHistoricoresgatePorUsuario);

router.route('/historicoresgate/imagemUsuario/:id')
    .get(autenticacao.validaToken, historicoresgateController.obterImagemHistoricoresgate);

router.route('/todosHistoricoresgatesValidos')
    .get(autenticacao.validaToken, historicoresgateController.obterTodosHistoricoresgateValidos);

module.exports = router;