class Pig{

    constructor(x,y,w,h){
        this.body=Matter.Bodies.rectangle(x,y,w,h)
        Matter.World.add(world,this.body);
        this.width=w;
        this.height=h;
    }

    display(){
        push ();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("lightgreen");
        rect(0,0,this.width,this.height);
        pop();
    }
}