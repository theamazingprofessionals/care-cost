module.exports = function (sequelize, DataTypes) {
    return sequelize.define('costData', {
        providerId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'provider_info',
                key: 'provider_id'
            },
            field: 'provider_id'
        },
        procedureId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'procedure_name',
                key: 'procedure_id'
            },
            field: 'procedure_id'
        },
        patientPayments: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'patient_payments'
        }
    }, {
        tableName: 'cost_data',
        timestamps: false

    });
};

//we'll have to add the associations later!
