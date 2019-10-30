

$(function() {
	var mCount = $('.m-count'),
	floorNumber = $('.floor-number'),
	typeOfHouse = $('input[name="typeOfHouse"]').val(),
	project = $('input[type="checkbox"]'),
	price = $('#price'),
	basePrice = 100,
	design = 0,
	finalPrice = 90000;

	mCount.change(function() {
		if ($(this).val() > 20) {
			$(this).tooltip('destroy');
			finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
			price.text(finalPrice);
		} else {
			$(this).tooltip('toggle');
		}
	});
	floorNumber.change(function(event) {
		finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
		price.text(finalPrice);
	});
	$('input[name="typeOfHouse"]').change(function(event) {
		typeOfHouse = $(this).val();
		finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
		price.text(finalPrice);
		if ($(this).val() == 1) {
			$('img').attr('src', 'img/1.png');
		} else {
			$('img').attr('src', 'img/2.png');
		}

	});
	project.change(function(event) {
		if ($(this).is(':checked')) {
			design = 15000;
			finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
				price.text(finalPrice);
		} else {
			design = 0;
			finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
				price.text(finalPrice);
		}
	});

	price.text('90000');
});