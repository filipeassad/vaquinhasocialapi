const { DataTypes } = require('sequelize');
exports.mensagem = (sequelizeDB) => {
    const mensagem = sequelizeDB.define('mensagem', {
        rementente: {
            type: DataTypes.BIGINT
        },
        destinatario: {
            type: DataTypes.BIGINT
        },
        data_mensagem: {
            type: DataTypes.DATE
        },
        titulo: {
            type: DataTypes.STRING
        },
        texto: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return mensagem;
};