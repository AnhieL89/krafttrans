var jQuery,
    $ = jQuery;
(function ($) {
    "use strict";

    $('.page__line').waypoint(function(direction){
        var selector = $(this).find('a.nav__anchor').attr('class');
        console.log(selector);
        $('.nav__item').find('a[href="#' + selector + '"]').addClass('active');
    });
    
    console.log("points.js");
}(jQuery));