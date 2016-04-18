function ScrollToElement(jqElement) {


	var currentPosition = jqElement.offset().top;

	var h1Height = $('h1').outerHeight();
	
	var scrollElement = null;

	if ($(window).width() >= 700) {
		var scrollElement = $('.innerWrapper');

		var currentScroll = scrollElement.scrollTop();

		var result = (currentScroll + currentPosition) - h1Height;
	} else {
		var scrollElement = $('body');

		var result = currentPosition - h1Height;
	}
	scrollElement.animate({
    	scrollTop: result
	}, 400, 'easeOutBounce');
}

function OnCollapse(e) {
	e.stopPropagation();

	var collapsedTarget = $(e.currentTarget).closest('.experience, .section');

	if (collapsedTarget.hasClass('section')) {
		ScrollToElement($('.body-content'));
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

	$('.sectionContent, .experienceDetails').on('show.bs.collapse', OnShow);
}

$(document).ready(function() { 
	ScrollToElement($('.body-content'));

	$('#profile').collapse('toggle');

	$('#profile').on('shown.bs.collapse', OnShown);

	$('.sectionContent, .experienceDetails').on('hide.bs.collapse', OnCollapse);
});

