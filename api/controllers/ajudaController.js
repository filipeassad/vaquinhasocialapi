const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');
const Ajuda = db.ajuda;
const Op = db.Sequelize.Op;

exports.obterTodosAjuda = (req, res) => {
    Ajuda.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((ajudas) => {
        res.send(ajudas);
    });
};

exports.obterAjuda = (req, res) => {
    var idAjuda = req.params.id;
    Ajuda.findAll({
        where: {
            id: idAjuda
        },
        order: [
            ['titulo']
        ]
    }).then((ajuda) => {
        res.send(ajuda);
    });
};

exports.obterTodosAjudaValidos = (req, res) => {
    Ajuda.findAll({
        order: [
            ['titulo']
        ]
    }).then((ajudas) => {
        res.send(ajudas);
    });
};

exports.obterImagemAjuda = (req, res) => {
    var idAjuda = req.params.id;
    Ajuda.findAll({
        where: {
            id: idAjuda
        },
        order: [
            ['titulo']
        ]
    }).then((ajuda) => {
        res.send({ imagemUsuario: ajuda[0].usuario.imagemUsuario});
    });
};

exports.obterAjudaPorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    Ajuda.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((ajuda) => {
        res.send(ajuda);
    });
};

exports.inserirAjuda = (req, res) => {
    var ajudaBody = req.body;
    if (ajudaBody != null) {
        Ajuda.create(ajudaBody).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Ajuda cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarAjuda = (req, res) => {
    var ajudaBody = req.body;
    var idAjuda = req.params.id;

    if (idAjuda) {
        Ajuda.update(ajudaBody, {
            where: {
                id: idAjuda
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Ajuda alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarAjuda = (req, res) => {
    var idAjuda = req.params.id;

    if (idAjuda) {
        Ajuda.destroy({
            where: {
                id: idAjuda
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Ajuda deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('É necessário o id do meme.'));
    }
};