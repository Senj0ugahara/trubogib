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

  // images 
  if(window.outerWidth <= 1429) {
    $('.base-information__container').append('<div class="base-information__image"><img src="images/base-information-img.png" alt="image"></div>');
  };

  if(window.outerWidth <= 1199) {
    $('.main-title').append('<img src="images/hero-img.png" alt="image">');
  };

  if(window.outerWidth <= 1199) {
    $('.base-information__title').append('<img src="images/base-information-img.png" alt="image">');
  };

  if(window.outerWidth <= 576) {
    $('.delivery__info-container').append(`
    <div class="delivery__info">
    <div class="delivery__company">
      <img src="images/cdek-logo.png" alt="image">
      <img src="images/dpd-logo.png" alt="image">
      <img src="images/pochta-rossii-logo.png" alt="image">
    </div>
    <ul class="list-reset delivery__list">
      Транспортной компанией или почтой.<br>
      Курьером в&nbsp;пункт выдачи или прямо домой.
      <li class="delivery__item">проверка перед оплатой</li>
      <li class="delivery__item">оплата при получении</li>
    </ul>
  </div>
    `);
  };

  // set
  $('[data-fancybox="set"]').fancybox({
    'arrows' : false,
  });
});

const swiper1 = new Swiper('.swiper', {
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
      slidesPerView: 3,
    },

    1650: {
      slidesPerView: 4,
    }
  },
});

const swiper2 = new Swiper('.characteristics-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
      nextEl: '.characteristics-icon-next',
      prevEl: '.characteristics-icon-prev',
  },
});