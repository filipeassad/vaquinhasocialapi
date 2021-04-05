const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotasAPI = require('./api/util/apiRoutes');
const porta = 3500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, X-Requested-With");
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.listen(porta, function() {
    console.log('Servidor está on na porta: ' + porta);
});

rotasAPI(app);