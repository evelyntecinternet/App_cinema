const Sequelize = require('sequelize');

const sequelize = new Sequelize("node.mysql","root","",{
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

sequelize.authenticate()
.then(function(){
    console.log('Connection has been established successfully.');
}).catch(function(){
    console.log('Unable to connect to the database:', err);
});

module.exports = sequelize;