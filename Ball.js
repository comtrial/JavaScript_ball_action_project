export class Ball {
    constructor(stageWidth, stageHeight, radius, vx, vy, color) {
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);
    }

    draw(ctx, stageWidth, stageHeight) {
        this.x += this.vx;
        this.y += this.vy;

        this.bouncewindow(stageWidth, stageHeight);

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bouncewindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const minY = this.radius;
        const maxX = stageWidth - this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }
    setVelocityRandom(vmin, vmax) {
        let v = vmin + Math.random() * (vmax - vmin);
        let t = 2 * Math.PI * Math.random();
        this.vx = v * Math.cos(t);
        this.vy = v * Math.sin(t);

        return this;
    }

    setColorRandom() {
        let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);

        this.color = colorCode;
        return this;
    }
}