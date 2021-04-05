const { DataTypes } = require('sequelize');
exports.historicoresgate = (sequelizeDB) => {
    const historicoresgate = sequelizeDB.define('historicoresgate', {
        data_resgate: {
            type: DataTypes.DATE
        },
        usuario_id: {
            type: DataTypes.BIGINT
        },
        valor: {
            type: DataTypes.DECIMAL
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return historicoresgate;
};