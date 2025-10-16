// https://editor.p5js.org/rjgilmour/sketches/58lTkGXyN

var mouth = function(p) { // p could be any variable name
    let close = 0;

    let canvasWidth = 250;
    let center = canvasWidth / 2;

    p.setup = function (){
        let canvas = p.createCanvas(canvasWidth, 100);
        canvas.id('mouth');
        canvas.parent('mouthBox');
        canvas.canvas.style = 'width: 100%; height: 100%; #000000;';
    };

    p.draw = function() {
        p.background('black');

        // for 'close', the first constant is the max close value,
        //  and the second is the distance influence 
        // (smaller = less influence)
        close = (p.mouseX - center) * (p.mouseX - center) + (p.mouseY - 50) * (p.mouseY - 50);
        close = 50 / Math.max(Math.sqrt(close) / 10, 1);

        p.noStroke();
        p.fill('darkred');
        p.ellipse(center, 50, 140 - close, 50 - close);

        p.fill('white');
        for (let i = -55; i <= 45; i+= 20)
        {
            if (i!=45) {
            p.rect(center + 10 + i, 65 - close/2, 10, 20);
            }
            p.rect(center + i, 52 - (70 - close)/2, 10, 20);
        };

        p.strokeWeight(20);
        p.stroke('red');
        p.noFill();
        p.ellipse(center, 50, 160 - close, 70 - close);
    };
};

new p5(mouth);
