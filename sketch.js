var time = 0;
var drawn = 0;

//var capturer = new CCapture({format: 'png', framerate: 60})

function setup() {
  createCanvas(506, 506);
  noSmooth();
  noStroke();
  frameRate(60);
  seed1 = random(1000);
  seed2 = random(1000) + seed1;
  seed3 = random(1000) + seed2;
  seed4 = random(1000) + seed3;
}

function draw() {
  /*
  if (frameCount === 1)
    capturer.start();

  if (frameCount >= 600) {
    noLoop();
    capturer.stop();
    capturer.save();
  }
  */

  background(255, 236, 201);
  translate(width / 2, height / 2);

  noiseSeed(seed1);
  for (let i = 0; i < drawn; ++i) {
    fill(171, 148, 126);
    let noiseValue = noise(((i - 220) * 0.025) + (time * 0.9), -80);
    let y = noiseValue * 100;
    rect(i - 220, y - 80, 1, 270 - y);
  }

  noiseSeed(seed2);
  for (let i = 0; i < drawn; ++i) {
    fill(68, 43, 36);
    noiseValue = noise(((i - 220) * 0.02) + time, -50);
    y = noiseValue * 100;
    rect(i - 220, y - 50, 1, 270 - y);
  }

  noiseSeed(seed3);
  for (let i = 0; i < drawn; ++i) {
    fill(40, 14, 11);
    noiseValue = noise(((i - 220) * 0.015) + (time * 1.05), -20)
    y = noiseValue * 150;
    rect(i - 220, y - 40, 1, 260 - y);
  }

  noiseSeed(seed4);
  for (let i = 0; i < drawn; ++i) {
    fill(0);
    noiseValue = noise(((i - 220) * 0.012) + (time * 1.1), -20);
    y = noiseValue * 150;
    rect(i - 220, y - 10, 1, 260 - y);
  }

  fill(255, 236, 201);
  rect(-400, -400, 180, height);
  rect(400, -400, -181, height * 2);
  rect(-220, 220, width, 200);
  
  if (drawn < 440)
    drawn += 3;

  time += deltaTime / 1000;
  //capturer.capture(document.getElementById('defaultCanvas0'));
}