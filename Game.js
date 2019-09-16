let fishImage = new Image()
fishImage.src = 'Assets/card_blowfish.png';

let bkgdImage = new Image()
bkgdImage.src = 'Assets/background.png';

let rubbishImage = new Image()
rubbishImage.src = 'Rubbish Image /1.png';

let generalBinImage = new Image()
generalBinImage.src = 'General waste/2.png';

let plasticBinImage = new Image()
plasticBinImage.src = 'General waste/3.png';

let glassBinImage = new Image()
glassBinImage.src = 'General waste/4.png';

let floatingList = [];
let binList = []

const canvas = document.getElementById("ctx");
const ctx = canvas.getContext("2d");
const BB = canvas.getBoundingClientRect();
const offsetX = BB.left;
const offsetY = BB.top;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let socre = 0;

// listen for mouse events
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmousemove = mouseMove;

var bkgd = new GameObject(0, 0, HEIGHT, HEIGHT, 0, bkgdImage, 'bkgd', ctx)
var fish = new GameObject(0, 400, 30, 30, 1, fishImage, 'fish', ctx)
var fish2 = new GameObject(0, 50, 30, 30, 1, fishImage, 'fish', ctx)
var rubbish1 = new GameObject(0, 300, 30, 30, 1, rubbishImage, "rubbish1", ctx)

var generalBin = new GameObject(HEIGHT + 15, 475, 175, 175, 0, generalBinImage, 'bin', ctx)
var plasticBin = new GameObject(HEIGHT + 15, 300, 175, 175, 0, plasticBinImage, 'bin', ctx)
var glassBin = new GameObject(HEIGHT + 15, 125, 175, 175, 0, glassBinImage, 'bin', ctx)

const binGeneral = 

floatingList.push(fish)
floatingList.push(fish2)
floatingList.push(rubbish1)

binList.push(generalBin);
binList.push(plasticBin);
binList.push(glassBin);

// drag related variables
var dragok = false;
var startX;
var startY;

window.onload = function () {
    intervalVar = setInterval(runGame, 10); // 100 fps game
}

runGame = function(){
    updatePosition();
    
}

updatePosition = function () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    //this.generalBin.drwaObject();
    this.bkgd.drwaObject();
    this.generalBin.drwaObject();
    this.glassBin.drwaObject();
    this.plasticBin.drwaObject();
    ctx.font="30px Georgia";
    ctx.fillText("Score: " + socre, HEIGHT + 35, 55);
    for (let floating of floatingList) {
        if (floating.isDragging == false) {
            floating.x = (floating.x + floating.speed) % (HEIGHT - 40 )
        }
        //floating.y = (floating.y + floating.speed)% 500
        floating.drwaObject()
    }
}




function mouseDown(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    dragok = false;
    for (let floating of floatingList) {
        if (floating.isMouseInObject(mx, my)) {
            floating.isDragging = true
            dragok=true;
        }
    }
    // save the current mouse position
    startX = mx;
    startY = my;
}

function mouseUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    for (let floating of floatingList) {
        floating.isDragging = false
    }

    for (let floating of floatingList) {
        for (let bin of binList){
            if (isCollide(floating, bin)){
                socre ++
            }
        }
    }
}

function mouseMove(e) {
    if (true) {

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);

        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove
        for (let floating of floatingList) {
            if (floating.isDragging){
                floating.x += dx;
                floating.y += dy
            }
        }
    }
    startX=mx;
    startY=my;
}


