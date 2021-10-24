const Engine = Matter.Engine;
const Composite = Matter.Composite;
const Bodies = Matter.Bodies;
var engine, world;
var ground, shovel;
var chair1, chair2, ball1, ball2, ball3, umbrella1, umbrella2, picnicBasket, backgroundImg;

function preload() {
    backgroundImg = loadImage("./sprites/beach.jpg");
}

function setup() {
    canvas = createCanvas(1400, 750);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);
    ground = new Ground(width / 2, height - 10, width, 20);
    shovel = new Shovel(150, 150);
    ball1 = new Ball(500, 320);
    ball2 = new Ball(550, 420);
    ball3 = new Ball(700, 320);
    chair1 = new Chair(820, 500);
    chair2 = new Chair(980, 500);
    umbrella1 = new Umbrella(125, 280, 300, 0)
    umbrella2 = new Umbrella(1200, 280, 300, 0);
    picnicBasket = new Basket(280, 300)
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    shovel.display();
    ball1.display();
    ball2.display();
    ball3.display();
    chair1.display();
    chair2.display();
    picnicBasket.display();
    umbrella1.display();
    umbrella2.display();

}

