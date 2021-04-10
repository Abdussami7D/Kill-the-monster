const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var b1,b2,b3,b4,b5,b6;
var boxes1,boxes2,boxes3,boxes4,boxes5,boxes6,boxes7,boxes8;
var B1,B2,B3,B4,B5;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);

  b1 = new Box(700, 100, 70, 70);
  b2 = new Box(700, 100, 70, 70);
  b3 = new Box(700, 100, 70, 70);
  b4 = new Box(700, 100, 70, 70);
  b5 = new Box(700, 100, 70, 70);
  b6 = new Box(700, 100, 70, 70);

  boxes1 = new Box(800, 100, 70, 70);
  boxes2 = new Box(800, 100, 70, 70);
  boxes3 = new Box(800, 100, 70, 70);
  boxes4 = new Box(800, 100, 70, 70);
  boxes5 = new Box(800, 100, 70, 70);
  boxes6 = new Box(800, 100, 70, 70);
  boxes7 = new Box(800, 100, 70, 70);
  boxes8 = new Box(800, 100, 70, 70);
 
  B1 = new Box(900, 100, 70, 70);
  B2 = new Box(900, 100, 70, 70);
  B3 = new Box(900, 100, 70, 70);
  B4 = new Box(900, 100, 70, 70);
  B5 = new Box(900, 100, 70, 70);
 
  
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes7.display();
  boxes8.display();

  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();


  hero.display();
  rope.display();
  monster.display();

}


function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});


}
