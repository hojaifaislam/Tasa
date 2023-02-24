(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
        function isotopeInit() {
            $('.portfolio_wrapper').isotope({
                itemSelector: '.item',

                masonry: {
                    columnHeight: '.item'
                },
            });


            $('.testimonials_box_wrapper').isotope({
                itemSelector: '.item',

                masonry: {
                    columnHeight: '.item'
                },
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {

        // Smoot Scroll Effect
        $('#menu li a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInSine');
            event.preventDefault();
        });

        // Hamburger-menu
        $('.hamburger-menu, .ofcavas-menu ul li a').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        //05. sticky header
        function sticky_header(){
            $(window).on('scroll', function() {
                if (!$('#menu').hasClass('open')) {
                    if ($(window).scrollTop() > 70) {
                        $('header').addClass('fixed_header');
                    } else {
                        $('header').removeClass('fixed_header');
                    }
                }else{
                    $('header').addClass('fixed_header');
                }
            });
        }
        sticky_header();

        $(".owl-carousel.slider-active").owlCarousel({
            nav: false,
            dot: false,
            autoplay: true,
            autoplayTimeout: 2000,
            loop: true,
            margin: 30,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 3,
                },
                576: {
                    items: 5,
                },
                768: {
                    items: 8,
                },
                1200: {
                    items: 13,

                }
            }
        });
    });
})(jQuery);