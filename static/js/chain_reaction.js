$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  var draw = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 1, 7);
    context.closePath();
    context.stroke();
    context.fill();
  };

  function clickToPlay() { //display welcome text
    context.fillStyle = 'black';
    context.font = '30px Arial';
    context.textAlign = 'center';
    context.fillText(menuText, 400, 300);
  };

  function addAtoms() { //display number of balls
    context.fillStyle = 'black';
    context.font = '12px Arial';
    context.textAlign = 'left';
    context.fillText("Atoms: " + levels[curLevel].numBalls, 0, 10);
  };

  function addReactions() { //display number of reactions
    context.fillStyle = 'black';
    context.font = '12px Arial';
    context.textAlign = 'left';
    context.fillText("Reactions: " + numReacted, 0, 25);
  };

  function addLevel() { //display number of reactions
    context.fillStyle = 'black';
    context.font = '12px Arial';
    context.textAlign = 'left';
    context.fillText(levelText, 0, 40);
  };

  //Global variables
  var levels = [];
  var curLevel = 0;
  var numLevels = 9;
  var gameState = "menu";
  var menuText = "Click to play!";
  var levelText = "Level 1 - React 1 out of 5 balls";
  var reactions = [];
  var reacting = false;
  var numReacted = 0;

  var balls =[];
  select_color = ['red', 'salmon', 'gray', 'green', 'lightgreen', 'darkgreen', 'blue', 'brown', 'yellow', 'violet','orange','cyan','teal'];

  for (var i=0; i<numLevels; i++) {
    levels.push({
      num: i+1,
      minReactions: 1+2*i,
      numBalls: 5+2*i,
    });
  }

  for (var i=0; i<levels[curLevel].numBalls; i++) {
    balls.push({
      x: width*Math.random(),
      y: height*Math.random(),
      r: 10,
      color: select_color[Math.round((select_color.length)*Math.random())],
      vx: 5*(-1+Math.random()*2),
      vy: 5*(-1+Math.random()*2),
    });
  }
  
  // Run an interation of the game
  var updateGame = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (gameState === "menu") {
      clickToPlay();
    }
    else if (gameState === "playing") {
      for (var i = 0; i < balls.length; i++) {

        var collided = false;

        for (var j = 0; j < reactions.length; j++) {
          
          var xdiff = Math.abs(balls[i].x - reactions[j].x);
          var ydiff = Math.abs(balls[i].y - reactions[j].y);
          var dist = Math.sqrt(xdiff*xdiff + ydiff*ydiff);

          if(dist < balls[i].r + reactions[j].r) {
            collided = true;
            numReacted++;
          }
        }

        if (collided === true) {
          reactions.push({
            x: balls[i].x,
            y: balls[i].y,
            r: 1,
            timer: 0,
          });       
          balls.splice(i,1);
          i--;
        }
      }
    
      for (var i=0; i<balls.length; i++) {
        draw(balls[i].x, balls[i].y, balls[i].r, balls[i].color);
        balls[i].x += balls[i].vx; balls[i].y += balls[i].vy;
        if ((balls[i].vx > 0 && balls[i].x + balls[i].r >= canvas.width)
          || (balls[i].vx < 0 && balls[i].x - balls[i].r <= 0)) {
          balls[i].vx = -balls[i].vx;
        }
        else if ((balls[i].vy > 0 && balls[i].y + balls[i].r >= canvas.height)
          || (balls[i].vy < 0 && balls[i].y - balls[i].r <= 0)) {
          balls[i].vy = -balls[i].vy;
        }
      }

      for (var i=0; i<reactions.length; i++) {
        reactions[i].timer++;
        if (reactions[i].timer > 200 && reactions[i].r > 0) {
          reactions[i].r--;
        }
        else if (reactions[i].r < 40) {
          reactions[i].r++;
        }
        draw(reactions[i].x, reactions[i].y, reactions[i].r, reactions[i].color);
        if (reactions[i].r === 0) {
          reactions.splice(i,1);
          i--;
        }
      }

      if (reacting === true && reactions.length === 0) {
        if (numReacted >= levels[curLevel].minReactions) {
          if (levels[curLevel].num === numLevels) {
            menuText = "You beat the entire game! Want to play again?";
            curLevel = 0;
          }
          else {
            curLevel++;
            menuText = "You win! Click for level " + levels[curLevel].num;
          }
        }
        else {
          menuText = "Game Over! You reacted "+numReacted+" balls. Resetting game..." ;
          curLevel = 0;
          clickToPlay();
        }
        gameState = "menu";
      }
      addAtoms();
      addReactions();
      addLevel();
    }
    
    requestAnimationFrame(updateGame, 5)
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    if (gameState === "menu") {
      reacting = false;
      numReacted = 0;
      balls = [];
      for (var i=0; i<levels[curLevel].numBalls; i++) {
        balls.push({
          x: width*Math.random(),
          y: height*Math.random(),
          r: 10,
          color: select_color[Math.round((select_color.length)*Math.random())],
          vx: 5*(-1+Math.random()*2),
          vy: 5*(-1+Math.random()*2),
        });
      }
      gameState = "playing";
      var a = levels[curLevel].num;
      var b = levels[curLevel].minReactions;
      var c = levels[curLevel].numBalls;
      levelText = "Level " + a + " - React " + b + " out of " + c + " balls";
    }
    else if (gameState === "playing" && reacting === false) {  
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
      reactions.push({
        x: x,
        y: y,
        r: 1,
        timer: 0,
        color: select_color[Math.round((select_color.length)*Math.random())],
      });
      reacting = true;
    }
  });

  updateGame();
  
});
