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

    app.get("/api/costs", function (req, res) {
        db.Cost.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.get("/api/cost/:id/:state", function (req, res) {
        db.Cost.findAll({
            order: [['patientPayments', 'DESC']],
            where: {
                ProcedureProcedureId: req.params.id,
            },
            include: [{
                model: db.Provider,
                attributes: ['state', 'city', 'providerName'],
                where: {
                    state: req.params.state
                }

            }],

        }).then(function (result) {
            res.json(result);
        });


    })



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
