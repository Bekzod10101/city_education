jQuery(document).ready(function($) {

	$(document).on('click', '.menu a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});

	$('.menu_icon').click(function(event) {
   		$(".menu").toggleClass('left_0');
   		$(this).toggleClass('close');
	});

	$(".video_slider").flickity({
		prevNextButtons: false,
		groupCells: true,
		wrapAround: true,
		adaptiveHeight: true

	});	

	$('.gallery_item.1').magnificPopup({
	  	items: [
	      {
	        src: '../img/banner_img.jpg'
	      },
	      {
	        src: '../img/banner_img2.jpg'
	      },
	      {
	        src: '../img/banner_img3.jpg'
	      },
	      {
	        src: '../img/post_img4.jpg'
	      }
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});
	$('.gallery_item.2').magnificPopup({
	  	items: [
	      {
	        src: '../img/banner_img.jpg'
	      },
	      {
	        src: '../img/banner_img2.jpg'
	      }
	      
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});
	$('.gallery_item.3').magnificPopup({
	  	items: [
	      
	      {
	        src: '../img/banner_img2.jpg'
	      },
	      {
	        src: '../img/banner_img3.jpg'
	      },
	      {
	        src: '../img/post_img4.jpg'
	      }
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});
	$('.gallery_item.4').magnificPopup({
	  	items: [
	      {
	        src: '../img/banner_img.jpg'
	      },
	      
	      {
	        src: '../img/post_img4.jpg'
	      }
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});
	$('.gallery_item.5').magnificPopup({
	  	items: [
	      {
	        src: '../img/post_img5.jpg'
	      },
	      {
	        src: '../img/banner_img2.jpg'
	      },
	      {
	        src: '../img/banner_img3.jpg'
	      },
	      {
	        src: '../img/post_img4.jpg'
	      }
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});
	$('.gallery_item.6').magnificPopup({
	  	items: [
	      {
	        src: '../img/section_bg.jpg'
	      },
	      {
	        src: '../img/banner_img2.jpg'
	      },
	      {
	        src: '../img/banner_img3.jpg'
	      },
	      {
	        src: '../img/post_img4.jpg'
	      }
	      
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});



	$(".button_item, .curriculum_item, .video_item").click(function(event) {
	    $('.modal[data-modal='+ $(this).data("modal-open") +']').fadeIn(250);
	});


	if($(window).width() < 575){
	  $('body').prepend( $('.main_container .menu') );
	}
	$('.overlay').click(function(event) {
		$('.modal').fadeOut(400);
		$('video').trigger('pause');
	});
	$('.close').click(function(event) {
		$('.modal').fadeOut(400);
		$('video').trigger('pause');
	});
});




function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}
        		
     
