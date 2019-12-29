const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var square;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,50,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution : 1.0
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    
    var square_options ={
        restitution : 2.0
    }

    square = Bodies.rectangle(150,30,30,30,square_options);
    World.add(world,square);

    console.log(ball);
}

function draw(){
    background(0);
   
    Engine.update(engine);
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    rectMode(CENTER);
    rect(square.position.x,square.position.y,30,30);

}