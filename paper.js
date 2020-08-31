class paper{
    constructor(x,y,width,height){
        var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
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
    stroke("green")
    fill(255);
    rect(p.x,p.y,this.width,this.height)
    pop()
   }
}
