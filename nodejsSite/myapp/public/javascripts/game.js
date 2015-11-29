
  var bc = 0;

  game = new Array();
  game.width = 960;
  game.height = 600;
  game.robotmode = false;
  
  paddle = new Array();
  paddle.length = 200;
  paddle.height = 20;
  paddle.x = game.width/2;
  paddle.y = game.height-paddle.height/2;
  paddle.move = 5;
  paddle.colour = "rgb(255, 0, 0)";
  paddle.left = false;
  paddle.right = false;
  
  ball = new Array();
  ball.radius = 15;
  ball.move = 8;
  ball.mx = 0;
  ball.my = 0;
  ball.activated = false;
  ball.colour = "rgb(0, 255, 255)";
  ball.x = game.width/2;
  ball.y = game.height-paddle.height-ball.radius;
  ball.angle = Math.PI/2;
  
  block = new Array();
  block.size = 60;
  block.length = block.size*2;
  block.height = block.size;
  block.paddingsides = block.size*3;
  block.paddingtop = block.size;
  block.rows = Math.floor(game.height/(block.height*3/2));
  block.cols = Math.floor((game.width-block.paddingsides*2)/block.length);
  
  blocks = new Array();
  
  function generateBlocks() {
    for (var i = 0; i < block.rows; i++) {
      blocks[i] = new Array();
    }
    var thedecider = 0;
    for (var iii = 0; iii < block.rows; iii++) {
      var textstring = "";
      for (var jjj = 0; jjj < block.cols; jjj++) {
        blocks[iii][jjj] = new Array();
        blocks[iii][jjj].x = block.paddingsides+(jjj+0.5)*block.length;
        blocks[iii][jjj].y = block.paddingtop+(iii+0.5)*block.height;;
        blocks[iii][jjj].colour = randomColour(null, Math.abs(255-thedecider), 0, Math.abs(0-thedecider), 1.0);
        blocks[iii][jjj].enabled = true;
      }
    }
  }
  
  function keypresseddown(e) {
    e = e || window.event;
    if (e.keyCode == 37) {
      paddle.left = true;
      paddle.right = false;
    } else if (e.keyCode == 39) {
      paddle.right = true;
      paddle.left = false;
    } else if ((e.keyCode == 0 || e.keyCode == 32) && ball.activated == false) {
      if (Math.abs(ball.x-paddle.x) < ball.radius + paddle.length/2) {
        launchball(null);
      } else {}
    } else {}
  }
  
  function keypressedup(e) {
    e = e || window.event;
    if (e.keyCode == 37) {
      paddle.left = false;
      clearInterval(timer);
    } else if (e.keyCode == 39) {
      paddle.right = false;
      clearInterval(timer);
    } else {}
}   

  window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 50);
    };
  })();
  
  var timer;
  
  window.onload=function(){ 
    clearCanvas();
    generateBlocks();
    window.addEventListener("keydown", keypresseddown, false);
    window.addEventListener("keyup", keypressedup, false);
    animate(); 
    timer = setInterval(robotstart, 5000);
  };
  
  function robotstart() {
    if (ball.activated == false) {
      console.log("ROBOT READY");
      game.robotmode = true;
      launchball(ball.move);
      clearInterval(timer);
    }
  }
  
  function clearCanvas() {
    var a = document.getElementById("thecanvas");
    a.width = game.width;
    a.height = game.height; 
  }
  
  
  function randomColour(a, r, g, b, o) {
    if (r == null) { r = 0; }
    else { r += Math.floor(Math.random() * (256 - r)); }
    if (g == null) { g = 0; }
    else { g += Math.floor(Math.random() * (256 - g)); }
    if (b == null) { b = 0; }
    else { b += Math.floor(Math.random() * (256 - b)); }
    
    if (a != null) {
      a += Math.floor(Math.random() * (256 - a)); 
      if (r > 0) { r = a; }
      if (g > 0) { g = a; }
      if (b > 0) { b = a; }
    } 
    return "rgba(" + r + "," + g + "," + b + "," + o + ")";
  }
  
  function backgroundColour(c) {
    var r = 0;
    var g = 0;
    var b = 0;
    if (c <= 255) {
      r = c;
      g = c;
    } else if (c <= (255 * 2)) {
      r = 255 + (255 - c);
      g = 255;
    } else if (c <= (255 * 3)) {
      g = 255;
      b = c - (225 * 2);
    } else if (c <= (255 * 4)) {
      g = 255 + ((255 * 3) - c);
      b = 255;      
    } else {
      b = 255 + ((255 * 4) - c);
      if (c >= (255 * 5)) {
        bc = 0;
      }
    }   
    return "rgba(" + r + "," + g + "," + b + "," + 0.3 + ")";
  }
  
  function launchball(g) {
    //console.log("LAUNCH!");
    var variation = ball.x - paddle.x;
    //console.log(variation);
    if (ball.activated == false) {
      if (game.robotmode == true) {
        ball.angle =  Math.PI*5/8+Math.random()*Math.PI/8;
        if (Math.random() > 0.5) { 
          ball.angle -= Math.PI/2;
          console.log("also this " + ball.angle)
        }
      } else {
        ball.angle =  Math.PI/2 - variation/paddle.length;
      }
      ball.mx = ball.move*Math.cos(ball.angle);
      ball.my = -ball.move*Math.sin(ball.angle);
    } else {
      if (Math.abs(variation) < paddle.length/4) {
        ball.my = -ball.my
      } else {
        if (variation < 0) {
          ball.angle = Math.PI/2 + (Math.PI/4)*(Math.abs(variation)-paddle.length/4)/(paddle.length/4);
        } else {
          ball.angle = Math.PI/2 - (Math.PI/4)*(Math.abs(variation)-paddle.length/4)/(paddle.length/4);
        }
        ball.mx = ball.move*Math.cos(ball.angle);
        ball.my = -ball.move*Math.sin(ball.angle);
      }
    }
    if (g != null) {
      var variatio = variation/(paddle.length/2);
      ball.x += g * ball.mx;
      ball.y += g * ball.my;
    }
    ball.activated = true;
  //  console.log(ball.angle);
  }
  
  function ballmove() {
  
    if (ball.y > game.height+200 || ball.y < -200 || ball.x > game.width + 200 || ball.x < - 200) {
      ball.activated = false;
      ball.x = game.width/2;
      ball.y = game.height-paddle.height-ball.radius;
      timer = setInterval(robotstart, 5000);
      return;
    }
  
    // if ball the ball would collide with the left wall
    if (((ball.x - ball.radius + ball.mx) <= 0) && (ball.mx < 0)) {
      // find how far the wall is away in the x direction
      var dist = ball.x - ball.radius;
      // work out reflected point
      ball.x = (-ball.mx + dist) + ball.radius;
      ball.y += ball.my;
      // flip x speed
      ball.mx = -ball.mx;
      return;
    // if the ball would collide with the right wall
    } else if ((ball.x + ball.radius + ball.mx >= game.width) && ball.mx > 0) {
      var dist = game.width - (ball.x + ball.radius)
      ball.x = game.width - (ball.mx - dist + ball.radius);
      ball.y += ball.my;
      ball.mx = -ball.mx
      return
    // if the ball would collide with the top wall
    } else if ((ball.y - ball.radius + ball.my) <= 0 && ball.my < 0) {
      // find out how far the wall is away in the y direction
      var dist = ball.y - ball.radius;
      ball.y = ball.radius + dist - ball.my;
      ball.x += ball.mx; 
      ball.my = -ball.my;
      return
    // but what about if it collides with the paddle?
    } else if (ball.my > 0) {
      if ((Math.abs(ball.x-paddle.x+ball.mx) < (paddle.length/2 + ball.radius)) && (Math.abs(ball.y+ball.my-paddle.y) < (paddle.height/2 + ball.radius))) {
        var xratio = Math.abs((ball.x-paddle.x+ball.mx)/(paddle.length/2 + ball.radius));
        var yratio = Math.abs((ball.y+ball.my-paddle.y)/(paddle.height/2 + ball.radius));
        var ratio = Math.min(xratio, yratio);
        ball.x += ball.mx * ratio;
        ball.y += ball.my * ratio;
        launchball(1 - ratio);
        return
      }
    } else {}
    
    for (var iii = 0; iii < block.rows; iii++) {
      for (var jjj = 0; jjj < block.cols; jjj++) {
        if (blocks[iii][jjj].enabled == true) {
          if (ball.my < 0) {
            if (((ball.y + ball.my) <= (blocks[iii][jjj].y + block.height/2 + ball.radius))) {
              if (Math.abs((ball.x + ball.mx) - blocks[iii][jjj].x) < (block.length/2 + ball.radius/2)) {
                var dist = (ball.y - ball.radius) - (blocks[iii][jjj].y + block.height/2);
                if (Math.abs(dist) <= Math.abs(ball.my)) {
                  ball.x += ball.mx;
                  ball.y = blocks[iii][jjj].y + block.height/2 + ball.radius + dist + ball.my;
                  ball.my = -ball.my;
                  blocks[iii][jjj].enabled = false;
                  return;
                } else {}
              }
            }
          }
          if (ball.my > 0) {
            if (((ball.y + ball.my) >= (blocks[iii][jjj].y - block.height/2 - ball.radius))) {
              if (Math.abs((ball.x + ball.mx) - blocks[iii][jjj].x) < (block.length/2 + ball.radius/2)) {
                var dist = (blocks[iii][jjj].y - block.height/2) - (ball.y + ball.radius);
                if (Math.abs(dist) <= Math.abs(ball.my)) {
                  ball.x += ball.mx;
                  ball.y = blocks[iii][jjj].y - block.height/2 - ball.radius + dist - ball.my;
                  ball.my = -ball.my;
                  blocks[iii][jjj].enabled = false;
                  return;
                } else {}
              }
            } 
          }
          if (ball.mx < 0) {
            if (((ball.x + ball.mx) <= (blocks[iii][jjj].x + block.length/2 + ball.radius))) {
              if (Math.abs((ball.y + ball.my) - blocks[iii][jjj].y) < (block.height/2 + ball.radius/2)) {
                var dist = (ball.x - ball.radius) - (blocks[iii][jjj].x + block.length/2);
                if (Math.abs(dist) <= Math.abs(ball.mx)) {
                  ball.y += ball.my;
                  ball.x = blocks[iii][jjj].x + block.length/2 + ball.radius + dist + ball.mx;
                  ball.mx = -ball.mx;
                  blocks[iii][jjj].enabled = false;
                  return;
                } else {}
              }
            }
          }
          if (ball.mx > 0) {
            if (((ball.x + ball.mx) >= (blocks[iii][jjj].x - block.length/2 - ball.radius))) {
              if (Math.abs((ball.y + ball.my) - blocks[iii][jjj].y) < (block.height/2 + ball.radius/2)) {
                var dist = (blocks[iii][jjj].x - block.length/2) - (ball.x + ball.radius);
                if (Math.abs(dist) <= Math.abs(ball.mx)) {
                  ball.y += ball.my;
                  ball.x = blocks[iii][jjj].x - block.length/2 - ball.radius + dist - ball.mx;
                  ball.mx = -ball.mx;
                  blocks[iii][jjj].enabled = false;
                  return;
                } else {}
              }
            } 
          }
        }
      }
    }
    
    ball.x += ball.mx;
    ball.y += ball.my;
  }
  


  function animate() {
    clearCanvas();
    var c = document.getElementById("thecanvas");
    var ctx = c.getContext("2d");
    
    // background colour
    ctx.fillStyle = backgroundColour(bc);
    ctx.fillRect(0, 0, game.width, game.height);
    bc += 5;
    
    // lineup picture
    var lineup = document.getElementById("lineup");
    ctx.drawImage(lineup, 200, 82);

    // draw blocks
    for (var iii = 0; iii < block.rows; iii++) {
      for (var jjj = 0; jjj < block.cols; jjj++) {
        if (blocks[iii][jjj].enabled == true ) {
          ctx.fillStyle = blocks[iii][jjj].colour;
          ctx.fillRect(blocks[iii][jjj].x-0.5*block.length, blocks[iii][jjj].y-0.5*block.height, block.length, block.height);
        }
      }
    }
    

    
    
    //draw ball
    if (ball.activated == true) { ballmove(); }
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = ball.colour;
    ctx.fill();
    
    //draw paddle
    if (paddle.left == true && paddle.x > 0) {
      paddle.x -= paddle.move; 
      game.robotmode = false;
    } else if (paddle.right == true && paddle.x < game.width) {
      paddle.x += paddle.move;
      game.robotmode = false;
    } else if (game.robotmode == true) {
      paddle.x = ball.x;
    }
    
    ctx.fillStyle = paddle.colour;
    ctx.fillRect(paddle.x-paddle.length/2, paddle.y-paddle.height/2, paddle.length, paddle.height);
    
    
    requestAnimFrame(function() {
      animate();
    });
  }