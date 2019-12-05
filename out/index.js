import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(1000, 500);
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Ball(random(width - 25), random(height), random(10, 60), randomColor(), randomColor()));
    }
    for (let j = 0; j < numBubbles; j++) {
        bubbles.push(new Bubble(random(width), random(height), random(10, 50)));
    }
    for (let k = 0; k < numFlakes; k++) {
        snowflakes.push(new Snowflake(random(width), random(height), random(5, 20)));
    }
}
function randomColor() {
    return ("rgb(" + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + ")");
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        if (!balls[i].touchingMouse() && !mouseIsPressed) {
            balls[i].move();
        }
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].draw();
        snowflakes[i].move();
    }
    collision();
}
function collision() {
    let ux1 = 0;
    let uy1 = 0;
    let ux2 = 0;
    let uy2 = 0;
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            if ((dist(balls[i].getx(), balls[i].gety(), balls[j].getx(), balls[j].gety())) <=
                (balls[i].getSize() / 2 + balls[j].getSize() / 2)) {
                let b1 = balls[i];
                let b2 = balls[j];
                let m1 = b1.getSize() * b1.getSize();
                let m2 = b2.getSize() * b2.getSize();
                let r1 = b1.getSize() / 2;
                let r2 = b2.getSize() / 2;
                ux1 = balls[i].getxSpeed();
                uy1 = balls[i].getySpeed();
                ux2 = balls[j].getxSpeed();
                uy2 = balls[j].getySpeed();
                let dNow = (dist(b1.getx(), b1.gety(), b2.getx(), b2.gety()));
                let dThen = ((dist(b1.getx() - b1.getxSpeed(), b1.gety() - b1.getySpeed(), b2.getx() - b2.getxSpeed(), b2.gety() - b2.getySpeed())));
                let dChange = dThen - dNow;
                let dOverlapping = r1 + r2 - dNow;
                b1.setx(b1.getx() - b1.getxSpeed() * dOverlapping / dChange);
                b1.sety(b1.gety() - b1.getySpeed() * dOverlapping / dChange);
                b2.setx(b2.getx() - b2.getxSpeed() * dOverlapping / dChange);
                b2.sety(b2.gety() - b2.getySpeed() * dOverlapping / dChange);
                b1.setxSpeed(((m1 - m2) * ux1 / (m1 + m2)
                    + ((2 * m2 * ux2)) / (m1 + m2)));
                b1.setySpeed(((m1 - m2) * uy1 / (m1 + m2)
                    + ((2 * m2 * uy2)) / (m1 + m2)));
                b2.setxSpeed(((m2 - m1) * ux2 / (m2 + m1)
                    + ((2 * m1 * ux1)) / (m2 + m1)));
                b2.setySpeed(((m2 - m1) * uy2 / (m1 + m2)
                    + ((2 * m1 * uy1)) / (m2 + m1)));
            }
        }
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map