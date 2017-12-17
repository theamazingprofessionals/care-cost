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
          height: 500,
          width: 337,
          colors: ['#4374e0']
        };

        var chart = new google.charts.Bar(document.getElementById('gall_bladder'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
