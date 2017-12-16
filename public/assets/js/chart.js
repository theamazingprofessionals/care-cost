// Heart Transplant Chart of Highest and Lowest Cost in US
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['State', 'Procedure Cost'],
        ['Pennsylvania', 2794182],
        ['Arizona', 382051],

        ]);

        var options = {
          chart: {
            title: 'Heart Transplant',
            subtitle: 'Highest and Lowest Cost of Procedure in US',
          },
          bars: 'vertical',
                  bar: {groupWidth: "50%"},


          vAxis: {format: 'decimal'},
          height: 600,
          width: 400,
          colors: ['#4374e0']
        };

        var chart = new google.charts.Bar(document.getElementById('heart_transplant'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

// Coranary Bypass Chart of Highest and Lowest Cost in US
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['State', 'Procedure Cost'],
        ['California', 439113],
        ['Maryland', 30888],

        ]);

        var options = {
          chart: {
            title: 'Coronary Bypass',
            subtitle: 'Highest and Lowest Cost of Procedure in US',
          },
          bars: 'vertical',
                  bar: {groupWidth: "50%"},


          vAxis: {format: 'decimal'},
          height: 600,
          width: 400,
          colors: ['#4374e0']
        };

        var chart = new google.charts.Bar(document.getElementById('coronary_bypass'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
// Gall Bladder Removal Chart of Highest and Lowest Cost in US
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['State', 'Procedure Cost'],
        ['Florida', 126311],
        ['Arizona', 8681],

        ]);

        var options = {
          chart: {
            title: 'Gall Bladder Removal',
            subtitle: 'Highest and Lowest Cost of Procedure in US',
          },
          bars: 'vertical',
                  bar: {groupWidth: "50%"},


          vAxis: {format: 'decimal'},
          height: 600,
          width: 400,
          colors: ['#4374e0']
        };

        var chart = new google.charts.Bar(document.getElementById('gall_bladder'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

// Spinal Fusion Chart of Highest and Lowest Cost in US
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['State', 'Procedure Cost'],
        ['California', 436765],
        ['New York', 15105],

        ]);

        var options = {
          chart: {
            title: 'Spinal Fusion',
            subtitle: 'Highest and Lowest Cost of Procedure in US',
          },
          bars: 'vertical',
                  bar: {groupWidth: "50%"},


          vAxis: {format: 'decimal'},
          height: 600,
          width: 400,
          colors: ['#4374e0']
        };

        var chart = new google.charts.Bar(document.getElementById('spinal_fusion'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

//US Map Average Cost of Procedure Visualization
google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['State', 'Average Cost Procedure'],
        ['Alabama', 100000],
        ['AK', 130000],
        ['AZ', 110000],
        ['AR', 100000],
        ['CA', 400000],
        ['CO', 210000],
        ['CT', 120000],
        ['DE', 300000],
        ['DC', 310000],
        ['FL', 150000],
        ['GA', 210000],
        ['HI', 220000],
        ['ID', 310000],
        ['IL', 145000],
        ['IN', 400000],
        ['IA', 360000],
        ['KS', 111000],
        ['KY', 140000],
        ['LA', 210000],
        ['ME', 120000],
        ['MT', 310000],
        ['NE', 222000],
        ['NV', 241000],
        ['NH', 311000],
        ['NJ', 410000],
        ['NM', 324000],
        ['NY', 290000],
        ['NC', 500000],
        ['ND', 440000],
        ['OH', 410000],
        ['OK', 310000],
        ['OR', 130000],
        ['MD', 120000],
        ['MA', 400000],
        ['MI', 210000],
        ['MN', 105000],
        ['MS', 310000],
        ['MO', 210000],
        ['PA', 300000],
        ['RI', 210000],
        ['SC', 400000],
        ['SD', 230000],
        ['TN', 240000],
        ['TX', 250000],
        ['UT', 350000],
        ['VT', 220000],
        ['VA', 260000],
        ['WA', 340000],
        ['WV', 400000],
        ['WI', 350000],
        ['WY', 100000],
        ]);

    var options = {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors: ['#dee1e5', '#4374e0']} // gray to blue
    };
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
};

// All States High vs Low Procedure Cost Bar Graph

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['State', 'High', 'Low'],
        ['Alabama', 100000, 500000],
        ['AK', 130000, 400000],
        ['AZ', 110000, 400000],
        ['AR', 100000, 300000],
        ['CA', 400000, 600000],
        ['CO', 210000, 300000],
        ['CT', 120000, 300000],
        ['DE', 300000, 400000],
        ['DC', 310000, 500000],
        ['FL', 150000, 200000],
        ['GA', 210000, 400000],
        ['HI', 220000, 400000],
        ['ID', 310000, 500000],
        ['IL', 145000, 200000],
        ['IN', 400000, 600000],
        ['IA', 360000, 500000],
        ['KS', 111000, 400000],
        ['KY', 140000, 500000],
        ['LA', 210000, 300000],
        ['ME', 120000, 300000],
        ['MT', 310000, 500000],
        ['NE', 222000, 400000],
        ['NV', 241000, 400000],
        ['NH', 311000, 500000],
        ['NJ', 410000, 500000],
        ['NM', 324000, 600000],
        ['NY', 290000, 400000],
        ['NC', 500000, 600000],
        ['ND', 440000, 500000],
        ['OH', 410000, 500000],
        ['OK', 310000, 400000],
        ['OR', 130000, 200000],
        ['MD', 120000, 200000],
        ['MA', 400000, 500000],
        ['MI', 210000, 300000],
        ['MN', 105000, 300000],
        ['MS', 310000, 400000],
        ['MO', 210000, 400000],
        ['PA', 300000, 500000],
        ['RI', 210000, 600000],
        ['SC', 400000, 500000],
        ['SD', 230000, 400000],
        ['TN', 240000, 300000],
        ['TX', 250000, 300000],
        ['UT', 350000, 500000],
        ['VT', 220000, 500000],
        ['VA', 260000, 600000],
        ['WA', 340000, 400000],
        ['WV', 400000, 500000],
        ['WI', 350000, 500000],
        ['WY', 100000, 400000],
        ]);

    var options = {
      chart: {
        title: 'Procedure',
        subtitle: 'High and Low Cost of Procedure by State',
    },
    bars: 'horizontal',
    vAxis: {format: 'decimal'},
    height: 800,
    width: 900,
    colors: ['#dee1e5', '#4374e0']
};

var chart = new google.charts.Bar(document.getElementById('state_bar'));

chart.draw(data, google.charts.Bar.convertOptions(options));
};

// Procedure cost by hospital in state
google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
});
google.charts.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap() {
    var data = google.visualization.arrayToDataTable([
        ['Hospital', 'Procedure Cost'],
        ['2160 S 1ST AVENUE MAYWOOD', 100000],
        ['4440 W 95TH STREET OAK LAWN', 200000],
        ['251 E HURON ST CHICAGO', 150000],
        ['5841 SOUTH MARYLAND CHICAGO', 300000],
        ['1000 HEALTH CENTER DRIVE MATTOON', 100000],
        ['2100 MADISON AVENUE GRANITE CITY', 200000],
        ['400 MAPLE SUMMIT ROAD JERSEYVILLE', 150000],
        ['1304 FRANKLIN AVENUE NORMAL', 300000],
        ]);

    var options = {
        region: 'US-IL',
        displayMode: 'markers',
        resolution: 'provinces',
        colorAxis: {colors: ['#dee1e5', '#4374e0']} // gray to blue
    };
    var chart = new google.visualization.GeoChart(document.getElementById('state_map'));
    chart.draw(data, options);
};