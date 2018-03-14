// Global variables
var numPoints = 50;
var backgroundColor = '#ef3e4a';
var particleColor = '#95ccd0';
var particles = new Array();
   

function setup() {
    createCanvas(displayWidth, displayHeight);
   
   // Add particles to array
  for(var i = 0; i < numPoints; i++){
    particles.push( new Particle() );
  }

}

function draw() {
  background(backgroundColor);
  
  for(var i = 0; i < numPoints; i++){
    var p = particles[i];
    
    // Update position
    p.update();
    for(var j = 0; j < numPoints; j++){
    var p2 = particles[j];
    
    if(i != j){
       // Calculate distance
       var dst = dist(p.loc.x, p.loc.y, p2.loc.x, p2.loc.y);
        if(dst < 150){
         strokeWeight(1);
         stroke(255, 50);
         line(p.loc.x, p.loc.y, p2.loc.x, p2.loc.y);
        }
      }
      
    }
    
    p.render();
    
    if( p.isDead() ){
    particles.splice(i, 1);
    particles.push( new Particle() );
  }
    
  }
} //eo draw

/* Particle Class */
function Particle() {
  
  this.loc = createVector(random(displayWidth), random(100, displayHeight-100));
  this.vel = createVector(random(-2,2), random(-1, 1));
  this.c = color(particleColor);
  
  this.update = function() {
    this.loc.add(this.vel);
  }
  
  this.render = function() {
    stroke(this.c);
    strokeWeight(7);
    point(this.loc.x, this.loc.y);
  }
  
  this.isDead = function() {
    if (this.loc.x < 0 || this.loc.x > displayWidth || this.loc.y < 0 || this.loc.y > displayHeight){
      return true;
    }else{
      return false;
    }
  }

}