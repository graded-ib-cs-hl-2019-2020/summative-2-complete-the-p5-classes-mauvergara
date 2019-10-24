import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";

let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;

function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Ball(random(width - 25), random(height), random(10, 50)));
    }
    for (let j = 0; j < numBubbles; j++) {
        bubbles.push(new Bubble(random(width), random(height), random(10, 50)));
    }
    for (let j = 0; j < numFlakes; j++) {
        snowflakes.push(new Snowflake(random(width), random(height), random(5, 20)));
    }
}

function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        if (!balls[i].touchingMouse()) {
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
}

// do not edit the below lines
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
