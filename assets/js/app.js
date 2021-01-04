const circleType = new CircleType(
    document.getElementById("rotated")
  ).radius(35);

  $(window).scroll(function () {
    var offset = $(window).scrollTop();
    offset = offset * 0.6;

    $(".circular-logo").css({
      "-moz-transform": "rotate(" + offset + "deg)",
      "-webkit-transform": "rotate(" + offset + "deg)",
      "-o-transform": "rotate(" + offset + "deg)",
      "-ms-transform": "rotate(" + offset + "deg)",
      transform: "rotate(" + offset + "deg)",
    });
  });


  $(document).mousemove(function(e) {
    $('.pointer').css({left:e.pageX, top:e.pageY})
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

