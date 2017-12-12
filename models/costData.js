module.exports = function(sequelize, DataTypes) {
	var Cost = sequelize.define("Cost", {
		procedure_name: DataTypes.STRING,
		procedure_id: DataTypes.INT
	});
	return Cost;
};