const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("post","root","",{
    host: 'localhost',
    dialect: 'mysql',

});

module.exports = {sequelize}