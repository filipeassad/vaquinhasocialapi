const { DataTypes } = require('sequelize');
exports.meusaldo = (sequelizeDB) => {
    const meusaldo = sequelizeDB.define('meusaldo', {
        usuario_id: {
            type: DataTypes.BIGINT
        },
        saldo_disponivel: {
            type: DataTypes.DECIMAL
        },
        aguardando_liberacao: {
            type: DataTypes.DECIMAL
        },
        arrecadado: {
            type: DataTypes.DECIMAL
        },
        resgatado: {
            type: DataTypes.DECIMAL
        },
        saque_pendente: {
            type: DataTypes.DECIMAL
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return meusaldo;
};