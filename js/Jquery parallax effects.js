// JavaScript Document

$(document).ready(function(){
	redrawDotNav();
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
	$('.home, #redbox, .menuname').click(function(){
    	$('html, body').animate({
    			scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); 
		});
    	return false;
	});
  $('.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); 
		});
    	return false;
    });
    $('.portafolio').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#portafolio').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); 
		});
    	return false;
    });
	$('.contact').click(function(){
    	$('html, body').animate({
   	scrollTop:$('#contact').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); 
		});
    	return false;
   });
/*////////////*/	
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('').css('top',(0-(scrolled*.25))+'px');
	$('').css('top',(0-(scrolled*.5))+'px');
	$('').css('top',(0-(scrolled*.75))+'px');
} 

function redrawDotNav(){
	var section1Top =  0;
	
	var section2Top =  $('#about').offset().top - (($('#portafolio').offset().top - $('#about').offset().top) / 10);
	var section3Top =  $('#portafolio').offset().top - (($('#contact').offset().top - $('#portafolio').offset().top) / 10);
	var section4Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 10);;
	$('ul#menu2 a, .menu ul a').removeClass('active2');
	
	var section5Top =  0;

	var section6Top =  $('#about').offset().top - (($('#portafolio').offset().top - $('#about').offset().top) / 6);
	var section7Top =  $('#portafolio').offset().top - (($('#contact').offset().top - $('#portafolio').offset().top) / 6);
	var section8Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 6);;
	$('.menu ul a').removeClass('active');

////////////////////////Small menu
	
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('#menu2 .home').addClass('active2');					
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('#menu2 .about').addClass('active2');			
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('#menu2 .portafolio').addClass('active2');		
	} else if ($(document).scrollTop() >= section4Top){
		$('#menu2 .contact').addClass('active2');			
	}	
///////////////////Main menu	
	
	if($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('.menu .home').addClass('active');							
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('.menu .about').addClass('active');			
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('.menu .portafolio').addClass('active');		
	} else if ($(document).scrollTop() >= section8Top){
		$('.menu .contact').addClass('active');				
	}
}

/////////////menu fixed		
	$(window).on('scroll', function(){	
	if($(document).scrollTop() >= 30){		
		$('.menu').addClass('menu-fixed');
		$('.menuname').fadeIn();			
		}		
	else{
	$('.menu').removeClass('menu-fixed');
	$('.menuname').fadeOut();				
	   }	   
	   if($(document).scrollTop() >= 200){
		$('.homefooter').fadeOut();
		$('#redbox').fadeIn();				
		}		
	else{
		$('.homefooter').fadeIn();
		$('#redbox').fadeOut();					
	   }
});
/////////////////loader	
		setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 5000);
/////isotope effects	
	$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    }); 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});	
////css animations		
    $('#arrow, #redbox').mouseenter(function(){
        $(this).addClass('floating')
        });		
	$('#arrow, #redbox').mouseleave(function(){
        $(this).removeClass('floating')
        });		
	$('.project').mouseenter(function(){
        $('.overlaycontent',this).addClass('slideInUp2')
		$('.overlaycontent',this).removeClass('slideOutDown')
        });		
	$('.project').mouseleave(function(){
		$('.overlaycontent',this).addClass('slideOutDown')
        $('.overlaycontent',this).removeClass('slideInUp2')
        });			
/////////////Animations for elements when scrolling
$(window).scroll(function() {
	
		$('.up').each(function(){
		var imagePos = $(this).offset().top;
		var scrollBottom = $(window).scrollTop() + $(window).height();
	
			if (imagePos < scrollBottom-50) {
				$(this).addClass("slideInUp");
			}
		});				
		$('.left').each(function(){
		var imagePos = $(this).offset().top;
		var scrollBottom = $(window).scrollTop() + $(window).height();
	
			if (imagePos < scrollBottom-50) {
				$(this).addClass("slideLeft");
			}			
		});		
		$('.right').each(function(){
		var imagePos = $(this).offset().top;
		var scrollBottom = $(window).scrollTop() + $(window).height();
	
			if (imagePos < scrollBottom-50) {
				$(this).addClass("slideRight");
			}			
		});	
	});
		;

$(window).resize(function(){	
	if ($("#header").css("visibility") == "visible" ){
			$('.menu').addClass('hidden');									
		}
		else{$('.menu').removeClass('hidden');				
		}
	
});

if ($(window).width() < 1000) {
   $('.animationup').removeClass('up');
   $('.animationleft').removeClass('left');
   $('.animationright').removeClass('right');
}
else {
   $('.animationup').addClass('up');
   $('.animationleft').addClass('left');
   $('.animationright').addClass('right');   
}
//////////////particles js
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: true,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
});