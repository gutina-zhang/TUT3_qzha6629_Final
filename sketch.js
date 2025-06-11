// Yellow Rectangle
let yellowRects = [];
//* An array that stores all your yellow background lines (rectangles).
let rectWidth = 20;
//* The thickness of lines

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
//* Preventation of of missing music when play the animation
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
  ]; //*The position and the size of the rectangles

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
  ]; //* To create a smooth blend between these two colors. These pairs correspond to background gradients.

  // Rebound big rectangle position, size, color, motor movement and rebound boarder
  //* These lines below are large, animated rectangles.
  bigRects = [
    {
      x: 320, y: 190, 
      w: 100, h: 80,
      c: colors[1], //Red
      dx: 2, dy: 0,
      boundsStart: 540, boundsEnd: width, //* The range where it can move — it will bounce back at the edges.
    },
    {x: 620, y: 190,
      w: 100, h: 80,
      c: colors[1],  // color
      dx: 2, dy: 0, // Moves horizontally
      boundsStart: 540, boundsEnd: width, 
    }, 

    {
      x: 620, y: 190,
      w: 100, h: 80,
      c: colors[2],
      dx: 2, dy: 0,
      boundsStart: 580, boundsEnd: height - 40, 
    },
  ];

  // Randomly generate small moving rectangles in a yellow background
  for (let i = 0; i < yellowRects.length; i++) {
    let yellow = yellowRects[i];
    // Only generate on rectangles that fill the screen horizontally or vertically
    if (yellow.w == width) {
      generateRandomRectangles(-1, yellow.y, "x");
    } else if (yellow.h == height) {
      generateRandomRectangles(yellow.x, -1, "y");
    }
  }
     //* Ensuring that small rectangles only move along full-length yellow bars, keeping the animation clean and organized.
    
  // Initialize the gradient color
  for (let i = 0; i < lerpColorsPair.length; i++) {
    let cList = lerpColorsPair[i];
    lerpColors[i] = [];
    for (let j = 0; j < 800; j++) {
      let c = lerpColor(cList[0], cList[1], j / 800);
      lerpColors[i].push(c);
    }
    }
  }
  
  

function draw() {
  background(220);
}
