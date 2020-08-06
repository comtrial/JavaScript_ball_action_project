export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    draw(context) {
        // context.beginPath();
        // context.rect(this.x, this.y, this.width, -this.height);
        // context.fillStyle = rgb(18, 45, 58);
        // context.fill();
        // context.closePath();

        context.beginPath();
        context.fillStyle = '#ff384e';
        context.font = '150px sans-serif';
        context.fillText("please", this.x, this.y);
        context.fill();


    }
}