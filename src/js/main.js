(function() {
  'use strict';

  console.log('hello');
  title_video();
  nice_select();
  header();
  yamm();
})();

$(window).scroll(function(){
  sec_animate();
});

function nice_select(){
  // $('select').niceSelect();

};

function yamm(){
  $(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation()
  });
};

function header(){

    $('ul.navbar-nav').find('li.dropdown').on('mouseenter', function(){
      $(this).find('ul.dropdown-menu').stop(true, true).fadeIn(300);
    }).mouseleave(function(){
      $(this).find('ul.dropdown-menu').stop(true, true).fadeOut(300);
    })

    // $(this).find('ul.dropdown-menu').css({'display': 'none'});
    // if( $(window).width() < 992 ) {}

};

function sec_animate(){

  var wScroll = $(this).scrollTop();

  if( $('section.about-us').offset().top - $(window).height() / 2 < wScroll ){
    $('.about-wrap').addClass('active');
    // console.log(wScroll);

  }

};

function title_video(){

  $(".title-video > h3:gt(0)").hide();

  setInterval(function() {
    $('.title-video > h3:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(".title-video");
  }, 3000);

};
