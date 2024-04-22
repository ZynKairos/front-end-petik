const Sequelize = require("sequelize");

const db = new Sequelize("auth_db", "admin", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
