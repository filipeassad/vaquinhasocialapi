var jwt = require('jsonwebtoken');
const usuarioController = require('../api/controllers/usuarioController');
const geradorMensagens = require('../api/util/geradorMensagens');

exports.login = (req, res) => {
    const login = req.body.login;
    const senha = req.body.senha;

    usuarioController.obterUsuarioLoginSenha(login, senha)
        .then((resposta) => {
            if (resposta.length != 0) {
                var payload = {
                    id: resposta[0].id
                }
                var token = jwt.sign(payload, "vaquinhakosmostudio2021");

                res.json({
                    usuario_id: resposta[0].id,
                    token: token
                });
            } else {
                res.send(geradorMensagens.gerarMensagemErro('Login ou senha incorretos.'));
            }
        });
};

exports.sucessoLogin = (req, res) => {
    res.send(geradorMensagens.gerarMensagemSucesso('Token Válido.'));
}

exports.validaToken = function (req, res, next){
    var token = req.headers['x-access-token'];

    jwt.verify(token, "vaquinhakosmostudio2021", function(err, decoded) {
        if (err) {
            return res.send(geradorMensagens.gerarMensagemErro('Token inválido.'));
        } else {
            req.decoded = decoded;
            next();
        }
    });
};