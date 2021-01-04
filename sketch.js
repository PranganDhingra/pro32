const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var Hexagon;
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15;
var obj_1, obj_2, obj_3, obj_4, obj_5, obj_6, obj_7, obj_8, obj_9, obj_10
var roof1, roof2;
var rubberband;
var bgimg;
var gamestate="onsling";
var Score=0;

function preload() {
   
    bgimg=loadImage("bg.jpg");

}

function setup(){

    var canvas=createCanvas(1100, 600);
    engine = Engine.create();
    world = engine.world;

    roof1=new Self(550, 400, 300, 20);

    obj1=new SBox(650, 365, 50, 50);
    obj2=new SBox(600,  365, 50, 50);
    obj3=new SBox(550,  365, 50, 50);
    obj4=new SBox(500,  365, 50, 50);
    obj5=new SBox(450, 365, 50, 50);

    obj6=new SBox(625, 315, 50, 50);
    obj7=new SBox(575,  315, 50, 50);
    obj8=new SBox(525,  315, 50, 50);
    obj9=new SBox(475,  315, 50, 50);

    obj10=new SBox(600, 265, 50, 50);
    obj11=new SBox(550, 265, 50, 50);
    obj12=new SBox(500, 265, 50, 50);

    obj13=new SBox(575, 215, 50, 50);
    obj14=new SBox(525, 215, 50, 50);

    obj15=new SBox(550, 165, 50, 50);

    roof2=new Self(950, 300, 250, 20);

    obj_1=new SBox(875, 265, 50, 50);
    obj_2=new SBox(925, 265, 50, 50);
    obj_3=new SBox(975, 265, 50, 50);
    obj_4=new SBox(1025, 265, 50, 50);

    obj_5=new SBox(900, 215, 50, 50);
    obj_6=new SBox(950, 215, 50, 50);
    obj_7=new SBox(1000, 215, 50, 50);

    obj_8=new SBox(925, 165, 50, 50);
    obj_9=new SBox(975, 165, 50, 50);

    obj_10=new SBox(950, 115, 50, 50);

    Hexagon=new Polygon(150, 450, 100, 100);

    rubberband=new Slingshot(Hexagon.body, {x:150, y:450});


}

function draw(){

    background(bgimg);
    Engine.update(engine);
    stroke('black')
    strokeWeight(1);
    roof1.display();
    fill(0, 0, 255)
    obj1.display();
    obj2.display();
    obj3.display();
    obj4.display();
    obj5.display();
    fill(252, 235, 0)
    obj6.display();
    fill(254, 211, 2)
    obj7.display();
    obj8.display();
    fill(252, 235, 0)
    obj9.display();
    fill(91, 81, 206)
    obj10.display();
    obj11.display();
    obj12.display();
    fill(32, 3, 61)
    obj13.display();
    obj14.display();
    fill(190, 216, 253)
    obj15.display();

    roof2.display();
    fill(32, 163, 193)
    obj_1.display();
    obj_2.display();
    obj_3.display();
    obj_4.display();
    fill(112, 53, 195)
    obj_5.display();
    obj_6.display();
    obj_7.display();
    fill(253, 254, 4)
    obj_8.display();
    obj_9.display();
    fill(96, 184, 245);
    obj_10.display();

    rubberband.display();
    Hexagon.display();
    
    
    
    obj1.score();
    obj2.score();
    obj3.score();
    obj4.score();
    obj5.score();
    obj6.score();
    obj7.score();
    obj8.score();
    obj9.score();
    obj10.score();
    obj11.score();
    obj12.score();
    obj13.score();
    obj14.score();
    obj15.score();

    obj_1.score();
    obj_2.score();
    obj_3.score();
    obj_4.score();
    obj_5.score();
    obj_6.score();
    obj_7.score();
    obj_8.score();
    obj_9.score();
    obj_10.score();

    textSize(15)
    text("Score="+Score, 1000, 50 )
 
    console.log(hour)
}

function mouseDragged(){
    if(gamestate!="launched"){
        Matter.Body.setPosition(Hexagon.body, {x: mouseX , y: mouseY});
    }
    }

 function mouseReleased(){
        rubberband.fly();
        gamestate="launched";
 }

 function keyPressed(){
     if(keyCode == 32&& gamestate=="launched"||Hexagon.body.position.y>height||Hexagon.body.speed>1){
     rubberband.attach(Hexagon.body);
     gamestate="onsling"
     }
   
 }

 async function getTime(){

    var response=await fetch("https://timezoneapi.io/api/timezone/?Europe/Paris&token=NvZiSkDCTKuc");
    var responseJSON=await response.json();
    var time=responseJSON.time;
    var hour=time.slice(0, 3);
    
    if(hour>=06||hour<=17){
        bgimg=loadImage("bg.jpg");
    }
    if(hour>=18||hour<=05){
        bgimg=loadImage("bg2.jpg")
    }
  
}

