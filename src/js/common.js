  $(window).scroll(function() {
    if ($(window).width() > 768 && $(this).scrollTop() > 80) {
      $('.header').addClass('small-header');

    } else {
      $('.header').removeClass('small-header');
    }
  });

  $('#mobile_nav').on('click', function() {
    var n = $('.header-nav'),
        m = $(this),
        bd = $('body'),
        bg = $('#mob_bg');

    if (n.hasClass('nav-opener')) {
      n.removeClass('nav-opener');
      m.removeClass('open');
      // bd.removeClass('no-scroll');

    } else {
      n.addClass('nav-opener');
      m.addClass('open');
    }
  });

  $('#mob_bg').on('click', function() {
    $('.header-nav').removeClass('nav-opener');
    $('#mobile_nav').removeClass('open');
  });
