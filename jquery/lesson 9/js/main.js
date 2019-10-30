$(function() {
	$('p').text('DOM элементы загружены')
});

$(window).load(function() {
});

$(window).unload(function() {
	alert('Пользователь, пока!')
});

$(window).resize(function(event) {
	console.log('Размеры окна изменены!')
});

$(window).scroll(function(event) {
	console.log('Страница прокручена')
});