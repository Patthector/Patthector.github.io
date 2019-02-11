"use strict";


$(document).ready(function(){
    // 1- SELECT the header<nav> element
    // 2- CHANGE the transparency of the element to white after the <nav> cross
      // the 100vh area
    // 3-when the <nav? element is back to the top; make it appears again
  var distance = $("#intro").outerHeight();
  if ( $(window).scrollTop() >=  distance ){
    console.log("we should show the navbar");
    showNavbar();
  } else{
    console.log("navbar transparent");
    hideNavbar();
  }

  $(document).scroll(function(){
    if ( $(window).scrollTop() >=  distance ){
      console.log("we should show the navbar");
      showNavbar();
    } else{
      console.log("navbar transparent");
      hideNavbar();
    }
  });

  $("#btn-navbar").on( "click", function(){
    showNavbar();
  });

  function showNavbar(){
    if( !( $("#navbar").css("background-color") === "white" ) ){
      $("#navbar").css("background-color","white");
      $("#navbar").addClass("navbar-light");
      $("#navbar").addClass("navbar-shadow");
      $(".nav-link").removeClass("portfolio__nav-link");
      $("#navbar").removeClass("navbar-dark");
      $("#portfolio__logo svg circle").css("fill", "#dc3545");
      $("#portfolio__logo svg path").css("fill", "#fff");
      $("#navbar li a").css("color", "#dc3545");
    }
  };
  function hideNavbar(){
    if( !( $("#navbar").css("background-color") === "transparent") ){
      $("#navbar").css("background-color","transparent");
      $("#navbar").removeClass("navbar-light");
      $("#navbar").removeClass("navbar-shadow");
      $(".nav-link").addClass("portfolio__nav-link");
      $("#navbar").addClass("navbar-dark");
      $("#portfolio__logo svg circle").css("fill", "#fff");
      $("#portfolio__logo svg path").css("fill", "#dc3545");
    }
  };

});// end of jQuery BLOCK
