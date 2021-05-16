const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URI, {
  define: {
    freezeTableName: true,
  },
});

module.exports = database;
