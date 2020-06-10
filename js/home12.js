(function($) {
  
  'use strict';

  $("section.first img").addClass("animated2s fadeInLeft")
  $("section.first h2").addClass("animated2s fadeInRight")
  $("section.first h3").addClass("animated4s fadeInRight")
  $("section.first p").addClass("animated6s fadeInRight")
  // initialize fullPage
  $('#mainBanner12').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {
      console.log(index);
      if (index == 1) {
        $("section.second img").addClass("animated2s fadeInLeft")
        $("section.second h2").addClass("animated2s fadeInRight")
        $("section.second h3").addClass("animated4s fadeInRight")
        $("section.second p").addClass("animated6s fadeInRight")
      };
      if (index == 2) {
        $("section.third img").addClass("animated2s fadeInLeft")
        $("section.third h2").addClass("animated2s fadeInRight")
        $("section.third h3").addClass("animated4s fadeInRight")
        $("section.third p").addClass("animated6s fadeInRight")
      };
      if (index == 3) {
        $("section.fourth img").addClass("animated2s fadeInLeft")
        $("section.fourth h2").addClass("animated2s fadeInRight")
        $("section.fourth h3").addClass("animated4s fadeInRight")
        $("section.fourth p").addClass("animated6s fadeInRight")
      };
      if (index == 4) {
        $("section.fifth img").addClass("animated2s fadeInLeft")
        $("section.fifth h2").addClass("animated2s fadeInRight")
        $("section.fifth h3").addClass("animated4s fadeInRight")
        $("section.fifth p").addClass("animated6s fadeInRight")
      };
    }

  });
  
})(jQuery);