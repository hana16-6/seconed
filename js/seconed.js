/* global $, alert, console*/
$(function(){
'use strict';
    //trigger nice scroll plugin
    $("body").niceScroll({
         cursorcolor:"#f7600e",
        cursorwidth:"10px",
  cursorborder:"1px solid #f7600e"
    });
    // change header height
    $('.header').height($(window).height());
   // scroll to features
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        },500);
    });
    $('.hire').click(function () {
         $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        },500);
    });
    //show hidden items from work
  $('.show-more').click(function () {
        $('.our-work .hidden').fadeToggle(2000)
        setTimeout(function() {
            var el = $('.our-work .hidden')[0];
            if($(el).css("display") == "none"){
               $('.show-more').text('show more');
           } else{
               $('.show-more').text('hide');
           }
        }, 2100)
    });
    
    
    
    //check testimonials
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');
    function checkclients() {
        if ($('.client:first').hasClass('active')) {
           leftArrow.fadeOut(); 
            
          } else {
              leftArrow.fadeIn();
            }
        if ($('.client:last').hasClass('active')) {
           rightArrow.fadeOut(); 
            
          } else {
              rightArrow.fadeIn();
            }
        //$('.client:first').hasClass('.active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
      }
    checkclients();
    
    $('.testim i').click(function () {
        if ($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(100, function () {
               $(this).removeClass('active').next('.client').addClass('active').fadeIn(); 
                checkclients();
            });
        } else {
            $('.testim .active').fadeOut(100, function () {
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn(); 
                checkclients();
            });
        }
        
    });
});