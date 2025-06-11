// Yellow Rectangle
let yellowRects = [];
let rectWidth = 20;
// Color
let colors = [];
// Move rectangle 
let moveRects = [];
// Big rectangle
let bigRects = [];
// Audio
let reboundSound;
let bgmSound;
let lerpColorsPair = [];
// Gradient color array
let lerpColors = [];
// The signal whether the animation starts
let isStart = false;

// Preload
function preload() {
  reboundSound = loadSound("assets/rebound.m4a");
  bgmSound = loadSound("assets/bgm.mp3");
}

// Setup
function setup() {
  createCanvas(800, 800);

  // Colour
  colors = [color(34, 80, 149), color(221, 1, 0), color(200, 200, 200)];

  // The yellow background lines
  yellowRects = [
    { x: 0, y: 20, w: width, h: rectWidth },
    { x: 0, y: 140, w: width, h: rectWidth },
    { x: 0, y: 320, w: width, h: rectWidth },
    { x: 0, y: 380, w: width, h: rectWidth },
    { x: 0, y: 500, w: width, h: rectWidth },
    { x: 0, y: 560, w: width, h: rectWidth },
    { x: 0, y: 620, w: 60, h: rectWidth },
    { x: 60, y: 660, w: 460, h: rectWidth },
    { x: 0, y: 700, w: 60, h: rectWidth },
    { x: 0, y: 760, w: width, h: rectWidth },
    { x: 20, y: 0, w: rectWidth, h: 320 },
    { x: 60, y: 0, w: rectWidth, h: height },
    { x: 120, y: 0, w: rectWidth, h: 860 },
    { x: 240, y: 0, w: rectWidth, h: height },
    { x: 480, y: 0, w: rectWidth, h: height },
    { x: 520, y: 0, w: rectWidth, h: 320 },
    { x: 520, y: 380, w: rectWidth, h: 620 },
    { x: 600, y: 380, w: rectWidth, h: 180 },
  ];

  // Gradient color array
  lerpColorsPair = [
    [color(255, 192, 203), color(250, 201, 1)],
    [color(34, 80, 149), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
    [color(255, 192, 203), color(250,201, 1)],
  ];
}

function draw() {
  background(220);
}
