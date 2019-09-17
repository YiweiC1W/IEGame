let fishImage = new Image()
fishImage.src = 'Assets/nemo.png';

let fishImage2 = new Image()
fishImage2.src = 'Assets/crab.png';

let fishImage3 = new Image()
fishImage3.src = 'Assets/jellyfish.png';

let fishImage4 = new Image()
fishImage4.src = 'Assets/octopus.png';

let fishImage5 = new Image()
fishImage5.src = 'Assets/seahorse.png';

let fishImage6 = new Image()
fishImage6.src = 'Assets/shark.png';


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
rubbishImage7.src = 'RubbishImage/7.png';

let rubbishImage8 = new Image()
rubbishImage8.src = 'RubbishImage/8.png';

let rubbishImage9 = new Image()
rubbishImage9.src = 'RubbishImage/9.png';

let rubbishImage10 = new Image()
rubbishImage10.src = 'RubbishImage/10.png';

let rubbishImage11 = new Image()
rubbishImage11.src = 'RubbishImage/11.png';

let rubbishImage12 = new Image()
rubbishImage12.src = 'RubbishImage/12.png';

let rubbishImage13 = new Image()
rubbishImage13.src = 'RubbishImage/13.png';

let rubbishImage14 = new Image()
rubbishImage14.src = 'RubbishImage/14.png';

let rubbishImage15 = new Image()
rubbishImage15.src = 'RubbishImage/15.png';

let rubbishImage16 = new Image()
rubbishImage16.src = 'RubbishImage/16.png';

let rubbishImage17 = new Image()
rubbishImage17.src = 'RubbishImage/17.png';

let rubbishImage18 = new Image()
rubbishImage18.src = 'RubbishImage/18.png';

let rubbishImage19 = new Image()
rubbishImage19.src = 'RubbishImage/19.png';



let generalBinImage = new Image()
generalBinImage.src = 'BinImage/1.png';

let generalBinImageClose = new Image()
generalBinImageClose.src = 'BinImage/4.png';

let plasticBinImage = new Image()
plasticBinImage.src = 'BinImage/2.png';

let plasticBinImageClose = new Image()
plasticBinImageClose.src = 'BinImage/5.png';

let glassBinImage = new Image()
glassBinImage.src = 'BinImage/3.png';

let glassBinImageClose = new Image()
glassBinImageClose.src = 'BinImage/6.png';

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
let hitSound = new sound('Sound/hit.mp3', 0.4)
let clickSound = new sound('Sound/click.mp3', 0.5)

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

const lostScore = 10
const getScore = 50

let score = 0;
let showResult = false
let targetScore = 1020

// listen for mouse events
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmousemove = mouseMove;

var bkgd = new GameObject(0, 0, WIDTH-200, HEIGHT, 0, bkgdImage, 'bkgd', ctx, bkgdImage)
var fish = new GameObject(0, 400, 50, 50, 1, fishImage, 'fish', ctx, fishImage)
var fish2 = new GameObject(0, 50, 50, 50, 1, fishImage2, 'fish', ctx, fishImage2)
var fish3 = new GameObject(0, 50, 50, 50, 1, fishImage3, 'fish', ctx, fishImage3)
var fish4 = new GameObject(0, 50, 50, 50, 1, fishImage4, 'fish', ctx, fishImage4)
var fish5 = new GameObject(0, 50, 50, 50, 1, fishImage5, 'fish', ctx, fishImage5)
var fish6 = new GameObject(0, 50, 50, 50, 1, fishImage6, 'fish', ctx, fishImage6)


