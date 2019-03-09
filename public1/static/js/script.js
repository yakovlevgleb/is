$(document).ready(function () {
	window.is = {};

	window.is.obj = ({
		init: function () {
			if ($('.js-burger').length) {
				$('.js-burger').on('click', function () {
					var _t = $(this),
						nav = _t.siblings('.navigation'),
						body = $('body');
					if (!_t.hasClass('header__burger--active')) {
						_t.addClass('header__burger--active');
						body.addClass('open-menu');
						nav.fadeIn('350');
					} else {
						_t.removeClass('header__burger--active');
						body.removeClass('open-menu');
						nav.fadeOut('350');
					}
					return false;
				});
			}
		}
	}).init();

	window.is.form = ({

		init: function () {

			var _th = this;

			$('.js-validate').submit(function (e) {
				if (!_th.checkForm($(this))) {
					return false;
				}
			});
		},

		checkForm: function (form) {
			var checkResult = true;
			form.find('.warning').removeClass('warning');
			form.find('input, textarea, select').each(function () {
				if ($(this).data('req')) {
					switch ($(this).data('type')) {
						case 'checkbox':
							if (!$(this).is(':checked')) {
								$(this).siblings('label').addClass('warning');
								checkResult = false;
							}
							break;
						case 'mobile':
							if ($.trim($(this).val()).length < 17) {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
						case 'email':
							var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
							if (!re.test($(this).val())) {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
						case 'select':
							if (!$(this).parent().hasClass('changed')) {
								$(this).parent().addClass('warning');
								checkResult = false;
							}
							break;
						default:
							if ($.trim($(this).val()) === '') {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
					}
				}
			});
			return checkResult;
		}
	}).init();

	window.is.intro = ({
		init: function () {
			var mySwiper = new Swiper('.js-introcar', {
				speed: 1100,
				loop: true,
				breakpoints: {
					0: {
						slidesPerView: 1,
						spaceBetween: 0,
					},

					1023: {
						slidesPerView: 'auto',
						spaceBetween: 80,
					}
				}
			});

			$('body').on('click', '.js-slide-prev', function () {
				mySwiper.slidePrev();
				return;
			});

			$('body').on('click', '.js-slide-next', function () {
				mySwiper.slideNext();
				return;
			});
		}
	}).init();

	window.is.shave = ({
		init: function () {
			if ($('.js-projects-shave').length) {
				$('.js-projects-shave').shave(160);
			}
			if ($('.js-service-shave').length) {
				$('.js-service-shave').shave(110);
			}
		}
	}).init();

	window.is.inputStyler = ({
		init: function () {
			if ($('select').length) {
				$('select').styler({
					selectSmartPositioning: 'false'
				});
			}
		}
	}).init();

	window.is.fancy = ({
		init: function () {
			$("[data-fancybox]").fancybox({
				lang: 'ru',
				i18n: {
					'ru': {
						CLOSE: 'Закрыть',
						NEXT: 'Следующий',
						PREV: 'Предыдущий',
						ERROR: 'Запрошенный контент не может быть загружен. <br> Повторите попытку позже.',
						PLAY_START: 'Начать слайд-шоу',
						PLAY_STOP: 'Остановить слайд-шоу',
						FULL_SCREEN: 'Полный экран',
						THUMBS: 'Эскизы',
						DOWNLOAD: 'Скачать',
						SHARE: 'Поделиться',
						ZOOM: 'Увеличить'
					}
				},
				buttons: [
					'close'
				],
			});
		}
	}).init();

	window.is.yaMap = ({
		init: function () {
			if ($('#map').length) {
				ymaps.ready(function () {
					var myMap = new ymaps.Map('map', {
						center: [
							55.857334, 37.647015
						],
						zoom: 15,
						controls: ['zoomControl']
					});

					myMap.behaviors.disable('scrollZoom');

					ymaps.route([{
							type: 'Старт',
							point: [55.855738, 37.654481]
						},
						{
							type: 'Конец',
							point: [55.858276, 37.640327]
						}
					], {
						mapStateAutoApply: true,
						routingMode: "pedestrian"
					}).then(function (route) {
						route.getPaths().options.set({
							strokeColor: '83dc5b',
							opacity: 0.9
						});
						myMap.geoObjects.add(route);
					});

				});
			}
		}
	}).init();

	window.is.search = ({
		init: function () {
			$('.js-open-search').click(function () {
				$(this).toggleClass('open');
				$(this).closest('.navigation, .footer__column').find('.js-search-form').toggleClass('active')
			});

			$(document).on('click', function (e) {
				if (!$(e.target).closest('.navigation__item--search').length && !$(e.target).closest('.footer__nav-item--search').length && !$(e.target).closest('.footer .search').length) {
					if ($('.header .search-btn.open').length ) {
						$('.header .search-btn.open').removeClass('open');
						$('.navigation').find('.js-search-form').removeClass('active');
					}
					if ($('.footer .search-btn.open').length ) {
						$('.footer .search-btn.open').removeClass('open');
						$('.footer__column').find('.js-search-form').removeClass('active');
					}
					e.stopPropagation();
			   }
			});
		}
	}).init();

	window.is.photogallery = ({
		init: function () {
			var mySwiper = new Swiper('.js-photogalerycar', {
				speed: 1100,
				loop: true,
				slidesPerView: 2,
				spaceBetween: 42,
				navigation: {
					nextEl: '.photogalery .swiper-button-next',
					prevEl: '.photogalery .swiper-button-prev',
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
						spaceBetween: 0
					},

					767: {
						slidesPerView: 1,
						spaceBetween: 0
					}
				}
			});
		}
	}).init();

	window.is.videogallery = ({
		init: function () {
			var mySwiper = new Swiper('.js-videogalery', {
				speed: 1100,
				loop: true,
				slidesPerView: 2,
				spaceBetween: 42,
				navigation: {
					nextEl: '.videogalery .swiper-button-next',
					prevEl: '.videogalery .swiper-button-prev',
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
						spaceBetween: 0
					},

					767: {
						slidesPerView: 1,
						spaceBetween: 0
					}
				}
			});
		}
	}).init();

});
