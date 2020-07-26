//Global Variables
var bananaimage,obstacleimage, obstaclegroup,score,backgroundimg;
var score
 var PLAY=0;
  var END=0;
var gameState=PLAY;
var monkeyimg,backround,monkey,bananagroup,ground;


function preload(){
  backgroungimg=loadImage("jungle.jpg");
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaimage=loadImage("Banana.png")  
 obstacleimage=loadImage("stone.png") 
}


function setup() {
  createCanvas(600,300);
  backround=createSprite(300,150,600,300)
  backround.addImage("jungle.jpg",backgroungimg)
  
  monkey=createSprite(100,265)
  ground=createSprite(300,290,600,10)
  monkey.addAnimation("running",monkeyimg);
 monkey.scale=0.1
   bananagroup=new Group();
  obstaclegroup=new Group();
  score=0;
  ground.visible=false;
  ground.x = ground.width /2;
  backround.velocityX=-3
 
}


function draw(){
 background(255); 
  
  if(gameState===PLAY){
    
  if(keyDown("space")){
     monkey.velocityY=-15
  }  
  if (obstaclegroup.isTouching(monkey)){
     monkey.scale=0.1;
  } 
  
    
    if(bananagroup.collide(monkey)){
      score=score+2
      bananagroup.destroyEach();
    }
    spawnObstacles();
   spawnbanana();
    if (backround.x < 0){
      backround.x = backround.width/2;
    }
    backround.scale=2;
     
    switch(score){
    case 10:  monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break; 
    case 30 : monkey.scale=0.16;
            break;
    case 40 : monkey.scale=0.18;
            break;
      default:break;
    }
     
 }else if(gameState===END){
          text("you lose",500,200)
   }
  
  
  
  
 
 
  
   
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
  stroke("white");
  fill("white")
  text("Score="+score,300,160)
}
function spawnbanana() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(300,150,10,40);
     banana.addImage("Banana.png",bananaimage);
     banana.y=Math.round(random(120,200));
   
    
   
    banana.scale =0.05;
    banana.lifetime = 80;
    banana.velocityX=-5;
    //add each obstacle to the group
    bananagroup.add(banana);
    
  }
}
 
function spawnObstacles() {
  if(frameCount %300=== 0) {
    var obstacle = createSprite(600,280,10,40);
     obstacle.addImage ("stone.png",obstacleimage);
     obstacle.velocityX=-5
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = -1;
    //add each obstacle to the group
    obstaclegroup.add(obstacle);
  }
}