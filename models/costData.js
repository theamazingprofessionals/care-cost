module.exports = function (sequelize, DataTypes) {
    let Cost = sequelize.define('Cost', {
<<<<<<< HEAD
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
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        hospitalCharges:{
            type: DataTypes.DECIMAL(10,2), 
            allowNull: false,
        },
        medicarePayments:{
            type: DataTypes.DECIMAL(10,2), 
            allowNull: false,
        },
        totalPayments:{
            type: DataTypes.DECIMAL(10,2), 
=======
        patientPayments: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        hospitalCharges: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        medicarePayments: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        totalPayments: {
            type: DataTypes.DECIMAL(10, 2),
>>>>>>> 5556fd817268883a4a10e4c538f92257730c7c44
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
