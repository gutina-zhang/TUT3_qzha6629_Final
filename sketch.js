// Yellow Rectangle
let yellowRects = [];
//* Array of objects that describe every yellow background line (x, y, w, h).
let rectWidth = 20;
//* Stroke-thickness of those yellow lines (20 px).

// Color
let colors = []; 
//* Will hold three p5.Color objects (blue, red, grey).

// Move rectangle 
let moveRects = [];
//* Array that will store small moving rectangles created at runtime.

// Big rectangle
let bigRects = [];
//* Array of large animated rectangles that bounce.

// Audio
let reboundSound;
let bgmSound;
//* p5.SoundFile objects for SFX and background music.

let lerpColorsPair = [];
//* Array of colour-pairs used to build gradients.

// Gradient color array
let lerpColors = [];
//* Two-dimensional array; every inner list is a pre-computed gradient (800 colours) derived from one pair above.

// The signal whether the animation starts
let isStart = false;
//* Boolean flag: false by default, becomes true after first click.


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
  ]; 
  //*The position and the size of the rectangles

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
  //* 18 pairs (pink ➜ yellow, blue ➜ yellow, …), and each pair will become one row in lerpColors.

  // Rebound big rectangle position, size, color, motor movement and rebound boarder
  //* These lines below are large, animated rectangles.
  bigRects = [
    {
      x: 320, y: 190, w: 100, h: 80, //* Position + size
      c: colors[0],  
      //* 	Fill colour chosen from colors array.

      dx: 0, dy: 2,  
      //* Per-frame velocity. One axis is zero, so each rect moves either horizontally or vertically.

      boundsStart: 160, boundsEnd: 320, 
      //* Range in which it may travel; hitting either limit flips the velocity sign and triggers a sound.
    },
    {
      x: 610, y: 190, w: 100, h: 80,
      c: colors[1],
      dx: 2, dy: 0,
      boundsStart: 500, boundsEnd: width,
    },
    {
      x: 620, y: 630, w: 100, h: 80,
      c: colors[2],
      dx: 0, dy: 2,
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
  
  // Main drawing loop
  function draw() {
    background(240);
    noStroke();
    //* Set the background color to light gray
    
    // Draw the yellow background lines
    for (let i = 0; i < yellowRects.length; i++) {
      let yellow = yellowRects[i];
      // Gradient color
      for (let j = 0; j < 800; j++) {
        stroke(lerpColors[i][j]);
        if (yellow.w == width) {
        line(j, yellow.y, j, yellow.y + yellow.h);
        //* Creates a subtle vertical (or horizontal) gradient across each bar.
      } 
      else if (yellow.h == height) {
        line(yellow.x, j, yellow.x + yellow.w, j);
      }
    }
  }

    // Draw Big Rectangle
    for (let i = 0; i < bigRects.length; i++) {
      let bigRect = bigRects[i];
      noStroke();
      fill(bigRect.c)
      rect(bigRect.x, bigRect.y, bigRect.w, bigRect.h);  //* outer frame
      fill(250, 201, 1);
      rect(bigRect.x + 20, bigRect.y + 20, bigRect.w - 40, bigRect.h - 40); //* inner

      // Move only after you start
      if (isStart) {
       if (bigRect.dy != 0) { 
        // Check the up and down movement boundaries
        if (
          bigRect.y + bigRect.h >= bigRect.boundsEnd ||
          bigRect.y <= bigRect.boundsStart
        ) {
          // Rebound
          bigRect.dy = bigRect.dy * -1;
          // Play the Music
          reboundSound.play();
        }
        bigRect.y += bigRect.dy;
    } else if (bigRect.dx != 0) {
      // Check the left and right movement boundaries
      if (
          bigRect.x + bigRect.w >= bigRect.boundsEnd ||
          bigRect.x <= bigRect.boundsStart
      ) {
          // Rebound
          bigRect.dx = bigRect.dx * -1;
          // Play the Music
          reboundSound.play();
      }
      bigRect.x += bigRect.dx;
    }

  }
}

  //Draw Small Rectangle
  for (let i = 0; i < moveRects.length; i++) {
    let moveRect = moveRects[i];
    fill(moveRect.c);
    noStroke();
    rect(moveRect.x, moveRect.y, rectWidth, rectWidth);

    // Move only after you start
    if (isStart) {
      if (moveRect.type == "x") {
        // Horizontal Movement
        moveRect.x += moveRect.speed * moveRect.direction;
        // Check the up and down movement boundaries
        if (moveRect.x > height - rectWidth || moveRect.x < 0) {
          moveRect.direction = moveRect.direction * -1;
        }
      } else if (moveRect.type == "y") {
        // Longitudinal movement
        moveRect.y += moveRect.speed * moveRect.direction;
        // Check the up and down movement boundaries
        if (moveRect.y > height - rectWidth || moveRect.y < 0) {
          moveRect.direction = moveRect.direction * -1;
        }
      }
    }
  }
}

// Generate randomly moving rectangles
function generateRandomRectangles(x, y, type) {
  // Generate 10 rectangles
  for (let i = 0; i < 10; i++) {
    //random color
    let colorIndex = floor(random(colors.length));
    // Declare the variables xx and yy for storing the x and y coordinates of the randomly generated rectangle
    let xx, yy;
    // If the movement type of the rectangle is horizontal ('x')
    if (type == "x") {
      // Randomly generate the x-coordinate of the rectangle, with the range being the width of the canvas
       xx = random(30, width - 30);
       // The y-coordinate of the rectangle is fixed to the passed y-value
       yy = y;
    }
       // If the movement type of the rectangle is vertical ('y')
        else if (type == "y") {
          // The x-coordinate of the rectangle is fixed to the passed x value
           xx = x;
           // Randomly generate the y-coordinate of the rectangle, with the range being the height of the canvas
           yy = random(30, height - 30);
    }
  
    moveRects.push({
      x:xx, y:yy,
      c: colors[colorIndex],
      speed: random(1, 3),
      direction: random([1, -1]),
      type: type,
    })
  }
}

// Mouse click event handling
function mousePressed() {
  // Click to start the animation
  isStart = true;
  if(!bgmSound.isLooping()) {
    bgmSound.loop();
    //* Loops background music if it isn’t already playing.
  }
}
