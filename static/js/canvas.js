$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
	$('#p1').click(function() {
		context.strokeRect(50, 50, 200, 400);
	});

	$('#p2').click(function() {
		context.strokeRect(80, 80, 250, 250);
	});

	$('#p3').click(function() {
		context.beginPath();
		context.arc(250, 200, 150, 1, 2);
		context.closePath();
		context.stroke();
	});

	$('#p4').click(function() {
		context.beginPath();
		context.arc(250, 200, 150, 1, 7);
		context.closePath();
		context.stroke();
	});

	$('#p5').click(function() {
		context.beginPath();
		context.moveTo(90, 200);
		context.lineTo(300, 400);
		context.closePath();
		context.stroke();
	});

	$('#p6').click(function() {
		context.strokeStyle='green';
		context.strokeRect(100, 100, 300, 200);
	});

	$('#p7').click(function() {
		context.fillStyle='red';
		context.strokeStyle='red';
		context.beginPath();
		context.arc(250, 250, 100, 1, 7);
		context.closePath();
		context.fill();
		context.stroke();
	});

	$('#p8').click(function() {
		context.fillStyle='yellow';
		context.strokeStyle='blue';
		context.strokeRect(200, 200, 150, 150);
		context.fillRect(200, 200, 150, 150);
	});

	$('#p9').click(function() {
		for (var i = 1; i <= 5; i++) {
			context.strokeStyle='black';
			context.strokeRect(i*50, 100, 50, 50);
		};
	});

	$('#p10').click(function() {
		for (var i = 1; i <= 100; i++) {
			context.strokeRect(i*5, 200, 5, 5);
		};
	});

	$('#p11').click(function() {
		for (var i = 0; i <= 5000; i++) {
			for (var j = 0; j <= 5000; j++) {
				context.strokeRect(i*5, j*5, 5, 5);
			}
		};
	});

	$('#p12').click(function() {
		for (var i = 1; i <= 20; i++) {
			context.beginPath();
			context.arc(300, 300, 8*i, 1, 7);
			context.closePath();
			context.stroke();
		};
	});
});