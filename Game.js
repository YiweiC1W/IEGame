let fishImage = new Image()
fishImage.src = 'Assets/nemo.png';

let fishImage2 = new Image()
fishImage2.src = 'Assets/crab.png';

let fishImage3 = new Image()
fishImage3.src = 'Assets/jellyfish.png';

let fishImage4 = new Image()
fishImage4.src = 'Assets/octopus.png';


let bkgdImage = new Image()
bkgdImage.src = 'Assets/background.png';

let rubbishImage1 = new Image()
rubbishImage1.src = 'RubbishImage/1.png';

let rubbishImage2 = new Image()
rubbishImage2.src = 'RubbishImage/2.png';

let rubbishImage3 = new Image()
rubbishImage3.src = 'RubbishImage/3.png';

let rubbishImage4 = new Image()
rubbishImage4.src = 'RubbishImage/4.png';

let rubbishImage5 = new Image()
rubbishImage5.src = 'RubbishImage/5.png';

let rubbishImage6 = new Image()
rubbishImage6.src = 'RubbishImage/6.png';

let rubbishImage7 = new Image()
rubbishImage7.src = 'Assets/treasure.png';


let generalBinImage = new Image()
generalBinImage.src = 'BinImage/bin1.png';

let generalBinImageClose = new Image()
generalBinImageClose.src = 'BinImage/1-1.png';

let plasticBinImage = new Image()
plasticBinImage.src = 'BinImage/bin2.png';

let plasticBinImageClose = new Image()
plasticBinImageClose.src = 'BinImage/2-1.png';

let glassBinImage = new Image()
glassBinImage.src = 'BinImage/bin3.png';

let glassBinImageClose = new Image()
glassBinImageClose.src = 'BinImage/3-1.png';

let rightImage = new Image()
rightImage.src = 'BinImage/cool.png';

let wrongImage = new Image();
wrongImage.src = 'BinImage/error.png';

let bkgdMusic = new sound('Sound/bkgdmusic.mp3', 0.1)
let bkgdSound = new sound('Sound/river.mp3', 0.3)
let winSound = new sound('Sound/win.mp3')
let failSound = new sound('Sound/fail.mp3')
let openBinSound = new sound('Sound/openBin.mp3', 1)
let dropRubbishSound = new sound('Sound/dropRubbish.mp3', 1)
let hitSound = new sound('Sound/hit.mp3', 0.7)
let clickSound = new sound('Sound/click.mp3', 1)

let floatingList = [];
let floatingStorage = [];
let binList = []

const canvas = document.getElementById("ctx");
const ctx = canvas.getContext("2d");
const BB = canvas.getBoundingClientRect();
const offsetX = BB.left;
const offsetY = BB.top;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const lostScore = 20
const getScore = 100

let score = 0;
let showResult = false

// listen for mouse events
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmousemove = mouseMove;

var bkgd = new GameObject(0, 0, HEIGHT, HEIGHT, 0, bkgdImage, 'bkgd', ctx, bkgdImage)
var fish = new GameObject(0, 400, 50, 50, 1, fishImage, 'fish', ctx, fishImage)
var fish2 = new GameObject(0, 50, 50, 50, 1, fishImage2, 'fish', ctx, fishImage2)
var fish3 = new GameObject(0, 50, 50, 50, 1, fishImage3, 'fish', ctx, fishImage3)
var fish4 = new GameObject(0, 50, 50, 50, 1, fishImage4, 'fish', ctx, fishImage4)
var rubbish1 = new GameObject(0, 300, 50, 50, 1, rubbishImage1, "glass", ctx, rubbishImage1)
var rubbish2 = new GameObject(0, 200, 50, 50, 1, rubbishImage2, "glass", ctx, rubbishImage2)
var rubbish3 = new GameObject(0, 500, 50, 50, 1, rubbishImage3, "plastic", ctx, rubbishImage3)
var rubbish4 = new GameObject(0, 100, 50, 50, 1, rubbishImage4, "general", ctx, rubbishImage4)
var rubbish5 = new GameObject(0, 150, 50, 50, 1, rubbishImage5, "general", ctx, rubbishImage5)
var rubbish6 = new GameObject(0, 350, 50, 50, 1, rubbishImage6, "general", ctx, rubbishImage6)
var rubbish7 = new GameObject(0, 350, 50, 50, 1, rubbishImage7, "treasure", ctx, rubbishImage7)

var result = new GameObject(100, 100, 80, 80, 0, rightImage, "result", ctx, wrongImage)

