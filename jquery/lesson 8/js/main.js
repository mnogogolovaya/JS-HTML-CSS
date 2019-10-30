$('input').keydown(function(event) {
	console.log($(this).val())
});

$('input').keyup(function(event) {
	$('p').text($(this).val())
});

$('input').keydown(function(event) {
	console.log(eventObject.which)
});