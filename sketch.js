
var monkey , monkeyRunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,survivalTime=0;
var ground,invisibleG;

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  
  
  monkey=createSprite(100,400,20,20)
  monkey.addAnimation("running",monkeyRunning)
  monkey.scale=0.2;
  
   foodG=createGroup();
   obstacleG=createGroup();
  
  ground=createSprite(0,460,600,5);
  ground.x =ground.width/2
  
  invisibleG=createSprite(0,465,600,5);
  invisibleG.visible=false;
  
}


function draw() {
background("white");
  
  fill("black");
  text("Score: "+ score,100,20);
  
  text("Survival Time: " + survivalTime,400,20);
  survivalTime=Math.ceil(frameCount/frameRate())
  
  monkey.collide(invisibleG);
  
  if(keyDown("space") && monkey.y >= 350){
    monkey.velocityY=- 10;
  }
  monkey.velocityY=monkey.velocityY+0.5 ;
  
  if(monkey.isTouching(foodG)){
    foodG.destroyEach();
    score=score+1;
  }
  
   if(monkey.isTouching(obstacleG)){
    obstacleG.destroyEach();
    score=score-1;
     
  }
  
  
  Obstacle();
  Food();
  drawSprites();
}


function Food(){
  var banana=createSprite(600,600,600)
 banana.visible=false;
  if(frameCount%80===0){
    banana.y=Math.round(random(200,350));
   
   
    banana.visible=true;
  }
    
  banana.scale=0.1;
  banana.velocityX=-10
    banana.lifetime=60;
  
  banana.addImage(bananaImage)
  
  foodG.add(banana);
}

function Obstacle(){
  var obstacle=createSprite(600,600,600)
 obstacle.visible=false;
  if(frameCount%300===0){
    obstacle.y=Math.round(random(200,350));
   
   
    obstacle.visible=true;
  }
    
  obstacle.scale=0.1;
  obstacle.velocityX=-10
    obstacle.lifetime=60;
  
 obstacle.addImage( obstaceImage)
  
  obstacleG.add(obstacle);
}

