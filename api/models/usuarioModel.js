const { DataTypes } = require('sequelize');
exports.usuario = (sequelizeDB) => {
    const usuario = sequelizeDB.define('usuario', {
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        data_nascimento: {
            type: DataTypes.DATE
        },
        cpf: {
            type: DataTypes.STRING
        },
        telefone: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return usuario;
};