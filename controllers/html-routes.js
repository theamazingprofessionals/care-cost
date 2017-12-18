
var path = require("path");

module.exports = function (app){
	app.get("/patient", function(req, res) {
		res.render("patientData");
	})

	app.get("/", function (req, res) {
        res.render("index", {
            title: "Care Cost"
        })
    })
}


