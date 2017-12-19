$(document).ready(function() {
	var patientName = $("#name");
	var patientEmail = $("#email");
	var patientZip = $("#zip-code");


	//Need to add validation.
	$(document).on("submit", "#patient-form", submitPatientData);
	//$(document).on("click", "#try", getPatientData);


	function submitPatientData(event){
		event.preventDefault();
		insertPatientData({
			name: patientName.val().trim(),
			email: patientEmail.val().trim(),
			zipCode: patientZip.val().trim(),
			healthScore: $('input[name="inlineRadioOptions"]:checked').val()
		});
		emptyForm();
		window.location.href = '/';
	}
	/*************This is relevant to the handlebars stuff**********************/
	function getPatientData() {

		$.get("/api/avg/236").then(function(data){
			//var source = $("#patient-data").html();
			//console.log(source);
			var thing = "<ol style='list-style: decimal inside;'>{{#each data}}<li><p>{{this.state}}</p></li>{{/each}}</ol>";
			var compiledTemplate = Handlebars.compile(thing);
			var html = compiledTemplate({data:data});
			//console.log(data);
			$("#what").html(html);
		})
	}

	function getProcedureName(){
		$.get("/api/procedures").then(function(data){
			var buttons = "{{#each data}}<button class = 'btn btn-default btn-block'>{{this.procedureName}}</button>{{/each}}";
			var compiled = Handlebars.compile(buttons);
			var html = compiled({data:data});
			$(".top-buffer").html(html);
		})
	}


	function emptyForm(){
		patientName.val("");
		patientEmail.val("");
		patientZip.val("");
		$('input[name="inlineRadioOptions"]').prop('checked', false);
	}
	function insertPatientData(patientData){
		$.post("/api/patient", patientData)
			.then(function(){
				console.log("You have success!");
			});
	}
});