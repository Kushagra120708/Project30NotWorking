const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var slingshot;
var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,
    block17,block18,block19,block20,block21,block22,block23,block24,block25;

function setup() {
    createCanvas(1300,600);

    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(120,300,60);

    ground1 = new Ground(650,590,1300,20);
    ground2 = new Ground(588,425,350,10);
    ground3 = new Ground(1050,230,285,10);

    slingshot = new SlingShot(polygon.body, {x:120, y:300});

    block1 = new BlueBlock(528,393);
    block2 = new BlueBlock(548,393);
    block3 = new BlueBlock(568,393);
    block4 = new BlueBlock(588,393);
    block5 = new BlueBlock(608,393);
    block6 = new BlueBlock(628,393);
    block7 = new BlueBlock(648,393);

    block8 = new PinkBlock(548,366);
    block9 = new PinkBlock(568,366);
    block10 = new PinkBlock(588,366);
    block11 = new PinkBlock(608,366);
    block12 = new PinkBlock(628,366);

    block13 = new GreenBlock(568,339);
    block14 = new GreenBlock(588,339);
    block15 = new GreenBlock(608,339);

    block16 = new BlackBlock(588,312);

    
    block17 = new BlueBlock(1010,198);
    block18 = new BlueBlock(1030,198);
    block19 = new BlueBlock(1050,198);
    block20 = new BlueBlock(1070,198);
    block21 = new BlueBlock(1090,198);

    block22 = new GreenBlock(1030,171);
    block23 = new GreenBlock(1050,171);
    block24 = new GreenBlock(1070,171);

    block25 = new PinkBlock(1050,144);


}

function draw() {
    background(56,44,44);
    Engine.update(engine);

    polygon.display();

    ground1.display();
    ground2.display();
    ground3.display();

    slingshot.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();


    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();
}

function mouseDragged() {

    Matter.Body.setPosition(polygon.body, {x: mouseX, Y: mouseY});
    
}
function mouseReleased() {

    slingshot.fly();
}