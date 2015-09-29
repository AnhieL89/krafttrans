var jQuery,
    $ = jQuery;
(function ($) {
    "use strict";

    var offer = $('#offer__id'),
        principle = $('#principle_id'),
        office = $('#office_id'),
        process = $('#process_id');
    
    
    
    var waypoint_offer = new Waypoint({
        element: document.getElementById('offer__id'),
        handler: function(direction) {
            offer.css('display','none');
            setTimeout(function(){
                offer.css('display','inline-block');
            },10);
        },
        offset: '80%'
    });
    
    var waypoint_principle = new Waypoint({
        element: document.getElementById('principle_id'),
        handler: function(direction) {
            principle.css('display','none');
            setTimeout(function(){
                principle.css('display','block');
            },10);
        },
        offset: '80%'
    });
    
    var waypoint_office = new Waypoint({
        element: document.getElementById('office_id'),
        handler: function(direction) {
            office.css('display','none');
            setTimeout(function(){
                office.css('display','inline-block');
            },10);
        },
        offset: '80%'
    });

    var waypoint_process = new Waypoint({
        element: document.getElementById('process_id'),
        handler: function(direction) {
            process.css('display','none');
            setTimeout(function(){
                process.css('display','block');
            },10);
        },
        offset: '80%'
    });
    
        console.log("scrolltoid.js");
}(jQuery));