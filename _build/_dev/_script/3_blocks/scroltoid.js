var jQuery,
    $ = jQuery;
(function ($) {
    "use strict";

    var offer = $('#offer__id'),
        principle = $('#principle_id'),
        office = $('#office_id'),
        process = $('#process_id');

    var offset = "60%";

    $('.page__line').waypoint(function(direction){
        if (direction == 'down') {
            $(this.options.element).animate({
                opacity: 1
            }, 500)
        } else {
            $(this.options.element).css('opacity','0');
        }
    },{
        offset: offset
    });

    $('.page__line.offer').waypoint(function(direction){
        offer.css('display','none');
        setTimeout(function(){
            offer.css('display','inline-block');
        },10);
    },{
        offset: offset
    });

    $('.page__line.principle').waypoint(function(direction){
        principle.css('display','none');
        setTimeout(function(){
            principle.css('display','block');
        },10);
    },{
        offset: offset
    });

    $('.page__line.office').waypoint(function(direction){
        office.css('display','none');
        setTimeout(function(){
            office.css('display','block');
        },10);
    },{
        offset: offset
    });

    $('.page__line.process').waypoint(function(direction){
        process.css('display','none');
        setTimeout(function(){
            process.css('display','block');
        },10);
    },{
        offset: offset
    });
    
        console.log("scrolltoid.js");
}(jQuery));