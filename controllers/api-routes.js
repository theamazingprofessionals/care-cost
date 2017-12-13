const db = require("../models");

module.exports = function (app) {

    app.get('/api/procedures', function (req, res) {
        db.procedureName.findAll({}).then(function (result) {
            res.json(result)
        });
    });

}
