
var program = function(p){

    let rotationSecond = 0;

    let hourLength = 70;
    let minuteLength = 80;
    let secondLength = 90;

    p.setup = function (){
        let canvas = p.createCanvas(200, 200);
        canvas.id('clockCanvas');
        canvas.parent('clockBox');
        canvas.canvas.style = 'width: 100%; height:100%;';
    };

    p.draw = function() {

        const d = new Date();

        let hour = d.getHours();
        let rotationHour = ((hour - 3) / 12) * 2 * Math.PI;
        let minute = d.getMinutes();
        let rotationMinute = ((minute - 15) / 60) * 2 * Math.PI;
        let second = d.getSeconds();
        let rotationSecond = ((second - 15) / 60) * 2 * Math.PI;

        p.background('black');

        p.noFill();

        p.stroke('aqua');
        p.strokeWeight(3);
        p.line(100, 100, 100 + Math.cos(rotationSecond) * secondLength,
        100 + Math.sin(rotationSecond) * secondLength);

        p.stroke('darkorange');
        p.strokeWeight(7);
        p.line(100, 100, 100 + Math.cos(rotationMinute) * minuteLength,
        100 + Math.sin(rotationMinute) * minuteLength);

        p.stroke('orange');
        p.strokeWeight(10);
        p.line(100, 100, 100 + Math.cos(rotationHour) * hourLength,
        100 + Math.sin(rotationHour) * hourLength);
    };
};

new p5(program);
