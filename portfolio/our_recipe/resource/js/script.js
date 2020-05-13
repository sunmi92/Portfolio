$(document).ready(function () {
  var timer = setInterval("main_bnr()", 3000);

  $("#slide ul li a").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      timer = setInterval("main_bnr()", 3000);
    }
  );

  // slide
  $("#slide_bnr1 .a1").hover(
    function () {
      $("#f2").css({
        "background-image": 'url("resource/img/f1_hover.png")',
        transition: "1s",
      });
      $("#d1").stop().animate(
        {
          opacity: 1,
        },
        1000
      );
    },
    function () {
      $("#f2").css({
        "background-image": 'url("resource/img/f2.png")',
        transition: "1s",
      });
      $("#d1").stop().animate(
        {
          opacity: 0,
        },
        1000
      );
    }
  );

  $("#slide_bnr1 .a2").hover(
    function () {
      $("#f1").css({
        "background-image": 'url("resource/img/f2_hover.png")',
        transition: "1s",
      });
      $("#d2").stop().animate(
        {
          opacity: 1,
        },
        1000
      );
    },
    function () {
      $("#f1").css({
        "background-image": 'url("resource/img/f1.png")',
        transition: "1s",
      });
      $("#d2").stop().animate(
        {
          opacity: 0,
        },
        1000
      );
    }
  );

  $("#slide_bnr2 .a1").hover(
    function () {
      $("#f4").css({
        "background-image": 'url("resource/img/f3_hover.png")',
        transition: "1s",
      });
      $("#d3").stop().animate(
        {
          opacity: 1,
        },
        1000
      );
    },
    function () {
      $("#f4").css({
        "background-image": 'url("resource/img/f4.png")',
        transition: "1s",
      });
      $("#d3").stop().animate(
        {
          opacity: 0,
        },
        1000
      );
    }
  );

  $("#slide_bnr2 .a2").hover(
    function () {
      $("#f3").css({
        "background-image": 'url("resource/img/f4_hover.png")',
        transition: "1s",
      });
      $("#d4").stop().animate(
        {
          opacity: 1,
        },
        1000
      );
    },
    function () {
      $("#f3").css({
        "background-image": 'url("resource/img/f3.png")',
        transition: "1s",
      });
      $("#d4").stop().animate(
        {
          opacity: 0,
        },
        1000
      );
    }
  );

  $("#slide_bnr3 .a1").hover(
    function () {
      $("#f6").css({
        "background-image": 'url("resource/img/f5_hover.png")',
        transition: "1s",
      });
      $("#d5").stop().animate(
        {
          opacity: 1,
        },
        1000
      );
    },
    function () {
      $("#f6").css({
        "background-image": 'url("resource/img/f6.png")',
        transition: "1s",
      });
      $("#d5").stop().animate(
        {
          opacity: 0,
        },
        1000
      );
    }
  );

  $("#slide_bnr3 .a2").hover(
    function () {
      $("#f5").css({
        "background-image": 'url("resource/img/f6_hover.png")',
        transition: "1s",
      });
      $("#d6").stop().animate(
        {
          opacity: 1,
        },
        1000
      );
    },
    function () {
      $("#f5").css({
        "background-image": 'url("resource/img/f5.png")',
        transition: "1s",
      });
      $("#d6").stop().animate(
        {
          opacity: 0,
        },
        1000
      );
    }
  );

  var timer2 = setInterval("pro_bnr()", 5000);

  $("#pro_bnr li").hover(
    function () {
      clearInterval(timer2);
    },
    function () {
      timer2 = setInterval("pro_bnr()", 5000);
    }
  );

  $("#footer_open").click(function () {
    $("#footer").show().animate(
      {
        opacity: 1,
      },
      1000
    );
  });

  $("#footer_close").click(function () {
    $("#footer").hide().animate(
      {
        opacity: 0,
      },
      1000
    );
  });

  $("#page_nav li").click(function () {
    if ($(this).is(".btn")) {
      flase;
    } else {
      $(this).siblings("li").removeClass("act");
      $(this).addClass("act");
    }
  });
  /* 상품배너 고정 */
  $(window).on("scroll", function () {
    var basic = $("#item_bnr");
    var basicX = basic.offset().left;
    var basicY = basic.offset().top;
    var y = $(this).scrollTop();
    if (y >= 1143) {
      $("#item_bnr").css({
        position: "fixed",
        top: 0,
        left: 1235.25,
      });
    } else {
      $("#item_bnr").css({
        position: "static",
      });
    }
  });
});

function prevFnn() {
  $("#pro_items ul").prepend(
    $("#pro_items ul li").last().clone().css("opacity", "0")
  );
  $("#pro_items ul li:last-child").detach();
  $("#pro_items ul li:first-child").animate(
    {
      opacity: "1",
    },
    1000
  );
}
function nextFnn() {
  $("#pro_items ul").append(
    $("#pro_items ul li").first().clone().css("opacity", "0")
  );
  $("#pro_items ul li:first-child").detach();
  $("#pro_items ul li:nth-child(3)").css("opacity", "0");
  $("#pro_items ul li:nth-child(3)").animate(
    {
      opacity: "1",
    },
    1000
  );
}

// slide

function main_bnr() {
  $("#slide ul:last-child").animate(
    {
      opacity: 0,
    },
    1000,
    function () {
      $(this).prependTo("#slide").css({
        opacity: "1",
      });
    }
  );
}

function pro_bnr() {
  $("#pro_bnr ul").animate(
    {
      left: -1140,
    },
    3000,
    function () {
      $(this).append($("#pro_bnr li:first-child")).css({
        left: "0",
      });
    }
  );
}

// joinBtn()
function joinBtn() {
  $(".joinStep span div").removeClass("ing");
  $(".joinStep span:nth-child(2) div").addClass("ing");
  $("#step1").removeClass("current");
  $("#step2").addClass("current");
}

function nextBtn() {
  if ($('#agree_select input:radio[id="refuse"]').is(":checked")) {
    alert("동의하시지 않으면 회원가입할 수 없습니다.");
  } else {
    $(".joinStep span div").removeClass("ing");
    $(".joinStep span:nth-child(3) div").addClass("ing");
    $("#step2").removeClass("current");
    $("#step3").addClass("current");
  }
}

function completeBtn() {
  $(".joinStep span div").removeClass("ing");
  $(".joinStep span:nth-child(4) div").addClass("ing");
  $("#step3").removeClass("current");
  $("#step4").addClass("current");
}

function cancelBtn() {
  var result = confirm("회원가입을 취소하시겠습니까?");

  if (result) {
    location.replace("main.html");
  } else {
  }
}

function cartBtn() {
  var result = confirm("장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?");

  if (result) {
    location.replace("cart.html");
  } else {
  }
}

function payBtn() {
  var result = confirm("결제하시겠습니까?");

  if (result) {
    alert("페이지 준비중입니다.");
  } else {
    alert("결제를 취소하셨습니다.");
  }
}

$("ul li").click(function () {
  if ($(this).is(".secret")) {
    alert("비공개글입니다.");
  } else {
    $(this)
      .children("div")
      .css({ height: "auto", opacity: "1", transition: "3s" });
  }
});

function msgBtn() {
  alert("인증번호를 전송하였습니다.");
}

function doubleChk() {
  alert("사용 가능한 아이디입니다.");
}

function emailChk() {
  alert("사용 가능한 이메일입니다.");
}
