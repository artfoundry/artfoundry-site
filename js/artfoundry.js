function run_animation() {
    $("#img-arttitle").delay(1000).fadeOut(1000);
    $("#img-anvil").delay(1500).fadeOut(1500, function() {
        $(".buttons").fadeIn(1000);
    });
    $(document).on("click", function(){
       $("#img-arttitle, #img-anvil, .buttons").finish();
    });
    gallery();
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
                    if ($(".popup-gallery").attr("id") === "lcd") {
                        return item.el.attr('title') + '<small>by LCD Dreams</small>';
                    }
                    else {
                        return item.el.attr('title') + '<small>by David Markowitz</small>';
                    };
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
