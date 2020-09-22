//Create variables here
var dog,happydog,databse,foodS,foodStock;

function preload()
{
  img  = loadImage('images/dogimg.png')
  //img2 = loadImage('images/dogimpg1.png')s
}

function setup() {
  database = firebase.database()
	createCanvas(1600, 1600);
 dog = createSprite(800,14000,10,50); 
dog.addImage("hidog",img);
 foodStock = database.ref('food')
 foodStock.on('value',redStock,errorStock)
}


function draw() {  

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage("hi",img);
}

  drawSprites();
  //add styles here

  text("Note Press UP_ARROW Key To Feed Drago Milk",30,150);
  textSize(36);
fill(red);
stroke(255);
}

//function to read values from DB
function redStock(data){
  foodS = data.val();
}
function errorStock(){
  console.log("getting error")
}

//function to write values in DB
function writeStock(x){

  database.ref('/').update({
    food:x
  })
}



