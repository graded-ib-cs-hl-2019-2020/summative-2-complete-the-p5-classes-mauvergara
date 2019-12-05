export class Ball {
    constructor(x, y, size, color, borderColor) {
        this.stopped = false;
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.color = color;
        this.borderColor = borderColor;
    }
    getx() { return (this.x); }
    gety() { return (this.y); }
    getSize() { return (this.size); }
    getxSpeed() { return (this.xSpeed); }
    getySpeed() { return (this.ySpeed); }
    getColor() { return (this.color); }
    getBorderColor() { return (this.borderColor); }
    setx(newx) { this.x = newx; }
    sety(newy) { this.y = newy; }
    setSize(newSize) { this.size = newSize; }
    setxSpeed(newxSpeed) { this.xSpeed = newxSpeed; }
    setySpeed(newySpeed) { this.ySpeed = newySpeed; }
    setColor(newColor) { this.color = newColor; }
    setBorderColor(newBorderColor) { this.borderColor = newBorderColor; }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    randomColor() {
        return ("rgb(" + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + ")");
    }
    doBorderBehavior() {
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map