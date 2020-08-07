export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = x + width;
        this.maxY = y + height;
    }

    draw(context) {
        context.strokeStyle = 'rgb(18, 45, 58)';
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        context.fillStyle = '#ff384e';
        context.font = '100px sans-serif';
        context.fillText("Don't touch me!", this.x, this.y + this.height);
    }
}