var colors = "fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0".split("-").map(a=>"#"+a)
class Ball{
constructor(args){ //預設值
this.r =args.r || random(150)
this.p = args.p || {x:random(width),y:random(height)} //位置
this.v = {x:random(-1,1),y:random(-1,1)}
this.a = args.a || {x:0 , y:0}
this.color = random(colors)
}
draw() //繪製
{
push()
translate(this.p.x, this.p.y)
fill(this.color)
ellipse (0,0, this.r);
ellipse (-this.r/2,-this.r/2, this.r/2)
ellipse (this.r/2,-this.r/2, this.r/2)
ellipse (this.r/4,-this.r/4, this.r/8)
fill(255)
//arc(0,0,this.r/2,this.r/2,0,PI);
ellipse (0,0, this.r/2)
fill(0)
//arc(0,0,this.r/3,this.r/3,0,PI)
ellipse (0,0, this.r/3)
ellipse (this.r/4,-this.r/4, this.r/8)
ellipse (-this.r/4,-this.r/4, this.r/8)
pop()
}
update(){ //運作的動作
this.p.x += this.v.x
this.p.y += this.v.y
this.v.x = this.v.x + this.a.x
this.v.y = this.v.y + this.a.y
this.v.x*=0.999
this.v.y=this.v.y * 0.999
if(this.p.y>height){
this.v.y = -abs(this.v.y)
}
}
}

var ball
var balls = []
function setup() {
createCanvas(windowWidth, windowHeight);
background(100);
for(var i=0;i<20;i++){
ball = new Ball({
a:{x:0, y:0.5},
p:{x:width/2,y:0}
}) //產生一個新的Ball class元件
balls.push(ball)
}
}

function draw() {
background(0);
//for(var i =0;i<balls.length;i++){
//let ball = balls[i]
for(let ball of balls){ //陣列取資料的寫法
ball.draw()
ball.update()
}
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}