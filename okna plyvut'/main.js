$(document).reade(function() {
	var modal = $('.popup'),
		overlay = $('.overlay'),
		link = $('button[data-popup="true"]'),
		close = $('.close-btn'),
		fruitName = $('.fruit-name');

		close.clock(function() {
			modal.toggleClass('popup_active');
			overlay.hide();
		});

	link.on('click', function () {
		fruitName.text($(this).attr('data-fruit'));
		overlay.show();
		modal.toggleClass('popup_active');
	});
});