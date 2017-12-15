const db = require("../models");



///this seems to be working correctly for the most part. obvi we'll need to move it into a "helpers" file or something and then require it here

//**the only thing is that a few of these state averages are coming back as enomour numbers??! I'll have to double check the data tomorrow


const stateCostAverages = queryResults => {
    let averages = {};
    queryResults.forEach(function (e) {
        let state = e.Provider.state;
        if (state in averages) {
            averages[state].push(e.hospitalCharges);
        } else {
            averages[state] = [];
            averages[state].push(e.hospitalCharges);
        };
    });
    for (const state in averages) {
        let costArray = averages[state];
        let average = costArray.reduce((a, b) => parseFloat(a + b), 0) / costArray.length;
        average = average.toFixed(2)
        console.log(average)
        averages[state] = average;
    }
    return averages
};






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
            order: [['hospitalCharges', 'DESC']],
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


    });


    app.get("/api/costs/all", function (req, res) {
        db.Cost.findAll({
            attributes: ['hospitalCharges'],
            order: [['hospitalCharges', 'DESC']],
            include: [{
                model: db.Provider,
                attributes: ['state']
            }],

        }).then(function (result) {
            res.json(stateCostAverages(result));
        });


    })


    //returns 
    //    [{
    //            "hospitalCharges": "2794183.75",
    //            "Provider": {
    //                "state": "PA"
    //            }
    //},
    //        {
    //            "hospitalCharges": "2739156.06",
    //            "Provider": {
    //                "state": "CA"
    //            }
    //}]





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
