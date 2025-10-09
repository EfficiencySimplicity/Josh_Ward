// https://editor.p5js.org/rjgilmour/sketches/58lTkGXyN

var left_eye = function(p) { // p could be any variable name
    
    let goalX = 0;
    let goalY = 0;

    let eyeX = 0;
    let eyeY = 0;

    let pupilX = 50;
    let pupilY = 50;

    let squint = 0;

    p.setup = function (){
        let canvas = p.createCanvas(100, 100);
        canvas.id('myCanvas');
        canvas.parent('canvasBox');
        canvas.canvas.style = 'width: 90%; height: 90%; margin-top: 4%; margin-left: 4%; border:1px solid #000000;';
    };

    p.draw = function() {
        p.background('black');

        goalX += (p.mouseX - goalX) * .1;
        goalY += (p.mouseY - goalY) * .1;

        eyeX = 50 + (goalX - 50) * 0.1;
        eyeY = 50 + (goalY - 50) * 0.1;

        pupilX = 50 + (p.mouseX - 50) * 0.3;
        pupilY = 50 + (p.mouseY - 50) * 0.3;

        squint = (p.mouseX - eyeX) * (p.mouseX - eyeX) + (p.mouseY - eyeY) * (p.mouseY - eyeY);
        squint = 10 / Math.max(Math.sqrt(squint) / 10, 1);

        p.strokeWeight(1);

        p.fill('aliceblue');
        p.ellipse(eyeX, eyeY, 100, 100);

        p.fill(0, 0, 200);
        p.ellipse(pupilX, pupilY, 50, 50);
        p.fill(0);
        p.ellipse(pupilX, pupilY, 20, 20);

        p.noFill();
        p.strokeWeight(100);
        p.ellipse(eyeX, eyeY-(170 + squint), 300, 500);
        p.ellipse(eyeX, eyeY+(170 + squint), 300, 500);
    };
};

new p5(left_eye);


var right_eye = function(p) { // p could be any variable name
    
    let goalX = 0;
    let goalY = 0;

    let eyeX = 0;
    let eyeY = 0;

    let pupilX = 50;
    let pupilY = 50;

    let squint = 0;

    p.setup = function (){
        let canvas = p.createCanvas(100, 100);
        canvas.id('myCanvas');
        canvas.parent('canvasBoxRight');
        canvas.canvas.style = 'width: 90%; height: 90%; margin-top: 4%; margin-left: 4%; border:1px solid #000000;';
    };

    p.draw = function() {
        p.background('black');

        goalX += (p.mouseX - goalX) * .05;
        goalY += (p.mouseY - goalY) * .05;

        eyeX = 50 + (goalX - 50) * 0.05;
        eyeY = 50 + (goalY - 50) * 0.05;

        pupilX = 50 + (p.mouseX - 50) * 0.15;
        pupilY = 50 + (p.mouseY - 50) * 0.15;

        squint = (p.mouseX - eyeX) * (p.mouseX - eyeX) + (p.mouseY - eyeY) * (p.mouseY - eyeY);
        squint = 10 / Math.max(Math.sqrt(squint) / 10, 1);

        p.strokeWeight(1);

        p.fill('aliceblue');
        p.ellipse(eyeX, eyeY, 100, 100);

        p.fill(255, 127, 80);
        p.ellipse(pupilX, pupilY, 50, 50);
        p.fill(0);
        p.ellipse(pupilX, pupilY, 20, 20);

        p.noFill();
        p.strokeWeight(100);
        p.ellipse(eyeX, eyeY-(170 + squint), 300, 500);
        p.ellipse(eyeX, eyeY+(170 + squint), 300, 500);
    };
};

new p5(right_eye);
