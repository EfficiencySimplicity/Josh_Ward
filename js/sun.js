
var program = function(p){

    let sunRadius = 50;
    let rayLength = 11;
    let rayWeight = 20;
    let rayDist = 1; 
    let numRays = 12;

    p.setup = function (){
        let canvas = p.createCanvas(200, 200);
        canvas.id('sunCanvas');
        canvas.parent('sunBox');
        canvas.canvas.style = 'width: 100%; height:100%;';
    };

    p.draw = function() {

        let mouseDist = Math.sqrt((p.mouseX - 100) ** 2 + (p.mouseY - 100) ** 2);
        let squint = 20 / Math.max(mouseDist / 20, 1);
        let rayDist = squint;

        p.background('black');

        p.fill('yellow');
        p.noStroke();

        p.ellipse(100, 100, sunRadius*2, sunRadius*2);

        p.strokeWeight(rayWeight);
        p.stroke('yellow');
        for (let i = 0; i < 2 * Math.PI; i += (2 * Math.PI) / numRays){
            let xDir = Math.cos(i);
            let startX = 100 + xDir * (sunRadius + rayDist);
            let endX = startX + xDir * rayLength;

            let yDir = Math.sin(i);
            let startY = 100 + yDir * (sunRadius + rayDist);
            let endY = startY + yDir * rayLength;

            p.line(startX, startY, endX, endY);
        };
    };
};

new p5(program);
