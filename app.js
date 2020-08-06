import {
    Ball
} from './Ball.js';

import {
    Block
} from './Block.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        //ball
        this.ball = [];
        this.nball = 10;


        for (let i = 0; i < this.nball; i++) {
            this.ball[i] = new Ball(this.stageWidth, this.stageHeight, 30, 15);
            this.ball[i].setVelocityRandom(12, 50).setColorRandom();
        };

        //Text Rect

        this.block = new Block(400, 100, 100, 200);


        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        //draw rect
        this.block.draw(this.ctx);
        //draw ball
        for (let i = 0; i < this.nball; i++) {
            this.ball[i].draw(this.ctx, this.stageWidth, this.stageHeight);
        }


    }
}

window.onload = () => {
    new App();
}