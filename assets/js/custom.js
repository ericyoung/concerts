$(document).ready(function() {

// INIT SETTINGS ---------------------------------

	$windowWidth = $(window).width();
	$windowHeight = $(window).height();

	var docElem = document.documentElement,
		mobilemenu = document.querySelector('#mobilemenu-container');

// OPTIONAL TOP BANNER FUNCTIONALITY ------------------------
	$('#topbanner-close').click(function(e) {
		e.preventDefault();
		$topbannerHeight = $('#topbanner').height() + 42;
		$('#topbanner').css({'top':-$topbannerHeight+'px'});
    });

// MOBILE MENU FUNCTIONALITY ------------------------

	// OPEN MOBILE MENU
	$('#menubutton').click(function(e) {
		e.preventDefault();
		classie.add(mobilemenu,'showme');
    });
	// CLOSE MOBILE MENU
	$('.closebutton').click(function(e) {
		e.preventDefault();
		classie.remove(mobilemenu,'showme');
    });
	// CLOSE MENU ON ITEM SELECT
	$('a.mobilenav').click(function(e) {
		classie.remove(mobilemenu,'showme');
    });


// REEL/VIDEO VIMEO LIGHTBOXES -----------------------------------

	$('a#feature-video').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-video',
		removalDelay: 100,
		preloader: false,
		fixedContentPos: true
	});
	$('a#playbtn').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-video',
		removalDelay: 100,
		preloader: false,
		fixedContentPos: true
	});
	$('a.video-grid').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-video',
		removalDelay: 100,
		preloader: false,
		fixedContentPos: true
	});
	$('a.video-tour-grid').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-video',
		removalDelay: 100,
		preloader: false,
		fixedContentPos: true
	});
	$('a.events-grid').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-video',
		removalDelay: 100,
		preloader: false,
		fixedContentPos: true
	});


// ART LIGHTBOXES -----------------------------------

	$('a.art-grid').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				//return item.el.attr('title');
				return item.el.children().eq(1).text();
			}
		}
	});
	$('a.art-grid-tours').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				//return item.el.attr('title');
				return item.el.children().eq(1).text();
			}
		}
	});

// INTERACTIVE LIGHTBOXES -----------------------------------

	$('a.interactive-grid').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				//return item.el.attr('title');
				return item.el.children().eq(1).text();
			}
		}
	});


// DETECT IE

	function detectIE() {
	  var ua = window.navigator.userAgent;

	  // Test values; Uncomment to check result …

	  // IE 10
	  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

	  // IE 11
	  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

	  // Edge 12 (Spartan)
	  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	  // Edge 13
	  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }

	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }

	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	  }

	  // other browser
	  return false;
	}

	var version = detectIE();


// INITIAL SIZING OF CONTENT AREAS ------------------

	if (version != false) { // VIEWING WITH IE!  Need fix since IE does not support video object fit
		$('video').css({'object-fit':'none','height':'100%','width':'auto'});
	}

	$('#home-section').css({'max-height':$windowHeight});
	$('#home-video').css({'min-height':$windowHeight});

	$('#artist-section').css({'top':$windowHeight});
	//$artistSectionMargin = $('#tagline').height() + 28 + 185;
	$artistSectionMargin = $('#artist-search').height() + 185;
	$('#artist-section').css({'margin-top':'-'+$artistSectionMargin+'px'});



	var $formWidth;
	if($windowWidth >= 768) {
		$formWidth = $('#contact-block').width() - 92;
	} else {
		$formWidth = $('#contact-block').width() - 72;
	}
	$('#contact_form').css({'width':$formWidth});
	if($('#contact_form input#send-email').width() < 260) {
		$('#contact_form input#send-email').attr('value','SEND >');
	} else {
		$('#contact_form input#send-email').attr('value',"LET'S DO THIS >");
	}

	$taglineHeight = $('#tagline').height() + 26;
	$('#reelwork-section').css({'top':$taglineHeight+'px','padding-bottom':$taglineHeight+'px'});

	$reelHeight = $('#reel-poster').height();
	$workPanelHeight = $reelHeight/6;
	$('#work-container').css({'height':$reelHeight});
	$('a.work-panel').css({'height':$workPanelHeight});

	$vidgridWidth = $('a.video-grid').width();
	$vidgridHeight = $vidgridWidth * 0.5625;
	$('a.video-grid').css({'height':$vidgridHeight});
	$('a.video-grid .videotitle').css({'width':$vidgridWidth+2});
	$('a.video-grid .videotitle').css({'height':$vidgridHeight});

	$vidtourgridWidth = $('a.video-tour-grid').width();
	$vidtourgridHeight = $vidtourgridWidth * 0.5625;
	$('a.video-tour-grid').css({'height':$vidtourgridHeight});
	$('a.video-tour-grid .videotitle').css({'width':$vidtourgridWidth+2});
	$('a.video-tour-grid .videotitle').css({'height':$vidtourgridHeight});

	$artgridWidth = $('a.art-grid').width();
	$artgridHeight = $artgridWidth*(12.5/9.625);
	$('a.art-grid').css({'height':$artgridHeight});

	$artgridtoursWidth = $('a.art-grid-tours').width();
	$artgridtoursHeight = $artgridtoursWidth*(471/400);
	$('a.art-grid-tours').css({'height':$artgridtoursHeight});
	$('a.art-grid-tours .arttitle').css({'width':$artgridtoursWidth+2});
	$('a.art-grid-tours .arttitle').css({'height':$artgridtoursHeight});

	$interactivegridWidth = $('a.interactive-grid').width();
	$interactivegridHeight = $interactivegridWidth*(9/16);
	$('a.interactive-grid').css({'height':$interactivegridHeight});

	$eventsgridWidth = $('a.events-grid').width();
	$eventsgridHeight = $eventsgridWidth * 0.5625;
	$('a.events-grid').css({'height':$eventsgridHeight});
	$('a.events-grid .eventstitle').css({'width':$eventsgridWidth+2});
	$('a.events-grid .eventstitle').css({'height':$eventsgridHeight});

	if($windowWidth < 900) {
		$('#logo-container').css({'opacity':'0'});
		$('#header').addClass('shrink');
		$('#logoflag2').addClass('shrink');
		$('#logoflag1').addClass('shrink');
		$('#logo-tiny').addClass('shrink');
		$('#pageheader').addClass('shrink');
		$('a#byp_link_container').addClass('shrink');
	} else {
		$('#logo-container').css({'opacity':'1'});
	}


