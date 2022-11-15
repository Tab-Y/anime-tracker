const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


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
        }
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