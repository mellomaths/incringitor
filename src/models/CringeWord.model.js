const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const CringeWord = sequelize.define('CringeWord', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: true });

module.exports = {
  CringeWord,
};
