function setup() {
  createCanvas(600, 400);
}

function printA(x, y) {
  triangle(x, y+20, x+10, y+20, x+10, y+10)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20) 
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+40, x+40, y+40, x+40, y+50)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20)
  rect(x+30, y+20, 10, 20)
}

function printB(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x, y+10, 10, 30)
  rect(x+30, y+20, 10, 20)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
}

function printC(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20)
}

function printD(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y, x+30, y+10, x+40, y+10)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20)
  rect(x+30, y+10, 10, 30)
}

function printE(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  triangle(x+ 30, y+20, x+40, y+20, x+30, y+30)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20)
}

function printF(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y)
  triangle(x, y+40, x, y+50, x+10, y+40)
  triangle(x+20, y, x+20, y+10, x+30, y+10)
  triangle(x+20, y+20, x+20, y+30, x+30, y+30)
  rect(x, y+10, 10, 30)
  rect(x+10, y, 10, 10)
  rect(x+10, y+20, 10, 10)
}

function printG(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  triangle(x+30, y+30, x+30, y+40, x+40, y+40)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20)
}

function printH(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y)
  triangle(x, y+40, x+0, y+50, x+10, y+40)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x, y+10, 10, 30)
  rect(x+30, y+20, 10, 20)
  rect(x+10, y+10, 20, 10)
}

function printI(x, y) {
  triangle(x, y+10, x+10, y, x+10, y+10)
  triangle(x, y+40, x, y+50, x+10, y+40)
  rect(x, y+20, 10, 20)
}

function printJ(x, y) {
  triangle(x+20, y+10, x+30, y, x+30, y+10)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x, y+40, x+10, y+40, x+10, y+30)
  triangle(x+20, y+40, x+20, y+50, x+30, y+40)
  rect(x+10, y+40, 10, 10)
  rect(x+20, y+20, 10, 20)
}

function printK(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y)
  triangle(x, y+40, x+0, y+50, x+10, y+40)
  triangle(x+30, y+20, x+30, y+30, x+40, y+30)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  triangle(x+30, y+10, x+30, y+20, x+40, y+10)
  triangle(x+20, y+20, x+30, y+10, x+30, y+20)
  rect(x, y+10, 10, 30)
  rect(x+30, y+30, 10, 10)
  rect(x+10, y+20, 20, 10)
}

function printL(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y)
  triangle(x, y+40, x+0, y+50, x+10, y+40)
  rect(x, y+10, 10, 30)
}

function printM(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x, y+50, x+10, y+40)
  rect(x, y+20, 10, 20)
  rect(x+10, y+10, 10, 10)
  triangle(x+20, y+10, x+20, y+20, x+30, y+20)
  rect(x+20, y+20, 10, 20)
  triangle(x+20, y+40, x+20, y+50, x+30, y+40)
  rect(x+30, y+10, 10, 10)
  triangle(x+40, y+10, x+40, y+20, x+50, y+20)
  rect(x+40, y+20, 10, 20)
  triangle(x+40, y+40, x+40, y+50, x+50, y+40)
}

function printN(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x, y+50, x+10, y+40)
  rect(x, y+20, 10, 20)
  triangle(x+10, y+20, x+20, y+10, x+20, y+20)
  rect(x+20, y+10, 10, 10)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  rect(x+30, y+20, 10, 20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
}

function printO(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x+10, y+10, 20, 10)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20) 
  rect(x+30, y+20, 10, 20)
}

function printP(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y)
  triangle(x, y+40, x, y+50, x+10, y+40)
  triangle(x+30, y, x+30, y+10, x+40, y+10)
  triangle(x+30, y+20, x+30, y+30, x+40, y+20)
  rect(x, y+10, 10, 30)
  rect(x+10, y, 20, 10)
  rect(x+10, y+20, 20, 10)
  rect(x+30, y+10, 10, 10)
}

function printQ(x, y) {
  triangle(x, y+10, x+10, y, x+10, y+10)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  triangle(x+30, y, x+30, y+10, x+40, y+10)
  triangle(x, y+20, x+10, y+20, x+10, y+30)
  rect(x+10, y, 20, 10)
  rect(x+10, y+20, 20, 10)
  rect(x, y+10, 10, 10)
  rect(x+30, y+10, 10, 30)
}

function printR(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x, y+50, x+10, y+40)
  rect(x, y+20, 10, 20)
  triangle(x+10, y+20, x+20, y+10, x+20, y+20)
  rect(x+20, y+10, 10, 10)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+20, x+30, y+30, x+40, y+20)
}

