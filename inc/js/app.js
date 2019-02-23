"use strict";


$(document).ready(function(){
    // 1- SELECT the header<nav> element
    // 2- CHANGE the transparency of the element to white after the <nav> cross
      // the 100vh area
    // 3-when the <nav? element is back to the top; make it appears again

  var distance = $("#intro").outerHeight();

  $(document).scroll(function(){
    if ( $(window).scrollTop() >=  (distance/4) ){//FULL NAME BEHAVIOR
      console.log("Hide PATRICIA HECTOR");
      hideFullName();
    }
    if ( $(window).scrollTop() >=  (distance/3) ){//TEXT ACTION BEHAVIOR
      console.log("Hide action text and button");
      hideActionText();
    }
    if ( $(window).scrollTop() >=  (distance/2) ){//TEXT ACTION BEHAVIOR
      console.log("Hide action text and button");
      hideActionButton();
    }
    if ( $(window).scrollTop() >=  distance ){//NAVBAR BEHAVIOR
      console.log("we should show the navbar");
      showNavbar();
    }
    if( $(window).scrollTop() <  distance ){//NAVBAR BEHAVIOR
      console.log("navbar transparent");
      hideNavbar();
    }
    if ( $(window).scrollTop() <  (distance/2) ){//TEXT ACTION BEHAVIOR
      console.log("Hide action text and button");
      showActionButton();
    }
    if( $(window).scrollTop() <  (distance/3) ){//TEXT ACTION BEHAVIOR
      console.log("Show action text");
      showActionText();
    }
    if( $(window).scrollTop() <  (distance/4) ){//FULL NAME BEHAVIOR
      console.log("Show action text");
      showFullName();
    }
  });

  $("#btn-navbar").on( "click", function(){
    showNavbar();
  });

  $(document).on("click", function(e){
    if( $("#portfolioNav").hasClass("show") ){
      $("#portfolioNav").removeClass("show");
    }
  });

  function hideFullName(){
    $("h1.cover-heading").css( "opacity", 0 );
  }

  function showFullName(){
    $("h1.cover-heading").css( "opacity", 1 );
  }

  function hideActionText(){
    $("#intro-text").css( "opacity", 0 );
  }

  function hideActionButton(){
    $("#intro-button").css( "opacity", 0 );
  }

  function showActionText(){
    $("#intro-text").css( "opacity", 1 );
  }

  function showActionButton(){
    $("#intro-button").css( "opacity", 1 );
  }

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
