function setup() {
  createCanvas(500, 500);
  colorMode(HSB);

  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);

  describe('Two eyes that follow the cursor.');
}

function draw() {
  background(221, 75, 60);

  // Draw left eye

  let leftX = 125;
  let leftY = 200;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 100, 100);
  rotate(leftAngle);
  fill(0);
  ellipse(12.5, 0, 75, 75);
  pop();

  // Draw right eye

  let rightX = 350;
  let rightY = 200;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 75, 75);
  rotate(rightAngle);
  fill(0);
  ellipse(12.5, 0, 50, 50);
  pop();

  
}