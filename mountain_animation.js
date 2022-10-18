let i = 10;
let night = 0;
function setup() {
  createCanvas(1000, 500);
}

function draw() {
  let gray = color(128,128,128);
  let yellow = color(255,167,0);
  
  if (i/10 >= 800) {
    i = -400;
  }
  
  if (i/10 >= 450) {
    night++;
    background(300-night/2);
  }
  else {
    background(360);
    night = 0;
  }
  
  //sun
  fill(yellow);
  noStroke();
  circle(550 + i/30, 400 - i/10, 80);
  i+=5;
  
  //gradient
  for (let x = 0; x < 100; x++) {
      fill(255,167,0,2);
      circle(550 + i/30, 400 - i/10, 80+x*15);
  }
  push();
  fill(360, 360, 360, night/2);
  translate(200, 100);
  star(0, 0, 10, 20, 5);
  translate(100, 100);
  star(0, 0, 10, 20, 5);
  translate(50, -150);
  star(0, 0, 10, 20, 5);
  translate(125, 50);
  star(0, 0, 10, 20, 5);
  translate(50, 175);
  star(0, 0, 10, 20, 5);
  translate(45, -70);
  star(0, 0, 10, 20, 5);
  translate(75, 10);
  star(0, 0, 10, 20, 5);
  translate(30, -125);
  star(0, 0, 10, 20, 5);
  pop();
  
  fill(360);
  // cloud 1
  circle(100+200 + i/45, 100, 70);
  circle(150+200 + i/45, 100, 100);
  circle(185+200 + i/45, 120, 90);
  circle(185+200 + i/45, 95, 90);
  circle(230+200 + i/45, 90, 60);
  
  //cloud 2
  circle(120+400 + i/25, 100+100, 60);
  circle(150+400 + i/25, 100+100, 80);
  circle(150+400 + i/25, 90+100, 80);
  circle(185+400 + i/25, 120+100, 75);
  circle(185+400 + i/25, 95+100, 90);
  circle(210+400 + i/25, 90+100, 60);
  
  
  //small mountain
  fill(gray);
  noStroke();
  
  triangle(650, 300, 450, 500, 800, 500);
  
  //snow
  fill(360);
  strokeWeight(1);
  stroke(gray);
  
  triangle(650, 300, 600, 350, 687.5, 350);
  
  noStroke();
  triangle(650, 400, 625, 330, 670, 330);
  
  //big mountain
  fill(gray);
  noStroke();
  
  triangle(400, 200, 200, 500, 600, 500);
  
  //snow
  fill(360);
  strokeWeight(1);
  stroke(gray);
  
  triangle(400, 200, 300, 350, 500, 350);
  
  noStroke();
  triangle(400, 400, 350, 330, 425, 330);
  triangle(450, 420, 390, 330, 470, 330);
  triangle(350, 375, 320, 330, 470, 330);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
