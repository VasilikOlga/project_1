$(function(){

	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});

	$('.box_slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		
//autoplay: 5000;
//autoplaySpeed: 5000

	});
		$('.slider_box').slick({
		prevArrow: $('.prev-news'),
		nextArrow: $('.next-news'),
		

	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	   $("#menu,#top").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });




});
$('.top').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});