var rubbish1 = new GameObject(0, 300, 50, 50, 1, rubbishImage1, "recycle", ctx, rubbishImage1)
var rubbish2 = new GameObject(0, 200, 50, 50, 1, rubbishImage2, "recycle", ctx, rubbishImage2)
var rubbish3 = new GameObject(0, 500, 50, 50, 1, rubbishImage3, "recycle", ctx, rubbishImage3)
var rubbish4 = new GameObject(0, 100, 50, 50, 1, rubbishImage4, "organic", ctx, rubbishImage4)
var rubbish5 = new GameObject(0, 150, 50, 50, 1, rubbishImage5, "organic", ctx, rubbishImage5)
var rubbish6 = new GameObject(0, 350, 50, 50, 1, rubbishImage6, "organic", ctx, rubbishImage6)
var rubbish7 = new GameObject(0, 350, 50, 50, 1, rubbishImage7, "recycle", ctx, rubbishImage7)
var rubbish8 = new GameObject(0, 350, 50, 50, 1, rubbishImage8, "organic", ctx, rubbishImage8)
var rubbish9 = new GameObject(0, 350, 50, 50, 1, rubbishImage9, "recycle", ctx, rubbishImage9)
var rubbish10 = new GameObject(0, 350, 50, 50, 1, rubbishImage10, "recycle", ctx, rubbishImage10)
var rubbish11 = new GameObject(0, 350, 50, 50, 1, rubbishImage11, "general", ctx, rubbishImage11)
var rubbish12 = new GameObject(0, 350, 50, 50, 1, rubbishImage12, "general", ctx, rubbishImage12)
var rubbish13 = new GameObject(0, 350, 50, 50, 1, rubbishImage13, "general", ctx, rubbishImage13)
var rubbish14 = new GameObject(0, 350, 50, 50, 1, rubbishImage14, "general", ctx, rubbishImage14)
var rubbish15 = new GameObject(0, 350, 50, 50, 1, rubbishImage15, "recycle", ctx, rubbishImage15)
var rubbish16 = new GameObject(0, 350, 50, 50, 1, rubbishImage16, "general", ctx, rubbishImage16)
var rubbish17 = new GameObject(0, 350, 50, 50, 1, rubbishImage17, "general", ctx, rubbishImage17)
var rubbish18 = new GameObject(0, 350, 50, 50, 1, rubbishImage18, "general", ctx, rubbishImage18)
var rubbish19 = new GameObject(0, 350, 50, 50, 1, rubbishImage19, "organic", ctx, rubbishImage19)



var result = new GameObject(100, 100, 80, 80, 0, rightImage, "result", ctx, wrongImage)

var generalBin = new GameObject(WIDTH-200 + 5, 455, 200, 200, 0, generalBinImage, 'general', ctx, generalBinImageClose)
var recycleBin = new GameObject(WIDTH-200 + 5, 255, 200, 200, 0, plasticBinImage, 'recycle', ctx, plasticBinImageClose)
var organicBin = new GameObject(WIDTH-200 + 5, 55, 200, 200, 0, glassBinImage, 'organic', ctx, glassBinImageClose)


floatingStorage.push(fish)
floatingStorage.push(fish2)
floatingStorage.push(fish3)
floatingStorage.push(fish4)
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
floatingStorage.push.apply(floatingStorage,[fish5, fish6, rubbish6, rubbish7,rubbish8,rubbish9,rubbish10,rubbish11,rubbish12,rubbish13,rubbish14,rubbish15,rubbish16,rubbish17,rubbish18,rubbish19])


let pause = true


generateRandomFloating = function () {
    if (pause) {
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
binList.push(recycleBin);
binList.push(organicBin);

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
    bkgdMusic.play();
    bkgdSound.play();
    changeBackgroundColor();
    updatePosition();
}

changeBackgroundColor = function () {
    if (score < 0) {
        canvas.style.backgroundColor = 'rgb(61, 41, 41)';
    } else if (score < targetScore) {
        let color = Math.min(targetScore, score)
        let red = color * (196 - 61)/targetScore+ 61
        let green = color * (241 - 41)/targetScore + 41
        let blue = color * (255-41)/targetScore + 41
        canvas.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
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
        this.recycleBin.drawObject();
        this.organicBin.drawObject();
        if (showResult) {
            this.result.drawObject()
        }
        ctx.font = "30px Georgia";
        ctx.fillStyle = 'white'
        ctx.fillText("Score: " + score, WIDTH-200 + 25, 45);
        for (let i = 0; i < floatingList.length; i++) {
            let floating = floatingList[i]
            if (floating.isDragging == false) {
                floating.x = (floating.x + floating.speed)
                if (floating.x < WIDTH-200 - floating.width) {
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

document.onkeydown = function (e) {
    if (e.keyCode == 13) {
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
        if (floating.isDragging) {
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
                    dropRubbishSound.play()
                }
                else {
                    score = score - lostScore
                    result.isOpen = false //wrong
                    dropRubbishSound.play()
                    hitSound.stop()
                    hitSound.play()
                }
                
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
                openBinSound.play();
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

