const { DataTypes } = require('sequelize');
exports.vaquinha = (sequelizeDB) => {
    const vaquinha = sequelizeDB.define('vaquinha', {
        url_imagem: {
            type: DataTypes.STRING
        },
        titulo: {
            type: DataTypes.STRING
        },
        valor: {
            type: DataTypes.DECIMAL
        },
        data_encerramento: {
            type: DataTypes.DATE
        },
        url_video: {
            type: DataTypes.STRING
        },
        descricao: {
            type: DataTypes.TEXT
        },
        usuario_id: {
            type: DataTypes.BIGINT
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return vaquinha;
};