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

	window.is.projectsShave = ({
		init: function() {
			if($('.js-projects-shave').length) {
				$('.js-projects-shave').shave(160);
			}
		}
	}).init();

	window.is.fancy = ({
		init: function() {
			$("[data-fancybox]").fancybox({
				lang : 'ru',
				i18n : {
					'ru' : {
						CLOSE       : 'Закрыть',
						NEXT        : 'Следующий',
						PREV        : 'Предыдущий',
						ERROR       : 'Запрошенный контент не может быть загружен. <br> Повторите попытку позже.',
						PLAY_START  : 'Начать слайд-шоу',
						PLAY_STOP   : 'Остановить слайд-шоу',
						FULL_SCREEN : 'Полный экран',
						THUMBS      : 'Эскизы',
						DOWNLOAD    : 'Скачать',
						SHARE       : 'Поделиться',
						ZOOM        : 'Увеличить'
					}
				},
				buttons : [
					'close'
				],
			});
		}
	}).init();

});
