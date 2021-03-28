var noiseScale = 0.02;
var time = 0;

var points1 = [];
var points2 = [];
var points3 = [];
var points4 = [];
var capturer = new CCapture({format: 'png', framerate: 60})

function setup() {
  createCanvas(506, 506);
  noSmooth();
  noStroke();
  seed1 = random(1000);
  seed2 = random(1000) + seed1;
  seed3 = random(1000) + seed2;
  seed4 = random(1000) + seed3;
}

function draw() {
  if (frameCount === 1)
    capturer.start();

  if (frameCount >= 600) {
    noLoop();
    capturer.stop();
    capturer.save();
  }

  background(255, 236, 201);
  translate(width / 2, height / 2);

  for (let i = 0; i < points1.length; ++i) {
    fill(171, 148, 126);
    let y = points1[i] * 100;
    rect(i - 220, y - 80, 1, 270 - y);
    fill(68, 43, 36);
    y = points2[i] * 100;
    rect(i - 220, y - 50, 1, 270 - y);
    fill(40, 14, 11);
    y = points3[i] * 150;
    rect(i - 220, y - 40, 1, 260 - y);
    fill(0);
    y = points4[i] * 150;
    rect(i - 220, y - 10, 1, 260 - y);
  }

  fill(255, 236, 201);
  rect(-400, -400, 180, height);
  rect(400, -400, -181, height * 2);
  rect(-220, 220, width, 200);
  
  if (points1.length < 440) {
    UpdatePoints();
    time += deltaTime / 1000;
    UpdatePoints();
    time += deltaTime / 1000;
    UpdatePoints();
  } else
    UpdatePoints();

  time += deltaTime / 1000;
  capturer.capture(document.getElementById('defaultCanvas0'));
}

function initializePoints() {
  for (let x = -220; x < 219; x++) {
    noiseSeed(seed1);
    points1[x + 220] = noise((x * 0.025), -80);
    noiseSeed(seed2);
    points2[x + 220] = noise((x * 0.02), -50);
    noiseSeed(seed3);
    points3[x + 220] = noise((x * 0.015), -20);
    noiseSeed(seed4);
    points4[x + 220] = noise((x * 0.012), -20);
  }
}

function UpdatePoints() {
  if (points1.length > 440) {
    points1.shift();
    points2.shift();
    points3.shift();
    points4.shift();
  }

  noiseSeed(seed1);
  points1.push(noise((220 * 0.025) + (time * 0.9), -80));
  noiseSeed(seed2);
  points2.push(noise((220 * 0.02) + time, -50));
  noiseSeed(seed3);
  points3.push(noise((220 * 0.015) + (time * 1.05), -20));
  noiseSeed(seed4);
  points4.push(noise((220 * 0.012) + (time * 1.1), -20));
}