$(document).ready(function() {

    $('.land-g-vc-menu-item a, .land-g-vc-welcome-btn a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 0;
            if ($('.top-bar-menu').length == 1) {
                curOffset = $('.top-bar-menu').outerHeight();
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curOffset - 20});
        }
        e.preventDefault();
    });

    $('.land-g-vc-catalogue-list').each(function() {
        var curSlider = $(this);
        var swiper = new Swiper(curSlider.find('.swiper')[0], {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: curSlider.find('.swiper-button-next')[0],
                prevEl: curSlider.find('.swiper-button-prev')[0],
            },
            breakpoints: {
                1220: {
                    slidesPerView: 4
                }
            },
        });
    });

    $('.land-g-vc-up-link').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    $('.land-g-vc-screen').each(function() {
        var startAnimation1 = $('.land-g-vc-screen').offset().top - windowHeight * 3 / 4;
        var startAnimation2 = $('.land-g-vc-screen').offset().top - windowHeight * 1 / 3;
        var startAnimation3 = $('.land-g-vc-screen').offset().top - windowHeight * 1 / 3;
        if ($(window).width() < 1220) {
            startAnimation1 = $('.land-g-vc-screen').offset().top - windowHeight * 5 / 5;
            startAnimation2 = $('.land-g-vc-screen').offset().top - windowHeight * 3 / 5;
            startAnimation3 = $('.land-g-vc-screen').offset().top - windowHeight * 1 / 5;
        }
        if (windowScroll > startAnimation1) {
            $('.land-g-vc-screen').addClass('land-g-vc-screen-animation-1');
        } else {
            $('.land-g-vc-screen').removeClass('land-g-vc-screen-animation-1');
        }
        if (windowScroll > startAnimation2) {
            $('.land-g-vc-screen').addClass('land-g-vc-screen-animation-2');
        } else {
            $('.land-g-vc-screen').removeClass('land-g-vc-screen-animation-2');
        }
        if (windowScroll > startAnimation3) {
            $('.land-g-vc-screen').addClass('land-g-vc-screen-animation-3');
        } else {
            $('.land-g-vc-screen').removeClass('land-g-vc-screen-animation-3');
        }
    });
});