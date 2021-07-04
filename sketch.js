var player, playerImg, runImg, jumpImg, fallImg, count=0;
var ground;
var backgroundImage;
var enemy1;

var block1, block2,  block3,  block4,  block5,  block6,  block7,  block8,  block9,  block10;
var block11, block12,  block13,  block14,  block15,  block16,  block17,  block18,  block19,  block20;
var block21, block22,  block23,  block24,  block25,  block26,  block27,  block28,  block29,  block30;
var block31, block32,  block33,  block34,  block35,  block36,  block37,  block38,  block39,  block40;
var block41, block42,  block43,  block44,  block45,  block46,  block47,  block48,  block49,  block50;
var block51, block52,  block53,  block54,  block55,  block56,  block57,  block58,  block59,  block60;
var block61, block62,  block63,  block64,  block65,  block66;
var blockGroup;



function preload(){
  playerImg=loadImage("run/run0.png")
  runImg=loadAnimation("run/run0.png", "run/run1.png" , "run/run2.png" , "run/run3.png" , "run/run4.png" , "run/run5.png")
  jumpImg=loadAnimation("run/jump0.png", "run/jump1.png" , "run/jump2.png" , "run/jump3.png" )
  fallImg=loadAnimation( "run/fall0.png" , "run/fall1.png");
  backgroundImage = loadImage("back.jpg");

}



function setup() {
    createCanvas(displayWidth,displayHeight);
    player= createSprite(400, 200, 50, 50);
    player.addImage(playerImg)
    player.addAnimation("player" , playerImg);
    player.addAnimation("playerRun", runImg)
    player.addAnimation("playerJump", jumpImg)
    player.addAnimation("playerFall", fallImg)

    enemy1= createSprite(880, 200, 10, 10);
    enemy1.shapeColor = "blue";

    blockGroup = new Group();

    block1 = createSprite(650,50,450,10);
    blockGroup.add(block1);
    block1.shapeColor ="red";

    block2 = createSprite(650, 500,450,10);
    blockGroup.add(block2);
    block2.shapeColor ="red";
    
    block3 = createSprite(870, 365,10,260);
    blockGroup.add(block3);
    block3.shapeColor ="red";

    block4 = createSprite(430, 365,10,260);
    blockGroup.add(block4);
    block4.shapeColor ="red";

    block5 = createSprite(870, 115,10,130);
    blockGroup.add(block5);
    block5.shapeColor ="red";
    
    block6 = createSprite(430, 115,10,130);
    blockGroup.add(block6);
    block6.shapeColor ="red";

    block7 = createSprite(470, 115,10,50);
    blockGroup.add(block7);
    block7.shapeColor ="red";

    block8 = createSprite(520, 135,10,180);
    blockGroup.add(block8);
    block8.shapeColor ="red";

    block9 = createSprite(600, 120,50,10 );
    blockGroup.add(block9);
    block9.shapeColor ="red";

    block10 = createSprite(580, 220,120,10);
    blockGroup.add(block10);
    block10.shapeColor ="red";

    block11 = createSprite(580, 275,180,10);
    blockGroup.add(block11);
    block11.shapeColor ="red";

    block12 = createSprite(600, 165,70,10);
    blockGroup.add(block12);
    block12.shapeColor ="red";

    block13 = createSprite(700, 200,10,80);
    blockGroup.add(block13);
    block13.shapeColor ="red";

    




} 

function draw() {
  background(backgroundImage);  
  
  if(keyWentDown("d")){
    player.changeAnimation("playerRun", runImg)
    player.velocityX=9
  }
  
  if(keyWentUp("d")){
    player.changeAnimation("player", playerImg)
    if(count%2!=0) {
      player. mirrorX(player. mirrorX() * -1)
      count=count+1
    }
    player.velocityX=0
  }



      
  if(keyWentDown("a")){
    player.changeAnimation("playerRun", runImg)
    if(count%2==0) {
      player. mirrorX(player. mirrorX() * -1)
      count=count+1
    }
    player.velocityX=-12
  }
    
    
    
  if(keyWentUp("a")){
    player.changeAnimation("player", playerImg)
    player.velocityX=0
  }


  if(keyWentDown("w")){
    player.velocityY=-12
  }

  if(keyWentUp("w")){
    player.velocityY=0
  }

  if(keyWentDown("s")){
    player.velocityY=12
  }


  if(keyWentUp("s")){
    player.velocityY=0
  }

  player.collide(blockGroup);

  drawSprites();
}