const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// planned, watching, completed, dropped
// make a table for the status
class UserFavorite extends Model { }

UserFavorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: 'id'
            }
        },
        favoriteTitleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'main',
                key: 'id'
            }
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'status',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userFavorite',
    }
);

module.exports = UserFavorite;