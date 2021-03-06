class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprite/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    for (var i=0; i<this.trajectory.length; i=i++){
      (this.smokeImage,this.trajectory[i][0],  this.trajectory[i][1]);
    }
    
    if(this.body.velocity.x>1 && this.body.position.x>2){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
  }
}