// WINDOW RESIZING ----------------------------------

	$(window).resize(function() {
		$windowWidth = $(window).width();
		$windowHeight = $(window).height();

		if (version != false) { // VIEWING WITH IE!  Need fix since IE does not support video object fit
			$('video').css({'object-fit':'none','height':'100%','width':'auto'});
		}

		$('#home-section').css({'max-height':$windowHeight});
		$('#home-video').css({'min-height':$windowHeight});

		$('#artist-section').css({'top':$windowHeight});
		//$artistSectionMargin = $('#tagline').height() + 28 + 185;
		$artistSectionMargin = $('#artist-search').height() + 185;
		$('#artist-section').css({'margin-top':'-'+$artistSectionMargin+'px'});

		if($windowWidth >= 768) {
			$formWidth = $('#contact-block').width() - 92;
		} else {
			$formWidth = $('#contact-block').width() - 72;
		}
		$('#contact_form').css({'width':$formWidth});
		if($('#contact_form input#send-email').width() < 260) {
			$('#contact_form input#send-email').attr('value','SEND >');
		} else {
			$('#contact_form input#send-email').attr('value',"LET'S DO THIS >");
		}

		$taglineHeight = $('#tagline').height() + 26;
		$('#reelwork-section').css({'top':$taglineHeight+'px','padding-bottom':$taglineHeight+'px'});

		$reelHeight = $('#reel-poster').height();
		$workPanelHeight = $reelHeight/6;
		$('#work-container').css({'height':$reelHeight});
		$('a.work-panel').css({'height':$workPanelHeight});

		$vidgridWidth = $('a.video-grid').width();
		$vidgridHeight = $vidgridWidth * 0.5625;
		$('a.video-grid').css({'height':$vidgridHeight});
		$('a.video-grid .videotitle').css({'width':$vidgridWidth+2});
		$('a.video-grid .videotitle').css({'height':$vidgridHeight});

		$vidtourgridWidth = $('a.video-tour-grid').width();
		$vidtourgridHeight = $vidtourgridWidth * 0.5625;
		$('a.video-tour-grid').css({'height':$vidtourgridHeight});
		$('a.video-tour-grid .videotitle').css({'width':$vidtourgridWidth+2});
		$('a.video-tour-grid .videotitle').css({'height':$vidtourgridHeight});

		$artgridWidth = $('a.art-grid').width();
		$artgridHeight = $artgridWidth*(12.5/9.625);
		$('a.art-grid').css({'height':$artgridHeight});

		$artgridtoursWidth = $('a.art-grid-tours').width();
		$artgridtoursHeight = $artgridtoursWidth*(471/400);
		$('a.art-grid-tours').css({'height':$artgridtoursHeight});
		$('a.art-grid-tours .arttitle').css({'width':$artgridtoursWidth+2});
		$('a.art-grid-tours .arttitle').css({'height':$artgridtoursHeight});

		$interactivegridWidth = $('a.interactive-grid').width();
		$interactivegridHeight = $interactivegridWidth*(9/16);
		$('a.interactive-grid').css({'height':$interactivegridHeight});

		$eventsgridWidth = $('a.events-grid').width();
		$eventsgridHeight = $eventsgridWidth * 0.5625;
		$('a.events-grid').css({'height':$eventsgridHeight});
		$('a.events-grid .eventstitle').css({'width':$eventsgridWidth+2});
		$('a.events-grid .eventstitle').css({'height':$eventsgridHeight});

		if($windowWidth < 900) {
			$('#header').addClass('shrink');
			$('#logoflag2').addClass('shrink');
			$('#logoflag1').addClass('shrink');
			$('#logo-tiny').addClass('shrink');
			$('#pageheader').addClass('shrink');
			$('a#byp_link_container').addClass('shrink');
		} else {
			$('#logo-container').css({'opacity':'1'});
			if($scrollshrink == false) {
				$('#header').removeClass('shrink');
				$('#logoflag2').removeClass('shrink');
				$('#logoflag1').removeClass('shrink');
				$('#logo-tiny').removeClass('shrink');
				$('#pageheader').removeClass('shrink');
				$('a#byp_link_container').removeClass('shrink');
			}
		}

	});

});


