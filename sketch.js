let moverX = 40

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(0);
}

function draw() {
  fill (random(125), random(125), random(125))
  circle (moverX, random(200), 50)
  circle (moverX, 150, 20)
  circle (moverX, 100, 20)
  
  fill (random(25), random(25), random(25))
  circle (moverX, random(800), 50)
  circle (moverX, 250, 20)
  circle (moverX, 300, 20)
    moverX = moverX + 2;

    if (moverX == windowWidth){
  moverX = 40;
}

}