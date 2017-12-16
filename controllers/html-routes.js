var path = require("path");

module.exports = function (app){
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/procedures.html"));
	})

	app.get("/patient", function(req, res) {
		//res.sendFile(path.join(__dirname, "../public/patientData.html"));
		res.render("patientData");
	})
}