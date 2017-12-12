module.exports = function(sequelize, DataTypes) {
	var Procedure = sequelize.define("Procedure", {
		procedure_name: DataTypes.STRING,
		procedure_id: DataTypes.INT
	});
	return Procedure;
};