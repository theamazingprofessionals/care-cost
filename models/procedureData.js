module.exports = function(sequelize, DataTypes) {
	var Procedure = sequelize.define("Procedure", {
		proc_name: DataTypes.STRING
	});
	return Procedure;
};