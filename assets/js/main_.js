$(window).on("load", function () {
    $(".ffl-wrapper").floatingFormLabels(),
     $(window).width() < 769 ? setTimeout(function () {
                  $("#preloader").fadeOut("32400");
              }, 1e3)
            : setTimeout(function () {
                  $("#preloader").fadeOut("2400");
              }, 5830);
}),
    $(document).ready(function () {
        function e() {
            var e = ["Design", "Campaigns", "Strategies"],
                t = 0,
                n = document.getElementById("text");
            setInterval(function () {
                n.classList.add("hidetext"),
                    setTimeout(function () {
                        (n.textContent = e[t]), (t = (t + 1) % e.length);
                    }, 500),
                    setTimeout(function () {
                        n.classList.remove("hidetext");
                    }, 500);
            }, 3e3);
        }
        setTimeout(e, 7e3),
            $("#lightgallery").lightGallery(),
            AOS.init(),
            $(window).width() < 769
                ? (setTimeout(e, 1e3),
                  setTimeout(function () {
                      $("#banner_bg").addClass("bgyellow");
                  }, 271))
                : (setTimeout(e, 7e3),
                  setTimeout(function () {
                      $("#banner_bg").addClass("bgyellow");
                  }, 5840)),
            $(" header .nav li a, .menu-list li a").click(function () {
                $(this).parent().addClass("active").siblings().removeClass("active");
            }),
            $(".burger-menu").on("click", function () {
                $(this).toggleClass("open"), $(".mob-menu .nav-menu .menu-list").toggleClass("open-menu");
            }),
            $(".mob-menu .nav-menu .menu-list li a").click(function () {
                $(".burger-menu").removeClass("open"), $(".mob-menu .nav-menu .menu-list").removeClass("open-menu");
            }),
            $(".scroll").click(function (e) {
                e.preventDefault();
                var t = $(this).attr("href");
                $("html,body").animate({ scrollTop: $(t).offset().top }, "slow");
            }),
            $(window).scroll(function () {
                $(window).scrollTop() > 40 ? $(".bottom-up").css({ opacity: "1" }) : $(".bottom-up").css({ opacity: "0" });
            }),
            $(".bottom-up").click(function () {
                $("html,body").animate({ scrollTop: 0 }, 300);
            }),
            $("#client_slider").owlCarousel({
                item: 4,
                loop: !0,
                margin: 10,
                nav: !1,
                dots: !1,
                mouseDrag: !1,
                autoplay: !0,
                autoplayTimeout: 2e3,
                autoplayHoverPause: !0,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                responsive: { 0: { items: 3 }, 600: { items: 3 }, 1000: { items: 4 } },
            });
    });
