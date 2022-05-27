const config = require("./config/config");
const { Sequelize } = require("sequelize");

const {username, database, password, host, dialect} = config.development
const sequelize = new Sequelize(
  database,
  username,
  password,
  {
      host:host,
      dialect:dialect,
  }
)
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;