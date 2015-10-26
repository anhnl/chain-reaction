alert('Find these trivial stuff that make you smile a little!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello world!');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#tickle').click(function() {
	$('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#greet').click(function() {
	var greetingName = $('#my_name').val()
	alert('How do you do, '+greetingName+'?');
});
