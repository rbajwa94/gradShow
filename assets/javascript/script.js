
var resetPoint = 450;
var firstActivatePoint = 500;
var secondActivatePoint = 1400;

var resetPointActivated = false;
var firstActivatePointActivated = false;
var secondActivatePointActivated = false;

var sideNav = document.getElementsByClassName('side-nav')[0];


// Inital logo fade in on page load
$('#img-logo-top').css('opacity', '1');
$('#img-logo-bottom').css('opacity', '0');
$('#img-logo-middle').css('opacity', '0');

// Initial menu fade in on page load
$('.side-nav-top').css('opacity', '1');
$('.side-nav-middle').css('opacity', '0');
$('.side-nav-bottom').css('opacity', '0');

// Navigation menu and logo animator
$(window).scroll(function() {
  if (!resetPointActivated) {
    // This one is for scrolling back up
    if($(window).scrollTop() < resetPoint) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '1');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '0');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '1');
      $('.side-nav-middle').css('opacity', '0');
      $('.side-nav-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (firstActivatePointActivated) {    
    // This one is for scrolling back up
    if(($(window).scrollTop() + $(window).height()) <= 2400) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '1');
      $('#img-logo-bottom').css('opacity', '0');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '0');
      $('.side-nav-middle').css('opacity', '1');
      $('.side-nav-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (!firstActivatePointActivated) {
    if($(window).scrollTop() > firstActivatePoint) {
      firstActivatePointActivated = true;
    } 
  }
  if (!secondActivatePointActivated) {
    if ($(window).scrollTop() > secondActivatePoint) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', '#19414c');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '1');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '0');
      $('.side-nav-middle').css('opacity', '0');
      $('.side-nav-bottom').css('opacity', '1');

      secondActivatePointActivated = true;
    }
  }
});