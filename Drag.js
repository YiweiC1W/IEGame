// get canvas related references
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var BB=canvas.getBoundingClientRect();
var offsetX=BB.left;
var offsetY=BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

// drag related variables
var dragok = false;
var startX;
var startY;

// an array of objects that define different shapes
var shapes=[];
// define 2 rectangles
shapes.push({x:10,y:100,width:30,height:30,fill:"#444444",isDragging:false});
shapes.push({x:80,y:100,width:30,height:30,fill:"#ff550d",isDragging:false});
// define 2 circles
shapes.push({x:150,y:100,r:10,fill:"#800080",isDragging:false});
shapes.push({x:200,y:100,r:10,fill:"#0c64e8",isDragging:false});

// listen for mouse events
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;

// call to draw the scene
draw();

// draw a single rect
function rect(r) {
    ctx.fillStyle=r.fill;
    ctx.fillRect(r.x,r.y,r.width,r.height);
  }

// draw a single rect
function circle(c) {
    ctx.fillStyle=c.fill;
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
  }
  
  // clear the canvas
  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
  
  // redraw the scene
  function draw() {
    clear();
    // redraw each shape in the shapes[] array
    for(var i=0;i<shapes.length;i++){
      // decide if the shape is a rect or circle
      // (it's a rect if it has a width property)
      if(shapes[i].width){
        rect(shapes[i]);
      }else{
        circle(shapes[i]);
      };
    }
  }
  
  
  // handle mousedown events
  function myDown(e){
  
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();
  
    // get the current mouse position
    var mx=parseInt(e.clientX-offsetX);
    var my=parseInt(e.clientY-offsetY);
  
    // test each shape to see if mouse is inside
    dragok=false;
    for(var i=0;i<shapes.length;i++){
      var s=shapes[i];
      // decide if the shape is a rect or circle               
      if(s.width){
        // test if the mouse is inside this rect
        if(mx>s.x && mx<s.x+s.width && my>s.y && my<s.y+s.height){
          // if yes, set that rects isDragging=true
          dragok=true;
          s.isDragging=true;
        }
      }else{
        var dx=s.x-mx;
        var dy=s.y-my;
        // test if the mouse is inside this circle
        if(dx*dx+dy*dy<s.r*s.r){
          dragok=true;
          s.isDragging=true;
        }
      }
    }
    // save the current mouse position
    startX=mx;
    startY=my;
  }
  
  
  // handle mouseup events
  function myUp(e){
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();
  
    // clear all the dragging flags
    dragok = false;
    for(var i=0;i<shapes.length;i++){
      shapes[i].isDragging=false;
    }
  }
  
  
  // handle mouse moves
  function myMove(e){
    // if we're dragging anything...
    if (dragok){
  
      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation();
  
      // get the current mouse position
      var mx=parseInt(e.clientX-offsetX);
      var my=parseInt(e.clientY-offsetY);
  
      // calculate the distance the mouse has moved
      // since the last mousemove
      var dx=mx-startX;
      var dy=my-startY;
  
      // move each rect that isDragging 
      // by the distance the mouse has moved
      // since the last mousemove
      for(var i=0;i<shapes.length;i++){
        var s=shapes[i];
        if(s.isDragging){
          s.x+=dx;
          s.y+=dy;
        }
      }
  
      // redraw the scene with the new rect positions
      draw();
  
      // reset the starting mouse position for the next mousemove
      startX=mx;
      startY=my;
  
    }
  }