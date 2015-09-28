var jQuery,
    $ = jQuery;
(function ($) {
    "use strict";

    var offer = $('#offer');

    var waypoint_offer = new Waypoint({
        element: document.getElementById('offer'),
        handler: function(direction) {
            offer.css('display','none');
            setTimeout(function(){
                offer.css('display','inline-block');
            },10);
        },
        offset: '40%'
    });

    var principle = $('#principle');

    var waypoint_principle = new Waypoint({
        element: document.getElementById('principle'),
        handler: function(direction) {
            principle.css('display','none');
            setTimeout(function(){
                principle.css('display','inline-block');
            },10);
        },
        offset: '40%'
    });

    var office = $('#office');

    var waypoint_office = new Waypoint({
        element: document.getElementById('office'),
        handler: function(direction) {
            office.css('display','none');
            setTimeout(function(){
                office.css('display','inline-block');
            },10);
        },
        offset: '40%'
    });


        console.log("scrolltoid.js");
}(jQuery));