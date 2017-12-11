//just an example model for testing or whatever

module.exports = function (sequelize, DataTypes) {
    let UserData = sequelize.define(UserData, {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        procedureName: DataTypes.STRING,
        procedureCost: DataTypes.INT
    });
    return UserData;
}
