var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup(){
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,10);
  
  bullet.shapeColor="white";
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor="white";
  
  
}
function draw(){
  bullet.velocityX=speed;
  background("pink");
  if(wall.x-bullet.x<(wall.width+bullet.width)/2){
    bullet.velocityX=0;
    var damage=0.5*speed*weight*speed/thickness*thickness*thickness;
    if(damage>3){
      wall.shapeColor=color("red");
  }
  
  if(damage<3){
    wall.shapeColor=color("green");
  }
}

  drawSprites();

}
