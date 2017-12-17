
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

      