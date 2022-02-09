class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.sumidao = 255;
        this.image = loadImage("block.png");
      }
      display(){

        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0,0,this.width, this.height);
          pop();
        }else{
          push();
          World.remove(world, this.body);
          tint(255, this.sumidao);
          image(this.image, this.body.position.x, this.body.position.y, 30, 40);
          this.sumidao = this.sumidao - 5;
          pop();
        }

        
      }
}
