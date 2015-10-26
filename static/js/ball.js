$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 1, 7);
    context.closePath();
    context.stroke();
    context.fill();
  };

  var ball1 = {x:20,y:20,r:20,color:'black',vx:5,vy:5};
  var ball2 = {x:20,y:20,r:30,color:'red',vx:8,vy:8};

  //run an iteration of the game
  var updateGame = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(ball1.x, ball1.y, ball1.r, ball1.color);
    ball1.x += ball1.vx; ball1.y += ball1.vy;
    if ((ball1.vx > 0 && ball1.x + ball1.r >= canvas.width)
      || (ball1.vx < 0 && ball1.x - ball1.r <= 0)) {
      ball1.vx = -ball1.vx;
    }
    else if ((ball1.vy > 0 && ball1.y + ball1.r >= canvas.height)
      || (ball1.vy < 0 && ball1.y - ball1.r <= 0)) {
      ball1.vy = -ball1.vy;
    }

    drawCircle(ball2.x, ball2.y, ball2.r, ball2.color);
    ball2.x += ball2.vx; ball2.y += ball2.vy;
    if ((ball2.vx > 0 && ball2.x + ball2.r >= canvas.width)
      || (ball2.vx < 0 && ball2.x - ball2.r <= 0)) {
      ball2.vx = -ball2.vx;
    }
    else if ((ball2.vy > 0 && ball2.y + ball2.r >= canvas.height)
      || (ball2.vy < 0 && ball2.y - ball2.r <= 0)) {
      ball2.vy = -ball2.vy;
    }
    setTimeout(updateGame, 10)
  };

  updateGame();

  $('#canvas').click(function() {
    ball1.vx = ball1.vx-0.3*ball1.vy;
    ball2.vy = ball2.vy-0.3*ball2.vy;
  });

});