var generalBin = new GameObject(HEIGHT + 15, 475, 175, 175, 0, generalBinImage, 'general', ctx, generalBinImageClose)
var plasticBin = new GameObject(HEIGHT + 15, 300, 175, 175, 0, plasticBinImage, 'plastic', ctx, plasticBinImageClose)
var glassBin = new GameObject(HEIGHT + 15, 125, 175, 175, 0, glassBinImage, 'glass', ctx, glassBinImageClose)


floatingStorage.push(fish)
floatingStorage.push(fish2)
floatingStorage.push(fish3)
floatingStorage.push(fish4)
floatingStorage.push(rubbish1)
floatingStorage.push(rubbish2)
floatingStorage.push(rubbish3)
floatingStorage.push(rubbish4)
floatingStorage.push(rubbish5)
floatingStorage.push(rubbish6)

let pause = false


generateRandomFloating = function () {
    if (pause){
        return
    }
    floatingStorage = shuffle(floatingStorage);
    selectedObject = floatingStorage[0];
    randomY = Math.floor(Math.random() * 600) - 10
    randomSpeed = 1
    r = Math.random()
    if (r > 0.8) {
        randomSpeed = 2
    }
    let newFloating = new GameObject(selectedObject.x, randomY, 90, 90, randomSpeed, selectedObject.img, selectedObject.type, selectedObject.ctx, selectedObject.closeImg)
    floatingList.push(newFloating)
}

shuffle = function (a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

binList.push(generalBin);
binList.push(plasticBin);
binList.push(glassBin);

// drag related variables
var dragok = false;
var startX;
var startY;

window.onload = function () {
    intervalVar = setInterval(runGame, 10); // 100 fps game
    resultVar = setInterval(hideResult, 800)
    floatingVar = setInterval(generateRandomFloating, 1000)
}

runGame = function () {
    bkgdMusic.play()
    bkgdSound.play()
    let blue = 0
    if (score < 0) {
        blue = 0
        canvas.style.backgroundColor = 'black';
    }
    else if (score < 1020) {
        blue = score / 4
        let red = score / 8
        let green = score / 6
        canvas.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
    else {
        canvas.style.backgroundColor = 'rgb(143, 210, 255)'
    }
    updatePosition();

}

hideResult = function () {
    showResult = false
}

updatePosition = function () {
    if (pause) {
        return
    }
    else {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        //this.generalBin.drawObject();
        this.bkgd.drawObject();
        this.generalBin.drawObject();
        this.glassBin.drawObject();
        this.plasticBin.drawObject();
        if (showResult) {
            this.result.drawObject()
        }
        ctx.font = "30px Georgia";
        ctx.fillStyle = 'white'
        ctx.fillText("Score: " + score, HEIGHT + 25, 45);
        for (let i = 0; i < floatingList.length; i++) {
            let floating = floatingList[i]
            if (floating.isDragging == false) {
                floating.x = (floating.x + floating.speed)
                if (floating.x < HEIGHT - floating.width) {
                    floating.drawObject()
                } else {

                    if ((!floating.isDragging) && floating.type != 'fish') {
                        score = score - lostScore
                        showResult = true
                        result.x = floating.x + 30
                        result.y = floating.y
                        result.isOpen = false

                        hitSound.stop()
                        hitSound.play()
                    }
                    floatingList.splice(i, 1)
                    i = i - 1
                }
            }
            else {
                floating.drawObject()
            }

        }
    }
}

document.onkeydown = function(e){
    if (e.keyCode == 13){
        pause = !pause
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
            floating.x -= 5
            floating.y -= 5
            floating.isDragging = true
            dragok = true;
            clickSound.play()
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

    for (let i = 0; i < floatingList.length; i++) {
        let floating = floatingList[i]
        if (floating.isDragging){
                floating.x += 5
                floating.y += 5
        }
        floating.isDragging = false
        for (let bin of binList) {
            bin.isOpen = false;
            if (isCollide(floating, bin)) {
                showResult = true
                result.x = bin.x
                result.y = bin.y
                if (floating.type === bin.type) {
                    score = score + getScore
                    result.isOpen = true //right

                }
                else {
                    score = score - lostScore
                    result.isOpen = false //wrong
                    hitSound.stop()
                    hitSound.play()
                }
                dropRubbishSound.play()
                floatingList.splice(i, 1)
                i = i - 1
            }
        }
    }
}

function mouseMove(e) {
    if (dragok) {

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);

        for (let bin of binList) {
            if (bin.isMouseInObject(mx, my)) {
                bin.isOpen = true;
                openBinSound.play()
            }
            else {
                bin.isOpen = false;
            }
        }

        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove
        for (let floating of floatingList) {
            if (floating.isDragging) {
                floating.x += dx;
                floating.y += dy
            }
        }
    }
    startX = mx;
    startY = my;
}

function sound(src, volume = 0) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.volume = volume
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play(); //没有就播放 
    }
    this.stop = function () {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}

