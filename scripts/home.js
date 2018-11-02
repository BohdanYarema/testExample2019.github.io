$(document).ready(function () {
	$('.sidenav').sidenav({
		closeOnClick: true
	})


	$('.hero-slider').not('.slick-initialized').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});


	$('.gallery_inner-slider').not('.slick-initialized').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});
	$('.divider-content__slider').not('.slick-initialized').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
		]
	});

	$('.slider-items ').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		dots: true,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2500

	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.scrollTop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrollTop').stop(true, true).fadeOut();
		}
	});

	$(function () {
		$(".scroll-btn").click(function () {
			$("html,body").animate({scrollTop: $("header").offset().top}, "1500");
			return false
		})
	});


	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						}
						if ($target.hasClass('collapsible-item')) {
							$target.addClass('active'),
								$target.children('.collapsible-body').show(350);
						}
						else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
						;
					});
				}
			}
		});


// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.main-nav-wrap').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 0);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('.main-nav-wrap').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('.main-nav-wrap').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}

});


document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.parallax');
	var instances = M.Parallax.init(elems);
});


document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.materialboxed');
	var instances = M.Materialbox.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.dropdown-trigger');
	options = {}
	var instances = M.Dropdown.init(elems, options);
});


$('.js-tilt').tilt({
	glare: true,
	maxGlare: .5
});


function initMap() {
	var iconBase = {
		url: '/images/slider-dots.svg',
		scaledSize: new google.maps.Size(50, 50), // size
	}
	var uluru = {lat: 50.527241, lng: 30.600207};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: iconBase,
	});

	var iw = new google.maps.InfoWindow({
		content: "г.Киев ул. Радунская 5А"
	});
	google.maps.event.addListener(marker, "click", function (e) {
		iw.open(map, this);
	});
}

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'top',
		hoverEnabled: false
	});
});
var wow = new WOW(
	{
		mobile: false
	}
);
wow.init();


$(window).load(function () {
	/* Preload code goes here */
	function preload(imageArray, index) {
		index = index || 0;
		if (imageArray && imageArray.length > index) {
			var img = new Image();
			img.onload = function () {
				preload(imageArray, index + 1);
			}
			img.src = images[index]['/images/']
			;
		}
		/* images is an array with image metadata */
		preload(images);
	}
});