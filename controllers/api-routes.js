var db = require("../models");

module.exports = function(app) {
  app.get("/api/proc", function(req, res) {
  	//console.log("req" + req);
  	//console.log("res" + res);
	db.Procedure.findAll({}).then(function(dbProc) {

		res.json(dbProc);
	});
  });
}