function setup() {
    createCanvas(640, 400);
    noStroke();
  }
  
  function draw() {
    background(0);
    let c = map(mouseX, 0, width, 0, 175);
    let d = map(mouseX, 0, width, 40, 300);
    fill(255, c, 0);
    ellipse(width/2, height/2, d, d);
  }
