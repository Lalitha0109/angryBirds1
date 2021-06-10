class Box{
    constructor(x,y){
        this.body=Matter.Bodies.rectangle(x,y,100,100,{restitution:0.6,friction:1});
        
        Matter.World.add(world,this.body);
    }

    display(){
        push ();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("white");
        rect(0,0,100,100);
        pop();

    }


}