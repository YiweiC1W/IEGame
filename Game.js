let fishImage = new Image()
    fishImage.src = 'Assets/card_blowfish.png';

let bkgdImage = new Image()
    bkgdImage.src = 'Assets/background.png';

let rubbishImage = new Image()
    rubbishImage.src = 'Rubbish Image /1.png';

let floatingList = [];

var bkgd = new GameObject(0,0,600,500, 0, bkgdImage, 'bkgd')
var fish = new GameObject(0, 400, 30, 30, 1, fishImage, 'fish')
var fish2 = new GameObject(0, 50, 30, 30, 1, fishImage, 'fish')  
var rubbish1 = new GameObject(0, 300, 30, 30, 1, rubbishImage, "rubbish1")
var ctx = document.getElementById('ctx').getContext('2d');

floatingList.push(fish)
floatingList.push(fish2)
floatingList.push(rubbish1    )


window.onload = function() {
    
    //fish.drwaObject(ctx);
    //fish.move(10,10);
    //fish.drwaObject(ctx);
    //fish2.drwaObject(ctx);
    //rubbish.drwaObject(ctx)
    //ctx.drawImage(bkgdImage, 0, 0, 500, 500)

    intervalVar = setInterval(updatePosition,10); // 100 fps game
    
}

updateFloatingPosition = function(){
    for (let floating of floatingList) {
        floating.x += floating.speed
    }
}


updatePosition = function() {
    if (true){
        ctx.clearRect(0,0,500,500);
        this.bkgd.drwaObject(ctx);
        updateFloatingPosition();
        for (let floating of floatingList) {
            console.log(floating)
            floating.x = (floating.x + floating.speed)% 600
            //floating.y = (floating.y + floating.speed)% 500
            floating.drwaObject(ctx)
        }
    }
}


