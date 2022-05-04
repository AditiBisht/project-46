
function setup(){
    createCanvas(1200,800);
    ground = createSprite(200,780,2000,20);

    fish = createSprite(100,745,20,50);
    fish.addImage(fishImg);
    fish.scale=0.2;
}
function preload(){
    bg = loadImage("bg 1.jpg");
    planks = loadImage("plank.jpg");
    fishImg = loadImage("mermaid 3.png");
    obstacleImg = loadImage("shark.png");
}
function draw(){
    background(bg);
 //plateform.x = math.round(random(650,1200));
   if(keyDown("space")&&fish.y>=250){
       fish.velocityY = -12;
   }
   fish.velocityY = fish.velocityY+0.8;

   fish.collide(ground); 
    spawnPlateforms();
   //spawnObstacles();
   abc();
    drawSprites();
}
function abc(){

    if(frameCount%200===0){
        obstacle = createSprite(700,500,100,20);
        obstacle.addImage(obstacleImg);
        obstacle.scale = 0.3;
        obstacle.velocityX = -7;
        obstacle.y = Math.round(random(400,800));
    }
}

function spawnPlateforms(){
    if(frameCount%60===0){
    plateform = createSprite(600,450,100,20);
    plateform.addImage(planks);
    plateform.scale=0.4;
    plateform.velocityX = -5;
    plateform.y = Math.round(random(250,600));
}

}