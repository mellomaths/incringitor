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
  addedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  }
});

module.exports = {
  CringeWord,
};
