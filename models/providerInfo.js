module.exports = function (sequelize, DataTypes) {
    let Provider = sequelize.define('Provider', {
        providerId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
        },
        providerName: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(95),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING(70),
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: "provider_Info"


    });

    Provider.associate = function (models) {
        Provider.hasMany(models.Cost, {
            onDelete: 'cascade'
        });
    };


    return Provider
};
