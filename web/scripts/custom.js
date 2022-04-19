$(document).ready(function() {
  // Header-menu scroll
  $('a[href^="#"]').click(function() {
    const target = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, {
      duration: 500,
      easing: 'linear',
    });
    return false
  })

  // burger
  $('.header__burger').on('click', function() {
    $('.header__burger-line').toggleClass('header__burger-line_active');
    $('.nav').toggleClass('nav--active');
  });

  // tabs from information
  $('.information__btn[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.information__btn[filter]').attr('val', 'off').removeClass('information__btn_active');
      $(this).attr('val', 'on').addClass('information__btn_active');
      $('.information__content > div').hide(300);
      $('.information__content > div[filter=' +$(this).attr('filter') + ']').show(300);
    };
  });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    991: {
      slidesPerView: 2,
    },

    1199: {
      slidesPerView: 3,
    },

    1400: {
      slidesPerView: 4,
    }
  },
});