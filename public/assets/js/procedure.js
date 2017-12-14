$(document).ready(function() {
	var procedureContainer = $(".procedure-container");
	//var procedureId;

	function getProcedures(procedureId){
		$.get("api/costs/" + procedureId, function(data){
			console.log("Costs", data);
		});
	}

});