const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');
const MeuSaldo = db.meusaldo;
const Op = db.Sequelize.Op;

exports.obterTodosMeuSaldo = (req, res) => {
    MeuSaldo.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((meusaldos) => {
        res.send(meusaldos);
    });
};

exports.obterMeuSaldo = (req, res) => {
    var idMeuSaldo = req.params.id;
    MeuSaldo.findAll({
        where: {
            id: idMeuSaldo
        },
        order: [
            ['titulo']
        ]
    }).then((meusaldo) => {
        res.send(meusaldo);
    });
};

exports.obterTodosMeuSaldoValidos = (req, res) => {
    MeuSaldo.findAll({
        order: [
            ['titulo']
        ]
    }).then((meusaldos) => {
        res.send(meusaldos);
    });
};

exports.obterImagemMeuSaldo = (req, res) => {
    var idMeuSaldo = req.params.id;
    MeuSaldo.findAll({
        where: {
            id: idMeuSaldo
        },
        order: [
            ['titulo']
        ]
    }).then((meusaldo) => {
        res.send({ imagemUsuario: meusaldo[0].usuario.imagemUsuario});
    });
};

exports.obterMeuSaldoPorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    MeuSaldo.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((meusaldo) => {
        res.send(meusaldo);
    });
};

exports.inserirMeuSaldo = (req, res) => {
    var meusaldoBody = req.body;
    if (meusaldoBody != null) {
        MeuSaldo.create(meusaldoBody).then(() => {
            res.send(geradorMensagens.gerarMeuSaldoSucesso('MeuSaldo cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMeuSaldoErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarMeuSaldo = (req, res) => {
    var meusaldoBody = req.body;
    var idMeuSaldo = req.params.id;

    if (idMeuSaldo) {
        MeuSaldo.update(meusaldoBody, {
            where: {
                id: idMeuSaldo
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMeuSaldoSucesso('MeuSaldo alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMeuSaldoErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarMeuSaldo = (req, res) => {
    var idMeuSaldo = req.params.id;

    if (idMeuSaldo) {
        MeuSaldo.destroy({
            where: {
                id: idMeuSaldo
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMeuSaldoSucesso('MeuSaldo deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMeuSaldoErro('É necessário o id do meme.'));
    }
};