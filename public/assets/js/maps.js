google.charts.load('current', { packages: ['corechart'] });
function drawRegionsMap(dataArray, name, procId) {
	const data = google.visualization.arrayToDataTable(dataArray);
	
	const options = {
		region: 'US',
		displayMode: 'regions',
		resolution: 'provinces',
		colorAxis: {
				colors: ['#dee1e5', '#4374e0'],
			}
	};
	const chart = new google.visualization.GeoChart(document.getElementById('map'));
	google.visualization.events.addListener(chart, 'select', function () {
		var selection = chart.getSelection();
		if (selection.length > 0) {
			var state = data.getValue(selection[0].row, 0).toLowerCase();
			$('#title-for-state').children('h1:first').remove();
			$('#title-for-state').append(`<h1>${data.getValue(selection[0].row, 0)}<small> Procedure Cost by Hospital</small></h1>`);
			getStateCostData(state, procId);
		}
	});
	chart.draw(data, options);
}

function createRegionMap() {
	google.charts.load('current', {
		packages: ['geochart'],
		mapsApiKey: 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY'
	});
}

function createStateMap() {
	google.charts.load('current', {
		packages: ['geochart'],
		mapsApiKey: 'AIzaSyCfZ7tXLzQQU_yWm7iJJwWjKwaasAFUUBY',
	});
}

function drawMarkersMap(dataArray, name, region) {
	const data = new google.visualization.DataTable();
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
			},
	};
	const chart = new google.visualization.GeoChart(document.getElementById('state_map'));
	chart.draw(data, options);
}
