class GameObject {
    constructor(x, y, width, height, speed, img, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._img = img
        this._type = type
        this.speed = speed
    }

    drwaObject(ctx){
        ctx.drawImage(this._img, this.x, this.y, this.width, this.height);
    }

    move(addx, addy){
        this.x += addx
        this.y += addy
    }
}


