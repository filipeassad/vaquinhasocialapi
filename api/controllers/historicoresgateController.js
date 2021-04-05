const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');
const Historicoresgate = db.historicoresgate;
const Op = db.Sequelize.Op;

exports.obterTodosHistoricoresgate = (req, res) => {
    Historicoresgate.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((historicoresgates) => {
        res.send(historicoresgates);
    });
};

exports.obterHistoricoresgate = (req, res) => {
    var idHistoricoresgate = req.params.id;
    Historicoresgate.findAll({
        where: {
            id: idHistoricoresgate
        },
        order: [
            ['titulo']
        ]
    }).then((historicoresgate) => {
        res.send(historicoresgate);
    });
};

exports.obterTodosHistoricoresgateValidos = (req, res) => {
    Historicoresgate.findAll({
        order: [
            ['titulo']
        ]
    }).then((historicoresgates) => {
        res.send(historicoresgates);
    });
};

exports.obterImagemHistoricoresgate = (req, res) => {
    var idHistoricoresgate = req.params.id;
    Historicoresgate.findAll({
        where: {
            id: idHistoricoresgate
        },
        order: [
            ['titulo']
        ]
    }).then((historicoresgate) => {
        res.send({ imagemUsuario: historicoresgate[0].usuario.imagemUsuario});
    });
};

exports.obterHistoricoresgatePorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    Historicoresgate.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((historicoresgate) => {
        res.send(historicoresgate);
    });
};

exports.inserirHistoricoresgate = (req, res) => {
    var historicoresgateBody = req.body;
    if (historicoresgateBody != null) {
        Historicoresgate.create(historicoresgateBody).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Historicoresgate cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarHistoricoresgate = (req, res) => {
    var historicoresgateBody = req.body;
    var idHistoricoresgate = req.params.id;

    if (idHistoricoresgate) {
        Historicoresgate.update(historicoresgateBody, {
            where: {
                id: idHistoricoresgate
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Historicoresgate alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarHistoricoresgate = (req, res) => {
    var idHistoricoresgate = req.params.id;

    if (idHistoricoresgate) {
        Historicoresgate.destroy({
            where: {
                id: idHistoricoresgate
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Historicoresgate deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('É necessário o id do meme.'));
    }
};