$(function() {
	// console.log("Вошли в функцию");

	var slideNow = 1;
	var slideCount = $(".sliderwprapper").children().length;
	var slideTime = 5000;
	var navBtn = $('.slide-nav');

	navBtn.click(function() {
		navBtn = $(this).index();
		$('.active').removeClass('active');
		$(this).toggleClass('active');
		if (navBtn + 1 != slideNow) {
			var translateWidth = -$('.viewport').width()	* (navBtn);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slide = navBtn + 1;
		} 
	});

	$('.btn-next').click(nextSlide);
	$('.btm-prev').click(prevSlide);

	function nextSlide() {
		// console.log("Следующий слайд");
		if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
			$('.sliderwprapper').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': "translate(0,0)"
			});
			slideNow = 1;
		} else {
			var translateWidth = -$('.viewport').width()	* (slideNow);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow++
		}
	}

	function prevSlide() {
		if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
			var translateWidth = -$('.viewport').width() * (slideCount - 1);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)',
			});
			slideNow = slideCount;
		} else {
			var translateWidth = -$('.viewport').width()	* (slideCount - 2);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow--;
		}
	}
});