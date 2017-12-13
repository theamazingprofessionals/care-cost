module.exports = function (sequelize, DataTypes) {
    let Provider = sequelize.define('Provider', {
        providerId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'provider_id'
        },
        providerName: {
            type: DataTypes.STRING(70),
            allowNull: false,
            field: 'provider_name'
        },
        streetAddress: {
            type: DataTypes.STRING(95),
            allowNull: false,
            field: 'street_address'
        },
        city: {
            type: DataTypes.STRING(35),
            allowNull: false,
            field: 'city'
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: 'state'
        },
        zipCode: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'zip_code'
        },
        region: {
            type: DataTypes.STRING(70),
            allowNull: false,
            field: 'region'
        }
    }, {
        tableName: 'provider_info',
        timestamps: false

    });
    // NOPE!
    //    Provider.associate = models =>
    //        Provider.hasMany(models.Procedure);
    return Provider;
};
