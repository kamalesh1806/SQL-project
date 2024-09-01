const Sequelize = require('sequelize');

const sequelize = new Sequelize('myemployedb', 'root', 'Kamalesh@18062003', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;