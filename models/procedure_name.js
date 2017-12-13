module.exports = function (sequelize, DataTypes) {
    return sequelize.define('procedureName', {
        procedureId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'procedure_id'
        },
        drgDefinition: {
            type: DataTypes.STRING(95),
            allowNull: false,
            field: 'drg_definition'
        },
        procedureName: {
            type: DataTypes.STRING(70),
            allowNull: false,
            field: 'procedure_name'
        }
    }, {
        tableName: 'procedure_name',
        timestamps: false
    });
};
