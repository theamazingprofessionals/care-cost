var db = require("../models");

module.exports = function(app) {
  app.get("/api/proc", function(req, res) {

	db.Todo.findAll({}).then(function(dbProc) {

		res.json(dbProc);
	});
  });
}