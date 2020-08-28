function fade(a) {
  $("." + a).each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var b = a + "-active";
    if (scroll > imgPos - windowHeight + windowHeight/5){
      $(this).addClass(b);
    } else {
      $(this).removeClass(b);
    }
  });
}

$(window).on("load scroll", function(){
  fade("u-fade-in");
  fade("u-fade-up");
  fade("u-fade-in-right");
});

