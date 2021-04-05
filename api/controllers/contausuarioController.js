const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');
const ContaUsuario = db.conta_usuario;
const Op = db.Sequelize.Op;

exports.obterTodosContaUsuario = (req, res) => {
    ContaUsuario.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((conta_usuarios) => {
        res.send(conta_usuarios);
    });
};

exports.obterContaUsuario = (req, res) => {
    var idContaUsuario = req.params.id;
    ContaUsuario.findAll({
        where: {
            id: idContaUsuario
        },
        order: [
            ['titulo']
        ]
    }).then((conta_usuario) => {
        res.send(conta_usuario);
    });
};

exports.obterTodosContaUsuarioValidos = (req, res) => {
    ContaUsuario.findAll({
        order: [
            ['titulo']
        ]
    }).then((conta_usuarios) => {
        res.send(conta_usuarios);
    });
};

exports.obterImagemContaUsuario = (req, res) => {
    var idContaUsuario = req.params.id;
    ContaUsuario.findAll({
        where: {
            id: idContaUsuario
        },
        order: [
            ['titulo']
        ]
    }).then((conta_usuario) => {
        res.send({ imagemUsuario: conta_usuario[0].usuario.imagemUsuario});
    });
};

exports.obterContaUsuarioPorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    ContaUsuario.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((conta_usuario) => {
        res.send(conta_usuario);
    });
};

exports.inserirContaUsuario = (req, res) => {
    var conta_usuarioBody = req.body;
    if (conta_usuarioBody != null) {
        ContaUsuario.create(conta_usuarioBody).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('ContaUsuario cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarContaUsuario = (req, res) => {
    var conta_usuarioBody = req.body;
    var idContaUsuario = req.params.id;

    if (idContaUsuario) {
        ContaUsuario.update(conta_usuarioBody, {
            where: {
                id: idContaUsuario
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('ContaUsuario alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarContaUsuario = (req, res) => {
    var idContaUsuario = req.params.id;

    if (idContaUsuario) {
        ContaUsuario.destroy({
            where: {
                id: idContaUsuario
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('ContaUsuario deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('É necessário o id do meme.'));
    }
};