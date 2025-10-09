
// you need some tricks tor ender 2 canvasses at the same time

let goalX = 0;
let goalY = 0;

let eyeX = 0;
let eyeY = 0;

let pupilX = 50;
let pupilY = 50;

let squint = 0;

function setup(){
    let canvas = createCanvas(100, 100);
    canvas.id('myCanvasRight');
    canvas.parent('canvasBoxRight');
    canvas.canvas.style = 'width: 90%; height: 90%; margin-top: 4%; margin-left: 4%; border:1px solid #000000;';
}

function draw() {
    background('black');

    goalX += (mouseX - goalX) * .1;
    goalY += (mouseY - goalY) * .1;

    eyeX = 50 + (goalX - 50) * 0.1;
    eyeY = 50 + (goalY - 50) * 0.1;

    pupilX = 50 + (mouseX - 50) * 0.3;
    pupilY = 50 + (mouseY - 50) * 0.3;

    squint = (mouseX - eyeX) * (mouseX - eyeX) + (mouseY - eyeY) * (mouseY - eyeY);
    squint = 10 / Math.max(Math.sqrt(squint) / 10, 1);

    strokeWeight(1);

    fill('aliceblue');
    ellipse(eyeX, eyeY, 100, 100);

    fill(0, 0, 200);
    ellipse(pupilX, pupilY, 50, 50);
    fill(0);
    ellipse(pupilX, pupilY, 20, 20);

    noFill();
    strokeWeight(100);
    ellipse(eyeX, eyeY-(170 + squint), 300, 500);
    ellipse(eyeX, eyeY+(170 + squint), 300, 500);
}