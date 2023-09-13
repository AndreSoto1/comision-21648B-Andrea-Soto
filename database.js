const {Sequelize} = require("sequelize");

Const sequelize = new Sequelize("notas","root","",{
    host: "localhost",
    dialect: "mysql",

})
module.exports = {sequelize}