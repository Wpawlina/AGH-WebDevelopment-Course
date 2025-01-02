const { DataTypes } = require('sequelize');
const sequelize = require('./db.js'); 

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{timestamps:false});

module.exports =Book;
