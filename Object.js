class GameObject {
    constructor(x, y, width, height, speed, img, type, ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._img = img
        this._type = type
        this.speed = speed
        this.ctx = ctx
        this.isDragging = false
    }

    drwaObject(){
        this.ctx.drawImage(this._img, this.x, this.y, this.width, this.height);
    }

    move(addx, addy){
        this.x += addx
        this.y += addy
    }

    isMouseInObject(mx, my){
        return(mx>this.x && mx<this.x+this.width && my>this.y && my<this.y+this.height)
    }
}


