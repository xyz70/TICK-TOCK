var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 


function preload (){
   
}
function setup(){
    createCanvas(1350,650); 

    
    angleMode(DEGREES);   
}

function draw(){
    background("black");
    textSize(30);
    fill("white");
    text("12", 183, 107);

    textSize(30);
    fill("white");
    text("3",300, 210);

    textSize(30);
    fill("white");
    text("6", 194 , 318);

    textSize(30);
    fill("white");
    text("9", 80 , 215);

    textSize(45);
    stroke("white");
    strokeWeight(1);
    fill("white");
    text(" ***TICK TOCK CLOCK*** " , 600 , 100);

    textSize(40);
    fill("darkgreen");
    text(" <<< Green stands for Second Hand >>> " , 540 , 210);

    textSize(40);
    fill("yellow");
    text(" <<< Yellow stands for Minute Hand >>> " , 540 , 290);

    textSize(40);
    fill("purple");
    text(" <<< Purple stands for Hour Hand >>> " , 540 , 360);
   
    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

   
    push();
    rotate(scAngle); 
    stroke("darkgreen");
    strokeWeight(2);
    line(0,0,100,0);
    pop()

  
    push();
    rotate(mnAngle);
    stroke("yellow");
    strokeWeight(4);
    line(0,0,75,0);
    pop()

   
    push();
    rotate(hrAngle);
    stroke("purple");
    strokeWeight(6);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

   
    noFill();
    //Seconds
    stroke("darkgreen");
    strokeWeight(5);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke("yellow");
    strokeWeight(6);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke("purple");
    strokeWeight(7);
    arc(0,0,260,260,0,hrAngle);

   
    drawSprites();
}