function setup() {
  createCanvas(900, 900);
  background("white");
}

function draw() {
  stroke('pink');
  fill("navy");
  
  
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 100, 100, 35);
  }
  
}