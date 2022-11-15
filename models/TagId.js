const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TagId extends Model {};

TagId.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tags',
                key: 'id',
                unique: false
            },
        },
        title_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'main',
                key: 'id',
                unique: false
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'TagId'
    }
);

module.exports = TagId;