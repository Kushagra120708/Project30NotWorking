class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if (pointA.x < 160) {
                strokeWeight(7);
                fill("#3FDFCD")
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            else{
                strokeWeight(3);
                fill("#3FDFCD")
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            pop();
        }
    }
    
}