//


function setup() {
  createCanvas(415,415);

  Box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)){
     Box.x = Box.x + 10
  }

  if (keyIsDown(LEFT_ARROW)){
    Box.x = Box.x - 10
 }

 if (keyIsDown(UP_ARROW)){
  Box.y = Box.y - 10
}

if (keyIsDown(DOWN_ARROW)){
  Box.y = Box.y + 10
}
  drawSprites();
}




