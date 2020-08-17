$(window).on('load', function() { // makes sure the whole site is loaded 
	// setTimeout(function(){ 
	//  	$('#preloader').fadeOut('2400');
	//   }, 5830);

	var w = $(window).width();

	if(w < 769){
	  setTimeout(function(){ 
	 	$('#preloader').fadeOut('200');
	  }, 1000);
	}
	else{
		setTimeout(function(){ 
	 	$('#preloader').fadeOut('2400');
	  }, 5830);
	}
})

$(document).ready(function(){

	$('#lightgallery').lightGallery();

	  AOS.init();
	
		// setTimeout(function(){ 
		// 	 	$('#banner_bg').addClass('bgyellow');
		// 	  }, 5840);

		var w = $(window).width();

		if(w < 769){
		  setTimeout(function(){ 
			 	$('#banner_bg').addClass('bgyellow');
			  }, 271);
		}
		else{
			setTimeout(function(){ 
			 	$('#banner_bg').addClass('bgyellow');
			  }, 5840);
		}
	// active menu
	$(' header .nav li a, .menu-list li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		// $(this).siblings().addClass('active');
		
	});	

 	// burger-menu
 	$('.burger-menu').on('click', function(){
 		$(this).toggleClass('open');
 		$('.mob-menu .nav-menu .menu-list').toggleClass('open-menu');
 	});

 	$('.mob-menu .nav-menu .menu-list li a').click(function(){
 		$('.burger-menu').removeClass('open');
			$('.mob-menu .nav-menu .menu-list').removeClass('open-menu');
 	});	
 	// $(window).on('click',function (){
 	// 	$('.mob-menu .nav-menu .menu-list').toggleClass('open-menu');
 	// });

 	// typejs

    // var txtList = [
    //     "Design",
    //     "Campaigns",
    //     "Strategies",
    //    ],
    //   idx = 0,
    //   p = document.getElementById("text");

    // function fadein() {
    //   p.classList.add("hidetext");
    //   setTimeout(function() {
    //     p.textContent = txtList[idx];
    //     idx = (idx + 1) % txtList.length;
    //   }, 500);
    //   setTimeout(function() {
    //     p.classList.remove("hidetext");
    //   }, 500);
    // }

    // setInterval(function() {
    //   fadein();
    // }, 3000);




 	// onscroll
 	$('.scroll').click(function(e){
 		e.preventDefault();
 		var a = $(this).attr("href");

 		$("html,body").animate({
 			scrollTop: $(a).offset().top
 		},'slow');

 	});

 	// scroll up show btn
 	$(window).scroll(function(){
 		var target = $(window).scrollTop();

 		if(target > 40){
 			$('.bottom-up').css({"opacity":"1"})
 		}
 		else{
 			$('.bottom-up').css({"opacity":"0"})
 		}

 	});

 	// bottom up
 	$('.bottom-up').click( function(){
 		$("html,body").animate({
 			scrollTop:0
 		},300);
	});
 	// client_slider

	 $('#client_slider').owlCarousel({
	   	item:1,
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:false,
	    mouseDrag: false,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    animateIn: "fadeIn",
	    animateOut: "fadeOut",

	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})



	  // typed js
		 // var one = new Typed('.af', {
		 //    strings: ['aflatoon', 'aflatoon', 'aflatoon',''],
		 //    typeSpeed: 300,
		 //    backSpeed: 150,
		 //    smartBackspace: false, // this is a default
		 //    loop: true,
		 //    //  backDelay: 0,
   		//     startDelay: 5000,
   		//   	fadeOut: true
		 //  });

		  // var one = new Typed('#typed', {
		  //   strings: ['Design', 'Strategies', 'Campaigns'],
		  //   typeSpeed: 400,
		  //   backSpeed: 0,
		  //   smartBackspace: false, // this is a default
		  //   loop: true,
		  //   backDelay: 30,
    // 		startDelay: 100,
    // 		fadeOut: true
		  // });

});