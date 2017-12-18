$(function () {

	function getRankedStateList(procId, name) {
		$.get('/api/avg/' + procId).then(function (data) {
			//console.log(data);
			let list = "<ol>{{#each data}}<li><button class='state-select' data-state='{{this.state}}' data-id='{{this.procId}}'>{{this.state}}</button></li>{{/each}}</ol>";
			console.log(data);
			getDataForMap(data, name);
			let compiledTemplate = Handlebars.compile(list);
			let html = compiledTemplate({
				data: data
			});
			$("#list-div").empty().append(html);
		});
	};

	function getDataForMap(data, name){
		var mapDataArray = []; 
		mapDataArray.push(["State", 'Average Cost of Procedure']);
        $.each(data, function(key, value) {
        	mapDataArray.push([value.state, value.averageCost]);
        });
        console.log(mapDataArray);
        drawRegionsMap(mapDataArray, name);
    }

    function getDataForState(data, name){
    	var stateDataArray = [];
    	stateDataArray.push(["Hospital", "Procedure Cost"]);
    	var regionTemp = data[0].Provider.region;
    	var region = "US-"+ regionTemp.slice(0,2);
    	$.each(data, function(key, value){
    		stateDataArray.push([value.Provider.address + " " + value.Provider.city + " " + value.Provider.state, value.hospitalCharges]);
    	})
    	console.log(stateDataArray);
    	drawMarkersMap(stateDataArray, name, region);
    }

	function getStateCostData(state, procId) {
		$.get("/api/cost/" + state + "/" + procId).then(function (data) {
			console.log(data);
			getDataForState(data, name);
		})
	}

	$(".proc-btn").on("click", function () {
		$("#title-for-map").children("h1:first").remove();
		let procId = $(this).data("id");
		let name = $(this).text();
		getRankedStateList(procId, name);
		$("#title-for-map").append("<h1>"+ name+ "<small> Procedure Cost by State</small></h1>");
	});

	$(document).on("click", ".state-select", function () {
		console.log("clicked")
		let state = $(this).data("state").toLowerCase();
		let procId = $(this).data("id");
		getStateCostData(state, procId);
	})

    $(".proc-btn").hover(function () {
        let id = $(this).data("id");
        let name = $(this).data("name");
        $.get("/api/mm/" + id).then(function (data) {
            console.log(data);
            console.log(data[0])
            addData(name, data[0].state, data[0].min, data[1].state, data[1].max)
        })
    })

    //disable page scrolling while mouse is in the list-div. prevents page from moving 
    $(document).on('mousewheel DOMMouseScroll', "#list-div", function (e) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });
});
