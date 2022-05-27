const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "User",
  }
);

const generateHash = (password) => {
  return bcrypt.hash(password, bcrypt.genSaltSync(10));
};

const comparatePassword = (userpassword, entryPassword) => {
  return bcrypt.compare(entryPassword, userpassword);
};

module.exports = {
  generateHash,
  comparatePassword,
  User,
};
