
var program = function(p){

    let moonRadius = 50;

    p.setup = function (){
        let canvas = p.createCanvas(200, 200);
        canvas.id('moonCanvas');
        canvas.parent('moonBox');
        canvas.canvas.style = 'width: 100%; height:100%;';
    };

    p.draw = function() {

        if (p.mouseY > 200 || p.mouseY < 0)
        {return;}

        if (p.mouseX > 200 || p.mouseX < 0)
        {return;}

        p.background('black')

        p.noStroke();

        p.fill('aliceblue');
        p.ellipse(100, 100, moonRadius*2, moonRadius*2);

        p.fill(0, 0, 0, 200);
        p.ellipse(p.mouseX, 100, moonRadius*2, moonRadius*2);


        p.stroke(0, 0, Math.abs(p.mouseX - 100));
        p.noFill();
        p.strokeWeight(100);
        p.ellipse(100, 100, moonRadius + 150, moonRadius + 150);
    };
};

new p5(program);
