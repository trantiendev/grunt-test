(function() {
  'use strict';
  title_video();
  header();
  yamm();
  scrollreveal();
  btn_scrollTop();
  flip();
})();

$(window).scroll(function() {
  sec_animate();
});

function flip() {
  $('.card').flip({
    axis: 'y',
    trigger: 'hover'
  });
}

function btn_scrollTop() {
  if ($('.back-to-top').length) {
    var scrollTrigger = 300, backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('.back-to-top').addClass('show');
      } else {
        $('.back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    $('.back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
}

function scrollreveal() {
  window.sr = ScrollReveal();
  sr.reveal('.banner-img', {
    duration: 1e3,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.services-img-1', {
    duration: 1e3,
    origin: 'bottom',
    distance: '50px'
  });
}

function yamm() {
  $(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation();
  });
}

function header() {
  $('.dropdown-toggle').click(function(e) {
    if ($(document).width() > 768) {
      e.preventDefault();
      var url = $(this).attr('href');
      if (url !== '#') {
        window.location.href = url;
      }
    }
  });
}

function sec_animate() {
  var wScroll = $(this).scrollTop();
  if ($('section.about-us').offset().top - $(window).height() / 1.5 < wScroll) {
    $('.about-wrap, .feature-link').addClass('active');
  }
}

function title_video() {
  $('.title-video > h3:gt(0)').hide();
  setInterval(function() {
    $('.title-video > h3:first').fadeOut(1e3).next().fadeIn(1e3).end().appendTo('.title-video');
  }, 5e3);
}

