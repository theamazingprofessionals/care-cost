const db = require("../models");
const helpers = require("./helpers/helpers")


module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Procedure.findAll({}).then(function (result) {
            let hbsObject = {
                names: result
            };
            res.render("index", hbsObject)
        })
    })

    //all procedures
    app.get('/api/procedures', function (req, res) {
        db.Procedure.findAll({}).then(function (result) {
            res.json(result);
        });
    });

 //all procedures by id

    app.get('/api/procedures/:id', function (req, res) {
        db.Procedure.findAll({
            where: {
                procedureId: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    });

    //all costs
    app.get("/api/costs", function (req, res) {
        db.Cost.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.get("/api/cost/:zip", function (req, res) {
        db.Cost.findAll({
            order: [['hospitalCharges', 'DESC']],
            include: [{
                model: db.Provider,
                where: {
                    zipCode: req.params.zip
                },
            }],

        }).then(function (result) {
            res.json(result);
        });
    });


    //all costs by id and state
    app.get("/api/cost/:state/:id", function (req, res) {
        db.Cost.findAll({
            where: {
                ProcedureProcedureId: req.params.id,
            },
            include: [{
                model: db.Provider,
                where: {
                    state: req.params.state
                }
            }],

        }).then(function (result) {
            res.json(result);
        });
    });


    //    get state wide average cost for a given procedure using the 'stateCostAverage' helper function
    app.get("/api/avg/:id", function (req, res) {
        db.Cost.findAll({
            where: {
                ProcedureProcedureId: req.params.id,
            },
            attributes: ['ProcedureProcedureId', 'hospitalCharges'],
            include: [{
                model: db.Provider,
                attributes: ['state']
                }]
        }).then(function (result) {
            result = helpers.stateCostAverages(result)
            //console.log(result)
            res.json(result);
        });
    });


    //get country wide min/max costs for a given procedure
    app.get("/api/mm/:id", function (req, res) {
        db.Cost.findAll({
            where: {
                ProcedureProcedureId: req.params.id,
            },
            attributes: ['ProcedureProcedureId', 'hospitalCharges'],
            include: [{
                model: db.Provider,
                attributes: ['state']
            }],
            order: [['hospitalCharges', 'DESC']]
        }).then(function (result) {
            //console.log("before helper", result)
            result = helpers.costMinMax(result)
            res.json(result)
        })
    });

    //get state wide min/max for a given procedure
    app.get("/api/mm/:state/:id", function (req, res) {
        db.Cost.findAll({
            where: {
                ProcedureProcedureId: req.params.id,
            },
            attributes: ['ProcedureProcedureId', 'hospitalCharges'],
            include: [{
                model: db.Provider,
                where: {
                    state: req.params.state
                }
            }],
            order: [['hospitalCharges', 'DESC']]
        }).then(function (result) {
            result = helpers.costMinMax(result)
            res.json(result)
        })
    });


    //test handlebars route    
    app.get("/api/avg/:id", function (req, res) {
        db.Cost.findAll({
            where: {
                ProcedureProcedureId: req.params.id,
            },
            attributes: ['ProcedureProcedureId', 'hospitalCharges'],
            include: [{
                model: db.Provider,
                attributes: ['state']
            }]
        }).then(function (result) {
            //console.log(result)
            result = helpers.stateCostAverages(result)
            res.json(result)
            //            res.render("list", {
            //                state: result
            //            })
        });
    });
    app.get('/api/patient', function(req, res) {
        db.Patient.findAll({}).then(function(result){
            res.json(result);
        });
    });

    app.post('/api/patient', function(req, res) {
        db.Patient.create(req.body).then(function(dbPatient){
            res.json(dbPatient);
        });
    });
}



//// examples ////


//db.order.findAndCount({
//    include: [{
//        model: db.order_item,
//        as: 'order_items',
//        attributes: ['id', 'price', 'quantity', 'item_id'],
//        where: orderItemConditions,
//        include: [{
//            model: db.item,
//            as: 'item',
//            attributes: ['name', 'item_group_id', 'sku'],
//            where: itemConditions,
//            include: [{
//                model: db.item_group,
//                as: 'item_group',
//                attributes: ['name', 'item_category_id'],
//                where: itemGroupConditions,
//            }]
//        }]
//    }],
//    order: '"order".created_at DESC',
//    where: orderCondition,
//    limit: 20,
//    offset: 0
//});
