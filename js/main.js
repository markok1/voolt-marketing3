$(document).ready(function () {
  $(".service-tag-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    // slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });

  var rev = $(".how-marketing-holder");
  rev
    .on("init", function (event, slick, currentSlide) {
      var cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      cur.removeClass("slick-snext").removeClass("slick-sprev");
      slick.$prev = prev;
      slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      //console.log('beforeChange');
      var cur = $(slick.$slides[nextSlide]);
      //console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass("slick-sprev");
      slick.$next.removeClass("slick-snext");
      (next = cur.next()), (prev = cur.prev());
      prev.prev();
      prev.next();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass("slick-next").removeClass("slick-sprev");
    });

  rev.slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    customPaging: function (slider, i) {
      return '<button class="custom-dot-class">' + (i + 1) + "</button>";
    },
    arrows: false,
    // focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });

  // voolt does what others cannot
  (function ($) {
    let section = $("section.voolt-does");
    if (section.length) {
      if ($(".does-item").hasClass("opened-box")) {
        var heightinside = $(".opened-box").find(".answer p").height() + 50;
        $(".opened-box")
          .find(".answer")
          .css("max-height", heightinside + "px");
      }
      $(".does-item").click(function (e) {
        e.preventDefault();
        var clickedIndex = $(".does-item").index(this);
        $(".image-box").removeClass("does-active-img");

        $(".image-box").each(function (index) {
          if (index == clickedIndex) {
            $(this).addClass("does-active-img");
          }
        });

        if ($(this).hasClass("opened-box")) {
          $(this).removeClass("opened-box");
          $(this).find(".answer").css("max-height", "0px");
        } else {
          $(".opened-box").find(".answer").css("max-height", "0px");
          $(".does-item").removeClass("opened-box");
          $(this).addClass("opened-box");
          var heightinside = $(this).find(".answer p").height() + 50;
          $(this)
            .find(".answer")
            .css("max-height", heightinside + "px");
        }
      });
    }
  })(jQuery);

  //video
  const $thumbnail = $("#thumbnail");

  $("#thumbnail").click(function () {
    const viewportWidth = $(window).width();

    if (viewportWidth >= 768) {
      $(".video-dekstop").css("display", "block").get(0).play();
      $thumbnail.hide();
    } else {
      $(".video-mobile").css("display", "block").get(0).play();
      $thumbnail.hide();
    }
  });

  $(".testimonial-holder").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: false,
    swipe: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,

    prevArrow:
      "<button aria-label='Slider Arrow Left' type='button' class='slick-prev pull-left'> <svg xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'><g clip-path='url(#clip0_3054_339)'><path d='M11.1105 23.1291L33.3611 0.878852C33.8758 0.363816 34.5627 0.0800781 35.2953 0.0800781C36.0278 0.0800781 36.7148 0.363816 37.2294 0.878852L38.868 2.51705C39.9342 3.58452 39.9342 5.31947 38.868 6.38531L20.1836 25.0697L38.8887 43.7748C39.4034 44.2899 39.6875 44.9765 39.6875 45.7086C39.6875 46.4415 39.4034 47.1281 38.8887 47.6435L37.2501 49.2813C36.7351 49.7963 36.0485 50.0801 35.316 50.0801C34.5835 50.0801 33.8965 49.7963 33.3819 49.2813L11.1105 27.0108C10.5946 26.4941 10.3113 25.8043 10.3129 25.0709C10.3113 24.3348 10.5946 23.6453 11.1105 23.1291Z' fill='#F7F7FF'/></g><defs><clipPath id='clip0_3054_339'><rect width='50' height='50' fill='white' transform='matrix(-1 0 0 1 50 0.0800781)'/></clipPath></defs></svg></button>",
    nextArrow:
      "<button aria-label='Slider Arrow Right' type='button' class='slick-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'><g clip-path='url(#clip0_3054_356)'><path d='M38.8895 23.1291L16.6389 0.878852C16.1242 0.363816 15.4373 0.0800781 14.7047 0.0800781C13.9722 0.0800781 13.2852 0.363816 12.7706 0.878852L11.132 2.51705C10.0658 3.58452 10.0658 5.31947 11.132 6.38531L29.8164 25.0697L11.1113 43.7748C10.5966 44.2899 10.3125 44.9765 10.3125 45.7086C10.3125 46.4415 10.5966 47.1281 11.1113 47.6435L12.7499 49.2813C13.2649 49.7963 13.9515 50.0801 14.684 50.0801C15.4165 50.0801 16.1035 49.7963 16.6181 49.2813L38.8895 27.0108C39.4054 26.4941 39.6887 25.8043 39.6871 25.0709C39.6887 24.3348 39.4054 23.6453 38.8895 23.1291Z' fill='#F7F7FF'/></g><defs><clipPath id='clip0_3054_356'><rect width='50' height='50' fill='white' transform='translate(0 0.0800781)'/></clipPath></defs></svg></button>",
  });

  // faq
  (function ($) {
    let section = $("section.faq-section");
    if (section.length) {
      $(".qa-item").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("opened")) {
          $(this).removeClass("opened");
          $(this).find(".answer").slideUp(150);
        } else {
          $(".qa-item").removeClass("opened");
          $(".qa-item .answer").slideUp(150);
          $(this).addClass("opened");
          $(this).find(".answer").slideDown(150);
        }
      });
    }
  })(jQuery);

  // active tabs
  $(".comper-tags a").click(function (e) {
    e.preventDefault();
    $(".activetab").removeClass("activetab");
    $(this).addClass("activetab");
    $(".table-active").removeClass("table-active");
    if ($(this).index() === 0) {
      $(".how-we-compare .table").eq(0).addClass("table-active");
    } else if ($(this).index() === 1) {
      $(".how-we-compare .table").eq(1).addClass("table-active");
    }
  });

  function handleSliderNavigation(tableClass, direction) {
    const $table = $(tableClass);
    const $pager = $table.find(".pager");
    const isNext = direction === "next";

    if (!$pager.find(".active-dot").is(isNext ? ":last-child" : ":first-child")) {
      const activeSelector = isNext ? "next" : "prev";

      $table.find("th.active-in-slider").addClass("old-active-in").removeClass("active-in-slider")[activeSelector]().addClass("active-in-slider");
      $table.find("th.old-active-in").removeClass("old-active-in");

      $table.find("td.active-in-slider").addClass("old-active-in").removeClass("active-in-slider")[activeSelector]().addClass("active-in-slider");
      $table.find("td.old-active-in").removeClass("old-active-in");

      $pager.find(".active-dot").addClass("old-dot-active").removeClass("active-dot")[activeSelector]().addClass("active-dot");
      $pager.find(".old-dot-active").removeClass("old-dot-active");
    }
  }

  $(".table-w-slider .pager .arrow-next").click(function (e) {
    e.preventDefault();
    handleSliderNavigation(".table-w-slider", "next");
  });

  $(".table-w-slider .pager .arrow-prev").click(function (e) {
    e.preventDefault();
    handleSliderNavigation(".table-w-slider", "prev");
  });

  $(".table-w-slider2 .pager .arrow-next").click(function (e) {
    e.preventDefault();
    handleSliderNavigation(".table-w-slider2", "next");
  });

  $(".table-w-slider2 .pager .arrow-prev").click(function (e) {
    e.preventDefault();
    handleSliderNavigation(".table-w-slider2", "prev");
  });

  //Add UTMS to all links
  $("img, button, a").click(function (e) {
    if (!$(this).hasClass("slick-arrow") && !$(this).hasClass("custom-dot-class") && !$(this).hasClass("arrow") && !$(this).hasClass("compare-tabs") && !$(this).hasClass("stop-redirect")) {
      e.preventDefault();
      var e = new URL(window.location.href).search;
      window.location.href = "https://app.voolt.com/flow/01/1/" + e;
    }
  });
  //Add UTMS to all links
});
