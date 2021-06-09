
function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255,0, 0);
    circle(150,100,80);

    circle(500,100,80);
    
    circle(500,350,80);

    circle(150,350,80);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90, 30, 460, 20);

    rect(90, 429, 460, 20);
  
    rect(40, 90, 20, 300);
  
    rect(580, 90, 20, 300);
  }
  
  function take_snapshot()
{
    save('My_selfie.png');
}