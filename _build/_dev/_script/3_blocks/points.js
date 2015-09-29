var jQuery,
    $ = jQuery;
(function ($) {
    "use strict";

    var nav = $('.nav__item');

    $('.page__line').waypoint(function(direction){
        var selector = $(this.options.element).find('a.nav__anchor').attr('name');
        console.log(selector);
        nav.find('a').removeClass('nav__link_act');
        nav.find('a[href="#' + selector + '"]').addClass('nav__link_act');
    });

    $(window).scroll( function(){

        if ($(window).scrollTop() == 0) {
            nav.find('a').removeClass('nav__link_act');
            $('.nav__item:first-child').find('a').addClass('nav__link_act');
        }

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            nav.find('a').removeClass('nav__link_act');
            $('.nav__item:last-child').find('a').addClass('nav__link_act');
        }

    });

    nav.on('click',function(){
        nav.find('a').removeClass('nav__link_act');
        $(this).find('a').addClass('nav__link_act');
    });

    console.log("points.js");
}(jQuery));