/*global alert: false, confirm: false, console: true, Debug: false, opera: false, prompt: false, WSH: false */
/*jslint plusplus: true */

var jQuery,
    $ = jQuery;
(function ($) {
    "use strict";
    
    var paralaxItem = $('.paralax');
    
    // paralax
    paralaxItem.each(function () {
        var paralaxObj = $(this);
        $(window).on('scroll', function (e) {
            var paralaxIndex = paralaxObj.data('speed'),
            yPos = -($(window).scrollTop() / paralaxIndex),
            yShift = "50%" + yPos + "px";
            paralaxObj.css({
                "background-position": yShift
            });
        });
    });
    console.log("paralax.js");
}(jQuery));