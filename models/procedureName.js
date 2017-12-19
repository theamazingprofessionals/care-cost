module.exports = function (sequelize, DataTypes) {
    let Procedure = sequelize.define('Procedure', {
        procedureId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
        },
        drgDefinition: {
            type: DataTypes.STRING(95),
            allowNull: false,
        },
        procedureName: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        procedureDescription: {
            type: DataTypes.STRING(300),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "procedure_Name"

    });


    Procedure.associate = function (models) {
        Procedure.hasMany(models.Cost, {
            onDelete: 'cascade'
        });
    };



    return Procedure

};
