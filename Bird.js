class Bird extends BaseClass {
  constructor(posx,posy){
    super(posx,posy,50,50);
    this.image = loadImage("sprites/bird.png");
    this.position = {x: posx, y: posy};
    this.hasFired=false;
    this.trajectory = [];
    this.smokeimg = loadImage("sprites/smoke.png");
    this.smoketimer = 0;
  }

  display() {
    this.smoketimer++;
    if(this.smoketimer>=1 && this.hasFired==true) {
      this.smoketimer=0;
      var birdpos = this.body.position
      birdpos.speed = this.body.speed;
      this.trajectory.push({x:birdpos.x, y:birdpos.y, speed: birdpos.speed});
    }
    if(!this.hasFired) {
      Matter.Body.setPosition(this.body, this.position);
    }
    this.trajectory.forEach((smoke, index)=>{
      if(smoke.x<700&&smoke.speed>3){
      push();
      imageMode(CENTER);
      image(this.smokeimg, smoke.x, smoke.y, 10, 10);
      pop();}
    })

    super.display();
  }
}
