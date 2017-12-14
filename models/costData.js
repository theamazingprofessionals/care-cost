module.exports = function (sequelize, DataTypes) {
    let Cost = sequelize.define('Cost', {
        //        providerId: {
        //            type: DataTypes.INTEGER(11),
        //            allowNull: false,
        //            references: {
        //                model: 'provider_info',
        //                key: 'provider_id'
        //            },
        //            field: 'provider_id'
        //        },
        //        procedureId: {
        //            type: DataTypes.INTEGER(11),
        //            allowNull: false,
        //            references: {
        //                model: 'procedure_name',
        //                key: 'procedure_id'
        //            },
        //            field: 'procedure_id'
        //        },



        patientPayments: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: "cost_Data"
    });



    Cost.associate = function (models) {
        models.Cost.belongsTo(models.Provider, {
            onDelete: "cascade"
        })
        models.Cost.belongsTo(models.Procedure, {
            onDelete: "cascade"
        });
    };

    return Cost
};

//we'll have to add the associations later!
