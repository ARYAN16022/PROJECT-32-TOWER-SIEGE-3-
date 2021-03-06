class stone {
  constructor(x, y, radius) {
    var options = {
      restitution: 0.3,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("sprite/polygon.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    fill("yellow");
    image(this.image, pos.x, pos.y, this.radius, this.radius);
  }
}
