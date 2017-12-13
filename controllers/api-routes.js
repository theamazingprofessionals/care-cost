const db = require("../models");

module.exports = function (app) {

    app.get('/api/procedures', function (req, res) {
        db.Provider.findAll({}).then(function (result) {
            res.json(result)
        });
    });
    app.get('/api/procedures:id', function (req, res) {
        db.Procedure.findAll({
            where: {
                procedureId: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    });

}
