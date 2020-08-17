$(window).on("load",function(){$(".ffl-wrapper").floatingFormLabels();var b=$(window).width();if(b<769){setTimeout(function(){$("#preloader").fadeOut("200")},1000)}else{setTimeout(function(){$("#preloader").fadeOut("2400")},5830)} });$(document).ready(function(){
            function show(){
         var txtList = [
        "Design",
        "Campaigns",
        "Strategies",
       ],
        idx = 0,
        p = document.getElementById("text");

        function fadein() {
          p.classList.add("hidetext");
          setTimeout(function() {
            p.textContent = txtList[idx];
            idx = (idx + 1) % txtList.length;
          }, 500);
          setTimeout(function() {
            p.classList.remove("hidetext");
          }, 500);
        }

        setInterval(function() {
          fadein();
        }, 3000);
    }

    setTimeout(show,7000)
    $("#lightgallery").lightGallery();AOS.init();var b=$(window).width();if(b<769){ setTimeout(show,1000);setTimeout(function(){$("#banner_bg").addClass("bgyellow")},271)}else{setTimeout(show,7000);setTimeout(function(){$("#banner_bg").addClass("bgyellow")},5840)}$(" header .nav li a, .menu-list li a").click(function(){$(this).parent().addClass("active").siblings().removeClass("active")});$(".burger-menu").on("click",function(){$(this).toggleClass("open");$(".mob-menu .nav-menu .menu-list").toggleClass("open-menu")});$(".mob-menu .nav-menu .menu-list li a").click(function(){$(".burger-menu").removeClass("open");$(".mob-menu .nav-menu .menu-list").removeClass("open-menu")});$(".scroll").click(function(d){d.preventDefault();var a=$(this).attr("href");$("html,body").animate({scrollTop:$(a).offset().top},"slow")});$(window).scroll(function(){var a=$(window).scrollTop();if(a>40){$(".bottom-up").css({opacity:"1"})}else{$(".bottom-up").css({opacity:"0"})}});$(".bottom-up").click(function(){$("html,body").animate({scrollTop:0},300)});$("#client_slider").owlCarousel({item:4,loop:true,margin:10,nav:false,dots:false,mouseDrag:false,autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{0:{items:3},600:{items:3},1000:{items:4}}})
 


});