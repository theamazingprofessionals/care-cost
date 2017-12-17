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

