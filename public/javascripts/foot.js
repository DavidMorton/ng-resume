$(document).ready(function() { 
	$('#profile, #skills, #exp').collapse('toggle');

	$('.sectionContent, .experienceDetails').on('show.bs.collapse', function (e) {
		e.stopPropagation();

		if ($(window).width() >= 700) {
			var scrollElement = $('.wrapper');

			var h1Height = $('h1').outerHeight();
			var currentPosition = $(e.currentTarget).closest('.experience, .section').offset().top;
			var currentScroll = scrollElement.scrollTop();
			var result = (currentScroll + currentPosition) - h1Height;

			console.log('h1Height: ' + h1Height + ' currentPosition: ' + currentPosition + ' currentScroll: ' + currentScroll + ' result: ' + result);

			scrollElement.animate({
		    	scrollTop: result
			}, 200);
		} else {
			var scrollElement = $(window);

			var h1Height = $('h1').outerHeight();
			var currentPosition = $(e.currentTarget).closest('.experience, .section').offset().top;
			var result = currentPosition - h1Height;

			console.log('h1Height: ' + h1Height + ' currentPosition: ' + currentPosition + ' currentScroll: ' + currentScroll + ' result: ' + result);

			//scrollElement.scrollTop(result);
			$('body').animate({
		    	scrollTop: result
			}, 200);
		}
	});
});

