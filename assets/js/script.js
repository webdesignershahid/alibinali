(function ($) {
    "use strict";


    // Popover Activation Globally
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    var aba_itt = {

        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $(".header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 30) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },

        /* ============================================================ */
        /* Jquery Plugins Calling
        /* ============================================================ */
        onePageFunction: function(){
            $('header .main-menu a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top - 150,
                        }, 100);
                        return false;
                    }
                }
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);                
            }
            cloneMobileMenu(".header-bottom .nav", ".mobile-menu .main-menu");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                    $('body').toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                        $('body').removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.hamburgar', '.mobile-menu');  	

        },

        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var spot_image_carousel = new Swiper('.spot-img-carousel', {
                slidesPerView: 2,
                freeMode: false,
                loop: true,
                breakpoints: {   
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 992px
                    768: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    }
                }
            });  
            var spot_review_carousel = new Swiper('.review-slider', {
                slidesPerView: 1,
                freeMode: false,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {   
                    // when window width is >= 576px
                    576: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }
            });  

            // Haf Day City Tour Slider
            var hdct_slider_thumb = new Swiper('.hdct_slider_thumb', {                
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.hdct_slider_thumb .swiper-button-next',
                    prevEl: '.hdct_slider_thumb .swiper-button-prev',
                },         
            });
            var hdct_slider = new Swiper('.hdct_slider', {
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: hdct_slider_thumb,
                },
                navigation: {
                    nextEl: '.hdct_slider_thumb .swiper-button-next',
                    prevEl: '.hdct_slider_thumb .swiper-button-prev',
                },
            }); 

            // City Tour by Night wigh Dinner Slider
            var ctnd_slider_thumb = new Swiper('.ctnd_slider_thumb', {                
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.ctnd_slider_thumb .swiper-button-next',
                    prevEl: '.ctnd_slider_thumb .swiper-button-prev',
                },         
            });
            var ctnd_slider = new Swiper('.ctnd_slider', {
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: ctnd_slider_thumb,
                },
                navigation: {
                    nextEl: '.ctnd_slider_thumb .swiper-button-next',
                    prevEl: '.ctnd_slider_thumb .swiper-button-prev',
                },
            });    

            // Panoramic City Tour
            var pct_slider_thumb = new Swiper('.pct_slider_thumb', {                
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.pct_slider_thumb .swiper-button-next',
                    prevEl: '.pct_slider_thumb .swiper-button-prev',
                },         
            });
            var pct_slider = new Swiper('.pct_slider', {
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: pct_slider_thumb,
                },
                navigation: {
                    nextEl: '.pct_slider_thumb .swiper-button-next',
                    prevEl: '.pct_slider_thumb .swiper-button-prev',
                },
            });    
            // Hop on Hop Off Tour
            var hop_on_of_slider_thumb = new Swiper('.hop_on_of_slider_thumb', {                
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.hop_on_of_slider_thumb .swiper-button-next',
                    prevEl: '.hop_on_of_slider_thumb .swiper-button-prev',
                },         
            });
            var hop_on_of_slider = new Swiper('.hop_on_of_slider', {
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: hop_on_of_slider_thumb,
                },
                navigation: {
                    nextEl: '.hop_on_of_slider_thumb .swiper-button-next',
                    prevEl: '.hop_on_of_slider_thumb .swiper-button-prev',
                },
            });  
            
            
            var suggested_travel_spot = new Swiper('.suggested-spot-slider', {
                slidesPerView: 1,
                freeMode: false,
                loop: true,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {   
                    // when window width is >= 576px
                    576: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }
            }); 
            
        },

 

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fas fa-level-up-alt'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        magnificPopup: function () {
            $('.popup-youtube').each(function() { // the containers for all your galleries
                $(this).magnificPopup({
                    // disableOn: 375,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }); 
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-color]").each(function() {
                var $this = $(this);

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")");    
                    $this.css("background-size", $this.attr("data-bg-size"));
                    $this.css("background-repeat", $this.attr("data-bg-repeat"));
                    $this.css("background-position", $this.attr("data-bg-position"));
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
                }
                // Background Color    
                if( $("[data-bg-color]") ){
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                // Background Color   
                if( $("[data-color]") ){
                    $this.css("color", $this.attr("data-color") );
                }
            });
        },

        initialize: function() {
			aba_itt.onePageFunction();
			aba_itt.mobile_menu();
			aba_itt.scroll_to_top();
			aba_itt.sticky_header();
			aba_itt.swiperCarousel();
			aba_itt.magnificPopup();
			aba_itt.background_image();
		}
    };
    $(function() {
		aba_itt.initialize();

        $(window).on('load', function() {
            $(".preloader").fadeOut();     
        });
	});


})(jQuery);