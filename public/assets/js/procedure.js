$(document).ready(function() {
	var procedureContainer = $(".procedure-container");
	var procedure;

	function getProcedures(procedureId){
		$.get("api/procedures/" + procedureId, function(data){
			procedure = data;
			console.log("Costs", procedure);
			populate();
		})
	}

	getProcedures(470);
	function populate(){
		procedureContainer.text(procedure[0].drgDefinition);
	}
});