var cnv;
let centX = 0;
let = centY = 0;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  //background(0);

}

function windowResized() {
  centerCanvas();
}

function draw(){
centX = windowWidth/2;
centY = windowHeight/2
  background(0);
  textFont("Old English text MT");
  textSize (55);
  fill (255, 252, 76, 200)
  text("bien", centX + 150, centY + 200)
  
  textFont("italic");
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(10), centY + 100)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80), centY + 80)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80), centY + 120)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80), centY + 40)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80), centY + 140)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80), centY + 160)
  //palabras del medio
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80, 160), centY + 180)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80, 160), centY + 200)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(80, 160), centY + 220)
  //palabras inferior derecha
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(190, 220), centY + 240)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(210, 260), centY + 260)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(190, 220), centY + 280)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(190, 270), centY + 310)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(190, 270), centY + 320)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(190, 270), centY + 340)
  textSize (35);
  fill (255, 252, 76, 130)
  text("No estoy", centX + random(190, 270), centY + 370)


}
