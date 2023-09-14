const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const postModel = sequelize.define("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo_post: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
  },
  link: {
    type: DataTypes.STRING,
  },
});

module.exports = { postModel };
