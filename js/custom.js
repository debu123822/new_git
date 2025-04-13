$(function () {
    // banner slider
    $(".banner_slide").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
    // testmonial slide
    $(".testimonial_slide").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,
    });
});
