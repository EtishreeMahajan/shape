var box, box1,box2;
var dottedImg, dotted;
var circle,circleImg;
var heart,heartImg;
var star,starImg;
var rectangle,rectangleImg;
var square,squareImg;
var triangle,triangleImg;
var button;
var detail;
function preload() {
  dottedImg = loadImage("asserts/basics/image.png");
  circleImg = loadImage("asserts/circle/circle.png");
  heartImg = loadImage("asserts/other shapes/heart.png");
  starImg = loadImage("asserts/other shapes/star.png");
  rectangleImg = loadImage("asserts/quadrilaterals/retangle.png");
  squareImg = loadImage("asserts/quadrilaterals/square.jpg");
  triangleImg = loadImage("asserts/triangle/triangle.jpg");
}

function setup() {
  
  createCanvas(800, 800);

  //detail = new Detail();

  box = createSprite(400, 400, 600, 600);
  box.shapeColor = 255;

  box1 = createSprite(600,640,150,75);
  box1.shapeColor = "yellow";
  

  box2 = createSprite(200,640,150,75);
  box2.shapeColor = "yellow";
    
  dotted = createSprite(450, 430, 50, 50);
  dotted.addImage("img", dottedImg);
  dotted.scale = 0.8;

  triangle = createSprite(360,365,50,50);
  triangle.addImage(triangleImg);
  triangle.scale = 0.6;

  rectangle = createSprite(200,365,50,50);
  rectangle.addImage(rectangleImg);
  rectangle.scale = 0.15;

  square = createSprite(470,460,50,50);
  square.addImage(squareImg);
  square.scale = 0.3;

  circle = createSprite(265,455,50,50);
  circle.addImage(circleImg);
  circle.scale = 0.15;

  star = createSprite(160,450,50,50);
  star.addImage(starImg);
  star.scale = 0.08;

  heart = createSprite(370,475,50,50);
  heart.addImage(heartImg);
  heart.scale = 0.15;

 
}

function draw() {
  background("yellow");

  /*if(keyDown("d")){
    detail.display();
  }*/

  textSize(50);
  fill(0);
  strokeWeight(3);
  stroke(0)
  text("SHAPE LEARNING", 190, 65);

  drawSprites();

  textSize(30);
  fill(0);
  strokeWeight(1.5);
  stroke(0)
  text("Shapes are our first step to start learning. ", 130, 150);
  text("This is a simple and enjoyable app for ", 130, 200);
  text("children to recognize and learn shape ", 130, 250);
  text("easily.", 130, 300);
  text("Details",555,600);
  text("Begin",160,600);
  text("Press B",150,635);
  text("to start.",150,665);
  text("Press D to",530,635);
  text("see Detail.",530,665);
}









/*
var cylinderImg;
var ovalImg;
var sphereImg;

var decagonImg;

var heptagonImg;
var hexagonImg;
var nonagonImg;
var octagonImg;
var pentagonImg;


var cubeImg;
var cuboidImg;
var kiteImg;
var parallelogramImg;

var rhombusImg;

var trapeziumImg;

var acuteAngledImg;
var coneImg;
var equilateralImg;
var isocelesImg;
var obtuseAngledImg;
var prismImg;
var pyramidImg;
var rightAngledImg;
var scaleneImg;
 */

/*function preload(){

  cylinderImg = loadImage("asserts/circle/cylinder.jpg");
  ovalImg = loadImage("asserts/circle/Oval.png");
  sphereImg = loadImage("asserts/circle/sphere.jpg");

  decagonImg = loadImage("asserts/otherdecagon.png");

  heptagonImg = loadImage("heptagon.png");
  hexagonImg = loadImage("hexagon.png");
  nonagonImg = loadImage("nonagon.png");
  octagonImg = loadImage("octagon.png");
  pentagonImg = loadImage("pentagon.png");


  cubeImg = loadImage("cube.png");
  cuboidImg = loadImage("cuboid.png");
  kiteImg = loadImage("kite.png");
  parallelogramImg = loadImage("parallelogram.png");

  rhombusImg = loadImage("rhombus.png");

  trapeziumImg = loadImage("trapezium.png");

  acuteAngledImg = loadImage("acoteAngled.png");
  coneImg = loadImage("cone.png");
  equilateralImg = loadImage("equilateral.png");
  isocelesImg = loadImage("isoceles.png");
  obtuseAngledImg = loadImage("obtuseAngled.png");
  prismImg = loadImage("prism.png");
  pyramidImg = loadImage("pyramid.png");
  rightAngledImg = loadImage("rightAngled.jpg");
  scaleneImg = loadImage("scalene.png");


}*/