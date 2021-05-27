class Ball{
    constructor(x,y,r){   
        var Order2 = {
        restitution:1
      }
      
     this.body = Bodies.circle(x,y,r,Order2);
      World.add(world,this.body)
      this.r=r
     
        this.img = loadImage('sprites/crane.jpg');
    }

       display(){
        image(this.img,420,200,500,600);
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y,2*this.r,2*this.r);
       
        
      
    }

}