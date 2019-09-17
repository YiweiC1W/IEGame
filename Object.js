class GameObject {
    constructor(x, y, width, height, speed, img, type, ctx, closeImg){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img
        this.type = type
        this.speed = speed
        this.ctx = ctx
        this.isDragging = false
        this.closeImg = closeImg
        this.isOpen = false
    }

    drawObject(){
        if (this.isOpen){
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        else{
            this.ctx.drawImage(this.closeImg, this.x, this.y, this.width, this.height);
        }
    }
    

    move(addx, addy){
        this.x += addx
        this.y += addy
    }

    isMouseInObject(mx, my){
        return(mx>this.x && mx<this.x+this.width && my>this.y && my<this.y+this.height)
    }
}




