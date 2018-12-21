$(document).ready(function () {
	$('.sidenav').sidenav({
		closeOnClick: true
	});
	$('.hero-slider').not('.slick-initialized').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 8000,
		cssEase: 'linear'
	});

	$('.slider-for').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		asNavFor: '.slider-nav'
	});
	
	$('.slider-nav').not('.slick-initialized').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		infinite: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true
	});
	

});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
});

$('.js-tilt').tilt({
	glare: true,
	maxGlare: .5,
	perspective: 100,
});

$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.not('[href="#modal1"]')
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

new WOW().init();


$('[data-fancybox^="quick-view"]').fancybox({
	animationEffect   : "fade",
	animationDuration : 300,
	margin : 0,
	gutter : 0,
	touch  : {
		vertical: false
	},
	baseTpl	:
	'<div class="fancybox-container" role="dialog" tabindex="-1">' +
	'<div class="fancybox-bg"></div>' +
	'<div class="fancybox-inner">' +
	'<div class="fancybox-stage"></div>' +
	'<div class="fancybox-form-wrap">' +
	'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
	'<svg viewBox="0 0 40 40">' +
	'<path d="M10,10 L30,30 M30,10 L10,30" />' +
	'</svg>' +
	'</button></div>' +
	'</div>' +
	'</div>',
	onInit: function(instance) {
		/*
	
			#1 Add product form
			===================
	
		*/

		// Find current form element ..
		var current = instance.group[instance.currIndex];
		instance.$refs.form = current.opts.$orig.parent().find('.product-form');

		// .. and move to the container
		instance.$refs.form.appendTo( instance.$refs.container.find('.fancybox-form-wrap') );

		/*
	
			#2 Create bullet navigation links
			=================================
	
		*/
		var list = '',
			$bullets;

		for ( var i = 0; i < instance.group.length; i++ ) {
			list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + ( i + 1 ) + '</span></a></li>';
		}

		$bullets = $( '<ul class="product-bullets">' + list + '</ul>' ).on('click touchstart', 'a', function() {
			var index = $(this).data('index');

			$.fancybox.getInstance(function() {
				this.jumpTo( index );
			});

		});

		instance.$refs.bullets = $bullets.appendTo( instance.$refs.stage );

	},
	beforeShow : function( instance ) {

		// Mark current bullet navigation link as active
		instance.$refs.stage.find('ul:first')
			.children()
			.removeClass('active')
			.eq( instance.currIndex )
			.addClass('active');

	},
	afterClose: function(instance, current) {

		// Move form back to the place
		instance.$refs.form.appendTo( current.opts.$orig.parent() );

	}
});