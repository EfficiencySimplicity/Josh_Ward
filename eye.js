
let x = 0;
let y = 0;

function setup(){
    let canvas = createCanvas(100, 100);
    canvas.id('myCanvas');
    canvas.parent('canvasBox');
    canvas.canvas.style = 'width: 90%; height: 90%; margin-top: 4%; margin-left: 4%; border:1px solid #000000;';
}

function draw() {
    background('aliceblue');

    x += (mouseX - x) * 0.1;
    y += (mouseY - y) * 0.1;
    fill(255);
    ellipse(x, y, 100, 50);
    fill(0, 0, 200);
    ellipse(x, y, 50, 50);
    fill(0);
    ellipse(x, y, 20, 20);
}