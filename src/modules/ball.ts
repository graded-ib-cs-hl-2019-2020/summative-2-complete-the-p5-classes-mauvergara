
export class Ball {
  private x: number;
  private y: number;
  private size: number;
  private color: string;
  private borderColor: string;
  private xSpeed: number;
  private ySpeed: number;
  private stopped: boolean = false;

  constructor(x: number, y: number, size: number, color: string, borderColor: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.color = color;
    this.borderColor = borderColor;

  }

  public getx() { return (this.x); }
  public gety() { return (this.y); }
  public getSize() { return (this.size); }
  public getxSpeed() { return (this.xSpeed); }
  public getySpeed() { return (this.ySpeed); }
  public getColor() { return (this.color); }
  public getBorderColor() { return (this.borderColor); }

  public setx(newx: number) { this.x = newx; }
  public sety(newy: number) { this.y = newy; }
  public setSize(newSize: number) { this.size = newSize; }
  public setxSpeed(newxSpeed: number) { this.xSpeed = newxSpeed; }
  public setySpeed(newySpeed: number) { this.ySpeed = newySpeed; }
  public setColor(newColor: string) { this.color = newColor; }
  public setBorderColor(newBorderColor: string) { this.borderColor = newBorderColor; }

  public stop() {
    this.stopped = true;
  }

  public go() {
    this.stopped = false;
  }

  public draw(): void {
    fill(this.color);
    stroke(this.borderColor);
    ellipse(this.x, this.y, this.size);
  }

  public move(): void {
    if (this.stopped == false) {
      this.x = this.xSpeed + this.x;
      this.y = this.ySpeed + this.y;
      this.doBorderBehavior();
    }
  }

  public distFromMouse(): number {
    return dist(this.x, this.y, mouseX, mouseY);
  }

  public touchingMouse(): boolean {
    return this.distFromMouse() < this.size / 2;
  }

  public bounce() {
    this.xSpeed = -this.xSpeed;
    this.ySpeed = -this.ySpeed;
    this.x += this.xSpeed / 1.5;
    this.y += this.ySpeed / 1.5;
  }

  public randomColor() {
    // creates pseudo-random rgb color
    // tslint:disable-next-line: max-line-length
    return ("rgb(" + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + ")");
  }

  /* This border behavior implements a bounce */
  private doBorderBehavior() {
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }

}
