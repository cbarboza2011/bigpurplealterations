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
	var $scrollDiv = $('<div class="scroller">⯆</div>');
	var $scrollable = $('.story-scroll');
	$scrollable.css('position', 'relative').append($scrollDiv);
	var $scroller = $('.scroller');
	$scrollable.scroll(function() {
		var $scrollHeight = $(this)[0].scrollTop;
		var $height = $(this)[0].scrollHeight - $(this)[0].clientHeight;
		if ($scrollHeight === $height) {
			$scroller.hide();
		} else {
			$scroller.show();
		}
	});

} else {}

});
