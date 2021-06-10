class Log{
    constructor(x,y,w,a){
        this.body=Bodies.rectangle(x,y,w,20,{restitution:0.6,friction:1});
        World.add(world,this.body);
        this.width=w;
        Matter.Body.setAngle(this.body, a);
    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("lightbrown");
        rect(0,0,this.width,20);
        pop();

    }
}