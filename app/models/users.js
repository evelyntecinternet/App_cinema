const Sequelize = require ('sequelize');

const db = require("./db");

const users = db.define("users",{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    use_pass: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

users.sync();

module.exports = users;