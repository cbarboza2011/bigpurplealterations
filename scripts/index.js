$(document).ready(function() {

	$('.customers').slick({
  dots: true,
  infinite: true,
	speed: 1000,
	slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
	adaptiveHeight: true,
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

});