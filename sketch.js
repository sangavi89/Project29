const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2, polygon, polygonImage, slingShot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var blockA, blockB, blockC, blockD, blockE, blockF, blockG, blockH, blockI;

function preload(){

polygonImage = loadImage("polygon.png");

}

function setup(){
  var canvas = createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(50, 400, 2400, 100);
  stand1 = new Ground(400, 300, 200, 10);
  stand2 = new Ground(1000, 200, 200, 10);

  //bottom level
  blockA = new Box(330, 235, 30, 40);
  blockB = new Box(360, 235, 30, 40);
  blockC = new Box(390, 235, 30, 40);
  blockD = new Box(420, 235, 30, 40);
  blockE = new Box(450, 235, 30, 40);

  // Middle level 
  blockF = new Box(360, 195, 30, 40);
  blockG = new Box(390, 195, 30, 40);
  blockH = new Box(420, 195, 30, 40);

  // Top level
  blockI = new Box(390, 155, 30, 40);

  block1 = new Box(930, 180, 30, 30);
  block2 = new Box(960, 180, 30, 30);
  block3 = new Box(990, 180, 30, 30);
  block4 = new Box(1010, 180, 30, 30);
  block5 = new Box(1030, 180, 30, 30);

  block6 = new Box(953, 130, 30, 30);
  block7 = new Box(984, 130, 30, 30);
  block8 = new Box(1015, 130, 30, 30);

  block9 = new Box(984, 80, 30, 30);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon, {x: 100, y:200});

}

function draw(){
  background("green");
  //Engine.update(engine);




  ground.display();
  stand1.display();
  stand2.display();
  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();
  blockH.display();
  blockI.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display(); 
  block7.display();
  block8.display();
  block9.display();
 
  fill("white")
 imageMode(CENTER)
 image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);
 slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon.body);
  }
}