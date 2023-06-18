function preload(){
    img = loadImage("photo frame.png")
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    
}
function draw(){
    image(img,0,0,600,400);
    image(webcam,140,100,330,220);
   
}
function take_snapshot(){
    save('snapshot.png');
}