$(window).load(function() {
	$windowWidth = $(window).width();
	$windowHeight = $(window).height();

	if (typeof(version)!= 'undefined' && version != false) { // VIEWING WITH IE!  Need fix since IE does not support video object fit
		$('video').css({'object-fit':'none','height':'100%','width':'auto'});
	}

	$('#home-section').css({'max-height':$windowHeight});
	$('#home-video').css({'min-height':$windowHeight});

	$('#artist-section').css({'top':$windowHeight});
	//$artistSectionMargin = $('#tagline').height() + 28 + 185;
	$artistSectionMargin = $('#artist-search').height() + 185;
	$('#artist-section').css({'margin-top':'-'+$artistSectionMargin+'px'});

	var $formWidth;
	if($windowWidth >= 768) {
		$formWidth = $('#contact-block').width() - 92;
	} else {
		$formWidth = $('#contact-block').width() - 72;
	}
	$('#contact_form').css({'width':$formWidth});
	if($('#contact_form input#send-email').width() < 260) {
		$('#contact_form input#send-email').attr('value','SEND >');
	} else {
		$('#contact_form input#send-email').attr('value',"LET'S DO THIS >");
	}

	$taglineHeight = $('#tagline').height() + 26;
	$('#reelwork-section').css({'top':$taglineHeight+'px','padding-bottom':$taglineHeight+'px'});

	$reelHeight = $('#reel-poster').height();
	$workPanelHeight = $reelHeight/6;
	$('#work-container').css({'height':$reelHeight});
	$('a.work-panel').css({'height':$workPanelHeight});

	$vidgridWidth = $('a.video-grid').width();
	$vidgridHeight = $vidgridWidth * 0.5625;
	$('a.video-grid').css({'height':$vidgridHeight});
	$('a.video-grid .videotitle').css({'width':$vidgridWidth+2});
	$('a.video-grid .videotitle').css({'height':$vidgridHeight});

	$vidtourgridWidth = $('a.video-tour-grid').width();
	$vidtourgridHeight = $vidtourgridWidth * 0.5625;
	$('a.video-tour-grid').css({'height':$vidtourgridHeight});
	$('a.video-tour-grid .videotitle').css({'width':$vidtourgridWidth+2});
	$('a.video-tour-grid .videotitle').css({'height':$vidtourgridHeight});

	$artgridWidth = $('a.art-grid').width();
	$artgridHeight = $artgridWidth*(12.5/9.625);
	$('a.art-grid').css({'height':$artgridHeight});

	$artgridtoursWidth = $('a.art-grid-tours').width();
	$artgridtoursHeight = $artgridtoursWidth*(471/400);
	$('a.art-grid-tours').css({'height':$artgridtoursHeight});
	$('a.art-grid-tours .arttitle').css({'width':$artgridtoursWidth+2});
	$('a.art-grid-tours .arttitle').css({'height':$artgridtoursHeight});

	$interactivegridWidth = $('a.interactive-grid').width();
	$interactivegridHeight = $interactivegridWidth*(9/16);
	$('a.interactive-grid').css({'height':$interactivegridHeight});

	$eventsgridWidth = $('a.events-grid').width();
	$eventsgridHeight = $eventsgridWidth * 0.5625;
	$('a.events-grid').css({'height':$eventsgridHeight});
	$('a.events-grid .eventstitle').css({'width':$eventsgridWidth+2});
	$('a.events-grid .eventstitle').css({'height':$eventsgridHeight});

	if($windowWidth < 900) {
		$('#logo-container').css({'opacity':'0'});
		$('#header').addClass('shrink');
		$('#logoflag2').addClass('shrink');
		$('#logoflag1').addClass('shrink');
		$('#logo-tiny').addClass('shrink');
		$('#pageheader').addClass('shrink');
		$('a#byp_link_container').addClass('shrink');
	} else {
		$('#logo-container').css({'opacity':'1'});
	}
});
