module.exports = function (sequelize, DataTypes) {
    let Cost = sequelize.define('Cost', 
    {
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
        },
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
