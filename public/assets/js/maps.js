function createRegionMap() {
  google.charts.load('current', {
    packages: ['geochart'],
    mapsApiKey: 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY',
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawRegionsMap(dataArray, name) {
  const data = google.visualization.arrayToDataTable(dataArray);

  const options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: {
      colors: ['#dee1e5', '#4374e0'],
    }, // gray to blue
  };
  const chart = new google.visualization.GeoChart(document.getElementById('map'));
  chart.draw(data, options);
}

function createStateMap() {
  google.charts.load('current', {
    packages: ['geochart'],
    mapsApiKey: 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY',
  });
  google.charts.setOnLoadCallback(drawMarkersMap);
}

function drawMarkersMap(dataArray, name, region) {
      // var data = google.visualization.arrayToDataTable(dataArray);
  const data = new google.visualization.DataTable();
      // data.addColumn('number', 'Hospital Name');
  data.addColumn('number', 'Latitude');
  data.addColumn('number', 'Longitude');
  data.addColumn('string', 'Label');
  data.addColumn('number', 'Procedure Cost');
  data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
  data.addRows(dataArray);
  const options = {
    sizeAxis: {
      minValue: 0,
      maxValue: 100,
    },
    displayMode: 'markers',
    region,
    tooltip: { isHtml: true },
    resolution: 'provinces',
    colorAxis: {
      colors: ['#dee1e5', '#4374e0'],
    }, // gray to blue
  };
  const chart = new google.visualization.GeoChart(document.getElementById('state_map'));
  chart.draw(data, options);
}
