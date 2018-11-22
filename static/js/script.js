$(document).ready(function() {
	window.is = {};

	window.is.intro = ({
		init: function() {
			var mySwiper = new Swiper('.swiper-container', {
				speed: 1100,
				slidesPerView: 'auto',
				spaceBetween: 80,
				loop: true,
				mousewheel: {
					releaseOnEdges: true
				},
			});

			$('body').on('click', '.js-slide-prev', function() {
				mySwiper.slidePrev();
				return;
			});

			$('body').on('click', '.js-slide-next', function() {
				mySwiper.slideNext();
				return;
			});
		}
	}).init();

});
