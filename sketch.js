
//var capturer = new CCapture({format: 'jpg', framerate: 30});

function setup() {
    createCanvas(600, 600);
    pg = createGraphics(600, 600);
    pg2 = createGraphics(600, 600);
    frameRate(30);
    noStroke();
    rectMode(CENTER);
    pixelDensity(1.0);
    noSmooth();
    background(240, 198, 163);

    pg.frameRate(30);
    pg.noStroke();
    pg.rectMode(CENTER);
    pg.angleMode(DEGREES);
    pg.pixelDensity(1.0);
    pg.noSmooth();
    pg.blendMode(OVERLAY);
    pg.background(240, 227, 163);
    //background(random(100, 250), random(50, 250), random(50, 250));

    pg2.background(240, 227, 163);
    pg2.noSmooth();
}
  
function draw() {
    /*
    if (frameCount === 1)
        capturer.start();

    if (frameCount === 945) {
        noLoop();
        capturer.stop();
        capturer.save();
    }
    */
    if (frameCount <= 100) {
        for (let i = 0; i < 2; ++i) {
            var sideLength = random(50, 200);
            var half = int(sideLength / 2);
            
            pg.push();
            pg.translate(random(600), random(600));
            pg.rotate(random(0, 360));
            pg.fill(random(255), random(255), random(255), random(50, 200));
            pg.triangle(-half, half, 0, -half, half, half);
            pg.pop();
        }
    } else {
        for (let i = 0; i < 45; ++i) {
            var sideLength = noise(random(123123)) * random(50, 200);
            var half = int(sideLength / 2);

            pg.push();
            var x = randomGaussian(300, 115);
            var y = randomGaussian(300, 115);
            pg.translate(x, y);
            pg.fill(noise(random(255)) * 255, noise(random(255)) * 255, noise(random(255)) * 255, noise(random(100, 255)) * random(100, 255));
            pg.rotate(noise(x, y) * 360);
            pg.triangle(-half, half, 0, -half, half, half);
            pg.pop();
        }
    }

    pg2.pixelDensity(random(0.97, 0.98));
    pg2.image(pg, 0, 0);

    image(pg2, 0, 0);
    /*
    if (frameCount > 660) {
        var progress = abs(660 - frameCount);
        var c = color(240, 227, 163, progress);
        fill(c);
        square(300, 300, 600);
    }
    */
    
    //capturer.capture(document.getElementById('defaultCanvas0'));
}
