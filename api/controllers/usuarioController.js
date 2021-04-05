const db = require('../../db/db-config');
const geradorMensagens = require('../util/geradorMensagens');
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.obterTodosUsuario = (req, res) => {
    Usuario.findAll({
        order: [
            [
                ['titulo']
            ]
        ]
    }).then((usuarios) => {
        res.send(usuarios);
    });
};

exports.obterUsuarioLoginSenha = (login, senha) => {
    return Usuario.findAll({
        where: { login: login, senha: senha }
    });
}

exports.obterUsuario = (req, res) => {
    var idUsuario = req.params.id;
    Usuario.findAll({
        where: {
            id: idUsuario
        },
        order: [
            ['titulo']
        ]
    }).then((usuario) => {
        res.send(usuario);
    });
};

exports.obterTodosUsuarioValidos = (req, res) => {
    Usuario.findAll({
        order: [
            ['titulo']
        ]
    }).then((usuarios) => {
        res.send(usuarios);
    });
};

exports.obterImagemUsuario = (req, res) => {
    var idUsuario = req.params.id;
    Usuario.findAll({
        where: {
            id: idUsuario
        },
        order: [
            ['titulo']
        ]
    }).then((usuario) => {
        res.send({ imagemUsuario: usuario[0].usuario.imagemUsuario});
    });
};

exports.obterUsuarioPorUsuario = (req, res) => {
    var usuarioId = req.params.usuarioId;
    Usuario.findAll({
        where: {
            usuario_id: usuarioId
        },
        order: [
            ['titulo']
        ]
    }).then((usuario) => {
        res.send(usuario);
    });
};

exports.inserirUsuario = (req, res) => {
    var usuarioBody = req.body;
    if (usuarioBody != null) {
        Usuario.create(usuarioBody).then(() => {
            res.send(geradorMensagens.gerarUsuarioSucesso('Usuario cadastrada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarUsuarioErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.alterarUsuario = (req, res) => {
    var usuarioBody = req.body;
    var idUsuario = req.params.id;

    if (idUsuario) {
        Usuario.update(usuarioBody, {
            where: {
                id: idUsuario
            }
        }).then(() => {
            res.send(geradorMensagens.gerarUsuarioSucesso('Usuario alterada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarUsuarioErro('Campos obrigatórios não foram preenchidos.'));
    }
};

exports.deletarUsuario = (req, res) => {
    var idUsuario = req.params.id;

    if (idUsuario) {
        Usuario.destroy({
            where: {
                id: idUsuario
            }
        }).then(() => {
            res.send(geradorMensagens.gerarUsuarioSucesso('Usuario deletada com sucesso.'));
        });
    } else {
        res.send(geradorMensagens.gerarUsuarioErro('É necessário o id do meme.'));
    }
};