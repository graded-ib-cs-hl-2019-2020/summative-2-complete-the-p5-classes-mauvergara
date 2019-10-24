export class Snowflake {
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

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }

    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
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

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }
}
