//Chart.defaults.global.animation.duration = 200;
const addData = (procedure, state1, num1, state2, num2) => {
    barChart.data.labels = [state2, state1]
    barChart.data.datasets[0].data = [num2, num1];
    barChart.options.title.text[1] = procedure
    barChart.update();
}

const barChart = Chart.Bar($("#min-max"), {
    data: {
        labels: ["Pennsylvania", "Arizona"],
        datasets: [
            {
                backgroundColor: ["#4374e0", "#dee1e5"],
                data: [2794182, 382051],
        }],
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            position: 'top',
            padding: 10,
            text: ['Maximum and Minimum Cost Country Wide', "Heart Transplant"]
        }
    }
})

function createRegionMap() {

    google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawRegionsMap(dataArray, name) {
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {
            colors: ['#dee1e5', '#4374e0']
        } // gray to blue
    };
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
};

function createStateMap() {
    google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
    });
    google.charts.setOnLoadCallback(drawMarkersMap);
}

function drawMarkersMap(dataArray, name, region) {
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
        sizeAxis: {
            minValue: 0,
            maxValue: 100
        },
        displayMode: 'markers',
        region: region,
        resolution: 'provinces',
        colorAxis: {
            colors: ['#dee1e5', '#4374e0']
        } // gray to blue
    };
    var chart = new google.visualization.GeoChart(document.getElementById('state_map'));
    chart.draw(data, options);
};
