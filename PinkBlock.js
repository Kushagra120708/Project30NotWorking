class PinkBlock extends Block{
    constructor(x, y) {
        super(x,y,40,55)
    }
    display() {
     fill(255,192,203);
     if (this.body.speed < 3) {
        super.display();
     }
     else{
         World.remove(world,this.body);
         push();
         this.visibility = this.visibility - 5;
         tint(255,this.visibility);
         pop();
     }
    }
}