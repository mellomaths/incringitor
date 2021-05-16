const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URI || 'sqlite::memory:', {
  define: {
    freezeTableName: true,
  },
});

module.exports = database;
