// kaliedo1

const lineWidth = 1;
let steps = 7;
let offsetX = 0;
let offsetY = 0;
let a = 0;
let m = 0.0;
let r = 0;
let font;
let fontsize = 30;
let fr = 30;

function preload() {
  font = loadFont('calibri-regular.ttf');
}

function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  stroke('blue');
  strokeWeight(lineWidth);
  ellipseMode(CENTER);
  noFill();
  steps = 3 + floor(random(11));
  //steps = 7;
  r = (min(windowWidth, windowHeight) / 2) - 5;
  let n = floor(random(999));
  m = round(1 + n/1000, 3);
  console.log(m)

  textFont(font);
  textSize(fontsize);

  //noLoop();
}

function draw() {
  offsetX = floor(windowWidth / 2);
  offsetY = floor(windowHeight / 2);
  translate(offsetX, offsetY);

  m += 0.001;
  background(220);
  a = TWO_PI / steps;
  ellipse(0, 0, r * 2, r * 2);
  for(let i=0;i<steps;i++) {
    for(let b=a; b<PI; b+=a) {
      let px1 = 0;
      let py1 = 0;
      let px2 = r * 1.0 * cos(b * m);
      let py2 = r * 1.0 * sin(b * m);
      bezier(r, 0, px1, py1, px2, py2, r*cos(b), r*sin(b));
    }
    rotate(a);
  }
  showValues();
}

function render() {
  clear();

}

function showValues() {

  fill('blue');
  let textX = windowWidth / 2 - 300;
  let textY = windowHeight / 2 - 100;
  text(`v = ${steps}`, textX, textY);
  text(`m = ${m.toFixed(3)}`, textX, textY + 30);
  noFill();

}

function keyPressed() {
  console.log(keyCode);
  switch(keyCode) {
    case 68:
      m += 0.001;
      break;
    case 69:
      m += 0.010;
      break;
    case 65:
      m -= 0.001;
      break;
    case 81:
      m -= 0.010;
      break;
    case 87:
      steps += 1;
      break;
    case 83:
      if(steps > 3) steps -= 1;
      break;
    
  }
  //render();
}

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);
