
$(document).on('click', 'a', function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
	return false;
});

$(document).on('click', '#map', function(){
	console.log("click");
	$('html, body').animate({
		scrollTop: $( $('g')).offset().top +350
	}, 500);
	return false;
});
