
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "document.txt",
		cache: false
	}).done(function(text) {
		$("#box").html(text);
	});

	$("#boxaux").click(function(event) {
		$.ajax({
		  type:"GET",
		  url: "documentaux.txt",
		  cache: false
		})
		.done(function(text) {
			$("#boxaux").html(text);
		})

	});
});
