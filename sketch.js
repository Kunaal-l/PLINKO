const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;




var particles=[]
var framecount = 0
var world , engine
var ground;






function setup() {
  createCanvas(800,800);
 engine = Engine.create()
 world = engine.world
 // createSprite(400, 200, 50, 50);
  
  framecount = framecount+60;
  console.log(framecount)
}

function draw() {
  background(255,255,255);  
 ground = new Ground(600,height,1600,15);
 //particle = new Particle(200,200,100)
       
 
 
  ground.display();
  if(framecount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),10,150));
  }
  particle.display();
  console.log(particles[0])

  drawSprites();
}