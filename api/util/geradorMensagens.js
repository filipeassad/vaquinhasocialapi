exports.gerarMensagemSucesso = (texto) => {
    var resposta = {};
    resposta['sucesso'] = true;
    resposta['mensagem'] = texto;

    return resposta;
};

exports.gerarMensagemErro = (texto) => {
    var resposta = {};
    resposta['sucesso'] = false;
    resposta['mensagem'] = texto;
    
    return resposta;
};