function printS(x, y) {
  triangle(x, y+10, x+10, y, x+10, y+10)
  triangle(x+30, y, x+30, y+10, x+40, y+10)
  triangle(x+30, y+20, x+30, y+30, x+40, y+30)
  triangle(x, y+20, x+10, y+20, x+10, y+30)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  rect(x+10, y, 20, 10)
  rect(x+10, y+20, 20, 10)
  rect(x, y+10, 10, 10)
  rect(x+10, y+40, 20, 10)
  rect(x+30, y+30, 10, 10)
}

function printT(x, y) {
  triangle(x+10, y+10, x+20, y+10, x+20, y)
  triangle(x+10, y+40, x+20, y+50, x+20, y+40)
  triangle(x, y+30, x+10, y+20, x+10, y+30)
  triangle(x+20, y+20, x+20, y+30, x+30, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x+10, y+10, 10, 30) 
  rect(x+20, y+40, 10, 10)
}

function printU(x, y) {
  triangle(x, y+20, x+10, y+20, x+10, y+10)
  triangle(x+30, y+20, x+40, y+20, x+40, y+10) 
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+40, x+40, y+40, x+30, y+50)
  triangle(x+20, y+40, x+20, y+50, x+30, y+40)
  rect(x+10, y+40, 10, 10)
  rect(x, y+20, 10, 20)
  rect(x+30, y+20, 10, 20)
}

function printV(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+30, y+10, x+30, y+20, x+40, y+20)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x+10, y+40, 20, 10)
  rect(x, y+20, 10, 20) 
  rect(x+30, y+20, 10, 20)
}

function printW(x, y) {
  triangle(x, y+20, x, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+40, x+10, y+50)
  triangle(x+20, y+10, x+20, y+20, x+30, y+20)
  triangle(x+20, y+40, x+20, y+50, x+30, y+40)
  rect(x+10, y+40, 10, 10)
  rect(x, y+20, 10, 20) 
  rect(x+20, y+20, 10, 20)
  triangle(x+40, y+10, x+40, y+20, x+50, y+20)
  triangle(x+40, y+40, x+40, y+50, x+50, y+40)
  rect(x+30, y+40, 10, 10)
  rect(x+40, y+20, 10, 20)
}

function printX(x, y) {
  triangle(x, y+10, x+10, y+10, x+10, y+20)
  triangle(x+20, y+20, x+10, y+10, x+10, y+20)
  triangle(x+20, y+20, x+20, y+30, x+10, y+20)
  triangle(x+20, y+20, x+20, y+30, x+30, y+20)
  triangle(x+20, y+20, x+30, y+10, x+30, y+20)
  triangle(x+40, y+10, x+30, y+10, x+30, y+20)
  triangle(x+10, y+40, x+20, y+30, x+20, y+40)
  triangle(x+30, y+40, x+20, y+30, x+20, y+40)
  triangle(x, y+50, x+10, y+50, x+10, y+40)
  triangle(x+20, y+40, x+10, y+50, x+10, y+40)
  triangle(x+20, y+40, x+30, y+50, x+30, y+40)
  triangle(x+40, y+50, x+30, y+50, x+30, y+40)
}

function printY(x, y) {
  triangle(x, y+10, x+10, y, x+10, y+10)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  triangle(x+30, y, x+30, y+10, x+40, y+10)
  triangle(x, y+20, x+10, y+20, x+10, y+30)
  rect(x+10, y+20, 20, 10)
  rect(x, y+10, 10, 10)
  rect(x+30, y+10, 10, 30)
  rect(x+10, y+40, 20, 10)
  triangle(x, y+30, x, y+40, x+10, y+40)
  triangle(x+10, y+50, x, y+40, x+10, y+40)
}

function printZ(x, y) {
  triangle(x, y+20, x+10, y+10, x+10, y+20)
  triangle(x, y+40, x+10, y+30, x+10, y+40)
  triangle(x+20, y+30, x+10, y+30, x+10, y+40)
  triangle(x+20, y+30, x+10, y+30, x+20, y+20)
  triangle(x+20, y+30, x+30, y+20, x+20, y+20)
  triangle(x+30, y+10, x+30, y+20, x+40, y+10)
  triangle(x+30, y+40, x+30, y+50, x+40, y+40)
  rect(x+10, y+10, 20, 10)
  rect(x, y+40, 30, 10)
  
}

function draw() {
  noStroke()
  fill(0)
  background(240);
  printA(10, 10)
  printR(60, 10)
  printT(110, 10)
  printI(210, 10)
  printS(230, 10)
  printH(320, 10)
  printA(370, 10)
  printR(420, 10)
  printD(470, 10)
}

