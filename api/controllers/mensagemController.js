const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');
const Mensagem = db.mensagem;
const Op = db.Sequelize.Op;

exports.obterTodosMensagem = (req, res) => {
    Mensagem.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((mensagems) => {
        res.send(mensagems);
    });
};

exports.obterMensagem = (req, res) => {
    var idMensagem = req.params.id;
    Mensagem.findAll({
        where: {
            id: idMensagem
        },
        order: [
            ['titulo']
        ]
    }).then((mensagem) => {
        res.send(mensagem);
    });
};

exports.obterTodosMensagemValidos = (req, res) => {
    Mensagem.findAll({
        order: [
            ['titulo']
        ]
    }).then((mensagems) => {
        res.send(mensagems);
    });
};

exports.obterImagemMensagem = (req, res) => {
    var idMensagem = req.params.id;
    Mensagem.findAll({
        where: {
            id: idMensagem
        },
        order: [
            ['titulo']
        ]
    }).then((mensagem) => {
        res.send({ imagemUsuario: mensagem[0].usuario.imagemUsuario});
    });
};

exports.obterMensagemPorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    Mensagem.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((mensagem) => {
        res.send(mensagem);
    });
};

exports.inserirMensagem = (req, res) => {
    var mensagemBody = req.body;
    if (mensagemBody != null) {
        Mensagem.create(mensagemBody).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Mensagem cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarMensagem = (req, res) => {
    var mensagemBody = req.body;
    var idMensagem = req.params.id;

    if (idMensagem) {
        Mensagem.update(mensagemBody, {
            where: {
                id: idMensagem
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Mensagem alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarMensagem = (req, res) => {
    var idMensagem = req.params.id;

    if (idMensagem) {
        Mensagem.destroy({
            where: {
                id: idMensagem
            }
        }).then(() => {
            res.send(geradorMensagens.gerarMensagemSucesso('Mensagem deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarMensagemErro('É necessário o id do meme.'));
    }
};