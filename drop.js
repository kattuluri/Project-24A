class drop{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:0.7
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 10;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
       var p = this.body.position
       var a = this.body.angle 
       push()
       translate(p.x,p.y)
       rotate(a)
       rectMode(CENTER)
       strokeWeight(4)
       stroke("brown")
       fill(255);
       rect(p.x,p.y,this.width,this.height)
       pop()
    }
}