function ScrollToElement(jqElement) {

	if (jqElement.length === 0) 
		return;

	var currentPosition = jqElement.offset().top;

	var h1Height = $('div.header').outerHeight();
	
	var scrollElement = null;

	if ($(window).width() >= 850) {
		var scrollElement = $('.wrapper');

		var currentScroll = scrollElement.scrollTop();

		var result = (currentScroll + currentPosition) - h1Height;
	} else {
		var scrollElement = $('body');

		var result = currentPosition - h1Height;
	}
	scrollElement.animate({
    	scrollTop: result
	}, 500, 'easeOutCirc');
}

function OnCollapse(e) {
	e.stopPropagation();


	var collapsedTarget = $(e.currentTarget).closest('.experience, .section');

	if (collapsedTarget.hasClass('section')) {
		ScrollToElement($('.body-content'));

		$('.sectionContent, .experienceDetails').off('show.bs.collapse');
		$('#profile').collapse('show');
		$('.sectionContent, .experienceDetails').on('show.bs.collapse', OnShow);
	} else {
		ScrollToElement($('#exp').closest('.section'));
	}

	var hash = $(e.currentTarget).closest('.section, .experience').attr('hash');

	window.location.hash = hash.substring(0, hash.lastIndexOf('/'));
}

function OnShow(e) {
	e.stopPropagation();

	// var elementToScrollTo = $(e.currentTarget).closest('.experience, .section');

	// $('.sectionContent, .experienceDetails').off('hide.bs.collapse');

	// if (elementToScrollTo.hasClass('section')) {
	// 	$('.section .sectionContent').not($(e.currentTarget)).collapse('hide');
	// } else {
	// 	$('.experience .experienceDetails').not($(e.currentTarget)).collapse('hide');
	// }

	// $('.sectionContent, .experienceDetails').on('hide.bs.collapse', OnCollapse);


	// $(e.currentTarget).on('shown.bs.collapse', function(e) {
	// 	e.stopPropagation();

	// 	ScrollToElement($(e.currentTarget).closest('.experience, .section'));
	// });

	ScrollToElement($(e.currentTarget).closest('.experience, .section'));
	
	window.location.hash = $(e.currentTarget).closest('.section, .experience').attr('hash');
}

function OnShown(e) {
	e.stopPropagation();

	$('#profile').off('shown.bs.collapse');
}

$(document).ready(function() { 

});

