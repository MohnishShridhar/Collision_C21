var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(300, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(500, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(700, 100, 50, 50);
  gameObject4.shapeColor = "green";
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green";
}

function draw() {
  background(0, 0, 0);  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(isTouching(movingrect, gameObject1)) {
    movingrect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  } else {
    movingrect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  if(isTouching(movingrect, gameObject2)) {
    movingrect.shapeColor = "orange";
    gameObject2.shapeColor = "orange";
  } else {
    movingrect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  if(isTouching(movingrect, gameObject3)) {
    movingrect.shapeColor = "yellow";
    gameObject3.shapeColor = "yellow";
  } else {
    movingrect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  if(isTouching(movingrect, gameObject4)) {
    movingrect.shapeColor = "green";
    gameObject4.shapeColor = "blue";
  } else {
    movingrect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1, object2) {
 if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.width/2 + object2.width/2
    && object2.y - object1.y < object2.width/2 + object1.width/2){
    return true;
  }
  else{
    return false;
  }
 
}