const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './books.db',
});

sequelize
    .authenticate()
    .then(() => console.log('Connection established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
