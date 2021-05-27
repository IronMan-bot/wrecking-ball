const Engine = Matter.Engine
const World =  Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var ground

function setup() {
createCanvas(1200,600);
engine = Engine.create(); 
world = engine.world;


ground1 = new Ground()
box1 = new Box( 850,480,100,100)
box2 = new Box(850,380,100,100)
box3 = new Box(850,280,100,100)
box4 = new Box(850,180,100,100)
box5 = new Box(850,80,100,100)
ball1 = new Ball(600,500,50)
chain1 = new Chain(ball1.body,{x:564 ,y:2 })

}

function draw() {
background(0);  
Engine.update(engine);
text(mouseX+"   "+mouseY,50,50)
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ball1.display();
chain1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY })
}

function mouseReleased(){
    chain.disconnectBall1()   
    

}