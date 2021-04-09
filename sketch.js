const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world;

function preload(){

  polygon = loadImage("polygon.png");

}

function setup() {
  
  createCanvas(1500,600);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(490,350,250,10);
  stand2 = new Stand(800,200,200,10);
 
  
  block1 = new Block(400,275,30,40);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  block8 = new Block (430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  block16 = new Block(490,155,30,40);

  blocks1 = new Block(740,175,30,40);
  blocks2 = new Block(770,175,30,40);
  blocks3 = new Block(800,175,30,40);
  blocks4 = new Block(830,175,30,40);
  blocks5 = new Block(860,175,30,40);
  blocks6 = new Block(770,135,30,40);
  blocks7 = new Block(800,135,30,40);
  blocks8 = new Block(830,135,30,40);
  blocks9 = new Block(800,95,30,40);

  poly = Bodies.circle(50,200,20 ,{density:10});
  World.add(world, poly);

  slingShot = new Slingshot(this.poly, {x:150, y:150})


}

function draw() {
  background("grey");  
  

  ground.display();

  stand1.display();
  stand2.display();

  slingShot.display();

  strokeWeight(1);
  stroke(0);


  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  


  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  

  
  fill("cyan");
  block13.display();
  block14.display();
  block15.display();


  
  fill("black");
  block16.display();

  
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();



  fill("cyan");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("pink")
  blocks9.display();

  

   imageMode(CENTER)
  image(polygon ,poly.position.x, poly.position.y,40,40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  
  slingShot.attach(poly);
  Matter.Body.setPosition(poly, {x:150, y:150});
}







