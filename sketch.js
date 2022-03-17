var faca;
var facaimagem;
var frutaimagem1, frutaimagem2, frutaimagem3, frutaimagem4;
var estadodejogo="jogar";
var pontos=0;
var facaG;
var frutaG;
var alienimagem1;
var alienimagem2;
var alienG;
var gameoverimagem;
var gameoversom;
var gameover;
var somfaca;

function preload() {

  facaimagem=loadImage("knife.png");
  frutaimagem1=loadImage("fruit1.png");
  frutaimagem2=loadImage("fruit2.png");
  frutaimagem3=loadImage("fruit3.png");
  frutaimagem4=loadImage("fruit4.png");
  alienimagem1=loadImage("alien1.png");
  alienimagem2=loadImage("alien2.png");
  gameoverimagem=loadImage("fimdejogo.png");
  gameoversom=loadSound("gameover.mp3");
  somfaca=loadSound("knifeSwoosh.mp3");
  
}


function setup(){

  createCanvas(600,600);

  gameover=createSprite(300,300,100,200);
  gameover.addImage(gameoverimagem);
  
  
  
  faca=createSprite(300,300,100,100);
  faca.addImage(facaimagem);
  faca.scale=0.5;
  facaG=createGroup();
  facaG.add(faca);

  frutaG=createGroup();

  alienG=createGroup();




}

function draw(){
 background(30,144,255);
 text ("pontos  : "+ pontos,10,15);


 
 if(estadodejogo==="jogar"){
 faca.x=World.mouseX;
 faca.y=World.mouseY;
 criarfruta();
 criaraliens();
 gameover.visible=false;


if(facaG.isTouching(frutaG)){

pontos=pontos+1;
frutaG.destroyEach();
somfaca.play();



}

if(facaG.isTouching(alienG)){

  estadodejogo="fim";
  gameoversom.play();
}




}

if(estadodejogo==="fim"){

  facaG.destroyEach();
  frutaG.destroyEach();
  alienG.destroyEach();
  gameover.visible=true;
}






drawSprites();
}




function criarfruta(){
 if(frameCount%60==0){

var fruta = createSprite(0,Math.round(random(50,550)),10,10);
fruta.velocityX=5+(pontos);
fruta.lifetime=100;
fruta.scale=0.15;
frutaG.add(fruta);


var escolherfruta=Math.round(random(1,4));

switch(escolherfruta){
  case 1:
    fruta.addImage(frutaimagem1);
     break;
  case 2:
    fruta.addImage(frutaimagem2);
     break;
  case 3:
    fruta.addImage(frutaimagem3);
     break;
 case 4:
  fruta.addImage(frutaimagem4);
     break;
     default:
     break;
}  
}
}


function criaraliens(){

  if(frameCount%30==0){
  
  var alien = createSprite(600,Math.round(random(50,550)),10,10);
  alien.velocityX=-5-(pontos);
  alien.lifetime=200;
  alienG.add(alien);
  
  
  var escolheralien=Math.round(random(1,2));
  
  switch(escolheralien){
   
    case 1:
      alien.addImage(alienimagem1);
      break;
    case 2:
      alien.addImage(alienimagem2);
      break;
      default:
      break;
  
  
  
  }
  }
  } 
  
