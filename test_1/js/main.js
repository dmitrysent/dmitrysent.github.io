$(function(){

    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/carousel/sl-left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/carousel/sl-right.png"></img></button>',
        arrows: true,
        dots: false,
        slidesToShow: 1,
    });

    $('.tiles__inner').slick({
        mobileFirst: true,
        speed: 1200,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 769,
                  settings: 'unslick'
            },
        ]
    });

    $('.values__inner').slick({
        mobileFirst: true,
        speed: 1200,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 321,
                  settings: 'unslick'
            },
        ]
    });


    // $(window).on('resize', function() {
    //     $('.tiles__inner').slick('resize');
    //     setTimeout(function() {window.location.reload();}, 1);
    // });


    $('[data-modal=history]').on('click', function() {
        $('.overlay, #history').fadeIn();
    });
    
    
    $('.modal__close').on('click', function () {
        $('.overlay, #history').fadeOut('slow');
    });

    $('.header__nav-link').on('click', function () {
        $('.header__nav').toggleClass('header__nav-active');
        $('.hamburger').toggleClass('hamburger-active')
    });

	$('.overlay').on('click', function(e) {
		if ($(e.target).closest('.modal').length == 0) {
			$(this).fadeOut();					
		}
	});	

    $('.job__button').click(function(){
        $(".job__item-hidden").addClass('job__item-active');
    });

    $('.hamburger').click(function() {
        $('.header__nav').toggleClass('header__nav-active'),
        $('.hamburger').toggleClass('hamburger-active')
    });
});
