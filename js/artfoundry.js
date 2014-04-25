$(window).scroll(function(e){
  parallax();
});

function run_animation() {
  $("#logo-main").fadeIn(1000, function() {
    $("#logo-main").animate({width: "-=800", height: "-=404", marginLeft: "23%", marginTop: "130px"}, 800, function() {
      $(".buttons").fadeIn(500);
    })
  })
}

function parallax() {
  var scrolled = $(window).scrollLeft();
  $('#bg').css('left',-(scrolled*0.2)+'px');
  $('#mg1').css('left',-(scrolled*0.6)+'px');
  $('#mg2').css('left',-((scrolled*0.4) - 1000)+'px');
  $('#fg1').css('left',-((scrolled*1.2) - 400)+'px');
} 
