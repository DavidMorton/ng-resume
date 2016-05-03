function ScrollToElement(jqElement) {

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
	}, 400, 'easeOutCirc');
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
}

function OnShow(e) {
	e.stopPropagation();

	var elementToScrollTo = $(e.currentTarget).closest('.experience, .section');

	$('.sectionContent, .experienceDetails').off('hide.bs.collapse');

	if (elementToScrollTo.hasClass('section')) {
		$('.section .sectionContent').not($(e.currentTarget)).collapse('hide');
	} else {
		$('.experience .experienceDetails').not($(e.currentTarget)).collapse('hide');
	}

	$('.sectionContent, .experienceDetails').on('hide.bs.collapse', OnCollapse);


	$(e.currentTarget).on('shown.bs.collapse', function(e) {
		e.stopPropagation();

		ScrollToElement($(e.currentTarget).closest('.experience, .section'));
	});
}

function OnShown(e) {
	e.stopPropagation();

	$('#profile').off('shown.bs.collapse');

}

$(document).ready(function() { 

});

