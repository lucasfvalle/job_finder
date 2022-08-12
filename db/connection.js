const Sequelize = require('Sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db',
    
});

module.exports = sequelize;