
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
          height: 500,
          width: 550,
          colors: ['#4374e0']
        };

        var chart = new google.charts.Bar(document.getElementById('spinal_fusion'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };