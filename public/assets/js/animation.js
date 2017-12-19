
$(document).on('click', 'a', function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
	return false;
});
