
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(750,590,1500,10,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    //ball = Bodies.rectangle(200,100,20,20, ball_options);
    //World.add(world,ball);

    box1=new Box(700,570);
    box2=new Box(1000,570);
    box3=new Box(700,450);
    box4=new Box(1000,450);
    box5=new Box(850,330);

    log1=new Log(850,470,400,PI);
    log2=new Log(850,350,400,PI);
    log3=new Log(900,310,250,PI/4);
    log4=new Log(800,310,250,-PI/4);

    pig1=new Pig(850,570,80,80);
    pig2=new Pig(850,450,80,80);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1500,10);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();


   
    ///rect(ball.position.x, ball.position.y, 20, 20);
}

