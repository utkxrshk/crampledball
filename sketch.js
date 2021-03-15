
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var dustbin1;
var dustbin2; 
var dustbin3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball = new Paper(120,570,20)
  ground = new Ground(400,670,800,10)
  dustbin1 = new Dustbin(600,660,180,15)
  dustbin2 = new Dustbin(510,625,15,80)
  dustbin3 = new Dustbin(690,625,15,80)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

}
function keyPressed()
{
if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});

}

}



