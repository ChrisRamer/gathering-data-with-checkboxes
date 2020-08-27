$(document).ready(function () {
	$("form#transportation_survey").submit(function (event) {
		event.preventDefault();
		$("#output").show();
		$("input:checkbox[name=work-transportation]:checked").each(function () {
			const workTransportationMode = $(this).val();
			$("#output #work-responses").append(workTransportationMode + "<br>");
		});
		$("input:checkbox[name=fun-transportation]:checked").each(function () {
			const funTransportationMode = $(this).val();
			$("#output #fun-responses").append(funTransportationMode + "<br>");
		});
		$("#transportation_survey").hide();
	});
});