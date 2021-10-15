const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;
var bg;

function preload() {
  time();
}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(500, 600, 1000, 20);
  level1 = new Level(500, 400, 280, 20);
  level2 = new Level(600, 200, 250, 20);

  stone1 = new stone(10, 230, 40);
  attach = new Throw(stone1.body, { x: 100, y: 250 });

  box1 = new Box(370, 380, 30, 40);
  box2 = new Box(400, 380, 30, 40);
  box3 = new Box(430, 380, 30, 40);
  box4 = new Box(460, 380, 30, 40);
  box5 = new Box(490, 380, 30, 40);
  box6 = new Box(510, 380, 30, 40);
  box7 = new Box(540, 380, 30, 40);
  box8 = new Box(530, 350, 30, 40);
  box9 = new Box(500, 350, 30, 40);
  box10 = new Box(470, 350, 30, 40);
  box11 = new Box(440, 350, 30, 40);
  box12 = new Box(410, 350, 30, 40);
  box13 = new Box(380, 350, 30, 40);
  box14 = new Box(390, 320, 30, 40);
  box15 = new Box(420, 320, 30, 40);
  box16 = new Box(450, 320, 30, 40);
  box17 = new Box(480, 320, 30, 40);
  box18 = new Box(510, 320, 30, 40);

  boxes1 = new Box(500, 160, 30, 40);
  boxes2 = new Box(530, 160, 30, 40);
  boxes3 = new Box(560, 160, 30, 40);
  boxes4 = new Box(590, 160, 30, 40);
  boxes5 = new Box(620, 160, 30, 40);
  boxes6 = new Box(650, 160, 30, 40);
  boxes7 = new Box(680, 160, 30, 40);
  boxes8 = new Box(510, 130, 30, 40);
  boxes9 = new Box(540, 130, 30, 40);
  boxes10 = new Box(570, 130, 30, 40);
  boxes11 = new Box(600, 130, 30, 40);
  boxes12 = new Box(630, 130, 30, 40);
  boxes13 = new Box(660, 130, 30, 40);
  boxes14 = new Box(520, 100, 30, 40);
  boxes15 = new Box(550, 100, 30, 40);
  boxes16 = new Box(580, 100, 30, 40);
  boxes17 = new Box(610, 100, 30, 40);
  boxes18 = new Box(640, 100, 30, 40);

  Engine.run(engine);
}

function draw() {
  if (bg) {
    rectMode(CENTER);
    background(bg);

    fill("white");
    text("Press Space to get a second chance", 20, 20);

    textSize(35);
    fill("pink");
    text("SCORE: " + score, 100, 70);

    ground1.display();
    level1.display();
    level2.display();
    stone1.display();
    attach.display();
    box1.display();
    box1.score();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();

    boxes1.display();
    boxes2.display();
    boxes3.display();
    boxes4.display();
    boxes5.display();
    boxes6.display();
    boxes7.display();
    boxes8.display();
    boxes9.display();
    boxes10.display();
    boxes11.display();
    boxes12.display();
    boxes13.display();
    boxes14.display();
    boxes15.display();
    boxes16.display();
    boxes17.display();
    boxes18.display();

    boxes1.score();
    boxes2.score();
    boxes3.score();
    boxes4.score();
    boxes5.score();
    boxes6.score();
    boxes7.score();
    boxes8.score();
    boxes9.score();
    boxes10.score();
    boxes11.score();
    boxes12.score();
    boxes13.score();
    boxes14.score();
    boxes15.score();
    boxes16.score();
    boxes17.score();
    boxes18.score();

    drawSprites();
  }
}
function mouseDragged() {
  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  attach.fly();
}

function detectCollision(lstones, lmango) {
  if (
    lstones.body.position.x - lmango.body.position.x <
      lmango.radius + lstones.radius &&
    lmango.body.position.x - lstones.body.position.x <
      lmango.radius + lstones.radius &&
    lstones.body.position.y - lmango.body.position.y <
      lmango.radius + lstones.radius &&
    lmango.body.position.y - lstones.body.position.y <
      lmango.radius + lstones.radius
  ) {
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, { x: 100, y: 480 });
    attach.Launch(stone1.body);
  }
}

async function time() {
  var response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  console.log(response);
  var responseextract = await response.json();
  console.log(responseextract);
  var datetime2 = responseextract.datetime;
  console.log(datetime2);
  var time = datetime2.slice(11, 13);
  console.log(time);
  if (time >= 6 && time <= 19) {
    bg = loadImage("sprite/a.jpg");
  } else {
    bg = loadImage("sprite/b.jpg");
  }
}
