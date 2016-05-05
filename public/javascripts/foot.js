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
	}, 500, 'easeOutQuart');
}

function OnCollapse(e) {
	e.stopPropagation();

	console.log('Collapsing ' + e.currentTarget.id);

	hash = window.location.hash;

	if ($('.sectionContent.collapse.in, .sectionContent.collapsing').length === 0) 
	{
		ScrollToElement($('#profile'));
		$('#profile').collapse('show');
		window.location.hash = hash.substring(0, hash.lastIndexOf('/'));

	} else if ($('#exp').hasClass('in') && $('#exp').find('.collapsing').length === 0)
	{
		ScrollToElement($('#exp-section'));
		window.location.hash = hash.substring(0, hash.lastIndexOf('/'));
	}
}

function OnShow(e) {
	e.stopPropagation();

	$('.section, .experience').off('hidden.bs.collapse');

	console.log('Showing ' + e.currentTarget.id);

	var closest = $(e.currentTarget).closest('.section, .experience');

	if (closest.hasClass('section'))
	{
		$(e.currentTarget).find('.collapse.in').collapse('hide');
		$('.sectionContent.collapse.in').not($(e.currentTarget)).collapse('hide');
	} else {
		$('.experienceDetails.collapse.in').not($(e.currentTarget)).collapse('hide');
	}

	$(e.currentTarget).on('shown.bs.collapse', function() {
		$(e.currentTarget).off('shown.bs.collapse');
		ScrollToElement(closest);
	});

	$('.sectionContent, .experienceDetails').on('hidden.bs.collapse');

	window.location.hash = $(e.currentTarget).closest('.section, .experience').attr('hash');
}

function OnShown(e) {
	e.stopPropagation();

	$('#profile').off('shown.bs.collapse');
}
