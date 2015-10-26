// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE
$('#toggle_img').click(function() {
	var shout = $('#toggle_img').text();
	if (shout === 'Go Away!') {
		$('#main_img').hide();
		$('#toggle_img').text('Come Back!');
	}
	else {
		$('#main_img').show();
		$('#toggle_img').text('Go Away!');
	}
});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() {
	var imgfile = $('#new_img_file').val();
	$('#main_img').attr('src','static/img/'+imgfile);
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	var imgsrc = $(this).attr('src');
	alert(imgsrc);
});

// Problem 5 (Imgrr) -------------------------------------------------
$('.small_image').click(function() {
	$('.big_image').attr('width','100px');
	$('.big_image').attr('height','100px');
	$('.big_image').attr('class','small_image');
	$(this).attr('width','200px');
	$(this).attr('height','200px');
	$(this).attr('class','big_image');
});