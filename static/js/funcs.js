$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle = color;
    context.strokeRect(x, y, sideLen, sideLen);
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 1, 7);
    context.closePath();
    context.stroke();
  };

  var drawTriplet = function(x, y, color) {
    var r = 70;
    drawCircle(x+r, y+r*2+20, r, color);//lower left
    drawCircle(x+r+50, y+r, r, color);//upper
    drawCircle(x+r+50*2, y+r*2+20, r, color);//lower right
  };

  var drawTriangle = function(x, y, sideLen, color) {
    var h = sideLen * (Math.sqrt(3)/2);
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x+(h/2), y);
    context.lineTo(x, y+h);
    context.lineTo(x+h, y+h);
    context.closePath();
    context.stroke();
    context.fill();
  };

  var drawTriforce = function(x, y, color) {
    var h = 50;
    var s = h/(Math.sqrt(3)/2);
    drawTriangle(x+h/2, y, s, color);
    drawTriangle(x, y+h, s, color);
    drawTriangle(x+h, y+h, s, color);
  };

  var drawTripleTriforce = function(x, y, color) {
    var h = 100;
    drawTriforce(x+h/2, y, color);
    drawTriforce(x, y+h, color);
    drawTriforce(x+h, y+h, color);
  };

  var drawSierpinski = function(x, y, color) {
    var h = 200;
    drawTripleTriforce(x+h/2, y, color);
    drawTripleTriforce(x, y+h, color);
    drawTripleTriforce(x+h, y+h, color);
  };
  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(150, 150, 100, 'red');
    drawCircle(200, 200, 50, 'blue');
    drawCircle(150, 200, 50, 'green');
    drawCircle(250, 200, 50, 'green');
    drawCircle(200, 150, 50, 'green');
    drawCircle(200, 250, 50, 'green');
  });

  $('#p6').click(function() {
    drawTriplet(150, 150, 'green');
  });

  $('#p7').click(function() {
    drawTriplet(130, 270, 'blue');
  });

  $('#p8').click(function() {
    drawTriplet(80, 80, 'blue');
    drawTriplet(160, 160, 'red');
    drawTriplet(240, 240, 'green');
    drawTriplet(40, 80, 'yellow');
  });

  $('#p9').click(function() {
    drawTriangle(200, 200, 80,'crimson');
  });

  $('#p10').click(function() {
    drawTriforce(270, 270,'darkgreen');
  });

  $('#p11').click(function() {
    drawTripleTriforce(150, 150,'lightblue');
  });

  $('#p12').click(function() {
    drawSierpinski(80, 80,'orange');
  });

});
