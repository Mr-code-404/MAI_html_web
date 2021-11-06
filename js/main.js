/*============================================================

 * Template Name: Wer corporate html template 
 * Author: ST-themes - (https://themeforest.net/user/st-themes)
 * Version: 1.0
 * Copyright 2020 ST-themes

 ===============================================================*/
 
(function ($) {
    "use strict";

    $(window).on('load', function(){
        $('.preloader').fadeOut('slow');
        isotopeInit();
    })


    $(document).ready(function () {
        smoothScroolInit();
        menuControll();
        magnificPopupInit();
        testi_carouselInit();
        single_portfolio_carouselInit();
        counterInit();
    });

    $(window).on('scroll', function () {
        if (!$('#menu').hasClass('open')) {
            if ($(document).scrollTop() > 70) {
                $('header').addClass('fixed_header');
            } else {
                $('header').removeClass('fixed_header');
            }
        }else{
            $('header').addClass('fixed_header');
        }
    });

    function smoothScroolInit() {
        $('a').smoothScroll({
            speed: 1000
        });
    }

    function menuControll() {
        $('.nav-toggler, .menu_link').on('click', function () {
            $('#menu').toggleClass('open');
            $('.nav-toggler').toggleClass('on');
        });
        $('.dropdown_item').on('click', function() {
            $('.dropdown_menu').toggleClass('d-block');
        });
    }

    function isotopeInit() {
        $('.project_items').isotope({
            // options...
            itemSelector: '.item',
            masonry: {
                columnWidth: '.item'
            }
        });
        $('.project_filter_menu ul li').on('click', function () {
            $('.project_filter_menu ul li').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $('.project_items').isotope({
                filter: selector
            });
            return false;
        });
    }

    function magnificPopupInit() {
        $('.content a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    function testi_carouselInit() {
        $('.owl-carousel.testi_carousel').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            stagePadding: 2,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    function single_portfolio_carouselInit() {
        $('.owl-carousel.single_portfolio').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            nav: true,
            dots: false,
            animateOut: 'fadeOut',
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        });
    }

    function counterInit() {
        $('.counter_wrapper .count').counterUp({
            delay: 10,
            time: 1500,
        });
    }

})(jQuery);