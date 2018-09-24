$(document).ready(function(){

	$(".hidemenu a, header a").click(function(e){
		e.preventDefault();   
		var id = $(this).attr("href"),
		top = $(id).offset().top;   
		$("body,html").animate({scrollTop: top}, 800);
	});

	$('.slick').slick({
		arrows: false,
		dots: true
	});

	$('.hidemenu a').click(function(){
		$('.hidemenu__button').removeClass('open');
		$('body, html').css('overflow', 'auto').css('height', 'initial');
		$('.hidemenu').fadeOut();
	});

	$('.close-btn').click(function(){
		$(this).parent().parent().fadeOut();
		$('body, html').css('overflow', 'auto').css('height', 'initial');
	});

	$(".phone").inputmask('+7 '+"(999) 999-99-99");

	$('.slick-content').slick({
		arrows: false,
		swipe: false,
		infinite: false
	});

	$('.our-crew__carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.our-crew__carousel .carousel-card__text').click(function(){
			$('.popupbackground.crewmember').fadeIn().css('display', 'flex');
			$('html').css('overflow', 'hidden').css('height', '100%');
	});

	$('.open-modal').click(function(e){
		e.preventDefault();
		$('.popupbackground.flat').fadeIn().css('display', 'flex');
		$('html').css('overflow', 'hidden').css('height', '100%');
});

	$('button.next').click(function(){
		$('.slick-content').slick('slickNext');
		$('.calc__foot span.step.active-step').removeClass('active-step').next().next().addClass('active-step');
	});
	$('button.prev').click(function(){
		$('.slick-content').slick('slickPrev');
		$('.calc__foot span.step.active-step').removeClass('active-step').prev().prev().addClass('active-step');
	});

	$('.hidemenu__button').click(function(){
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.hidemenu').fadeOut();
			$('body, html').css('overflow', 'auto').css('height', 'initial');
		} else {
			$(this).addClass('open');
			$('.hidemenu').fadeIn();
			$('body, html').css('overflow', 'hidden').css('height', '100%');
		}
	});

	
	if ($(window).width() < 768) {
		$('.plus-there').click(function(){
			if ($(this).hasClass('open')) {
				$('.price-items .price-card__hide').css('opacity', '0');
				$(this).removeClass('open');
			} else {
				$('.price-items .price-card__hide').css('opacity', '0');
				$(this).parent().parent().children().first().css('opacity', '1');
				$(this).addClass('open');
			}
			
		});
	} else {
		$('.soc li a').hover(function(){
			//$('.soc li a').addClass('no-hover');
			$(this).removeClass('no-hover');
		});
	
		$('.soc li a').mouseleave(function(){
			$(this).addClass('no-hover');
		});
	}
});