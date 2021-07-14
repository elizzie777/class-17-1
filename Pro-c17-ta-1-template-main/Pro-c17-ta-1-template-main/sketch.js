
var box;

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,20,20,2,4);
  box2 = new Box(200,100,20,20,4,3);
  box3 = new Box(10,20,20,20,10,5);
}

function draw() 
{
  background(220);
  box.show();
  box.move();
  box.moveUp();
  box2.show();
  box2.move();
  box2.moveUp();
  box3.show();
  box3.move();
  box3.moveUp();

}
