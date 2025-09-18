
let x = 0;
let y = 0;

let pupilX = 50;
let pupilY = 50;

let squint = 0;

function setup(){
    let canvas = createCanvas(100, 100);
    canvas.id('myCanvas');
    canvas.parent('canvasBox');
    canvas.canvas.style = 'width: 90%; height: 90%; margin-top: 4%; margin-left: 4%; border:1px solid #000000;';
}

function draw() {
    background('black');

    x = 50 + (mouseX - 50) * 0.1;
    y = 50 + (mouseY - 50) * 0.1;

    pupilX = 50 + (mouseX - 50) * 0.3;
    pupilY = 50 + (mouseY - 50) * 0.3;

    squint = (mouseX - 50) * (mouseX - 50) + (mouseY - 50) * (mouseY - 50);
    squint = 10 / Math.max(Math.sqrt(squint) / 10, 1);

    strokeWeight(1);

    fill('aliceblue');
    ellipse(x, y, 100, 100);

    fill(0, 0, 200);
    ellipse(pupilX, pupilY, 50, 50);
    fill(0);
    ellipse(pupilX, pupilY, 20, 20);

    noFill();
    strokeWeight(100);
    ellipse(x, y-(170 + squint), 300, 500);
    ellipse(x, y+(170 + squint), 300, 500);
}