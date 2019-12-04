/* Programming Summative 2

    This summative comes in 2 parts.

    Part 1 - Programming
    ---------------------
    Your PRIMARY goal is to get the program running. You can find missing elements by looking for comments marked
    TODO REQUIRED. If they are all fixed, the program should run with 10 red balls, 10 white snowflakes, and
    10 transluscent bubbles.

    Your SECONDARY goal is to implement the optional TODO requirements and any other fun things you think of.

    Part 2 - Documenting
    ------------------------
    Create UML diagrams for all three of these classes, and a flowchart that shows the basic program flow of
    index.ts. You can do these by hand (be neat!) or using an online tool - draw.io and lucidchart are both nice
    online offerings.

    For a Proficient, the documentation must be complete and the program must run and be readable.
        An Approaching might mean incomplete documentation OR hard-to-read code OR not-quite-working code
        Work your way downwrd from there
    For an Accomplished , some optional requirements or embellishments are required or the code must be particularly beautiful
    For an Exemplary, I would expect all optional rquirements to be implemented, or additional features of similar or greter
        difficulty.
*/
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";

let balls: Ball[] = [];
let snowflakes: Snowflake[] = [];
let bubbles: Bubble[] = [];

function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(1000, 500);
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Ball(random(width - 25), random(height), random(10, 60), randomColor(), randomColor()));
        /* TODO OPTIONAL - make the balls a random color */
    }
    for (let j = 0; j < numBubbles; j++) {
        bubbles.push(new Bubble(random(width), random(height), random(10, 50)));
    }
    for (let k = 0; k < numFlakes; k++) {
        snowflakes.push(new Snowflake(random(width), random(height), random(5, 20)));
    }
}

function randomColor() {
    // creates pseudo-random rgb color
    // tslint:disable-next-line: max-line-length
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
    let ux1: number = 0;
    let uy1: number = 0;
    let ux2: number = 0;
    let uy2: number = 0;
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            // determines if distance between two balls is less than the radius of those two balls
            if (
                (dist(balls[i].getx(), balls[i].gety(), balls[j].getx(), balls[j].gety())) <=
                (balls[i].getSize() / 2 + balls[j].getSize() / 2)) {
                // convenience variables
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
                let dThen = ((dist(b1.getx() - b1.getxSpeed(), b1.gety() - b1.getySpeed(),
                    b2.getx() - b2.getxSpeed(), b2.gety() - b2.getySpeed())));
                let dChange = dThen - dNow;
                let dOverlapping = r1 + r2 - dNow;
                // set balls back so they are perfectly touching
                b1.setx(b1.getx() - b1.getxSpeed() * dOverlapping / dChange);
                b1.sety(b1.gety() - b1.getySpeed() * dOverlapping / dChange);
                b2.setx(b2.getx() - b2.getxSpeed() * dOverlapping / dChange);
                b2.sety(b2.gety() - b2.getySpeed() * dOverlapping / dChange);
                // ellastic collision equations
                b1.setxSpeed(((m1 - m2) * ux1 / (m1 + m2)
                    + ((2 * m2 * ux2)) / (m1 + m2)));
                b1.setySpeed(((m1 - m2) * uy1 / (m1 + m2)
                    + ((2 * m2 * uy2)) / (m1 + m2)));
                b2.setxSpeed(((m2 - m1) * ux2 / (m2 + m1)
                    + ((2 * m1 * ux1)) / (m2 + m1)));
                b2.setySpeed(((m2 - m1) * uy2 / (m1 + m2)
                    + ((2 * m1 * uy1)) / (m2 + m1)));
                // balls[j].setColor(randomColor());
                // balls[i].setColor(randomColor());
            }
        }
    }
}

/* TODO OPTIONAL - add a function mousePressed() that either stops or starts objects from moving
   if the mouse is pressed while it is touching them. So you could use this (if careful!) to stop all of the
   objects from moving then start them back up again. The Ball class has some helper functions that will
   help you with this, but you'll need to add them to the other classes.
*/

// do not edit the below lines
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
