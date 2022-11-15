// planned, watching, completed, dropped
// make a table for the status

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model {}

Status.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'status'
    }
)



module.exports = Status;