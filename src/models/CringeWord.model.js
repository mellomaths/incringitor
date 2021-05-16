const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require('../database');

class CringeWord extends Model { }

CringeWord.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, timestamps: true });

module.exports = CringeWord;
