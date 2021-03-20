const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    

   
     box1 = new Box(200,300,50,50);
     box2 = new Box(300,250,50,100);

     ground1 = new Ground(width/2,height-35);

}

function draw(){
    background("black");
    Engine.update(engine);
       
        box2.display();
    box1.display();

    ground1.displayGround();
}
