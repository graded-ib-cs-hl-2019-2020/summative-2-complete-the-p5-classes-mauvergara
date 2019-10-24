
export class Ball {
  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number;
  private ySpeed: number;
  private stopped: boolean = false;
  private color: string;
  private borderColor: string;

  constructor(x: number, y: number, size: number, color: string = "red", borderColor: string = "black") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.color = color;
    this.borderColor = borderColor;

  }

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

  public distFromMouse(): number {
    return dist(this.x, this.y, mouseX, mouseY);
  }

  public touchingMouse(): boolean {
    return this.distFromMouse() < this.size / 2;
  }

}
