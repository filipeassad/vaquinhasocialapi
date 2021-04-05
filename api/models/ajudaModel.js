const { DataTypes } = require('sequelize');
exports.ajuda = (sequelizeDB) => {
    const ajuda = sequelizeDB.define('ajuda', {
        vaquinha_id: {
            type: DataTypes.BIGINT
        },
        data_ajuda: {
            type: DataTypes.DATE
        },
        valor: {
            type: DataTypes.DECIMAL
        },
        forma_pagamento: {
            type: DataTypes.STRING
        },
        situacao_pagamento: {
            type: DataTypes.STRING
        },
        descricao: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return ajuda;
};