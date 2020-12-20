let bg, sunset_building, sunset_sky, day_building, day_sky, mom, bae, mom_line, bae_line;
let audio_day_building, audio_day_sky, audio_sunset_building, audio_sunset_sky, audio_mom, audio_bae;
let ratio = 0.6;
let scale;
let x, y;
let distance;
let vx, vy;
let r_mom, r_bae, r_day_building, r_day_sky, r_sunset_building, r_sunset_sky;

function setup() {
createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    bg = loadImage('src/img/helsinki_grass.png');
    sunset_building = loadImage('src/img/helsinki_building_sunset.png');
    day_building = loadImage('src/img/helsinki_building_day.png');
    sunset_sky = loadImage('src/img/helsinki_sky_sunset.png');
    day_sky = loadImage('src/img/helsinki_sky_day.png');
    mom = loadImage('src/img/helsinki_mom.png');
    mom_line = loadImage('src/img/helsinki_mom_line.png');
    bae = loadImage('src/img/helsinki_bae.png');
    bae_line = loadImage('src/img/helsinki_bae_line.png');
    
    
    audio_day_building = loadSound('src/audio/helsinki_day_building.mp3');
    audio_day_sky = loadSound('src/audio/helsinki_day_sky.mp3');
    audio_sunset_building = loadSound('src/audio/helsinki_sunset_building.mp3');
    audio_sunset_sky = loadSound('src/audio/helsinki_sunset_sky.mp3');
    audio_mom = loadSound('src/audio/helsinki_mom.mp3');
    audio_bae = loadSound('src/audio/helsinki_bae.mp3');
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
    
    r_mom = dist(mouseX, mouseY, x - 0.5*scale - 2*vx, y - 0.4*scale - 2.5*vy);
    r_bae = dist(mouseX, mouseY, x + 0.3*scale + 4*vx, y + 0.3*scale + 2*vy);
    r_day_building = dist(mouseX, mouseY, x - vx, y + 0.1*scale +vy);
    r_day_sky = dist(mouseX, mouseY, x + 2*vx, y + 0.2*scale + 1.5*vy);
    r_sunset_building = dist(mouseX, mouseY, x + vx, y - 0.1*scale - vy);
    r_sunset_sky = dist(mouseX, mouseY, x - 2*vx, y -0.18*scale -2*vy);


    
    //bg
    image(bg, x, y + 0.05*scale, scale, bg.height*scale/bg.width);
    
    //sunset
    image(sunset_building, x + vx, y - 0.1*scale - vy, scale, sunset_building.height*scale/sunset_building.width);
    
    image(sunset_sky, x - 2*vx, y -0.18*scale -2*vy, scale, sunset_sky.height*scale/sunset_sky.width);
    
    //day
    image(day_building, x - vx, y + 0.1*scale +vy, scale, day_building.height*scale/day_building.width);
    
    image(day_sky, x + 2*vx, y + 0.2*scale + 1.5*vy, scale, day_sky.height*scale/day_sky.width);
    
    //line
    image(mom_line, x - 0.2*scale - 2*vx, y -2*vy, 0.5*scale, mom_line.height*0.5*scale/mom_line.width);
    
    image(bae_line, x + 0.1*scale + 3*vx, y + 0.4*scale + 1.5*vy, 0.5*scale, bae_line.height*0.5*scale/bae_line.width);
    
    //mom & bae
    image(mom, x - 0.5*scale - 2*vx, y - 0.3*scale - 2.5*vy, 0.2*scale, mom.height*0.2*scale/mom.width);
    
    image(bae, x + 0.3*scale + 4*vx, y + 0.3*scale + 2*vy, 0.3*scale, bae.height*0.3*scale/bae.width);
    

    
    if (r_mom < 0.1*scale) {
        cursor('pointer');
    } else if (r_bae < 0.2*scale) {
        cursor('pointer');
    } else if (r_day_building < 0.1*scale) {
        cursor('pointer');
    } else if (r_day_sky < 0.15*scale) {
        cursor('pointer');
    } else if (r_sunset_building < 0.15*scale) {
        cursor('pointer');
    } else if (r_sunset_sky < 0.15*scale) {
        cursor('pointer');
    } else {
        cursor('default')
    }
}


function mouseClicked() {
    if (r_mom < 0.1*scale) {
        audio_mom.play();
    } else if (r_bae < 0.1*scale) {
        audio_bae.play();
    } else if (r_day_building < 0.1*scale) {
        audio_day_building.play();
    } else if (r_day_sky < 0.1*scale) {
        audio_day_sky.play();
    } else if (r_sunset_building < 0.1*scale) {
        audio_sunset_building.play();
    } else if (r_sunset_sky < 0.1*scale) {
        audio_sunset_sky.play();
    }
}