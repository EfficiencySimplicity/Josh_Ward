// https://editor.p5js.org/rjgilmour/sketches/58lTkGXyN

class EyeProgram{
    constructor(p, canvasID, parentID, color = 'blue'){

        let scale = 200;
        let halfScale = scale / 2;
    
        let goalX = 0;
        let goalY = 0;

        let eyeX = 0;
        let eyeY = 0;

        let pupilX = halfScale;
        let pupilY = halfScale;

        let squint = 0;

        p.setup = function (){
            let canvas = p.createCanvas(scale, scale);
            canvas.id(canvasID);
            canvas.parent(parentID);
            canvas.canvas.style = 'width: 100%; height:100%;';
        };

        p.draw = function() {
            p.background('black');

            goalX += (p.mouseX - goalX) * 0.1;
            goalY += (p.mouseY - goalY) * 0.1;

            eyeX = halfScale + (goalX - halfScale) * 0.1;
            eyeY = halfScale + (goalY - halfScale) * 0.1;

            pupilX = halfScale + (p.mouseX - halfScale) * 0.3;
            pupilY = halfScale + (p.mouseY - halfScale) * 0.3;

            // euclidean distance
            squint = Math.sqrt((p.mouseX - eyeX) ** 2 + (p.mouseY - eyeY) ** 2);
            squint = (scale / 10) / Math.max(squint / (scale / 10), 1);

            p.strokeWeight(1);

            p.fill('aliceblue');
            p.ellipse(eyeX, eyeY, scale, scale);

            p.fill(color);
            p.ellipse(pupilX, pupilY, halfScale, halfScale);
            p.fill(0);
            p.ellipse(pupilX, pupilY, halfScale *2/5, halfScale *2/5);

            p.noFill();
            p.strokeWeight(scale);
            p.ellipse(eyeX, eyeY-(scale*1.7 + squint), 3*scale, 5*scale);
            p.ellipse(eyeX, eyeY+(scale*1.7 + squint), 3*scale, 5*scale);
        };
    };
};

new p5(p => new EyeProgram(p, 'bigEye', 'eyeBox'));
new p5(p => new EyeProgram(p, 'smallEye', 'eyeBoxRight', 'orange'));
