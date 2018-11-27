$(document).ready(function() {
	window.is = {};

	window.is.form = ({

		init: function() {

			var _th = this;

			$('.js-validate').submit(function(e) {
				if (!_th.checkForm($(this))) {
					return false;
				}
			});
		},

		checkForm: function(form) {
			var checkResult = true;
			form.find('.warning').removeClass('warning');
			form.find('input, textarea, select').each(function() {
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

	window.is.inputStyler = ({
		init: function() {
			if($('select').length) {
				$('select').styler();
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
