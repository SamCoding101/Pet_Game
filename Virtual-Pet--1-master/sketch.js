var dog,dogImg;
var happyDogImg;
var foodS,foodStock;
var database;
var canvas;
var food;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  dog = createSprite(1050,300,20,20);
  dog.scale = 0.2
  dog.addImage(dogImg);

  database = firebase.database();

  food = new Food()

  food.getFood();
  food.getLastFed();

}


function draw() {  

  background(46,139,87);
 
  drawSprites();

  fill("yellow");
  textSize(20);
  text("Food Remaining: "+food.foodStock,1000,200);
  if(food.time<=12){
    text("Last Fed: "+food.time+" AM",500,displayHeight/2-400);
  }
  else{
    text("Last Fed: "+(food.time-12)+" PM",500,displayHeight/2-400);
  }
  food.display();
}
