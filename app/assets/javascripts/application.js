// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(function () {
    $(window).scroll(function(){
    // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }        
    });
    
    // scroll nav
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top-82;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

	    	    
 //    // For the purpose of the demo this allows you to toggle the background between video and img
 //    $('.toggle_video').click(function(){
	    
	//    $('#big-video-wrap').fadeToggle();
	//    return false; 
	    
 //    });
    
	// // BigVideo Setup
 //    var BV = new $.BigVideo({useFlashForFirefox:false});
	// BV.init();
 //    if (Modernizr.touch) {
 //    	// fallback image for mobile devices
 //        BV.show('assets/img/bg2.jpg');
 //    } else {
 //        BV.show('assets/video/frontier.mp4',
 //        {ambient:true, doLoop:true, altSource:'assets/video/frontier.ogv'});
 //    }   
    
            
});