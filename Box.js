class SBox{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.2,
          'density':1.0,
          'isStatic':false
      }
      this.box = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.visibility=255
      World.add(world, this.box);
    }

    score(){
      if(this.visibility<0&&this.visibility >-105){
        Score++;
      }
    }

    display(){
     
     if(this.box.position.y<400){
      push()
      rectMode(CENTER);
      translate(this.box.position.x, this.box.position.y)
      rotate(this.box.angle)
      rect( 0, 0, this.width, this.height);
      pop()
     }
     else{
       World.remove(world, this.box);
       push()
       this.visibility=this.visibility-5 
       pop();
        
      
    }
}
}