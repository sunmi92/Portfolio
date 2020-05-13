$(document).ready(function () {
  // Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  // var
  var menu = $("#gnb li");
  var contents = $("#contents > section");

  // menu - click
  $(menu).click(function () {
    var idx = $(this).index();
    var section = contents.eq(idx);
    var sectionTop = section.offset().top;
    // click - scroll animate
    $("html,body").stop().animate({ scrollTop: sectionTop }, 3000);
  });

  $("#contents > section > i").click(function () {
    var id = $(this).attr("value");
    var sectionTop = $(id).offset().top;
    $("html,body").stop().animate({ scrollTop: sectionTop }, 3000);
  });

  $(window).scroll(function () {
    // header - fixed
    var header = $("header");
    if ($(this).scrollTop() > 10) {
      header.stop().addClass("h_fixed");
    } else {
      header.stop().removeClass("h_fixed");
    }
    // 컨텐츠별 높이값 변수에 저장
    var scroll1 = $("#intro").offset().top;
    var scroll2 = $("#about").offset().top;
    var scroll3 = $("#portfolio").offset().top;
    var scroll4 = $("#contact").offset().top;
    var scrollTop = $(this).scrollTop();
    if (scrollTop >= (scroll4 / 6) * 5) {
      menu.eq(3).addClass("active").siblings().removeClass();
    } else if (scrollTop >= (scroll3 / 4) * 3) {
      menu.eq(2).addClass("active").siblings().removeClass();
    } else if (scrollTop >= scroll2 / 2) {
      menu.eq(1).addClass("active").siblings().removeClass();
      var progressbar = $(".progress_bar");
      progressbar.each(function () {
        var progressbarWidth = $(this).prev().text();
        if (scrollTop >= $(".skill").offset().top / 2) {
          $(this).stop().animate({ width: progressbarWidth }, 1000);
        }
      });
    } else {
      menu.eq(0).addClass("active").siblings().removeClass();
    }
  });
});
