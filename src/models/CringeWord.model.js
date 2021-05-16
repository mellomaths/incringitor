const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class CringeWord extends Model { }

CringeWord.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, timestamps: true });

module.exports = CringeWord;
