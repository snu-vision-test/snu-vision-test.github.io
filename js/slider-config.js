// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider-lab').flexslider({
    animation: "slide",
    controlNav: true,
    controlsContainer: ".flex-container-header"
    });

    $('.flexslider-header').flexslider({
    namespace: "flex-header-",
    });
});
