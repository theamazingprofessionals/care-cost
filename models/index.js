'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.provider_info = require('provider_info.js')(sequelize, Sequelize);
// db.procedure_name = require('procedure_name.js')(sequelize, Sequelize);
// db.cost_data = require('cost_data.js')(sequelize, Sequelize);

// db.procedure_name.hasMany(db.cost_data);
// db.provider_info.hasMany(db.cost_data);
// db.cost_data.belongsTo(db.provider_info);
// db.cost_data.belongsTo(db.procedure_name);



module.exports = db;