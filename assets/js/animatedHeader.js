var $scrollshrink = false;

var animatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector('#header'),
		logoflag2 = document.querySelector('#logoflag2'),
		logoflag1 = document.querySelector('#logoflag1'),
		logotiny = document.querySelector('#logo-tiny'),
		didScroll = false,
		changeHeaderOn = 150; // Scroll height

	function init() {
		window.addEventListener('scroll', function(event) {
			if(!didScroll) {
				didScroll = true;
				setTimeout(scrollPage,300);
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$scrollshrink = true;
			classie.add(header,'shrink');
			classie.add(logoflag2,'shrink');
			classie.add(logoflag1,'shrink');
			classie.add(logotiny,'shrink');
			$('#pageheader').addClass('shrink');
			$('a#byp_link_container').addClass('shrink');
		}
		else {
			if($(window).width() >= 900) {
				$('#logo-container').css({'opacity':'1'});
				$scrollshrink = false;
				classie.remove(header,'shrink');
				classie.remove(logoflag2,'shrink');
				classie.remove(logoflag1,'shrink');
				classie.remove(logotiny,'shrink');
				$('#pageheader').removeClass('shrink');
				$('a#byp_link_container').removeClass('shrink');
			}
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();