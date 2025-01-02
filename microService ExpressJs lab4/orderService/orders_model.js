const { DataTypes } = require('sequelize');
const sequelize = require('./db.js'); 

const Order = sequelize.define('Order', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    book_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    account_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
},{timestamps:false});

module.exports = Order;