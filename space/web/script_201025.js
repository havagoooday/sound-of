let bg, rainbow, flowers_white, flowers_orange;
let audio_cloud, audio_rainbow, audio_flowers;
let ratio = 0.6;
let scale;
let x, y;
let distance;
let vx, vy;
let r_flowers, r_rainbow, r_cloud;

function setup() {
createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    bg = loadImage('src/img/granada_cloud.png');
    rainbow = loadImage('src/img/granada_rainbow.png');
    flowers_orange = loadImage('src/img/granada_flowers_orange.png');
    flowers_white = loadImage('src/img/granada_flowers_white.png');
    
    audio_cloud = loadSound('src/audio/granada_cloud.mp3');
    audio_rainbow = loadSound('src/audio/granada_rainbow.mp3');
    audio_flowers = loadSound('src/audio/granada_flowers.mp3');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255, 255, 255);
    
    scale = ratio*windowWidth;
    distance = 20;
    
    x = 0.5*windowWidth-mouseX/distance;
    y = 0.5*windowHeight-mouseY/distance;
    vx = mouseX/distance;
    vy = mouseY/distance;
    
    r_flowers = dist(mouseX, mouseY, 1.345*x + vx, y +0.15*scale - vy);
    r_rainbow = dist(mouseX, mouseY, x - 10*vx, y-0.3*scale -3*vy);
    r_cloud = dist(mouseX, mouseY, x - 5*vx, y);

    
    //bg
    image(bg, x, y, scale, bg.height*scale/bg.width);
    
    //flowers_orange
    image(flowers_orange, 1.345*x - vx, y+0.1*scale - vy, 0.69*scale, flowers_orange.height*0.69*scale/flowers_orange.width);
    //flowers_white
    image(flowers_white, 1.35*x - 0.8*vx, y+0.1*scale - 0.8*vy, 0.69*scale, flowers_white.height*0.69*scale/flowers_white.width);
    
    //rainbow
    image(rainbow, x + 3*vx, y-0.18*scale -2*vy, 1.772*scale, rainbow.height*1.772*scale/rainbow.width);
    
    if ((r_flowers < 0.3*0.69*scale) || (r_rainbow < 0.2*scale)) {
        cursor('pointer');
    } else if (r_cloud < 0.15*scale) {
        cursor('pointer');
    } else {
        cursor('default')
    }
}


function mouseClicked() {
    print(r_flowers);
    print(0.69*scale);
    if (r_flowers < 0.3*0.69*scale) {
        audio_flowers.play();
    } else if (r_rainbow < 0.2*scale) {
        audio_rainbow.play();
    } else if (r_cloud < 0.15*scale) {
        audio_cloud.play();
    }
}