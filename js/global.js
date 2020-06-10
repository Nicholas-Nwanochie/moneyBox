/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/

/* 01 - VARIABLES */
/* 02 - page calculations */
/* 03 - function on document ready */
/* 04 - function on page load */
/* 05 - function on page resize */
/* 06 - function on page scroll */
/* 07 - swiper sliders */
/* 08 - buttons, clicks, hovers */


var _functions = {};

$(function() {

	"use strict";
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_menu_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".main_menu_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, headerH, winScr, footerTop, _isresponsive, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i), _isFF = 'MozAppearance' in document.documentElement.style, headerHeight, pageHeader;

		/*========================*/
	/* 02 - page calculations */
	/*========================*/
	_functions.pageCalculations = function(){
		winW = $(window).width();
		winH = $(window).height();
		headerHeight = $('header').outerHeight();
		
		$('.navScroll').css('max-height', winH - $('header').outerHeight() );
		
		$('.Fullheight .cell-view').css('height', winH);
	};
		
    
    
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                delay:400000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1230,1230,960,720,700,480],
                gridheight:[1080,1080,1080,800,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
    
    
    
    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function our_product(){
        if ( $('.product_inner').length ){
            // Activate isotope in container
            $(".product_inner").imagesLoaded( function() {
                $(".product_inner").isotope({
                    layoutMode: 'fitRows',
                }); 
            }); 
            // Add isotope click function
            $(".product_fillter li").on('click',function(){
                $(".product_fillter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".product_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    our_product();
    
    
	/*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function ms_blog(){
        if ( $('.personal_blog_ms').length ){
            // Activate isotope in container
            $(".personal_blog_ms").imagesLoaded( function() {
                $(".personal_blog_ms").isotope({
                    layoutMode: 'masonry',
                    percentPosition:true,
                    columnWidth: 1
        //            masonry: {
        //                columnWidth: '.grid-sizer, .grid-sizer_two',
        //            }            
                }); 
            }); 
        }
    }
    ms_blog();
	
	
    
	/*=================================*/
	/* 04 - function on document ready */
	/*=================================*/
	if(_ismobile) $('body').addClass('mobile');
	_functions.pageCalculations();
	$('.SelectBox').SumoSelect();
	pageHeader = $('header');
		comingSoonContent();

	/*============================*/
	/* 05 - function on page load */
	/*============================*/
	$(window).load(function(){
		_functions.initSwiper();
		$('body').addClass('loaded');
		$('#loader-wrapper').fadeOut();
				
				//Isotope
				var $grid = $('.grid').isotope({
						itemSelector: '.grid-item',
						layoutMode: 'masonry',
						percentPosition: true,
						masonry: {
								columnWidth: '.grid-sizer',
							},
			stamp: ".stamp"
				});
				// My Portfolio
				var $grid = $('.grid-new').isotope({
						itemSelector: '.grid-item-new',
						layoutMode: 'masonry',
						percentPosition: true,
						masonry: {
								columnWidth: '.grid-sizer',
							},
			stamp: ".stamp"
				});
				// Slider Home Page 6
		$('#js-main-slider').pogoSlider({
			pauseOnHover: false,
			autoplay: true,
			generateNav: false,
			generateButtons: true,
			displayProgess: false,
			autoplayTimeout: 6000,
			responsive: true,
			onSlideStart: (function(){
				var _slideslength = jQuery('.pogoSlider-slide').length;
				var _currentSlide = this.currentSlideIndex + 1;
				jQuery('#totalslides').text(_slideslength);
				jQuery('#currentslides').text(_currentSlide);
			}),
		}).data('plugin_pogoSlider');
		// filter functions
				var filterFns = {
					// show if number is greater than 50
					numberGreaterThan50: function() {
						var number = $(this).find('.number').text();
						return parseInt( number, 10 ) > 50;
					},
					// show if name ends with -ium
					ium: function() {
						var name = $(this).find('.name').text();
						return name.match( /ium$/ );
					}
				};
				
				// bind filter button click
				$('.filters-button-group').on( 'click', 'div', function() {
					var filterValue = $( this ).attr('data-filter');
					// use filterFn if matches value
					filterValue = filterFns[ filterValue ] || filterValue;
					$grid.isotope({ filter: filterValue });
				});
				
				// change is-checked class on buttons
				$('.button-group').each( function( i, buttonGroup ) {
					var $buttonGroup = $( buttonGroup );
					$buttonGroup.on( 'click', 'div', function() {
						$buttonGroup.find('.is-checked').removeClass('is-checked');
						//removeCustomClass
						$buttonGroup.find('.active').removeClass('active');
						$( this ).addClass('is-checked');
					});
				});
				
				// bind filter button click
				$('.filters-masonry-button-group').on( 'click', 'div', function() {
					var filterValue = $( this ).attr('data-filter');
					// use filterFn if matches value
					filterValue = filterFns[ filterValue ] || filterValue;
					$grid.isotope({ filter: filterValue });
				});
	});

	/*==============================*/
	/* 06 - function on page resize */
	/*==============================*/
	_functions.resizeCall = function(){
		_functions.pageCalculations();
				comingSoonContent();
		}
	if(!_ismobile){
		$(window).resize(function(){
			_functions.resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			_functions.resizeCall();
		}, false);
	}

	/*=====================*/
	/* 07 - swiper sliders */
	/*=====================*/
	var initIterator = 0;
	_functions.initSwiper = function(){
		$('.swiper-container').not('.initialized').each(function(){								  
			var $t = $(this);								  

			var index = 'swiper-unique-id-'+initIterator;

			$t.addClass('swiper-'+index+' initialized').attr('id', index);
			$t.find('>.swiper-pagination').addClass('swiper-pagination-'+index);
			$t.parent().find('>.swiper-button-prev').addClass('swiper-button-prev-'+index);
			$t.parent().find('>.swiper-button-next').addClass('swiper-button-next-'+index);

			var slidesPerViewVar = ($t.data('slides-per-view'))?$t.data('slides-per-view'):1;
			if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				pagination: '.swiper-pagination-'+index,
						paginationClickable: true,
						nextButton: '.swiper-button-next-'+index,
						prevButton: '.swiper-button-prev-'+index,
						slidesPerView: slidesPerViewVar,
						autoHeight:($t.is('[data-auto-height]'))?parseInt($t.data('auto-height'), 10):0,
						loop: ($t.is('[data-loop]'))?parseInt($t.data('loop'), 10):0,
				autoplay: ($t.is('[data-autoplay]'))?parseInt($t.data('autoplay'), 10):0,
						breakpoints: ($t.is('[data-breakpoints]'))? { 767: { slidesPerView: parseInt($t.attr('data-xs-slides'), 10) }, 991: { slidesPerView: parseInt($t.attr('data-sm-slides'), 10) }, 1199: { slidesPerView: parseInt($t.attr('data-md-slides'), 10) } } : {},
						initialSlide: ($t.is('[data-ini]'))?parseInt($t.data('ini'), 10):0,
						speed: ($t.is('[data-speed]'))?parseInt($t.data('speed'), 10):500,
						keyboardControl: true,
						mousewheelControl: ($t.is('[data-mousewheel]'))?parseInt($t.data('mousewheel'), 10):0,
						mousewheelReleaseOnEdges: true,
						direction: ($t.is('[data-direction]'))?$t.data('direction'):'horizontal',
				spaceBetween: ($t.is('[data-space]'))?parseInt($t.data('space'), 10):0,
				parallax: (_isFF)?($t.data('parallax'), 0): ($t.is('[data-parallax]'))?parseInt($t.data('parallax'), 10):0,
				freeMode: ($t.is('[data-freemode]'))?parseInt($t.data('freemode'), 10):0
			});
			swipers['swiper-'+index].update();
			initIterator++;
		});
		$('.swiper-container.swiper-control-top').each(function(){
			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-bottom').attr('id')];
		});
		$('.swiper-container.swiper-control-bottom').each(function(){
			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-top').attr('id')];
		});
	};

	/*==============================*/
	/* 08 - buttons, clicks, hovers */
	/*==============================*/

	//open and close popup
	$(document).on('click', '.open-popup', function(){
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-rel="'+$(this).data('rel')+'"]').addClass('active');
		$('html').addClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-wrapper .button-close, .popup-wrapper .layer-close', function(){
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		setTimeout(function(){
			$('.ajax-popup').remove();
		},300);
		return false;
	});
	
	//Function OpenPopup
	function openPopup(foo){
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-rel="'+foo+'"]').addClass('active');
		$('html').addClass('overflow-hidden');
		return false;
	}

	//Tabs
	var tabsFinish = 0;
	$('.tab-menu').on('click', function() {
		if($(this).hasClass('active') || tabsFinish) return false;
		tabsFinish = 1;
				var tabsWrapper = $(this).closest('.tabs-block'),
					tabsMenu = tabsWrapper.find('.tab-menu'),
					tabsItem = tabsWrapper.find('.tab-entry'),
					index = tabsMenu.index(this);
				
				tabsItem.filter(':visible').fadeOut(function(){
					tabsItem.eq(index).fadeIn(function(){
						tabsFinish = 0;
					});
				});
				tabsMenu.removeClass('active');
				$(this).addClass('active');
		});

	//Accordeon
	$('.accordeon-title').on('click', function(){
		$(this).closest('.accordeon').find('.accordeon-title').not(this).removeClass('active').next().slideUp();
		$(this).addClass('active').next().slideDown();
	});
		
	//Smooth Scroll
		if(!_ismobile) {
				SmoothScroll({ stepSize: 100 })
		};
	
	//lightbox gallery
	var lightbox = $('.lightbox').simpleLightbox({
		disableScroll: false,
		captionSelector: 'self',
		closeText: '',
		alertErrorMessage: "Error",
		history: false,
		navText: ['','']
	});
	
	//Responsive menu
//	$('.menuIcon').on('click', function() {
//		$(this).toggleClass('menuIconActive');
//		$(this).closest('header').find('.responsiveWrapper').toggleClass('openMenu');
//	});
	
	//Drop downs
//	$('nav i.fa').on('click', function() {
//		$(this).toggleClass('DDopen');
//		$(this).closest('nav ul').find('ul').removeClass('opened');
//		$(this).parent().find('> ul').addClass('opened');
//		$(this).closest('nav ul').find('ul').not('.opened').slideUp(350);
//		$(this).parent().find('> ul').slideToggle(350);
//		$(this).closest('nav ul').find('i.fa').not(this).removeClass('DDopen');
//		if($(this).parent().find(".mega-menu-list").hasClass('opened'))
//		{
//			$(this).parent().find(".mega-menu-list").removeClass('opened');
//		}
//		else
//		{
//			$(this).parent().find(".mega-menu-list").addClass('opened');
//		}
//	});

	
	//Side header
	$('.headerStyle2 .menuIcon').on('click', function() {
		$('header.headerStyle2').toggleClass('sideHeaderOpen');
	});
	
	//Side header
	$('.headerClosed .closedMenuIcon').on('click', function() {
		$('header.headerStyle2').toggleClass('sideHeaderOpen');
	});
		
		//Responsive sidebar toggle
		$('.responsiveSideBar').on('click', function() {
			 $(this).parent().find('.sideBar').slideToggle(350); 
			 $(this).toggleClass('DDOpen');
		});
		
		//Comming soon timer
	var newYear = (new Date().getFullYear())+1;
		function setTimer(){                        
				var today = new Date();
				var finalTime = new Date("Sep,1,"+newYear);
				//var finalTime = new Date("Sep,1,2017");
				var interval = finalTime - today;
				if(interval<0) interval = 0;
				var days = parseInt(interval/(1000*60*60*24));
				var daysLeft = interval%(1000*60*60*24);
				var hours = parseInt(daysLeft/(1000*60*60));
				var hoursLeft = daysLeft%(1000*60*60);
				var minutes = parseInt(hoursLeft/(1000*60));
				var minutesLeft = hoursLeft%(1000*60);
				var seconds = parseInt(minutesLeft/(1000));
				$('.days').text(days);
				$('.hours').text(hours);
				$('.minutes').text(minutes);
				$('.seconds').text((seconds<10)?'0'+seconds:seconds);
		}
		setTimer();
		setInterval(function(){setTimer();}, 1000);
		
		function comingSoonContent() {
				//About us coming soon pages
				if ( winW < 991 ) {
						$('.aboutUsComingSoon').on('click', function() {
								$('html, body').animate({
									 scrollTop: $('.aboutUsAnination').offset().top
								}, 666);
						});
				} else if ( winW > 992 ) {
						$('.aboutUsComingSoon').on('click', function() {
							 $('.aboutUsAnination').toggleClass('showAboutUs'); 
						});
				} else {
						return false;
				}
		};
		
		//Coming soon sidebar toggle
		$('.closeSidebarContent').on('click', function() {
			 $(this).closest('.comingSoonCols').removeClass('showAboutUs');
		});
		
		//Filter drop down
		$('.responsiveFilter').on('click', function() {
				$('.filterShortcode').slideToggle(350); 
				$(this).toggleClass('filterOpen');
		});
		$('#myClient a').click(function (e) {
		$('#myClient li').removeClass('active');	
		e.preventDefault();
		$(this).tab('show');
		})
		// Hover Mega Menu
		var _left_width_screen;
		var _width_screen = $(window).width() - 100;
		$('nav ul li').hover(function() {
			$(".megamenu").removeAttr("style");
			if($(this).hasClass("mega1"))
			{
				$(".megamenu").removeAttr("style");
				_left_width_screen = $(window).width()-821;
				$(this).find(".megamenu").css("left",
			"-"+_left_width_screen+"px");
			}
			else if($(this).hasClass("mega2"))
			{
				$(".megamenu").removeAttr("style");
				_left_width_screen = ($(window).width())-580;
				$(this).find(".megamenu").css("left",
			"-"+_left_width_screen+"px");
			}
			else if($(this).hasClass("mega3"))
			{
				$(".megamenu").removeAttr("style");
				_left_width_screen = ($(window).width())-274;
				$(this).find(".megamenu").css("left",
			"-"+_left_width_screen+"px");
			}
			$(this).find(".megamenu").css("width",_width_screen+"px");	
		}, function() {
    	$(".megamenu").removeAttr("style");
  	}
		);
});