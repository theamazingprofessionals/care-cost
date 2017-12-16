module.exports = {


    stateCostAverages: queryResults => {
        const averages = {};
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
        }
        return averages;
    },
    costMinMax: queryResults => {
        let stateMin = queryResults[0].Provider.state;
        let min = queryResults[0].hospitalCharges;
        let stateMax = queryResults[queryResults.length - 1].Provider.state
        let max = queryResults[queryResults.length - 1].hospitalCharges;
        let minMax = [{
            [stateMin]: min
        }, {
            [stateMax]: max
        }];
        return minMax
    }
};
