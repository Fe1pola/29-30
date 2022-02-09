class Line{
    constructor(obj1, obj2){
        var constraint_options = {
            bodyA: obj1,
            pointB: obj2,
            stiffness: 0.06,
            length: 17
        }

        this.pointB = obj2;
        this.line = Constraint.create(constraint_options);
        World.add(world, this.line);

    }

    display(){
        if(this.line.bodyA != null){
            var pos1 = this.line.bodyA.position;
            var pos2 = this.pointB;	
            strokeWeight(2);
            line(pos1.x, pos1.y, pos2.x, pos2.y);
        }
    }

    fly(){
        this.line.bodyA = null;
    }

    attach(body){
        this.line.bodyA = body;
    }


}