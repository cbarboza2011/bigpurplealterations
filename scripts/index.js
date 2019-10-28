$(document).ready(function() {

	$('.customers').slick({
  dots: true,
  infinite: true,
	speed: 1000,
	slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
	adaptiveHeight: false,
});

$('.sewing-tips').slick({
dots: true,
infinite: true,
speed: 1000,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
adaptiveHeight: false,
});

$('.hamburger').on('click', function() {
	$('nav a').not('#navFB').slideToggle();
	$('.menu').toggle();
});

var screenWidth = $(window).width();
if (screenWidth < 750) {
	$('.back-to-top').text('↑ Top');
	// add a scrolling icon to scrollable text on touch
	var $scrollDiv = $('<div class="scroller">⏷</div>');
	var $scrollable = $('.story-scroll');
	$scrollable.css('position', 'relative').append($scrollDiv);
	var $scroller = $('.scroller');
	$scroller.hide();
	$scrollable.mousedown(function() {
		$scroller.show();
		$(this).mouseup(function() {
			$scroller.hide();
		});
	});
} else {}

});
