(function() {
  'use strict';

  console.log('hello');
  // title_video();
})();

function title_video(){
  // var indexItem = 0;
  // title_carousel();
  //
  // for (var i = 0; i < array.length; i++) {
  //   array[i]
  // }

  $("section.video-intro > .title-video > h3:gt(0)").hide();

  setInterval(function() {
    $('section.video-intro > .title-video > h3:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('section.video-intro');
  }, 3000);
};
