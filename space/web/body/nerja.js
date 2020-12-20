let bg, wave, people;
let audio_leaf, audio_wave, audio_people;
let ratio = 0.6;
let scale;
let x, y;
let distance;
let vx, vy;
let r_leaf, r_wave, r_people;

function setup() {
createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    bg = loadImage('src/img/nerja_leaf.png');
    wave = loadImage('src/img/nerja_wave.png');
    people = loadImage('src/img/nerja_people.png');
    
    audio_leaf = loadSound('src/audio/nerja_leaf.mp3');
    audio_people = loadSound('src/audio/nerja_people.mp3');
    audio_wave = loadSound('src/audio/nerja_wave.mp3');
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
    
    r_leaf = dist(mouseX, mouseY, x + vx, y +0.3*scale - vy);
    r_wave = dist(mouseX, mouseY, x - 3*vx, y - 0.05*scale +3*vy);
    r_people = dist(mouseX, mouseY, x - 0.35*scale - 5*vx, y - 0.3*scale);

    
    //bg
    image(bg, x, y, scale, bg.height*scale/bg.width);
    
    //wave
    image(wave, x + vx, y + 0.05*scale - vy, scale, wave.height*scale/wave.width);
    
    //people
    image(people, 0.5*x + 3*vx, y-0.18*scale -2*vy, 0.5*scale, people.height*0.5*scale/people.width);
    
    if (r_wave < 0.1*scale) {
        cursor('pointer');
    } else if (r_people < 0.2*scale) {
        cursor('pointer');
    } else if (r_leaf < 0.15*scale) {
        cursor('pointer');
    } else {
        cursor('default')
    }
}


function mouseClicked() {
    if (r_wave < 0.1*scale) {
        audio_wave.play();
    } else if (r_people < 0.2*scale) {
        audio_people.play();
    } else if (r_leaf < 0.15*scale) {
        audio_leaf.play();
    }
}