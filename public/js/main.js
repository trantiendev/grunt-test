(function() {
  'use strict';
  console.log('hello');
})();

function title_video() {
  $('section.video-intro > .title-video > h3:gt(0)').hide();
  setInterval(function() {
    $('section.video-intro > .title-video > h3:first').fadeOut(1e3).next().fadeIn(1e3).end().appendTo('section.video-intro');
  }, 3e3);
}

