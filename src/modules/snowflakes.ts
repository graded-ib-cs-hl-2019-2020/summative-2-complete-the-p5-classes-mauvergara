export class Snowflake {

    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward.
    I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */

    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number;
    private ySpeed: number;
    private stopped: boolean = false;
    private color: string;

    constructor(x: number, y: number, size: number, color: string = "white") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-.5, .5);
        this.ySpeed = random(0.2, 1.5);
        this.color = color;
    }

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
