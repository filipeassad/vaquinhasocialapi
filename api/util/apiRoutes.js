var ajudaRoutes = require('../routes/ajudaRoutes');
var contausuarioRoutes = require('../routes/contausuarioRoutes');
var historicoresgateRoutes = require('../routes/historicoresgateRoutes');
var mensagemRoutes = require('../routes/mensagemRoutes');
var meusaldoRoutes = require('../routes/meusaldoRoutes');
var usuarioRoutes = require('../routes/usuarioRoutes');
var vaquinhaRoutes = require('../routes/vaquinhaRoutes');
var autenticacao = require('../../autenticacao/autenticacaoRoutes');

module.exports = function (app) {  
    app.use('/api', ajudaRoutes);
    app.use('/api', contausuarioRoutes);
    app.use('/api', historicoresgateRoutes);
    app.use('/api', mensagemRoutes);
    app.use('/api', meusaldoRoutes);
    app.use('/api', usuarioRoutes);
    app.use('/api', vaquinhaRoutes);
    app.use('/api', autenticacao);
}