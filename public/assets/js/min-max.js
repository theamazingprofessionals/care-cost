const chart = $("#min-max");

Chart.defaults.global.animation.duration = 200;

var canvas = $("#min-max");

var data = {
    labels: ["Pennsylvania", "Arizona"],
    datasets: [
        {
            label: "Heart Transplant",
            data: [2794182, 382051],
        }
    ]
};

function addData(procedure, state1, num1, state2, num2) {
    barChart.data.labels = [state1, state2]
    barChart.data.datasets[0].label = [procedure]
    barChart.data.datasets[0].data = [num1, num2];
    barChart.update();
}


var barChart = Chart.Bar(canvas, {
    data: data,
});

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap(dataArray, name) {
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors: ['#dee1e5', '#4374e0']} // gray to blue
    };
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
};

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
});
google.charts.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap(dataArray, name, region) {
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
        sizeAxis: {minValue: 0, maxValue: 100},
        displayMode: 'markers',
        region: region,
        resolution: 'provinces',
        colorAxis: {colors: ['#dee1e5', '#4374e0']} // gray to blue
    };
    var chart = new google.visualization.GeoChart(document.getElementById('state_map'));
    chart.draw(data, options);
};








//                        fill: false,
//                            lineTension: 0.1,
//                            backgroundColor: "rgba(75,192,192,0.4)",
//                            borderColor: "rgba(75,192,192,1)",
//                            borderCapStyle: 'butt',
//                            borderDash: [],
//                            borderDashOffset: 0.0,
//                            borderJoinStyle: 'miter',
//                            pointBorderColor: "rgba(75,192,192,1)",
//                            pointBackgroundColor: "#fff",
//                            pointBorderWidth: 1,
//                            pointHoverRadius: 5,
//                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
//                            pointHoverBorderColor: "rgba(220,220,220,1)",
//                            pointHoverBorderWidth: 2,
//                            pointRadius: 5,
//                            pointHitRadius: 10,
