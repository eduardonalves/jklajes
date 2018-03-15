jQuery(".home .button").click(function(event) {
	event.preventDefault();

	jQuery('body').scrollTo(jQuery(this).attr('href'),1000);


});
