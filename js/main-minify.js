$(document).ready(function(){$(".service-tag-slider").slick({dots:!1,arrows:!1,infinite:!0,speed:700,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!1,pauseOnFocus:!1,centerMode:!0,variableWidth:!0});var e,s=$(".how-marketing-holder");s.on("init",function(e,s,i){var t=$(s.$slides[s.currentSlide]),a=t.next(),l=t.prev();l.addClass("slick-sprev"),a.addClass("slick-snext"),t.removeClass("slick-snext").removeClass("slick-sprev"),s.$prev=l,s.$next=a}).on("beforeChange",function(e,s,i,t){var a=$(s.$slides[t]);s.$prev.removeClass("slick-sprev"),s.$next.removeClass("slick-snext"),next=a.next(),(prev=a.prev()).prev(),prev.next(),prev.addClass("slick-sprev"),next.addClass("slick-snext"),s.$prev=prev,s.$next=next,a.removeClass("slick-next").removeClass("slick-sprev")}),s.slick({autoplay:!0,autoplaySpeed:2e3,speed:1e3,dots:!0,customPaging:function(e,s){return'<button class="custom-dot-class">'+(s+1)+"</button>"},arrows:!1,pauseOnHover:!1,pauseOnFocus:!1,infinite:!0,centerMode:!0,variableWidth:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,centerPadding:"0",swipe:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,variableWidth:!1}},]}),function(e){if(e("section.voolt-does").length){if(e(".does-item").hasClass("opened-box")){var s=e(".opened-box").find(".answer p").height()+50;e(".opened-box").find(".answer").css("max-height",s+"px")}e(".does-item").click(function(s){s.preventDefault();var i=e(".does-item").index(this);if(e(".image-box").removeClass("does-active-img"),e(".image-box").each(function(s){s==i&&e(this).addClass("does-active-img")}),e(this).hasClass("opened-box"))e(this).removeClass("opened-box"),e(this).find(".answer").css("max-height","0px");else{e(".opened-box").find(".answer").css("max-height","0px"),e(".does-item").removeClass("opened-box"),e(this).addClass("opened-box");var t=e(this).find(".answer p").height()+50;e(this).find(".answer").css("max-height",t+"px")}})}}(jQuery);let i=$("#thumbnail");$("#thumbnail").click(function(){let e=$(window).width();e>=768?($(".video-dekstop").css("display","block").get(0).play(),i.hide()):($(".video-mobile").css("display","block").get(0).play(),i.hide())}),$(".testimonial-holder").slick({dots:!1,arrows:!0,infinite:!0,speed:2e3,slidesToShow:1,autoplay:!1,swipe:!0,autoplaySpeed:2e3,pauseOnHover:!1,pauseOnFocus:!1,prevArrow:"<button aria-label='Slider Arrow Left' type='button' class='slick-prev pull-left'> <svg xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'><g clip-path='url(#clip0_3054_339)'><path d='M11.1105 23.1291L33.3611 0.878852C33.8758 0.363816 34.5627 0.0800781 35.2953 0.0800781C36.0278 0.0800781 36.7148 0.363816 37.2294 0.878852L38.868 2.51705C39.9342 3.58452 39.9342 5.31947 38.868 6.38531L20.1836 25.0697L38.8887 43.7748C39.4034 44.2899 39.6875 44.9765 39.6875 45.7086C39.6875 46.4415 39.4034 47.1281 38.8887 47.6435L37.2501 49.2813C36.7351 49.7963 36.0485 50.0801 35.316 50.0801C34.5835 50.0801 33.8965 49.7963 33.3819 49.2813L11.1105 27.0108C10.5946 26.4941 10.3113 25.8043 10.3129 25.0709C10.3113 24.3348 10.5946 23.6453 11.1105 23.1291Z' fill='#F7F7FF'/></g><defs><clipPath id='clip0_3054_339'><rect width='50' height='50' fill='white' transform='matrix(-1 0 0 1 50 0.0800781)'/></clipPath></defs></svg></button>",nextArrow:"<button aria-label='Slider Arrow Right' type='button' class='slick-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'><g clip-path='url(#clip0_3054_356)'><path d='M38.8895 23.1291L16.6389 0.878852C16.1242 0.363816 15.4373 0.0800781 14.7047 0.0800781C13.9722 0.0800781 13.2852 0.363816 12.7706 0.878852L11.132 2.51705C10.0658 3.58452 10.0658 5.31947 11.132 6.38531L29.8164 25.0697L11.1113 43.7748C10.5966 44.2899 10.3125 44.9765 10.3125 45.7086C10.3125 46.4415 10.5966 47.1281 11.1113 47.6435L12.7499 49.2813C13.2649 49.7963 13.9515 50.0801 14.684 50.0801C15.4165 50.0801 16.1035 49.7963 16.6181 49.2813L38.8895 27.0108C39.4054 26.4941 39.6887 25.8043 39.6871 25.0709C39.6887 24.3348 39.4054 23.6453 38.8895 23.1291Z' fill='#F7F7FF'/></g><defs><clipPath id='clip0_3054_356'><rect width='50' height='50' fill='white' transform='translate(0 0.0800781)'/></clipPath></defs></svg></button>"});function t(e,s){let i=$(e),t=i.find(".pager"),a="next"===s;if(!t.find(".active-dot").is(a?":last-child":":first-child")){let l=a?"next":"prev";i.find("th.active-in-slider").addClass("old-active-in").removeClass("active-in-slider")[l]().addClass("active-in-slider"),i.find("th.old-active-in").removeClass("old-active-in"),i.find("td.active-in-slider").addClass("old-active-in").removeClass("active-in-slider")[l]().addClass("active-in-slider"),i.find("td.old-active-in").removeClass("old-active-in"),t.find(".active-dot").addClass("old-dot-active").removeClass("active-dot")[l]().addClass("active-dot"),t.find(".old-dot-active").removeClass("old-dot-active")}}(e=jQuery)("section.faq-section").length&&e(".qa-item").click(function(s){s.preventDefault(),e(this).hasClass("opened")?(e(this).removeClass("opened"),e(this).find(".answer").slideUp(150)):(e(".qa-item").removeClass("opened"),e(".qa-item .answer").slideUp(150),e(this).addClass("opened"),e(this).find(".answer").slideDown(150))}),$(".comper-tags a").click(function(e){e.preventDefault(),$(".activetab").removeClass("activetab"),$(this).addClass("activetab"),$(".table-active").removeClass("table-active"),0===$(this).index()?$(".how-we-compare .table").eq(0).addClass("table-active"):1===$(this).index()&&$(".how-we-compare .table").eq(1).addClass("table-active")}),$(".table-w-slider .pager .arrow-next").click(function(e){e.preventDefault(),t(".table-w-slider","next")}),$(".table-w-slider .pager .arrow-prev").click(function(e){e.preventDefault(),t(".table-w-slider","prev")}),$(".table-w-slider2 .pager .arrow-next").click(function(e){e.preventDefault(),t(".table-w-slider2","next")}),$(".table-w-slider2 .pager .arrow-prev").click(function(e){e.preventDefault(),t(".table-w-slider2","prev")}),$("img, button, a").click(function(e){if(!$(this).hasClass("slick-arrow")&&!$(this).hasClass("custom-dot-class")&&!$(this).hasClass("arrow")&&!$(this).hasClass("compare-tabs")&&!$(this).hasClass("stop-redirect")){e.preventDefault();var e=new URL(window.location.href).search;window.location.href="https://app.voolt.com/flow/01/1/"+e}})});