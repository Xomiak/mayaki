/**
 * Created by victor on 10.06.17.
 */
//Init main slider
var mainSlider = new Swiper('.swiper-gallery', {
    nextButton: '.main-next',
    prevButton: '.main-prev',
    slidesPerView: 3,
    spaceBetween: 30
});


var reviewsSlider = new Swiper('.swiper-reviews', {
    nextButton: '.reviews-next',
    prevButton: '.reviews-prev',

    spaceBetween: 30
});


$("#to_bottom").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_gallery").offset().top
    }, 700);
});





