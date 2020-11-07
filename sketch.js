
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1
var boy1
var mango1,mango2,mango3,mango4,mango5
var tree1
var ground1
var launcher1
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(400,700,1000,40)
    stone1=new Stone(250,400,40) 
    tree1=new Tree(800,525,350,350)
    boy1=new Boy(300,625,250,170)
    mango1=new Mango(750,375,45)
    mango2=new Mango(850,400,60)
    mango3=new Mango(725,450,55)
    mango4=new Mango(850,500,45)
    mango5=new Mango(800,500,50)
    launcher1 = new Launcher(stone1.body, { x:250, y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  ground1.display();
  
  tree1.display();

  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  launcher1.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  
}
function mouseDragged() {

  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
  
  }
  
  function mouseReleased() {
  
  launcher1.fly();
  
  }
  function keypressed(){
    if(keyDown("up") ){
      Matter.Body.setPosition(stone1.body,{x:250,y:550})
      launcher1.attach(stone1.body);
    }
    
  }
function detectCollision(Lstone,Lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.body.setStatic(lmango.body,false)
  }
}

