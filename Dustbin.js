class Dustbin {
    constructor(x,y,width,height){
    var options = {
    'restitution':0,
    'fricytion':1,
    'density':0.1

    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;

    World.add(world, this.body);

    }
display(){}
    rectmode(CENTER)

    fill(255);

    rect(this.body.position.x,this.body.position.y,this.width,this. height);    
    

 }

    };  