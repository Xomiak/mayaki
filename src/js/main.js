/**
 * Created by victor on 10.06.17.
 */

var hederSlider = new Swiper('.swiper-main', {
  centeredSlides: true,
  autoplay: 5000,
  autoplayDisableOnInteraction: false,
  effect: 'fade',
});
//Init main slider
var mainSlider = new Swiper('.swiper-gallery', {
  nextButton: '.main-next',
  prevButton: '.main-prev',
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});

var reviewsSlider = new Swiper('.swiper-reviews', {
  nextButton: '.reviews-next',
  prevButton: '.reviews-prev',

});

$('#to_bottom').click(function() {
  $('html, body').animate({
    scrollTop: $('#main_gallery').offset().top,
  }, 700);
});






