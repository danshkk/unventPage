$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});


var arrLang = {
    'ua': {
        'about': '<span class="header-top__about--bold"> Професійний монтаж димоходів</span> будь-якої складності на території Києва та Київської обл.',
        'place': ' <span class="map__link-text--bold">Україна, Київ,</span> Васильківська 30',
        'language': 'Вибір мови',
        'consultation': 'Консультація інженера',
        'calculator': 'КАЛЬКУЛЯТОР',
        'services': 'ПОСЛУГИ',
        'ourNews': 'НАШІ НОВИНИ',
        'feed': 'ВІДГУКИ',
        'consultation': 'КОНСУЛЬТАЦІЯ',
        'advantages': 'ПЕРЕВАГИ',
        'production': 'ВИРОБНИЦТВО',
        'AQ': 'ПИТАННЯ ВІДПОВІДЬ',
        'contacts': 'КОНТАКТИ',
        'mainTitle': ' <span class="content__title--bold">Монтаж димоходів з нержавіючої сталі</span> для приватних будинків і підприємств',
        'featureItem1': ' <span class="feature__item-text--bold">років встановлюємо димоходи</span>  для приватних осіб і організацій',
        'featureItem2': ' <span class="feature__item-text--bold">Безкоштовний виїзд інженера</span> в межах 30 км.  від Києва',
        'featureItem3': ' <span class="feature__item-text--bold"> Монтаж під ключ від 1 дня,</span> в наявності всі дозвільні документи',
        'sales': 'Розрахуйте вартість монтажу вашого димоходу за 1 хвилину і <span class="content-bottom__text--lay"> отримаєте знижку 15%</span>',
        'calcSales': 'Розрахувати вартість монтажу і отримати знижку',
        'license': 'Ліцензії та сертифікати в наявності'
    },
    'ru': {
        'about': '<span class="header-top__about--bold">Профессиональный монтаж дымоходов</span> любой сложности на территории Киева и Киевской обл.',
        'place': ' <span class="map__link-text--bold">Украина, Киев,</span> Васильковская 30',
        'language': 'Выбор языка',
        'consultation': 'Консультация инженера',
        'calculator': 'КАЛЬКУЛЯТОР',
        'services': 'УСЛУГИ',
        'ourNews': 'НАШИ НОВОСТИ',
        'feed': 'ОТЗЫВЫ',
        'consultation': 'КОНСУЛЬТАЦИЯ',
        'advantages': 'ПРЕИМУЩЕСТВА',
        'production': 'ПРОИЗВОДСТВО',
        'AQ': 'ВОПРОС-ОТВЕТ',
        'contacts': 'КОНТАКТЫ',
        'mainTitle': ' <span class="content__title--bold">Монтаж дымоходов из нержавеющей стали</span> для частных домов и предприятий',
        'featureItem1': ' <span class="feature__item-text--bold">лет устанавливаем дымоходы</span> для частных лиц и организаций',
        'featureItem2': ' <span class="feature__item-text--bold">Бесплатный выезд инженера</span> в пределах 30 км. от Киева',
        'featureItem3': '<span class="feature__item-text--bold">Монтаж под ключ от 1 дня,</span> в наличии все разрешительные документы',
        'sales': 'Рассчитайте стоимость монтажа вашего дымохода за 1 минуту и <span class="content-bottom__text--lay">получите скидку 15%</span>',
        'calcSales': 'Рассчитать стоимость монтажа и получить скидку',
        'license': 'Лицензии и сертификаты в наличии'
    }
}

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).html(arrLang[lang][$(this).attr('key')]);
        });
    });
});

// Add active class to the current button (highlight it)
var header = document.getElementById("languageBtnBox");
var btns = header.getElementsByClassName("btnLang");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeLang");
    current[0].className = current[0].className.replace(" activeLang", "");
    this.className += " activeLang";
  });
}

const iconMenu = document.querySelector('.header-menu__icon');
if (iconMenu) {
    const menuCont = document.querySelector('.header-menu__container');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuCont.classList.toggle('_active');
    });
}
