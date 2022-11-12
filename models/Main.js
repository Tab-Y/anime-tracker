const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Main extends Model {};

Main.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
        },
        episodes: { 
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        picture: {
            type: DataTypes.STRING,
        },
        thumbnail: {
            type: DataTypes.STRING,
        },
        tags_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tags',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'main',
    }
)

module.exports = Main;