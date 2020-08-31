var drop1, drop2, drop3, paperBall, drop1Body, drop2Body, drop3Body, paperBallBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 800);
    engine = Engine.create();
	world = engine.world;
	
	drop1 = createSprite(615,760,80,10);
	drop1Body = Bodies.rectangle(615,760,80,10,{isStatic:true});
	drop1.shapeColor = "gray";
	World.add(world,drop1Body);
	

	drop2 = createSprite(580,740,10,50);
	drop2Body = Bodies.rectangle(580,740,10,50,{isStatic:true})
	drop2.shapeColor = "gray";
	World.add(world,drop2Body);

	drop3 = createSprite(660,740,10,50);
	drop3Body = Bodies.rectangle(660,740,10,50,{isStatic:true})
	drop3.shapeColor = "gray";
	World.add(world,drop3Body);

	paperBall = createSprite(500,740,10,10);
    paperBall.shapeColor = "white";

	
	groundSprite=createSprite(600,780,800,20);
	groundSprite.shapeColor="tan"; 
	
	ground = Bodies.rectangle(width/2, 790, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	paperBallBody = Bodies.circle(400,780,80,{restitution:0.3,isStatic:false})
	World.add(world, paperBallBody);
	
	
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background(0);
   if(paperBall.isTouching(drop1)||paperBall.isTouching(drop3)){
	 paperBall.x = 500;
	 paperBall.y = 740;
   }
   if(paperBall.isTouching(groundSprite)){
	 paperBall.velocityX = 0;
	 paperBall.velocityY = 0;
   }
   drawSprites();
}
function keyPressed(){
	if (keyDown(UP_ARROW)){
	   paperBall.velocityY = -2
	   paperBall.velocityX = 2
	}
	if(paperBall.x>=drop1.x){
	  paperBall.velocityY = 2
	  paperBall.velocityX = 0
	}
}


