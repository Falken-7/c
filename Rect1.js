class Rect1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':90,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      rectMode(CENTER);
      fill("grey");
      rect(0, 0, this.width, this.height);
      pop()
      
      fill("grey");
      strokeWeight(2);
      //Create the semicircle above the two rectangles
arc(175,345,135,135,180,0);

      
    }
  };