class Throw {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.01,
      length: 10,
    };
    this.pointB = pointB;
    this.throw = Constraint.create(options);
    World.add(world, this.throw);
  }
  fly() {
    this.throw.bodyA = null;
  }
  Launch(bodyA) {
    this.throw.bodyA = bodyA;
  }
  display() {
      if (this.throw.bodyA){
            var pointA = this.throw.bodyA.position;
            var pointB = this.pointB; 
        push();
        stroke(246, 246, 246);
        if (pointA.x < 220) {
          strokeWeight(7);
          line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
          line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        } else {
          strokeWeight(3);
          line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
          line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
    
        }
        pop();
    
      }
  }
}