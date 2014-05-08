function run_animation() {
  $("#logo-main").css("margin-right", "-600px").fadeIn(1000, function() {
    $("#logo-main").animate({width: "-=800", height: "-=404", marginRight: "0", marginTop: "130px"}, 800, function() {
      $("#img-games, #img-art, #img-webapps").fadeIn(500);
    });
  });
  gallery();
  // navbuttons();
}

// setup lightbox gallery
function gallery() {
  $(".popup-gallery").each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by David Markowitz</small>';
        }
      }
    });
  });

  $(".popup-image").magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by David Markowitz</small>';
      }
    }
  });
}

// function navbuttons() {
//   $(".buttons").on("click", function() {
//     $("#icon-container").css({"width": "300px", "height": "300px", "background-size": "contain", "position": "absolute"});
//     $(".buttons").css({"width": "50%", "height": "50%", "marginTop": "0"});
//     $("#logo-main").css({"width": "75%", "height": "75%", "marginTop": "1em"});
//   });
// }