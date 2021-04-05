const { DataTypes } = require('sequelize');
exports.conta_usuario = (sequelizeDB) => {
    const conta_usuario = sequelizeDB.define('conta_usuario', {
        agencia: {
            type: DataTypes.STRING
        },
        conta: {
            type: DataTypes.STRING
        },
        usuario_id: {
            type: DataTypes.BIGINT
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return conta_usuario;
};