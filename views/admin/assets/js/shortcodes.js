/**
  * isMobile
  * btnCloseTopbar
  * flatTabs
  * popupVideo
  * viewShop
  * ratingShop
  * productOptions
  * flatAccordions
  * change_img
  * delete_item
  * searchIcon
  * searchIcon2
*/

;(function($) {

    "use strict";

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var btnCloseTopbar = function() {
        $(".btn-close-top-bar").on('click',function(){
            $('.top-bar').remove();
        })
    }
    
    var flatTabs =  function() {
        $('.themesflat-tabs').each(function(){
            var 
            list ="",
            title = $(this).find('.item-tab-title'),
            titleWrap = $(this).children('.tab-title') ;

            title.each(function() {
                list = list + "<li>" + $(this).html() + "</li>";
            }).appendTo(titleWrap);

            $(this).find('.tab-title li').filter(':first').addClass('active');
            $(this).find('.tab-content-wrap').children().hide().filter(':first').show();

            $(this).find('.tab-title li').on('click', function(e) {
                var
                idx = $(this).index(),
                content = $(this).closest('.themesflat-tabs').find('.tab-content-wrap').children().eq(idx);

                $(this).addClass('active').siblings().removeClass('active');
                content.fadeIn('slow').siblings().hide();

                e.preventDefault();
            });
        });
    };
  
    var popupVideo = function () {
        if ($().magnificPopup) {
            $('.popup-youtube').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
   var viewShop = function () {
        $('.list').on("click",function(event) {
            event.preventDefault();
            $('.list').addClass('active');
            $('.grid').removeClass('active');
            $('.items').addClass('col-lg-12 col-md-12 list-items');
        });    
        $('.grid').on("click",function(event) {
            event.preventDefault();
            $('.grid').addClass('active');
            $('.list').removeClass('active');
            $('.items').removeClass('col-lg-12 col-md-12 list-items');
        });
   }
   var ratingShop = function () {  
        $(".star").on('click', function(){
        $(".selected").each(function(){
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
        });
    
    }
   var productOptions = function () {
        $('.color').on('click', function(){
            $(this).parent().find(".color.active").each(function(){
                $(this).removeClass('active');
            }); 
            $(this).addClass('active');

            var options_img = $(this).data("src");
            
            $(this).closest('.product-item').find('.img-default').fadeOut(200,function(){
                $(this).attr('src', options_img);
                $(this).fadeIn(200);
            })
        });
    }
   var flatAccordions = function() {

    $('.accordion-heading').on('click', function () {
        if ( !$(this).parent().is('.active') ) {
            $(this).parent().toggleClass('active').children('.accordion-content')
            .parent().siblings('.active').removeClass('active').children('.accordion-content');
        } else {
            $(this).parent().toggleClass('active');
        }
    });

    };
    var change_img = function() {
        $(".img-thumnail img").on("click", function(){
            var selector_img = $(this).data("src");
                $('.img-change').fadeOut(200,function(){
                    $(this).closest('.img-top').find('.img-change').attr('src', selector_img);
                    $('.img-change').fadeIn(200);
                })
        });
    };
    var delete_item = function() {
        $('.no_click').on('click',function(e) {
            e.preventDefault();
        })
    }
    var searchIcon = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.header-search-form').removeClass('show');                
            } 
        });

        $('.header-search-icon').on('click', function(event){
            event.stopPropagation();
        });

        $('.header-search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.header-search-icon').on('click', function (event) {
            if(!$('.header-search-form').hasClass( "show" )) {
                $('.header-search-form').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.header-search-form').removeClass('show');
                event.preventDefault();

        });        
  
    };
    var searchIcon2 = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.header-search-form.style-2').removeClass('show');                
            } 
        });

        $('.btn-search-left').on('click', function(event){
            event.stopPropagation();
        });

        $('.header-search-form.style-2').on('click', function(event){
            event.stopPropagation();
        });        

        $('.btn-search-left').on('click', function (event) {
            if(!$('.header-search-form.style-2').hasClass( "show" )) {
                $('.header-search-form.style-2').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.header-search-form.style-2').removeClass('show');
                event.preventDefault();

        });        
  
    };
   new WOW().init();

    // Dom Ready
    $(function() {
        btnCloseTopbar();
        flatTabs();
        popupVideo();
        viewShop();
        ratingShop();
        productOptions();
        flatAccordions();
        change_img();
        delete_item();
        searchIcon();
        searchIcon2();
    });
    
})(jQuery);
