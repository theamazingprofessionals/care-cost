module.exports = function (sequelize, DataTypes){
	var Patient = sequelize.define("Patient", 
		{
			name: {
				type: DataTypes.STRING(95), 
				allowNull: false
			},
			email: {
				type: DataTypes.STRING(70),
				allowNull: false
			},
			healthScore: {
				type: DataTypes.INTEGER(11),
				allowNull: false
			},
			patientId: {
				type: DataTypes.INTEGER(11),
				primaryKey: true,
			},
			zipCode: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
			}
		}, {
			timestamps: false,
			tableName: "patient_data"
		});
	return Patient;
}