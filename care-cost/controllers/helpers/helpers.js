module.exports = {



    //calculate state cost averages.. this got a little out of hand hah
    //needed to transform the return into a sortable array to make displaying rankings on the front end easier 
    //Probably a much more performant way to do this!
    stateCostAverages: queryResults => {
        //console.log(queryResults)
        const averages = {};
        let results = []
        queryResults.forEach(e => {
            let state = e.Provider.state;
            let charge = parseFloat(e.hospitalCharges);
            if (state in averages) {
                averages[state].push(charge);
            } else {
                averages[state] = [];
                averages[state].push(charge);
            }
        });
        for (const state in averages) {
            let costs = averages[state];
            let average = costs.reduce((a, b) => a + b, 0) / costs.length;
            average = average.toFixed(2);
            averages[state] = average;
            results.push({
                state: state,
                averageCost: average,
                procId: queryResults[0].ProcedureProcedureId
            });
        };

        results.sort((obj1, obj2) => obj2["averageCost"] - obj1["averageCost"])
        return results;
    },




    costMinMax: queryResults => {
        let stateMin = queryResults[0].Provider.state;
        let min = queryResults[0].hospitalCharges;
        let stateMax = queryResults[queryResults.length - 1].Provider.state
        let max = queryResults[queryResults.length - 1].hospitalCharges;
        let minMax = [{
            state: stateMin,
            min: min
        }, {
            state: stateMax,
            max: max
        }];
        return minMax
    }
};
