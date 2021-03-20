class Ground {
    constructor(x,y){
    var    options ={
            'isStatic': true
        }

        this.body = Bodies.rectangle(x,y,400,50,options);
        World.add(world,this.body)
    }
  displayGround(){
      var pos = this.body.position

      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);

  }

};