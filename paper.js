class Paper 
{
constructor(x,y,r)
{
var options = {
isStatic :false,
restitution:0.3,
friction :0.5,
density : 1.2
}
this.body = Bodies.circle(x,y,r,options) 
this.radius = r;
World.add(world,this.body)
}
display()
{
ellipseMode(CENTER)
fill("red")
ellipse(this.body.position.x,this.body.position.y,this.radius,20);

}



}