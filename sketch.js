
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball1_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var ball2_options = {
    restitution: 0.95,
    frictionAir:0.01,
  }
   
   var ground_options ={
     isStatic: true
   };
   
   var obstacle_options ={
    isStatic: true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball1 = Bodies.circle(100,10,20,ball1_options);
  World.add(world,ball1);
  
  ball2 = Bodies.circle(300, 10, 20, ball2_options);
  World.add(world,ball2);

  obstacle = Bodies.rectangle(350, 200, 200, 25, obstacle_options);
  World.add(world,obstacle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(obstacle.position.x, obstacle.position.y, 300, 25);
}

