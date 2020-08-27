$(document).ready(function () {
	$("form#transportation_survey").submit(function (event) {
		event.preventDefault();
		$("#output").show();
		$("input:checkbox[name=work-transportation]:checked").each(function () {
			const workTransportationMode = $(this).val();
			$("#output").append(workTransportationMode + "<br>");
		});
		$('#transportation_survey').hide();
	});
});