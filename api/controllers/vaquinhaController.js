const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');

const Vaquinha = db.vaquinha;
const Op = db.Sequelize.Op;

exports.obterTodosVaquinhas = (req, res) => {
    Vaquinha.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((vaquinhas) => {
        res.send(vaquinhas);
    });
};

exports.obterVaquinha = (req, res) => {
    var idVaquinha = req.params.id;
    Vaquinha.findAll({
        where: {
            id: idVaquinha
        },
        order: [
            ['titulo']
        ]
    }).then((vaquinha) => {
        res.send(vaquinha);
    });
};

exports.obterTodosVaquinhasValidos = (req, res) => {
    Vaquinha.findAll({
        order: [
            ['titulo']
        ]
    }).then((vaquinhas) => {
        res.send(vaquinhas);
    });
};

exports.obterImagemVaquinha = (req, res) => {
    var idVaquinha = req.params.id;
    Vaquinha.findAll({
        where: {
            id: idVaquinha
        },
        order: [
            ['titulo']
        ]
    }).then((vaquinha) => {
        res.send({ imagemUsuario: vaquinha[0].usuario.imagemUsuario});
    });
};

exports.obterVaquinhaPorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    Vaquinha.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((vaquinha) => {
        res.send(vaquinha);
    });
};

exports.inserirVaquinha = (req, res) => {
    var vaquinhaBody = req.body;
    if (vaquinhaBody != null) {
        Vaquinha.create(vaquinhaBody).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Vaquinha cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarVaquinha = (req, res) => {
    var vaquinhaBody = req.body;
    var idVaquinha = req.params.id;

    if (idVaquinha) {
        Vaquinha.update(vaquinhaBody, {
            where: {
                id: idVaquinha
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Vaquinha alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarVaquinha = (req, res) => {
    var idVaquinha = req.params.id;

    if (idVaquinha) {
        Vaquinha.destroy({
            where: {
                id: idVaquinha
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Vaquinha deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('É necessário o id do meme.'));
    }
};