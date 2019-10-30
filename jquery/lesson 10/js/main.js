$('ul li').click(function(event) {
	console.log('Ты нажал на элемент');
	$('ul').append('<li>Дополнительный элемент</li>');
});

function addAndStop(e) {
	$('ul').append('<li>Дополнительный элемент</li>');
	$('ul').off('click');
}

$('ul').on('click', 'li', addAndStop)